"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atividade = void 0;
class Atividade {
    constructor(data) {
        this.title = data.title;
        this.type = data.type;
        this.description = data.description;
        this.maxExecutionTime = data.maxExecutionTime;
        this.minExecutionTime = data.minExecutionTime;
        this.questions = data.questions;
    }
}
exports.Atividade = Atividade;
