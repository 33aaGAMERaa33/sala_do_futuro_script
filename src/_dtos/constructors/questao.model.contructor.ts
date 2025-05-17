import { QuestionType } from "../../enums/question_type.enum";
import { QuestionMediaType } from "../../enums/question_media_type.enum";
import { Options } from "../../models/question_options.model";

export interface QuestaoModelConstructor<T extends Options> {
    id: number;
    statement: string;
    type: QuestionType;
    options: T;
    mediaUrl?: string;
    mediaType?: QuestionMediaType;
}