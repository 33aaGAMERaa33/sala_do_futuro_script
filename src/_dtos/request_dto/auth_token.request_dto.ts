import { RequestDTO } from "../../core/request_dto";
export class AuthTokenRequestDTO extends RequestDTO {
    readonly token: string;

    constructor(token: string) {
        super();
        this.token = token;
    }
}