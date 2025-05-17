"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incorrect = exports.QuestionOptionsOrderSentences = void 0;
const question_options_model_1 = require("../question_options.model");
class QuestionOptionsOrderSentences extends question_options_model_1.Options {
    constructor(data) {
        super();
        this.sentences = data.sentences;
        this.incorrects = data.incorrects;
    }
}
exports.QuestionOptionsOrderSentences = QuestionOptionsOrderSentences;
class Incorrect {
    constructor(data) {
        this.id = data.id;
        this.value = data.value;
    }
}
exports.Incorrect = Incorrect;
