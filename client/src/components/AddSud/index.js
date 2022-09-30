import React, { useState } from "react";
import { QUERY_SUDS } from "../../utils/queries";
import { ADD_SUD } from "../../utils/mutations";
import { useMutation } from '@apollo/client';

function AddSud() {
    const [sudTitle, setTitle] = useState('');
    const titleChange = event => {
        setTitle(event.target.value);
    };

    const [sudDescription, setDescription] = useState('');
    const descriptionChange = event => {
        setDescription(event.target.value);
    };

    const [sudIngredients, setIngredients] = useState('');
    const ingredientChange = event => {
        setIngredients(event.target.value);
    };

    const [sudSteps, setSteps] = useState([]);
    const stepChange = event => {
        setSteps(event.target.value);
    };

    const [addSud, { error }] = useMutation(ADD_SUD, {
        update(cache, { data: { addSud } }) {
            const { suds } = cache.readQuery({ query: QUERY_SUDS });
            cache.writeQuery({
                query: QUERY_SUDS,
                data: { suds: [addSud, ...suds] }
            })
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addSud({
                variables: {
                    sudTitle,
                    sudDescription,
                    sudIngredients,
                    sudSteps
                }
            });
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <h2>Add a Sud</h2>
            <form onSubmit={handleFormSubmit}>
                <p>Title: </p>
                <input placeholder="Title"
                    value={sudTitle}
                    onChange={titleChange}></input>
                <br></br>
                <p>Description: </p>
                <textarea placeholder="Description"
                    value={sudDescription}
                    onChange={descriptionChange}></textarea>
                <p>Ingredients: </p>
                <textarea
                    placeholder="Ingredients"
                    value={sudIngredients}
                    onChange={ingredientChange}></textarea>
                <br></br>
                <p>Steps: </p>
                <textarea
                    placeholder="Steps"
                    value={sudSteps}
                    onChange={stepChange} ></textarea>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddSud;