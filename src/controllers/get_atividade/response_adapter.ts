import { GetAtividadeResponseDTO } from "../../_dtos/response_dto/get_atividade.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";
import { Atividade } from "../../models/atividade.model";
import { Question } from "../../models/question.model";

export class GetAtividadeResponseAdapter extends ResponseAdapter<GetAtividadeResponseDTO> {
    adapter(data: any): GetAtividadeResponseDTO {
        let questions: Question[] = [];
        const questionsSerialized = data.questions;
        const naoIncluirTipos = [
            "info",
        ];

        for(const questionSerialized of questionsSerialized) {
            if(naoIncluirTipos.includes(questionSerialized.type)) continue;
            
            questions.push(new Question({
                id: questionSerialized.id,
                type: questionSerialized.type,
                statement: questionSerialized.statement,
                mediaUrl: questionSerialized.mediaUrl,
                mediaType: questionSerialized.mediaType,
                options: questionSerialized.options,
            }));
        }

        return new GetAtividadeResponseDTO(new Atividade({
            type: data.type,
            title: data.title,
            questions: questions,
            description: data.description,
            minExecutionTime: data.min_execution_time,
            maxExecutionTime: data.max_execution_time,
        }));
    }
}