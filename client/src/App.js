import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Footer from "./components/Footer";
import SingleSud from "./pages/SingleSud";
import EditSud from "./pages/EditSud";
import Profile from "./pages/Profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer $(token)` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [options] = useState([{ name: "View Suds" }, { name: "Add" }]);
  const [currentOption, setOption] = useState(options[0]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header
            options={options}
            setOption={setOption}
            currentOption={currentOption}
          />
          <div id="main" >
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    options={options}
                    setOption={setOption}
                    currentOption={currentOption}
                  />
                }
              />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/sud/:id" element={<SingleSud />} />
              <Route
                path="/edit/:id"
                element={
                  <EditSud
                    options={options}
                    setOption={setOption}
                    currentOption={currentOption}
                  />
                }
              />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
