// imports React and its useState and useEffect hooks
// add in useEffect hook
import React, { useState } from "react";
// imports the Form, Button, and Alert components from react-bootstrap
//import { Form, Button, Alert } from "react-bootstrap";
// imports useMutation from @apollo/client
import { useMutation } from "@apollo/client";
// imports the the LOGIN mutation
import { LOGIN_USER } from "../utils/mutations";
// imports the auth logic
import Auth from "../utils/auth";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clears the form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
                <input
                className="form-input"
                autoComplete="email"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                />
                <input
                className="form-input"
                autoComplete="current-password"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                />
                <button className="btn d-block w-100" type="submit">
                    Submit
                </button>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};
// exports the LoginForm function so that the LoginForm component can be used by the app
export default LoginForm;
