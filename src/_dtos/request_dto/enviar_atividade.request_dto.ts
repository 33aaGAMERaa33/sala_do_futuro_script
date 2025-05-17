import { RequestDTO } from "../../core/request_dto";
import { EnviarAtividadeType } from "../../enums/enviar_atividade_type.enum";

export class EnviarAtividadeRequestDTO extends RequestDTO {
    readonly tarefaID: number;
    readonly duration: number;
    readonly authToken: string;
    readonly answerID?: number;
    readonly executedOn: string;
    readonly answerAccessedOn: string;
    readonly answerExecutedOn: string;
    readonly type: EnviarAtividadeType;
    readonly aswers: Record<string, any>;

    constructor(data: EnviarAtividadeRequestDTOContructor) {
        super();
        this.type = data.type;
        this.aswers = data.aswers;
        this.duration = data.duration;
        this.tarefaID = data.tarefaID;
        this.authToken = data.authToken;
        this.executedOn = data.executedOn;
        this.answerID = data.answerID;
        this.answerAccessedOn = data.answerAccessedOn;
        this.answerExecutedOn = data.answerExecutedOn
    }
}

export interface EnviarAtividadeRequestDTOContructor {
    tarefaID: number;
    duration: number;
    authToken: string;
    executedOn: string;
    answerID?: number;
    type: EnviarAtividadeType;
    aswers: Record<string, any>;
    answerAccessedOn: string;
    answerExecutedOn: string;
}