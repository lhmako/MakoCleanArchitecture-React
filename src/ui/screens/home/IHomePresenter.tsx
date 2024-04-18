import { ComicDTO } from "../../dto";

export interface IHomePresenter {
    loadComics(): Promise<ComicDTO[]>
}