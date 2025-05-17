"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAtividadeController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class GetAtividadeController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.get,
            url: "https://edusp-api.ip.tv/tms/task",
            responseAdapter: new response_adapter_1.GetAtividadeResponseAdapter(),
        });
    }
    buildUrl() {
        return `${this.url}/${this.requestDTO.atividadeId}/${this.requestDTO.type}`;
    }
    buildData() {
        return {
            "preview_mode": this.requestDTO.previewMode,
        };
    }
    buildHeaders() {
        return {
            "x-api-realm": "edusp",
            "x-api-platform": "webclient",
            "content-type": "application/json",
            "x-api-key": this.requestDTO.authToken,
        };
    }
}
exports.GetAtividadeController = GetAtividadeController;
