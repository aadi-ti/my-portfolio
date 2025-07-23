import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#1e1f1e', fontFamily: 'Montserrat, sans-serif' }}
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: '#f5f5dc',
            fontWeight: 600,
            fontSize: '1.7rem',
            letterSpacing: '1px',
            paddingLeft: 40,
          }}
        >
          AditiJoshi.
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              style={{ color: '#f5f5dc', marginRight: '1rem', fontWeight: 400 }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="src\Pages\ProjectsPage.jsx"
              style={{ color: '#f5f5dc', marginRight: '1rem', fontWeight: 400 }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              style={{ color: '#f5f5dc', fontWeight: 400 }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
