"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class AuthTokenController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.post,
            responseAdapter: new response_adapter_1.AuthTokenResponseAdapter(),
            url: "https://edusp-api.ip.tv/registration/edusp/token",
        });
    }
    buildData() {
        return {
            "token": this.requestDTO.token,
        };
    }
    buildHeaders() {
        return {
            "x-api-realm": "edusp",
            "accept": "application/json",
            "x-api-platform": "webclient",
            "content-type": "application/json",
        };
    }
}
exports.AuthTokenController = AuthTokenController;
