"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarAtividadeRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class EnviarAtividadeRequestDTO extends request_dto_1.RequestDTO {
    constructor(data) {
        super();
        this.type = data.type;
        this.aswers = data.aswers;
        this.duration = data.duration;
        this.tarefaID = data.tarefaID;
        this.authToken = data.authToken;
        this.executedOn = data.executedOn;
        this.answerID = data.answerID;
        this.answerAccessedOn = data.answerAccessedOn;
        this.answerExecutedOn = data.answerExecutedOn;
    }
}
exports.EnviarAtividadeRequestDTO = EnviarAtividadeRequestDTO;
