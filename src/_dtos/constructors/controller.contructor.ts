import { RequestDTO } from "../../core/request_dto";
import { ResponseAdapter } from "../../core/response_adapter";
import { ResponseDTO } from "../../core/response_dto";
import { HttpMethod } from "../../enums/http_method.enum";

export interface ControllerContructor<A extends RequestDTO, B extends ResponseDTO, C extends ResponseAdapter<B>> {
    url: string;
    requestDTO: A;
    responseAdapter: C;
    httpMethod: HttpMethod;
}