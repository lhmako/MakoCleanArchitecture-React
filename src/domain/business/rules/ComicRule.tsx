import { ComicModel } from "../../model/ComicModel";
import { ThumbnailRule } from "./ThumbnailRule";

export class ComicRule {

    thumbnailRule: ThumbnailRule;

    constructor(readonly model: ComicModel){
        this.thumbnailRule = new ThumbnailRule(model.thumnail)
    }

    isEmpty(): boolean {
        const thumbnailRule = new ThumbnailRule(this.model.thumnail)
        return this.model.id.length == 0 || this.model.title.length == 0 || thumbnailRule.isEmpty()
    }
}