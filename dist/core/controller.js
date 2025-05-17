"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(data) {
        this.url = data.url;
        this.httpMethod = data.httpMethod;
        this.requestDTO = data.requestDTO;
        this.responseAdapter = data.responseAdapter;
    }
    buildUrl() {
        return this.url;
    }
}
exports.Controller = Controller;
