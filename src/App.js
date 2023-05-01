import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Music from "./pages/Music";
import Git from "./components/gitSection";
import NoMatch from "./components/whoSection";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import Game from './pages/game'
// import Header from './components/Header';


import './reset.css';
import './style.css';

function App() {
  return (
      <Router >
        <div>
            <Nav />
            <Routes >
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/git"
                element={<Git />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route
                path="/music"
                element={<Music />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
              <Route
                path="/game"
                element={<Game />}
                />
            </Routes>
            <Footer />
        </div>
      </Router>

  );
}

export default App;