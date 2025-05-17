import { GetTarefasRequestDTO } from "../../_dtos/request_dto/get_tarefas.request_dto";
import { GetTarefasResponseDTO } from "../../_dtos/response_dto/get_tarefas.response_dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { GetTarefasResponseAdapter } from "./response_adapter";

export class GetTarefasController extends Controller<GetTarefasRequestDTO, GetTarefasResponseDTO, GetTarefasResponseAdapter> {
    constructor(requestDTO: GetTarefasRequestDTO){
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.get,
            url: "https://edusp-api.ip.tv/tms/task/todo",
            responseAdapter: new GetTarefasResponseAdapter()
        });
    }

    buildData(): Record<string, any> {
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
    buildHeaders(): HeadersInit {
        return {
            "x-api-realm": "edusp",
            "x-api-platform": "webclient",
            "content-type": "application/json",
            "x-api-key": this.requestDTO.authToken,
        };
    }
}