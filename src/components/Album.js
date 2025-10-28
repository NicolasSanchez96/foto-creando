import React from 'react';
import './Album.css';

function Album({ titulo, descripcion, imagen }) {
  return (
    <div className="album-wrapper">
      <img src={imagen} alt={titulo} className="album-img" />
      <h5 className="album-title">{titulo}</h5>
      {descripcion && <p className="album-text">{descripcion}</p>}
    </div>
  );
}

export default Album; // <- esto es lo que permite importarlo en Books.js y Eventos.js
