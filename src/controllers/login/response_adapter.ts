import { LoginResponseDTO } from "../../_dtos/response_dto/login.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";

export class LoginResponseAdapter extends ResponseAdapter<LoginResponseDTO> {
    adapter(data: Record<string, any>): LoginResponseDTO {
        return new LoginResponseDTO(data["token"]);
    }
}