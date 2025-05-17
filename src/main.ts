import dotenv from "dotenv";
import { LoginService } from "./services/login.service";
import { LoginRequestDTO } from "./_dtos/request_dto/login.request_dto";
import { GetAuthTokenService } from "./services/get_auth_token.service";
import { error } from "console";
import { GetTarefasService } from "./services/get_tarefas.service";
import { GetTarefasRequestDTO } from "./_dtos/request_dto/get_tarefas.request_dto";
import { UserService } from "./services/user.service";
import { UserRequestDTO } from "./_dtos/request_dto/user.request_dto";
import { GetAtividadeService } from "./services/get_atividade.service";
import { GetAtividadeRequestDTO } from "./_dtos/request_dto/get_atividade.request_dto";
import { AtividadeRequestType } from "./enums/atividade_request_type.enum";

dotenv.config();

const senha = process.env.SENHA;
const login = process.env.LOGIN;
const digito = process.env.DIGITO;
const estado = process.env.ESTADO;

async function start(){
    if(!login || !digito || !estado || !senha)  {
        throw "Dados faltando";   
    }

    try{
        console.log("Logando...");
        
        const loginData = await LoginService.logar(new LoginRequestDTO({
            digito: digito,
            estado: estado,
            login: login,
            senha: senha,
        }));
        
        console.log("Solicitando chave da api do edusp...");
        
        const authTokenData = await GetAuthTokenService.getAuthToken({
            token: loginData.token,
        });

        console.log("Solicitando dados do usuario...");

        const userData = await UserService.request(new UserRequestDTO({
            listAll: true,
            withCards: true,
            authToken: authTokenData.authToken,
        }));

        let publicationTargets: string[] = [];

        userData.rooms.forEach((value) => {
            publicationTargets.push(value.name);
            publicationTargets.push(`${value.name}:${authTokenData.nick}`);
            value.groupCategories.forEach((value) => {
                publicationTargets.push(value.id.toString());
            });
        });

        console.log("Solicitando tarefas...");

        const tarefasData = await GetTarefasService.getTarefas(new GetTarefasRequestDTO(authTokenData.authToken, {
            expiredOnly: false,
            filterExpired: false,
            publicationTargets: publicationTargets,
            answerStatuses: [
                "draft",
                "pending",
            ],
        }));

        console.log("Solicitando atividade...");

        const atividadeData = await GetAtividadeService.getAtividade(new GetAtividadeRequestDTO({
            previewMode: false,
            type: AtividadeRequestType.apply,
            authToken: authTokenData.authToken,
            atividadeId: tarefasData.tarefas[0].id,
        }));

        atividadeData.tiposNaoRegistrados.map(() => {
            throw "Não é possivel continuar, pois tem questões sem suporte";
        });
    }catch(e: any){
        console.error("Algo deu errado: " + e.statusText);
    }
}

start();