
import React from 'react'
import Comments from './Comments'
import Details from './Details'
import Votes from './Votes'

function Recipe() {
    return (
        <div>
            <Details/>
            <Comments/>
            <Votes/>
        </div>
    )
}

export default Recipe

