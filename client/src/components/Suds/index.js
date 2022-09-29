import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../../utils/queries';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Suds({ recipes }) {

    return (
        <div>
            {/* map over recipes */}
            {recipes.map((recipe) => (
                <div>
                    <Link to={`/sud/${recipe._id}`}><h2>{recipe.title}</h2></Link>
                    <img src={`/images/${recipe.image}`} alt={recipe.title}></img>
                    <h3>Description</h3>
                    <p>{recipe.description}</p>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.steps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                    <p>posted by {recipe.username} on {recipe.createdAt}</p>
                    <div>
                        <h3>Reactions</h3>
                        {/* {recipe?.sudreactions.map((reaction) => (
                                <p key={reaction}>{reaction}</p>
                            ))} */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Suds;