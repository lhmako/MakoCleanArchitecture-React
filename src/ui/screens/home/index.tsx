import useComics from "../../hooks/comics.hook"
import Component from "./Component"
import { IHomePresenter } from "./IHomePresenter"

export interface IHomeArgs{
    presenter: IHomePresenter
}

const Home = (args: IHomeArgs) => {
    
    const {mutateAsync: loadComics} = useComics(args.presenter.loadComics())
    //loadComics()

    return <Component />
}

export default Home