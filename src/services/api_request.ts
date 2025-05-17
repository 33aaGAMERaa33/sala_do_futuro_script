import { Controller } from "../core/controller";
import { ResponseAdapter } from "../core/response_adapter";
import { ResponseDTO } from "../core/response_dto";
import { HttpMethod } from "../enums/http_method.enum";

export class ApiRequest {
    private constructor() {}

    static async request<T extends Controller<any, B, A>, A extends ResponseAdapter<B>, B extends ResponseDTO>(controller: T) {
        let body: any;
        let url: string;

        if(controller.httpMethod === HttpMethod.post) {
            url = controller.buildUrl();
            body = JSON.stringify(controller.buildData());
        }else {
            let params = "";
            const data = controller.buildData();

            for(const key in data){
                const value = data[key];

                if(Array.isArray(value)) {
                    for(const valueOfValue of value) {
                        params += `${key}=${valueOfValue}&`;
                    }
                }else{
                    params += `${key}=${value}&`;
                }
            }

            url = controller.buildUrl() + "?" + params;
            body = undefined;
        }

        const response = await fetch(url, {
            body: body,
            method: controller.httpMethod,
            headers: controller.buildHeaders(),
        });

        if(response.status != 200) {
            throw response;
        }

        return controller.responseAdapter.adapter(await response.json());
    }
}