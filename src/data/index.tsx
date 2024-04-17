import { Lazy } from "../lib/Lazy";
import { filmAxiosDataSource } from "./axios";
import { IComicRepository } from "./repositories/IComicRepository";
import { ComicRepostory } from "./repositories/imp/ComicRepository";

export const comicRepostory = new Lazy<IComicRepository>(() => new ComicRepostory(filmAxiosDataSource.value))
export type { 
    IComicRepository
}