import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, getRecipes } from '../../../../redux/actions/recipes';
import './index.scss'

function NewRecipeForm() {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingridients, setIngridients] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const user = useSelector(
        (store: any) =>
            store.auth.token.user.username
    )

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addRecipe({ title, description, ingridients, imageUrl, author: user }))
        dispatch(getRecipes())
    }

    return (
        <div className='recipes-form'>
            <h1>Add a new recipe</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <label htmlFor="image">Link of image</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={event => setImageUrl(event.target.value)}
                />
                <label htmlFor="title">Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <label htmlFor="title">Ingridients</label>
                <input
                    type="text"
                    name="ingridients"
                    value={ingridients}
                    onChange={event => setIngridients(event.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewRecipeForm
