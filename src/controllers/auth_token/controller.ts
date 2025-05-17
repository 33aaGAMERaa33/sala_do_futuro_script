import { AuthTokenRequestDTO } from "../../_dtos/request_dto/auth_token.request_dto";
import { AuthTokenResponseDTO } from "../../_dtos/response_dto/auth_token.response_dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { AuthTokenResponseAdapter } from "./response_adapter";

export class AuthTokenController extends Controller<AuthTokenRequestDTO, AuthTokenResponseDTO, AuthTokenResponseAdapter> {
    constructor(requestDTO: AuthTokenRequestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.post,
            responseAdapter: new AuthTokenResponseAdapter(),
            url: "https://edusp-api.ip.tv/registration/edusp/token",
        });
    }

    buildData(): Record<string, any> {
        return {
            "token": this.requestDTO.token,
        };
    }

    buildHeaders(): HeadersInit {
        return {
            "x-api-realm": "edusp",
            "accept": "application/json",
            "x-api-platform": "webclient",
            "content-type": "application/json",
        };
    }
}