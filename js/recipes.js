// recipes.html: render solving recipes with chapter filter + search

(function () {
  const root = document.getElementById('recipes-list');
  const filterRow = document.getElementById('ch-filter');
  const search = document.getElementById('recipe-search');
  if (!root || typeof RECIPES === 'undefined') return;

  let activeChapter = 'all';
  let query = '';

  // Build chapter filter chips
  const chapters = Array.from(new Set(RECIPES.map(r => r.chNum))).sort((a, b) => a - b);
  filterRow.innerHTML = `
    <button class="chip active" data-ch="all">All</button>
    ${chapters.map(n => `<button class="chip" data-ch="${n}">Ch ${n}</button>`).join('')}
  `;
  filterRow.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      filterRow.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeChapter = btn.dataset.ch;
      render();
    });
  });

  search.addEventListener('input', e => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  function render() {
    const filtered = RECIPES.filter(r => {
      if (activeChapter !== 'all' && String(r.chNum) !== activeChapter) return false;
      if (query) {
        const hay = (r.title + ' ' + r.scenario + ' ' + (r.example || '') + ' ' + r.steps.map(s => s.formula + ' ' + s.compute).join(' ')).toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      root.innerHTML = `<div class="empty">No recipes match "${escapeHtml(query)}"</div>`;
      return;
    }

    root.innerHTML = filtered.map(r => `
      <div class="recipe-block" data-id="${r.id}">
        <div class="recipe-head">
          <div class="recipe-chip">${escapeHtml(r.chapter)}</div>
          <h3 class="recipe-title">${escapeHtml(r.title)}</h3>
        </div>
        <p class="recipe-scenario">${escapeHtml(r.scenario)}</p>
        ${r.example ? `<div class="recipe-example"><span class="recipe-example-label">Example —</span> ${escapeHtml(r.example)}</div>` : ''}
        <ol class="recipe-steps">
          ${r.steps.map(s => `
            <li class="recipe-step">
              <div class="recipe-formula">${escapeHtml(s.formula)}</div>
              ${s.compute ? `<div class="recipe-compute">${escapeHtml(s.compute)}</div>` : ''}
            </li>
          `).join('')}
        </ol>
      </div>
    `).join('');
  }

  render();
})();
