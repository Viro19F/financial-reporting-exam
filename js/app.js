// Shared utilities: theme, progress, chapter grid, progress summary

(function initTheme() {
  const stored = localStorage.getItem('fra-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const sync = () => {
      btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
    };
    sync();
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', cur);
      localStorage.setItem('fra-theme', cur);
      sync();
    });
    const reset = document.getElementById('reset-btn');
    if (reset) reset.addEventListener('click', () => {
      if (confirm('Wipe all practice progress?')) {
        Object.keys(localStorage).filter(k => k.startsWith('fra-progress')).forEach(k => localStorage.removeItem(k));
        location.reload();
      }
    });
  });
})();

// Progress storage
function loadProgress() {
  try { return JSON.parse(localStorage.getItem('fra-progress') || '{}'); }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem('fra-progress', JSON.stringify(p)); }

function recordAnswer(qId, correct) {
  const p = loadProgress();
  if (!p[qId]) p[qId] = { attempts: 0, correct: 0, last: null };
  p[qId].attempts++;
  if (correct) p[qId].correct++;
  p[qId].last = correct;
  p[qId].ts = Date.now();
  saveProgress(p);
}

// Chapter grid (chapters.html)
function renderChapterGrid() {
  const grid = document.getElementById('chapter-grid');
  if (!grid || typeof CHAPTERS === 'undefined') return;
  const progress = loadProgress();
  grid.innerHTML = CHAPTERS.map(ch => {
    const totalQ = (ch.questions || []).length;
    const seen = (ch.questions || []).filter(q => progress[q.id]).length;
    return `
      <a class="chapter-card" href="chapter.html?id=${ch.id}">
        <div class="chnum">Chapter ${ch.number}</div>
        <h3>${ch.title}</h3>
        <p>${ch.subtitle || ''}</p>
        <div class="meta">${totalQ} questions${seen ? ` · ${seen} seen` : ''}</div>
      </a>
    `;
  }).join('');
}

// Progress summary on home
function renderProgressSummary() {
  const target = document.getElementById('progress-summary');
  if (!target || typeof CHAPTERS === 'undefined') return;
  const progress = loadProgress();
  const allQs = CHAPTERS.flatMap(c => c.questions || []);
  const seen = allQs.filter(q => progress[q.id]);
  if (seen.length === 0) {
    target.innerHTML = '';
    return;
  }
  const correct = seen.filter(q => progress[q.id].last === true).length;
  const pct = Math.round((seen.length / allQs.length) * 100);
  target.innerHTML = `
    <h2 class="section">Your progress</h2>
    <div class="section-block">
      <div class="progress-row">
        <span>${seen.length} / ${allQs.length} questions attempted</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span>${pct}%</span>
      </div>
      <p style="font-size:14px;color:var(--text-muted);margin-top:8px">
        Last attempt accuracy: <strong style="color:var(--text)">${seen.length ? Math.round((correct / seen.length) * 100) : 0}%</strong>
      </p>
    </div>
  `;
}

// Helpers
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatNumber(n) {
  if (Math.abs(n) >= 1000) return n.toLocaleString('en-US');
  return String(n);
}
