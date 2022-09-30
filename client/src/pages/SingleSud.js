import React from "react";
import { useParams } from 'react-router-dom';
import { QUERY_SUD } from "../utils/queries";
import { useQuery } from '@apollo/client';

function SingleSud() {
    const { id: sudId } = useParams();
    const { data } = useQuery(QUERY_SUD, {
        variables: { id: sudId }
    });

    const recipe = data?.sud || [];

    return (
        <div>
            {data &&
                <div>
                    <h2>{recipe.title}</h2>
                    <h3>Description</h3>
                    <p>{recipe.description}</p>
                    <h3>Ingredients</h3>
                    <p>{recipe.ingredients}</p>
                    <h3>Instructions</h3>
                    <p>{recipe.steps}</p>
                    <p>posted by {recipe.username} on {recipe.createdAt}</p>
                    {/* <div>
                        <h3>Reactions</h3>
                        {recipe?.sudreactions.map((reaction) => (
                    <p key={reaction}>{reaction}</p>
                ))}
                    </div> */}
                </div>}
        </div>
    )
}

export default SingleSud;