import React, { useState } from "react";
import { QUERY_SUDS } from "../../utils/queries";
import { ADD_SUD } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import ReactCloudinaryUploader from "@app-masters/react-cloudinary-uploader";

function AddSud(props) {
  const { options = [], setOption } = props;

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

  const [addSud] = useMutation(ADD_SUD, {
    update(cache, { data: { addSud } }) {
      const { suds } = cache.readQuery({ query: QUERY_SUDS });
      cache.writeQuery({
        query: QUERY_SUDS,
        data: { suds: [addSud, ...suds] },
      });
    },
  });

  const handleFormSubmit = async (event) => {

    console.log(title, description, ingredients, steps, username, url);
    try {
      await addSud({
        variables: {
          title,
          description,
          ingredients,
          steps,
          username,
          url
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
        <form onSubmit={handleFormSubmit} >
          <h2 id="add" style={{ color: "brown" }} className="me-4">
            Add a Sud:
          </h2>
          <table>
            <tr>
              <th><p style={{ color: "brown" }}
                className="m-2"
                id="sudtitle">
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
              <th><p style={{ color: "brown" }} id="suddes" className="m-2">
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
              <th><p style={{ color: "brown" }} id="sudi" className="m-2">
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
              <th><p style={{ color: "brown" }} id="sudss" className="m-2">
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
              <th><p style={{ color: "brown" }} id="sudsname" className="m-2">
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
            <button id="upload"
              style={{ color: "black" }}
              className="btn d-block m-2"
              onClick={uploadImage}>Upload Image</button>
            {isUploaded && <span className="mt-3 ms-3" style={{ color: "brown" }}>Image uploaded!</span>}
          </div>
          <button
            id="submit"
            style={{ color: "black" }}
            className="btn d-block m-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSud;
