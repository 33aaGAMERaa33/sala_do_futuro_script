import { AtividadeModelConstructor } from "../_dtos/constructors/atividade.model.contructor";
import { AtividadeType } from "../enums/atividade_type";
import { Question } from "./question.model";

export class Atividade {
    readonly title: string;
    readonly type: AtividadeType;
    readonly description: string;
    readonly maxExecutionTime?: number;
    readonly minExecutionTime?: number;
    readonly questions: Question<any>[];

    constructor(data: AtividadeModelConstructor) {
        this.title = data.title;
        this.type = data.type;
        this.description = data.description;
        this.maxExecutionTime = data.maxExecutionTime;
        this.minExecutionTime = data.minExecutionTime;
        this.questions = data.questions;
    }
}