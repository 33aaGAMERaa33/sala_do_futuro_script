import { RoomCategoryConstructor } from "./room_category.model.constructor";

export interface RoomModelConstructor {
    id: number;
    name: string;
    groupCategories: RoomCategoryConstructor[];
}