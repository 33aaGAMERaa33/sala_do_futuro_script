"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class GetAtividadeResponseDTO extends response_dto_1.ResponseDTO {
    constructor(atividade) {
        super();
        this.atividade = atividade;
    }
}
exports.GetAtividadeResponseDTO = GetAtividadeResponseDTO;
