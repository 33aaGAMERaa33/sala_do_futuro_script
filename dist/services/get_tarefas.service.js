"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTarefasService = void 0;
const controller_1 = require("../controllers/get_tarefas/controller");
const api_request_1 = require("./api_request");
class GetTarefasService {
    constructor() { }
    static getTarefas(requestDTO) {
        return api_request_1.ApiRequest.request(new controller_1.GetTarefasController(requestDTO));
    }
}
exports.GetTarefasService = GetTarefasService;
