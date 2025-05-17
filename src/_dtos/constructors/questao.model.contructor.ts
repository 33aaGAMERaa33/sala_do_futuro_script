import { QuestionType } from "../../enums/question_type.enum";
import { QuestionMediaType } from "../../enums/question_media_type.enum";

export interface QuestaoModelConstructor {
    id: string;
    statement: string;
    type: QuestionType;
    mediaUrl?: string;
    options: Record<string, any>;
    mediaType?: QuestionMediaType;
}