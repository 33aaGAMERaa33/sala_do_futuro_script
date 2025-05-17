import { GetTarefasRequestDTO } from "../_dtos/request_dto/get_tarefas.request_dto";
import { GetTarefasResponseDTO } from "../_dtos/response_dto/get_tarefas.response_dto";
import { GetTarefasController } from "../controllers/get_tarefas/controller";
import { GetTarefasResponseAdapter } from "../controllers/get_tarefas/response_adapter";
import { ApiRequest } from "./api_request";

export class GetTarefasService {
    private constructor(){}

    static getTarefas(requestDTO: GetTarefasRequestDTO) {
        return ApiRequest.request<GetTarefasController, GetTarefasResponseAdapter, GetTarefasResponseDTO>(new GetTarefasController(requestDTO));
    }
}