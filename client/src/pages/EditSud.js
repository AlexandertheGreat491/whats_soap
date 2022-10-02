import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QUERY_SUD } from "../utils/queries";
import { EDIT_SUD } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import ReactCloudinaryUploader from "@app-masters/react-cloudinary-uploader";

function EditSud(props) {
  const { id: sudId } = useParams();
  const { data } = useQuery(QUERY_SUD, {
    variables: { id: sudId },
  });

  const recipe = data?.sud || [];

  const [title, setTitle] = useState(recipe.title);
  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const [description, setDescription] = useState(recipe.description);
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const ingredientChange = (event) => {
    setIngredients(event.target.value);
  };

  const [steps, setSteps] = useState(recipe.steps);
  const stepChange = (event) => {
    setSteps(event.target.value);
  };

  const [username, setUsername] = useState(recipe.username);
  const nameChange = (event) => {
    setUsername(event.target.value);
  };

  // cloudinary stuff for images

  // OPTION 1
  let choices = {
    cloud_name: "oliviacm",
    upload_preset: "ujb638tm",
    multiple: true,
    returnJustUrl: true
  };

  // const [url, setUrl] = useState("banana");
  var url = "apple";

  const uploadImage = (event) => {
    event.preventDefault();

    ReactCloudinaryUploader
      .open(choices)
      .then(image => {
        url = image[0];
      });
  }

  // end cloudinary

  const [editSud] = useMutation(EDIT_SUD, {
    update(cache, { data: { editSud } }) {
      const { suds } = cache.readQuery({ query: EDIT_SUD });
      cache.writeQuery({
        query: EDIT_SUD,
        data: { suds: [editSud, ...suds] },
      });
    },
  });

  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await editSud({
        variables: {
          title,
          description,
          ingredients,
          steps,
          username,
          sudId,
          url
        },
      });
    } catch (e) {
      console.error(e);
    }
    navigate("/");
  };

  return (
    <div>
      {data && (
        <div>
          <h2>Edit a Sud</h2>
          <form onSubmit={handleFormSubmit}>
            <p>Title: </p>
            <input
              placeholder="Title"
              value={title}
              onChange={titleChange}
            ></input>
            <br></br>
            <p>Description: </p>
            <textarea
              placeholder="Description"
              value={description}
              onChange={descriptionChange}
            ></textarea>
            <p>Ingredients: </p>
            <textarea
              placeholder="Ingredients"
              value={ingredients}
              onChange={ingredientChange}
            ></textarea>
            <br></br>
            <p>Steps: </p>
            <textarea
              placeholder="Steps"
              value={steps}
              onChange={stepChange}
            ></textarea>
            <br></br>
            <p>Name: </p>
            <input
              placeholder="username"
              value={username}
              onChange={nameChange}
            ></input>
            <br></br>
            <p>
              Image:
            </p>

            <button onClick={uploadImage}>Upload</button>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditSud;
