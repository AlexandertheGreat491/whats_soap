import React, { useState } from "react";
import { QUERY_SUDS } from "../../utils/queries";
import { ADD_SUD } from "../../utils/mutations";
import { useMutation } from '@apollo/client';

function AddSud(props) {
    const {
        options = [],
        setOption,
        currentOption,
    } = props;

    const [title, setTitle] = useState('');
    const titleChange = event => {
        setTitle(event.target.value);
    };

    const [description, setDescription] = useState('');
    const descriptionChange = event => {
        setDescription(event.target.value);
    };

    const [ingredients, setIngredients] = useState('');
    const ingredientChange = event => {
        setIngredients(event.target.value);
    };

    const [steps, setSteps] = useState('');
    const stepChange = event => {
        setSteps(event.target.value);
    };

    const [username, setUsername] = useState('');
    const nameChange = event => {
        setUsername(event.target.value);
    };

    const [addSud, { error }] = useMutation(ADD_SUD, {
        update(cache, { data: { addSud } }) {
            const { suds } = cache.readQuery({ query: QUERY_SUDS });
            cache.writeQuery({
                query: QUERY_SUDS,
                data: { suds: [addSud, ...suds] }
            });
        }
    });

    const handleFormSubmit = async (event) => {


        try {
            await addSud({
                variables: {
                    title,
                    description,
                    ingredients,
                    steps,
                    username
                }
            });
        } catch (e) {
            console.error(e);
        }
        setTitle('');
        setDescription('');
        setIngredients('');
        setSteps('');
        setUsername('');
        console.log("before setoptions");
        setOption(options[0]);
        console.log("after setoption");
    };

    return (
        <div>
            <h2>Add a Sud</h2>
            <form onSubmit={handleFormSubmit}>
                <p>Title: </p>
                <input placeholder="Title"
                    value={title}
                    onChange={titleChange}></input>
                <br></br>
                <p>Description: </p>
                <textarea placeholder="Description"
                    value={description}
                    onChange={descriptionChange}></textarea>
                <p>Ingredients: </p>
                <textarea
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={ingredientChange}></textarea>
                <br></br>
                <p>Steps: </p>
                <textarea
                    placeholder="Steps"
                    value={steps}
                    onChange={stepChange} ></textarea>
                <br></br>
                <p>Name: </p>
                <input placeholder="username"
                    value={username}
                    onChange={nameChange}></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddSud;