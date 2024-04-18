import { IDomainMessageAdapter } from "../../adapters/IDomainMessageAdapter";
import { ComicModel } from "../../model/ComicModel";
import { ComicRule } from "../rules/ComicRule";

export class ComicBusinessLogic {

    constructor(
        readonly messageAdapter: IDomainMessageAdapter
    ){}
    
    invoke(comicModel: ComicModel): boolean {
        const comicRule = new ComicRule(comicModel)
        if(comicRule.thumbnailRule.isEmpty()){
            throw new Error(this.messageAdapter.thumbnailIsEmpty);
        }
        if(comicRule.isEmpty())
            throw new Error(this.messageAdapter.comicIsEmpty);
        return true
    }
}