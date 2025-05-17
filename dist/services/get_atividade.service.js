"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeService = void 0;
const controller_1 = require("../controllers/get_atividade/controller");
const api_request_1 = require("./api_request");
class GetAtividadeService {
    constructor() { }
    ;
    static getAtividade(requestDTO) {
        return api_request_1.ApiRequest.request(new controller_1.GetAtividadeController(requestDTO));
    }
}
exports.GetAtividadeService = GetAtividadeService;
