import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Foda from './components/Foda';
import Sombrero from "./components/Sombrero";
import Catwda from './components/Catwda';
import Ishikawa from './components/Ishikawa';
import Actividad from './components/Actividad.';
import Grafico from './components/Grafica';
import Resumen from './components/Resumen';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foda" element={<Foda />} />
        <Route path="/sombrero" element={<Sombrero />} />
        <Route path="/catwda" element={<Catwda />} />
        <Route path="/ishikawa" element={<Ishikawa />} />
        <Route path="/resumen" element={<Resumen />} />

        <Route path="/actividad" element={<Actividad />} />

        <Route path="/grafico" element={<Grafico />} />






      </Routes>
    </div>
  );
}

export default App;
