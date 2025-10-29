import React from 'react';
import Album from '../components/Album';

// Imágenes
import fotoMdq24 from '../imagenes/personal/mdq-analogica/AA019A.jpg';
import fotoMdq25 from '../imagenes/personal/mdq-digital/_DSC0158.jpg';
import fotoNorte from '../imagenes/personal/norte/AA008.jpg';
import fotoPopurri from '../imagenes/personal/popurri/AA040.jpg';

import './Books.css';

function Personal() {
  const albums = [
    { titulo: "Mdq 2024 (Analogica)", imagen: fotoMdq24  },
    { titulo: "Mdq 2025 (Digital)", imagen: fotoMdq25 },
    { titulo: "Norte 2024", imagen: fotoNorte},
    { titulo: "Popurri #1", imagen: fotoPopurri },
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

export default Personal;
