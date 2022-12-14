// imports React along with the useState hook
import React, { useState } from "react";
// imports useMutation
import { useMutation } from "@apollo/client";
// imports the ADD_USER mutation
import { ADD_USER } from "../utils/mutations";

// imports the auth logic
import Auth from "../utils/auth";

const SignUpForm = () => {
  // sets the initial form state
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // checks if form has everything (as per react-bootstrap docs)
    //const form = event.currentTarget;
    //if (form.checkValidity() === false) {
    //event.preventDefault();
    //event.stopPropagation();
    //}

    try {
      const { data } = await addUser({ variables: { ...formState } });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="d-flex flex-row justify-content-center">
      <div id="signup" className="card m-5">
        <h4 id="signheader" style={{ color: "brown" }} className="card-header">
          Sign Up
        </h4>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input m-1"
              placeholder="Your username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
              className="form-input m-1"
              autoComplete="current-password"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input m-1"
              placeholder="Your password"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              id="submit"
              style={{ color: "black" }}
              className="btn d-block m-2"
              type="submit"
            >
              Submit
            </button>
          </form>
          {error && <div>Signup failed</div>}
        </div>
      </div>
    </main>
  );
};
// exports the SignUpForm function so that the SignupForm component can be used by the app
export default SignUpForm;
