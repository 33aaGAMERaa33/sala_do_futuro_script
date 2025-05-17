import { AtividadeRequestType } from "../../enums/atividade_request_type.enum";

export interface GetAtividadeRequestDTOConstructor {
    authToken: string;
    type: AtividadeRequestType;
    atividadeId: number;
    previewMode: boolean;
}