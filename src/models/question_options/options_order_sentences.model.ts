import { OptionsOrderSentencesModelConstructor } from "../../_dtos/constructors/options_order_sentences.model.constructor";
import { Options } from "../question_options.model";

export class OptionsOrderSentences extends Options {
    readonly sentences: string[];
    readonly incorrects: Incorrect[];

    constructor(data: OptionsOrderSentencesModelConstructor) {
        super();
        this.sentences = data.sentences;
        this.incorrects = data.incorrects;
    }
}

export class Incorrect {
    readonly id: string;
    readonly value: string;

    constructor(data: {id: string, value: string}){
        this.id = data.id;
        this.value = data.value;
    }
}