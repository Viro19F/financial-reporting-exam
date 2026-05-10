// vault.html: searchable formula table

(function () {
  const all = (typeof CHAPTERS !== 'undefined') ? CHAPTERS.flatMap(c =>
    (c.formulas || []).map(f => ({ ...f, chNum: c.number, chTitle: c.title }))
  ) : [];

  const list = document.getElementById('vault-list');
  const search = document.getElementById('vault-search');

  function render(query = '') {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? all.filter(f => (f.name + ' ' + f.formula + ' ' + (f.notes || '') + ' ' + f.chTitle).toLowerCase().includes(q))
      : all;
    list.innerHTML = `
      <div class="vault-row head">
        <div>Name</div>
        <div>Formula</div>
        <div>Chapter</div>
      </div>
      ${filtered.map(f => `
        <div class="vault-row">
          <div class="vname">${escapeHtml(f.name)}${f.notes ? `<div style="font-weight:400;font-size:12px;color:var(--text-muted);margin-top:2px">${escapeHtml(f.notes)}</div>` : ''}</div>
          <div class="vexpr">${escapeHtml(f.formula)}</div>
          <div class="vch">Ch ${f.chNum}</div>
        </div>
      `).join('') || `<div class="empty">No formulas match "${escapeHtml(q)}"</div>`}
    `;
  }

  search.addEventListener('input', e => render(e.target.value));
  render();
})();
