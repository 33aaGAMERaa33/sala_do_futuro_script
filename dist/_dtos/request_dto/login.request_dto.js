"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class LoginRequestDTO extends request_dto_1.RequestDTO {
    constructor(data) {
        super();
        this.user = `${data.login}${data.digito}${data.estado.toUpperCase()}`;
        this.senha = data.senha;
    }
}
exports.LoginRequestDTO = LoginRequestDTO;
