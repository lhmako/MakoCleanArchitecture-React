import { IComicDataSource } from "../../data_source";
import { ComicDTO } from "../../dto";
import { IComicRepository } from "../IComicRepository";

export class ComicRepostory implements IComicRepository{
    
    constructor(readonly comicDataSource: IComicDataSource){}

    async getAll(): Promise<ComicDTO[]> {
        return this.comicDataSource.getAll()
    }
    
}