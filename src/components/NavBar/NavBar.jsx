import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';

const NavBar = () =>{

    return(
        <>
            <div className="navBar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link to="/" className="text-decoration-none">
                            <Navbar.Brand>Tienda El Pepe</Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/products" className="nav-link">
                                    Productos                            
                                </Link>
                                <Nav.Link href="#features">Nosotros</Nav.Link>
                            </Nav>
                            <Nav>
                                <CartWidget/>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );

}

export default NavBar