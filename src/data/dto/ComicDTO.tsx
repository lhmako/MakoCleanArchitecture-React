import { ThumnailDTO } from "./ThumnailDTO";

export interface ComicDTO {
    id: string;
    title: string;
    description: string;
    thumnail: ThumnailDTO;
}