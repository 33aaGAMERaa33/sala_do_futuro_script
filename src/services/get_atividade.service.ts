import { GetAtividadeRequestDTO } from "../_dtos/request_dto/get_atividade.request_dto";
import { GetAtividadeResponseDTO } from "../_dtos/response_dto/get_atividade.response_dto";
import { GetAtividadeController } from "../controllers/get_atividade/controller";
import { GetAtividadeResponseAdapter } from "../controllers/get_atividade/response_adapter";
import { ApiRequest } from "./api_request";

export class GetAtividadeService {
    private constructor() {};

    static getAtividade(requestDTO: GetAtividadeRequestDTO) {
        return ApiRequest.request<GetAtividadeController, GetAtividadeResponseAdapter, GetAtividadeResponseDTO>(new GetAtividadeController(requestDTO));
    }
}