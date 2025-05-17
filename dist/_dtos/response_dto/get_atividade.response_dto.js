"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class GetAtividadeResponseDTO extends response_dto_1.ResponseDTO {
    constructor(atividade, tiposNaoRegistrados) {
        super();
        this.atividade = atividade;
        this.tiposNaoRegistrados = tiposNaoRegistrados;
    }
}
exports.GetAtividadeResponseDTO = GetAtividadeResponseDTO;
