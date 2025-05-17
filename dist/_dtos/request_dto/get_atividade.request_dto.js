"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class GetAtividadeRequestDTO extends request_dto_1.RequestDTO {
    constructor(data) {
        super();
        this.type = data.type;
        this.authToken = data.authToken;
        this.previewMode = data.previewMode;
        this.atividadeId = data.atividadeId;
    }
}
exports.GetAtividadeRequestDTO = GetAtividadeRequestDTO;
