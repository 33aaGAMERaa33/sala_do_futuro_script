"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseAdapter = void 0;
const login_response_dto_1 = require("../../_dtos/response_dto/login.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
class LoginResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        return new login_response_dto_1.LoginResponseDTO(data["token"]);
    }
}
exports.LoginResponseAdapter = LoginResponseAdapter;
