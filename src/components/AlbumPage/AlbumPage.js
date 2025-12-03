import React from 'react';
import './AlbumPage.css';

function AlbumPage({ imagenes }) {
  return (
    <div className="books-wrapper"> 
      <div className="albums-row">
        {imagenes.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`imagen ${idx + 1}`}
            className="album-img"
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;
