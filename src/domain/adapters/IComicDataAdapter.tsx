import { ComicModel } from "../model/ComicModel";

export interface IComicDataAdapter{
    loadComics(): Promise<ComicModel[]>
}