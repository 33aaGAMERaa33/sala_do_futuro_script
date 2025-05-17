import { QuestaoModelConstructor } from "../_dtos/constructors/questao.model.contructor";
import { QuestionType } from "../enums/question_type.enum";
import { QuestionMediaType } from "../enums/question_media_type.enum";
import { Options } from "./question_options.model";

export class Question<T extends Options> {
    readonly id: number;
    readonly options: T;
    readonly statement: string;
    readonly mediaUrl?: string;
    readonly type: QuestionType;
    readonly mediaType?: QuestionMediaType;

    constructor(data: QuestaoModelConstructor<T>){
        this.id = data.id;
        this.type = data.type;
        this.options = data.options;
        this.mediaUrl = data.mediaUrl;
        this.statement = data.statement;
        this.mediaType = data.mediaType;
    }
}