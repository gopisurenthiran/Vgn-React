import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/Navigation.css';

const isDesktop = () => window.matchMedia('(min-width: 992px)').matches;

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);  // desktop hover
  const [showDrawer,   setShowDrawer]   = useState(false); // mobile drawer
  const [drawerOpen,   setDrawerOpen]   = useState(null);  // which group open in drawer

  /* desktop hover handlers */
  const enter  = k => isDesktop() && setOpenDropdown(k);
  const leave  = () => isDesktop() && setOpenDropdown(null);
  const toggle = (k, o) => isDesktop() && setOpenDropdown(o ? k : null);

  /* drawer handlers */
  const openDrawer  = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  /* toggle one section at a time in drawer */
  const toggleDrawerGroup = (k) =>
    setDrawerOpen(drawerOpen === k ? null : k);

  /* shared link renderer */
  const Links = ({ inDrawer = false }) => {
    /* desktop props */
    const hoverProps = (k) =>
      inDrawer
        ? {}
        : { show: openDropdown === k, onMouseEnter: () => enter(k), onMouseLeave: leave, onToggle: (o) => toggle(k, o) };

    /* helper: parent + children (drawer version) */
    const DrawerParent = ({ k, title, items }) => (
      <>
        <Nav.Link
          className="drawer-parent d-flex justify-content-between align-items-center"
          onClick={() => toggleDrawerGroup(k)}
        >
          {title}
          <i className={`bi ${drawerOpen === k ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
        </Nav.Link>

        {drawerOpen === k &&
          items.map(({ to, label }) => (
            <Nav.Link
              as={NavLink}
              to={to}
              key={to}
              className="ps-4"
              onClick={closeDrawer}
            >
              {label}
            </Nav.Link>
          ))}
      </>
    );

    /* MOBILE DRAWER  (accordion style) */
    if (inDrawer) {
      return (
        <>
          <Nav.Link as={NavLink} to="/" end onClick={closeDrawer}>
            Home
          </Nav.Link>

          <DrawerParent
            k="about"
            title="About Us"
            items={[
              { to: '/about', label: 'About VGN' },
              { to: '/values', label: 'Our Values' },
              { to: '/chairman', label: 'Message From Chairman' },
              { to: '/our-people', label: 'Our People' },
              { to: '/testimonial', label: 'Testimonials' },
            ]}

          />

          <DrawerParent
            k="projects"
            title="Projects"
            items={[
              { to: '/ongoing-project',   label: 'Ongoing Projects' },
              { to: '/completed-project', label: 'Completed Projects' },
            ]}
          />

          <DrawerParent
            k="partners"
            title="Partners"
            items={[
              { to: '/channel-partner', label: 'Channel Partners' },
              { to: '/land-enquiry', label: 'Land Enquiry / Joint Ventures' },
            ]}
          />

          <Nav.Link as={NavLink} to="/nri"    onClick={closeDrawer}>NRI</Nav.Link>
          <Nav.Link as={NavLink} to="/irefer" onClick={closeDrawer}>iRefer</Nav.Link>

          <DrawerParent
            k="customers"
            title="Customer's Corner"
            items={[
              { to: '/customer-support',       label: 'Customer Support' },
              { to: '/emi-calculator', label: 'EMI Calculator' },
            ]}
          />

          <DrawerParent
            k="contact"
            title="Contact Us"
            items={[
              { to: '/contact',   label: 'Address' },
              { to: '/careers', label: 'Careers' },
            ]}
          />
        </>
      );
    }

    /* DESKTOP  (hover dropdowns) */
    return (
      <>
    <Nav.Link as={NavLink} to="/" end onClick={closeDrawer}>
      Home
    </Nav.Link>

    {/* About Us */}
    <NavDropdown
      title="About Us"
      id="about-dd"
      drop="down"
      {...hoverProps('about')}
    >
      <NavDropdown.Item as={NavLink} to="/about"        onClick={closeDrawer}>About VGN</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/values"       onClick={closeDrawer}>Our Values</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/chairman"     onClick={closeDrawer}>Message From Chairman</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/our-people"   onClick={closeDrawer}>Our People</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/testimonial"  onClick={closeDrawer}>Testimonials</NavDropdown.Item>
    </NavDropdown>

    {/* Projects */}
    <NavDropdown
      title="Projects"
      id="projects-dd"
      drop="down"
      {...hoverProps('projects')}
    >
      <NavDropdown.Item as={NavLink} to="/ongoing-project"   onClick={closeDrawer}>Ongoing Projects</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/completed-project" onClick={closeDrawer}>Completed Projects</NavDropdown.Item>
    </NavDropdown>

    {/* Partners */}
    <NavDropdown
      title="Partners"
      id="partners-dd"
      drop="down"
      {...hoverProps('partners')}
    >
      <NavDropdown.Item as={NavLink} to="/channel-partner"  onClick={closeDrawer}>Channel Partners</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/land-enquiry"     onClick={closeDrawer}>Land Enquiry / Joint Ventures</NavDropdown.Item>
    </NavDropdown>

    {/* Simple links */}
    <Nav.Link as={NavLink} to="/nri"    onClick={closeDrawer}>NRI</Nav.Link>
    <Nav.Link as={NavLink} to="/irefer" onClick={closeDrawer}>iRefer</Nav.Link>

    {/* Customer's Corner */}
    <NavDropdown
      title="Customer's Corner"
      id="customers-dd"
      drop="down"
      {...hoverProps('customers')}
    >
      <NavDropdown.Item as={NavLink} to="/customer-support" onClick={closeDrawer}>Customer Support</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/emi-calculator"   onClick={closeDrawer}>EMI Calculator</NavDropdown.Item>
    </NavDropdown>

    {/* Contact Us */}
    <NavDropdown
      title="Contact Us"
      id="contact-dd"
      drop="down"
      {...hoverProps('contact')}
    >
      <NavDropdown.Item as={NavLink} to="/contact"  onClick={closeDrawer}>Address</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/careers"  onClick={closeDrawer}>Careers</NavDropdown.Item>
    </NavDropdown>
  </>
    );
  };

  return (
    <>
      {/* top strip */}
      <div className='vgn-top-strip'>
        
      <Container >
      <div className="vgn-top-strip d-flex justify-content-end align-items-center px-3 py-1">
        
        <i className="bi bi-telephone-fill me-2" />
        <span className="me-4 small">044 4002 4002 / 044 6965 6902</span>
        <i className="bi bi-envelope-fill me-2" />
        <span className="small">info@vnggroup.org</span>
      </div>
      </Container>
      </div>


      {/* navbar */}
      <Navbar expand="lg" className="vgn-navbar py-0" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} alt="VGN" height="56" />
          </Navbar.Brand>

          <button className="navbar-toggler border-0" onClick={openDrawer} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="align-items-lg-center ms-auto fw-bold text-uppercase">
              <Links />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* drawer */}
      <Offcanvas show={showDrawer} onHide={closeDrawer} placement="start" className="vgn-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={logo} alt="VGN" height="40" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column fw-bold text-uppercase">
            <Links inDrawer />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
