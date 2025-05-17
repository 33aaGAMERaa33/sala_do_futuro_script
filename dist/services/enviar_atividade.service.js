"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarAtividadeService = void 0;
const controller_1 = require("../controllers/enviar_atividade/controller");
const api_request_1 = require("./api_request");
class EnviarAtividadeService {
    constructor() { }
    static enviarAtividade(requestDTO) {
        return api_request_1.ApiRequest.request(new controller_1.EnviarAtivadeController(requestDTO));
    }
}
exports.EnviarAtividadeService = EnviarAtividadeService;
