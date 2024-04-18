import { IComicDataSource } from "../../data_source";
import { ComicDTO } from "../../dto";
import { IHttp } from "../core/IHttp";
import { MarvelParamsDTO } from "../dto/MarvelParamsDTO";
import { ResponseDTO } from "../dto/Response";

export class ComicAxiosDataSource implements IComicDataSource {
    
    constructor(readonly http: IHttp, readonly params: MarvelParamsDTO | undefined){}

    async getAll(): Promise<ComicDTO[]> {
        const response:ResponseDTO<ComicDTO[]> = await this.http.request<ResponseDTO<ComicDTO[]>>({
            method: "get",
            url: "/comics",
            params: this.params
        })
        return response.data.results
    }
    
    save(_: ComicDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}