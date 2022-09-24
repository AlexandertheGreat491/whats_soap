import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav></Nav>
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
      <Footer />
    </Router>
  );
}

export default App;
