/**
 * VITALIA - ALMACÉN SALUDABLE
 * CONTROLADOR PRINCIPAL DE LA APLICACIÓN WEB (APP.JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigationTabs();
  initQuickPointJump();
  initGlobalSearch();
  initPrintButton();
  initInteractiveBrandShowcase();
});

// Navegación por Categorías Temáticas
function initNavigationTabs() {
  const pills = document.querySelectorAll('.cat-pill');
  const sections = document.querySelectorAll('.section-card');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const targetCategory = pill.getAttribute('data-category');

      sections.forEach(sec => {
        if (targetCategory === 'all') {
          sec.style.display = 'block';
        } else {
          const secCategories = (sec.getAttribute('data-category') || '').split(' ');
          if (secCategories.includes(targetCategory)) {
            sec.style.display = 'block';
          } else {
            sec.style.display = 'none';
          }
        }
      });

      // Asegurar que si una sección está oculta y se buscaba, se restablezca
      window.scrollTo({ top: 140, behavior: 'smooth' });
    });
  });
}

// Salto Rápido a Puntos (1 a 20)
function initQuickPointJump() {
  const chips = document.querySelectorAll('.point-chip');

  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const pointNum = chip.getAttribute('data-point');
      const targetElement = document.getElementById(`punto-${pointNum}`);

      if (targetElement) {
        // Asegurar que todas las secciones estén visibles
        document.querySelectorAll('.section-card').forEach(s => s.style.display = 'block');
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        const allPill = document.querySelector('.cat-pill[data-category="all"]');
        if (allPill) allPill.classList.add('active');

        // Actualizar chip activo
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // Scroll suave con offset para header sticky
        const yOffset = -140;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Animación de destaque
        targetElement.classList.add('ring-4', 'ring-emerald-400');
        setTimeout(() => {
          targetElement.classList.remove('ring-4', 'ring-emerald-400');
        }, 1500);
      }
    });
  });
}

// Buscador Global en Tiempo Real
function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const sections = document.querySelectorAll('.section-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    sections.forEach(sec => {
      const text = sec.textContent.toLowerCase();
      if (text.includes(query)) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });

    if (query.length > 0) {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    }
  });
}

// Botón de Impresión / Guardar en PDF
function initPrintButton() {
  const btnPrint = document.getElementById('btnPrintReport');
  if (!btnPrint) return;

  btnPrint.addEventListener('click', () => {
    // Asegurar que todo esté visible antes de imprimir
    document.querySelectorAll('.section-card').forEach(s => s.style.display = 'block');
    window.print();
  });
}

// Selector Interactivo de las 4 Variantes de Marca (Punto 16)
function initInteractiveBrandShowcase() {
  const brandButtons = document.querySelectorAll('.btn-brand-variant');
  const brandDisplay = document.getElementById('brandVariantPreviewContainer');
  const brandInfoDisplay = document.getElementById('brandVariantInfoContainer');

  if (!brandButtons.length || !brandDisplay) return;

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => {
        b.classList.remove('bg-emerald-700', 'text-white');
        b.classList.add('bg-white', 'text-gray-700');
      });
      btn.classList.remove('bg-white', 'text-gray-700');
      btn.classList.add('bg-emerald-700', 'text-white');

      const variantIndex = parseInt(btn.getAttribute('data-variant'), 10);
      const variantData = window.VitaliaData.punto16.variantesMarca[variantIndex];

      if (variantData) {
        brandDisplay.innerHTML = variantData.svgCode;
        if (brandInfoDisplay) {
          brandInfoDisplay.innerHTML = `
            <h4 class="font-bold text-emerald-900 text-lg mb-1">${variantData.tipo}</h4>
            <p class="text-xs text-emerald-700 font-semibold mb-2">${variantData.definicion}</p>
            <p class="text-sm text-gray-700">${variantData.descripcionVisual}</p>
          `;
        }
      }
    });
  });
}
