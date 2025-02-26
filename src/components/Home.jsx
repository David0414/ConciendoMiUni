import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../animations.css';

function Home() {
  const [textColor, setTextColor] = useState('text-dark');

  useEffect(() => {
    const colors = ['text-dark', 'text-white'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setTextColor(colors[index]);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`d-flex vh-100 justify-content-center align-items-center animated-background ${textColor} text-center p-3`}>
      <div>
        <h1 className="display-4 fw-bold mb-4">Bienvenido al Sistema de Análisis de tu UNI</h1>
        <p className="lead d-none d-md-block">Explora las fortalezas, oportunidades, debilidades y amenazas.</p> 
        <Link to="/foda" className={`btn btn-light btn-lg mt-3 btn-animate w-100 w-md-auto`} aria-label="Ir al análisis FODA">FODA</Link>
        <Link to="/sombrero" className={`btn btn-light btn-lg mt-3 btn-animate w-100 w-md-auto`} aria-label="Ir a los sombreros">Sombrero</Link>
        <Link to="/catwda" className={`btn btn-light btn-lg mt-3 btn-animate w-100 w-md-auto`} aria-label="Ir a los sombreros">CATWDA</Link>
        <Link to="/ishikawa" className={`btn btn-light btn-lg mt-3 btn-animate w-100 w-md-auto`} aria-label="Ir a los sombreros">Ishikawa</Link>
        <Link to="/resumen" className={`btn btn-light btn-lg mt-3 btn-animate w-100 w-md-auto`} aria-label="Ir a los sombreros">Resúmen</Link>
      </div>
    </main>
  );
}

export default Home;
