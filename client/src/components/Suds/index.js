import React from 'react';
import { Link } from "react-router-dom";

function Suds({ recipes }) {

    return (
        <div>
            {/* map over recipes */}
            {recipes.map((recipe) => (
                <div key={recipe._id}>
                    <Link to={`/sud/${recipe._id}`}><h2>{recipe.title}</h2></Link>
                    <p>{recipe.description}</p>
                    <p>posted by {recipe.username} on {recipe.createdAt}</p>
                </div>
            ))}
        </div>
    )
}

export default Suds;