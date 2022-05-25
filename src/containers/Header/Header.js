import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


export const Header = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#">Physio-Records</Navbar.Brand>
              <Navbar.Text>Hello there!</Navbar.Text>
          </Container>
      </Navbar>
    </>
  );
};
