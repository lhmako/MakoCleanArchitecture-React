import { 
    ComicModel,
    IHomeStory,
} from "../..";
import { IComicDataAdaper } from "../../adapters/IComicDataAdapter";
import { IValidateComicsUseCase } from "../../usecases/IValidateComicsUseCase";

export class HomeStory implements IHomeStory{

    constructor(
        readonly comicDataAdaper: IComicDataAdaper,
        readonly validateComicsUseCase: IValidateComicsUseCase
    ){}

    async loadComics(): Promise<ComicModel[]> {
        const comics = await this.comicDataAdaper.loadComics()
        comics.forEach((comic) => {
            this.validateComicsUseCase.invoke(comic)
        })
        return comics
    }
    
}