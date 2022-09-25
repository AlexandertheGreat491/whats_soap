import React, { useState } from "react";

function AddSud() {



    // const [addSud, {error}] = useMutation(ADD_SUD, {
    //     update(cache, {data: { addSud } }) {
    //         try {
    //             const
    //         }
    //     }
    // });

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         await ADD_SUD()
    //     }
    // };

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
            <form>
                <p>Title: </p>
                <input placeholder="Title"></input>
                <br></br>
                <div><p>Ingredients: </p>
                    {Array.from(Array(ingredientCounter)).map((c, index) => {
                        return <div>
                            <input key={c} type="text" placeholder="ingredient"></input>
                            <br></br>
                        </div>;
                    })}
                    <br></br>
                    <button
                        onClick={addIngredient}>+</button>
                </div>
                <div><p>Steps: </p>
                    {Array.from(Array(stepCounter)).map((c, index) => {
                        return <div>
                            <input key={c} type="text" placeholder="step"></input>
                            <br></br>
                        </div>;
                    })}
                    <br></br>
                    <button
                        onClick={addStep}>+</button>
                </div>
                <br></br>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default AddSud;