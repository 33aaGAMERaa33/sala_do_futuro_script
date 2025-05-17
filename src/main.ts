import dotenv from "dotenv";
import { LoginService } from "./services/login.service";
import { LoginRequestDTO } from "./_dtos/request_dto/login.request_dto";
import { GetAuthTokenService } from "./services/get_auth_token.service";
import { GetTarefasService } from "./services/get_tarefas.service";
import { GetTarefasRequestDTO } from "./_dtos/request_dto/get_tarefas.request_dto";
import { UserService } from "./services/user.service";
import { UserRequestDTO } from "./_dtos/request_dto/user.request_dto";
import { GetAtividadeService } from "./services/get_atividade.service";
import { GetAtividadeRequestDTO } from "./_dtos/request_dto/get_atividade.request_dto";
import { AtividadeRequestType } from "./enums/atividade_request_type.enum";
import { GetResponseQuestionsService } from "./services/get_response_questions.service";
import { EnviarAtividadeRequestDTO } from './_dtos/request_dto/enviar_atividade.request_dto';
import { EnviarAtividadeType } from "./enums/enviar_atividade_type.enum";
import { EnviarAtividadeService } from "./services/enviar_atividade.service";

dotenv.config();

const senha = process.env.SENHA;
const login = process.env.LOGIN;
const digito = process.env.DIGITO;
const estado = process.env.ESTADO;
const apiKey = process.env.GEMINI_API_KEY;
// Caso a atividade tenha um tenho minimo, mas nao um maximo essa variavel vai entrar em ação
// Ela vai ser adicionada ao tempo minimo para gerar um tempo maximo
const tempoAddMinSeNaoTiverMax = 1;
// Auto explicativo
const tempoMinSeNaoTiver = 1;

async function start(){
    if(!login || !digito || !estado || !senha || !apiKey)  {
        throw "Dados faltando";   
    }

    try{
        console.log("Logando...");
        
        const loginResponse = await LoginService.logar(new LoginRequestDTO({
            digito: digito,
            estado: estado,
            login: login,
            senha: senha,
        }));
        
        console.log("Solicitando chave da api do edusp...");
        
        const getAuthTokenResponse = await GetAuthTokenService.getAuthToken({
            token: loginResponse.token,
        });

        console.log("Solicitando dados do usuario...");

        const userData = await UserService.request(new UserRequestDTO({
            listAll: true,
            withCards: true,
            authToken: getAuthTokenResponse.authToken,
        }));

        let publicationTargets: string[] = [];

        userData.rooms.forEach((value) => {
            publicationTargets.push(value.name);
            publicationTargets.push(`${value.name}:${getAuthTokenResponse.nick}`);
            value.groupCategories.forEach((value) => {
                publicationTargets.push(value.id.toString());
            });
        });

        console.log("Solicitando tarefas...");
        
        const getTarefasResponse = await GetTarefasService.getTarefas(new GetTarefasRequestDTO(getAuthTokenResponse.authToken, {
            expiredOnly: false,
            filterExpired: false,
            publicationTargets: publicationTargets,
            answerStatuses: [
                "draft",
                "pending",
            ],
        }));

        if(getTarefasResponse.tarefas.length <= 0){
            console.log("Nenhuma atividade para fazer");
            return;
        }

        console.log("Iniciando IA...");
        GetResponseQuestionsService.init(apiKey);

        for(const tarefa of getTarefasResponse.tarefas){
            console.log("Solicitando atividade: " + tarefa.title + "...");

            const atividadeData = await GetAtividadeService.getAtividade(new GetAtividadeRequestDTO({
                previewMode: false,
                atividadeId: tarefa.id,
                type: AtividadeRequestType.apply,
                authToken: getAuthTokenResponse.authToken,
            }));
            
            console.log("Pegando respostas da atividade");

            const respostas = await GetResponseQuestionsService.pedirResponstas(atividadeData.atividade.questions);

            let tempoMin = Math.ceil(atividadeData.atividade.minExecutionTime ?? tempoMinSeNaoTiver);
            let tempoMax = Math.floor(atividadeData.atividade.maxExecutionTime ?? tempoAddMinSeNaoTiverMax + tempoMin);

            const tempo = Math.floor(Math.random() * (tempoMax - tempoMin + 1)) + tempoMin;

            console.log("Enviando respostas...");

            const response = await EnviarAtividadeService.enviarAtividade(new EnviarAtividadeRequestDTO({
                tarefaID: tarefa.id,
                duration: tempo,
                aswers: respostas,
                answerID: tarefa.answerID,
                executedOn: getAuthTokenResponse.nick,
                type: EnviarAtividadeType.submitted,
                authToken: getAuthTokenResponse.authToken,
                answerAccessedOn: tarefa.answerAccessedOn,
                answerExecutedOn: tarefa.answerExecutedOn,
            }));
        }

    }catch(e: any){
        console.error("Algo deu errado: " + e.statusText);
    }
}

start();