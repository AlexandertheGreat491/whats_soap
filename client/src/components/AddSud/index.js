import React, { useState } from "react";
import { QUERY_SUDS } from "../../utils/queries";
import { ADD_SUD } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

function AddSud(props) {
  const { options = [], setOption, currentOption } = props;

  const [title, setTitle] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const [description, setDescription] = useState("");
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const [ingredients, setIngredients] = useState("");
  const ingredientChange = (event) => {
    setIngredients(event.target.value);
  };

  const [steps, setSteps] = useState("");
  const stepChange = (event) => {
    setSteps(event.target.value);
  };

  const [username, setUsername] = useState("");
  const nameChange = (event) => {
    setUsername(event.target.value);
  };

  const [addSud, { error }] = useMutation(ADD_SUD, {
    update(cache, { data: { addSud } }) {
      const { suds } = cache.readQuery({ query: QUERY_SUDS });
      cache.writeQuery({
        query: QUERY_SUDS,
        data: { suds: [addSud, ...suds] },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    try {
      await addSud({
        variables: {
          title,
          description,
          ingredients,
          steps,
          username,
        },
      });
    } catch (e) {
      console.error(e);
    }
    setTitle("");
    setDescription("");
    setIngredients("");
    setSteps("");
    setUsername("");
    setOption(options[0]);
  };

  return (
    <div>
      <br></br>
      <div id="sudadd" className="card justify-content-center p-2 container">
        <form onSubmit={handleFormSubmit}>
          <h2 id="add" style={{ color: "brown" }} className="me-4">
            Add a Sud:
          </h2>
          <p style={{ color: "brown" }} id="sudtitle">
            Title:{" "}
          </p>
          <input
            placeholder="Title"
            value={title}
            onChange={titleChange}
          ></input>
          <p style={{ color: "brown" }} id="suddes">
            Description:{" "}
          </p>
          <textarea
            placeholder="Description"
            value={description}
            onChange={descriptionChange}
          ></textarea>
          <p style={{ color: "brown" }} id="sudi">
            Ingredients:{" "}
          </p>
          <textarea
            placeholder="Ingredients"
            value={ingredients}
            onChange={ingredientChange}
          ></textarea>
          <p style={{ color: "brown" }} id="sudss">
            Steps:{" "}
          </p>
          <textarea
            placeholder="Steps"
            value={steps}
            onChange={stepChange}
          ></textarea>

          <p style={{ color: "brown" }} id="sudsname">
            Name:{" "}
          </p>
          <input
            placeholder="username"
            value={username}
            onChange={nameChange}
          ></input>
          <br></br>
          <button
            id="submit"
            style={{ color: "black" }}
            className="btn d-block mt-2 me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSud;
