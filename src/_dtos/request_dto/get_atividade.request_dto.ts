import { RequestDTO } from "../../core/request_dto";
import { AtividadeRequestType } from "../../enums/atividade_request_type.enum";
import { GetAtividadeRequestDTOConstructor } from "../constructors/get_atividade.request_dto.constructor";

export class GetAtividadeRequestDTO extends RequestDTO {
    readonly authToken: string;
    readonly type: AtividadeRequestType;
    readonly atividadeId: number;
    readonly previewMode: boolean;

    constructor(data: GetAtividadeRequestDTOConstructor) {
        super();
        this.type = data.type;
        this.authToken = data.authToken;
        this.previewMode = data.previewMode;
        this.atividadeId = data.atividadeId;
    }
}