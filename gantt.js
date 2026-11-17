/**
 * VITALIA - ALMACÉN SALUDABLE
 * MÓDULO INTERACTIVO 20: DIAGRAMA DE GANTT DE GESTIÓN DE PROYECTO (16 SEMANAS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initGanttChart();
});

function initGanttChart() {
  const container = document.getElementById('ganttChartRows');
  if (!container) return;

  renderGanttRows('ALL');

  const filterSelect = document.getElementById('ganttPhaseFilter');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      renderGanttRows(e.target.value);
    });
  }
}

function renderGanttRows(selectedPhase) {
  const container = document.getElementById('ganttChartRows');
  if (!container) return;

  const fases = window.VitaliaData.punto20.fases;
  container.innerHTML = '';

  let totalTasks = 0;
  let completedTasks = 0;

  fases.forEach((faseObj, fIdx) => {
    // Si hay filtro activo y no coincide
    if (selectedPhase !== 'ALL' && selectedPhase !== `fase-${fIdx + 1}`) {
      return;
    }

    // Cabecera de la fase
    const phaseHeader = document.createElement('div');
    phaseHeader.className = 'py-2 px-3 my-1 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-between text-white';
    phaseHeader.style.backgroundColor = getPhaseColor(fIdx);
    phaseHeader.innerHTML = `
      <span>📌 ${faseObj.fase} (${faseObj.semanas})</span>
      <span class="text-xs bg-black bg-opacity-20 px-2 py-0.5 rounded">${faseObj.tareas.length} Tareas</span>
    `;
    container.appendChild(phaseHeader);

    // Tareas de la fase
    faseObj.tareas.forEach(t => {
      totalTasks++;
      if (t.estado === 'Completado') completedTasks++;

      const row = document.createElement('div');
      row.className = 'gantt-row hover:bg-emerald-50 transition-colors';

      // 1 Columna de Nombre de Tarea y Estado
      let colsHtml = `
        <div class="gantt-task-name flex items-center justify-between pr-2">
          <span title="${t.tarea}">${t.tarea}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded font-bold ${
            t.estado === 'Completado' ? 'bg-emerald-100 text-emerald-800' :
            t.estado === 'En Proceso' ? 'bg-amber-100 text-amber-800' :
            'bg-gray-100 text-gray-600'
          }">${t.estado}</span>
        </div>
      `;

      // 16 Columnas de semanas
      for (let s = 1; s <= 16; s++) {
        if (s >= t.semInicio && s <= t.semFin) {
          // Determinar posición en el bloque
          const isStart = s === t.semInicio;
          const isEnd = s === t.semFin;
          const barText = isStart ? `S${t.semInicio}-S${t.semFin}` : '';

          colsHtml += `
            <div class="gantt-bar-cell">
              <div class="gantt-bar ${faseObj.colorClass}" style="
                border-top-left-radius: ${isStart ? '4px' : '0'};
                border-bottom-left-radius: ${isStart ? '4px' : '0'};
                border-top-right-radius: ${isEnd ? '4px' : '0'};
                border-bottom-right-radius: ${isEnd ? '4px' : '0'};
              ">
                ${barText}
              </div>
            </div>
          `;
        } else {
          colsHtml += `<div class="gantt-bar-cell border-r border-gray-100"></div>`;
        }
      }

      row.innerHTML = colsHtml;
      container.appendChild(row);
    });
  });

  // Actualizar métricas del Gantt
  const progressBadge = document.getElementById('ganttProgressStats');
  if (progressBadge && totalTasks > 0) {
    const pct = Math.round((completedTasks / totalTasks) * 100);
    progressBadge.textContent = `Avance: ${completedTasks}/${totalTasks} tareas (${pct}%)`;
  }
}

function getPhaseColor(index) {
  const colors = ['#2d6a4f', '#40916c', '#52b788', '#d97706', '#c86d51'];
  return colors[index % colors.length];
}
