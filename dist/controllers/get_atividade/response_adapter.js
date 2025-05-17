"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeResponseAdapter = void 0;
const get_atividade_response_dto_1 = require("../../_dtos/response_dto/get_atividade.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
const atividade_model_1 = require("../../models/atividade.model");
const question_model_1 = require("../../models/question.model");
class GetAtividadeResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        let questions = [];
        const questionsSerialized = data.questions;
        const naoIncluirTipos = [
            "info",
        ];
        for (const questionSerialized of questionsSerialized) {
            if (naoIncluirTipos.includes(questionSerialized.type))
                continue;
            questions.push(new question_model_1.Question({
                id: questionSerialized.id,
                type: questionSerialized.type,
                statement: questionSerialized.statement,
                mediaUrl: questionSerialized.mediaUrl,
                mediaType: questionSerialized.mediaType,
                options: questionSerialized.options,
            }));
        }
        return new get_atividade_response_dto_1.GetAtividadeResponseDTO(new atividade_model_1.Atividade({
            type: data.type,
            title: data.title,
            questions: questions,
            description: data.description,
            minExecutionTime: data.min_execution_time,
            maxExecutionTime: data.max_execution_time,
        }));
    }
}
exports.GetAtividadeResponseAdapter = GetAtividadeResponseAdapter;
