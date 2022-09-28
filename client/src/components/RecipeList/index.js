import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../../utils/queries';
import React from 'react';
import Recipe from '../Recipe';

function RecipeList() {
    // const recipes = [
    //     {
    //         _id: 1,
    //         title: "Soap dummy",
    //         user: "oliviamckee",
    //         ingredients: ["lavender", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    //     {
    //         _id: 2,
    //         title: "Soap dummy2",
    //         user: "oliviamckee",
    //         ingredients: ["oatmeal", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    //     {
    //         _id: 3,
    //         title: "Soap dummy3",
    //         user: "oliviamckee",
    //         ingredients: ["honey", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    // ]

    const { data } = useQuery(QUERY_SUDS);
    const recipes = data.sudsFindAll;
    console.log(data);
    console.log(data.sudsFindAll[0].title);

    return (
        <div>
            {/* map over recipes */}
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe._id}
                    _id={recipe._id}
                    title={recipe.title}
                    username={recipe.username}
                    description={recipe.description}
                    image={recipe.image}
                    ingredients={recipe.ingredients}
                    steps={recipe.steps}
                    createdAt={recipe.createdAt}
                />
            ))}
        </div>
    )
}

export default RecipeList;