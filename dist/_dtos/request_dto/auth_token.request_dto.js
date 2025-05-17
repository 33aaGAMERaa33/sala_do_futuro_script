"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class AuthTokenRequestDTO extends request_dto_1.RequestDTO {
    constructor(token) {
        super();
        this.token = token;
    }
}
exports.AuthTokenRequestDTO = AuthTokenRequestDTO;
