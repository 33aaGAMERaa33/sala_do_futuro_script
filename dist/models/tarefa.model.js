"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.answerID = data.answerID;
        this.description = data.description;
        this.answerAccessedOn = data.answerAccessedOn;
        this.answerExecutedOn = data.answerExecutedOn;
    }
}
exports.Tarefa = Tarefa;
