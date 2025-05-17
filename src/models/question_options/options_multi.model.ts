import { QuestionOptionsAlternative } from "../question_opitons_alternative.model";
import { Options } from "../question_options.model";

export class OptionsMulti extends Options {
    readonly alternatives: QuestionOptionsAlternative[];

    constructor(alternatives: QuestionOptionsAlternative[]) {
        super();
        this.alternatives = alternatives;
    }
} 

export interface OptionsMultiModelConstructor {
    alternatives: QuestionOptionsAlternative[];
}