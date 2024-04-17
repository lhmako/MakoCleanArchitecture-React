import { ComicModel } from "../model/ComicModel";

export interface IHomeStory {
    loadComics() : Promise<ComicModel[]>
}