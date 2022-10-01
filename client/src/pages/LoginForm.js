// imports React and its useState and useEffect hooks
import React, { useState } from "react";
// imports useMutation from @apollo/client
import { useMutation } from "@apollo/client";
// imports the the LOGIN_USER mutation
import { LOGIN_USER } from "../utils/mutations";
// imports the auth logic
import Auth from "../utils/auth";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // updates state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    
    setFormState({
      ...formState,
      [name]: value,
    });
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
    <main className="d-flex flex-row justify-content-center">
      <div className="col-12 col-md-6">
        <div  id='login' className="card mt-5 ms-2 me-2 mb-5">
          <h4 id="login-text" style={{color:'brown'}} className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
                <input
                className="form-input me-1"
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
                <button id="submit" style={{color:'black'}} className="btn d-block mt-2 me-2 mb-2" type="submit">
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
