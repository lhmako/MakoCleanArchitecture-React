import { Lazy } from "../../lib/Lazy";
import { IComicDataSource } from "../data_source";
import { IEndpoint } from "./core/IEndpoint";
import { Endpoint } from "./core/imp/Endpoint";
import { IHttp } from "./core/IHttp";
import { AppRequest } from "./core/imp/AppRequest";
import { ComicAxiosDataSource } from "./imp/ComicAxiosDataSource";
import { MarvelParamsDTO } from "./dto/MarvelParamsDTO";

const endpoint = new Lazy<IEndpoint>(() => {
    const url = import.meta.env.VITE_END_POINT
    return new Endpoint(url)
});

const appRequest = new Lazy<IHttp>(() => new AppRequest(endpoint.value))
const comicAxiosDataSource = new Lazy<IComicDataSource>(() => {
    const params: MarvelParamsDTO = {
        ts: import.meta.env.VITE_MARVEL_TIMESTAMP,
        apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
        hash: import.meta.env.VITE_MARVEL_HASH,
    }
    return new ComicAxiosDataSource(appRequest.value, params)
})
export {
    comicAxiosDataSource
}