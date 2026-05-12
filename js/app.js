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

// Format an explanation string with light markdown -> HTML:
//   - newlines become paragraph breaks
//   - **bold** becomes <strong>
//   - Section labels auto-split into their own paragraphs even when jammed inline
function formatExplanation(raw) {
  if (!raw) return '';

  let s = String(raw);

  // Insert \n before known section markers when they appear mid-paragraph.
  // BOLD markers like **Step 1:**, **Correct: C**, **Common mistake:**, **Formula chain:**, **Total:**, **Trap...**, **Watch out:**, **Note:**
  s = s.replace(/(\S)\s+(\*\*(?:Formula chain|Step \d+|Common mistake|Correct|Trap|Total|Watch out|Note|Verify|Why|How)[^*]*?\*\*)/g, '$1\n$2');

  // UNBOLDED markers: "Trap (X):", "Correct: X", "Common mistake:", "Note:", "Why:", "How to apply:"
  s = s.replace(/(\S)\s+(Trap \([A-Za-z][A-Za-z0-9]?\):)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Common mistake:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Note:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Watch out:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Why:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(How to apply:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Correct(?:\s*:|\s+answer))/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Trap:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Step \d+[\.:])/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Equivalent:)/g, '$1\n$2');
  s = s.replace(/(\S)\s+(Total:)/g, '$1\n$2');

  // Split on any newline(s)
  const parts = s.split(/\n+/).map(p => p.trim()).filter(Boolean);

  return parts.map(line => {
    let html = escapeHtml(line);
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Pattern 1: line starts with a <strong>LABEL:</strong> — extract label + rest
    let m = html.match(/^<strong>([^<]+?):?<\/strong>\s*\.?\s*(.*)$/);
    if (m) {
      return `<p class="exp-line"><span class="exp-label">${m[1].replace(/:$/, '')}</span> ${m[2]}</p>`;
    }
    // Pattern 2: line starts with an unbolded label like "Trap (D):" or "Common mistake:"
    m = html.match(/^(Trap \([A-Za-z][A-Za-z0-9]?\)|Common mistake|Note|Watch out|Why|How to apply|Correct(?: answer)?|Equivalent|Step \d+|Total):\s*(.*)$/);
    if (m) {
      return `<p class="exp-line"><span class="exp-label">${m[1]}</span> ${m[2]}</p>`;
    }
    return `<p class="exp-line">${html}</p>`;
  }).join('');
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
