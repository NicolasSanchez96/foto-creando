import React from 'react';
import Album from '../components/Album';

// Imágenes de eventos
import fotoDelfi from '../imagenes/eventos/delfi/_DSC1064.jpg';
import fotoGuillermo from '../imagenes/eventos/guillermo/_DSC0932.jpg';
import fotoKiara from '../imagenes/eventos/kiara/_DSC2128.jpg';
import fotoMorena from '../imagenes/eventos/morena/_DSC8564.jpg';

import './Books.css'; // Usamos el mismo CSS que Books para mantener la estética

function Eventos() {
  const albums = [
    { titulo: "Delfi 1 Año", imagen: fotoDelfi },
    { titulo: "Guillermo 50 Años", imagen: fotoGuillermo },
    { titulo: "Kiara 15 Años", imagen: fotoKiara },
    { titulo: "Morena 15 Años", imagen: fotoMorena },
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

export default Eventos;
