
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import * as bootstrap from 'bootstrap';

/* ------------------------------ NAV CONFIG ------------------------------ */
const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'About Us',
    children: [
      { title: 'About VGN', path: '/about' },
      { title: 'Our Values', path: '/values' },
      { title: 'Message From Chairman', path: '/chairman' },
      { title: 'Our People', path: '/our-people' },
      { title: 'Testimonials', path: '/testimonial' }
    ]
  },
  {
    title: 'Projects',
    children: [
      { title: 'Ongoing Projects', path: '/ongoing-project' },
      { title: 'Completed Projects', path: '/completed-project' }
    ]
  },
  {
    title: 'Partners',
    children: [
      { title: 'Channel Partners', path: '/channel-partner' },
      { title: 'Land Enquiry / Joint Ventures', path: '/land-enquiry' }
    ]
  },
  { title: 'NRI', path: '/nri' },
  { title: 'iRefer', path: '/irefer' },
  {
    title: "Customer's Corner",
    children: [
      { title: 'Customer Support', path: '/customer-support' },
      { title: 'EMI Calculator', path: '/emi-calculator' }
    ]
  },
  {
    title: 'Contact Us',
    children: [
      { title: 'Address', path: '/contact' },
      { title: 'Careers', path: '/careers' }
    ]
  }
];

/* ------------------------------ COMPONENT ------------------------------ */
export default function Header() {
  const location = useLocation();

  /* hover-open on desktop ------------------------------------------------ */
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.navbar .dropdown');
    dropdowns.forEach((dd) => {
      const menu = dd.querySelector('.dropdown-menu');
      const show = () => { if (window.innerWidth >= 992) { dd.classList.add('show'); menu.classList.add('show'); } };
      const hide = () => { if (window.innerWidth >= 992) { dd.classList.remove('show'); menu.classList.remove('show'); } };
      dd.addEventListener('mouseenter', show);
      dd.addEventListener('mouseleave', hide);
      dd.__cleanup = () => { dd.removeEventListener('mouseenter', show); dd.removeEventListener('mouseleave', hide); };
    });
    return () => dropdowns.forEach((dd) => dd.__cleanup && dd.__cleanup());
  }, []);

  /* auto-close drawer after navigation ---------------------------------- */
  useEffect(() => {
    const ocEl = document.getElementById('mobileMenu');
    if (!ocEl) return;
    const oc = bootstrap.Offcanvas.getInstance(ocEl);
    oc && oc.hide();
    ocEl.querySelectorAll('.collapse.show').forEach((c) => c.classList.remove('show'));
  }, [location.pathname]);

  /* helper to mark active path ------------------------------------------ */
  const isActive = (path) => location.pathname === path;

  /* --------------------------------------------------------------------- */
  return (
    <>
      {/* top strip */}
      <div className="bg-danger text-white py-1 d-none d-lg-block" style={fontStyle}>
        <div className="container-fluid d-flex justify-content-end gap-4">
          <span><i className="bi bi-telephone-fill me-2" />044 4002 4002, 044 6965 6902</span>
          <span><i className="bi bi-envelope-fill me-2" />info@vgngroup.org</span>
        </div>
      </div>

      {/* sticky navbar */}
      <nav className="navbar navbar-expand-lg bg-light py-0 sticky-top shadow-sm" style={{ zIndex: 1020, ...fontStyle }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand py-2">
            <img src={logo} alt="VGN logo" height="48" />
          </Link>

          <button className="navbar-toggler border-0 text-danger" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
            <i className="bi bi-list" style={{ fontSize: '1.8rem' }} />
          </button>

          <div className="collapse navbar-collapse" id="desktopMenu">
            <ul className="navbar-nav ms-auto gap-lg-3 mb-2 mb-lg-0 text-uppercase fw-semibold">
              {navConfig.map((item, idx) =>
                item.children
                  ? <DesktopDropdown key={idx} item={item} isActive={isActive} />
                  : <DesktopLink key={idx} item={item} isActive={isActive} />
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* off-canvas mobile */}
      <div className="offcanvas offcanvas-start" id="mobileMenu" tabIndex="-1">
        <div className="position-absolute top-0 end-0 h-100" style={{ width: '4px', background: '#b71c1c' }} />
        <div className="offcanvas-header">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="VGN logo" height="42" />
          </Link>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>

        <div className="offcanvas-body px-0 d-flex flex-column" style={fontStyle}>
          <ul className="navbar-nav w-100">
            {navConfig.map((item, idx) =>
              item.children
                ? <MobileCollapse key={idx} item={item} target={`mob-${idx}`} isActive={isActive} />
                : <MobileLink key={idx} item={item} isActive={isActive} />
            )}
          </ul>
          <div className="mt-auto border-top text-center py-3 bg-light small">
            <p className="mb-2"><i className="bi bi-telephone-fill me-2" />044 4002 4002, 044 6965 6902</p>
            <p className="mb-0"><i className="bi bi-envelope-fill me-2" />info@vgngroup.org</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------ shared font ------------- */
const fontStyle = { fontFamily: 'Mulish, sans-serif', fontSize: '12px' };

/* ------------ desktop components ------- */
const DesktopLink = ({ item, isActive }) => (
  <li className="nav-item">
    <Link
      to={item.path}
      className={`nav-link px-2 nav-underline ${isActive(item.path)
        ? 'text-danger border-bottom border-2 border-danger'
        : 'text-black'}`}
    >
      {item.title}
    </Link>
  </li>
);

const DesktopDropdown = ({ item, isActive }) => {
  const dropdownActive = item.children.some(c => isActive(c.path));
  return (
    <li className="nav-item dropdown">
      <span
        className={`nav-link dropdown-toggle nav-underline ${dropdownActive
          ? 'text-danger border-bottom border-2 border-danger'
          : 'text-black'}`}
        role="button"
      >
        {item.title}
      </span>
      <ul className="dropdown-menu p-0 small bg-white" style={{ ...fontStyle, borderRadius: 0 }}>
        {item.children.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className={`dropdown-item px-3 dropdown-hover-item ${
                isActive(link.path) ? 'text-danger fw-bold border-start border-3 border-danger' : 'text-black'
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

/* ------------ mobile components -------- */
const MobileLink = ({ item, isActive }) => (
  <li className="nav-item border-bottom">
    <Link
      to={item.path}
      className={`nav-link px-4 py-3 ${isActive(item.path) ? 'text-danger fw-bold' : 'text-black'}`}
      style={fontStyle}
    >
      {item.title}
    </Link>
  </li>
);

const MobileCollapse = ({ item, target, isActive }) => {
  const anyActive = item.children.some(c => isActive(c.path));
  return (
    <li className="nav-item border-bottom">
      <button
        className={`nav-link w-100 text-start px-4 py-3 d-flex justify-content-between align-items-center ${
          anyActive ? 'text-danger fw-bold' : ''
        }`}
        data-bs-toggle="collapse"
        data-bs-target={`#${target}`}
        aria-expanded={anyActive}
        style={fontStyle}
      >
        {item.title}<i className="bi bi-chevron-down small" />
      </button>
      <ul id={target} className={`collapse list-unstyled bg-white ${anyActive ? 'show' : ''}`}>
        {item.children.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.path}
              className={`nav-link px-5 py-2 small ${isActive(link.path) ? 'text-danger fw-bold' : 'text-black'}`}
              style={fontStyle}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
