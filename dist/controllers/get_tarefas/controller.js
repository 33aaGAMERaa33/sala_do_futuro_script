"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTarefasController = void 0;
const controller_1 = require("../../core/controller");
const http_method_enum_1 = require("../../enums/http_method.enum");
const response_adapter_1 = require("./response_adapter");
class GetTarefasController extends controller_1.Controller {
    constructor(requestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: http_method_enum_1.HttpMethod.get,
            url: "https://edusp-api.ip.tv/tms/task/todo",
            responseAdapter: new response_adapter_1.GetTarefasResponseAdapter()
        });
    }
    buildData() {
        return {
            expired_only: this.requestDTO.expiredOnly,
            limit: this.requestDTO.limit,
            offset: this.requestDTO.offset,
            filter_expired: this.requestDTO.filterExpired,
            is_exam: this.requestDTO.isExam,
            with_answer: this.requestDTO.withAnswer,
            is_essay: this.requestDTO.isEssay,
            with_apply_moment: this.requestDTO.withApplyMoment,
            publication_target: this.requestDTO.publicationTargets,
            answer_statuses: this.requestDTO.answerStatuses,
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
exports.GetTarefasController = GetTarefasController;
