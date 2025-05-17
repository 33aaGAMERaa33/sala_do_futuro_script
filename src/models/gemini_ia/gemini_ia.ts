import { GeminiMessage } from "./gemini_message";

export class GeminiIA {
    private apiKey: string;
    private static url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async sendMessage(messagesParts: GeminiMessage[]) {
        const body = JSON.stringify({
            "contents": [{
                parts: messagesParts,
            }]
        });

        const response = await fetch(`${GeminiIA.url}?key=${this.apiKey}`, {
            body: body,
            method: "POST",
        });

        return (await response.json()).candidates[0].content.parts as GeminiMessage[];
    }
}