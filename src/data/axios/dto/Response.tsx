interface ResultsDTO<T>{
    results: T
}

export interface ResponseDTO<T>{
    data: ResultsDTO<T>
}