import { RoomModelConstructor } from "../_dtos/constructors/room.model.constructor";
import { RoomCategoryConstructor } from "../_dtos/constructors/room_category.model.constructor";

export class Room {
    readonly id: number;
    readonly name: string;
    readonly groupCategories: RoomCategoryConstructor[];

    constructor(data: RoomModelConstructor) {
        this.id = data.id;
        this.name = data.name;
        this.groupCategories = data.groupCategories;
    }
}