import { RequestDTO } from "../../core/request_dto";
import { UserRequestDTOConstructor } from "../constructors/user.request_dto.constructor";

export class UserRequestDTO extends RequestDTO {
    readonly listAll: boolean;
    readonly withCards: boolean;
    readonly authToken: string;

    constructor(data: UserRequestDTOConstructor) {
        super();
        this.listAll = data.listAll;
        this.authToken = data.authToken;
        this.withCards = data.withCards;
    }
}