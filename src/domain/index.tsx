import { Lazy } from "../lib/Lazy";
import { IComicDataAdapter } from "./adapters/IComicDataAdapter";
import { IDomainMessageAdapter } from "./adapters/IDomainMessageAdapter";
import { ComicBusinessLogic } from "./business/logic/ComicBusinessLogic";
import { IHomeStory } from "./stories/IHomeStory";
import { HomeStory } from "./stories/imp/HomeStory";
import { IValidateComicsUseCase } from "./usecases/IValidateComicsUseCase";
import { ValidateComicsUseCase } from "./usecases/imp/ValidateComicsUseCase";

export type { ComicModel } from "./model/ComicModel";
export type { ExtensionType } from "./model/ExtensionType";
export type { 
    IComicDataAdapter, 
    IDomainMessageAdapter,
    IHomeStory
}

interface IDomainDependencies{
    homeStory: Lazy<IHomeStory>
}

export const domainDependencies = (
    domainMessageAdapter: Lazy<IDomainMessageAdapter>,
    comicDataAdapter: Lazy<IComicDataAdapter>
) : IDomainDependencies => {
    const comicBusinessLogic = new Lazy<ComicBusinessLogic>(() => new ComicBusinessLogic(domainMessageAdapter.value))
    const validateComicsUseCase = new Lazy<IValidateComicsUseCase>(() => new ValidateComicsUseCase(comicBusinessLogic.value))
    const homeStory = new Lazy<IHomeStory>(()=> new HomeStory(comicDataAdapter.value, validateComicsUseCase.value))
    return {
        homeStory
    }
}