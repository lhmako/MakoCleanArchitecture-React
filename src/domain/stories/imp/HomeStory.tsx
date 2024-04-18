import { 
    ComicModel,
    IHomeStory,
} from "../..";
import { IComicDataAdapter } from "../../adapters/IComicDataAdapter";
import { IValidateComicsUseCase } from "../../usecases/IValidateComicsUseCase";

export class HomeStory implements IHomeStory{

    constructor(
        readonly comicDataAdaper: IComicDataAdapter,
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