import React from "react";
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
//import Nav from "./components/Nav";
// import AddRecipe from "./pages/AddRecipe";

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/add" element={<AddRecipe />} /> */}
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
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
