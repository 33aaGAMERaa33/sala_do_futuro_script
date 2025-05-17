import { EnviarAtividadeRequestDTO } from "../../_dtos/request_dto/enviar_atividade.request_dto";
import { EnviarAtividadeResponseDTO } from "../../_dtos/response_dto/enviar_atividade.response.dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { EnviarAtividadeResponseAdapter } from "./response_adapter";

export class EnviarAtivadeController extends Controller<EnviarAtividadeRequestDTO, EnviarAtividadeResponseDTO, EnviarAtividadeResponseAdapter> {
    constructor(requestDTO: EnviarAtividadeRequestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.put,
            url: "https://edusp-api.ip.tv/tms/task",
            responseAdapter: new EnviarAtividadeResponseAdapter(),
        });
    }

    buildUrl(): string {
        let rascunhoID = this.requestDTO.answerID != null ? `/${this.requestDTO.answerID}` : "";
        return `${this.url}/${this.requestDTO.tarefaID}/answer${rascunhoID}`;
    }

    buildMethod(): HttpMethod {
        if(this.requestDTO.answerID){
            return HttpMethod.put;
        }else{
            return HttpMethod.post;
        }
    }

    buildData(): Record<string, any> {
        return {
            "accessed_on": "room",
            "status": this.requestDTO.type, 
            "answers": this.requestDTO.aswers,
            "duration": this.requestDTO.duration,
            "executed_on": this.requestDTO.executedOn,
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