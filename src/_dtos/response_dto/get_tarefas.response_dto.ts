import { ResponseDTO } from "../../core/response_dto";
import { Tarefa } from "../../models/tarefa.model";

export class GetTarefasResponseDTO extends ResponseDTO {
    readonly tarefas: Tarefa[];

    constructor(tarefa: Tarefa[]){
        super();
        this.tarefas = tarefa;
    }
}