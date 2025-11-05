// src/pages/Eventos.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Album from '../components/Album';

// ------------------
// Portadas de los álbumes
// ------------------
import fotoDelfi from '../imagenes/eventos/delfi/_DSC1064.jpg';
import fotoGuillermo from '../imagenes/eventos/guillermo/_DSC0932.jpg';
import fotoKiara from '../imagenes/eventos/kiara/_DSC2128.jpg';
import fotoMorena from '../imagenes/eventos/morena/_DSC8564.jpg';

// ------------------
// Fotos completas de cada álbum
// ------------------
// Delfi
import delfi01 from '../imagenes/eventos/delfi/_DSC1027.jpg';
import delfi02 from '../imagenes/eventos/delfi/_DSC1028.jpg';
import delfi03 from '../imagenes/eventos/delfi/_DSC1064.jpg';
import delfi04 from '../imagenes/eventos/delfi/_DSC1065.jpg';
import delfi05 from '../imagenes/eventos/delfi/_DSC1083.jpg';
import delfi06 from '../imagenes/eventos/delfi/_DSC1325.jpg';
import delfi07 from '../imagenes/eventos/delfi/_DSC1311.jpg';
import delfi08 from '../imagenes/eventos/delfi/_DSC1281.jpg';
import delfi09 from '../imagenes/eventos/delfi/_DSC1102.jpg';
import delfi10 from '../imagenes/eventos/delfi/_DSC1087.jpg';

// Guillermo
import guillermo01 from '../imagenes/eventos/guillermo/_DSC0256.jpg';
import guillermo02 from '../imagenes/eventos/guillermo/_DSC0280.jpg';
import guillermo03 from '../imagenes/eventos/guillermo/_DSC0356.jpg';
import guillermo04 from '../imagenes/eventos/guillermo/_DSC0373.jpg';
import guillermo05 from '../imagenes/eventos/guillermo/_DSC0636.jpg';
import guillermo06 from '../imagenes/eventos/guillermo/_DSC0626.jpg';
import guillermo07 from '../imagenes/eventos/guillermo/_DSC0714.jpg';
import guillermo08 from '../imagenes/eventos/guillermo/_DSC0715.jpg';
import guillermo09 from '../imagenes/eventos/guillermo/_DSC0726.jpg';
import guillermo10 from '../imagenes/eventos/guillermo/_DSC0932.jpg';

// Kiara
import kiara01 from '../imagenes/eventos/kiara/_DSC2031.jpg';
import kiara02 from '../imagenes/eventos/kiara/_DSC2036.jpg';
import kiara03 from '../imagenes/eventos/kiara/_DSC2230.jpg';
import kiara04 from '../imagenes/eventos/kiara/_DSC2234.jpg';
import kiara05 from '../imagenes/eventos/kiara/_DSC2226.jpg';
import kiara06 from '../imagenes/eventos/kiara/_DSC2160.jpg';
import kiara07 from '../imagenes/eventos/kiara/_DSC2210.jpg';
import kiara08 from '../imagenes/eventos/kiara/_DSC2128.jpg';
import kiara09 from '../imagenes/eventos/kiara/_DSC2124.jpg';
import kiara10 from '../imagenes/eventos/kiara/_DSC2039.jpg';

// Morena
import morena01 from '../imagenes/eventos/morena/_DSC8549.jpg';
import morena02 from '../imagenes/eventos/morena/_DSC8550.jpg';
import morena03 from '../imagenes/eventos/morena/_DSC8557.jpg';
import morena04 from '../imagenes/eventos/morena/_DSC8558.jpg';
import morena05 from '../imagenes/eventos/morena/_DSC8561-2.jpg';
import morena06 from '../imagenes/eventos/morena/_DSC8562.jpg';
import morena07 from '../imagenes/eventos/morena/_DSC8563.jpg';
import morena08 from '../imagenes/eventos/morena/_DSC8564.jpg';
import morena09 from '../imagenes/eventos/morena/_DSC8568.jpg';
import morena10 from '../imagenes/eventos/morena/_DSC8576.jpg';

// ------------------
// Arrays exportables
// ------------------
export const imagenesDelfi = [
  delfi01,delfi02,delfi03,delfi04,delfi05,
  delfi06,delfi07,delfi08,delfi09,delfi10
];

export const imagenesGuillermo = [
  guillermo01,guillermo02,guillermo03,guillermo04,guillermo05,
  guillermo06,guillermo07,guillermo08,guillermo09,guillermo10
];

export const imagenesKiara = [
  kiara01,kiara02,kiara03,kiara04,kiara05,
  kiara06,kiara07,kiara08,kiara09,kiara10
];

export const imagenesMorena = [
  morena01,morena02,morena03,morena04,morena05,
  morena06,morena07,morena08,morena09,morena10
];

// ------------------
// Componente Eventos
// ------------------
function Eventos() {
  const navigate = useNavigate();

  const albums = [
    { titulo: "Delfi 1 Año", imagen: fotoDelfi, ruta: "/eventos/delfi" },
    { titulo: "Guillermo 50 Años", imagen: fotoGuillermo, ruta: "/eventos/guillermo" },
    { titulo: "Kiara 15 Años", imagen: fotoKiara, ruta: "/eventos/kiara" },
    { titulo: "Morena 15 Años", imagen: fotoMorena, ruta: "/eventos/morena" },
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

export default Eventos;
