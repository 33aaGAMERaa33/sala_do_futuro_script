import { UserRequestDTO } from "../_dtos/request_dto/user.request_dto";
import { UserResponseDTO } from "../_dtos/response_dto/user.response_dto";
import { UserController } from "../controllers/user/controller";
import { UserResponseAdapter } from "../controllers/user/response_adapter";
import { ApiRequest } from "./api_request";

export class UserService {
    private constructor() {}

    static request(requestDTO: UserRequestDTO) {
        return ApiRequest.request<UserController, UserResponseAdapter, UserResponseDTO>(new UserController(requestDTO)); 
    }
}