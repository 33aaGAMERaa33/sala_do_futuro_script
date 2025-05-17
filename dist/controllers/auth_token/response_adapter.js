"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenResponseAdapter = void 0;
const auth_token_response_dto_1 = require("../../_dtos/response_dto/auth_token.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
class AuthTokenResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        return new auth_token_response_dto_1.AuthTokenResponseDTO({
            nick: data["nick"],
            authToken: data["auth_token"],
        });
    }
}
exports.AuthTokenResponseAdapter = AuthTokenResponseAdapter;
