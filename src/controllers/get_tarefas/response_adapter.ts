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
                description: tarefaSerialized.description,
            }));
        }

        return new GetTarefasResponseDTO(tarefas);    
    }
}