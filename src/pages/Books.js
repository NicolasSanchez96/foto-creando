import React from 'react';
import Album from '../components/Album';

function Books() {
  return (
    <div>
      <div className="d-flex flex-wrap">
        <Album 
          titulo="Book 1" 
          descripcion="Fotografía en película 35mm" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Book 2" 
          descripcion="Retratos en blanco y negro" 
          imagen="https://via.placeholder.com/150" 
        />
        <Album 
          titulo="Book 3" 
          descripcion="Paisajes analógicos" 
          imagen="https://via.placeholder.com/150" 
        />
      </div>
    </div>
  );
}

export default Books;

