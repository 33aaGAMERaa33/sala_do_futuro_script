"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequest = void 0;
const http_method_enum_1 = require("../enums/http_method.enum");
class ApiRequest {
    constructor() { }
    static request(controller) {
        return __awaiter(this, void 0, void 0, function* () {
            let body;
            let url;
            if (controller.buildMethod() === http_method_enum_1.HttpMethod.post || controller.buildMethod() === http_method_enum_1.HttpMethod.put) {
                url = controller.buildUrl();
                body = JSON.stringify(controller.buildData());
            }
            else {
                let params = "";
                const data = controller.buildData();
                for (const key in data) {
                    const value = data[key];
                    if (Array.isArray(value)) {
                        for (const valueOfValue of value) {
                            params += `${key}=${valueOfValue}&`;
                        }
                    }
                    else {
                        params += `${key}=${value}&`;
                    }
                }
                url = controller.buildUrl() + "?" + params;
                body = undefined;
            }
            const response = yield fetch(url, {
                body: body,
                method: controller.buildMethod(),
                headers: controller.buildHeaders(),
            });
            if (response.status != 200) {
                throw response;
            }
            return controller.responseAdapter.adapter(yield response.json());
        });
    }
}
exports.ApiRequest = ApiRequest;
