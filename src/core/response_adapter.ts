export abstract class ResponseAdapter<T> {
    abstract adapter(data: any): T;
}