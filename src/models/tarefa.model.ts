import { TarefaConstructor } from "../_dtos/constructors/tarefa.model.contructor";

export class Tarefa {
    readonly id: number;
    readonly title: string;
    readonly description: string;

    constructor(data: TarefaConstructor){
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
    }
}