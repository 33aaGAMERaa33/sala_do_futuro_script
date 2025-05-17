import { UserRequestDTO } from "../../_dtos/request_dto/user.request_dto";
import { UserResponseDTO } from "../../_dtos/response_dto/user.response_dto";
import { Controller } from "../../core/controller";
import { HttpMethod } from "../../enums/http_method.enum";
import { UserResponseAdapter } from "./response_adapter";

export class UserController extends Controller<UserRequestDTO, UserResponseDTO, UserResponseAdapter> {
    constructor(requestDTO: UserRequestDTO){
        super({
            requestDTO: requestDTO,
            httpMethod: HttpMethod.get,
            responseAdapter: new UserResponseAdapter(),
            url: 'https://edusp-api.ip.tv/room/user'
        });
    }

    buildData(): Record<string, any> {
        return {
            "list_all": this.requestDTO.listAll,
            "with_cards": this.requestDTO.withCards,
        };
    }

    buildHeaders(): HeadersInit {
        return {
            "x-api": "edusp",
            "x-api-platform": "webclient",
            "content-type": "application/json",
            "x-api-key": this.requestDTO.authToken,
        }
    }
}