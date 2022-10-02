import React from "react";
import { useParams, Link } from "react-router-dom";
import { QUERY_SUD } from "../utils/queries";
import { DELETE_SUD } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";

function SingleSud() {
  const { id: sudId } = useParams();
  const { data } = useQuery(QUERY_SUD, {
    variables: { id: sudId },
  });

  const recipe = data?.sud || [];

  const [deleteSud] = useMutation(DELETE_SUD, {
    update(cache, { data: { addSud } }) {
      const { suds } = cache.readQuery({ query: DELETE_SUD });
      cache.writeQuery({
        query: DELETE_SUD,
        data: { suds: [deleteSud, ...suds] },
      });
    },
  });

  const deleteSubmit = async (event) => {
    try {
      await deleteSud({
        variables: { sudId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {data && (
        <div id="singlecard" className="card p-2 m-3 d-inline-flex">
          <h2 id="single">{recipe.title}</h2>
          <img className="images" src={recipe.url} alt={recipe.title}></img>
          <h3 id="des">Description</h3>
          <p className="single">{recipe.description}</p>
          <h3 id="ingredientsheader">Ingredients</h3>
          <p className="single">{recipe.ingredients}</p>
          <h3 id="instructionsheader">Instructions</h3>
          <p className="single">{recipe.steps}</p>
          <p id='timestamp'>posted by
            <Link to={`/profile/${recipe.username}`}><span className="m-2">{recipe.username}</span></Link>
            on {recipe.createdAt}</p>
          {Auth.loggedIn() ? (
            <>
              <div className="d-flex">
                <Link id="edit" className="p-2 m-1" to={`/edit/${recipe._id}`}>
                  Edit
                </Link>
                <a id="delete" className="p-2 m-1" href="/" onClick={deleteSubmit}>
                  Delete
                </a>
              </div>
            </>
          ) : (
            <>
              <p id="singlealert">Please log in to edit a Sud</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleSud;
