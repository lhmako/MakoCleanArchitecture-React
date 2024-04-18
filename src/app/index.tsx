import { 
    domainDependencies,
    IComicDataAdapter,
    IDomainMessageAdapter 
} from "../domain";
import { Lazy } from "../lib/Lazy";
import { ComicDataAdaper } from "./adapters/ComicDataAdapter";
import { comicRepostory } from "../data";
import { DomainMessageAdapter } from "./adapters/DomainMessageAdapter";
import { IHomePresenter } from "../ui";
import { HomePresenter } from "./presenters/HomePresenter";

const domainMessageAdapter = new Lazy<IDomainMessageAdapter>(() => new DomainMessageAdapter())
const comicDataAdapter = new Lazy<IComicDataAdapter>(() => new ComicDataAdaper(comicRepostory.value))

const appDomainDependencies = domainDependencies(
    domainMessageAdapter,
    comicDataAdapter
)

export const homePresenter = new Lazy<IHomePresenter>(()=> new HomePresenter(appDomainDependencies.homeStory.value))
