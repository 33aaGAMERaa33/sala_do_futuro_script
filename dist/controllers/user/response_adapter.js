"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseAdapter = void 0;
const user_response_dto_1 = require("../../_dtos/response_dto/user.response_dto");
const response_adapter_1 = require("../../core/response_adapter");
const room_model_1 = require("../../models/room.model");
const room_category_model_1 = require("../../models/room_category.model");
class UserResponseAdapter extends response_adapter_1.ResponseAdapter {
    adapter(data) {
        let rooms = [];
        const roomsSerialized = data.rooms;
        for (const key in roomsSerialized) {
            let groupCategories = [];
            const roomSerialized = roomsSerialized[key];
            const group_categories = roomSerialized.group_categories;
            for (const key in group_categories) {
                const value = group_categories[key];
                groupCategories.push(new room_category_model_1.RoomCategory({
                    id: value["id"],
                    name: value["name"],
                }));
            }
            rooms.push(new room_model_1.Room({
                id: roomSerialized.id,
                name: roomSerialized.name,
                groupCategories: groupCategories,
            }));
        }
        return new user_response_dto_1.UserResponseDTO(rooms);
    }
}
exports.UserResponseAdapter = UserResponseAdapter;
