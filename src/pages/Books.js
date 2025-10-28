import React from 'react';
import Album from '../components/Album';

// Imágenes
import fotoEma from '../imagenes/books/ema/Photo02_2A.jpg';
import fotoMelisa from '../imagenes/books/melisa/AA027.jpg';
import fotoMuestra from '../imagenes/books/muestra/uyi.JPG';
import fotoSuspension from '../imagenes/books/suspension/weq.JPG';

import './Books.css';

function Books() {
  const albums = [
    { titulo: "Emanuel Fresca", imagen: fotoEma },
    { titulo: "Melicia", imagen: fotoMelisa },
    { titulo: "Muestra Acrobacia", imagen: fotoMuestra },
    { titulo: "Suspension Capilar", imagen: fotoSuspension },
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

export default Books;
