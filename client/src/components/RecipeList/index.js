import React from 'react';
import Recipe from '../Recipe';

function RecipeList() {
    const recipes = [
        {
            _id: 1,
            title: "Soap dummy",
            user: "oliviamckee",
            ingredients: ["lavender", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022"
        },
        {
            _id: 2,
            title: "Soap dummy2",
            user: "oliviamckee",
            ingredients: ["oatmeal", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022"
        },
        {
            _id: 3,
            title: "Soap dummy3",
            user: "oliviamckee",
            ingredients: ["honey", "soap base"],
            steps: ["mix all in bowl", "pour into mold"],
            createdAt: "9.24.2022"
        },
    ]

    return (
        <div>
            {/* map over recipes */}
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe._id}
                    _id={recipe._id}
                    title={recipe.title}
                    user={recipe.user}
                    ingredients={recipe.ingredients}
                    steps={recipe.steps}
                    createdAt={recipe.createdAt}
                />
            ))}
        </div>
    )
}

export default RecipeList;