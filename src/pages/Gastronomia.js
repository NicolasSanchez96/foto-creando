import React from 'react';
import Album from '../components/Album';

function Gastronomia() {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <Album 
          titulo="Recetas 1" 
          descripcion="Platos modernos y creativos" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Recetas 2" 
          descripcion="Postres deliciosos" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Recetas 3" 
          descripcion="Cocina internacional" 
          imagen="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}

export default Gastronomia;

