export interface GetTarefasRequestDTOConstructor {
    expiredOnly?: boolean;
    limit?: number;
    offset?: number;
    filterExpired?: boolean;
    isExam?: boolean;
    withAnswer?: boolean;
    isEssay?: boolean;
    publicationTargets?: string[];
    answerStatuses?: string[];
    withApplyMoment?: boolean;
}
