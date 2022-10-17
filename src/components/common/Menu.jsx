import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
         Cafe Brunch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-item nav-link' to='/'>
              Inicio
            </NavLink>
          <NavLink className="nav-item nav-link" to='/administrador'>
            Administrar
          </NavLink>
          <NavLink end className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
