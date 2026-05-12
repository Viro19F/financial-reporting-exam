// exam-sim.html: dedicated runner for the two final-exam simulators.
// Each question shows the standard explanation PLUS three extra blocks:
// Pattern (model), How to master, What to do on the exam.

(function () {
  const root = document.getElementById('sim-root');
  const params = new URLSearchParams(location.search);
  const which = params.get('sim'); // 'pre' or 'post' or null

  function pickList() {
    if (which === 'pre') return { questions: FINAL_SIM_PRE, title: 'Pre-Midterm Simulator', subtitle: 'Ch 1–5 · 8 MCQ + 7 Numeric · Untimed' };
    if (which === 'post') return { questions: FINAL_SIM_POST, title: 'Post-Midterm Simulator', subtitle: 'Ch 6–12 · 8 MCQ + 7 Numeric · Untimed' };
    return null;
  }

  function showLanding() {
    root.innerHTML = `
      <div class="eyebrow">Mode 10 — Final Exam Simulator</div>
      <h1 class="display"><em>Exam</em> simulator.</h1>
      <p class="lede">Two practice exams structured exactly like your real IE FRA final: 15 questions each, split 8 MCQ + 7 numeric. Pre-midterm half covers Ch 1–5; post-midterm half covers Ch 6–12. Every explanation also tells you which <em>pattern</em> you\'re practicing, <em>how to master it</em>, and <em>what to do</em> when you see this on the real exam.</p>

      <div class="mock-item">
        <div>
          <h3>Pre-Midterm Simulator</h3>
          <div class="mock-meta">15 questions (8 MCQ + 7 Numeric) · Ch 1–5 · untimed</div>
        </div>
        <a class="btn" href="exam-sim.html?sim=pre">Start →</a>
      </div>
      <div class="mock-item">
        <div>
          <h3>Post-Midterm Simulator</h3>
          <div class="mock-meta">15 questions (8 MCQ + 7 Numeric) · Ch 6–12 · untimed</div>
        </div>
        <a class="btn" href="exam-sim.html?sim=post">Start →</a>
      </div>
    `;
  }

  function showQuiz() {
    const cfg = pickList();
    if (!cfg) { showLanding(); return; }

    if (!confirm(`Start "${cfg.title}"? Untimed — work at your own pace.`)) {
      location.href = 'exam-sim.html';
      return;
    }

    root.innerHTML = `
      <div class="eyebrow" style="margin-bottom:14px">${cfg.title} · ${cfg.subtitle}</div>
      <div id="quiz"></div>
    `;

    // Use the standard Quiz class but inject the extra blocks after the explanation.
    const quiz = new Quiz(cfg.questions, { shuffleOptions: false });
    quiz.mount(document.getElementById('quiz'));

    // Patch showExplanation to ALSO render the extra "Pattern / How to master / What to do" blocks.
    const originalShow = quiz.showExplanation.bind(quiz);
    quiz.showExplanation = function (correct, q) {
      originalShow(correct, q);
      const exp = this.root.querySelector('#exp');
      if (!exp) return;
      const extras = [];
      if (q.model) extras.push(`<p class="exp-extra"><span class="exp-extra-label">Pattern</span> ${escapeHtml(q.model)}</p>`);
      if (q.howToMaster) extras.push(`<p class="exp-extra"><span class="exp-extra-label">How to master</span> ${escapeHtml(q.howToMaster)}</p>`);
      if (q.whatToDo) extras.push(`<p class="exp-extra"><span class="exp-extra-label">What to do</span> ${escapeHtml(q.whatToDo)}</p>`);
      if (extras.length) {
        const wrap = document.createElement('div');
        wrap.className = 'exp-extras-block';
        wrap.innerHTML = `<div class="exp-extras-header">Master this pattern</div>${extras.join('')}`;
        exp.appendChild(wrap);
      }
    };
  }

  if (which === 'pre' || which === 'post') showQuiz();
  else showLanding();
})();
