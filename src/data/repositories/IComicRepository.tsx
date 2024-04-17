import { ComicDTO } from "../dto";

export interface IComicRepository {
    getAll(): Promise<ComicDTO[]>
}