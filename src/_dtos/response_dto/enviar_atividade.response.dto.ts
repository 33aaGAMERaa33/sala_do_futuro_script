import { ResponseDTO } from "../../core/response_dto";

export class EnviarAtividadeResponseDTO extends ResponseDTO {
    readonly answers: Record<string, any>;

    constructor(answers: Record<string, any>){
        super();
        this.answers = answers;
    }
}