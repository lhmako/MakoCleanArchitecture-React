import { ThumbnailModel } from "../../model/ThumbnailModel";

export class ThumbnailRule{
        
    constructor(readonly model: ThumbnailModel){}

    isEmpty(): boolean {
        return this.model.id.length === 0 || this.model.path.length === 0 || this.model.id.length === 0
    }

}