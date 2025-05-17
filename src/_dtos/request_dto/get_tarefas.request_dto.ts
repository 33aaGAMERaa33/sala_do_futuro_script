import { RequestDTO } from "../../core/request_dto";
import { GetTarefasRequestDTOConstructor } from "../constructors/get_tarefas.request_dto.constructor";

export class GetTarefasRequestDTO extends RequestDTO {
    readonly authToken: string;
    readonly expiredOnly: boolean;
    readonly limit: number;
    readonly offset: number;
    readonly filterExpired: boolean;
    readonly isExam: boolean;
    readonly withAnswer: boolean;
    readonly isEssay: boolean;
    readonly withApplyMoment: boolean;
    readonly answerStatuses: string[];
    readonly publicationTargets: string[];

    constructor(authToken: string, data: GetTarefasRequestDTOConstructor) {
        super();
        this.authToken = authToken;
        this.limit = data.limit ?? 100;
        this.offset = data.offset ?? 0;
        this.isExam = data.isExam ?? false;
        this.isEssay = data.isEssay ?? false;
        this.withAnswer = data.withAnswer ?? true;
        this.expiredOnly = data.expiredOnly ?? false;
        this.filterExpired = data.filterExpired ?? true;
        this.answerStatuses = data.answerStatuses ?? [];
        this.withApplyMoment = data.withApplyMoment ?? true;
        this.publicationTargets = data.publicationTargets ?? [
            "r128dcbba81ba6c3a8-l",
            "rc7c9ba40d0811f291-l",
            "1182",
            "1173",
            "764",
            "1554",
            "r128dcbba81ba6c3a8-l:luangabriel11477764x-sp",
            "rc7c9ba40d0811f291-l:luangabriel11477764x-sp"
        ];
    }
}

