"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarAtividadeResponseAdapter = void 0;
const response_adapter_1 = require("../../core/response_adapter");
const enviar_atividade_response_dto_1 = require("../../_dtos/response_dto/enviar_atividade.response.dto");
class EnviarAtividadeResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        return new enviar_atividade_response_dto_1.EnviarAtividadeResponseDTO(data.answers);
    }
}
exports.EnviarAtividadeResponseAdapter = EnviarAtividadeResponseAdapter;
