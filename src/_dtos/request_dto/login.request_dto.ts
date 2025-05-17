import { RequestDTO } from "../../core/request_dto";
import { LoginRequestDTOContructor } from "../constructors/login.request_dto.contructor";

export class LoginRequestDTO extends RequestDTO {
    readonly user: string;
    readonly senha: string;

    constructor(data: LoginRequestDTOContructor) {
        super();
        this.user = `${data.login}${data.digito}${data.estado.toUpperCase()}`;
        this.senha = data.senha;
    }
}