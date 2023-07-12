import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoIcon from "../assets/images/Qball.png";
import "./style.css";
import { useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [tag, setTag] = useState("");
    // eslint-disable-next-line 
  const [searchResults, setSearchResults] = useState([]);



  async function handleSearch(event) {
    event.preventDefault();
    try {
      let response = await axios.get(`https://eightballquotes-original.onrender.com/quote/tags/${tag}`);
      console.log("response", response);

      navigate("/results", {state: {searchResults: response.data}})

    } catch (error) {
      console.log("Error searching quotes", error);
    }
  }
 function handleKeyPress (e){
  if(e.key==="Enter"){
    return handleSearch(e)
  }
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container fluid>
        <Nav.Link href="/">
          <img className="nav-logo" src={logoIcon} alt="8ball logo" />
        </Nav.Link>
        <Navbar.Brand href="/">8ballQuotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
              value={tag}
              onKeyPress={handleKeyPress}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button onClick={handleSearch} variant="outline-success">
              Search
            </Button>
          </Form>

          <Nav className="my-2 my-lg-0" navbarScroll>
            <Button
              variant="outline-primary"
              size="sm"
              className="mx-2 button-block  "
            >
              <Nav.Link href="/createq">CreateQ</Nav.Link>
            </Button>
            <Button variant="outline-success" size="sm" className="mx-1 ">
              <Nav.Link href="/qlibrary">Qlibrary</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
