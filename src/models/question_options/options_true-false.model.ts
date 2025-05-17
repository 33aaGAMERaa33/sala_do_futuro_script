import { QuestionOptionsAlternative } from "../question_opitons_alternative.model";
import { Options } from "../question_options.model";

export class OptionsTrueFalse extends Options {
    readonly alternativas: QuestionOptionsAlternative[];
    
    constructor(alternativas: QuestionOptionsAlternative[]){
        super();
        this.alternativas = alternativas;
    }
}