import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

//COMPONENTS
import CartWidget from "./CartWidget";

function NavBarComponent() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <CartWidget />
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/images/iconos/logo-relojes.png"
              style={{ width: 120 }}
              alt="logo-principal"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <LinkContainer to="/category/1">
              <Nav.Link>Hombre</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/category/2">
              <Nav.Link>Mujer</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/3">
              <Nav.Link>Niño</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/4">
              <Nav.Link>Niña</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar un producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
