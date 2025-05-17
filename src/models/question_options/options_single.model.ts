import { AlternativeServiceOptions } from "http2";
import { Options } from "../question_options.model";

export class OptionsSingle extends Options {
    readonly alternativas: AlternativeServiceOptions[];

    constructor(alternativas: AlternativeServiceOptions[]){
        super();
        this.alternativas = alternativas;
    }
}