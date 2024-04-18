import { IComponentArgs } from './arguments'

const Component = (args: IComponentArgs) => {
    return (
    <>
        <h1>Super Hero Card</h1>
        <div className="cards">
            {args.comics.map( comic => (
                <div className="card" key={comic.id}>
                    <img src={comic.thumbnail.path} />
                    <h3>{comic.title}</h3>
                    <p>{comic.description}</p>
                </div>
            ))}
            
        </div>
    </>
    )
}

export default Component