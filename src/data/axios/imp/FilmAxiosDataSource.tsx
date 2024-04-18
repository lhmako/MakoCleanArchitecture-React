import { IComicDataSource } from "../../data_source";
import { ComicDTO } from "../../dto";
import { IHttp } from "../core/IHttp";
import { ResponseDTO } from "../dto/Response";

export class FilmAxiosDataSource implements IComicDataSource {
    
    constructor(readonly http: IHttp){}

    async getAll(): Promise<ComicDTO[]> {
        const response:ResponseDTO<ComicDTO[]> = await this.http.request<ResponseDTO<ComicDTO[]>>({
            method: "get",
            url: "/comics"
        })
        return response.data.results
    }
    
    save(_: ComicDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}