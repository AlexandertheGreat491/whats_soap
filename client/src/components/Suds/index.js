import React from 'react';
import { Link } from "react-router-dom";

function Suds({ recipes }) {

    return (
        <div className='p-3'>
            {/* map over recipes */}
            {recipes.map((recipe) => (
                <div id='card' className='card p-2 m-1' key={recipe._id}>
                    <Link to={`/sud/${recipe._id}`}><h2>{recipe.title}</h2></Link>
                    <p>{recipe.description}</p>
                    <p>posted by {recipe.username} on {recipe.createdAt}</p>
                </div>
            ))}
        </div>
    )
}

export default Suds;