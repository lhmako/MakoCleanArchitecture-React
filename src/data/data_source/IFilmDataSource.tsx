import { ComicDTO } from "../dto";

export interface IFilmDataSource {
    getAll(): Promise<ComicDTO[]>;
    save(data: ComicDTO) : Promise<boolean>
}