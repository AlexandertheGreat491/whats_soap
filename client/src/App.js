import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="*"
            element={<NoMatch />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
