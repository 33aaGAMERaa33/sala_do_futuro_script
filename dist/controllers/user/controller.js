"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class UserController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.get,
            responseAdapter: new response_adapter_1.UserResponseAdapter(),
            url: 'https://edusp-api.ip.tv/room/user'
        });
    }
    buildData() {
        return {
            "list_all": this.requestDTO.listAll,
            "with_cards": this.requestDTO.withCards,
        };
    }
    buildHeaders() {
        return {
            "x-api": "edusp",
            "x-api-platform": "webclient",
            "content-type": "application/json",
            "x-api-key": this.requestDTO.authToken,
        };
    }
}
exports.UserController = UserController;
