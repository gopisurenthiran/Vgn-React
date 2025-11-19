import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/Navigation.css';

export default function Navigation() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(null);
  const [hovered, setHovered] = useState(null);
  let timeout;

  const isDesktop = () => window.matchMedia('(min-width: 992px)').matches;

  const handleMouseEnter = (key) => {
    if (isDesktop()) {
      clearTimeout(timeout);
      timeout = setTimeout(() => setHovered(key), 100);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop()) {
      clearTimeout(timeout);
      timeout = setTimeout(() => setHovered(null), 100);
    }
  };

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);
  const toggleDrawerGroup = (k) => setDrawerOpen(drawerOpen === k ? null : k);

  const CustomDropdownItem = ({ to, children }) => (
    <NavDropdown.Item
      as={NavLink}
      to={to}
      className={({ isActive }) =>
        `dropdown-item ${isActive ? 'active' : ''}`
      }
    >
      {children}
    </NavDropdown.Item>
  );

  const Links = ({ inDrawer = false }) => {
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

    if (inDrawer) {
      return (
        <>
          <Nav.Link as={NavLink} to="/" end onClick={closeDrawer}>Home</Nav.Link>
          <DrawerParent
            k="about"
            title="About Us"
            items={[
              { to: '/about', label: 'About VGN' },
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
              { to: '/ongoing-project', label: 'Ongoing Projects' },
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
          <Nav.Link as={NavLink} to="/nri" onClick={closeDrawer}>NRI</Nav.Link>
          <Nav.Link as={NavLink} to="/irefer" onClick={closeDrawer}>iRefer</Nav.Link>
          <DrawerParent
            k="customers"
            title="Customer's Corner"
            items={[
              { to: '/customer-support', label: 'Customer Support' },
              { to: '/emi-calculator', label: 'EMI Calculator' },
            ]}
          />
          <DrawerParent
            k="contact"
            title="Contact Us"
            items={[
              { to: '/contact', label: 'Address' },
              { to: '/careers', label: 'Careers' },
            ]}
          />
        </>
      );
    }

    return (
      <>
        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>

        <div onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <NavDropdown title="About Us" id="about-dd" show={hovered === 'about'}>
            <CustomDropdownItem to="/about">About VGN</CustomDropdownItem>
            <CustomDropdownItem to="/values">Our Values</CustomDropdownItem>
            <CustomDropdownItem to="/chairman">Message From Chairman</CustomDropdownItem>
            <CustomDropdownItem to="/our-people">Our People</CustomDropdownItem>
            <CustomDropdownItem to="/testimonial">Testimonials</CustomDropdownItem>
          </NavDropdown>
        </div>

        <div onMouseEnter={() => handleMouseEnter('projects')} onMouseLeave={handleMouseLeave}>
          <NavDropdown title="Projects" id="projects-dd" show={hovered === 'projects'}>
            <CustomDropdownItem to="/ongoing-project">Ongoing Projects</CustomDropdownItem>
            <CustomDropdownItem to="/completed-project">Completed Projects</CustomDropdownItem>
          </NavDropdown>
        </div>

        <div onMouseEnter={() => handleMouseEnter('partners')} onMouseLeave={handleMouseLeave}>
          <NavDropdown title="Partners" id="partners-dd" show={hovered === 'partners'}>
            <CustomDropdownItem to="/channel-partner">Channel Partners</CustomDropdownItem>
            <CustomDropdownItem to="/land-enquiry">Land Enquiry / Joint Ventures</CustomDropdownItem>
          </NavDropdown>
        </div>

        <Nav.Link as={NavLink} to="/nri">NRI</Nav.Link>
        <Nav.Link as={NavLink} to="/irefer">iRefer</Nav.Link>

        <div onMouseEnter={() => handleMouseEnter('customers')} onMouseLeave={handleMouseLeave}>
          <NavDropdown title="Customer's Corner" id="customers-dd" show={hovered === 'customers'}>
            <CustomDropdownItem to="/customer-support">Customer Support</CustomDropdownItem>
            <CustomDropdownItem to="/emi-calculator">EMI Calculator</CustomDropdownItem>
          </NavDropdown>
        </div>

        <div onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>
          <NavDropdown title="Contact Us" id="contact-dd" show={hovered === 'contact'}>
            <CustomDropdownItem to="/contact">Address</CustomDropdownItem>
            <CustomDropdownItem to="/careers">Careers</CustomDropdownItem>
          </NavDropdown>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='vgn-top-strip'>
        <Container>
          <div className="d-flex justify-content-end align-items-center px-3 py-1">

            {/* Phone */}
            <i className="bi bi-telephone-fill me-2" />
            <a
              href="tel:04440024002"
              className="me-4 small text-decoration-none text-white"
            >
              044 4002 4002 / 044 6965 6902
            </a>

            {/* Email */}
            <i className="bi bi-envelope-fill me-2" />
            <a
              href="mailto:info@vgngroup.org"
              className="small text-decoration-none text-white"
            >
              info@vgngroup.org
            </a>

          </div>
        </Container>

      </div>

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
