import React from 'react';
import Album from '../components/Album';

function Personal() {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <Album 
          titulo="Proyecto Personal 1" 
          descripcion="Fotos personales y experimentales" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Proyecto Personal 2" 
          descripcion="Retratos y momentos capturados" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Proyecto Personal 3" 
          descripcion="Fotografía creativa" 
          imagen="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}

export default Personal;
