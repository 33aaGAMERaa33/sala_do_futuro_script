"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class AuthTokenResponseDTO extends response_dto_1.ResponseDTO {
    constructor(data) {
        super();
        this.nick = data.nick;
        this.authToken = data.authToken;
    }
}
exports.AuthTokenResponseDTO = AuthTokenResponseDTO;
