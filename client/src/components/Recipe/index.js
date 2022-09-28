import React from "react";

function Recipe(recipe) {
    return (
        <div>
            <h2>{recipe.title}</h2>
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
                <p>reaction......</p>
            </div>
        </div>
    )
}

export default Recipe;