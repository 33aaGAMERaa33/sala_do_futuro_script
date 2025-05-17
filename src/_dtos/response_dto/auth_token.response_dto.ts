import { ResponseDTO } from "../../core/response_dto";
import { AuthTokenResponseDTOConstructor } from "../constructors/auth_token.respone_dto.constructor";

export class AuthTokenResponseDTO extends ResponseDTO {
    readonly nick: string;
    readonly authToken: string;

    constructor(data: AuthTokenResponseDTOConstructor) {
        super();
        this.nick = data.nick;
        this.authToken = data.authToken;
    }
}