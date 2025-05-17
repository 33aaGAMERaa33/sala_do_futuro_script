"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsFillWords = void 0;
const question_options_model_1 = require("../question_options.model");
class OptionsFillWords extends question_options_model_1.Options {
    constructor(data) {
        super();
        this.type = data.type;
        this.items = data.items;
        this.phrase = data.phrase;
    }
}
exports.OptionsFillWords = OptionsFillWords;
