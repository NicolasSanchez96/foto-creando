import React from 'react';
import './Album.css';

function Album({ titulo, descripcion, imagen }) {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}

export default Album;
