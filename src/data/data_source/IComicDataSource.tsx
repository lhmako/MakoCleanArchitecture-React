import { ComicDTO } from "../dto";

export interface IComicDataSource {
    getAll(): Promise<ComicDTO[]>;
    save(data: ComicDTO) : Promise<boolean>
}