import { GetTarefasResponseDTO } from "../../_dtos/response_dto/get_tarefas.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";
import { Tarefa } from "../../models/tarefa.model";

export class GetTarefasResponseAdapter extends ResponseAdapter<GetTarefasResponseDTO> {
    adapter(data: any): GetTarefasResponseDTO {
        let tarefas: Tarefa[] = [];

        for(const tarefaSerialized of data) {
            tarefas.push(new Tarefa({
                id: tarefaSerialized.id,
                title: tarefaSerialized.title,
                answerID: tarefaSerialized.answer_id,
                description: tarefaSerialized.description,
                answerAccessedOn: tarefaSerialized.answer_accessed_on,
                answerExecutedOn: tarefaSerialized.answer_executed_on,
            }));
        }

        return new GetTarefasResponseDTO(tarefas);    
    }
}