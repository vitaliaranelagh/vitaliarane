/**
 * VITALIA - ALMACÉN SALUDABLE
 * MÓDULO INTERACTIVO 10 & 11: CALCULADORA FINANCIERA DE COSTOS FIJOS E INVERSIONES
 */

document.addEventListener('DOMContentLoaded', () => {
  initCostosFijosCalculator();
  initInversionesCalculator();
});

// ==========================================
// 10. CALCULADORA DE COSTOS FIJOS
// ==========================================
let fixedCosts = [];

function initCostosFijosCalculator() {
  const container = document.getElementById('fixedCostsTableBody');
  if (!container) return;

  // Clonar datos iniciales
  fixedCosts = JSON.parse(JSON.stringify(window.VitaliaData.punto10.items));

  renderFixedCostsTable();

  const btnAddCost = document.getElementById('btnAddFixedCost');
  if (btnAddCost) {
    btnAddCost.addEventListener('click', () => {
      fixedCosts.push({
        concepto: "Nuevo gasto operativo",
        valor: 10000
      });
      renderFixedCostsTable();
    });
  }
}

function renderFixedCostsTable() {
  const tbody = document.getElementById('fixedCostsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  let total = 0;

  fixedCosts.forEach((item, index) => {
    total += item.valor;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <input type="text" class="calc-input text-left" value="${escapeHtml(item.concepto)}" onchange="updateCostConcept(${index}, this.value)">
      </td>
      <td style="width: 220px;">
        <div style="display: flex; align-items: center; gap: 4px;">
          <span style="font-weight: 700; color: #52796f;">$</span>
          <input type="number" class="calc-input text-right font-bold" value="${item.valor}" min="0" step="1000" onchange="updateCostValue(${index}, this.value)">
        </div>
      </td>
      <td style="width: 60px; text-align: center;">
        <button class="btn btn-danger" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="removeFixedCost(${index})">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Actualizar totales y métricas
  const totalDisplay = document.getElementById('totalFixedCostDisplay');
  const dailyCostDisplay = document.getElementById('dailyFixedCostDisplay');
  const breakevenDisplay = document.getElementById('breakevenDisplay');

  if (totalDisplay) totalDisplay.textContent = formatMoney(total);
  if (dailyCostDisplay) dailyCostDisplay.textContent = formatMoney(Math.round(total / 30));

  // Punto de equilibrio = Costos Fijos / Margen Bruto (40% = 0.40)
  const breakeven = Math.round(total / 0.40);
  if (breakevenDisplay) breakevenDisplay.textContent = formatMoney(breakeven);
}

window.updateCostConcept = function(index, newConcept) {
  if (fixedCosts[index]) {
    fixedCosts[index].concepto = newConcept;
  }
};

window.updateCostValue = function(index, newValue) {
  const parsed = parseFloat(newValue) || 0;
  if (fixedCosts[index]) {
    fixedCosts[index].valor = parsed;
    renderFixedCostsTable();
  }
};

window.removeFixedCost = function(index) {
  if (fixedCosts.length > 1) {
    fixedCosts.splice(index, 1);
    renderFixedCostsTable();
  } else {
    alert("Debe haber al menos un concepto en la lista de costos.");
  }
};


// ==========================================
// 11. CALCULADORA DE PLANILLA DE INVERSIONES
// ==========================================
let investmentsList = [];

function initInversionesCalculator() {
  const container = document.getElementById('investmentsTableBody');
  if (!container) return;

  investmentsList = JSON.parse(JSON.stringify(window.VitaliaData.punto11.inversiones));

  renderInvestmentsTable();

  const btnAddInv = document.getElementById('btnAddInvestment');
  if (btnAddInv) {
    btnAddInv.addEventListener('click', () => {
      investmentsList.push({
        item: "Nuevo activo o refacción",
        monto: 100000,
        categoria: "Equipamiento"
      });
      renderInvestmentsTable();
    });
  }
}

function renderInvestmentsTable() {
  const tbody = document.getElementById('investmentsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  let total = 0;

  investmentsList.forEach((inv, index) => {
    total += inv.monto;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <input type="text" class="calc-input text-left font-semibold" value="${escapeHtml(inv.item)}" onchange="updateInvName(${index}, this.value)">
      </td>
      <td style="width: 180px;">
        <span class="px-2 py-1 rounded text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">${inv.categoria}</span>
      </td>
      <td style="width: 220px;">
        <div style="display: flex; align-items: center; gap: 4px;">
          <span style="font-weight: 700; color: #2d6a4f;">$</span>
          <input type="number" class="calc-input text-right font-bold text-emerald-900" value="${inv.monto}" min="0" step="10000" onchange="updateInvAmount(${index}, this.value)">
        </div>
      </td>
      <td style="width: 60px; text-align: center;">
        <button class="btn btn-danger" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="removeInvestment(${index})">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const totalInvDisplay = document.getElementById('totalInvestmentDisplay');
  if (totalInvDisplay) totalInvDisplay.textContent = formatMoney(total);
}

window.updateInvName = function(index, newName) {
  if (investmentsList[index]) {
    investmentsList[index].item = newName;
  }
};

window.updateInvAmount = function(index, newAmount) {
  const parsed = parseFloat(newAmount) || 0;
  if (investmentsList[index]) {
    investmentsList[index].monto = parsed;
    renderInvestmentsTable();
  }
};

window.removeInvestment = function(index) {
  if (investmentsList.length > 1) {
    investmentsList.splice(index, 1);
    renderInvestmentsTable();
  } else {
    alert("Debe haber al menos un concepto de inversión.");
  }
};

// Utilidades
function formatMoney(amount) {
  return `$ ${amount.toLocaleString('es-AR')}`;
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
