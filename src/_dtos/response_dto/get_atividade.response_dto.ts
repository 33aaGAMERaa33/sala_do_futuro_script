import { ResponseDTO } from "../../core/response_dto";
import { Atividade } from "../../models/atividade.model";

export class GetAtividadeResponseDTO extends ResponseDTO {
    readonly atividade: Atividade;
    readonly tiposNaoRegistrados: Array<string>;

    constructor(atividade: Atividade, tiposNaoRegistrados: string[]){
        super();
        this.atividade = atividade;
        this.tiposNaoRegistrados = tiposNaoRegistrados;
    }
}