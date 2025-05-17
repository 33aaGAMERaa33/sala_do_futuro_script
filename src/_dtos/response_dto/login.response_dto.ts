import { ResponseDTO } from "../../core/response_dto";

export class LoginResponseDTO extends ResponseDTO {
    readonly token: string;
        
    constructor(token: string) {
        super();
        this.token = token;
    }
}