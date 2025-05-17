export class Tarefa {
    readonly id: number;
    readonly title: string;
    readonly answerID?: number;
    readonly description: string;
    readonly answerAccessedOn: string;
    readonly answerExecutedOn: string;

    constructor(data: TarefaConstructor){
        this.id = data.id;
        this.title = data.title;
        this.answerID = data.answerID;
        this.description = data.description;
        this.answerAccessedOn = data.answerAccessedOn;
        this.answerExecutedOn = data.answerExecutedOn;
    }
}

export interface TarefaConstructor {
    id: number;
    title: string;
    answerID?: number;
    description: string;
    answerAccessedOn: string;
    answerExecutedOn: string;
}