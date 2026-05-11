// approach.html: render thought-process frameworks for each topic

(function () {
  const root = document.getElementById('approach-list');
  const filterRow = document.getElementById('ch-filter');
  if (!root || typeof APPROACH === 'undefined') return;

  let activeChapter = 'all';

  const chapters = Array.from(new Set(APPROACH.map(a => a.chNum))).sort((a, b) => a - b);
  filterRow.innerHTML = `
    <button class="chip active" data-ch="all">All</button>
    ${chapters.map(n => `<button class="chip" data-ch="${n}">${n === 0 ? 'Strategy' : 'Ch ' + n}</button>`).join('')}
  `;
  filterRow.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      filterRow.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeChapter = btn.dataset.ch;
      render();
    });
  });

  function renderTable(table) {
    if (!table) return '';
    return `
      <div class="ap-table-wrap">
        <table class="ap-table">
          <thead><tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
          <tbody>
            ${table.rows.map(row => `<tr>${row.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function escapeMulti(s) {
    return escapeHtml(s).replace(/\n/g, '<br>');
  }

  function render() {
    const filtered = APPROACH.filter(a => {
      if (activeChapter === 'all') return true;
      return String(a.chNum) === activeChapter;
    });

    root.innerHTML = filtered.map(a => `
      <div class="ap-block" data-id="${a.id}">
        <div class="ap-head">
          <span class="ap-chip">${escapeHtml(a.chapter)}</span>
          <h3 class="ap-title">${escapeHtml(a.title)}</h3>
        </div>
        <div class="ap-section ap-ask">
          <div class="ap-label">Ask yourself</div>
          <div class="ap-text">${escapeHtml(a.ask)}</div>
        </div>
        <div class="ap-section ap-rule">
          <div class="ap-label">The rule</div>
          <div class="ap-text">${escapeHtml(a.rule)}</div>
        </div>
        ${renderTable(a.table)}
        <div class="ap-section ap-apply">
          <div class="ap-label">Apply it</div>
          <div class="ap-text">${escapeMulti(a.apply)}</div>
        </div>
      </div>
    `).join('');
  }

  render();
})();
