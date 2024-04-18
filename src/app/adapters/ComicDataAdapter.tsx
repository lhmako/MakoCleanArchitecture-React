import { IComicRepository } from "../../data";
import { ComicModel, ExtensionType, IComicDataAdapter } from "../../domain";

export class ComicDataAdaper implements IComicDataAdapter {

    constructor(
        readonly comicRepository: IComicRepository
    ){}

    async loadComics(): Promise<ComicModel[]> {
        const comicsDto = await this.comicRepository.getAll()
        const comicsModel: ComicModel[] = []
        comicsDto.map(comicDTO => {
            const comicModel: ComicModel = {
                id: comicDTO.id,
                title: comicDTO.title,
                description: comicDTO.description,
                thumbnail: {
                    id: comicDTO.thumbnail.id ? comicDTO.thumbnail.id : comicDTO.id,
                    path: comicDTO.thumbnail.path,
                    extension: comicDTO.thumbnail.extension as ExtensionType
                }
            }
            comicsModel.push(comicModel)
        });
        return comicsModel
    }
    
}