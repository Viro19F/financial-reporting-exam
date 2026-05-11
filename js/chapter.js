// chapter.html: render a single chapter's tabs

(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const ch = (typeof CHAPTERS !== 'undefined') ? CHAPTERS.find(c => c.id === id) : null;

  if (!ch) {
    document.getElementById('chapter-header').innerHTML = `<h1 class="display">Chapter not found.</h1>`;
    return;
  }

  document.title = `Chapter ${ch.number}: ${ch.title} — FRA Exam Hub`;
  document.getElementById('chapter-header').innerHTML = `
    <div class="eyebrow">Chapter ${ch.number}</div>
    <h1 class="display">${ch.title}.</h1>
    <p class="lede">${ch.subtitle || ''}</p>
  `;

  document.getElementById('practice-link').href = `practice.html?ch=${ch.id}`;

  const body = document.getElementById('chapter-body');
  const terms = (typeof CHAPTER_TERMS !== 'undefined' && CHAPTER_TERMS[ch.id]) ? CHAPTER_TERMS[ch.id] : [];

  function renderTermCard(t) {
    return `
      <details class="term-card">
        <summary class="term-summary">
          <span class="term-name">${escapeHtml(t.term)}</span>
          <span class="term-toggle">▾</span>
        </summary>
        <div class="term-body">
          ${t.what ? `<div class="term-row"><div class="term-label">What it is</div><div class="term-text">${escapeHtml(t.what)}</div></div>` : ''}
          ${t.why ? `<div class="term-row"><div class="term-label">Why we have it</div><div class="term-text">${escapeHtml(t.why)}</div></div>` : ''}
          ${t.used ? `<div class="term-row"><div class="term-label">How it's used</div><div class="term-text">${escapeHtml(t.used)}</div></div>` : ''}
          ${t.example ? `<div class="term-row term-example"><div class="term-label">Example</div><div class="term-text">${escapeHtml(t.example)}</div></div>` : ''}
        </div>
      </details>
    `;
  }

  function renderTab(tab) {
    if (tab === 'terms') {
      if (!terms.length) {
        body.innerHTML = '<div class="empty">Detailed term definitions for this chapter are still being added.</div>';
        return;
      }
      body.innerHTML = `
        <p class="lede" style="font-size:14px;margin-bottom:18px">Click any term to expand. Each card explains <em>what it is</em>, <em>why we have it</em>, <em>how it's used</em>, plus a quick example.</p>
        <div class="term-list">
          ${terms.map(renderTermCard).join('')}
        </div>
      `;
    } else if (tab === 'theory') {
      body.innerHTML = (ch.theory || []).map(t => `
        <div class="section-block">
          <h4>${escapeHtml(t.title)}</h4>
          ${t.body}
        </div>
      `).join('') || '<div class="empty">Theory coming soon.</div>';
    } else if (tab === 'formulas') {
      body.innerHTML = `<div class="section-block">${
        (ch.formulas && ch.formulas.length)
          ? ch.formulas.map(f => `
              <div class="formula-row">
                <div class="name">${escapeHtml(f.name)}</div>
                <div class="expr">${escapeHtml(f.formula)}${f.notes ? `<div style="color:var(--text-muted);font-family:var(--sans);font-size:13px;margin-top:4px">${escapeHtml(f.notes)}</div>` : ''}</div>
              </div>
            `).join('')
          : '<div class="empty">No formulas in this chapter.</div>'
      }</div>`;
    } else if (tab === 'examples') {
      body.innerHTML = (ch.examples || []).map((ex, i) => `
        <div class="example" data-i="${i}">
          <h4 style="font-family:var(--serif);font-style:italic;font-size:18px;margin-bottom:8px">${escapeHtml(ex.title || 'Example ' + (i + 1))}</h4>
          <div class="ex-q">${ex.problem}</div>
          <div class="reveal">Show solution ↓</div>
          <div class="ex-a">${ex.solution}</div>
        </div>
      `).join('') || '<div class="empty">Worked examples coming soon.</div>';
      body.querySelectorAll('.example').forEach(el => {
        el.querySelector('.reveal').addEventListener('click', () => {
          el.classList.toggle('revealed');
          el.querySelector('.reveal').textContent = el.classList.contains('revealed') ? 'Hide solution ↑' : 'Show solution ↓';
        });
      });
    } else if (tab === 'exam') {
      const items = ch.examTopics || [];
      body.innerHTML = items.length ? `
        <div class="section-block">
          <h4>Most likely to appear</h4>
          <ul>${items.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
        </div>
      ` : '<div class="empty">Exam tips coming soon.</div>';
    }
  }

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTab(btn.dataset.tab);
    });
  });

  renderTab('terms');
})();
