import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Actividad() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const questions = [
    "¿Cuál es tu nivel de satisfacción con la facultad?",
    "¿Cómo calificarías la calidad de los profesores?",
    "¿Cómo consideras la infraestructura de la facultad?",
    "¿La facultad proporciona suficientes oportunidades de empleo?",
    "¿Sientes que el plan de estudios está actualizado?",
    "¿Cómo valorarías la disponibilidad de laboratorios y equipos?",
    "¿Crees que la facultad fomenta la innovación y el emprendimiento?",
    "¿Cómo calificarías el apoyo académico?",
    "¿Sientes que la facultad promueve la inclusión y diversidad?",
    "¿Crees que la facultad tiene una buena conexión con la industria?"
  ];

  const options = ["Muy Malo", "Malo", "Regular", "Bueno", "Excelente"];

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    setErrorMessage(""); // Limpiar mensaje de error si el usuario responde
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.includes(null)) {
      setErrorMessage("Por favor, responde todas las preguntas antes de enviar.");
      return;
    }
    setSubmitted(true);
  
    // Convertir las respuestas en una cadena de URL válida
    const queryString = new URLSearchParams({ responses: answers }).toString();
    navigate(`/grafico?${queryString}`);
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cuestionario de Evaluación</h1>
      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="mb-3">
            <p><strong>{index + 1}. {question}</strong></p>
            {options.map((option, i) => (
              <div key={i} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleChange(index, option)}
                  required
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
      {submitted && (
        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={() => navigate('/grafico')}>Ir a Gráfico</button>
        </div>
      )}
    </div>
  );
}

export default Actividad;
