import React from 'react';
import Album from '../components/Album';

// Imágenes
import fotoMadre from '../imagenes/gastro/madre/_DSC3456.jpg';
import fotoPascuas from '../imagenes/gastro/pascuas/_DSC1802.jpg';
import fotoPastas from '../imagenes/gastro/pastas/DSC07909.JPG';
import fotoTortas from '../imagenes/gastro/tortas/_DSC1103.jpg';

import './Books.css';

function Gastronomia() {
  const albums = [
    { titulo: "Dia de la Madre", imagen: fotoMadre  },
    { titulo: "Pascuas", imagen: fotoPascuas },
    { titulo: "Pastas", imagen: fotoPastas },
    { titulo: "Tortas", imagen: fotoTortas },
  ];

  return (
    <div className="books-wrapper">
      <div className="albums-row">
        {albums.map((album, index) => (
          <Album
            key={index}
            titulo={album.titulo}
            imagen={album.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Gastronomia;
