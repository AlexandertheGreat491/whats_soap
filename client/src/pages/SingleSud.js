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
          <h3 id="des">Description</h3>
          <p className="single">{recipe.description}</p>
          <h3 id="ingredientsheader">Ingredients</h3>
          <p className="single">{recipe.ingredients}</p>
          <h3 id="instructionsheader">Instructions</h3>
          <p className="single">{recipe.steps}</p>
          <p id="timestamp">
            posted by {recipe.username} on {recipe.createdAt}
          </p>
          {Auth.loggedIn() ? (
            <>
              <Link style={{width:"5%"}} id="edit" className="ps-3 mb-1" to={`/edit/${recipe._id}`}>
                Edit
              </Link>
              <a style={{width:"5%"}} id="delete" className="ps-2" href="/" onClick={deleteSubmit}>
                Delete
              </a>
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
