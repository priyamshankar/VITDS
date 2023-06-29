import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" className='bg-warning'>
      <Container>
        <Navbar.Brand href="/">Vehicle Threat Detection System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/track" className='bg-light btn'>Start Streaming</Nav.Link>
            <Nav.Link href="/location" className='bg-light btn mx-4'>Track Location</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:112" className='bg-danger btn my-2'>Emergency SOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent