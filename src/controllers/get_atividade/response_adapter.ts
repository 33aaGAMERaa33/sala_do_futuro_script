import { GetAtividadeResponseDTO } from "../../_dtos/response_dto/get_atividade.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";
import { QuestionType } from "../../enums/question_type.enum";
import { Atividade } from "../../models/atividade.model";
import { Question } from "../../models/question.model";
import { Options } from "../../models/question_options.model";
import { OptionsFillWords } from "../../models/question_options/options_fill_words.model";
import { OptionsMulti } from "../../models/question_options/options_multi.model";
import { Incorrect, OptionsOrderSentences } from "../../models/question_options/options_order_sentences.model";
import { OptionsSingle } from "../../models/question_options/options_single.model";
import { OptionsTrueFalse } from "../../models/question_options/options_true-false.model";

export class GetAtividadeResponseAdapter extends ResponseAdapter<GetAtividadeResponseDTO> {
    adapter(data: any): GetAtividadeResponseDTO {
        let questions: Question<any>[] = [];
        let tiposNaoReconhecidos: string[] = [];
        const questionsSerialized = data.questions;

        for(const questionSerialized of questionsSerialized) {
            const options = questionSerialized.options;
            const questionType = questionSerialized.type as QuestionType;

            switch(questionType){
                case QuestionType.multi:
                    questions.push(this.newOptions(questionSerialized, new OptionsMulti(options)));
                    break;
                case QuestionType.single:
                    questions.push(this.newOptions(questionSerialized, new OptionsSingle(options)));
                    break;
                case QuestionType.trueFalse:
                    questions.push(this.newOptions(questionSerialized, new OptionsTrueFalse(options)));
                    break;
                case QuestionType.fillWords:
                    questions.push(this.newOptions(questionSerialized, new OptionsFillWords({
                        type: options.type,
                        items: options.items,
                        phrase: options.phrase,
                    })));
                    break;
                case QuestionType.orderSentences:
                    questions.push(this.newOptions(questionSerialized, new OptionsOrderSentences({
                        sentences: options.sentences,
                        incorrects: options.incorrects.map((value: any) => {
                            return new Incorrect({
                                id: value.id,
                                value: value.value,
                            });
                        }),
                    })));
                    break;
                case QuestionType.info:
                    break;
                default:
                    tiposNaoReconhecidos.push(questionSerialized.type);
                    console.log("Tipo não registrado: " + questionSerialized.type);
                    break;
            }
        }

        return new GetAtividadeResponseDTO(new Atividade({
            type: data.type,
            title: data.title,
            questions: questions,
            description: data.description,
            minExecutionTime: data.min_execution_time,
            maxExecutionTime: data.max_execution_time,
        }), tiposNaoReconhecidos);
    }

    private newOptions<T extends Options>(questionSerialized: any, options: T) {
        return new Question<T>({
            options: options,
            id: questionSerialized.id,
            type: questionSerialized.type,
            mediaUrl: questionSerialized.mediaUrl,
            mediaType: questionSerialized.mediaType,
            statement: questionSerialized.statement,
        });
    }
}