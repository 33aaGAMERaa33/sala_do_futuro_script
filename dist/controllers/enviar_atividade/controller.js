"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarAtivadeController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class EnviarAtivadeController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.put,
            url: "https://edusp-api.ip.tv/tms/task",
            responseAdapter: new response_adapter_1.EnviarAtividadeResponseAdapter(),
        });
    }
    buildUrl() {
        let rascunhoID = this.requestDTO.answerID != null ? `/${this.requestDTO.answerID}` : "";
        return `${this.url}/${this.requestDTO.tarefaID}/answer${rascunhoID}`;
    }
    buildMethod() {
        if (this.requestDTO.answerID) {
            return http_method_enum_1.HttpMethod.put;
        }
        else {
            return http_method_enum_1.HttpMethod.post;
        }
    }
    buildData() {
        return {
            "accessed_on": "room",
            "status": this.requestDTO.type,
            "answers": this.requestDTO.aswers,
            "duration": this.requestDTO.duration,
            "executed_on": this.requestDTO.executedOn,
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
exports.EnviarAtivadeController = EnviarAtivadeController;
