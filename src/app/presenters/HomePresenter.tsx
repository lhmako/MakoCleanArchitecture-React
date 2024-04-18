import { IHomeStory } from "../../domain";
import { IHomePresenter } from "../../ui";
import { ComicDTO } from "../../ui/dto";

export class HomePresenter implements IHomePresenter {
    
    constructor(readonly homeStory: IHomeStory){}

    async loadComics(): Promise<ComicDTO[]> {
        const comicsModel = await this.homeStory.loadComics()
        const comicsDTO: ComicDTO[] = [] 
        comicsModel.map(comicModel => {
            comicsDTO.push(comicModel)
        })
        return comicsDTO
    }
}
/**
{
    id: comicModel.id,
    title: comicModel.title,
    description: comicModel.description,
    thumnail: {
        id: comicModel.thumnail.id,
        path: comicModel.thumnail.path,
        extension: comicModel.thumnail.extension
    }
}
 */