"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
class Question {
    constructor(data) {
        this.id = data.id;
        this.type = data.type;
        this.options = data.options;
        this.mediaUrl = data.mediaUrl;
        this.statement = data.statement;
        this.mediaType = data.mediaType;
    }
}
exports.Question = Question;
