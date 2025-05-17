"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.groupCategories = data.groupCategories;
    }
}
exports.Room = Room;
