import { ControllerContructor } from "../_dtos/constructors/controller.contructor";
import { HttpMethod } from "../enums/http_method.enum";
import { RequestDTO } from "./request_dto";
import { ResponseAdapter } from "./response_adapter";
import { ResponseDTO } from "./response_dto";

export abstract class Controller<A extends RequestDTO, B extends ResponseDTO, C extends ResponseAdapter<B>> {
    protected readonly url: string;
    public readonly requestDTO: A;
    public readonly responseAdapter: C;
    public readonly httpMethod: HttpMethod;

    protected constructor(data: ControllerContructor<A, B, C>) {
        this.url = data.url;
        this.httpMethod = data.httpMethod;
        this.requestDTO = data.requestDTO;
        this.responseAdapter = data.responseAdapter;
    }

    buildUrl() {
        return this.url;
    }
    abstract buildHeaders(): HeadersInit;
    abstract buildData(): Record<string, any>;
}