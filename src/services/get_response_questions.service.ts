import { GeminiIA } from "../models/gemini_ia/gemini_ia";
import { Question } from "../models/question.model";

export class GetResponseQuestionsService {
    private static geminiIA?: GeminiIA;
    private static prompt = `
        Você será um aluno respondendo atividades para simular a correção automática.
        Eu irei enviar perguntas em diferentes formatos. Sua tarefa é responder apenas em formato JSON, sem explicações, comentários ou qualquer texto fora do JSON.

        ⚠️ Importante:
        - A resposta deve ser um **único objeto JSON**, puro, sem blocos de código, crases ou qualquer formatação adicional.
        - Use o modelo abaixo para construir a resposta final com todas as perguntas respondidas:

        "answers": {
            // Cada entrada representa a resposta a uma pergunta
            "{id_da_pergunta}": {
                "question_type": "{tipo}",
                "question_id": {id_da_pergunta},
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

        Se encontrar um tipo não especificado, responda assim:
        "answer": {
            "status": "error",
            "message": "Não foi possível responder ao tipo: {tipo}"
        }

        Agora aguarde até que eu envie as perguntas.
    `;

    private constructor(){};

    public static init(apiKey: string) {
        if(this.geminiIA) return;
        this.geminiIA = new GeminiIA(apiKey);
    }

    public static async pedirResponstas(questions: Question[]) {
        if(!this.geminiIA) throw "IA nao inicializada";
    
        const response = await this.geminiIA.sendMessage([
            {text: GetResponseQuestionsService.prompt},
            {text: JSON.stringify(questions)},
        ]);

        const respostasJson = JSON.parse(response[0].text.replace("```json", "").replace("```", ""));
        return respostasJson.answers;
    }
}