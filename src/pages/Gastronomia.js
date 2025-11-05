import React from 'react';
import { useNavigate } from 'react-router-dom';
import Album from '../components/Album';

// ------------------
// Portadas
// ------------------
import fotoMadre from '../imagenes/gastro/madre/_DSC3479.jpg';
import fotoTortas from '../imagenes/gastro/tortas/_DSC2709.jpg';
import fotoPastas from '../imagenes/gastro/pastas/DSC07909.JPG';
import fotoPascuas from '../imagenes/gastro/pascuas/_DSC1802.jpg';

// ------------------
// Fotos completas de cada álbum
// Madre
import madre01 from '../imagenes/gastro/madre/_DSC3462-2.jpg';
import madre02 from '../imagenes/gastro/madre/_DSC3443.jpg';
import madre03 from '../imagenes/gastro/madre/_DSC3444.jpg';
import madre04 from '../imagenes/gastro/madre/_DSC3449.jpg';
import madre05 from '../imagenes/gastro/madre/_DSC3455.jpg';
import madre06 from '../imagenes/gastro/madre/_DSC3459.jpg';
import madre07 from '../imagenes/gastro/madre/_DSC3456.jpg';
import madre08 from '../imagenes/gastro/madre/_DSC3468.jpg';
import madre09 from '../imagenes/gastro/madre/_DSC3479.jpg';
import madre10 from '../imagenes/gastro/madre/_DSC3491.jpg';

// Tortas
import tortas01 from '../imagenes/gastro/tortas/_DSC1102.jpg';
import tortas02 from '../imagenes/gastro/tortas/_DSC1103.jpg';
import tortas03 from '../imagenes/gastro/tortas/_DSC1104.jpg';
import tortas04 from '../imagenes/gastro/tortas/_DSC1108.jpg';
import tortas05 from '../imagenes/gastro/tortas/_DSC1461.jpg';
import tortas06 from '../imagenes/gastro/tortas/_DSC1112.jpg';
import tortas07 from '../imagenes/gastro/tortas/_DSC2709.jpg';
import tortas08 from '../imagenes/gastro/tortas/_DSC2711.jpg';
import tortas09 from '../imagenes/gastro/tortas/_DSC2713.jpg';
import tortas10 from '../imagenes/gastro/tortas/_DSC2708.jpg';

// Pastas
import pastas01 from '../imagenes/gastro/pastas/DSC07909.JPG';
import pastas02 from '../imagenes/gastro/pastas/DSC07916.JPG';
import pastas03 from '../imagenes/gastro/pastas/DSC07921.JPG';
import pastas04 from '../imagenes/gastro/pastas/DSC07925.JPG';
import pastas05 from '../imagenes/gastro/pastas/DSC07936.JPG';
import pastas06 from '../imagenes/gastro/pastas/DSC07940.JPG';
import pastas07 from '../imagenes/gastro/pastas/DSC07958.JPG';
import pastas08 from '../imagenes/gastro/pastas/DSC07975.JPG';
import pastas09 from '../imagenes/gastro/pastas/DSC07986.JPG';
import pastas10 from '../imagenes/gastro/pastas/DSC07989.JPG';

// Pascuas
import pascuas01 from '../imagenes/gastro/pascuas/_DSC1802.jpg';
import pascuas02 from '../imagenes/gastro/pascuas/_DSC1797-2.jpg';
import pascuas03 from '../imagenes/gastro/pascuas/_DSC1799.jpg';
import pascuas04 from '../imagenes/gastro/pascuas/_DSC1801.jpg';
import pascuas05 from '../imagenes/gastro/pascuas/_DSC1819.jpg';
import pascuas06 from '../imagenes/gastro/pascuas/_DSC1824.jpg';
import pascuas07 from '../imagenes/gastro/pascuas/_DSC1827.jpg';
import pascuas08 from '../imagenes/gastro/pascuas/_DSC1839.jpg';
import pascuas09 from '../imagenes/gastro/pascuas/_DSC1875.jpg';
import pascuas10 from '../imagenes/gastro/pascuas/_DSC1874.jpg';

// ------------------
// Arrays de imágenes
// ------------------
export const imagenesMadre = [madre01,madre02,madre03,madre04,madre05,madre06,madre07,madre08,madre09,madre10];
export const imagenesTortas = [tortas01,tortas02,tortas03,tortas04,tortas05,tortas06,tortas07,tortas08,tortas09,tortas10];
export const imagenesPastas = [pastas01,pastas02,pastas03,pastas04,pastas05,pastas06,pastas07,pastas08,pastas09,pastas10];
export const imagenesPascuas = [pascuas01,pascuas02,pascuas03,pascuas04,pascuas05,pascuas06,pascuas07,pascuas08,pascuas09,pascuas10];

// ------------------
// Componente Gastronomia
// ------------------
function Gastronomia() {
  const navigate = useNavigate();

  const albums = [
    { titulo: "Regalos", imagen: fotoMadre, ruta: "/gastro/madre" },
    { titulo: "Catering", imagen: fotoTortas, ruta: "/gastro/tortas" },
    { titulo: "Pastas", imagen: fotoPastas, ruta: "/gastro/pastas" },
    { titulo: "Pascuas", imagen: fotoPascuas, ruta: "/gastro/pascuas" },
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

export default Gastronomia;
