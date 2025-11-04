import React from 'react';
import { useNavigate } from 'react-router-dom';
import Album from '../components/Album';

// ------------------
// Portadas
// ------------------
import fotoEma from '../imagenes/books/ema/Photo05_5A.jpg';
import fotoMelisa from '../imagenes/books/melisa/AA038.jpg';
import fotoMuestra from '../imagenes/books/muestra/sad.JPG';
import fotoSuspension from '../imagenes/books/suspension/weq.JPG';

// ------------------
// Fotos completas de cada álbum
// Emanuel Fresca
import ema01 from '../imagenes/books/ema/Photo05_5A.jpg';
import ema02 from '../imagenes/books/ema/Photo04_4A.jpg';
import ema03 from '../imagenes/books/ema/Photo08_8A.jpg';
import ema04 from '../imagenes/books/ema/Photo16_16A.jpg';
import ema05 from '../imagenes/books/ema/Photo06_6A.jpg';
import ema06 from '../imagenes/books/ema/Photo17_17A.jpg';
import ema07 from '../imagenes/books/ema/Photo23_23A.jpg';
import ema08 from '../imagenes/books/ema/Photo25_25A.jpg';
import ema09 from '../imagenes/books/ema/Photo35_35A.jpg';
import ema10 from '../imagenes/books/ema/Photo28_28A.jpg';

// Melicia
import mel01 from '../imagenes/books/melisa/AA038.jpg';
import mel02 from '../imagenes/books/melisa/AA005.jpg';
import mel03 from '../imagenes/books/melisa/AA011.jpg';
import mel04 from '../imagenes/books/melisa/AA007.jpg';
import mel05 from '../imagenes/books/melisa/AA013.jpg';
import mel06 from '../imagenes/books/melisa/AA021.jpg';
import mel07 from '../imagenes/books/melisa/AA028.jpg';
import mel08 from '../imagenes/books/melisa/AA030.jpg';
import mel09 from '../imagenes/books/melisa/AA016.jpg';
import mel10 from '../imagenes/books/melisa/AA018.jpg';

// Muestra Acrobacia
import mus01 from '../imagenes/books/muestra/sad.JPG';
import mus02 from '../imagenes/books/muestra/edry.JPG';
import mus03 from '../imagenes/books/muestra/ghj.JPG';
import mus04 from '../imagenes/books/muestra/ghuj.JPG';
import mus05 from '../imagenes/books/muestra/rete.JPG';
import mus06 from '../imagenes/books/muestra/rt.JPG';
import mus07 from '../imagenes/books/muestra/sadad.JPG';
import mus08 from '../imagenes/books/muestra/sdf.JPG';
import mus09 from '../imagenes/books/muestra/try.JPG';
import mus10 from '../imagenes/books/muestra/uyjk.JPG';

// Suspensión Capilar
import susp01 from '../imagenes/books/suspension/weq.JPG';
import susp02 from '../imagenes/books/suspension/asd.JPG';
import susp03 from '../imagenes/books/suspension/dfgdfg.JPG';
import susp04 from '../imagenes/books/suspension/er.JPG';
import susp05 from '../imagenes/books/suspension/ghn.JPG';
import susp06 from '../imagenes/books/suspension/ghjgh.JPG';
import susp07 from '../imagenes/books/suspension/kl.JPG';
import susp08 from '../imagenes/books/suspension/rt.JPG';
import susp09 from '../imagenes/books/suspension/trhr.JPG';
import susp10 from '../imagenes/books/suspension/ujkjh.JPG';

// ------------------
// Arrays exportables
// ------------------
export const imagenesEma = [
  ema01, ema02, ema03, ema04, ema05,
  ema06, ema07, ema08, ema09, ema10
];

export const imagenesMelisa = [
  mel01, mel02, mel03, mel04, mel05,
  mel06, mel07, mel08, mel09, mel10
];

export const imagenesMuestra = [
  mus01, mus02, mus03, mus04, mus05,
  mus06, mus07, mus08, mus09, mus10
];

export const imagenesSuspension = [
  susp01, susp02, susp03, susp04, susp05,
  susp06, susp07, susp08, susp09, susp10
];

// ------------------
// Componente Books
// ------------------
function Books() {
  const navigate = useNavigate();

  const albums = [
    { titulo: "Emanuel Fresca", imagen: fotoEma, ruta: "/books/ema" },
    { titulo: "Melicia", imagen: fotoMelisa, ruta: "/books/melisa" },
    { titulo: "Muestra Acrobacia", imagen: fotoMuestra, ruta: "/books/muestra" },
    { titulo: "Suspensión Capilar", imagen: fotoSuspension, ruta: "/books/suspension" },
  ];

  return (
    <div className="books-wrapper">
      <div className="albums-row">
        {albums.map((album, index) => (
          <Album
            key={index}
            titulo={album.titulo}
            imagen={album.imagen}
            onClick={() => navigate(album.ruta)}
          />
        ))}
      </div>
    </div>
  );
}

export default Books;
