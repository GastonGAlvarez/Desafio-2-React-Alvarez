import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const NavBar = () =>{

    return(
        <>
            <div className="navBar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/">
                            <Navbar.Brand>Tienda El Pepe</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Nosotros</Nav.Link>
                                <Link to="/products">
                                    <Nav.Link href="/products">Productos</Nav.Link>                            
                                </Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );

}

export default NavBar