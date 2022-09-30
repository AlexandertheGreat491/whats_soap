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

    const [sudIngredients, setIngredients] = useState([]);
    const ingredientsChange = event => {
        setIngredients(event.target.value);
    };

    const [sudSteps, setSteps] = useState([]);
    const stepsChange = event => {
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

    const [ingredientCounter, setIngredientCounter] = useState(1);
    const addIngredient = (event) => {
        event.preventDefault();
        setIngredientCounter(ingredientCounter + 1);
        console.log(ingredientCounter);
    };

    const [stepCounter, setStepCounter] = useState(1);
    const addStep = (event) => {
        event.preventDefault();
        setStepCounter(stepCounter + 1);
        console.log(stepCounter);
    };

    return (
        <div>
            <h2>Add a Sud</h2>
            <form onSubmit={handleFormSubmit}>
                <p>Title: </p>
                <input placeholder="Title"
                    defaultValue={sudTitle}
                    onChange={titleChange}></input>
                <br></br>
                <p>Description: </p>
                <input placeholder="Description"
                    defaultValue={sudDescription}
                    onChange={descriptionChange}></input>
                <div><p>Ingredients: </p>
                    {Array.from(Array(ingredientCounter)).map((c, index) => {
                        return <div key={c}>
                            <input
                                type="text"
                                placeholder="ingredient"
                            ></input>
                            <br></br>
                        </div>;
                    })}
                    <br></br>
                    <button
                        onClick={addIngredient}>+</button>
                </div>
                <div><p>Steps: </p>
                    {Array.from(Array(stepCounter)).map((c, index) => {
                        return <div key={c}>
                            <input type="text" placeholder="step" ></input>
                            <br></br>
                        </div>;
                    })}
                    <br></br>
                    <button
                        onClick={addStep}>+</button>
                </div>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddSud;