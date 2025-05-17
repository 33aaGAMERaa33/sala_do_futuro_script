"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsTrueFalse = void 0;
const question_options_model_1 = require("../question_options.model");
class OptionsTrueFalse extends question_options_model_1.Options {
    constructor(alternativas) {
        super();
        this.alternativas = alternativas;
    }
}
exports.OptionsTrueFalse = OptionsTrueFalse;
