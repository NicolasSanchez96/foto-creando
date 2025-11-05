// src/pages/Personal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Album from '../components/Album';

// ------------------
// Portadas
// ------------------
import fotoMdq24 from '../imagenes/personal/mdq-analogica/AA019A.jpg';
import fotoMdq25 from '../imagenes/personal/mdq-digital/_DSC0158.jpg';
import fotoNorte from '../imagenes/personal/norte/AA014.jpg';
import fotoPopurri from '../imagenes/personal/popurri/AA040.jpg';

// ------------------
// Fotos completas de cada álbum (10 por álbum)
// ------------------
// Mdq 2024 (Analógica)
import mdq24_01 from '../imagenes/personal/mdq-analogica/AA019A.jpg';
import mdq24_02 from '../imagenes/personal/mdq-analogica/AA013A.jpg';
import mdq24_03 from '../imagenes/personal/mdq-analogica/AA016A.jpg';
import mdq24_04 from '../imagenes/personal/mdq-analogica/AA020A.jpg';
import mdq24_05 from '../imagenes/personal/mdq-analogica/AA025A.jpg';
import mdq24_06 from '../imagenes/personal/mdq-analogica/AA022A.jpg';
import mdq24_07 from '../imagenes/personal/mdq-analogica/AA032A.jpg';
import mdq24_08 from '../imagenes/personal/mdq-analogica/AA031A.jpg';
import mdq24_09 from '../imagenes/personal/mdq-analogica/AA029A.jpg';
import mdq24_10 from '../imagenes/personal/mdq-analogica/AA028A.jpg';

// Mdq 2025 (Digital)
import mdq25_01 from '../imagenes/personal/mdq-digital/_DSC0066.jpg';
import mdq25_02 from '../imagenes/personal/mdq-digital/_DSC0069.jpg';
import mdq25_03 from '../imagenes/personal/mdq-digital/_DSC0076-2.jpg';
import mdq25_04 from '../imagenes/personal/mdq-digital/_DSC0080.jpg';
import mdq25_05 from '../imagenes/personal/mdq-digital/_DSC0084.jpg';
import mdq25_06 from '../imagenes/personal/mdq-digital/_DSC0089.jpg';
import mdq25_07 from '../imagenes/personal/mdq-digital/_DSC0085.jpg';
import mdq25_08 from '../imagenes/personal/mdq-digital/_DSC0128-2.jpg';
import mdq25_09 from '../imagenes/personal/mdq-digital/_DSC0144.jpg';
import mdq25_10 from '../imagenes/personal/mdq-digital/_DSC0158.jpg';

// Norte 2024
import norte01 from '../imagenes/personal/norte/AA006.jpg';
import norte02 from '../imagenes/personal/norte/AA009.jpg';
import norte03 from '../imagenes/personal/norte/AA010.jpg';
import norte04 from '../imagenes/personal/norte/AA013.jpg';
import norte05 from '../imagenes/personal/norte/AA014.jpg';
import norte06 from '../imagenes/personal/norte/AA017.jpg';
import norte07 from '../imagenes/personal/norte/AA020.jpg';
import norte08 from '../imagenes/personal/norte/AA023.jpg';
import norte09 from '../imagenes/personal/norte/AA028.jpg';
import norte10 from '../imagenes/personal/norte/AA029.jpg';

// Popurri #1
import popurri01 from '../imagenes/personal/popurri/AA014.jpg';
import popurri02 from '../imagenes/personal/popurri/AA018.jpg';
import popurri03 from '../imagenes/personal/popurri/AA019.jpg';
import popurri04 from '../imagenes/personal/popurri/AA020.jpg';
import popurri05 from '../imagenes/personal/popurri/AA039.jpg';
import popurri06 from '../imagenes/personal/popurri/AA024.jpg';
import popurri07 from '../imagenes/personal/popurri/AA031.jpg';
import popurri08 from '../imagenes/personal/popurri/AA033.jpg';
import popurri09 from '../imagenes/personal/popurri/AA040.jpg';
import popurri10 from '../imagenes/personal/popurri/AA036.jpg';

// ------------------
// Arrays exportables
// ------------------
export const imagenesMdq24 = [
  mdq24_01, mdq24_02, mdq24_03, mdq24_04, mdq24_05,
  mdq24_06, mdq24_07, mdq24_08, mdq24_09, mdq24_10
];

export const imagenesMdq25 = [
  mdq25_01, mdq25_02, mdq25_03, mdq25_04, mdq25_05,
  mdq25_06, mdq25_07, mdq25_08, mdq25_09, mdq25_10
];

export const imagenesNorte = [
  norte01, norte02, norte03, norte04, norte05,
  norte06, norte07, norte08, norte09, norte10
];

export const imagenesPopurri = [
  popurri01, popurri02, popurri03, popurri04, popurri05,
  popurri06, popurri07, popurri08, popurri09, popurri10
];

// ------------------
// Componente Personal
// ------------------
function Personal() {
  const navigate = useNavigate();

  const albums = [
    { titulo: "Mdq 2024 (Analogica)", imagen: fotoMdq24, ruta: "/personal/mdq24" },
    { titulo: "Mdq 2025 (Digital)", imagen: fotoMdq25, ruta: "/personal/mdq25" },
    { titulo: "Norte 2024", imagen: fotoNorte, ruta: "/personal/norte" },
    { titulo: "Popurri #1", imagen: fotoPopurri, ruta: "/personal/popurri" },
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

export default Personal;

