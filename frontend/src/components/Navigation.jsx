import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', key: 'home' },
  { path: '/about', label: 'About', key: 'about' },
  { path: '/prediction', label: 'Prediction', key: 'assessment' },
  { path: '/resources', label: 'Resources', key: 'lifestyle' },
  { path: '/contact', label: 'Contact', key: 'contact' },
  { path: '/consultation', label: 'Consultation', key: 'consultation' },
  { path: '/community', label: 'Community', key: 'community' },
  
];

const Navigation = ({ activeSection, setActiveSection }) => (
  <Navbar expand="lg" className="navbar-light fixed-top" 
  style={{
    backgroundColor: '#f3e7fa',
    minHeight: '80px', 
    display: 'flex',
    alignItems: 'center'
  }}
  >
    <Container>
      <Navbar.Brand
        as={NavLink}
        to="/"
        className="fw-bold"
        style={{ color: '#2a254d',fontSize: '1.5rem' }}
        onClick={() => setActiveSection('home')}
      >
        PCOS Care
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navItems.map(({ path, label, key }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? 'nav-link fw-bold' : 'nav-link text-dark')}
              style={({ isActive }) => ({
              color: isActive ? '#a259e8' : '#2a254d',
              fontSize: '1.20rem', // Make nav links larger
              marginLeft: '10px',
              marginRight: '10px'
            })}
              onClick={() => {
                setActiveSection(key);
              }}
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
