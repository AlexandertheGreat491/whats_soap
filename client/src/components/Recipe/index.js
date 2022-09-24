import React from "react";

function Recipe(recipe) {
    return (
        <div>
            <h2>{recipe.title}</h2>
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
            <p>posted by {recipe.user} on {recipe.createdAt}</p>
        </div>
    )
}

export default Recipe;