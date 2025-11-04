import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import Gastronomia from './pages/Gastronomia';
import Books, { imagenesEma, imagenesMelisa, imagenesMuestra, imagenesSuspension } from './pages/Books';
import Personal from './pages/Personal';
import Eventos from './pages/Eventos';
import Exposiciones from './pages/Exposiciones';
import Contacto from './pages/Contacto';
import AlbumPage from './components/AlbumPage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        {/* contenedor principal sin padding forzado */}
        <div className="flex-grow-1">
          <Routes>
            {/* Páginas principales */}
            <Route path="/" element={<Inicio />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/books" element={<Books />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/exposiciones" element={<Exposiciones />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Rutas de álbumes individuales */}
            <Route path="/books/ema" element={<AlbumPage imagenes={imagenesEma} />} />
            <Route path="/books/melisa" element={<AlbumPage imagenes={imagenesMelisa} />} />
            <Route path="/books/muestra" element={<AlbumPage imagenes={imagenesMuestra} />} />
            <Route path="/books/suspension" element={<AlbumPage imagenes={imagenesSuspension} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
