import { Incorrect } from "../../models/question_options/options_order_sentences.model";

export interface OptionsOrderSentencesModelConstructor {
    sentences: string[];
    incorrects: Incorrect[];
}