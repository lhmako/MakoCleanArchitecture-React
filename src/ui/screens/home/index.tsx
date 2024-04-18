import { useEffect } from "react"
import useComics from "../../hooks/comics.hook"
import Component from "./Component"
import { IHomeArgs } from "./arguments"

const Home = (args: IHomeArgs) => {
    
    const {loadComics, comics} = useComics(args.presenter)

    useEffect(()=>{
        loadComics()
    }, [args])

    return <Component comics={comics}/>
}

export default Home