import { useState } from 'react';
import { FaHatCowboy, FaHatWizard,  FaHatCowboySide, FaHardHat} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sombrero() {
  const [activeHat, setActiveHat] = useState(null);

  const hatData = {
    "Sombrero Blanco": {
      icon: <FaHatWizard size={50} />, 
      description: "Representa la información y los hechos. Se enfoca en datos objetivos sobre la Facultad de Informática de la UAQ."
    },
    "Sombrero Rojo": {
      icon: <FaHatCowboy size={50} />, 
      description: "Simboliza las emociones e intuiciones. Expresa sentimientos sobre la comunidad estudiantil y la percepción educativa."
    },
    "Sombrero Negro": {
      icon: <FaHatCowboy size={50} />, 
      description: "Representa los aspectos negativos y precauciones. Se analizan desafíos como la falta de recursos y la competitividad laboral."
    },
    "Sombrero Amarillo": {
      icon: <FaHatCowboy size={50} />, 
      description: "Enfatiza los aspectos positivos y oportunidades. Destaca fortalezas de la Facultad como convenios con empresas y la innovación."
    },
    "Sombrero Verde": {
      icon: <FaHatCowboySide size={50} />, 
      description: "Simboliza la creatividad y nuevas ideas. Se enfoca en propuestas innovadoras para mejorar la educación en informática."
    },
    "Sombrero Azul": {
      icon: <FaHardHat size={50} />, 
      description: "Control y organización. Evalúa la gestión académica, los procesos administrativos y la toma de decisiones estratégicas."
    }
  };
  
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Los 6 Sombreros para Pensar</h1>
      <p className="text-center">Explora cada sombrero y su significado en el contexto de la Facultad de Informática UAQ.</p>
      <div className="row g-3 text-center">
        {Object.keys(hatData).map((hat, index) => (
          <div key={index} className="col-md-4">
            <div 
              className={`card p-4 ${activeHat === hat ? 'bg-primary text-white' : 'bg-light'}`} 
              onClick={() => setActiveHat(activeHat === hat ? null : hat)}
              style={{ cursor: 'pointer' }}
            >
              <div className="mb-2">{hatData[hat].icon}</div>
              <h4>{hat}</h4>
              {activeHat === hat && <p className="mt-3">{hatData[hat].description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sombrero;
