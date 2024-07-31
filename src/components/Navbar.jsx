import { Outlet, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img
          className="logo"
          src="..\public\a637dffc-6c33-4e48-b4eb-b25913179ade 1111(1).png"
          alt=""
        />
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/tratamientos"
            >
              Tratamientos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/quiensomos"
            >
              Quienes Somos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/contact"
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
