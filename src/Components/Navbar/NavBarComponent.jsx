import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

function NavBarComponent() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <CartWidget />
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/images/iconos/logo-relojes.png"
            style={{ width: 120 }}
            alt="logo-principal"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Hombre</Nav.Link>
            <Nav.Link href="#action1">Mujer</Nav.Link>
            <Nav.Link href="#action1">Niño</Nav.Link>
            <Nav.Link href="#action1">Niña</Nav.Link>
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
