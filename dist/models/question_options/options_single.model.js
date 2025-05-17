"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsSingle = void 0;
const question_options_model_1 = require("../question_options.model");
class OptionsSingle extends question_options_model_1.Options {
    constructor(alternativas) {
        super();
        this.alternativas = alternativas;
    }
}
exports.OptionsSingle = OptionsSingle;
