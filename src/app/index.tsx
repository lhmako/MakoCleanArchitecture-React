import { 
    domainDependencies,
    IComicDataAdapter,
    IDomainMessageAdapter 
} from "../domain";
import { Lazy } from "../lib/Lazy";
import { ComicDataAdaper } from "./adapters/ComicDataAdapter";
import { comicRepostory } from "../data";
import { DomainMessageAdapter } from "./adapters/DomainMessageAdapter";
import { IHomeStory } from "../domain";

const domainMessageAdapter = new Lazy<IDomainMessageAdapter>(() => new DomainMessageAdapter())
const comicDataAdapter = new Lazy<IComicDataAdapter>(() => new ComicDataAdaper(comicRepostory.value))

const appDomainDependencies = domainDependencies(
    domainMessageAdapter,
    comicDataAdapter
)
export const homeStory:IHomeStory = appDomainDependencies.homeStory.value
