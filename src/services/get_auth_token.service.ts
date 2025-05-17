import { AuthTokenRequestDTO } from "../_dtos/request_dto/auth_token.request_dto";
import { AuthTokenResponseDTO } from "../_dtos/response_dto/auth_token.response_dto";
import { AuthTokenController } from "../controllers/auth_token/controller";
import { AuthTokenResponseAdapter } from "../controllers/auth_token/response_adapter";
import { ApiRequest } from "./api_request";

export class GetAuthTokenService {
    private constructor() {}

    static async getAuthToken(requestDTO: AuthTokenRequestDTO) {
        return await ApiRequest.request<AuthTokenController, AuthTokenResponseAdapter, AuthTokenResponseDTO>(new AuthTokenController(requestDTO));
    }
}