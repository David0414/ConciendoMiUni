import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/foda">FODA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sombrero">SOMBRERO</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/catwda">CATWDA</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/ishikawa">ISHIKAWA</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/resumen">RESÚMEN</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/actividad">ACTIVIDAD</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
