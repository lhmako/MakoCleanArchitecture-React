import { Lazy } from "../../lib/Lazy";
import { IComicDataSource } from "../data_source";
import { IEndpoint } from "./core/IEndpoint";
import { Endpoint } from "./core/imp/Endpoint";
import { IHttp } from "./core/IHttp";
import { AppRequest } from "./core/imp/AppRequest";
import { FilmAxiosDataSource } from "./imp/FilmAxiosDataSource";

const endpoint = new Lazy<IEndpoint>(() => {
    const url = import.meta.env.VITE_END_POINT
    return new Endpoint(url)
});
const appRequest = new Lazy<IHttp>(() => new AppRequest(endpoint.value))
const filmAxiosDataSource = new Lazy<IComicDataSource>(() => new FilmAxiosDataSource(appRequest.value))
export {
    filmAxiosDataSource
}