"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsMulti = void 0;
const question_options_model_1 = require("../question_options.model");
class OptionsMulti extends question_options_model_1.Options {
    constructor(alternatives) {
        super();
        this.alternatives = alternatives;
    }
}
exports.OptionsMulti = OptionsMulti;
