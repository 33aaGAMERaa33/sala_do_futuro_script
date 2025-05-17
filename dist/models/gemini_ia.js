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
exports.GeminiIA = void 0;
class GeminiIA {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    sendMessage(messagesParts) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = JSON.stringify({
                "contents": [{
                        parts: messagesParts,
                    }]
            });
            const response = yield fetch(`${GeminiIA.url}?key=${this.apiKey}`, {
                body: body,
                method: "POST",
            });
            return (yield response.json()).candidates[0].content.parts;
        });
    }
}
exports.GeminiIA = GeminiIA;
GeminiIA.url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
