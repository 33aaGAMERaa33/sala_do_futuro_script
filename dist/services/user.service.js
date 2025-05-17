"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const controller_1 = require("../controllers/user/controller");
const api_request_1 = require("./api_request");
class UserService {
    constructor() { }
    static request(requestDTO) {
        return api_request_1.ApiRequest.request(new controller_1.UserController(requestDTO));
    }
}
exports.UserService = UserService;
