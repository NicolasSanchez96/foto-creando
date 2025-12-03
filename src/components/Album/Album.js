import React from 'react';
import './Album.css';

function Album({ titulo, descripcion, imagen, onClick }) {
  // manejador para accesibilidad (Enter / Space)
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="album-wrapper"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <img src={imagen} alt={titulo} className="album-img" />
      <h5 className="album-title">{titulo}</h5>
      {descripcion && <p className="album-text">{descripcion}</p>}
    </div>
  );
}

export default Album;
