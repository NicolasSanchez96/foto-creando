// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Páginas principales
import Inicio from './pages/Inicio';
import Gastronomia, { imagenesMadre, imagenesTortas, imagenesPastas, imagenesPascuas } from './pages/Gastronomia';
import Books, { imagenesEma, imagenesMelisa, imagenesMuestra, imagenesSuspension } from './pages/Books';
import Personal, { imagenesMdq24, imagenesMdq25, imagenesNorte, imagenesPopurri } from './pages/Personal';
import Eventos, { imagenesDelfi, imagenesGuillermo, imagenesKiara, imagenesMorena } from './pages/Eventos';
import Exposiciones from './pages/Exposiciones';
import Contacto from './pages/Contacto';

// Componente álbum reutilizable
import AlbumPage from './components/AlbumPage';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
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

            {/* Rutas de álbumes individuales - Books */}
            <Route path="/books/ema" element={<AlbumPage imagenes={imagenesEma} />} />
            <Route path="/books/melisa" element={<AlbumPage imagenes={imagenesMelisa} />} />
            <Route path="/books/muestra" element={<AlbumPage imagenes={imagenesMuestra} />} />
            <Route path="/books/suspension" element={<AlbumPage imagenes={imagenesSuspension} />} />

            {/* Rutas de álbumes individuales - Gastronomía */}
            <Route path="/gastro/madre" element={<AlbumPage imagenes={imagenesMadre} />} />
            <Route path="/gastro/tortas" element={<AlbumPage imagenes={imagenesTortas} />} />
            <Route path="/gastro/pastas" element={<AlbumPage imagenes={imagenesPastas} />} />
            <Route path="/gastro/pascuas" element={<AlbumPage imagenes={imagenesPascuas} />} />

            {/* Rutas de álbumes individuales - Personal */}
            <Route path="/personal/mdq24" element={<AlbumPage imagenes={imagenesMdq24} />} />
            <Route path="/personal/mdq25" element={<AlbumPage imagenes={imagenesMdq25} />} />
            <Route path="/personal/norte" element={<AlbumPage imagenes={imagenesNorte} />} />
            <Route path="/personal/popurri" element={<AlbumPage imagenes={imagenesPopurri} />} />

            {/* Rutas de álbumes individuales - Eventos */}
            <Route path="/eventos/delfi" element={<AlbumPage imagenes={imagenesDelfi} />} />
            <Route path="/eventos/guillermo" element={<AlbumPage imagenes={imagenesGuillermo} />} />
            <Route path="/eventos/kiara" element={<AlbumPage imagenes={imagenesKiara} />} />
            <Route path="/eventos/morena" element={<AlbumPage imagenes={imagenesMorena} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
