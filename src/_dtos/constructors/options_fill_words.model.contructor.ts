import { OptionsFillWords } from "../../models/question_options/options_fill_words.model";

export interface OptionsFillWordsModelConstructor {
    items: string[];
    phrase: string[];
    type: OptionsFillWords;
}