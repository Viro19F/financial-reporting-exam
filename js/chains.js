// chains.html: render formula chains as nested derivation trees

(function () {
  const root = document.getElementById('chains-list');
  if (!root || typeof CHAINS === 'undefined') return;

  function renderNode(node, depth) {
    const arrow = depth > 0 ? '<span class="chain-arrow">↳</span>' : '';
    const childrenHtml = (node.children || []).map(c => renderNode(c, depth + 1)).join('');
    return `
      <div class="chain-node" style="margin-left:${depth * 22}px" data-depth="${depth}">
        <div class="chain-row">
          ${arrow}
          <div class="chain-content">
            <div class="chain-formula">${escapeHtml(node.formula)}</div>
            ${node.note ? `<div class="chain-note">${escapeHtml(node.note)}</div>` : ''}
          </div>
        </div>
        ${childrenHtml}
      </div>
    `;
  }

  root.innerHTML = CHAINS.map(chain => `
    <div class="chain-block" data-id="${chain.id}">
      <div class="chain-head">
        <div class="chain-title-row">
          <h2 class="chain-title">${escapeHtml(chain.title)}</h2>
          <span class="chain-chapter">${escapeHtml(chain.chapters)}</span>
        </div>
        ${chain.intro ? `<p class="chain-intro">${escapeHtml(chain.intro)}</p>` : ''}
      </div>
      <div class="chain-tree">
        ${chain.nodes.map(n => renderNode(n, 0)).join('')}
      </div>
    </div>
  `).join('');
})();
