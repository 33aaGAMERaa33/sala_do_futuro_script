"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDTO = void 0;
const response_dto_1 = require("../../core/response_dto");
class UserResponseDTO extends response_dto_1.ResponseDTO {
    constructor(rooms) {
        super();
        this.rooms = rooms;
    }
}
exports.UserResponseDTO = UserResponseDTO;
