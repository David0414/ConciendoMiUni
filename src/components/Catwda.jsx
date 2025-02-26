import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Catwda() {
  const [activeCategory, setActiveCategory] = useState(null);

  const catwdaData = {
    "Clientes": "Los estudiantes, profesores e investigadores que requieren formación, recursos tecnológicos y oportunidades laborales en el ámbito de la informática.",
    "Actores": "Empresas tecnológicas, instituciones educativas, gobierno y asociaciones que influyen en el desarrollo de la Facultad de Informática UAQ.",
    "Transformación": "El proceso de aprendizaje y capacitación en informática, incluyendo programas académicos, certificaciones y proyectos de investigación.",
    "Mundo": "El impacto de la Facultad en la industria tecnológica, el desarrollo de software y la innovación en la región y a nivel global.",
    "Distinciones": "Las fortalezas de la Facultad, como su enfoque en el desarrollo tecnológico, certificaciones internacionales y vinculación con empresas.",
    "Activos": "Infraestructura, laboratorios de cómputo, software especializado, docentes capacitados y redes de colaboración con la industria."  
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Modelo CATWDA en la Facultad de Informática UAQ</h1>
      <p className="text-center">Explora cada categoría para entender su papel en el ecosistema académico y tecnológico.</p>
      <div className="row g-3 text-center">
        {Object.keys(catwdaData).map((category, index) => (
          <div key={index} className="col-md-4">
            <div 
              className={`card p-4 ${activeCategory === category ? 'bg-primary text-white' : 'bg-light'}`} 
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              style={{ cursor: 'pointer' }}
            >
              <h4>{category}</h4>
              {activeCategory === category && <p className="mt-3">{catwdaData[category]}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catwda;
