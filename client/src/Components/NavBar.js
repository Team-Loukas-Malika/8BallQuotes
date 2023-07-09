import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoIcon from "../assets/images/Qball.png"
import "./style.css"
import { useState } from "react";


function Header() {
  const [query, setQuery] = useState("");

  
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic with the query value
    console.log("Searching for:", query);
    // Reset the input field after performing the search
    setQuery("");
  }



  
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container fluid>
        <Nav.Link href="/"><img className='nav-logo' src={logoIcon} alt="8ball logo" /></Nav.Link>
        <Navbar.Brand href="/">8ballQuotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form onSubmit={handleSearch} className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Button variant="outline-primary" size="sm" className="mx-2 button-block  "><Nav.Link href="/createq"  >CreateQ</Nav.Link></Button>
            <Button variant="outline-success" size="sm"  className="mx-1 "><Nav.Link href="/qlibrary">Qlibrary</Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
