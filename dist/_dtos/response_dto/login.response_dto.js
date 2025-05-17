"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class LoginResponseDTO extends response_dto_1.ResponseDTO {
    constructor(token) {
        super();
        this.token = token;
    }
}
exports.LoginResponseDTO = LoginResponseDTO;
