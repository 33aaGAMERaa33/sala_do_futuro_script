"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTarefasResponseAdapter = void 0;
const get_tarefas_response_dto_1 = require("../../_dtos/response_dto/get_tarefas.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
const tarefa_model_1 = require("../../models/tarefa.model");
class GetTarefasResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        let tarefas = [];
        for (const tarefaSerialized of data) {
            tarefas.push(new tarefa_model_1.Tarefa({
                id: tarefaSerialized.id,
                title: tarefaSerialized.title,
                description: tarefaSerialized.description,
            }));
        }
        return new get_tarefas_response_dto_1.GetTarefasResponseDTO(tarefas);
    }
}
exports.GetTarefasResponseAdapter = GetTarefasResponseAdapter;
