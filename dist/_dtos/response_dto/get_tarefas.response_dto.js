"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTarefasResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class GetTarefasResponseDTO extends response_dto_1.ResponseDTO {
    constructor(tarefa) {
        super();
        this.tarefas = tarefa;
    }
}
exports.GetTarefasResponseDTO = GetTarefasResponseDTO;
