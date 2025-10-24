import React from "react";
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto-wrapper">
      <div className="contacto-container">
        {/* Información de contacto */}
        <div className="contacto-info">
          <h2>Contacto</h2>
          <p>
            Para consultas de prensa y trabajo, comuníquese a{" "}
            <a href="mailto:contacto@fotocreando.com">contacto@fotocreando.com</a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="http://instagram.com/fotocreando"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://instagram.com/fotocreando
            </a>
          </p>
        </div>

        {/* Formulario de contacto */}
        <div className="contacto-form">
          <h3>Deja tu consulta aquí</h3>
          <form>
            <label htmlFor="consulta">Consulta</label>
            <textarea
              id="consulta"
              className="form-control"
              rows="4"
              placeholder="Escribe tu consulta..."
              style={{ color: '#6d248f' }}
            ></textarea>

            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="tuemail@ejemplo.com"
              style={{ color: '#6d248f' }}
            />

            <label htmlFor="telefono">Número de teléfono</label>
            <input
              type="tel"
              id="telefono"
              className="form-control"
              placeholder="+54 9 11 1234 5678"
              style={{ color: '#6d248f' }}
            />

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
