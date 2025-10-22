// src/components/Navbar.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/prediction', label: 'Prediction' },
  { path: '/resources', label: 'Resources' },
  { path: '/contact', label: 'Contact' },
];

const Navigation = () => (
  <Navbar expand="lg" className="navbar-light" style={{ backgroundColor: '#f3e7fa' }}>
    <Container>
      <Navbar.Brand as={NavLink} to="/" className="fw-bold" style={{ color: '#2a254d' }}>
        PCOS Care
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link fw-bold'
                  : 'nav-link text-dark'
              }
              style={({ isActive }) =>
                isActive
                  ? { color: '#a259e8' }
                  : { color: '#2a254d' }
              }
            >
              {label}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
