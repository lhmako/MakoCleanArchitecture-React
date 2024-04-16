import { IEndpoint } from "../IEndpoint";

export class Endpoint implements IEndpoint{

    constructor(readonly url: string){}

    path(path: string): string {
        return this.url+path
    }
    
}