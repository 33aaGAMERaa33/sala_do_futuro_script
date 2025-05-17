import { EnviarAtividadeRequestDTO } from "../_dtos/request_dto/enviar_atividade.request_dto";
import { EnviarAtivadeController } from "../controllers/enviar_atividade/controller";
import { EnviarAtividadeResponseAdapter } from "../controllers/enviar_atividade/response_adapter";
import { ApiRequest } from "./api_request";
import { EnviarAtividadeResponseDTO } from '../_dtos/response_dto/enviar_atividade.response.dto';

export class EnviarAtividadeService {
    private constructor(){}

    static enviarAtividade(requestDTO: EnviarAtividadeRequestDTO) {
        return ApiRequest.request<EnviarAtivadeController, EnviarAtividadeResponseAdapter, EnviarAtividadeResponseDTO>(new EnviarAtivadeController(requestDTO)); 
    }
}