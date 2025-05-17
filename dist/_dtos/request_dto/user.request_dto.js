"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class UserRequestDTO extends request_dto_1.RequestDTO {
    constructor(data) {
        super();
        this.listAll = data.listAll;
        this.authToken = data.authToken;
        this.withCards = data.withCards;
    }
}
exports.UserRequestDTO = UserRequestDTO;
