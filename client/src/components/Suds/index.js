import React from "react";
import { Link } from "react-router-dom";

function Suds({ recipes }) {

  return (
    <div className='p-3'>
      {/* map over recipes */}
      {recipes.map((recipe) => (
        <div id='card' className='card p-2 m-1 d-flex w-100' key={recipe._id}>
          <Link to={`/sud/${recipe._id}`}><h2>{recipe.title}</h2></Link>
          <div className="inside-card d-flex flex-row">
            <img className="images text-center" src={recipe.url} alt={recipe.title}></img>
            <div className="p-3">
              <p id='description'>{recipe.description}</p>
              <p id='timestamp' className="mb-0">posted by
                <Link to={`profile/${recipe.username}`}><span className="orange-name m-2">{recipe.username}</span></Link>
                on {recipe.createdAt}</p>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  )
};

export default Suds;
