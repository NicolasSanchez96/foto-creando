import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import Gastronomia from './pages/Gastronomia';
import Books from './pages/Books';
import Personal from './pages/Personal';
import Eventos from './pages/Eventos';
import Exposiciones from './pages/Exposiciones';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/books" element={<Books />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/exposiciones" element={<Exposiciones />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
