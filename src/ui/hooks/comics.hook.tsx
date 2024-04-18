import { useMutation } from "react-query"
import { ComicDTO } from "../dto"
import { IHomePresenter } from "../screens/home/IHomePresenter"
import { useState } from "react"

const useComics = (homePresenter: IHomePresenter) => {

    const [comics, setComics] = useState<ComicDTO[]>([])
    
    const {mutateAsync: loadComics} = useMutation<ComicDTO[], Error>({
        mutationFn: () => homePresenter.loadComics(),
        onSuccess: (data) => setComics(data),
        onError: (e)=> console.log(e)
    })

    return {
        loadComics,
        comics
    }
}

export default useComics