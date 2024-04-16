import { IFilmDataSource } from "../../data_source";
import { ComicDTO } from "../../dto";
import { IHttp } from "../core/IHttp";

export class FilmAxiosDataSource implements IFilmDataSource{
    
    constructor(readonly http: IHttp){}

    async getAll(): Promise<ComicDTO[]> {
        const response = await this.http.request<ComicDTO[]>({
            method: "get",
            url: "/comics"
        })
        return response
    }
    
    save(_: ComicDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}