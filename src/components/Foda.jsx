import { useState } from 'react';

function Foda() {
  const [activeSection, setActiveSection] = useState(null);

  const fodaData = {
    "Fuerzas": [
      "Persistencia - Los estudiantes de la Facultad de Informática de la UAQ han demostrado un alto nivel de resiliencia y compromiso con su formación profesional.",
      "Certificaciones - Se promueve la obtención de certificaciones internacionales en tecnologías clave, lo que incrementa la empleabilidad de los egresados.",
      "Centro de Desarrollo - La facultad cuenta con un centro de desarrollo tecnológico donde los alumnos pueden participar en proyectos reales y desarrollar habilidades prácticas.",
      "Vinculación con la industria - Existen convenios con empresas tecnológicas que permiten la realización de prácticas profesionales y proyectos colaborativos.",
      "Innovación y Emprendimiento - Se fomenta la creación de startups y soluciones innovadoras dentro de la comunidad estudiantil."
    ],
    "Oportunidades": [
      "Patentes - La posibilidad de registrar patentes en tecnologías emergentes ofrece ventajas competitivas a los investigadores y emprendedores.",
      "Empresas globales (Amazon, Google, Microsoft) - La creciente demanda de profesionales en TI abre oportunidades de empleo en compañías de talla mundial.",
      "Expansión de la inteligencia artificial - La implementación de IA en diversas industrias abre nuevas líneas de investigación y desarrollo para los estudiantes.",
      "Tendencias en ciberseguridad - La necesidad de especialistas en seguridad informática sigue en aumento, creando nuevas áreas de especialización.",
      "Programas de movilidad - Existe la oportunidad de acceder a intercambios académicos con universidades extranjeras para fortalecer la formación de los alumnos."
    ],
    "Debilidades": [
      "Idiomas - La falta de dominio del inglés limita el acceso a recursos académicos y oportunidades laborales en empresas internacionales.",
      "Habilidades sociales - Se ha identificado que algunos estudiantes tienen dificultades para la comunicación efectiva y el trabajo en equipo.",
      "Accesibilidad a infraestructura - No todos los alumnos cuentan con equipos de cómputo de alta gama para el desarrollo de software avanzado.",
      "Oferta limitada de especialidades - Algunas áreas emergentes como Blockchain y Data Science aún no están completamente desarrolladas en la facultad.",
      "Dependencia de financiamiento externo - La facultad depende de apoyos gubernamentales y privados para la modernización de sus laboratorios y equipamiento."
    ],
    "Amenazas": [
      "Alumnos UAQ desplazados - La competencia con egresados de otras universidades y la globalización del mercado laboral pueden dificultar la inserción laboral.",
      "Avance tecnológico acelerado - La rapidez con la que evolucionan las tecnologías puede hacer que los planes de estudio queden obsoletos rápidamente.",
      "Fuga de talento - La emigración de egresados hacia otros países en busca de mejores oportunidades laborales puede afectar el crecimiento de la industria local.",
      "Automatización y AI - La automatización de tareas mediante inteligencia artificial podría reducir la demanda de ciertos perfiles de programadores.",
      "Desigualdad en el acceso a la educación - Algunos alumnos pueden enfrentar dificultades económicas que les impidan continuar con su formación universitaria."
    ]
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sistema para la toma de decisiones</h1>
      <div className="row row-cols-1 row-cols-md-2 g-3"> {/* Responsividad mejorada */}
        {Object.keys(fodaData).map((key, index) => (
          <div key={index} className="col">
            <div
              className={`card text-white ${activeSection === key ? 'bg-dark' : 'bg-secondary'}`}
              onClick={() => setActiveSection(activeSection === key ? null : key)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body text-center">
                <h3 className="card-title">{key}</h3>
                {activeSection === key && (
                  <ul className="list-unstyled mt-3">
                    {fodaData[key].map((item, i) => (
                      <li key={i} className="text-light">• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foda;
