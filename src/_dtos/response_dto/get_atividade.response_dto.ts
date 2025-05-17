import { ResponseDTO } from "../../core/response_dto";
import { Atividade } from "../../models/atividade.model";

export class GetAtividadeResponseDTO extends ResponseDTO {
    readonly atividade: Atividade;

    constructor(atividade: Atividade){
        super();
        this.atividade = atividade;
    }
}