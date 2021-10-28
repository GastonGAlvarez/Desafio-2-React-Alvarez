import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = ({children}) =>{

    return(
        <>
            <div className="navBar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Tienda El Pepe</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Nosotros</Nav.Link>
                                <Nav.Link href="#pricing">Productos</Nav.Link>
                                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Promociones</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {children}
        </>
    );

}

export default NavBar