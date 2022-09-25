import React from "react";

function AddSud() {
    function addIngredient() {
        // add ingredient button
    }

    function addStep() {
        // add step button 
    }

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

    return (
        <div>
            <h2>Add a Sud</h2>
            <form>
                <p>Title: </p>
                <input placeholder="Title"></input>
                <br></br>
                <div><p>Ingredients: </p>
                    <input placeholder="Ingredient"></input>
                    <br></br>
                    <button
                        onClick={addIngredient}>+</button>
                </div>
                <div><p>Steps: </p>
                    <input placeholder="Step"></input>
                    <br></br>
                    <button
                        onClick={addStep}>+</button>
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default AddSud;