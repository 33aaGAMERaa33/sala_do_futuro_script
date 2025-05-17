import { UserResponseDTO } from "../../_dtos/response_dto/user.response_dto";
import { ResponseAdapter } from "../../core/response_adapter";
import { Room } from "../../models/room.model";
import { RoomCategory } from "../../models/room_category.model";

export class UserResponseAdapter extends ResponseAdapter<UserResponseDTO> {
    adapter(data: Record<string, any>): UserResponseDTO {
        let rooms: Room[] = [];
        const roomsSerialized = data.rooms;

        for(const key in roomsSerialized) {
            let groupCategories: RoomCategory[] = [];
            const roomSerialized = roomsSerialized[key];
            const group_categories = roomSerialized.group_categories;

            for(const key in group_categories) {
                const value = group_categories[key];

                groupCategories.push(new RoomCategory({
                    id: value["id"],
                    name: value["name"],
                }));
            }

            rooms.push(new Room({
                id: roomSerialized.id,
                name: roomSerialized.name,
                groupCategories: groupCategories,
            }));
        }

        return new UserResponseDTO(rooms);
    }
}