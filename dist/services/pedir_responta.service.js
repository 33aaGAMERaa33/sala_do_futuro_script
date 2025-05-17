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
exports.PedirRespostaService = void 0;
const gemini_ia_1 = require("../gemini_ia/gemini_ia");
const apiKey = process.env.GEMINI_API_KEY;
class PedirRespostaService {
    constructor() { }
    static pedirResponsta(question) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(question);
        });
    }
}
exports.PedirRespostaService = PedirRespostaService;
PedirRespostaService.geminiIA = new gemini_ia_1.GeminiIA(apiKey);
