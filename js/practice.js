// practice.html: chapter selector → quiz drill

(function () {
  const root = document.getElementById('practice-root');
  const params = new URLSearchParams(location.search);
  const preCh = params.get('ch');

  function showSelector() {
    root.innerHTML = `
      <div class="eyebrow">Mode 02</div>
      <h1 class="display"><em>Practice</em> by chapter.</h1>
      <p class="lede">Pick a chapter to drill. Each set shuffles questions and option order. Misses save automatically so you can re-attempt.</p>
      <div class="chapter-grid">
        ${CHAPTERS.map(ch => {
          const total = (ch.questions || []).length;
          return `
            <a class="chapter-card" href="practice.html?ch=${ch.id}">
              <div class="chnum">Chapter ${ch.number}</div>
              <h3>${ch.title}</h3>
              <div class="meta">${total} questions</div>
            </a>
          `;
        }).join('')}
      </div>
    `;
  }

  function startChapter(chId) {
    const ch = CHAPTERS.find(c => c.id === chId);
    if (!ch || !(ch.questions || []).length) {
      root.innerHTML = `<h1 class="display">No questions yet.</h1><p class="lede">This chapter's drill set is being built.</p><a class="btn" href="practice.html">← Back</a>`;
      return;
    }
    const qs = shuffle(ch.questions).map(q => ({ ...q, chTitle: `Ch ${ch.number}: ${ch.title}` }));
    root.innerHTML = `
      <div class="eyebrow">Practice · Chapter ${ch.number}</div>
      <h1 class="display" style="font-size:36px">${ch.title}</h1>
      <div id="quiz"></div>
      <div style="margin-top:18px;text-align:center"><a href="practice.html" style="font-size:13px;color:var(--text-muted)">← Pick a different chapter</a></div>
    `;
    new Quiz(qs).mount(document.getElementById('quiz'));
  }

  if (preCh) startChapter(preCh);
  else showSelector();
})();
