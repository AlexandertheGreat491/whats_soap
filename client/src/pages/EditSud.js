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

  const [isUploaded, setUploaded] = useState(false);

  var url = "";

  const uploadImage = (event) => {
    event.preventDefault();

    ReactCloudinaryUploader
      .open(choices)
      .then(image => {
        url = image[0];
        setUploaded(true);
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
      <br></br>
      <div id="sudedit" className="card justify-content-center p-2 container">
        {data && (
          <div className="card justify-content-center p-2 container">
            <form onSubmit={handleFormSubmit} >
              <h2 id="sud-edit" style={{ color: "brown" }} className="me-4">Edit a Sud</h2>
              <table>
                <tr>
                  <th><p style={{ color: "brown" }}
                    className="m-2 thing">
                    Title:
                  </p></th>
                  <th><input
                    className="m-2"
                    placeholder="Title"
                    value={title}
                    onChange={titleChange}
                  ></input></th>
                </tr>
                <tr>
                  <th><p style={{ color: "brown" }} className="m-2 thing">
                    Description:
                  </p></th>
                  <th><textarea
                    placeholder="Description"
                    value={description}
                    onChange={descriptionChange}
                    className="m-2"
                  ></textarea></th>
                </tr>
                <tr>
                  <th><p style={{ color: "brown" }} className="m-2 thing">
                    Ingredients:
                  </p></th>
                  <th><textarea
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={ingredientChange}
                    className="m-2"
                  ></textarea></th>
                </tr>
                <tr>
                  <th><p style={{ color: "brown" }} className="m-2 thing">
                    Steps:
                  </p></th>
                  <th><textarea
                    placeholder="Steps"
                    value={steps}
                    onChange={stepChange}
                    className="m-2"
                  ></textarea></th>
                </tr>
                <tr>
                  <th><p style={{ color: "brown" }} className="m-2 thing">
                    Name:
                  </p></th>
                  <th><input
                    placeholder="username"
                    value={username}
                    onChange={nameChange}
                    className="m-2"
                  ></input></th>
                </tr>
              </table>
              <div className="d-flex">
                <br></br>
                <button id="uploadedit"
                  style={{ color: "black" }}
                  className="btn d-block m-2"
                  onClick={uploadImage}>Upload Image</button>
                {isUploaded && <span className="mt-3 ms-3" style={{ color: "brown" }}>Image uploaded!</span>}
              </div>

              <button
                id="submitedit"
                style={{ color: "black" }}
                className="btn d-block m-2"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditSud;
