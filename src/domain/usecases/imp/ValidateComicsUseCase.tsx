import { ComicBusinessLogic } from "../../business/logic/ComicBusinessLogic";
import { ComicModel } from "../../model/ComicModel";
import { IValidateComicsUseCase } from "../IValidateComicsUseCase";

export class ValidateComicsUseCase implements IValidateComicsUseCase{
    constructor(
        readonly comicBusinessLogic: ComicBusinessLogic
    ){}

    invoke(comic: ComicModel): boolean {
        return this.comicBusinessLogic.invoke(comic)
    }
}