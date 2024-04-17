import { IComicRepository } from "../../data";
import { ComicModel, ExtensionType, IComicDataAdapter } from "../../domain";

export class ComicDataAdaper implements IComicDataAdapter {

    constructor(
        readonly comicRepository: IComicRepository
    ){}

    async loadComics(): Promise<ComicModel[]> {
        const comicsDto = await this.comicRepository.getAll()
        const comicsModel: ComicModel[] = []
        comicsDto.forEach((comicDTO) => {
            const comicModel: ComicModel = {
                id: comicDTO.id,
                title: comicDTO.title,
                description: comicDTO.description,
                thumnail: {
                    id: comicDTO.thumnail.id,
                    path: comicDTO.thumnail.path,
                    extension: comicDTO.thumnail.extension as ExtensionType
                }
            }
            comicsModel.push(comicModel)
        });
        return comicsModel
    }
    
}