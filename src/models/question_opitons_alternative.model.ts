import { QuestionMediaType } from "../enums/question_media_type.enum";

export class QuestionOptionsAlternative {
    readonly id: string;
    readonly statement: string;
    readonly mediaUrl?: string;
    readonly mediaType?: QuestionMediaType;

    constructor(data: QuestionOptionsAlternativeContructor) {
        this.id = data.id;
        this.statement = data.statement;
        this.mediaUrl = data.mediaUrl;
        this.mediaType = data.mediaType;
    }
}

export interface QuestionOptionsAlternativeContructor {
    id: string;
    statement: string;
    mediaUrl?: string;
    mediaType?: QuestionMediaType;
}