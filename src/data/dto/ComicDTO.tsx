import { ThumbnailDTO } from "./ThumbnailDTO";

export interface ComicDTO {
    id: string;
    title: string;
    description: string;
    thumnail: ThumbnailDTO;
}