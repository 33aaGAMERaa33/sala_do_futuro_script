"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGptFactory = void 0;
const openai_1 = __importDefault(require("openai"));
class ChatGptFactory {
    constructor() { }
    static generate(apiKey) {
        return new openai_1.default({
            apiKey: apiKey,
        });
    }
}
exports.ChatGptFactory = ChatGptFactory;
