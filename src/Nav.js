import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
    return (
        <Navbar sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Pricing</Nav.Link>
                        <Nav.Link href="#link">Reserve Your Relaxation</Nav.Link>
                        <Nav.Link href="#home">Ammenities</Nav.Link>
                        <Nav.Link href="#home">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MyNavbar;
