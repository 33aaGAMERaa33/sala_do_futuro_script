import { QuestaoModelConstructor } from "../_dtos/constructors/questao.model.contructor";
import { QuestionType } from "../enums/question_type.enum";
import { QuestionMediaType } from "../enums/question_media_type.enum";

export class Question {
    readonly id: string;
    readonly options: Record<string, any>;
    readonly statement: string;
    readonly mediaUrl?: string;
    readonly type: QuestionType;
    readonly mediaType?: QuestionMediaType;

    constructor(data: QuestaoModelConstructor){
        this.id = data.id;
        this.type = data.type;
        this.options = data.options;
        this.mediaUrl = data.mediaUrl;
        this.statement = data.statement;
        this.mediaType = data.mediaType;
    }
}