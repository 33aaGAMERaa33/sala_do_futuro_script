import { LoginRequestDTO } from "../_dtos/request_dto/login.request_dto";
import { LoginResponseDTO } from "../_dtos/response_dto/login.response_dto";
import { LoginController } from "../controllers/login/controller";
import { LoginResponseAdapter } from "../controllers/login/response_adapter";
import { ApiRequest } from "./api_request";

export class LoginService {
    private constructor() {}

    static async logar(requestDTO: LoginRequestDTO) {
        return await ApiRequest.request<LoginController, LoginResponseAdapter, LoginResponseDTO>(new LoginController(requestDTO));
    }
}