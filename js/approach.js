// approach.html: simple plain-English shortcuts per topic

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

  function maybe(label, value) {
    if (!value) return '';
    return `
      <div class="ap-line">
        <span class="ap-line-label">${label}</span>
        <span class="ap-line-text">${escapeHtml(value)}</span>
      </div>
    `;
  }

  function render() {
    const filtered = APPROACH.filter(a => activeChapter === 'all' || String(a.chNum) === activeChapter);

    root.innerHTML = filtered.map(a => `
      <div class="ap-block" data-id="${a.id}">
        <div class="ap-head">
          <span class="ap-chip">${escapeHtml(a.chapter)}</span>
          <h3 class="ap-title">${escapeHtml(a.title)}</h3>
        </div>
        <div class="ap-big-idea">${escapeHtml(a.bigIdea)}</div>
        ${maybe('Shortcut', a.shortcut)}
        ${maybe('Skip these', a.skipThese)}
        ${maybe('Count these', a.counts)}
        ${maybe('Watch out', a.watchOut)}
        <div class="ap-example">
          <span class="ap-example-label">Example —</span> ${escapeHtml(a.example)}
        </div>
      </div>
    `).join('');
  }

  render();
})();
