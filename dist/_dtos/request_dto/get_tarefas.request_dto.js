"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTarefasRequestDTO = void 0;
const request_dto_1 = require("../../core/request_dto");
class GetTarefasRequestDTO extends request_dto_1.RequestDTO {
    constructor(authToken, data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super();
        this.authToken = authToken;
        this.limit = (_a = data.limit) !== null && _a !== void 0 ? _a : 100;
        this.offset = (_b = data.offset) !== null && _b !== void 0 ? _b : 0;
        this.isExam = (_c = data.isExam) !== null && _c !== void 0 ? _c : false;
        this.isEssay = (_d = data.isEssay) !== null && _d !== void 0 ? _d : false;
        this.withAnswer = (_e = data.withAnswer) !== null && _e !== void 0 ? _e : true;
        this.expiredOnly = (_f = data.expiredOnly) !== null && _f !== void 0 ? _f : false;
        this.filterExpired = (_g = data.filterExpired) !== null && _g !== void 0 ? _g : true;
        this.answerStatuses = (_h = data.answerStatuses) !== null && _h !== void 0 ? _h : [];
        this.withApplyMoment = (_j = data.withApplyMoment) !== null && _j !== void 0 ? _j : true;
        this.publicationTargets = (_k = data.publicationTargets) !== null && _k !== void 0 ? _k : [
            "r128dcbba81ba6c3a8-l",
            "rc7c9ba40d0811f291-l",
            "1182",
            "1173",
            "764",
            "1554",
            "r128dcbba81ba6c3a8-l:luangabriel11477764x-sp",
            "rc7c9ba40d0811f291-l:luangabriel11477764x-sp"
        ];
    }
}
exports.GetTarefasRequestDTO = GetTarefasRequestDTO;
