"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResponseQuestionsService = void 0;
const gemini_ia_1 = require("../models/gemini_ia/gemini_ia");
class GetResponseQuestionsService {
    constructor() { }
    ;
    static init(apiKey) {
        if (this.geminiIA)
            return;
        this.geminiIA = new gemini_ia_1.GeminiIA(apiKey);
    }
    static pedirResponstas(questions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.geminiIA)
                throw "IA nao inicializada";
            let perguntas = [];
            for (const question of questions) {
                let pergunta = {
                    id: question.id,
                    type: question.type,
                    options: question.options,
                    statement: question.statement,
                };
                perguntas.push(pergunta);
            }
            const response = yield this.geminiIA.sendMessage([
                { text: GetResponseQuestionsService.prompt },
                { text: JSON.stringify(perguntas) },
            ]);
            const respostasJson = JSON.parse(response[0].text.replace("```json", "").replace("```", ""));
            return respostasJson.answers;
        });
    }
}
exports.GetResponseQuestionsService = GetResponseQuestionsService;
GetResponseQuestionsService.prompt = `
        Você será um aluno respondendo atividades para simular a correção automática.
        Eu irei enviar perguntas em diferentes formatos. Sua tarefa é responder apenas em formato JSON, sem explicações, comentários ou qualquer texto fora do JSON.

        ⚠️ Importante:
        - A resposta deve ser um **único objeto JSON**, puro, sem blocos de código, crases ou qualquer formatação adicional.
        - Use o modelo abaixo para construir a resposta final com todas as perguntas respondidas:

        "answers": {
            // Cada entrada representa a resposta a uma pergunta
            "{id_da_pergunta}": {
                "question_type": "{tipo}",
                "question_id": {id_da_pergunta, especificamente numero (sem aspas)},
                "answer": {resposta conforme tipo}
            }
        }

        Tipos de pergunta e como responder:

        1. Tipo "single":
        - Apenas uma alternativa correta.
        - Responda com todas as alternativas. A correta deve ser marcada com true e as outras com false.

        Exemplo:
        "answer": {
            0: false,
            1: true,
            2: false,
            3: false
        }

        2. Tipo "multi":
        - Pode haver mais de uma alternativa correta.
        - Marque todas as corretas como true e as incorretas como false.

        Exemplo:
        "answer": {
            0: true,
            1: true,
            2: false,
            3: false
        }

        3. Tipo "fill-words":
        - Deve conter todas os valores
        - Os valores devem vir em ordem
        
        Exemplo:
        "aswer": {
            {valor1},
            {valor2},
            {valor3},
            //etc...
        }
        
        4. Tipo "order-sentences":
        - Semelhante ao "fill-words"

        Exemplo:
        "aswer": {
            {word1},
            {word2},
            {word3},
            //etc...
        }

        5. Tipo "true-false":
        -- Semelhante ao "multi"

        Exemplo:
        "answer": {
            0: true,
            1: true,
            2: false,
            3: false
        }

        Importante:
        Se algum id for numero, nao informe como string.
        Exemplo:
        -- NAO
        question_id: "100"
        -- SIM
        question_id: 100

        Se encontrar um tipo não especificado, responda assim:
        "answer": {
            "status": "error",
            "message": "Não foi possível responder ao tipo: {tipo}"
        }

        Agora aguarde até que eu envie as perguntas.
    `;
