import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoIcon from "../assets/images/Qball.png"


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav.Link href="/"><img className='nav-logo' src={logoIcon} alt="8ball logo" /></Nav.Link>
        <Navbar.Brand href="/">8ballQuotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Button variant="outline-primary" className="mx-2"><Nav.Link href="/createq"  >CreateQ</Nav.Link></Button>
            <Button variant="outline-secondary"><Nav.Link href="/qlibrary">Qlibrary</Nav.Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
