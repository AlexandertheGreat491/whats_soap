import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../../utils/queries';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Suds() {
    const recipes = [
        {
            _id: 1,
            title: "Soap dummy",
            user: "oliviamckee",
            ingredients: ["lavender", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022",
            description: "soap",
            image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
        },
        {
            _id: 2,
            title: "Soap dummy2",
            user: "oliviamckee",
            ingredients: ["oatmeal", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022",
            description: "soap",
            image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
        },
        {
            _id: 3,
            title: "Soap dummy3",
            user: "oliviamckee",
            ingredients: ["honey", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022",
            description: "soap",
            image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
        },
    ]


    const { data } = useQuery(QUERY_SUDS);
    // const recipes = data.sudsFindAll;
    console.log(data);

    // const [recipes, setRecipes] = useState(data.sudsFindAll);

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