import React from 'react';
import Album from '../components/Album';

function Eventos() {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <Album 
          titulo="Exposición 1" 
          descripcion="Galería en Buenos Aires" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Exposición 2" 
          descripcion="Evento de fotografía digital" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Exposición 3" 
          descripcion="Muestra de retratos" 
          imagen="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}

export default Eventos;
