// import Comments from './Comments'
// import Details from './Details'
// import Votes from './Votes'
import moment from 'moment'
import './index.scss'

function Recipe(recipe: any) {

    const {
        title,
        author,
        date,
        description,
        imageUrl,
        ingridients
    } = recipe.recipe

    return (
        <div className='recipe'>
            <div>
                <img
                    style={{ width: '200px' }}
                    src={imageUrl}
                    alt={title}
                />
            </div>
            <div >
                <h1>{title}</h1>
                <p>{description}</p>
                <p>Date: {moment(date).format('MMMM Do YYYY , h:mm:ss a')}</p>
                <h3>Ingridients:</h3>
                {
                    ingridients.map((ingridient: any) => {
                        return <p key={ingridient}>{ingridient}</p>
                    })
                }
                <p>Author: {author}</p>
            </div>
        </div>
    )
}

export default Recipe

