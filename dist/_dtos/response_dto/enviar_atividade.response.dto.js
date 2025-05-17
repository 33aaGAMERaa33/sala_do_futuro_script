"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarAtividadeResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class EnviarAtividadeResponseDTO extends response_dto_1.ResponseDTO {
    constructor(answers) {
        super();
        this.answers = answers;
    }
}
exports.EnviarAtividadeResponseDTO = EnviarAtividadeResponseDTO;
