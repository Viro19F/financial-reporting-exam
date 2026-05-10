// master.html: filterable master quiz across all chapters

(function () {
  const root = document.getElementById('master-root');
  let filterCh = 'all';
  let filterDiff = 'all';
  let filterStatus = 'all'; // all | wrong | unseen

  function render() {
    const progress = loadProgress();
    const allQs = CHAPTERS.flatMap(c => (c.questions || []).map(q => ({
      ...q, chTitle: `Ch ${c.number}: ${c.title}`, chId: c.id, chNum: c.number
    })));
    const filtered = allQs.filter(q => {
      if (filterCh !== 'all' && q.chId !== filterCh) return false;
      if (filterDiff !== 'all' && q.difficulty !== filterDiff) return false;
      if (filterStatus === 'wrong' && (!progress[q.id] || progress[q.id].last !== false)) return false;
      if (filterStatus === 'unseen' && progress[q.id]) return false;
      return true;
    });

    root.innerHTML = `
      <div class="eyebrow">Mode 04</div>
      <h1 class="display"><em>Master</em> quiz.</h1>
      <p class="lede">Every question across every chapter. Filter, then drill until you stop missing.</p>

      <div class="filter-row" id="ch-filter">
        <button class="chip ${filterCh === 'all' ? 'active' : ''}" data-v="all">All chapters</button>
        ${CHAPTERS.map(c => `<button class="chip ${filterCh === c.id ? 'active' : ''}" data-v="${c.id}">Ch ${c.number}</button>`).join('')}
      </div>
      <div class="filter-row" id="diff-filter">
        <button class="chip ${filterDiff === 'all' ? 'active' : ''}" data-v="all">All difficulties</button>
        <button class="chip ${filterDiff === 'easy' ? 'active' : ''}" data-v="easy">Easy</button>
        <button class="chip ${filterDiff === 'medium' ? 'active' : ''}" data-v="medium">Medium</button>
        <button class="chip ${filterDiff === 'hard' ? 'active' : ''}" data-v="hard">Hard</button>
      </div>
      <div class="filter-row" id="status-filter">
        <button class="chip ${filterStatus === 'all' ? 'active' : ''}" data-v="all">All</button>
        <button class="chip ${filterStatus === 'wrong' ? 'active' : ''}" data-v="wrong">Previously missed</button>
        <button class="chip ${filterStatus === 'unseen' ? 'active' : ''}" data-v="unseen">Unseen</button>
      </div>

      <p style="font-size:13px;color:var(--text-muted);margin-bottom:18px">${filtered.length} matching questions</p>

      <div style="display:flex;gap:10px;margin-bottom:24px">
        <button class="btn" id="start" ${filtered.length === 0 ? 'disabled' : ''}>Start drill →</button>
        <button class="btn-ghost btn" id="start-shuffle" ${filtered.length === 0 ? 'disabled' : ''}>Shuffle 20</button>
      </div>

      <div id="quiz"></div>
    `;

    function bindChips(id, setter) {
      root.querySelector(id).querySelectorAll('.chip').forEach(c => {
        c.addEventListener('click', () => { setter(c.dataset.v); render(); });
      });
    }
    bindChips('#ch-filter', v => filterCh = v);
    bindChips('#diff-filter', v => filterDiff = v);
    bindChips('#status-filter', v => filterStatus = v);

    root.querySelector('#start').addEventListener('click', () => {
      mountQuiz(filtered);
    });
    root.querySelector('#start-shuffle').addEventListener('click', () => {
      mountQuiz(shuffle(filtered).slice(0, 20));
    });
  }

  function mountQuiz(qs) {
    document.querySelectorAll('.filter-row, #start, #start-shuffle').forEach(e => e.style.display = 'none');
    new Quiz(qs).mount(document.getElementById('quiz'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render();
})();
