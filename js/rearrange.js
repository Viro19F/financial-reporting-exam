// rearrange.html: render every core formula with all its algebraic forms

(function () {
  const root = document.getElementById('rearrange-list');
  const filterRow = document.getElementById('ch-filter');
  const search = document.getElementById('rearr-search');
  if (!root || typeof REARRANGEMENTS === 'undefined') return;

  let activeChapter = 'all';
  let query = '';

  const chapters = Array.from(new Set(REARRANGEMENTS.map(r => r.chNum))).sort((a, b) => a - b);
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
    const filtered = REARRANGEMENTS.filter(r => {
      if (activeChapter !== 'all' && String(r.chNum) !== activeChapter) return false;
      if (query) {
        const hay = (r.name + ' ' + r.base + ' ' + (r.note || '') + ' ' + r.forms.map(f => f.var + ' ' + f.formula).join(' ')).toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      root.innerHTML = `<div class="empty">No formulas match "${escapeHtml(query)}"</div>`;
      return;
    }

    root.innerHTML = filtered.map(r => `
      <div class="rearr-block" data-id="${r.id}">
        <div class="rearr-head">
          <span class="rearr-chip">${escapeHtml(r.chapter)}</span>
          <h3 class="rearr-name">${escapeHtml(r.name)}</h3>
        </div>
        <div class="rearr-base">${escapeHtml(r.base)}</div>
        ${r.note ? `<p class="rearr-note">${escapeHtml(r.note)}</p>` : ''}
        <div class="rearr-divider">↓ if you need to solve for…</div>
        <div class="rearr-forms">
          ${r.forms.map(f => `
            <div class="rearr-form">
              <div class="rearr-var">${escapeHtml(f.var)}</div>
              <div class="rearr-arrow">→</div>
              <div class="rearr-formula">${escapeHtml(f.formula)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  render();
})();
