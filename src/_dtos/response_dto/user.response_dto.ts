import { ResponseDTO } from "../../core/response_dto";
import { Room } from "../../models/room.model";

export class UserResponseDTO extends ResponseDTO {
    readonly rooms: Room[];

    constructor(rooms: Room[]){
        super();
        this.rooms = rooms;
    }
}