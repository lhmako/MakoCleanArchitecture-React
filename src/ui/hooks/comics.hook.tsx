import { useMutation } from "react-query"
import { ComicDTO } from "../dto"

const useComics = (comicsPromise: Promise<ComicDTO[]>) => {
    return useMutation<ComicDTO[], Error>({
        mutationFn: () => comicsPromise,
        onSuccess: () => {

        }
    })
}

export default useComics