"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeResponseAdapter = void 0;
const get_atividade_response_dto_1 = require("../../_dtos/response_dto/get_atividade.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
const question_type_enum_1 = require("../../enums/question_type.enum");
const atividade_model_1 = require("../../models/atividade.model");
const question_model_1 = require("../../models/question.model");
const options_fill_words_model_1 = require("../../models/question_options/options_fill_words.model");
const options_multi_model_1 = require("../../models/question_options/options_multi.model");
const options_order_sentences_model_1 = require("../../models/question_options/options_order_sentences.model");
const options_single_model_1 = require("../../models/question_options/options_single.model");
const options_true_false_model_1 = require("../../models/question_options/options_true-false.model");
class GetAtividadeResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        let questions = [];
        let tiposNaoReconhecidos = [];
        const questionsSerialized = data.questions;
        for (const questionSerialized of questionsSerialized) {
            const options = questionSerialized.options;
            const questionType = questionSerialized.type;
            switch (questionType) {
                case question_type_enum_1.QuestionType.multi:
                    questions.push(this.newOptions(questionSerialized, new options_multi_model_1.OptionsMulti(options)));
                    break;
                case question_type_enum_1.QuestionType.single:
                    questions.push(this.newOptions(questionSerialized, new options_single_model_1.OptionsSingle(options)));
                    break;
                case question_type_enum_1.QuestionType.trueFalse:
                    questions.push(this.newOptions(questionSerialized, new options_true_false_model_1.OptionsTrueFalse(options)));
                    break;
                case question_type_enum_1.QuestionType.fillWords:
                    questions.push(this.newOptions(questionSerialized, new options_fill_words_model_1.OptionsFillWords({
                        type: options.type,
                        items: options.items,
                        phrase: options.phrase,
                    })));
                    break;
                case question_type_enum_1.QuestionType.orderSentences:
                    questions.push(this.newOptions(questionSerialized, new options_order_sentences_model_1.OptionsOrderSentences({
                        sentences: options.sentences,
                        incorrects: options.incorrects.map((value) => {
                            return new options_order_sentences_model_1.Incorrect({
                                id: value.id,
                                value: value.value,
                            });
                        }),
                    })));
                    break;
                case question_type_enum_1.QuestionType.info:
                    break;
                default:
                    tiposNaoReconhecidos.push(questionSerialized.type);
                    console.log("Tipo não registrado: " + questionSerialized.type);
                    break;
            }
        }
        return new get_atividade_response_dto_1.GetAtividadeResponseDTO(new atividade_model_1.Atividade({
            type: data.type,
            title: data.title,
            questions: questions,
            description: data.description,
            minExecutionTime: data.min_execution_time,
            maxExecutionTime: data.max_execution_time,
        }), tiposNaoReconhecidos);
    }
    newOptions(questionSerialized, options) {
        return new question_model_1.Question({
            options: options,
            id: questionSerialized.id,
            type: questionSerialized.type,
            mediaUrl: questionSerialized.mediaUrl,
            mediaType: questionSerialized.mediaType,
            statement: questionSerialized.statement,
        });
    }
}
exports.GetAtividadeResponseAdapter = GetAtividadeResponseAdapter;
