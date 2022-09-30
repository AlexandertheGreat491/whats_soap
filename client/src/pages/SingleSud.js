import React from "react";
import { useParams, Link } from 'react-router-dom';
import { QUERY_SUD } from "../utils/queries";
import { DELETE_SUD } from "../utils/mutations";
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

function SingleSud() {
    const { id: sudId } = useParams();
    const { data } = useQuery(QUERY_SUD, {
        variables: { id: sudId }
    });

    const recipe = data?.sud || [];

    const [deleteSud, { error }] = useMutation(DELETE_SUD, {
        update(cache, { data: { addSud } }) {
            const { suds } = cache.readQuery({ query: DELETE_SUD });
            cache.writeQuery({
                query: DELETE_SUD,
                data: { suds: [deleteSud, ...suds] }
            });
        }
    });

    const deleteSubmit = async (event) => {
        try {
            await deleteSud({
                variables: { sudId }
            })
        } catch (e) {
            console.error(e);
        }
    }

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
                    {Auth.loggedIn() ? (
                        <>
                            <Link to={`/edit/${recipe._id}`}>Edit</Link>
                            <a href="/" onClick={deleteSubmit}>Delete</a>

                        </>
                    ) : (
                        <>
                            <p>Please log in to edit a Sud</p>
                        </>
                    )}
                </div>}
        </div>
    )
}

export default SingleSud;