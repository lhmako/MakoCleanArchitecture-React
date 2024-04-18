import { Lazy } from "../lib/Lazy";
import { comicAxiosDataSource } from "./axios";
import { IComicRepository } from "./repositories/IComicRepository";
import { ComicRepostory } from "./repositories/imp/ComicRepository";

export const comicRepostory = new Lazy<IComicRepository>(() => new ComicRepostory(comicAxiosDataSource.value))
export type { 
    IComicRepository
}