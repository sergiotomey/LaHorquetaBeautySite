import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

function Navbar({ onScrollToAboutUs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link className="logo-link" to="/">
          <img
            className="logo"
            src="public\assets\a637dffc-6c33-4e48-b4eb-b25913179ade 1111(1).png" // Ensure this path is correct
            alt="Logo"
          />
        </Link>
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/"
              end
              aria-current="page"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/tratamientos"
              aria-current="page"
            >
              Tratamientos
            </NavLink>
          </li>
          <li>
            <NavLink onClick={onScrollToAboutUs} to="/#about-us">
              Quienes Somos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="https://wa.me/541141765033"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
