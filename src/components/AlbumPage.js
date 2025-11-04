import React, { useRef, useState, useEffect } from 'react';
import './AlbumPage.css';

function AlbumPage({ imagenes }) {
  const scrollRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Función que actualiza la barra violeta según el scroll del contenedor interno
  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    setScrollPercentage(maxScroll ? (scrollLeft / maxScroll) * 100 : 0);
  };

  // Función que permite hacer click en la barra violeta y mover el scroll
  const handleBarClick = (e) => {
    const container = scrollRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newScrollLeft = (clickX / rect.width) * (container.scrollWidth - container.clientWidth);
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="albumpage-wrapper">
      {/* Galería horizontal */}
      <div className="albumpage-container" ref={scrollRef}>
        {imagenes.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`imagen ${idx + 1}`}
            className="albumpage-img"
          />
        ))}
      </div>

      {/* Barra violeta funcional */}
      <div className="albumpage-scrollbar" onClick={handleBarClick}>
        <div
          className="albumpage-scroll-thumb"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default AlbumPage;
