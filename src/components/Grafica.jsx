import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';

function Grafico() {
  const location = useLocation();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const responses = searchParams.get('responses')?.split(',') || [];
  
    // Contar la frecuencia de cada respuesta
    const categories = ["Muy Malo", "Malo", "Regular", "Bueno", "Excelente"];
    const counts = categories.map(category => responses.filter(resp => resp === category).length);
  
    // Calcular porcentaje acumulativo para Pareto
    const total = counts.reduce((sum, val) => sum + val, 0) || 1; // Evitar división por 0
    let cumulative = 0;
    const cumulativePercentages = counts.map(count => {
      cumulative += (count / total) * 100;
      return cumulative;
    });
  
    setChartData({
      labels: categories,
      datasets: [
        {
          label: 'Frecuencia',
          data: counts,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          yAxisID: 'y-axis-1',
        },
        {
          label: 'Porcentaje Acumulativo',
          data: cumulativePercentages,
          type: 'line',
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          yAxisID: 'y-axis-2',
        }
      ]
    });
  }, [location.search]);
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Gráfico de Pareto</h1>
      {chartData ? (
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            scales: {
              'y-axis-1': {
                type: 'linear',
                position: 'left',
              },
              'y-axis-2': {
                type: 'linear',
                position: 'right',
                ticks: {
                  callback: function(value) { return value + '%'; }
                }
              }
            }
          }}
        />
      ) : (
        <p className="text-center">Cargando datos...</p>
      )}
    </div>
  );
}

export default Grafico;
