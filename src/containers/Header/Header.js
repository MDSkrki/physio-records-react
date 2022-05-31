import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../img/physio-records-logo.png";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="md">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Physio-Records Logo"
              height="64"
              width="64"
            />
            Physio-Records
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
