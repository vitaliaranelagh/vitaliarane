/**
 * VITALIA - ALMACÉN SALUDABLE
 * MÓDULO INTERACTIVO 12: GRÁFICOS Y ESTUDIO DE CLIENTES CON CHART.JS
 */

let surveyChartInstance = null;
let currentQuestionIndex = 0;
let currentGroupFilter = 'ALL'; // ALL, G1, G2, G3

document.addEventListener('DOMContentLoaded', () => {
  initSurveyModule();
});

function initSurveyModule() {
  const questionSelect = document.getElementById('surveyQuestionSelect');
  const groupSelect = document.getElementById('surveyGroupSelect');
  const chartTypeSelect = document.getElementById('surveyChartTypeSelect');

  if (!questionSelect) return;

  // Llenar selector de preguntas
  const preguntas = window.VitaliaData.punto12.preguntas;
  questionSelect.innerHTML = '';
  preguntas.forEach((q, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `Pregunta ${q.id}: ${q.pregunta}`;
    questionSelect.appendChild(opt);
  });

  questionSelect.addEventListener('change', (e) => {
    currentQuestionIndex = parseInt(e.target.value, 10);
    renderCurrentQuestionChart();
  });

  if (groupSelect) {
    groupSelect.addEventListener('change', (e) => {
      currentGroupFilter = e.target.value;
      renderCurrentQuestionChart();
    });
  }

  if (chartTypeSelect) {
    chartTypeSelect.addEventListener('change', () => {
      renderCurrentQuestionChart();
    });
  }

  // Render inicial
  renderCurrentQuestionChart();
  renderSurveyDataTable();
}

function renderCurrentQuestionChart() {
  const ctx = document.getElementById('surveyChartCanvas');
  if (!ctx) return;

  const pregunta = window.VitaliaData.punto12.preguntas[currentQuestionIndex];
  const entrevistados = window.VitaliaData.punto12.entrevistados;
  const chartType = document.getElementById('surveyChartTypeSelect') ? document.getElementById('surveyChartTypeSelect').value : 'doughnut';

  // Filtrar entrevistados según grupo etario
  let filteredList = entrevistados;
  if (currentGroupFilter !== 'ALL') {
    filteredList = entrevistados.filter(item => item.grupo === currentGroupFilter);
  }

  // Contabilizar respuestas para la pregunta actual (índice 0-9)
  const counts = {};
  pregunta.opciones.forEach((op, oIdx) => {
    counts[oIdx + 1] = 0;
  });

  filteredList.forEach(e => {
    const ansCode = e.respuestas[currentQuestionIndex];
    if (counts[ansCode] !== undefined) {
      counts[ansCode]++;
    }
  });

  const labels = pregunta.opciones.map(op => {
    // Limpiar el sufijo (1), (2), etc.
    return op.replace(/\s\([0-9]+\)$/, '');
  });

  const dataValues = pregunta.opciones.map((_, oIdx) => counts[oIdx + 1] || 0);
  const totalRespuestas = filteredList.length;

  // Actualizar resumen textual de la pregunta
  const titleDisplay = document.getElementById('currentQuestionTitle');
  if (titleDisplay) {
    titleDisplay.textContent = `Pregunta ${pregunta.id}: ${pregunta.pregunta}`;
  }

  const sampleSizeDisplay = document.getElementById('currentQuestionSample');
  if (sampleSizeDisplay) {
    sampleSizeDisplay.textContent = `Muestra analizada: ${totalRespuestas} entrevistados (${currentGroupFilter === 'ALL' ? 'Total 3 grupos' : currentGroupFilter})`;
  }

  // Paleta de colores Vitalia
  const backgroundColors = [
    '#2d6a4f', // Verde bosque
    '#52b788', // Verde salvia
    '#d97706', // Ámbar miel
    '#c86d51', // Terracota
    '#95d5b2'  // Verde menta
  ];

  if (surveyChartInstance) {
    surveyChartInstance.destroy();
  }

  if (typeof Chart === 'undefined') {
    console.warn('Chart.js no está cargado');
    return;
  }

  surveyChartInstance = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [{
        label: 'Cantidad de Respuestas',
        data: dataValues,
        backgroundColor: backgroundColors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              family: "'Plus Jakarta Sans', sans-serif",
              size: 12
            },
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const val = context.raw || 0;
              const pct = totalRespuestas > 0 ? ((val / totalRespuestas) * 100).toFixed(1) : 0;
              return ` ${context.label}: ${val} votos (${pct}%)`;
            }
          }
        }
      },
      scales: chartType === 'bar' ? {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      } : {}
    }
  });
}

// Render de la tabla completa de los 15 entrevistados con sus 10 respuestas
function renderSurveyDataTable() {
  const tbody = document.getElementById('surveyTableBody');
  if (!tbody) return;

  const entrevistados = window.VitaliaData.punto12.entrevistados;
  tbody.innerHTML = '';

  entrevistados.forEach(e => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-bold">#${e.id}</td>
      <td class="font-semibold">${e.nombre}</td>
      <td><span class="px-2 py-0.5 rounded text-xs font-bold ${e.grupo === 'G1' ? 'bg-blue-100 text-blue-700' : e.grupo === 'G2' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${e.grupo} (${e.edad} años)</span></td>
      <td>${e.sexo}</td>
      <td>${e.localidad}</td>
      ${e.respuestas.map(r => `<td class="text-center font-medium">${r}</td>`).join('')}
    `;
    tbody.appendChild(tr);
  });
}
