import { ComicDTO } from "../../dto"
import { IHomePresenter } from "./IHomePresenter"

export interface IHomeArgs{
    presenter: IHomePresenter
}

export interface IComponentArgs {
    comics: ComicDTO[]
}