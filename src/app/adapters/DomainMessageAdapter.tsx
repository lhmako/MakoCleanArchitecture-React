import { IDomainMessageAdapter } from "../../domain";

export class DomainMessageAdapter implements IDomainMessageAdapter{
    comicIsEmpty: string = "Comic is empty"
    thumbnailIsEmpty: string = "Thumbnail in comic is empty"
}