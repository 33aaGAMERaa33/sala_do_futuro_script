import { LoginRequestDTO } from "../../_dtos/request_dto/login.request_dto";
import { LoginResponseDTO } from "../../_dtos/response_dto/login.response_dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { LoginResponseAdapter } from "./response_adapter";

export class LoginController extends Controller<LoginRequestDTO, LoginResponseDTO, LoginResponseAdapter> {
    constructor(requestDTO: LoginRequestDTO) {
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.post,
            responseAdapter: new LoginResponseAdapter(),
            url: "https://sedintegracoes.educacao.sp.gov.br/credenciais/api/LoginCompletoToken",
        });
    }

    buildData(): Record<string, any> {
        return {
            "user": this.requestDTO.user,
            "senha": this.requestDTO.senha,
        };
    }

    buildHeaders(): HeadersInit {
        return {
            "Content-Type": "application/json",
            "ocp-apim-subscription-key": "2b03c1db3884488795f79c37c069381a",
        };
    }
}