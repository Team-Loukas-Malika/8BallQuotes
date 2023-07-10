import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateQ from "./Components/CreateQ";
import HomePage from "./Components/HomePage";
import Qlibrary from "./Components/Qlibrary";
import Header from "./Components/NavBar";
import SearchResults from "./Components/SearchResults"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import AppFooter from "./Components/Footer";
import React from "react";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="cursor-pointer App">
      <AnimatedCursor />
      <Card />
      <Router>
      <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createq" element={<CreateQ />} />
            <Route path="/qlibrary" element={<Qlibrary />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
      <footer>
        <AppFooter/>
      </footer>

    </div>
  );
}

export default App;
