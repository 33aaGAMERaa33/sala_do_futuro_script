import { GetAtividadeRequestDTO } from "../../_dtos/request_dto/get_atividade.request_dto";
import { GetAtividadeResponseDTO } from "../../_dtos/response_dto/get_atividade.response_dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { GetAtividadeResponseAdapter } from "./response_adapter";

export class GetAtividadeController extends Controller<GetAtividadeRequestDTO, GetAtividadeResponseDTO, GetAtividadeResponseAdapter> {
    constructor(requestDTO: GetAtividadeRequestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.get,
            url: "https://edusp-api.ip.tv/tms/task",
            responseAdapter: new GetAtividadeResponseAdapter(),
        });
    }

    buildUrl(): string {
        return `${this.url}/${this.requestDTO.atividadeId}/${this.requestDTO.type}`   
    }
    
    buildData(): Record<string, any> {
        return {
            "preview_mode": this.requestDTO.previewMode,
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