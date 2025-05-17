"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class LoginController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.post,
            responseAdapter: new response_adapter_1.LoginResponseAdapter(),
            url: "https://sedintegracoes.educacao.sp.gov.br/credenciais/api/LoginCompletoToken",
        });
    }
    buildData() {
        return {
            "user": this.requestDTO.user,
            "senha": this.requestDTO.senha,
        };
    }
    buildHeaders() {
        return {
            "Content-Type": "application/json",
            "ocp-apim-subscription-key": "2b03c1db3884488795f79c37c069381a",
        };
    }
}
exports.LoginController = LoginController;
