"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOptionsSelect = void 0;
const question_options_type_enum_1 = require("../../enums/question_options_type.enum");
const question_options_model_1 = require("../question_options.model");
class QuestionOptionsSelect extends question_options_model_1.Options {
    constructor(data) {
        super(question_options_type_enum_1.OptionsType.select);
        this.items = data.items;
        this.phrase = data.phrase;
    }
}
exports.QuestionOptionsSelect = QuestionOptionsSelect;
