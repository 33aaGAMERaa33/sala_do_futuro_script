import { AuthTokenResponseDTO } from "../../_dtos/response_dto/auth_token.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";

export class AuthTokenResponseAdapter extends ResponseAdapter<AuthTokenResponseDTO> {
    adapter(data: Record<string, any>): AuthTokenResponseDTO {
        return new AuthTokenResponseDTO({
            nick: data["nick"],
            authToken: data["auth_token"],
        });
    }
}