// chains.html: render formula chains as numbered lists where each line's
// first word/term comes from a previous line.

(function () {
  const root = document.getElementById('chains-list');
  if (!root || typeof CHAINS === 'undefined') return;

  function renderChain(chain) {
    const stepsHtml = chain.steps.map((step, i) => {
      const num = i + 1;
      const isAnchor = i === 0;
      return `
        <div class="chain-step ${isAnchor ? 'anchor' : ''}">
          <div class="step-num">${num}</div>
          <div class="step-body">
            <div class="step-formula">${escapeHtml(step.formula)}</div>
            ${step.note ? `<div class="step-note">${escapeHtml(step.note)}</div>` : ''}
          </div>
        </div>
        ${i < chain.steps.length - 1 ? '<div class="chain-link">↓</div>' : ''}
      `;
    }).join('');

    return `
      <div class="chain-block" data-id="${chain.id}">
        <div class="chain-head">
          <div class="chain-title-row">
            <h2 class="chain-title">${escapeHtml(chain.title)}</h2>
            <span class="chain-chapter">${escapeHtml(chain.chapters)}</span>
          </div>
          ${chain.intro ? `<p class="chain-intro">${escapeHtml(chain.intro)}</p>` : ''}
        </div>
        <div class="chain-steps">
          ${stepsHtml}
        </div>
      </div>
    `;
  }

  root.innerHTML = CHAINS.map(renderChain).join('');
})();
