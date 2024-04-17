import { ComicModel } from "../model/ComicModel";

export interface IValidateComicsUseCase{
    invoke(comic: ComicModel): boolean
}