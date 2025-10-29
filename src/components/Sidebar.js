import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 sidebar">
      {/* Título principal + subtítulo */}
      <h2 className="sidebar-title">
        Foto Creando
        <span className="sidebar-subtitle">por Geraldine Condoleo</span>
      </h2>

      <ul className="nav nav-pills flex-column mt-4">
        <li className="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gastronomia">Gastronomía</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/books">Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/personal">Personal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/eventos">Eventos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exposiciones">Exposiciones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
      </ul>

      {/* Leyenda de derechos de autor */}
      <div className="copyright-text">
        <p>
          Todo el contenido tiene derechos de autor de la artista.<br />
          Prohibido el uso comercial sin permiso expreso por escrito.<br />
          <span className="copyright-year">© 2025 GERALDINE CONDOLEO</span>
        </p>
      </div>

      {/* Ícono de Instagram */}
      <div className="text-center instagram-link">
        <a
          href="https://www.instagram.com/tucuenta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
