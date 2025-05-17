import { AtividadeType } from "../../enums/atividade_type";
import { Question } from "../../models/question.model";

export interface AtividadeModelConstructor {
    title: string;
    type: AtividadeType;
    description: string;
    maxExecutionTime?: number;
    minExecutionTime?: number;
    questions: Question[];
}