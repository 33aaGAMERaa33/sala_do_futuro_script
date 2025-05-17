import { ResponseAdapter } from '../../core/response_adapter';
import { EnviarAtividadeResponseDTO } from '../../_dtos/response_dto/enviar_atividade.response.dto';

export class EnviarAtividadeResponseAdapter extends ResponseAdapter<EnviarAtividadeResponseDTO> {
    adapter(data: any): EnviarAtividadeResponseDTO {
        return new EnviarAtividadeResponseDTO(data.answers);
    }
}