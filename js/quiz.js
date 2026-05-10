// Reusable quiz engine: takes a list of questions, renders one at a time,
// supports MCQ + numeric, shows explanations, tracks progress, computes score.

class Quiz {
  constructor(questions, opts = {}) {
    this.questions = questions;
    this.idx = 0;
    this.answers = []; // { qId, correct, given }
    this.opts = {
      onComplete: () => {},
      shuffleOptions: true,
      showProgress: true,
      ...opts
    };
    this.preparedOptionOrder = questions.map(q => {
      if (q.type === 'mcq' && this.opts.shuffleOptions) {
        const order = q.options.map((_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [order[i], order[j]] = [order[j], order[i]];
        }
        return order;
      }
      return q.options ? q.options.map((_, i) => i) : null;
    });
  }

  mount(rootEl) {
    this.root = rootEl;
    this.render();
  }

  render() {
    if (this.idx >= this.questions.length) {
      this.renderResults();
      return;
    }
    const q = this.questions[this.idx];
    const total = this.questions.length;
    const progressBar = this.opts.showProgress ? `
      <div class="progress-row">
        <span>${this.idx + 1} of ${total}</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${((this.idx) / total) * 100}%"></div></div>
      </div>
    ` : '';

    const meta = `
      <div class="q-meta">
        <span>${q.chTitle ? q.chTitle + ' · ' : ''}${q.type === 'mcq' ? 'Multiple choice' : 'Numeric'}</span>
        <span class="pill">${q.difficulty || 'medium'}</span>
      </div>
    `;

    let body = '';
    if (q.type === 'mcq') {
      const order = this.preparedOptionOrder[this.idx];
      body = `<div class="options">${order.map((origIdx, displayIdx) => `
        <button class="opt" data-idx="${origIdx}">
          <span class="letter">${String.fromCharCode(97 + displayIdx)})</span>
          <span>${escapeHtml(q.options[origIdx])}</span>
        </button>
      `).join('')}</div>`;
    } else if (q.type === 'numeric') {
      body = `
        <div class="numeric-input">
          <input type="text" id="num-input" placeholder="Your answer" autocomplete="off" inputmode="decimal">
          ${q.units ? `<span class="units">${escapeHtml(q.units)}</span>` : ''}
        </div>
      `;
    }

    this.root.innerHTML = `
      ${progressBar}
      <div class="q-shell">
        ${meta}
        <div class="q-prompt">${q.prompt}</div>
        ${body}
        <div class="explanation" id="exp"></div>
        <div class="q-actions">
          <div class="left">
            <button class="btn-ghost btn" id="skip">Skip</button>
          </div>
          <div class="right">
            <button class="btn-ghost btn" id="check" style="display:${q.type === 'numeric' ? 'inline-block' : 'none'}">Check</button>
            <button class="btn" id="next" style="display:none">${this.idx + 1 === total ? 'Finish' : 'Next →'}</button>
          </div>
        </div>
      </div>
    `;

    if (q.type === 'mcq') {
      this.root.querySelectorAll('.opt').forEach(btn => {
        btn.addEventListener('click', () => this.handleMCQ(parseInt(btn.dataset.idx)));
      });
    } else {
      const inp = this.root.querySelector('#num-input');
      inp.focus();
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') this.handleNumeric();
      });
      this.root.querySelector('#check').addEventListener('click', () => this.handleNumeric());
    }

    this.root.querySelector('#skip').addEventListener('click', () => {
      this.answers.push({ qId: q.id, correct: false, given: null, skipped: true });
      this.idx++;
      this.render();
    });
    this.root.querySelector('#next').addEventListener('click', () => {
      this.idx++;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  handleMCQ(givenIdx) {
    const q = this.questions[this.idx];
    const correct = givenIdx === q.correct;
    this.answers.push({ qId: q.id, correct, given: givenIdx });
    recordAnswer(q.id, correct);
    this.root.querySelectorAll('.opt').forEach(btn => {
      btn.classList.add('disabled');
      const idx = parseInt(btn.dataset.idx);
      if (idx === q.correct) btn.classList.add('correct');
      else if (idx === givenIdx) btn.classList.add('wrong');
    });
    this.showExplanation(correct, q);
  }

  handleNumeric() {
    const q = this.questions[this.idx];
    const inp = this.root.querySelector('#num-input');
    const raw = inp.value.trim().replace(/[, ]/g, '').replace(/€|\$|¥|%/g, '');
    if (!raw) return;
    const given = parseFloat(raw);
    if (isNaN(given)) return;
    const tolerance = q.tolerance || 0.01;
    const correct = Math.abs(given - q.answer) <= Math.abs(q.answer * tolerance) + 0.01;
    this.answers.push({ qId: q.id, correct, given });
    recordAnswer(q.id, correct);
    inp.disabled = true;
    inp.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
    this.root.querySelector('#check').style.display = 'none';
    this.showExplanation(correct, q);
  }

  showExplanation(correct, q) {
    const exp = this.root.querySelector('#exp');
    const correctLine = q.type === 'numeric'
      ? `<div class="verdict ${correct ? 'correct' : 'wrong'}">${correct ? 'Correct.' : `Incorrect. Answer: ${formatNumber(q.answer)}${q.units ? ' ' + q.units : ''}`}</div>`
      : `<div class="verdict ${correct ? 'correct' : 'wrong'}">${correct ? 'Correct.' : `Incorrect. Correct answer: ${String.fromCharCode(97 + q.correct).toUpperCase()}) ${escapeHtml(q.options[q.correct])}`}</div>`;
    exp.innerHTML = correctLine + (q.explanation ? `<div>${q.explanation}</div>` : '');
    exp.classList.add('show');
    this.root.querySelector('#next').style.display = 'inline-block';
  }

  renderResults() {
    const correct = this.answers.filter(a => a.correct).length;
    const total = this.questions.length;
    const pct = Math.round((correct / total) * 100);
    const wrong = this.answers
      .map((a, i) => ({ a, q: this.questions[i] }))
      .filter(x => !x.a.correct);

    this.root.innerHTML = `
      <div class="results-summary">
        <div class="score">${correct}/${total}</div>
        <div class="label">${pct}% — ${pct >= 80 ? 'Solid. Move to mocks.' : pct >= 60 ? 'Decent. Review missed.' : 'Re-read the chapter and try again.'}</div>
        <div style="margin-top:24px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" id="retry">Retry all</button>
          ${wrong.length ? `<button class="btn-ghost btn" id="redo-wrong">Redo missed (${wrong.length})</button>` : ''}
          <a class="btn-ghost btn" href="index.html">Home</a>
        </div>
      </div>
      ${wrong.length ? `
        <h2 class="section">What you missed</h2>
        ${wrong.map(({ q, a }) => `
          <div class="section-block">
            <div style="font-size:13px;color:var(--text-muted);margin-bottom:6px">${q.chTitle || ''}</div>
            <p style="font-size:15px;margin-bottom:8px">${q.prompt.split('\n')[0].slice(0, 140)}${q.prompt.length > 140 ? '…' : ''}</p>
            <div style="font-size:13px;color:var(--red)">Your answer: ${
              q.type === 'mcq'
                ? (a.given !== null ? `${String.fromCharCode(97 + a.given)}) ${escapeHtml(q.options[a.given])}` : 'Skipped')
                : (a.given !== null ? formatNumber(a.given) : 'Skipped')
            }</div>
            <div style="font-size:13px;color:var(--green);margin-top:4px">Correct: ${
              q.type === 'mcq'
                ? `${String.fromCharCode(97 + q.correct)}) ${escapeHtml(q.options[q.correct])}`
                : formatNumber(q.answer) + (q.units ? ' ' + q.units : '')
            }</div>
            ${q.explanation ? `<div style="font-size:13px;color:var(--text-muted);margin-top:8px">${q.explanation}</div>` : ''}
          </div>
        `).join('')}
      ` : ''}
    `;

    this.root.querySelector('#retry').addEventListener('click', () => {
      this.idx = 0;
      this.answers = [];
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    if (wrong.length) {
      this.root.querySelector('#redo-wrong').addEventListener('click', () => {
        this.questions = wrong.map(x => x.q);
        this.preparedOptionOrder = this.questions.map(q => q.options ? q.options.map((_, i) => i) : null);
        this.idx = 0;
        this.answers = [];
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    this.opts.onComplete(this.answers);
  }
}
