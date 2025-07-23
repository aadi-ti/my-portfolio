import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Resume from './Resume';  // <-- import Resume component

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

        <div className="ms-auto">
          <Resume />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
