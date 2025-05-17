import { RoomCategoryConstructor } from "../_dtos/constructors/room_category.model.constructor";

export class RoomCategory {
    readonly id: number;
    readonly name: string;

    constructor(data: RoomCategoryConstructor) {
        this.id = data.id;
        this.name = data.name;
    }
}