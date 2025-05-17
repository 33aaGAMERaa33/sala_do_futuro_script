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
exports.GetAuthTokenService = void 0;
const controller_1 = require("../controllers/auth_token/controller");
const api_request_1 = require("./api_request");
class GetAuthTokenService {
    constructor() { }
    static getAuthToken(requestDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield api_request_1.ApiRequest.request(new controller_1.AuthTokenController(requestDTO));
        });
    }
}
exports.GetAuthTokenService = GetAuthTokenService;
