import { Outlet, Link } from "react-router-dom";
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tratamientos">Tratamientos</Link>
          </li>
          <li>
            <Link to="/quiensomos">Quienes Somos</Link>
          </li>
          <li>
            <button>
              <Link to="/contacto">Contacto</Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
