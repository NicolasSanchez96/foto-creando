import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Inicio.css';

// Importar imágenes
import ema from '../imagenes/books/ema/Photo06_6A.jpg';
import meli from '../imagenes/books/melisa/AA005.jpg';
import muestra from '../imagenes/books/muestra/sadad.JPG';

import madre from '../imagenes/gastro/madre/_DSC3462-2.jpg';
import tortas from '../imagenes/gastro/tortas/_DSC2708.jpg';
import tortas2 from '../imagenes/gastro/tortas/_DSC1104.jpg';

import mdq from '../imagenes/personal/mdq-analogica/AA028A.jpg';
import norte from '../imagenes/personal/norte/AA009.jpg';
import mdq2 from '../imagenes/personal/mdq-digital/_DSC0128-2.jpg';

import guillermo from '../imagenes/eventos/guillermo/_DSC0714.jpg';
import kiara from '../imagenes/eventos/kiara/_DSC2036.jpg';
import delfi from '../imagenes/eventos/delfi/_DSC1015.jpg';

const sections = [
  { title: "BOOKS", images: [ema, meli, muestra] },
  { title: "GASTRONOMÍA", images: [madre, tortas, tortas2] },
  { title: "PERSONAL", images: [mdq, norte, mdq2] },
  { title: "EVENTOS", images: [guillermo, kiara, delfi] }
];

const routes = [
  "/books",
  "/gastronomia",
  "/personal",
  "/eventos"
];

function Inicio() {
  const navigate = useNavigate();
  const [sectionIndex, setSectionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      const timeout = setTimeout(() => {
        setImageIndex(prev => {
          if (prev + 1 >= sections[sectionIndex].images.length) {
            setSectionIndex((sectionIndex + 1) % sections.length);
            return 0;
          }
          return prev + 1;
        });
        setFade(true); // fade in
      }, 1000); // duración fade out

      return () => clearTimeout(timeout);
    }, 4000); // cada 4 segundos cambia la imagen

    return () => clearInterval(interval);
  }, [sectionIndex]);

  // Función para renderizar el título con cada letra envuelta en <span>
  const renderTitle = (title) => {
    return title.split("").map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  return (
    <div className="inicio-wrapper">
      {/* Título clickeable */}
      <div
        className="section-title"
        onClick={() => navigate(routes[sectionIndex])}
      >
        {renderTitle(sections[sectionIndex].title)}
      </div>

      {/* Imagen */}
      <div className="inicio-container">
        <img
          src={sections[sectionIndex].images[imageIndex]}
          alt={sections[sectionIndex].title}
          className="section-image"
          style={{ opacity: fade ? 1 : 0 }}
        />
      </div>
    </div>
  );
}

export default Inicio;

