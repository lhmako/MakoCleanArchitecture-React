import { ThumbnailModel } from "./ThumbnailModel";

export interface ComicModel {
    id: string;
    title: string;
    description: string;
    thumnail: ThumbnailModel;
}