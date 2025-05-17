"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const login_service_1 = require("./services/login.service");
const login_request_dto_1 = require("./_dtos/request_dto/login.request_dto");
const get_auth_token_service_1 = require("./services/get_auth_token.service");
const get_tarefas_service_1 = require("./services/get_tarefas.service");
const get_tarefas_request_dto_1 = require("./_dtos/request_dto/get_tarefas.request_dto");
const user_service_1 = require("./services/user.service");
const user_request_dto_1 = require("./_dtos/request_dto/user.request_dto");
const get_atividade_service_1 = require("./services/get_atividade.service");
const get_atividade_request_dto_1 = require("./_dtos/request_dto/get_atividade.request_dto");
const atividade_request_type_enum_1 = require("./enums/atividade_request_type.enum");
const get_response_questions_service_1 = require("./services/get_response_questions.service");
const enviar_atividade_request_dto_1 = require("./_dtos/request_dto/enviar_atividade.request_dto");
const enviar_atividade_type_enum_1 = require("./enums/enviar_atividade_type.enum");
const enviar_atividade_service_1 = require("./services/enviar_atividade.service");
dotenv_1.default.config();
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
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (!login || !digito || !estado || !senha || !apiKey) {
            throw "Dados faltando";
        }
        try {
            console.log("Iniciando IA...");
            get_response_questions_service_1.GetResponseQuestionsService.init(apiKey);
            console.log("Logando...");
            const loginData = yield login_service_1.LoginService.logar(new login_request_dto_1.LoginRequestDTO({
                digito: digito,
                estado: estado,
                login: login,
                senha: senha,
            }));
            console.log("Solicitando chave da api do edusp...");
            const authTokenData = yield get_auth_token_service_1.GetAuthTokenService.getAuthToken({
                token: loginData.token,
            });
            console.log("Solicitando dados do usuario...");
            const userData = yield user_service_1.UserService.request(new user_request_dto_1.UserRequestDTO({
                listAll: true,
                withCards: true,
                authToken: authTokenData.authToken,
            }));
            let publicationTargets = [];
            userData.rooms.forEach((value) => {
                publicationTargets.push(value.name);
                publicationTargets.push(`${value.name}:${authTokenData.nick}`);
                value.groupCategories.forEach((value) => {
                    publicationTargets.push(value.id.toString());
                });
            });
            console.log("Solicitando tarefas...");
            const tarefasData = yield get_tarefas_service_1.GetTarefasService.getTarefas(new get_tarefas_request_dto_1.GetTarefasRequestDTO(authTokenData.authToken, {
                expiredOnly: false,
                filterExpired: false,
                publicationTargets: publicationTargets,
                answerStatuses: [
                    "draft",
                    "pending",
                ],
            }));
            console.log("Solicitando atividade...");
            for (const tarefa of tarefasData.tarefas) {
                const atividadeData = yield get_atividade_service_1.GetAtividadeService.getAtividade(new get_atividade_request_dto_1.GetAtividadeRequestDTO({
                    previewMode: false,
                    atividadeId: tarefa.id,
                    type: atividade_request_type_enum_1.AtividadeRequestType.apply,
                    authToken: authTokenData.authToken,
                }));
                console.log("Pegando respostas da atividade: " + tarefa.title);
                const respostas = yield get_response_questions_service_1.GetResponseQuestionsService.pedirResponstas(atividadeData.atividade.questions);
                let tempoMin = Math.ceil((_a = atividadeData.atividade.minExecutionTime) !== null && _a !== void 0 ? _a : tempoMinSeNaoTiver);
                let tempoMax = Math.floor((_b = atividadeData.atividade.maxExecutionTime) !== null && _b !== void 0 ? _b : tempoAddMinSeNaoTiverMax + tempoMin);
                const tempo = Math.floor(Math.random() * (tempoMax - tempoMin + 1)) + tempoMin;
                console.log("Enviando respostas...");
                const response = yield enviar_atividade_service_1.EnviarAtividadeService.enviarAtividade(new enviar_atividade_request_dto_1.EnviarAtividadeRequestDTO({
                    tarefaID: tarefa.id,
                    duration: tempo,
                    aswers: respostas,
                    answerID: tarefa.answerID,
                    executedOn: authTokenData.nick,
                    type: enviar_atividade_type_enum_1.EnviarAtividadeType.submitted,
                    authToken: authTokenData.authToken,
                    answerAccessedOn: tarefa.answerAccessedOn,
                    answerExecutedOn: tarefa.answerExecutedOn
                }));
            }
        }
        catch (e) {
            console.error("Algo deu errado: " + e.statusText);
        }
    });
}
start();
