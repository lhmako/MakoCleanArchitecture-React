export interface IEndpoint {
    url: string;
    path(path:string): string;
}