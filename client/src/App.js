import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateQ from "./Components/CreateQ";
import HomePage from "./Components/HomePage";
import Qlibrary from "./Components/Qlibrary";
import Header from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.css';
import AppFooter from "./Components/Footer";


function App() {
  return (
    <div className="cursor-pointer App">
      <Header />
      <Card />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/createq" element={<CreateQ />} />
            <Route path="/qlibrary" element={<Qlibrary />} />
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
