// mocks.html: list of mock exams + timed runner

(function () {
  const root = document.getElementById('mocks-root');
  const params = new URLSearchParams(location.search);
  const mockId = params.get('id');

  function showList() {
    root.innerHTML = `
      <div class="eyebrow">Mode 03</div>
      <h1 class="display"><em>Mock</em> exams.</h1>
      <p class="lede">Sit a full mock under timed conditions. Same structure as the IE Mock Final Exam: 20 MCQ + 9 numeric, 90 minutes.</p>
      ${MOCKS.map(m => `
        <div class="mock-item">
          <div>
            <h3>${m.title}</h3>
            <div class="mock-meta">${m.questions.length} questions · ${m.durationMinutes} min · ${m.source || ''}</div>
          </div>
          <a class="btn" href="mocks.html?id=${m.id}">Start →</a>
        </div>
      `).join('')}
    `;
  }

  function startMock(id) {
    const mock = MOCKS.find(m => m.id === id);
    if (!mock) { root.innerHTML = `<h1 class="display">Mock not found.</h1>`; return; }
    if (!confirm(`Start "${mock.title}"? Timer will run ${mock.durationMinutes} minutes. You can finish early.`)) {
      location.href = 'mocks.html';
      return;
    }

    root.innerHTML = `
      <div class="mock-timer">
        <div class="eyebrow" style="margin:0">${mock.title}</div>
        <div class="clock" id="clock">--:--</div>
      </div>
      <div id="quiz"></div>
    `;

    const start = Date.now();
    const totalSec = mock.durationMinutes * 60;
    const clock = document.getElementById('clock');

    const tick = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const remain = totalSec - elapsed;
      if (remain <= 0) {
        clock.textContent = '00:00';
        clearInterval(tick);
        alert("Time's up — quiz will keep going but you've exceeded exam length.");
        return;
      }
      const m = Math.floor(remain / 60).toString().padStart(2, '0');
      const s = (remain % 60).toString().padStart(2, '0');
      clock.textContent = `${m}:${s}`;
      clock.classList.toggle('warn', remain < 600);
      clock.classList.toggle('danger', remain < 120);
    }, 1000);

    new Quiz(mock.questions, {
      shuffleOptions: false,
      onComplete: () => clearInterval(tick)
    }).mount(document.getElementById('quiz'));
  }

  if (mockId) startMock(mockId);
  else showList();
})();
