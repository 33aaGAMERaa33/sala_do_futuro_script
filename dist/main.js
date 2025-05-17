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
dotenv_1.default.config();
const senha = process.env.SENHA;
const login = process.env.LOGIN;
const digito = process.env.DIGITO;
const estado = process.env.ESTADO;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!login || !digito || !estado || !senha) {
            throw "Dados faltando";
        }
        try {
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
            const atividadeData = yield get_atividade_service_1.GetAtividadeService.getAtividade(new get_atividade_request_dto_1.GetAtividadeRequestDTO({
                previewMode: false,
                type: atividade_request_type_enum_1.AtividadeRequestType.apply,
                authToken: authTokenData.authToken,
                atividadeId: tarefasData.tarefas[0].id,
            }));
            atividadeData.tiposNaoRegistrados.map(() => {
                throw "Não é possivel continuar, pois tem questões sem suporte";
            });
        }
        catch (e) {
            console.error("Algo deu errado: " + e.statusText);
        }
    });
}
start();
