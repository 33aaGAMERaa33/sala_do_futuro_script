import { OptionsFillWordsModelConstructor } from "../../_dtos/constructors/options_fill_words.model.contructor";
import { Options } from "../question_options.model";

export class OptionsFillWords extends Options { 
    readonly items: string[];
    readonly phrase: string[];
    readonly type: OptionsFillWords;

    constructor(data: OptionsFillWordsModelConstructor) {
        super();
        this.type = data.type;
        this.items = data.items;
        this.phrase = data.phrase;
    }
}