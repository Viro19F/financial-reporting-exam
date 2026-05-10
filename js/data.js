// FRA Exam Hub — content data
// Source: IE FRA Chapters 1-12 slides (full extraction) + Mock Final Exam 21
// Slide-specific examples preserved: Jana Juice (Ch 3, 11), Tanner Truck (Ch 6),
// Phelps Swimming (Ch 8, 9), Phelps goggles (Ch 5), Sunshine bonds (Ch 7),
// Nestle (Ch 7), Lowe's (Ch 12), Chevron vs Total (Ch 5 case), Amazon (Ch 4),
// Haskell Construction (Ch 4), Cleaver Construction (Ch 4), Mouser (Ch 4).

const CHAPTERS = [
  // =============================================================
  // CHAPTER 1
  // =============================================================
  {
    id: 'ch1',
    number: 1,
    title: 'Introduction to Financial Accounting',
    subtitle: 'Users, four business activities, financial vs managerial accounting, the four statements.',
    theory: [
      {
        title: 'What is accounting?',
        body: `<p><strong>Accounting</strong> is the process of recording, summarizing, reporting, and analyzing financial transactions to help people make informed economic decisions.</p>
        <p><strong>Financial accounting</strong> is for decision-makers <em>OUTSIDE</em> the company (investors, creditors, regulators, customers). <strong>Managerial accounting</strong> is for decision-makers <em>INSIDE</em> the company (managers).</p>
        <p>External users include shareholders, creditors (banks/lenders), suppliers, customers, regulators. Internal users are the management team and the board of directors.</p>`
      },
      {
        title: 'Disclosure: benefits and costs',
        body: `<p><strong>Benefits</strong> of disclosing more financial information: lower borrowing rates (less risk for lenders), better supplier credit terms, higher investor confidence.</p>
        <p><strong>Costs</strong>: preparation cost (audit, accountants), competitive cost (rivals see your numbers), political/regulatory cost.</p>`
      },
      {
        title: 'The four business activities',
        body: `<ol>
          <li><strong>Planning</strong> — setting strategy, goals, capital structure.</li>
          <li><strong>Investing</strong> — acquiring/disposing of resources (assets) used to produce/sell. Short-term assets vs long-term assets.</li>
          <li><strong>Financing</strong> — funding the investments. Two sources:
            <ul>
              <li><strong>Debt financing</strong> (creditors) — legal obligation to repay.</li>
              <li><strong>Equity financing</strong> (owners) — no obligation to repay.</li>
            </ul>
          </li>
          <li><strong>Operating</strong> — using the resources to produce, promote, sell. Includes non-operating items (e.g., interest).</li>
        </ol>
        <p><strong>Fiscal year</strong> = the company's annual reporting period. Does not have to end Dec 31 (e.g., Microsoft June 30, Nike May 31, Facebook Dec 31).</p>`
      },
      {
        title: 'The four financial statements',
        body: `<ol>
          <li><strong>Balance Sheet</strong> (point-in-time) — also called <em>Statement of Financial Position</em>. Assets = Liabilities + Equity.</li>
          <li><strong>Income Statement</strong> (period of time) — also called <em>P&L, Statement of Earnings, Statement of Operations</em>. Net Income = Revenues − Expenses.</li>
          <li><strong>Statement of Stockholders' Equity</strong> (period) — changes in equity: contributed capital, retained earnings, AOCI.</li>
          <li><strong>Statement of Cash Flows</strong> (period) — net cash from Operating, Investing, Financing.</li>
        </ol>
        <p><strong>Articulation</strong> — statements link together: Net Income flows from the Income Statement into Retained Earnings on the Statement of Stockholders' Equity, which flows into Equity on the Balance Sheet. Cash Flow Statement explains the change in Cash on the Balance Sheet.</p>`
      },
      {
        title: 'Information beyond the financials',
        body: `<ul>
          <li><strong>Management Discussion and Analysis (MD&A)</strong> — narrative on results and outlook.</li>
          <li><strong>Independent Auditor Report</strong> — opinion on whether statements fairly present per IFRS/US GAAP.</li>
          <li><strong>Footnotes</strong> — accounting policies, contingent liabilities, segments, etc.</li>
          <li><strong>SEC filings</strong> — 10-K (annual), 10-Q (quarterly), 8-K (current events).</li>
        </ul>`
      },
      {
        title: 'IFRS vs US GAAP',
        body: `<p>Two reporting frameworks:</p>
        <ul>
          <li><strong>IFRS</strong> — used in EU and 140+ countries (issued by IASB).</li>
          <li><strong>US GAAP</strong> — used by US firms (issued by FASB).</li>
        </ul>
        <p>Big differences tested at IE: <strong>LIFO inventory</strong> is allowed under US GAAP, banned under IFRS. <strong>Revaluation of PP&E</strong> allowed under IFRS, not GAAP. <strong>Reversal of impairment losses</strong> allowed under IFRS for non-financial assets, banned under US GAAP. <strong>R&D</strong>: development costs may be capitalized under IFRS, all R&D expensed under US GAAP.</p>`
      }
    ],
    formulas: [
      { name: 'Accounting equation', formula: 'Assets = Liabilities + Equity' },
      { name: 'Net income', formula: 'Net Income = Revenues − Expenses' },
      { name: 'Return on Equity (intro)', formula: 'ROE = Net Income / Average Stockholders\' Equity' },
      { name: 'Debt-to-Equity', formula: 'D/E = Total Liabilities / Total Stockholders\' Equity' },
      { name: 'Ending retained earnings', formula: 'End RE = Beg RE + Net Income − Dividends' }
    ],
    examples: [
      {
        title: 'Accounting equation change',
        problem: `<p>During the year, total liabilities <strong>decreased</strong> by ¥45,000 and equity <strong>decreased</strong> by ¥10,000. By how much did total assets change?</p>`,
        solution: `<p>A = L + E. ΔA = ΔL + ΔE = (−45,000) + (−10,000) = <strong>−¥55,000</strong>.</p>`
      },
      {
        title: 'Nike (FY May 2020) — articulation',
        problem: `<p>Nike's FY2020: owner financing $8,055M; creditor financing $23,287M; profit $2,539M; dividends paid $1,491M; cash generated $3,882M. Identify what part of this hits each statement.</p>`,
        solution: `<p><strong>Balance Sheet</strong>: equity $8,055M, liabilities $23,287M.<br><strong>Income Statement</strong>: net income $2,539M.<br><strong>Statement of Stockholders' Equity</strong>: retained earnings change = $2,539M (NI) − $1,491M (div) = +$1,048M.<br><strong>Cash Flow Statement</strong>: explains the $3,882M of cash generated.</p>`
      },
      {
        title: 'Retained earnings roll-forward',
        problem: `<p>Beginning RE €120,000. Net income for the year €40,000. Dividends declared and paid €15,000. Ending RE?</p>`,
        solution: `<p>End RE = 120,000 + 40,000 − 15,000 = <strong>€145,000</strong>.</p>`
      }
    ],
    examTopics: [
      'Distinguishing financial vs managerial accounting users',
      'Naming the four financial statements and what each shows (point-in-time vs period)',
      'Identifying investing vs financing vs operating activities',
      'Articulation: Net income → Retained earnings → Balance Sheet equity',
      'Computing ROE = NI / Avg Equity (must average!)',
      'Computing D/E = Total Liabilities / Total Equity',
      'Recognizing IFRS vs US GAAP differences (LIFO, revaluation, impairment reversal, R&D)',
      'Knowing alternative names of statements (Balance Sheet = Statement of Financial Position)'
    ],
    questions: [
      {
        id: 'ch1_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Which one of the following is NOT an external user of accounting information?',
        options: ['Regulatory agencies', 'Customers', 'Investors', 'All of the above are external users of accounting information'],
        correct: 3,
        explanation: 'External users include anyone outside the firm: customers, suppliers, investors, regulators, the public. So all three listed are external.'
      },
      {
        id: 'ch1_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000 during a period, then total assets must change by:',
        options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'],
        correct: 2,
        explanation: 'A = L + E. ΔA = −45,000 + (−10,000) = −55,000.'
      },
      {
        id: 'ch1_q3', type: 'mcq', difficulty: 'easy',
        prompt: 'Which financial statement reports the financial position of a company at a single point in time?',
        options: ['Income Statement', 'Statement of Cash Flows', 'Balance Sheet', 'Statement of Retained Earnings'],
        correct: 2,
        explanation: 'The balance sheet is a snapshot. IS, SCF, and Statement of Stockholders\' Equity all cover a period.'
      },
      {
        id: 'ch1_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which inventory cost-flow method is NOT permitted?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'Specific identification'],
        correct: 1,
        explanation: 'IFRS prohibits LIFO. US GAAP permits all four.'
      },
      {
        id: 'ch1_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following pairs are BOTH considered fundamental qualitative characteristics of useful financial information?',
        options: ['Relevance and Comparability', 'Relevance and Faithful Representation', 'Timeliness and Verifiability', 'Understandability and Cost'],
        correct: 1,
        explanation: 'Fundamental: Relevance + Faithful Representation. Comparability, Verifiability, Timeliness, Understandability are enhancing.'
      },
      {
        id: 'ch1_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Beginning retained earnings €240,000. Net income €85,000. Dividends declared €30,000. Compute ending retained earnings in €.',
        answer: 295000, units: '€', tolerance: 0.001,
        explanation: 'End RE = 240 + 85 − 30 = €295,000.'
      },
      {
        id: 'ch1_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following describes EQUITY financing (vs debt financing)?',
        options: [
          'Legal obligation to repay principal and interest',
          'No obligation to repay; investors own a share of the company',
          'Always cheaper than debt financing',
          'Tax-deductible interest expense'
        ],
        correct: 1,
        explanation: 'Equity has no repayment obligation. Debt has both repayment and (typically) interest, which is tax-deductible.'
      },
      {
        id: 'ch1_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which of the following is permitted but is NOT permitted under US GAAP?',
        options: ['Use of FIFO inventory method', 'Reversal of an impairment loss on a non-financial asset', 'Capitalization of interest during construction', 'Recording goodwill on acquisition'],
        correct: 1,
        explanation: 'IFRS allows reversal of impairment losses on non-financial assets (excluding goodwill). US GAAP prohibits reversal.'
      },
      {
        id: 'ch1_q9', type: 'mcq', difficulty: 'easy',
        prompt: 'A company purchases equipment for $50,000 in cash. The immediate effect on the accounting equation is:',
        options: ['Assets increase, liabilities increase', 'Assets unchanged (one asset up, another down)', 'Assets increase, equity increases', 'Liabilities decrease, equity decreases'],
        correct: 1,
        explanation: 'Equipment +50,000; Cash −50,000. Total assets unchanged.'
      },
      {
        id: 'ch1_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is NOT one of the four basic financial statements?',
        options: ['Statement of Financial Position', 'Statement of Cash Flows', 'Statement of Stockholders\' Equity', 'Statement of Working Capital'],
        correct: 3,
        explanation: 'There is no "Statement of Working Capital." The four are: Statement of Financial Position (Balance Sheet), Income Statement, Statement of Stockholders\' Equity, Statement of Cash Flows.'
      },
      {
        id: 'ch1_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'A company has Net income $4,200M and Average Stockholders\' Equity $28,000M. Compute Return on Equity in %.',
        answer: 15, units: '%', tolerance: 0.01,
        explanation: 'ROE = 4,200 / 28,000 = 0.15 = 15%.'
      },
      {
        id: 'ch1_q12', type: 'numeric', difficulty: 'medium',
        prompt: 'Total Liabilities $23,287M; Total Equity $8,055M. Compute Debt-to-Equity ratio.',
        answer: 2.89, units: '', tolerance: 0.01,
        explanation: 'D/E = 23,287 / 8,055 = 2.89.'
      },
      {
        id: 'ch1_q13', type: 'mcq', difficulty: 'medium',
        prompt: 'Which statement reports performance OVER a period rather than at a point in time?',
        options: ['Balance Sheet', 'Statement of Financial Position', 'Income Statement', 'None — all statements are point-in-time'],
        correct: 2,
        explanation: 'IS is a period statement. Balance Sheet (= Statement of Financial Position) is a point-in-time snapshot.'
      },
      {
        id: 'ch1_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'A company\'s assets increased by $80,000. Liabilities increased by $30,000 and net income was $40,000 (no dividends or share issuances). Reconcile the change in equity.',
        options: ['Equity increased $50,000 — matches NI plus a $10,000 adjustment', 'Equity increased $50,000 — but NI was only $40,000, so $10,000 must be unaccounted for', 'Equity increased $50,000 (= ΔA − ΔL) — this exceeds NI, suggesting other comprehensive income or share issuance the question denied', 'No reconciliation possible from this data'],
        correct: 2,
        explanation: 'ΔE = ΔA − ΔL = 80 − 30 = 50. NI explains 40 of that; the missing 10 must come from OCI or share activity.'
      },
      // From MCQ C1 textbook practice pack
      {
        id: 'ch1_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following is a potential cost of the public disclosure of accounting information?',
        options: ['Loss of competitive advantage caused by revealing information to competitors', 'Potential increased regulation and taxes due to reporting excessive profits in politically sensitive industries', 'Raising and then failing to meet the expectations of investors', 'All of the above are potential costs of disclosure'],
        correct: 3,
        explanation: 'All three are real costs. Disclosure also has benefits (lower borrowing rates, better supplier terms) — companies must weigh both sides.'
      },
      {
        id: 'ch1_q16', type: 'mcq', difficulty: 'easy',
        prompt: 'Banks that lend money to corporations are considered:',
        options: ['Creditors', 'Shareholders / stockholders', 'Both a and b', 'Neither a nor b'],
        correct: 0,
        explanation: 'Banks providing loans = creditors (debt financing). Shareholders provide equity financing.'
      },
      {
        id: 'ch1_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following expressions is a correct statement of the accounting equation?',
        options: ['Equity + Assets = Liability', 'Assets − (Liabilities + Equity) = 0', 'Liabilities − Equity = Assets', 'Liabilities + Assets = Equity'],
        correct: 1,
        explanation: 'A = L + E ⇒ A − (L + E) = 0. The other rearrangements are wrong.'
      },
      {
        id: 'ch1_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is NOT one of the four basic financial reports?',
        options: ['The balance sheet', 'The income statement', 'The statement of changes in equity', 'The notes to the financial statements'],
        correct: 3,
        explanation: 'The four basic reports are BS, IS, Statement of Changes in Equity, and Cash Flow Statement. Footnotes accompany the statements but are NOT one of the four statements themselves.'
      },
      // From Practice Quiz FRA2024
      {
        id: 'ch1_q19', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following would NOT be considered an external user of accounting data?',
        options: ['Taxing authority representative', 'Management', 'Creditors', 'Customers'],
        correct: 1,
        explanation: 'Management is INTERNAL. Tax authorities, creditors, customers are all external.'
      },
      {
        id: 'ch1_q20', type: 'mcq', difficulty: 'easy',
        prompt: 'A basic assumption of accounting that requires activities of an entity be kept SEPARATE from the activities of its owner is referred to as the:',
        options: ['Stand-alone concept', 'Monetary unit assumption', 'Corporate form of ownership', 'Economic entity assumption'],
        correct: 3,
        explanation: 'Economic entity assumption: the firm and its owners are distinct accounting entities. (Owner\'s personal grocery bill ≠ company expense.)'
      },
      {
        id: 'ch1_q21', type: 'mcq', difficulty: 'easy',
        prompt: 'The common characteristic possessed by ALL assets is:',
        options: ['Long life', 'Great monetary value', 'Tangible nature', 'Future economic benefit'],
        correct: 3,
        explanation: 'Assets must provide future economic benefit. They need not be long-lived (cash), have great value, or be tangible (patents).'
      },
      {
        id: 'ch1_q22', type: 'numeric', difficulty: 'hard',
        prompt: 'Stahl Consulting started with total assets €200,000 and total liabilities €50,000. During the year: catering revenues €160,000; expenses €80,000; issued ordinary shares €30,000; paid dividends €50,000. Compute end-of-year equity in €.',
        answer: 210000, units: '€', tolerance: 0.001,
        explanation: 'Beg Equity = 200 − 50 = 150. NI = 160 − 80 = 80. ΔRE = NI − Div = 80 − 50 = 30. Plus share issuance 30. End Equity = 150 + 30 + 30 = €210,000.'
      },
      {
        id: 'ch1_q23', type: 'numeric', difficulty: 'hard',
        prompt: 'Nguyen began the year with equity $651,000. Issued shares $882,000; recorded expenses $2,520,000; paid dividends $168,000. Ending equity $1,593,000. Compute revenue for the year in $.',
        answer: 2748000, units: '$', tolerance: 0.001,
        explanation: 'ΔEquity = 1,593 − 651 = 942. ΔE = NI + Issuance − Div → 942 = NI + 882 − 168 → NI = 228. Rev = NI + Exp = 228 + 2,520 = $2,748,000.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 2
  // =============================================================
  {
    id: 'ch2',
    number: 2,
    title: 'The Financial Statements',
    subtitle: 'Balance sheet detail, asset/liability recognition, working capital, current/quick ratios.',
    theory: [
      {
        title: 'Balance sheet structure',
        body: `<p>Point-in-time report: <strong>Assets = Liabilities + Stockholders' Equity</strong>.</p>
        <p><strong>Asset categories</strong>: Current (convertible to cash within 1 year) vs Non-current.</p>
        <p>Common <strong>current assets</strong>: Cash, Marketable securities, Accounts receivable, Inventory, Prepaid expenses.</p>
        <p>Common <strong>noncurrent assets</strong>: Long-term financial investments, PP&E (Property, Plant & Equipment), Intangibles.</p>`
      },
      {
        title: 'Three asset capitalization criteria',
        body: `<p>To be capitalized (placed on the balance sheet), an asset must:</p>
        <ol>
          <li>Be <strong>owned/controlled</strong> by the company,</li>
          <li>Possess <strong>expected, measurable future benefits</strong>,</li>
          <li>Have a <strong>monetary value</strong> assignable.</li>
        </ol>
        <p><strong>Measurement</strong>: most assets at <em>historical cost</em> (reliable but often undervalued); marketable securities at <em>fair value</em>.</p>`
      },
      {
        title: 'Three liability recognition criteria',
        body: `<p>A liability is recognized when ALL three are met:</p>
        <ol>
          <li>Economic obligation is <strong>probable</strong>,</li>
          <li>Amount is <strong>known or reasonably estimable</strong>,</li>
          <li>The <strong>transaction has occurred</strong>.</li>
        </ol>
        <p>Common <strong>current liabilities</strong>: Accounts payable, Accrued liabilities, Short-term borrowings, Deferred (unearned) revenue, Current maturities of long-term debt.</p>
        <p>Common <strong>noncurrent liabilities</strong>: Long-term debt, deferred comp, long-term tax obligations.</p>`
      },
      {
        title: 'Equity components',
        body: `<p><strong>Contributed Capital</strong>: Common stock (par × shares), Additional paid-in capital (APIC), Treasury stock (contra).</p>
        <p><strong>Earned Capital</strong>: Retained Earnings, AOCI (Accumulated Other Comprehensive Income — pension, FX, certain investment gains/losses).</p>
        <p>Retained earnings is the <em>link</em> between the income statement and the balance sheet.</p>`
      },
      {
        title: 'Income statement format',
        body: `<p>Multi-step:</p>
        <ul>
          <li><strong>Revenue</strong> − <strong>COGS</strong> = <strong>Gross Profit</strong></li>
          <li>− <strong>Operating Expenses</strong> (SG&A, R&D, depreciation) = <strong>Operating Income (EBIT)</strong></li>
          <li>− <strong>Interest expense</strong> (nonoperating) = <strong>Pre-tax income (EBT)</strong></li>
          <li>− <strong>Tax</strong> = <strong>Net Income</strong></li>
        </ul>
        <p><strong>Operating</strong> revenues/expenses = main business; <strong>nonoperating</strong> = financing/investing items (interest).</p>
        <p><strong>Recurring</strong> items are expected to persist; <strong>nonrecurring</strong> (one-time) items will not.</p>`
      },
      {
        title: 'Working capital and liquidity ratios',
        body: `<p><strong>Working Capital = Current Assets − Current Liabilities</strong>.</p>
        <p><strong>Current Ratio = CA / CL</strong>. Above 1 = positive working capital. Lower is risky.</p>
        <p><strong>Quick Ratio = (Cash + Marketable Securities + AR) / CL</strong>. <em>EXCLUDES inventory and prepaid expenses</em> — they're harder to convert to cash quickly. A common exam trap.</p>`
      }
    ],
    formulas: [
      { name: 'Accounting equation', formula: 'Assets = Liabilities + Stockholders\' Equity' },
      { name: 'Working capital', formula: 'WC = Current Assets − Current Liabilities' },
      { name: 'Current ratio', formula: 'CR = Current Assets / Current Liabilities' },
      { name: 'Quick ratio', formula: 'QR = (Cash + Marketable Sec + AR) / Current Liabilities (EXCLUDES inventory & prepaid)' },
      { name: 'Gross profit', formula: 'GP = Revenue − COGS' },
      { name: 'Operating income (EBIT)', formula: 'EBIT = GP − Operating Expenses' },
      { name: 'Net income', formula: 'NI = EBIT − Interest − Tax' },
      { name: 'Ending retained earnings', formula: 'End RE = Beg RE + NI − Dividends' }
    ],
    examples: [
      {
        title: 'Target — net working capital trend',
        problem: `<p>Target: 2020 CA $12,902M, CL $14,487M; 2021 CA $20,756M, CL $20,125M; 2022 CA $21,573M, CL $21,747M. Compute WC and Current Ratio for each year.</p>`,
        solution: `<p>2020 WC = −$1,585M; CR = 0.89.<br>2021 WC = $631M; CR = 1.03.<br>2022 WC = −$174M; CR = 0.99.<br><em>Trend</em>: Target operates with very thin working capital — typical for retailers turning inventory rapidly.</p>`
      },
      {
        title: 'Quick ratio — exclude inventory!',
        problem: `<p>Cash 30; AR 70; Inventory 100; Prepaid 10; Current Liabilities 80. Compute the Quick Ratio.</p>`,
        solution: `<p>QR = (30 + 70) / 80 = <strong>1.25</strong>. (Inventory and prepaid are excluded.)<br>Compare: Current Ratio = (30 + 70 + 100 + 10) / 80 = 2.625.</p>`
      },
      {
        title: 'Build a multi-step income statement',
        problem: `<p>Revenue €500,000; COGS €280,000; SG&A €90,000; Depreciation €30,000; Interest €15,000; Tax rate 25%. Compute Net Income.</p>`,
        solution: `<p>GP = 500 − 280 = 220. EBIT = 220 − 90 − 30 = 100. EBT = 100 − 15 = 85. Tax = 85 × 0.25 = 21.25. <strong>NI = €63.75</strong> (€63,750).</p>`
      }
    ],
    examTopics: [
      'Working capital, Current ratio, Quick ratio — Quick EXCLUDES inventory & prepaid',
      'Three asset capitalization criteria (owned, future benefits, measurable)',
      'Three liability recognition criteria (probable, estimable, transaction occurred)',
      'Classify items as current vs non-current',
      'Retained earnings roll-forward (Beg + NI − Div = End)',
      'Historical cost vs fair value measurement choice',
      'Distinguish operating vs nonoperating revenues/expenses (interest is nonoperating)',
      'Computing gross profit, EBIT, EBT, NI in sequence'
    ],
    questions: [
      {
        id: 'ch2_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Which item would NOT appear in the Quick Ratio numerator?',
        options: ['Cash', 'Accounts receivable', 'Inventory', 'Marketable securities'],
        correct: 2,
        explanation: 'Quick Ratio = (Cash + Marketable Sec + AR) / CL. Inventory is excluded because it is the slowest current asset to convert to cash.'
      },
      {
        id: 'ch2_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following items is NOT a non-current asset?',
        options: ['Goodwill', 'Land', 'Inventory', 'Patent'],
        correct: 2,
        explanation: 'Inventory is a current asset.'
      },
      {
        id: 'ch2_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Sales €800,000; COGS €450,000; Operating expenses €180,000; Interest €25,000; Tax rate 30%. Compute Net Income in €.',
        answer: 101500, units: '€', tolerance: 0.001,
        explanation: 'GP = 350. EBIT = 170. EBT = 145. Tax = 43.5. NI = €101,500.'
      },
      {
        id: 'ch2_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is classified as a CURRENT liability?',
        options: ['Bonds payable due in 5 years', '20-year mortgage', 'Unearned revenue earnable within 12 months', 'Treasury shares'],
        correct: 2,
        explanation: 'Unearned revenue earnable within 12 months is current. Treasury shares are contra-equity, not a liability.'
      },
      {
        id: 'ch2_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Cash 30; AR 70; Inventory 100; Prepaid 10; AP 60; Accrued 20; Long-term Debt 200. Compute working capital in €.',
        answer: 130, units: '€', tolerance: 0.001,
        explanation: 'CA = 210. CL = 80 (long-term debt is NOT current). WC = €130.'
      },
      {
        id: 'ch2_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company has the following: Cash 50; AR 100; Inventory 200; Prepaid 20; AP 80; Accrued 40. Compute the Quick Ratio.',
        options: ['1.25', '2.25', '3.08', '3.25'],
        correct: 0,
        explanation: 'QR = (50 + 100) / (80 + 40) = 150 / 120 = 1.25. Exclude inventory and prepaid.'
      },
      {
        id: 'ch2_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT a criterion for liability recognition?',
        options: ['The obligation is probable', 'The amount is reasonably estimable', 'The transaction has occurred', 'The obligation is more than $1,000'],
        correct: 3,
        explanation: 'There is no minimum dollar threshold. The three criteria are probable, estimable, and the transaction has occurred.'
      },
      {
        id: 'ch2_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Current ratio = 2.5. Current liabilities €180,000. Compute current assets in €.',
        answer: 450000, units: '€', tolerance: 0.001,
        explanation: 'CR = CA / CL → 2.5 × 180,000 = €450,000.'
      },
      {
        id: 'ch2_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is most appropriately measured at FAIR VALUE rather than historical cost on the balance sheet?',
        options: ['Land held for own use', 'A patent purchased 5 years ago', 'Marketable securities held for trading', 'Inventory of finished goods'],
        correct: 2,
        explanation: 'Trading marketable securities are reported at fair value. Land, patents, and inventory are at historical cost (with LCNRV for inventory).'
      },
      {
        id: 'ch2_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'In a multi-step income statement, INTEREST EXPENSE is classified as:',
        options: ['Operating expense (always)', 'Cost of goods sold', 'Nonoperating expense (deducted to compute pre-tax income)', 'A direct reduction of equity'],
        correct: 2,
        explanation: 'Interest is nonoperating — appears below operating income (EBIT) and is deducted to derive pre-tax income.'
      },
      {
        id: 'ch2_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Target FY2022: Cash & equivalents $2,229M; Short-term investments $0; AR $1,310M; Inventory $13,902M; Prepaid $1,394M; Other CA $2,738M. Current liabilities $21,747M. Compute the Quick Ratio (use Cash + AR only — Target reports no marketable securities).',
        answer: 0.16, units: '', tolerance: 0.01,
        explanation: 'QR = (2,229 + 1,310) / 21,747 = 3,539 / 21,747 = 0.16. Slide-confirmed.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 3
  // =============================================================
  {
    id: 'ch3',
    number: 3,
    title: 'Accrual Accounting & Adjusting Entries',
    subtitle: 'Accounting cycle, debits/credits, four adjustment types, closing entries.',
    theory: [
      {
        title: 'The accounting cycle',
        body: `<p><strong>Analyze → Record (journal) → Post (ledger) → Adjust → Report → Close</strong>.</p>
        <ul>
          <li><strong>General journal</strong>: chronological record of debits and credits.</li>
          <li><strong>General ledger</strong>: all accounts grouped into 5 elements (Assets, Liabilities, Equity, Revenues, Expenses).</li>
          <li><strong>Chart of accounts</strong>: list of all account titles + identification codes.</li>
          <li><strong>T-accounts</strong>: graphic representation (debits left, credits right).</li>
        </ul>`
      },
      {
        title: 'Double-entry & normal balances',
        body: `<p><strong>Double-entry rule</strong>: Debits = Credits in every transaction.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin:8px 0">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Normal balance</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Account types</th></tr>
          <tr><td style="padding:6px"><strong>DEBIT</strong></td><td style="padding:6px">Assets, Expenses, Dividends, Treasury Stock (contra-equity)</td></tr>
          <tr><td style="padding:6px"><strong>CREDIT</strong></td><td style="padding:6px">Liabilities, Equity (Common Stock, APIC, Retained Earnings), Revenues</td></tr>
        </table>
        <p><strong>Expanded equation</strong>: A = L + Common Stock + RE + Revenues − Expenses − Dividends.</p>`
      },
      {
        title: 'Cash vs accrual accounting',
        body: `<p><strong>Accrual basis</strong> (required by IFRS/US GAAP): record revenues when <em>earned</em> and expenses when <em>incurred</em>, regardless of cash.</p>
        <p><strong>Revenue recognition principle</strong>: revenue is earned when the performance obligation is satisfied (typically when goods/services delivered).</p>
        <p><strong>Matching (expense recognition) principle</strong>: expenses are recognized in the same period as the revenues they helped generate.</p>`
      },
      {
        title: 'The four adjusting entry types',
        body: `<p><strong>DEFERRALS</strong> (cash already moved):</p>
        <ol>
          <li><strong>Deferred (Unearned) Revenue</strong>: cash received in advance, now earned. <em>Dr Unearned Rev / Cr Revenue</em>. Liability ↓.</li>
          <li><strong>Deferred (Prepaid) Expense</strong>: cash paid in advance, now consumed. <em>Dr Expense / Cr Prepaid</em>. Asset ↓. Includes <strong>depreciation</strong>.</li>
        </ol>
        <p><strong>ACCRUALS</strong> (cash hasn't moved yet):</p>
        <ol start="3">
          <li><strong>Accrued Revenue</strong>: revenue earned but not received. <em>Dr Receivable / Cr Revenue</em>. Asset ↑.</li>
          <li><strong>Accrued Expense</strong>: expense incurred but not paid. <em>Dr Expense / Cr Payable</em>. Liability ↑.</li>
        </ol>
        <p><strong>Adjusting entries NEVER affect cash.</strong> They always touch at least one B/S and one I/S account.</p>`
      },
      {
        title: 'Trial balance & closing entries',
        body: `<p><strong>Trial balance</strong> lists all GL accounts; total debits must equal credits. <em>Unadjusted</em> (before adjusting entries) and <em>Adjusted</em> (after).</p>
        <p><strong>Closing entries</strong> at year-end: temporary accounts (Revenues, Expenses, Dividends) are closed to Retained Earnings. Permanent accounts (Assets, Liabilities, Equity) carry forward.</p>
        <ul>
          <li>Dr Revenues / Cr Retained Earnings (close revenues)</li>
          <li>Dr Retained Earnings / Cr Expenses (close expenses)</li>
          <li>Dr Retained Earnings / Cr Dividends (close dividends)</li>
        </ul>`
      },
      {
        title: 'If adjusting entries are forgotten',
        body: `<ul>
          <li>Forget <strong>accrued expense</strong> → expense too low, liability too low → <em>NI overstated, equity overstated, liabilities understated</em>.</li>
          <li>Forget <strong>accrued revenue</strong> → revenue too low, asset too low → <em>NI understated, equity understated, assets understated</em>.</li>
          <li>Forget <strong>prepaid expense expensing</strong> → expense too low, asset too high → <em>NI overstated, assets overstated</em>.</li>
          <li>Forget <strong>unearned revenue earning</strong> → revenue too low, liability too high → <em>NI understated, liabilities overstated</em>.</li>
        </ul>`
      }
    ],
    formulas: [
      { name: 'Annual SL depreciation', formula: '(Cost − Salvage) / Useful Life' },
      { name: 'Monthly depreciation', formula: 'Annual depreciation / 12' },
      { name: 'Accrued interest', formula: 'Principal × Annual Rate × (Months/12)' },
      { name: 'Income tax expense', formula: 'Pre-tax Income × Tax Rate' },
      { name: 'Net income', formula: 'NI = Pre-tax Income − Income Tax Expense' },
      { name: 'Book value of PPE', formula: 'BV = Cost − Accumulated Depreciation' },
      { name: 'Supplies expense', formula: 'Supplies Exp = Beg Supplies + Purchases − End Supplies' }
    ],
    examples: [
      {
        title: 'Jana Juice — June 2019 adjusting entries (slide example)',
        problem: `<p>Jana Juice end of June 2019: (a) $100 of unearned revenue now earned; (b) Prepaid insurance $800 over 4 months; (c) Equipment $10,200 / 5-yr life; (d) $60 interest receivable; (e) Accrued wages $550; (f) Accrued interest expense on $12,000 loan @ 12% for 1 month; (g) Tax rate 30%. Compute net income.</p>`,
        solution: `<p>(a) Dr Unearned Rev 100 / Cr Sales Rev 100.<br>(b) Insurance: 800 / 4 = $200/mo.<br>(c) Depreciation: 10,200 / 5 / 12 = $170/mo.<br>(d) Dr Interest Receivable 60 / Cr Interest Income 60.<br>(e) Dr Wages Exp 550 / Cr Wages Payable 550.<br>(f) Interest = 12,000 × 12% × 1/12 = $120.<br>Pre-tax income (per slide) = $2,020.<br>Tax = 2,020 × 30% = $606.<br><strong>NI = 2,020 − 606 = $1,414</strong>.</p>`
      },
      {
        title: 'Wages accrual',
        problem: `<p>Employees earn $500/day, work Mon–Fri, paid every Friday. December 31 falls on a Wednesday. What adjusting entry is required?</p>`,
        solution: `<p>3 days earned but unpaid: 3 × $500 = $1,500. <strong>Dr Wages Expense 1,500 / Cr Wages Payable 1,500</strong>.</p>`
      },
      {
        title: 'Prepaid insurance',
        problem: `<p>October 1, paid $24,000 for a 24-month insurance policy and recorded it as Prepaid Insurance. What is the adjusting entry on December 31?</p>`,
        solution: `<p>3 months consumed: (3/24) × 24,000 = $3,000. <strong>Dr Insurance Expense 3,000 / Cr Prepaid Insurance 3,000</strong>.</p>`
      }
    ],
    examTopics: [
      'Identifying which type of adjusting entry is needed',
      'Adjusting entries NEVER affect cash',
      'Earning previously-collected revenue DECREASES a liability',
      'Wages earned but unpaid INCREASE a liability',
      'Compute supplies expense, insurance expense, interest accrual, depreciation',
      'Closing entries: temporary → Retained Earnings',
      'Effect of forgetting an adjusting entry on NI / equity / assets / liabilities',
      'Normal balances by account type',
      'Trial balance must balance (debits = credits)'
    ],
    questions: [
      {
        id: 'ch3_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Adjusting entries:',
        options: ['Ensure revenue and expense recognition principles are followed', 'Are necessary to conform to IFRS and US GAAP', 'Include both accruals and deferrals', 'All of these answer choices are correct'],
        correct: 3,
        explanation: 'All three are true.'
      },
      {
        id: 'ch3_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Ron services a car on July 31. Customer picks up August 1 and mails payment August 5; Ron receives the check August 6. When is the revenue earned?',
        options: ['July 31', 'August 1', 'August 5', 'August 6'],
        correct: 0,
        explanation: 'Revenue is earned when the service is performed — July 31.'
      },
      {
        id: 'ch3_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Which adjustment requires DECREASING the liabilities reported on the balance sheet?',
        options: ['A company uses $400 of supplies during the year', 'Recording $400 of depreciation on equipment', 'Earning $400 of revenue collected at the beginning of the year', 'Recording $400 of wages earned that will be paid next year'],
        correct: 2,
        explanation: 'Earning previously-collected revenue reduces Unearned Revenue (a liability).'
      },
      {
        id: 'ch3_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'On May 1, paid $36,000 for a 3-year insurance policy and recorded as Prepaid Insurance. Compute insurance expense for the year ending December 31 in $.',
        answer: 8000, units: '$', tolerance: 0.001,
        explanation: '8 months consumed × ($36,000/36) = 8 × $1,000 = $8,000.'
      },
      {
        id: 'ch3_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg supplies $2,400; purchases $9,800; ending count $1,900. Compute supplies expense for the year in $.',
        answer: 10300, units: '$', tolerance: 0.001,
        explanation: 'Supplies Exp = 2,400 + 9,800 − 1,900 = $10,300.'
      },
      {
        id: 'ch3_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Failure to record an accrued wages expense at year-end will:',
        options: ['Overstate assets and understate liabilities', 'Overstate net income and understate liabilities', 'Understate net income and overstate liabilities', 'Have no effect on the financial statements'],
        correct: 1,
        explanation: 'Without the entry: wages expense too low → NI too high → equity too high; wages payable missing → liabilities too low.'
      },
      {
        id: 'ch3_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'A 6-month, 8% note payable for $30,000 was signed November 1, 2024. How much interest expense should be accrued at December 31, 2024 in $?',
        answer: 400, units: '$', tolerance: 0.001,
        explanation: 'Interest = 30,000 × 8% × 2/12 = $400.'
      },
      {
        id: 'ch3_q8', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is an example of an ACCRUED revenue?',
        options: ['Cash received in advance for services to be performed next month', 'Interest earned on a bond but not yet received', 'Sale of inventory paid in cash at point of sale', 'A customer deposit for a custom order'],
        correct: 1,
        explanation: 'Accrued revenue = earned but not received. Interest accrues over time.'
      },
      {
        id: 'ch3_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'A consulting firm collected $48,000 on April 1 for a 12-month engagement and credited Unearned Revenue. What balance should appear in Unearned Revenue at December 31 in $?',
        answer: 12000, units: '$', tolerance: 0.001,
        explanation: '9 months earned × $4,000/month = $36,000 recognized. Unearned remaining = 48,000 − 36,000 = $12,000.'
      },
      {
        id: 'ch3_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is the normal balance for these accounts (in order): Asset, Revenue, Treasury Stock, Liability?',
        options: ['Debit, Credit, Debit, Credit', 'Credit, Debit, Credit, Debit', 'Debit, Debit, Credit, Credit', 'Debit, Credit, Credit, Debit'],
        correct: 0,
        explanation: 'Assets and Treasury Stock (a contra-equity) carry debit balances; Liabilities and Revenues carry credit balances.'
      },
      {
        id: 'ch3_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Jana Juice June 2019: equipment cost $10,200; useful life 5 years; no salvage. Compute the MONTHLY depreciation expense in $.',
        answer: 170, units: '$', tolerance: 0.001,
        explanation: 'Monthly Dep = 10,200 / 5 / 12 = $170/month (slide answer).'
      },
      {
        id: 'ch3_q12', type: 'numeric', difficulty: 'medium',
        prompt: 'Pre-tax income $2,020. Tax rate 30%. Compute net income in $.',
        answer: 1414, units: '$', tolerance: 0.001,
        explanation: 'Tax = 2,020 × 0.30 = 606. NI = 2,020 − 606 = $1,414.'
      },
      // From MCQ C3 textbook practice pack
      {
        id: 'ch3_q13', type: 'mcq', difficulty: 'easy',
        prompt: 'A journal entry that contains more than two accounts is called:',
        options: ['A posted journal entry', 'An adjusting journal entry', 'An erroneous journal entry', 'A compound journal entry'],
        correct: 3,
        explanation: 'Compound entry = involves more than 2 accounts. Common with adjusting entries that touch multiple accounts.'
      },
      {
        id: 'ch3_q14', type: 'mcq', difficulty: 'easy',
        prompt: 'Posting refers to the process whereby journal entry information is transferred from:',
        options: ['Journal to general ledger accounts', 'General ledger accounts to a journal', 'Source documents to a journal', 'A journal to source documents'],
        correct: 0,
        explanation: 'The accounting cycle: source docs → journal → POST → general ledger.'
      },
      {
        id: 'ch3_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is an example of an ADJUSTING entry?',
        options: ['Recording the purchase of supplies on account', 'Recording depreciation expense on a truck', 'Recording cash received from customers for services rendered', 'Recording the cash payment of wages to employees'],
        correct: 1,
        explanation: 'Depreciation is a deferred-expense adjusting entry (allocates a prepaid asset to expense). The others are routine cash/credit transactions.'
      },
      {
        id: 'ch3_q16', type: 'numeric', difficulty: 'medium',
        prompt: 'Equipment placed in service Jan 1, 2013 cost $20,000 with no salvage and an 8-year life. Compute ACCUMULATED depreciation at end of fiscal year 2015 (3rd year) in $ using straight-line.',
        answer: 7500, units: '$', tolerance: 0.001,
        explanation: 'Annual SL = 20,000 / 8 = $2,500. After 3 yrs (2013, 2014, 2015): Accum Dep = 3 × 2,500 = $7,500.'
      },
      {
        id: 'ch3_q17', type: 'numeric', difficulty: 'hard',
        prompt: 'Custom Cakes received $24,000 in customer deposits during November. Unearned Revenue balance was $4,000 at start of November and $6,000 at end. How much revenue did Custom Cakes recognize during November in $?',
        answer: 22000, units: '$', tolerance: 0.001,
        explanation: 'Beg unearned + Cash received − End unearned = Revenue recognized = 4,000 + 24,000 − 6,000 = $22,000.'
      },
      // From Final Exam 2025 V1 (Vivid adjusting entries)
      {
        id: 'ch3_q18', type: 'numeric', difficulty: 'hard',
        prompt: 'Vivid Corp Dec 31 adjusting entries: Depreciation $45,000; Recorded AR $29,000; Accrued expenses $14,000; Used insurance $5,000 (was prepaid); Rent revenue earned $3,000 (was unearned). Total assets PRIOR to entries = $430,000. Compute total assets AFTER the adjusting entries in $.',
        answer: 409000, units: '$', tolerance: 0.001,
        explanation: 'Asset effects: −Dep 45 − Used insurance 5 + Recorded AR 29 = −21. Accrued exp and rent earned affect liabilities not assets. End assets = 430 − 21 = $409,000.'
      },
      // From Practice Quiz FRA2024
      {
        id: 'ch3_q19', type: 'mcq', difficulty: 'medium',
        prompt: 'Under accrual-basis accounting:',
        options: ['Cash must be received before revenue is recognized', 'Net income is calculated by matching cash outflows against cash inflows', 'Events that change a company\'s financial statements are recognized in the period they occur rather than in the period in which cash is paid or received', 'The ledger accounts must be adjusted to reflect a cash basis of accounting before financial statements are prepared under IFRS'],
        correct: 2,
        explanation: 'Accrual: recognize when EARNED/INCURRED, not when cash moves. Required by IFRS and US GAAP.'
      },
      {
        id: 'ch3_q20', type: 'mcq', difficulty: 'easy',
        prompt: 'If an adjustment is needed for unearned revenues, the:',
        options: ['Liability and related revenue are overstated before adjustment', 'Liability and related revenue are understated before adjustment', 'Liability is overstated and the related revenue is understated before adjustment', 'Liability is understated and the related revenue is overstated before adjustment'],
        correct: 2,
        explanation: 'Cash collected sits in Unearned Revenue (liability). When earned, revenue rises and liability falls. Pre-adjustment: liability too high, revenue too low.'
      },
      {
        id: 'ch3_q21', type: 'mcq', difficulty: 'medium',
        prompt: 'If a company FAILS to make an adjusting entry to record supplies expense, then:',
        options: ['Equity will be understated', 'Expenses will be understated', 'Assets will be understated', 'Net income will be understated'],
        correct: 1,
        explanation: 'Supplies used but not expensed → expenses too low → NI too high → equity too high → assets (supplies) too high. Only B is correct.'
      },
      {
        id: 'ch3_q22', type: 'mcq', difficulty: 'hard',
        prompt: 'Iron Inn collected €150,000 cash in December for resort reservations and credited Unearned Revenue. By Dec 31 it had earned 1/3 (the rest in January). The required Dec 31 adjusting entry impacts the BALANCE SHEET by:',
        options: ['Increased Equity €100,000', 'Decreased Liabilities €50,000', 'Increased Assets €150,000', 'Decreased Equity €50,000'],
        correct: 1,
        explanation: '1/3 × 150,000 = €50,000 earned. Adjusting entry: Dr Unearned Rev 50,000 / Cr Revenue 50,000. Liability ↓ 50,000; revenue ↑ 50,000 → equity ↑ 50,000. Choice B captures the liability side.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 4
  // =============================================================
  {
    id: 'ch4',
    number: 4,
    title: 'Revenue & Receivables',
    subtitle: 'IFRS 15/ASC 606, long-term contracts, allowance method, AR turnover, earnings management.',
    theory: [
      {
        title: 'IFRS 15 / ASC 606 — the 5-step model',
        body: `<ol>
          <li><strong>Identify the contract</strong> with the customer.</li>
          <li><strong>Identify the performance obligations</strong> (each must be distinct).</li>
          <li><strong>Determine the transaction price</strong> (includes variable consideration: discounts, rebates, bonuses, royalties).</li>
          <li><strong>Allocate the transaction price</strong> to performance obligations based on Stand-alone Selling Prices (SSPs).</li>
          <li><strong>Recognize revenue</strong> when (or as) the seller satisfies the performance obligation (control passes to customer).</li>
        </ol>
        <p>Revenue may be recognized at a <strong>point in time</strong> (most goods sales) or <strong>over time</strong> (long-term construction, subscription services). Sales revenue may be recorded BEFORE cash is collected (credit sale) or AFTER (deferred revenue).</p>`
      },
      {
        title: 'Long-term contracts',
        body: `<ul>
          <li><strong>Percentage-of-completion (input method)</strong>: recognize revenue based on costs incurred / total expected costs. <em>Required if</em>: signed contract, fixed/determinable price, costs reasonably estimable.</li>
          <li><strong>Completed contract</strong>: defer all revenue until completion. Used when % completion criteria are NOT all met.</li>
        </ul>
        <p>Bundled sales (multiple-element arrangements): allocate price proportionately to fair value of each element.</p>`
      },
      {
        title: 'Accounts receivable & the allowance method',
        body: `<p>Credit sale: <em>Dr AR / Cr Revenue</em>. Some receivables won't be collected.</p>
        <p><strong>Net Realizable Value (NRV) = Gross AR − Allowance for Doubtful Accounts</strong>.</p>
        <p>Two estimation approaches:</p>
        <ul>
          <li><strong>Aging of AR</strong> (balance-sheet approach) — categorize by age, apply uncollectible % per bucket. <em>GAAP-acceptable</em> and more accurate. Bad Debt Expense = Required ending allowance − existing allowance balance (or + write-offs depending on starting balance).</li>
          <li><strong>% of credit sales</strong> (income-statement approach) — apply % to net credit sales. <em>NOT GAAP-acceptable</em> but used internally and in forecasting. Bad Debt Expense = Net Credit Sales × %.</li>
        </ul>`
      },
      {
        title: 'Write-off mechanics',
        body: `<p>Specific account written off: <em>Dr Allowance / Cr AR</em>.</p>
        <p><strong>Effects</strong>: gross AR ↓, allowance ↓ by the same amount → <em>NRV unchanged</em>, <em>NI unchanged</em>, expenses unchanged. The bad debt expense was already recognized when the allowance was estimated.</p>
        <p>Recovery of a previously-written-off account: reverse the write-off (Dr AR / Cr Allowance) then record collection (Dr Cash / Cr AR).</p>`
      },
      {
        title: 'Pledging vs factoring',
        body: `<ul>
          <li><strong>Pledging</strong>: using receivables as collateral for a loan. AR <em>stays</em> on the balance sheet.</li>
          <li><strong>Factoring</strong>: <em>selling</em> receivables to a financial institution. AR <em>removed</em> from balance sheet.</li>
        </ul>`
      },
      {
        title: 'Earnings management red flags',
        body: `<ul>
          <li><strong>Cookie jar reserve</strong>: overestimate bad debts in good years, then "reverse" the excess in bad years to boost NI.</li>
          <li><strong>Channel stuffing</strong>: push extra inventory to customers near period end to inflate revenue.</li>
          <li><strong>Big bath</strong>: take a huge nonrecurring loss in an already-bad period (clears the deck for future periods).</li>
          <li><strong>Income smoothing</strong>: time gains/losses to keep earnings trending steadily.</li>
          <li><strong>Useful life manipulation</strong>: extend useful life → lower depreciation → higher NI.</li>
        </ul>`
      }
    ],
    formulas: [
      { name: 'Net realizable value of AR', formula: 'NRV = Gross AR − Allowance for Doubtful Accounts' },
      { name: 'Bad debt (% of sales)', formula: 'BDE = Net Credit Sales × %' },
      { name: 'Bad debt (aging)', formula: 'BDE = Required ending Allowance − Existing balance (+ Write-offs)' },
      { name: '% complete (cost-to-cost)', formula: '% = Costs to Date / Total Estimated Costs' },
      { name: 'Revenue recognized (% completion)', formula: '(% complete × Total Contract) − Revenue previously recognized' },
      { name: 'AR Turnover', formula: 'ART = Net Credit Sales / Average AR' },
      { name: 'Days Sales Outstanding (DSO)', formula: 'DSO = 365 / ART' },
      { name: 'Interest on note', formula: 'Interest = Principal × Rate × (Time/12)' }
    ],
    examples: [
      {
        title: 'Haskell Construction — % completion (slide example)',
        problem: `<p>Contract $8,000,000; total estimated cost $6,000,000; expected gross profit $2,000,000. Year 1 costs incurred $1,800,000. Compute Year 1 revenue and gross profit.</p>`,
        solution: `<p>% complete = 1,800,000 / 6,000,000 = 30%.<br>Year 1 Revenue = 30% × 8,000,000 = <strong>$2,400,000</strong>.<br>Year 1 Expense = $1,800,000.<br>Year 1 Gross Profit = <strong>$600,000</strong>.</p>`
      },
      {
        title: 'Aging method (Mouser-style)',
        problem: `<p>Aging schedule: Current $41,000 × 1.0% + 1–60 days $32,000 × 3.0% + 61–90 $16,500 × 4.5% + Over 90 $8,700 × 11% = ?</p>`,
        solution: `<p>410 + 960 + 743 + 957 = <strong>$3,070</strong> required ending allowance balance. Bad Debt Expense = required allowance − existing balance (+ write-offs during year).</p>`
      },
      {
        title: 'Write-off has no effect on NRV',
        problem: `<p>Before: AR $98,200; Allowance $3,070. Write off $2,100. Compute NRV before and after.</p>`,
        solution: `<p>Before: NRV = 98,200 − 3,070 = $95,130.<br>After: AR = 96,100; Allowance = 970. NRV = 96,100 − 970 = <strong>$95,130</strong>. Unchanged.</p>`
      },
      {
        title: 'Amazon AR turnover (slide-confirmed)',
        problem: `<p>Amazon 2021: Sales $469,822M; AR Beg $20,816M, End $24,542M. Compute ART and DSO.</p>`,
        solution: `<p>Avg AR = (20,816 + 24,542) / 2 = $22,679M.<br>ART = 469,822 / 22,679 = <strong>20.71 times</strong>.<br>DSO = 365 / 20.71 = <strong>17.6 days</strong>. Amazon collects every ~18 days.</p>`
      },
      {
        title: 'Cleaver Construction — useful life manipulation',
        problem: `<p>$21M building, originally 30-year life. After 12 years, life extended to 36 years. Compute the change in annual depreciation.</p>`,
        solution: `<p>Original annual dep = 21M / 30 = $700,000.<br>BV after 12 years = 21M − 12 × 700K = $12.6M. Remaining new life = 36 − 12 = 24 yrs.<br>New annual dep = 12.6M / 24 = $525,000.<br><strong>NI is overstated by $175,000/yr</strong> going forward — useful-life manipulation is an earnings-management tool.</p>`
      }
    ],
    examTopics: [
      'Revenue earned WHEN, not when cash collected — the Ron-services-car question',
      'NRV = Gross AR − Allowance ("cash (net) realizable value")',
      'Aging method: BDE = Required allowance − existing balance (+ write-offs)',
      'Write-off has NO effect on NRV or net income',
      'Sales revenue MAY be recorded before cash is collected',
      'Pledging: AR stays; Factoring: AR removed',
      'Compute interest on a note: P × R × (T/12)',
      '% completion: revenue = % × total contract minus prior revenue',
      'Earnings management: cookie jar, big bath, channel stuffing, income smoothing'
    ],
    questions: [
      {
        id: 'ch4_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'The net amount expected to be received in cash from receivables is called:',
        options: ['Gross realizable value', 'Gross cash value', 'Allowance value', 'Cash (net) realizable value'],
        correct: 3,
        explanation: 'NRV = Gross AR − Allowance for Doubtful Accounts.'
      },
      {
        id: 'ch4_q2', type: 'mcq', difficulty: 'easy',
        prompt: 'Sales revenue:',
        options: ['May be recorded before cash is collected', 'Always equals cash collections in a month', 'Only results from credit sales', 'Is only recorded after cash is collected'],
        correct: 0,
        explanation: 'Under accrual accounting, revenue is recognized when earned regardless of cash collection.'
      },
      {
        id: 'ch4_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Unearned Rent Revenue is:',
        options: ['A contra account to Rent Revenue', 'Reported as a current liability', 'A revenue account', 'Debited when rent is received in advance'],
        correct: 1,
        explanation: 'Cash received in advance creates an obligation → liability, typically current.'
      },
      {
        id: 'ch4_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Gross AR €420,000. Aging estimates €18,000 will be uncollectible. Allowance currently has a credit balance of €4,500. Compute Bad Debt Expense in € (no write-offs occurred).',
        answer: 13500, units: '€', tolerance: 0.001,
        explanation: 'Aging method: BDE = Required allowance − existing balance = 18,000 − 4,500 = €13,500.'
      },
      {
        id: 'ch4_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'After recording bad debt expense above, a specific customer account of €2,800 is written off. Compute the NRV of receivables AFTER the write-off in €.',
        answer: 402000, units: '€', tolerance: 0.001,
        explanation: 'Before write-off: NRV = 420 − 18 = 402. Write-off reduces both AR and allowance by 2.8. NRV unchanged at €402,000.'
      },
      {
        id: 'ch4_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'On September 1, accepted a 4-month, 6%, $25,000 note receivable. Compute interest revenue accrued at December 31 in $.',
        answer: 500, units: '$', tolerance: 0.001,
        explanation: 'Interest = 25,000 × 6% × 4/12 = $500.'
      },
      {
        id: 'ch4_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the allowance method, the journal entry to write off a specific uncollectible account:',
        options: ['Decreases NI and decreases assets', 'Decreases NI but does not affect total assets', 'Has no effect on NI or net realizable value of receivables', 'Increases bad debt expense and decreases the allowance account'],
        correct: 2,
        explanation: 'Both gross AR and allowance fall by the same amount. NRV unchanged. No P&L effect.'
      },
      {
        id: 'ch4_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Net credit sales €1,800,000. % of sales method estimates 1.5% uncollectible. Allowance has a DEBIT balance of €3,000. Compute Bad Debt Expense in €.',
        answer: 27000, units: '€', tolerance: 0.001,
        explanation: 'Under % of sales method, existing allowance balance is IGNORED. BDE = 1,800,000 × 1.5% = €27,000.'
      },
      {
        id: 'ch4_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Net credit sales €4,500,000. Beg AR €380,000. End AR €420,000. Compute Days Sales Outstanding (DSO) rounded to nearest day.',
        answer: 32, units: 'days', tolerance: 0.05,
        explanation: 'ART = 4,500 / 400 = 11.25. DSO = 365 / 11.25 ≈ 32 days.'
      },
      {
        id: 'ch4_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Haskell contract: $8,000,000; total estimated cost $6,000,000. Year 1 costs incurred $2,400,000. Compute Year 1 revenue under percentage-of-completion in $.',
        answer: 3200000, units: '$', tolerance: 0.001,
        explanation: '% complete = 2,400 / 6,000 = 40%. Year 1 Rev = 40% × 8,000,000 = $3,200,000.'
      },
      {
        id: 'ch4_q11', type: 'mcq', difficulty: 'medium',
        prompt: 'Which earnings-management tactic involves pushing extra inventory to customers near period-end to inflate sales?',
        options: ['Cookie jar reserve', 'Big bath', 'Channel stuffing', 'Income smoothing'],
        correct: 2,
        explanation: 'Channel stuffing — pulling next quarter\'s sales into the current quarter.'
      },
      {
        id: 'ch4_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Pledging vs Factoring of accounts receivable. Which is correct?',
        options: ['Pledging removes AR; Factoring keeps AR on books', 'Pledging keeps AR on books; Factoring removes AR', 'Both remove AR from the books', 'Both keep AR on the books'],
        correct: 1,
        explanation: 'Pledge = collateral (AR stays). Factor = sell (AR removed).'
      },
      {
        id: 'ch4_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'A 30-year, $21M building has been depreciated for 12 years using straight-line (no salvage). Useful life is now extended to 36 years. Compute the new annual depreciation expense in $ (slide-style change-in-estimate).',
        answer: 525000, units: '$', tolerance: 0.001,
        explanation: 'Original annual = 700,000. BV after 12 yrs = 21M − 8.4M = 12.6M. New remaining life = 24 yrs. New annual = 12.6M / 24 = $525,000.'
      },
      // From MCQ C4 textbook practice pack
      {
        id: 'ch4_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'Which best describes the condition(s) for revenue recognition from a contract with a customer?',
        options: ['Cash payment must have been received from the customer', 'All performance obligations must be fulfilled', 'At least one of the contract\'s performance obligations must be fulfilled', 'There must be no uncertainty about the amount to be received'],
        correct: 2,
        explanation: 'Revenue is recognized as EACH performance obligation is satisfied — one at a time. Cash receipt is irrelevant; not all obligations need be done at once; some uncertainty (variable consideration) is allowed.'
      },
      {
        id: 'ch4_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'When multiple products or services are bundled and sold for one price, the revenue should be:',
        options: ['Recognised when the bundle is sold', 'Allocated among the distinct performance obligations and recognised as each is fulfilled', 'Deferred until all elements are delivered', 'Recognised when the customer pays cash'],
        correct: 1,
        explanation: 'Step 4 of IFRS 15: allocate by stand-alone selling price; Step 5: recognize as each obligation is satisfied (not when bundled together).'
      },
      {
        id: 'ch4_q16', type: 'mcq', difficulty: 'hard',
        prompt: 'A construction company contracts to build a production facility for a customer. It should recognize revenue as construction progresses ONLY if:',
        options: ['It receives advance cash payments', 'It retains title until completion', 'There are no contingent payments', 'Title transfers to the customer as the project progresses'],
        correct: 3,
        explanation: 'Revenue over time requires control to transfer to the customer over time — ownership/title transferring as work progresses signals that.'
      },
      {
        id: 'ch4_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'When management selectively excludes some revenues, expenses, gains, and losses from earnings calculated using GAAP, it is an example of:',
        options: ['Income smoothing', 'Big bath accounting', 'Cookie jar accounting', 'Non-IFRS or pro forma earnings'],
        correct: 3,
        explanation: 'Pro forma / non-GAAP earnings = management\'s own version of NI. Useful for adjustments but a red flag if used to mask poor performance.'
      },
      {
        id: 'ch4_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'If bad debts expense is determined by estimating uncollectible AR, the entry to record the WRITE-OFF of a specific uncollectible account would DECREASE:',
        options: ['Allowance for uncollectible accounts', 'Net income', 'Net book value of accounts receivable', 'Bad debts expense'],
        correct: 0,
        explanation: 'Write-off: Dr Allowance / Cr AR. Both gross AR and allowance decrease by the same amount. NRV unchanged; NI unchanged; bad debt expense unchanged.'
      },
      {
        id: 'ch4_q19', type: 'mcq', difficulty: 'hard',
        prompt: 'If management intentionally UNDERESTIMATES bad debts expense, then net income is:',
        options: ['Overstated and assets are understated', 'Understated and assets are overstated', 'Understated and assets are understated', 'Overstated and assets are overstated'],
        correct: 3,
        explanation: 'Underestimated BDE → expense too low → NI too high. Allowance too low → AR (net) too high → assets too high. Both overstated.'
      },
      // From Practice Quiz FRA2024 (allowance method)
      {
        id: 'ch4_q20', type: 'numeric', difficulty: 'hard',
        prompt: 'Hahn Co uses % of receivables method. Year-end AR $1,500,000. Allowance has $2,000 DEBIT balance. Estimates 1% of AR will be uncollectible. Compute the bad debt expense to record in $.',
        answer: 17000, units: '$', tolerance: 0.001,
        explanation: 'Required ending allowance = 1% × 1,500,000 = $15,000. With $2,000 DEBIT balance (rather than credit), need to add 15,000 + 2,000 = $17,000 to the allowance. So BDE = $17,000.'
      },
      {
        id: 'ch4_q21', type: 'numeric', difficulty: 'medium',
        prompt: 'Cash realizable value of AR was $33,000 BEFORE the write-off of a $2,000 account. Compute the cash realizable value AFTER the write-off in $.',
        answer: 33000, units: '$', tolerance: 0.001,
        explanation: 'Write-off reduces both gross AR and allowance by the same amount. NRV unchanged at $33,000.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 5
  // =============================================================
  {
    id: 'ch5',
    number: 5,
    title: 'Inventory & Cost of Goods Sold',
    subtitle: 'FIFO, LIFO, weighted-average, LCNRV, LIFO reserve, manufacturer 3-stage inventory.',
    theory: [
      {
        title: 'COGS equation & inventory cost',
        body: `<p><strong>COGS = Beginning Inventory + Purchases − Ending Inventory</strong>.</p>
        <p>Inventory cost = purchase cost + transportation in + cost to prepare for sale ± volume/cash discounts.</p>
        <p><strong>Cash discount terms (e.g., 2/10, n/30)</strong>: 2% discount if paid within 10 days; full price by day 30. Forgoing a 2/10, n/30 discount has an effective annual cost of ~37.2%.</p>`
      },
      {
        title: 'Manufacturer\'s inventory (3 stages)',
        body: `<ol>
          <li><strong>Raw Materials Inventory</strong> — parts/materials from suppliers.</li>
          <li><strong>Work-in-Process (WIP)</strong> — partially completed; includes materials, labor, overhead.</li>
          <li><strong>Finished Goods</strong> — ready to sell.</li>
        </ol>`
      },
      {
        title: 'Inventory cost-flow methods',
        body: `<ul>
          <li><strong>FIFO</strong>: oldest costs to COGS; newest to ending inventory. <em>In rising prices: low COGS, high gross profit, high ending inventory (closer to current cost), high taxes.</em></li>
          <li><strong>LIFO</strong>: newest costs to COGS; oldest to ending inventory. <em>In rising prices: high COGS, low gross profit, low ending inventory, low taxes (= more cash kept).</em> <strong>BANNED under IFRS.</strong></li>
          <li><strong>Weighted-average</strong>: cost per unit = total cost / total units. Smooths between FIFO and LIFO.</li>
        </ul>
        <p>The cash-tax savings is the principal reason US firms adopt LIFO.</p>`
      },
      {
        title: 'Lower of Cost or NRV (LCNRV)',
        body: `<p>If NRV < cost, write down: <em>Dr COGS / Cr Inventory</em>. <strong>NRV = Estimated Selling Price − Costs to Complete & Sell</strong>.</p>
        <p>Under <strong>IFRS</strong>: write-downs may be reversed if NRV recovers (capped at original cost).</p>
        <p>Under <strong>US GAAP</strong>: write-downs may NOT be reversed.</p>`
      },
      {
        title: 'LIFO Reserve (cross-firm comparison)',
        body: `<p><strong>LIFO Reserve = FIFO Inventory − LIFO Inventory</strong>.</p>
        <p>Used to convert LIFO firms to FIFO basis for fair comparison.</p>
        <p><strong>FIFO COGS = LIFO COGS − Change in LIFO Reserve during the year</strong>.</p>
        <p>This adjustment is critical when comparing US LIFO firms to European FIFO firms (e.g., Chevron vs Total).</p>`
      },
      {
        title: 'Inventory turnover & DIO',
        body: `<p><strong>Inventory Turnover = COGS / Average Inventory</strong>.</p>
        <p><strong>Days Inventory Outstanding (DIO) = 365 / Inventory Turnover</strong>.</p>
        <p>Higher turnover usually favorable. JIT and demand-pull production reduce inventory investment.</p>`
      }
    ],
    formulas: [
      { name: 'COGS (periodic)', formula: 'COGS = Beg Inv + Purchases − End Inv' },
      { name: 'Goods Available for Sale', formula: 'GAFS = Beg Inv + Purchases' },
      { name: 'Gross Profit', formula: 'GP = Net Sales − COGS' },
      { name: 'Gross Profit Margin', formula: 'GPM = GP / Net Sales' },
      { name: 'Inventory Turnover', formula: 'COGS / Average Inventory' },
      { name: 'Days Inventory Outstanding', formula: 'DIO = 365 / Inventory Turnover' },
      { name: 'Weighted-average cost/unit', formula: 'Total Cost of GAFS / Total Units Available' },
      { name: 'LCNRV (IFRS)', formula: 'Inventory carrying = MIN(Cost, NRV)' },
      { name: 'NRV', formula: 'NRV = Selling Price − Costs to Complete & Sell' },
      { name: 'LIFO Reserve', formula: 'LIFO Reserve = FIFO Inv − LIFO Inv' },
      { name: 'Convert LIFO COGS → FIFO', formula: 'FIFO COGS = LIFO COGS − Δ LIFO Reserve' }
    ],
    examples: [
      {
        title: 'Phelps goggles — FIFO vs LIFO vs Average (slide example)',
        problem: `<p>Beg 100 units @ $4 = $400. Purchase 400 units @ $4.50 = $1,800. Sold 460 at $12 each. Compute COGS and Ending Inventory under all three methods.</p>`,
        solution: `<p>GAFS = $2,200 / 500 units. Ending = 40 units. Sales = $5,520.<br><strong>FIFO</strong>: COGS = 100×4 + 360×4.50 = $2,020. End Inv = 40×4.50 = $180. GP = $3,500.<br><strong>LIFO</strong>: COGS = 400×4.50 + 60×4 = $2,040. End Inv = 40×4 = $160. GP = $3,480.<br><strong>Avg</strong> ($4.40/unit): COGS = 460×4.40 = $2,024. End Inv = 40×4.40 = $176. GP = $3,496.<br><em>Rising prices: LIFO highest COGS, FIFO highest ending inventory.</em></p>`
      },
      {
        title: 'Compute COGS via the equation',
        problem: `<p>Beg inventory $8,000. Purchases $28,400. Physical count $9,600 on hand. Compute COGS.</p>`,
        solution: `<p>COGS = 8,000 + 28,400 − 9,600 = <strong>$26,800</strong>.</p>`
      },
      {
        title: 'Chevron vs Total — LIFO/FIFO adjustment (slide case study)',
        problem: `<p>Chevron uses LIFO. 2014 LIFO Inv $6,505, Reserve $8,135. 2015 LIFO Inv $6,334, Reserve $3,745. LIFO COGS 2015 = $69,751. Compute FIFO-adjusted Inventory and FIFO COGS for 2015.</p>`,
        solution: `<p>FIFO Inv 2014 = 6,505 + 8,135 = $14,640. FIFO Inv 2015 = 6,334 + 3,745 = $10,079.<br>Δ LIFO Reserve = 3,745 − 8,135 = −$4,390 (reserve fell).<br>FIFO COGS = 69,751 − (−4,390) = <strong>$74,141</strong>.<br><em>Without adjustment, Chevron looked ~10.87× turnover; after adjustment, ~6.00× — closer to Total\'s 6.83× and far less impressive.</em></p>`
      }
    ],
    examTopics: [
      'COGS = Beg + Purchases − End (appears nearly every year)',
      'Rising prices: FIFO highest ending inventory, LIFO highest COGS / lowest NI',
      'LIFO is BANNED under IFRS',
      'LCNRV — write-down if NRV < cost; IFRS allows REVERSAL, US GAAP does not',
      'LIFO Reserve formula and conversion',
      'Inventory turnover = COGS / Avg Inv; DIO = 365 / Turnover',
      'A manufacturer\'s 3-stage inventory: Raw → WIP → Finished Goods',
      'Cash discount cost of forgoing 2/10, n/30 ≈ 37.2% per year'
    ],
    questions: [
      {
        id: 'ch5_q1', type: 'numeric', difficulty: 'easy',
        prompt: 'GLF Company: Beg Inventory $8,000. Purchases $28,400. Ending physical count $9,600. Compute COGS in $.',
        answer: 26800, units: '$', tolerance: 0.001,
        explanation: 'COGS = 8 + 28.4 − 9.6 = $26,800.'
      },
      {
        id: 'ch5_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'In rising prices, the inventory method that produces the balance sheet inventory CLOSEST to current cost is:',
        options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All produce the same value'],
        correct: 0,
        explanation: 'FIFO leaves the newest (most expensive) units on the balance sheet.'
      },
      {
        id: 'ch5_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'In rising prices, which method produces the LOWEST net income?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'All produce the same NI'],
        correct: 1,
        explanation: 'LIFO assigns the newest (highest) costs to COGS → highest COGS, lowest GP, lowest NI, lowest taxes.'
      },
      {
        id: 'ch5_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg 100 @ €5; Purchase 1: 150 @ €6; Purchase 2: 200 @ €8. Sold 350. Compute COGS under FIFO in €.',
        answer: 2300, units: '€', tolerance: 0.001,
        explanation: 'FIFO: 100×5 + 150×6 + 100×8 = 500 + 900 + 800 = €2,300.'
      },
      {
        id: 'ch5_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Same data — compute COGS under WEIGHTED-AVERAGE in €.',
        answer: 2333.33, units: '€', tolerance: 0.005,
        explanation: 'Avg cost = (500 + 900 + 1,600) / 450 = €6.6667. End Inv = 100 × 6.6667 = 666.67. COGS = 3,000 − 666.67 = €2,333.33.'
      },
      {
        id: 'ch5_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, inventory is reported at:',
        options: ['Historical cost only', 'Lower of cost or net realizable value (NRV)', 'Lower of cost or replacement cost', 'Fair value with gains/losses to P&L'],
        correct: 1,
        explanation: 'IFRS uses LCNRV. NRV = selling price − costs to complete & sell.'
      },
      {
        id: 'ch5_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'COGS €960,000. Beg Inventory €120,000; ending €100,000. Compute inventory turnover (in times).',
        answer: 8.73, units: 'times', tolerance: 0.01,
        explanation: 'Avg Inv = 110,000. Turnover = 960,000 / 110,000 = 8.73.'
      },
      {
        id: 'ch5_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Cost = $50,000. NRV = $42,000. Under IFRS, by how much is inventory written down ($)? Then NRV recovers to $48,000 — what is the new carrying value?',
        answer: 48000, units: '$', tolerance: 0.001,
        explanation: 'Initial write-down = $8,000 → carrying = $42,000. IFRS allows reversal up to original cost. New carrying = MIN(50,000, 48,000) = $48,000.'
      },
      {
        id: 'ch5_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'A company overstated its 2024 ending inventory by $5,000. Which is correct?',
        options: ['2024 COGS overstated; 2024 NI understated', '2024 COGS understated; 2024 NI overstated', '2024 NI correct, 2025 NI understated', 'Both years\' NI unaffected'],
        correct: 1,
        explanation: 'COGS = Beg + Purch − End. Overstated End → understated COGS → overstated NI in 2024. (Self-corrects in 2025: 2024\'s overstated End becomes 2025\'s overstated Beg → understated 2025 NI.)'
      },
      {
        id: 'ch5_q10', type: 'numeric', difficulty: 'medium',
        prompt: 'Net sales €1,200,000. Beg inv €80,000. Purchases €750,000. End inv €110,000. Compute gross profit margin in %.',
        answer: 40, units: '%', tolerance: 0.01,
        explanation: 'COGS = 80 + 750 − 110 = 720,000. GP = 480,000. GPM = 40%.'
      },
      {
        id: 'ch5_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Goggles (slide example): Beg 100 @ $4; Purchase 400 @ $4.50. Sold 460. Compute COGS under LIFO in $.',
        answer: 2040, units: '$', tolerance: 0.001,
        explanation: 'LIFO (periodic): 400 × 4.50 + 60 × 4 = 1,800 + 240 = $2,040 (slide answer).'
      },
      {
        id: 'ch5_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'Chevron 2015: LIFO Inventory $6,334; LIFO Reserve $3,745. Compute the FIFO-adjusted Inventory in $M.',
        answer: 10079, units: '$M', tolerance: 0.001,
        explanation: 'FIFO Inv = LIFO Inv + LIFO Reserve = 6,334 + 3,745 = $10,079M.'
      },
      {
        id: 'ch5_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'Chevron 2015: LIFO COGS $69,751M. Δ LIFO Reserve = −$4,390M (reserve fell). Compute FIFO COGS in $M.',
        answer: 74141, units: '$M', tolerance: 0.001,
        explanation: 'FIFO COGS = LIFO COGS − Δ Reserve = 69,751 − (−4,390) = $74,141M.'
      },
      {
        id: 'ch5_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'A manufacturer\'s inventory passes through which three stages in order?',
        options: ['Finished Goods → WIP → Raw Materials', 'Raw Materials → Finished Goods → WIP', 'Raw Materials → Work-in-Process → Finished Goods', 'WIP → Raw Materials → Finished Goods'],
        correct: 2,
        explanation: 'Raw Materials → WIP → Finished Goods → COGS.'
      },
      // From MCQ C5 textbook practice pack
      {
        id: 'ch5_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT normally reported as part of total manufacturing inventory cost?',
        options: ['Work-in-process', 'Finished goods', 'Property, plant, and equipment', 'Raw materials'],
        correct: 2,
        explanation: 'PP&E is a separate line on the balance sheet (long-term operating assets). Manufacturing inventory = Raw Materials + WIP + Finished Goods.'
      },
      {
        id: 'ch5_q16', type: 'mcq', difficulty: 'medium',
        prompt: 'When the current year\'s ENDING inventory amount is OVERSTATED, then:',
        options: ['Current year\'s COGS is overstated', 'Current year\'s total assets are understated', 'Current year\'s net income is overstated', 'Next year\'s income is overstated'],
        correct: 2,
        explanation: 'COGS = Beg + Purch − End. Overstated End → understated COGS → overstated NI. (Self-corrects in the following year as overstated End becomes overstated Beg.)'
      },
      {
        id: 'ch5_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'In a period of rising prices, the inventory cost allocation method that tends to result in the LOWEST reported net income is:',
        options: ['LIFO', 'FIFO', 'Average cost', 'Specific identification'],
        correct: 0,
        explanation: 'LIFO uses newest (highest) costs for COGS → highest COGS → lowest gross profit → lowest NI.'
      },
      {
        id: 'ch5_q18', type: 'numeric', difficulty: 'hard',
        prompt: 'Beyer Corp: Beg 2,000 units @ $50 = $100,000. Purchase 5,000 @ $75 = $375,000. Sold 6,000 units. Compute LIFO ENDING INVENTORY in $.',
        answer: 50000, units: '$', tolerance: 0.001,
        explanation: 'Available 7,000, sold 6,000, ending 1,000. LIFO leaves OLDEST units: 1,000 × $50 = $50,000. (Note FIFO ending would be 1,000 × $75 = $75,000.)'
      },
      {
        id: 'ch5_q19', type: 'numeric', difficulty: 'hard',
        prompt: 'Sletten Industries (LIFO): Sales $200M, LIFO COGS $135M. LIFO Reserve was $14M at Jan 1 and $22M at Dec 31. If Sletten had used FIFO, what would 2017 GROSS PROFIT have been in $M?',
        answer: 73, units: '$M', tolerance: 0.5,
        explanation: 'ΔLIFO Reserve = +$8M. FIFO COGS = LIFO COGS − ΔReserve = 135 − 8 = $127M. FIFO GP = 200 − 127 = $73M.'
      },
      // From Final Exam 2024 V1 — Square9 LIFO
      {
        id: 'ch5_q20', type: 'numeric', difficulty: 'hard',
        prompt: 'Square9 laptops: Beg 160 @ $460; Purchases 260 @ $510, 360 @ $560, 230 @ $610. Sold 900. Compute LIFO COGS in $.',
        answer: 497500, units: '$', tolerance: 0.001,
        explanation: 'Available 1,010 units, sold 900, ending 110 units. LIFO ending = 110 oldest × $460 = $50,600. Total cost of goods avail = 73,600+132,600+201,600+140,300 = $548,100. LIFO COGS = 548,100 − 50,600 = $497,500.'
      },
      // From Final Exam 2024 V1 — Gummy turnover
      {
        id: 'ch5_q21', type: 'numeric', difficulty: 'medium',
        prompt: 'Gummy Co: Beg inventory $118,000; End $110,000; Net sales $999,000; Gross profit $303,000. Compute inventory turnover (in times).',
        answer: 6.11, units: 'times', tolerance: 0.05,
        explanation: 'COGS = 999 − 303 = 696. Avg Inv = (118+110)/2 = 114. Turnover = 696 / 114 = 6.11×.'
      },
      // From Final Exam 2025 V1 — Communicated FIFO
      {
        id: 'ch5_q22', type: 'numeric', difficulty: 'hard',
        prompt: 'Communicated Inc mobile phones: Beg 270 @ $570; Purchases 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175. Compute FIFO ENDING INVENTORY in $.',
        answer: 158400, units: '$', tolerance: 0.001,
        explanation: 'Available 1,395, sold 1,175, ending 220 units. FIFO ending = newest units = 220 from the 285-unit Oct batch at $720 = $158,400.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 6
  // =============================================================
  {
    id: 'ch6',
    number: 6,
    title: 'Long-Term Assets',
    subtitle: 'PP&E, depreciation methods, intangibles, goodwill, impairment, asset disposal.',
    theory: [
      {
        title: 'Capitalize vs expense',
        body: `<p>Costs to <strong>acquire and prepare</strong> a long-term asset for use are capitalized: purchase price + installation + taxes + shipping + legal fees + setup + asset retirement obligations.</p>
        <p><strong>Self-constructed assets</strong>: capitalize direct material + labor + reasonable overhead + capitalized interest (only on debt used to finance construction).</p>
        <p>After acquisition: <strong>improvements</strong> (extend life or enhance usefulness) → capitalize; <strong>routine repairs</strong> → expense.</p>
        <p><strong>Land is NOT depreciated</strong> (indefinite life).</p>
        <p><strong>Capitalizing a repair (the trap)</strong>: NI overstated currently; future depreciation overstated (asset base inflated → bigger annual depreciation).</p>`
      },
      {
        title: 'Three depreciation methods',
        body: `<ol>
          <li><strong>Straight-line</strong>: equal expense each year.</li>
          <li><strong>Double-declining-balance (DDB)</strong>: accelerated. Rate = 2 × (1/Life). Apply to <em>book value</em>, NOT to depreciable base. Stop when BV = salvage.</li>
          <li><strong>Units-of-production</strong>: based on actual usage.</li>
        </ol>
        <p>DDB produces <strong>higher depreciation early</strong> → lower EBIT in Year 1 vs straight-line.</p>`
      },
      {
        title: 'Change in estimate (prospective)',
        body: `<p>If useful life or salvage estimate changes, treat <strong>prospectively</strong> (no restatement of past).</p>
        <p>Recompute: New annual depreciation = (Current Book Value − New Salvage) / New Remaining Life.</p>`
      },
      {
        title: 'Asset disposal',
        body: `<ol>
          <li>Update depreciation to date of sale.</li>
          <li>Compute Book Value = Cost − Accumulated Depreciation.</li>
          <li><strong>Gain/Loss = Sale Proceeds − Book Value</strong>.</li>
        </ol>
        <p>Gains/losses appear on the income statement (typically "Other income/expense").</p>`
      },
      {
        title: 'Intangibles & goodwill',
        body: `<ul>
          <li><strong>Patent</strong>: exclusive right to produce a product. Purchased → capitalize and amortize. Internally developed → only legal/registration fees capitalized.</li>
          <li><strong>Copyright</strong>: exclusive right of author/composer.</li>
          <li><strong>Trademark</strong>: registered name/logo. Purchased → capitalize. Internally developed → expense (advertising always expensed).</li>
          <li><strong>Franchise Right</strong>: capitalize start-up costs and franchise fee.</li>
          <li><strong>Goodwill</strong>: indefinite life. NEVER amortized. Tested annually for impairment.</li>
        </ul>
        <p><strong>Goodwill = Purchase Price − Fair Value of Net Identifiable Assets Acquired</strong>. Only arises from an acquisition. <strong>Internally generated goodwill is NEVER recorded</strong>.</p>
        <p><strong>R&D</strong>: US GAAP — all R&D expensed. IFRS — research expensed; <em>development</em> may be capitalized if criteria met.</p>`
      },
      {
        title: 'Impairment',
        body: `<p>If recoverable amount < book value, write down. Loss to P&L.</p>
        <p>Under <strong>IFRS</strong>: impairment can be reversed (except for goodwill). Under <strong>US GAAP</strong>: impairment cannot be reversed.</p>`
      }
    ],
    formulas: [
      { name: 'Straight-line depreciation', formula: '(Cost − Salvage) / Useful Life' },
      { name: 'Double-declining balance', formula: '(2 / Useful Life) × Beg Book Value' },
      { name: 'Units-of-production', formula: '((Cost − Salvage) / Total Units) × Units used' },
      { name: 'Book value', formula: 'BV = Cost − Accumulated Depreciation' },
      { name: 'Gain/Loss on disposal', formula: 'Gain/Loss = Proceeds − Book Value' },
      { name: 'Goodwill', formula: 'Purchase Price − Fair Value of Net Identifiable Assets Acquired' },
      { name: 'Amortization expense', formula: 'Cost / Useful Life (definite-life intangibles)' },
      { name: 'Change in estimate (new annual dep)', formula: '(BV − New Salvage) / New Remaining Life' },
      { name: 'PP&E Turnover', formula: 'Sales / Average Net PP&E' },
      { name: '% Depreciated', formula: 'Accumulated Depreciation / Cost (excl. land)' }
    ],
    examples: [
      {
        title: 'Tanner truck — straight-line (slide example)',
        problem: `<p>Truck cost $80,000; 5-year life; salvage $8,000. Compute annual SL depreciation and Year 1 BV.</p>`,
        solution: `<p>Depreciable base = 80,000 − 8,000 = 72,000.<br>Annual SL = 72,000 / 5 = <strong>$14,400/year</strong>.<br>Year 1 BV = 80,000 − 14,400 = $65,600.</p>`
      },
      {
        title: 'Tanner truck — full DDB schedule (slide-confirmed)',
        problem: `<p>Same truck, $80,000 cost, $8,000 salvage, 5-year life. Compute DDB depreciation for all 5 years.</p>`,
        solution: `<p>Rate = 2/5 = 40%.<br>Y1: 80,000 × 40% = <strong>$32,000</strong>; BV = 48,000.<br>Y2: 48,000 × 40% = <strong>$19,200</strong>; BV = 28,800.<br>Y3: 28,800 × 40% = <strong>$11,520</strong>; BV = 17,280.<br>Y4: 17,280 × 40% = <strong>$6,912</strong>; BV = 10,368.<br>Y5: cap at salvage. Dep = 10,368 − 8,000 = <strong>$2,368</strong>; BV = 8,000.</p>`
      },
      {
        title: 'Asset disposal (slide example)',
        problem: `<p>Hale Kennels sells equipment July 1, 2020 for $80,000. Cost $300,000; 5-yr life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Compute gain/loss.</p>`,
        solution: `<p>Annual SL = 50,000. Half-year (Jan–Jul) = 25,000. Accum Dep = 250,000. BV = 300 − 250 = 50,000.<br>Gain = 80,000 − 50,000 = <strong>$30,000 gain</strong>.</p>`
      },
      {
        title: 'Goodwill on acquisition',
        problem: `<p>Company A acquires Company B for $5M cash. B\'s identifiable net assets have a fair value of $4.2M. Compute goodwill.</p>`,
        solution: `<p>Goodwill = 5,000,000 − 4,200,000 = <strong>$800,000</strong>. Indefinite life; tested annually for impairment.</p>`
      }
    ],
    examTopics: [
      'Capitalize vs expense — getting it wrong inflates BOTH NI and future depreciation',
      'Gain/loss on disposal = Proceeds − Book Value',
      'Internally generated goodwill is NOT capitalized',
      'DDB applies the rate to BOOK VALUE, not depreciable base',
      'DDB stops when BV reaches salvage',
      'Goodwill = price paid − FV of net identifiable assets',
      'IFRS allows impairment reversals (not for goodwill); US GAAP does not',
      'Land is NOT depreciated',
      'Change in estimate is treated PROSPECTIVELY'
    ],
    questions: [
      {
        id: 'ch6_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'EBIT after Year 1 depreciation is LOWER if the company uses:',
        options: ['Double-declining balance', 'Straight-line', 'Operating income is not affected by depreciation', 'None'],
        correct: 0,
        explanation: 'DDB front-loads depreciation. Y1 expense > SL.'
      },
      {
        id: 'ch6_q2', type: 'mcq', difficulty: 'hard',
        prompt: 'If a repair cost is incorrectly CAPITALIZED instead of expensed, which is true?',
        options: ['NI lower; future depreciation higher', 'NI higher; future depreciation lower', 'NI higher; future depreciation higher', 'NI lower; future depreciation lower'],
        correct: 2,
        explanation: 'Expense not recognized → NI too high. Asset inflated → future dep too high.'
      },
      {
        id: 'ch6_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When a company sells an asset at a GAIN, which is TRUE?',
        options: ['Proceeds > historical cost', 'Proceeds < book value', 'Proceeds > book value', 'Proceeds = historical cost'],
        correct: 2,
        explanation: 'Gain = Proceeds > Book Value.'
      },
      {
        id: 'ch6_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Hale Kennels sells equipment July 1, 2020 for $80,000. Cost $300,000; 5-yr life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Compute gain/loss in $ (positive = gain).',
        answer: 30000, units: '$', tolerance: 0.001,
        explanation: 'Annual SL = 50K. Half-year = 25K. Accum Dep = 250K. BV = 50K. Gain = 80 − 50 = $30,000.'
      },
      {
        id: 'ch6_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which would NOT be recorded as an intangible asset?',
        options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'],
        correct: 2,
        explanation: 'Internally generated goodwill is never capitalized.'
      },
      {
        id: 'ch6_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Cost $50,000; salvage $5,000; 8-year life. Compute annual SL depreciation in $.',
        answer: 5625, units: '$', tolerance: 0.001,
        explanation: '(50,000 − 5,000) / 8 = $5,625.'
      },
      {
        id: 'ch6_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Tanner truck (slide-style): $80,000 cost; 5-year life; $8,000 salvage. Using DDB, compute YEAR 3 depreciation in $.',
        answer: 11520, units: '$', tolerance: 0.001,
        explanation: 'Rate = 40%. BV after Y2 = 48,000 × 60% = 28,800. Y3 dep = 28,800 × 40% = $11,520.'
      },
      {
        id: 'ch6_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Acquirer pays $5,000,000 for target. Target\'s net identifiable assets have fair value $4,200,000. Compute goodwill recognized in $.',
        answer: 800000, units: '$', tolerance: 0.001,
        explanation: 'Goodwill = 5,000,000 − 4,200,000 = $800,000.'
      },
      {
        id: 'ch6_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Which can be capitalized as part of the cost of self-constructed equipment?',
        options: ['Marketing costs to launch the product', 'Training costs for employees', 'Interest on borrowings used to finance construction', 'Routine maintenance after installation'],
        correct: 2,
        explanation: 'Capitalized interest is required during construction of qualifying assets.'
      },
      {
        id: 'ch6_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'A building has BV $800,000. Recoverable amount is now $650,000. Under IFRS, the impairment loss recorded is:',
        options: ['$0', '$150,000', '$650,000', '$800,000'],
        correct: 1,
        explanation: 'Impairment = BV − Recoverable = 800,000 − 650,000 = $150,000.'
      },
      {
        id: 'ch6_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Tanner truck after 4 yrs of SL depreciation ($14,400/yr from $80,000 cost). Useful life now extended from 5 to 7 years; salvage unchanged at $8,000. Compute NEW annual depreciation in $.',
        answer: 4800, units: '$', tolerance: 0.001,
        explanation: 'BV after 4 yrs = 80,000 − 4 × 14,400 = $22,400. Remaining life = 5 − 4 + 2 = 3 yrs. New dep = (22,400 − 8,000) / 3 = $4,800.'
      },
      {
        id: 'ch6_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'Patent purchased for $80,000. Legal life 10 years; expected economic benefit period 5 years. Compute annual amortization expense in $.',
        answer: 16000, units: '$', tolerance: 0.001,
        explanation: 'Amortize over the SHORTER of legal or economic life: 80,000 / 5 = $16,000.'
      },
      {
        id: 'ch6_q13', type: 'mcq', difficulty: 'medium',
        prompt: 'Under DDB, a company stops recording depreciation when:',
        options: ['Half the useful life has passed', 'Book value reaches salvage value', 'Cumulative depreciation equals depreciable base', 'Never — depreciation continues to zero'],
        correct: 1,
        explanation: 'Stop when BV = salvage. The Year 5 expense in the Tanner example was capped to bring BV exactly to $8,000.'
      },
      // From MCQ C6 textbook practice pack
      {
        id: 'ch6_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'Burgstahler bought a lot to construct a new corporate office building. An older building on the lot was razed immediately so the new one could be built. The cost of razing the older building should be:',
        options: ['Recorded as part of the cost of the LAND', 'Written off as a loss in the year of purchase', 'Written off as an extraordinary item', 'Recorded as part of the cost of the new building'],
        correct: 0,
        explanation: 'Cost of preparing land for use (razing existing structures, grading) is capitalized to LAND, not the new building.'
      },
      {
        id: 'ch6_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'The purpose of recording PERIODIC depreciation of long-term PP&E assets is to:',
        options: ['Report declining asset values on the balance sheet', 'Allocate asset costs over the periods benefited by use of the assets', 'Account for costs to reflect change in general price levels', 'Set aside funds to replace assets when their economic usefulness expires'],
        correct: 1,
        explanation: 'Depreciation = systematic allocation of cost over useful life. NOT a valuation adjustment, NOT inflation-adjusted, NOT a cash reserve.'
      },
      {
        id: 'ch6_q16', type: 'mcq', difficulty: 'medium',
        prompt: 'When the estimate of an asset\'s useful life is changed:',
        options: ['Depreciation expense for ALL past periods must be recalculated', 'There is no change in the amount of depreciation expense recorded for future years', 'Only depreciation expense for current and future years is affected', 'Only depreciation expense in the current year is affected'],
        correct: 2,
        explanation: 'Change in estimate is treated PROSPECTIVELY — recompute over remaining life, no restatement of past periods.'
      },
      {
        id: 'ch6_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'If the sale of a depreciable asset results in a LOSS, the proceeds from the sale were:',
        options: ['Less than current fair value', 'Greater than cost', 'Greater than book value', 'Less than book value'],
        correct: 3,
        explanation: 'Loss = Proceeds < Book Value. (Gain = Proceeds > BV.) Cost and current FV are not what triggers the gain/loss.'
      },
      {
        id: 'ch6_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'Which best describes the current method of accounting for R&D costs (under US GAAP)?',
        options: ['Revenue recognition method', 'Systematic and rational allocation', 'Immediate recognition as an expense', 'Income tax minimization'],
        correct: 2,
        explanation: 'US GAAP: ALL R&D is expensed immediately. (IFRS: research expensed; development may be capitalized if specific criteria met.)'
      },
      {
        id: 'ch6_q19', type: 'mcq', difficulty: 'medium',
        prompt: 'Goodwill should be recorded on the balance sheet as an intangible asset only when:',
        options: ['It is sold to another company', 'It is acquired through the purchase of another business', 'A company reports above-normal earnings for five or more consecutive years', 'A definite benefit can be established (e.g., excellent service reputation)'],
        correct: 1,
        explanation: 'Goodwill arises ONLY from an acquisition (price paid > FV of identifiable net assets). Internally generated goodwill, however valuable, is never capitalized.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 7
  // =============================================================
  {
    id: 'ch7',
    number: 7,
    title: 'Liabilities & Bonds',
    subtitle: 'Current liabilities, provisions, bonds (premium/discount), effective-interest, retirement.',
    theory: [
      {
        title: 'Current vs long-term liabilities',
        body: `<p><strong>Current liabilities</strong> — due within one year. Often <em>non-interest-bearing</em> (companies maximize use of these).</p>
        <p><strong>Current operating</strong>: Accounts Payable, Accrued Liabilities, Deferred Liabilities.</p>
        <p><strong>Current nonoperating</strong>: Short-term interest-bearing debt, Current maturities of long-term debt.</p>
        <p><strong>Cash discount terms (e.g., 2/10, n/30)</strong>: 2% discount if paid within 10 days; full price by day 30. <strong>Cost of forgoing the discount ≈ 37.2% per year</strong>.</p>`
      },
      {
        title: 'Provisions vs contingent liabilities',
        body: `<ul>
          <li><strong>Provision</strong> (recognize as liability): outflow is <em>probable</em> (≥50%) AND amount is <em>reasonably estimable</em>. Recorded at most likely amount.</li>
          <li><strong>Contingent liability</strong> (disclose only): possible but not probable, OR not reasonably estimable. NOT on balance sheet; disclosed in notes if material.</li>
          <li><strong>Remote</strong>: ignore.</li>
        </ul>
        <p><strong>Warranty accruals</strong>: estimate at sale → Dr Warranty Expense / Cr Warranty Payable. When repair made → Dr Warranty Payable / Cr Cash.</p>`
      },
      {
        title: 'Bonds: par, premium, discount',
        body: `<p>Two amounts repaid: <strong>face/par</strong> at maturity + <strong>periodic interest</strong> (usually semi-annual).</p>
        <p>Two interest rates: <strong>coupon (stated) rate</strong> determines cash interest paid; <strong>market (yield) rate</strong> determines issue price.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Relationship</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Sells at</th></tr>
          <tr><td style="padding:6px">Coupon = Market</td><td style="padding:6px"><strong>Par</strong> (face value)</td></tr>
          <tr><td style="padding:6px">Coupon &lt; Market</td><td style="padding:6px"><strong>Discount</strong> (below face)</td></tr>
          <tr><td style="padding:6px">Coupon &gt; Market</td><td style="padding:6px"><strong>Premium</strong> (above face)</td></tr>
        </table>
        <p>Bond price quoted as % of face: "98" = 98% × face.</p>`
      },
      {
        title: 'Effective-interest amortization',
        body: `<p>Each period:</p>
        <ul>
          <li><strong>Cash interest</strong> = Face × Coupon × (Period/12). Constant.</li>
          <li><strong>Interest Expense</strong> = Beginning Carrying Value × Market Rate per period. Changes.</li>
          <li><strong>Discount amortization</strong> = Interest Exp − Cash interest. Carrying value rises.</li>
          <li><strong>Premium amortization</strong> = Cash interest − Interest Exp. Carrying value falls.</li>
        </ul>
        <p>Carrying value approaches face by maturity.</p>`
      },
      {
        title: 'Bond retirement',
        body: `<p>If repurchased early: <strong>Gain/Loss = Carrying Value − Cash Paid</strong>. Carrying > Paid → gain (bought back cheap). Carrying < Paid → loss.</p>`
      },
      {
        title: 'Solvency ratios',
        body: `<ul>
          <li><strong>Debt-to-Equity</strong> = Total Liabilities / Total Equity. Avg public co ≈ 1.0; higher = more risk.</li>
          <li><strong>Times Interest Earned (TIE)</strong> = EBIT / Interest Expense, OR (NI + Tax + Interest) / Interest. Higher = safer for creditors.</li>
          <li><strong>AP Turnover</strong> = COGS (or Purchases) / Avg AP. <strong>DPO</strong> = 365 / AP Turnover.</li>
        </ul>`
      },
      {
        title: 'Debt ratings',
        body: `<p>AAA (top) → D (default). Issued by Moody's, S&P, Fitch ("Big Three"). Higher rating = lower cost of debt. Factors: collateral, covenants, options (call, conversion).</p>`
      }
    ],
    formulas: [
      { name: 'Cash interest paid', formula: 'Face × Coupon Rate × (Time/12)' },
      { name: 'Interest expense (effective)', formula: 'Carrying Value × Market Rate × (Time/12)' },
      { name: 'Bond issue price', formula: 'PV of Face + PV of Interest Annuity (both at market rate)' },
      { name: 'Discount amortization', formula: 'Interest Exp − Cash interest' },
      { name: 'Premium amortization', formula: 'Cash interest − Interest Exp' },
      { name: 'Carrying value', formula: 'CV = Face ± Unamortized Premium/Discount' },
      { name: 'Gain/Loss on retirement', formula: 'Gain/Loss = Carrying Value − Cash Paid' },
      { name: 'Times Interest Earned', formula: '(NI + Tax + Interest) / Interest = EBIT / Interest' },
      { name: 'Debt-to-Equity', formula: 'Total Liabilities / Total Equity' },
      { name: 'AP Turnover', formula: 'COGS / Average AP' },
      { name: 'Days Payable Outstanding', formula: 'DPO = 365 / AP Turnover' },
      { name: 'Cost of forgoing discount (2/10, n/30)', formula: '~(2/98) × (365/20) ≈ 37.2%/year' }
    ],
    examples: [
      {
        title: 'Sunshine Co. — bond pricing (slide example)',
        problem: `<p>$400,000 of 8% bonds, 5 years, semi-annual interest. Compute the issue price under three scenarios: (A) Market = 8%, (B) Market = 10%, (C) Market = 6%.</p>`,
        solution: `<p>Cash interest per period = 400,000 × 8% × 6/12 = $16,000. 10 periods.<br>(A) <strong>$400,000</strong> (par).<br>(B) Discount: PV of Face $245,564 + PV of Annuity $123,548 = <strong>$369,113</strong>. Discount = $30,887.<br>(C) Premium: PV of Face $297,636 + PV of Annuity $136,483 = <strong>$434,121</strong>. Premium = $34,121.</p>`
      },
      {
        title: 'Effective-interest discount amortization',
        problem: `<p>Same bond issued at $369,113 (Market 10% = 5%/period). Compute Period 1 interest expense and discount amortization.</p>`,
        solution: `<p>Interest Expense = 369,113 × 5% = <strong>$18,456</strong>.<br>Cash interest = $16,000.<br>Discount amortization = 18,456 − 16,000 = <strong>$2,456</strong>.<br>New carrying value = 369,113 + 2,456 = $371,569.</p>`
      },
      {
        title: 'Bond retirement gain (slide-confirmed)',
        problem: `<p>$600,000 bond retired at 98 when book value is $590,000. Compute gain or loss.</p>`,
        solution: `<p>Cash paid = 600,000 × 0.98 = $588,000.<br>Gain = 590,000 − 588,000 = <strong>$2,000 gain</strong>.</p>`
      },
      {
        title: 'Nestle solvency ratios (slide data)',
        problem: `<p>Nestle: COGS CHF 46,647M; Avg AP CHF 18,301M; Total Liabilities CHF 75,078M; Equity CHF 52,862M; EBIT CHF 16,078M; Interest CHF 1,026M.</p>`,
        solution: `<p>AP Turnover = 46,647 / 18,301 = <strong>2.54×</strong>. DPO = 365 / 2.54 = <strong>143 days</strong>.<br>D/E = 75,078 / 52,862 = <strong>1.42</strong>.<br>TIE = 16,078 / 1,026 = <strong>15.66×</strong>.</p>`
      },
      {
        title: 'Times interest earned (mock-style)',
        problem: `<p>NI €160,000; tax €60,000; interest €40,000. Compute TIE.</p>`,
        solution: `<p>TIE = (160 + 60 + 40) / 40 = <strong>6.5 times</strong>.</p>`
      }
    ],
    examTopics: [
      'Bond gain/loss on retirement: Carrying Value − Cash Paid (NOT − Face)',
      'Bond price quoted as % of face: "98" = 98% × face',
      'Discount: market > coupon → interest expense > cash paid',
      'Premium: market < coupon → interest expense < cash paid',
      'TIE = (NI + Tax + Interest) / Interest = EBIT / Interest',
      'Current portion of long-term debt is a CURRENT liability',
      'Probable + estimable contingent loss → accrue (provision); reasonably possible → disclose only',
      'Warranty: accrue at sale, not at repair',
      'Cost of forgoing 2/10, n/30 ≈ 37.2%',
      'Interest expense changes via amortization; cash interest is constant'
    ],
    questions: [
      {
        id: 'ch7_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'A $600,000 bond was retired at 98 when the book value was $590,000. The retirement entry would include:',
        options: ['Gain of $10,000', 'Gain of $2,000', 'Loss of $2,000', 'Loss of $10,000'],
        correct: 1,
        explanation: 'Cash = 600,000 × 0.98 = 588,000. Gain = 590,000 − 588,000 = $2,000.'
      },
      {
        id: 'ch7_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'TIE = (160 + 60 + 40) / 40 = 6.5.'
      },
      {
        id: 'ch7_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When the market rate of interest is HIGHER than the coupon rate, bonds will be issued at:',
        options: ['Par', 'A premium', 'A discount', 'Depends on the maturity'],
        correct: 2,
        explanation: 'Higher market rate → bond less attractive → must sell below face (discount).'
      },
      {
        id: 'ch7_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'A €500,000 face bond was issued at 102. Five years later it is retired at 105 when carrying value is €506,000. Compute gain/loss in € (positive = gain).',
        answer: -19000, units: '€', tolerance: 0.001,
        explanation: 'Cash paid = 500,000 × 1.05 = 525,000. Loss = 506,000 − 525,000 = −€19,000.'
      },
      {
        id: 'ch7_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'A pending lawsuit has a probable loss between $50,000 and $200,000 with most likely outcome $100,000. Under IFRS:',
        options: ['Disclose in footnotes only', 'Recognize a $100,000 provision and disclose the range', 'Recognize a $200,000 provision (most conservative)', 'No entry until lawsuit is settled'],
        correct: 1,
        explanation: 'IAS 37: probable + reliably estimable → recognize provision at most likely amount.'
      },
      {
        id: 'ch7_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'A 4-year, 8%, $300,000 note payable signed October 1. Principal & interest due at maturity. Compute interest expense for year ending December 31 of the issue year in $.',
        answer: 6000, units: '$', tolerance: 0.001,
        explanation: 'Interest = 300,000 × 8% × 3/12 = $6,000.'
      },
      {
        id: 'ch7_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT classified as a long-term liability?',
        options: ['Bonds payable due in 10 years', '15-year mortgage', 'Current portion of long-term debt due within next year', 'Pension obligations'],
        correct: 2,
        explanation: 'Current portion of LTD is a CURRENT liability.'
      },
      {
        id: 'ch7_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Bond face $1,000,000; 5% coupon (annual); issued at $950,000 when market = 6%. Compute Year 1 INTEREST EXPENSE under effective-interest in $.',
        answer: 57000, units: '$', tolerance: 0.001,
        explanation: 'Interest Expense = Carrying × Market = 950,000 × 6% = $57,000. (Cash = 50,000; discount amortized = 7,000.)'
      },
      {
        id: 'ch7_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Sunshine Co (slide): $400,000 of 8% bonds, 10 periods semi-annual, market = 10% (= 5%/period). Issue price = $369,113. Compute Period 1 interest expense in $.',
        answer: 18456, units: '$', tolerance: 0.001,
        explanation: 'Interest Expense = 369,113 × 5% = $18,456 (slide-confirmed).'
      },
      {
        id: 'ch7_q10', type: 'numeric', difficulty: 'medium',
        prompt: 'Nestle (slide): COGS CHF 46,647M; Avg AP CHF 18,301M. Compute Days Payable Outstanding (DPO) rounded to nearest day.',
        answer: 143, units: 'days', tolerance: 0.5,
        explanation: 'AP Turnover = 46,647 / 18,301 = 2.54. DPO = 365 / 2.54 = 143 days.'
      },
      {
        id: 'ch7_q11', type: 'mcq', difficulty: 'hard',
        prompt: 'A $1,000 invoice has terms 2/10, n/30. The annualized cost of forgoing the discount is approximately:',
        options: ['2.0%', '24.0%', '36.5%', '37.2%'],
        correct: 3,
        explanation: '(2/98) × (365/20) ≈ 37.2% per year. Forgoing the cash discount is very expensive financing.'
      },
      {
        id: 'ch7_q12', type: 'mcq', difficulty: 'easy',
        prompt: 'Under the effective-interest method, as a discount bond approaches maturity, the carrying value:',
        options: ['Stays constant', 'Decreases toward face', 'Increases toward face', 'Increases above face'],
        correct: 2,
        explanation: 'Discount amortization adds to carrying value each period. At maturity, carrying = face.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 8
  // =============================================================
  {
    id: 'ch8',
    number: 8,
    title: 'Leases',
    subtitle: 'IFRS 16 right-of-use model, short-term/low-value exemption.',
    theory: [
      {
        title: 'IFRS 16 — the unified ROU model',
        body: `<p>Under <strong>IFRS 16</strong>, lessees recognize <em>almost all</em> leases on the balance sheet:</p>
        <ul>
          <li><strong>Right-of-Use (ROU) Asset</strong> — the right to use the asset.</li>
          <li><strong>Lease Liability</strong> — present value of future lease payments.</li>
        </ul>
        <p>Both initially measured at the <strong>PV of lease payments</strong>, discounted at the rate implicit in the lease (or lessee's incremental borrowing rate).</p>
        <p><strong>Exemptions</strong>: short-term leases (≤12 months without purchase option) and low-value leases (e.g., laptops) can be expensed straight-line as Rent Expense.</p>`
      },
      {
        title: 'Lessee P&L impact',
        body: `<p>Each period, the lessee records:</p>
        <ul>
          <li><strong>Depreciation expense</strong> on the ROU asset (typically straight-line over lease term).</li>
          <li><strong>Interest expense</strong> on the lease liability (effective-interest method — decreases as liability is paid down).</li>
        </ul>
        <p>Total expense is <strong>front-loaded</strong>: interest is higher in early years.</p>
        <p>Total expense over the lease term equals total cash payments — only the <em>timing and classification</em> differ between ROU and short-term/low-value treatment.</p>`
      },
      {
        title: 'Cash flow classification',
        body: `<ul>
          <li><strong>Principal portion</strong> of lease payment → <strong>Financing</strong> cash outflow.</li>
          <li><strong>Interest portion</strong> → <strong>Operating</strong> (or financing under IFRS option).</li>
          <li>Short-term/low-value lease expense → Operating.</li>
        </ul>`
      },
      {
        title: 'Financial statement effects',
        body: `<ul>
          <li><strong>ROU lease</strong>: ↑ Assets, ↑ Liabilities, ↓ Asset Turnover, ↑ Debt-to-Equity, lower NI in early years (interest front-loaded).</li>
          <li><strong>Short-term/low-value</strong>: NO asset, NO liability → higher asset turnover, better leverage ratios, higher NI in early years.</li>
        </ul>
        <p><em>Why companies historically preferred operating leases (now restricted)</em>: keep liabilities off the balance sheet to flatter ratios.</p>`
      }
    ],
    formulas: [
      { name: 'Initial Lease Liability', formula: 'PV of all future lease payments at the discount rate' },
      { name: 'PV of ordinary annuity', formula: 'PMT × [(1 − (1+r)^−n) / r]' },
      { name: 'Initial ROU Asset', formula: 'Lease Liability + initial direct costs + prepayments − incentives' },
      { name: 'Annual depreciation (ROU)', formula: 'ROU Asset / Lease Term (typically straight-line)' },
      { name: 'Annual interest expense', formula: 'Beginning Lease Liability × Discount Rate' },
      { name: 'Principal repayment', formula: 'Annual Payment − Interest Expense' },
      { name: 'Liability roll-forward', formula: 'End = Beg + Interest − Cash Paid' }
    ],
    examples: [
      {
        title: 'Phelps Swimming lease (full slide example)',
        problem: `<p>Phelps Swimming enters a 5-year lease, $3,256 annual payment at year-end, 8% discount rate. PV annuity factor (n=5, r=8%) = 3.99271. Compute the initial ROU asset/lease liability.</p>`,
        solution: `<p>Initial Lease Liability = 3,256 × 3.99271 = <strong>$13,000</strong>.<br>Initial ROU Asset = $13,000 (no IDCs).<br>Initial entry: Dr Leased Asset 13,000 / Cr Lease Liability 13,000.</p>`
      },
      {
        title: 'Phelps Swimming — Year 1 entries',
        problem: `<p>Compute Year 1 depreciation, interest, and the payment entry.</p>`,
        solution: `<p>Depreciation = 13,000 / 5 = <strong>$2,600</strong>/year. Dr Dep Exp 2,600 / Cr Acc Dep 2,600.<br>Interest Y1 = 13,000 × 8% = <strong>$1,040</strong>.<br>Principal Y1 = 3,256 − 1,040 = $2,216.<br>Payment: Dr Lease Liability 2,216, Dr Interest Exp 1,040 / Cr Cash 3,256.<br>End-of-Y1 lease liability = 13,000 − 2,216 = $10,784.</p>`
      },
      {
        title: 'Full Phelps amortization schedule (slide-confirmed)',
        problem: `<p>Build the 5-year amortization schedule: Year, Beg Liability, Interest (8%), Payment, Principal, End Liability.</p>`,
        solution: `<p style="font-family:var(--mono);font-size:13px">
        Y1: 13,000 / 1,040 / 3,256 / 2,216 / 10,784<br>
        Y2: 10,784 / 863 / 3,256 / 2,393 / 8,391<br>
        Y3: 8,391 / 671 / 3,256 / 2,585 / 5,806<br>
        Y4: 5,806 / 464 / 3,256 / 2,792 / 3,014<br>
        Y5: 3,014 / 241 / 3,256 / 3,014 / 0
        </p>
        <p>Notice interest declines each year as liability is paid down.</p>`
      },
      {
        title: 'ROU vs short-term/low-value comparison',
        problem: `<p>Same Phelps lease — compare Year 1 income statement impact under ROU vs short-term/low-value treatment.</p>`,
        solution: `<p><strong>ROU</strong>: Dep 2,600 + Interest 1,040 = <strong>$3,640</strong>.<br><strong>Short-term/low-value</strong>: Rent expense = <strong>$3,256</strong>.<br>ROU front-loads expense; total over 5 years is identical.</p>`
      }
    ],
    examTopics: [
      'Under IFRS 16, lessees recognize ROU asset + Lease Liability for almost all leases',
      'Initial lease liability = PV of lease payments at the discount rate',
      'Lessee expense = depreciation (on ROU) + interest (on liability), front-loaded',
      'Principal portion of payment → FINANCING CF; interest → OPERATING CF',
      'Short-term (≤12 months) and low-value lease exemptions → straight-line rent',
      'Balance sheet impact: ↑ Assets, ↑ Liabilities under ROU; off-BS under exemption',
      'Total expense over lease term identical under both methods — only timing differs'
    ],
    questions: [
      {
        id: 'ch8_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS 16, when a lessee enters a 5-year lease, the journal entry at commencement is:',
        options: ['Dr Rent Expense / Cr Cash for the first payment only', 'Dr Right-of-Use Asset / Cr Lease Liability at the PV of lease payments', 'No entry — leases are off-balance-sheet under IFRS', 'Dr PP&E / Cr Long-term Debt at the gross undiscounted amount'],
        correct: 1,
        explanation: 'IFRS 16 requires recognition of ROU asset and lease liability at PV of lease payments.'
      },
      {
        id: 'ch8_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Which lease may be EXEMPTED from balance sheet recognition under IFRS 16?',
        options: ['10-year building lease', '9-month forklift lease', '3-year delivery truck lease', '5-year printing press lease'],
        correct: 1,
        explanation: 'Short-term lease (≤12 months) qualifies for the exemption.'
      },
      {
        id: 'ch8_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming (slide): 5-yr lease, $3,256 annual payment at year-end, 8% rate. PV factor (n=5, r=8%) = 3.99271. Compute initial lease liability in $.',
        answer: 13000, units: '$', tolerance: 1,
        explanation: 'Lease Liability = 3,256 × 3.99271 = $13,000 (slide answer).'
      },
      {
        id: 'ch8_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Continuing Phelps: ROU asset = $13,000, 5-year SL depreciation. Compute YEAR 1 INTEREST expense in $ at 8%.',
        answer: 1040, units: '$', tolerance: 0.5,
        explanation: 'Interest = Beg Liab × Rate = 13,000 × 8% = $1,040.'
      },
      {
        id: 'ch8_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Year 2: end-of-Y1 liability = $10,784. Compute Year 2 INTEREST expense in $.',
        answer: 863, units: '$', tolerance: 1,
        explanation: 'Y2 Interest = 10,784 × 8% = $863 (slide-confirmed). Notice interest declines vs Y1.'
      },
      {
        id: 'ch8_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'On the lessee\'s SCF, the PRINCIPAL portion of a lease payment is classified as:',
        options: ['Operating outflow', 'Investing outflow', 'Financing outflow', 'Not on the SCF'],
        correct: 2,
        explanation: 'Principal repayment of lease liability is financing (analogous to debt repayment). Interest is operating.'
      },
      {
        id: 'ch8_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Compared to the previous standard for operating leases, IFRS 16 generally:',
        options: ['Reduces total assets and liabilities', 'Increases total assets and liabilities, with front-loaded total expense', 'Has no balance sheet effect', 'Decreases total expense over the lease term'],
        correct: 1,
        explanation: 'IFRS 16 brings operating leases on balance sheet. Total expense front-loaded; lifetime total unchanged.'
      },
      {
        id: 'ch8_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming Year 1 total income statement impact under the ROU model (depreciation + interest) in $.',
        answer: 3640, units: '$', tolerance: 1,
        explanation: 'Y1 Dep 2,600 + Y1 Interest 1,040 = $3,640. Compare to $3,256 if treated as short-term/low-value (front-loaded by $384 in Y1).'
      }
    ]
  },

  // =============================================================
  // CHAPTER 9
  // =============================================================
  {
    id: 'ch9',
    number: 9,
    title: 'Equity & Investments',
    subtitle: 'Authorized/issued/outstanding, treasury, dividends, equity method, EPS.',
    theory: [
      {
        title: 'Components of equity',
        body: `<p><strong>Stockholders' Equity = Contributed Capital + Earned Capital</strong>.</p>
        <p><strong>Contributed Capital</strong>: Common stock (par × issued), Preferred stock, Additional paid-in capital (APIC), Treasury stock (contra-equity).</p>
        <p><strong>Earned Capital</strong>: Retained Earnings (cumulative NI − cumulative dividends; negative = "Accumulated deficit"), AOCI (pension, FX, certain investment gains/losses).</p>`
      },
      {
        title: 'Authorized vs Issued vs Outstanding (memorize!)',
        body: `<ul>
          <li><strong>Authorized</strong> = upper limit set by the corporate charter.</li>
          <li><strong>Issued</strong> = actual number sold to shareholders.</li>
          <li><strong>Outstanding</strong> = Issued − Treasury = shares held by the public.</li>
        </ul>
        <p>Frequently tested. <em>Outstanding</em> is what matters for EPS, voting, dividends.</p>`
      },
      {
        title: 'Stock issuance accounting',
        body: `<p>Cash received = Issue price × Number of shares.</p>
        <ul>
          <li><strong>Common Stock</strong> (or Preferred) increases by <em>Par × Number of shares</em>.</li>
          <li><strong>APIC</strong> increases by <em>(Issue price − Par) × Number of shares</em>.</li>
        </ul>
        <p><strong>NO income statement effect</strong> when stock is issued.</p>`
      },
      {
        title: 'Treasury stock',
        body: `<p>Company's own stock that has been repurchased. Contra-equity account; deducted from total equity.</p>
        <p><strong>Never produces a gain or loss</strong> on the income statement.</p>
        <p>Reissued for more than cost: difference goes to <em>APIC from Treasury</em>. Reissued for less: difference reduces APIC (or RE if APIC is exhausted).</p>
        <p>Reasons for repurchase: increase per-share value, signal undervaluation, offset employee stock option dilution.</p>`
      },
      {
        title: 'Preferred stock',
        body: `<p>Priority over common in <strong>dividends</strong> and <strong>liquidation</strong>.</p>
        <ul>
          <li><strong>Cumulative preferred</strong>: unpaid prior dividends ("dividends in arrears") must be paid before any common dividend.</li>
          <li><strong>Call feature</strong>: issuer can repurchase at a specified price.</li>
          <li><strong>Conversion feature</strong>: convert to common at predetermined ratio.</li>
        </ul>`
      },
      {
        title: 'Dividends, splits, stock dividends',
        body: `<ul>
          <li><strong>Cash dividend</strong>: declaration → Dr RE / Cr Dividends Payable; payment → Dr Dividends Payable / Cr Cash. <em>No effect on NI.</em></li>
          <li><strong>Stock dividend</strong>: distribution of additional shares; reduces RE, increases contributed capital. NO cash effect.</li>
          <li><strong>Stock split</strong> (e.g., 2-for-1): NO journal entry; doubles shares, halves par. No financial statement effect.</li>
        </ul>
        <p>Stock-related transactions (issuance, repurchase, dividends paid) appear in the <strong>FINANCING</strong> section of the SCF. Stock dividends and splits have no cash effect.</p>`
      },
      {
        title: 'Investments by ownership %',
        body: `<table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Ownership</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Method</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Treatment</th></tr>
          <tr><td style="padding:6px"><strong>&lt; 20%</strong></td><td style="padding:6px">Fair Value</td><td style="padding:6px">Recognize dividends as income; mark-to-market through P&L or OCI</td></tr>
          <tr><td style="padding:6px"><strong>20–50%</strong></td><td style="padding:6px">Equity Method</td><td style="padding:6px">Investment ↑ by share of NI, ↓ by share of dividends. Income = % × Investee NI.</td></tr>
          <tr><td style="padding:6px"><strong>&gt; 50%</strong></td><td style="padding:6px">Consolidation</td><td style="padding:6px">Combine all assets/liabilities/revenues/expenses. Recognize NCI.</td></tr>
        </table>`
      },
      {
        title: 'EPS — basic',
        body: `<p><strong>Basic EPS = (NI − Preferred Dividends) / Weighted Avg Common Shares Outstanding</strong>.</p>
        <p>Weighted average: sum of (shares × fraction of year held). Mid-year share changes affect the average.</p>`
      }
    ],
    formulas: [
      { name: 'Outstanding shares', formula: 'Outstanding = Issued − Treasury' },
      { name: 'Cash from stock issuance', formula: 'Issue price × Number of shares' },
      { name: 'Common Stock account ↑', formula: 'Par × Shares issued' },
      { name: 'APIC ↑', formula: '(Issue price − Par) × Shares issued' },
      { name: 'Cost of treasury stock', formula: 'Repurchase price × Shares' },
      { name: 'Ending RE', formula: 'Beg RE + NI − Dividends' },
      { name: 'Equity method investment ↑', formula: 'Beg + (% × NI of investee) − (% × Dividends received)' },
      { name: 'Equity method income', formula: 'Income = Ownership % × Investee Net Income' },
      { name: 'Basic EPS', formula: '(NI − Preferred Dividends) / Weighted Avg Common Shares' },
      { name: 'Weighted Avg Shares', formula: 'Σ (Shares × Fraction of Year)' },
      { name: 'Book value per share', formula: 'Common Equity / Common Shares Outstanding' },
      { name: 'Dividend yield', formula: 'Annual DPS / Price' }
    ],
    examples: [
      {
        title: 'Treasury share count (mock-style)',
        problem: `<p>Issued shares (par €10): €600,000. Treasury shares (at cost €15/share): €1,800. How many ordinary shares are outstanding?</p>`,
        solution: `<p>Issued = 600,000 / 10 = 60,000.<br>Treasury = 1,800 / 15 = 120.<br>Outstanding = 60,000 − 120 = <strong>59,880</strong>.</p>`
      },
      {
        title: 'Equity method (mock-style)',
        problem: `<p>Mouns owns 40% of Darian. Darian pays $20,000 dividends to Mouns and reports $100,000 NI. By how much does the investment increase Mouns\' net income?</p>`,
        solution: `<p>Equity method income = 40% × 100,000 = <strong>$40,000</strong>.<br>The $20,000 dividend reduces the investment account, NOT income.</p>`
      },
      {
        title: 'Phelps Swimming — stock issuance (slide)',
        problem: `<p>Phelps issues 500 shares of $1 par common stock at $15/share. Show the journal entry.</p>`,
        solution: `<p>Cash = 500 × 15 = $7,500.<br>Common Stock = 500 × 1 = $500.<br>APIC = 500 × 14 = $7,000.<br><strong>Dr Cash 7,500 / Cr Common Stock 500, Cr APIC 7,000</strong>.</p>`
      },
      {
        title: 'Phelps — treasury reissue (slide)',
        problem: `<p>Phelps repurchases 100 shares at $22/share. Later reissues 80 of those shares at $24/share. Show both entries.</p>`,
        solution: `<p>Repurchase: Dr Treasury 2,200 / Cr Cash 2,200.<br>Reissue: Cash = 80 × 24 = 1,920; cost = 80 × 22 = 1,760.<br><strong>Dr Cash 1,920 / Cr Treasury 1,760, Cr APIC 160</strong>.<br>No P&L gain or loss.</p>`
      },
      {
        title: 'Phelps — Basic EPS (slide)',
        problem: `<p>2016 NI $8,000; preferred dividends $1,000. 8,000 common shares outstanding at start of year. April 1: 800 treasury shares repurchased. Compute basic EPS.</p>`,
        solution: `<p>Weighted avg shares = 8,000 × 3/12 + 7,200 × 9/12 = 2,000 + 5,400 = <strong>7,400</strong>.<br>Basic EPS = (8,000 − 1,000) / 7,400 = <strong>$0.946</strong>.</p>`
      }
    ],
    examTopics: [
      'Outstanding = Issued − Treasury',
      'Treasury share transactions never produce P&L gain/loss',
      'Equity method (20-50%): income = % × investee NI; dividends reduce investment',
      'Consolidation triggered at >50% ownership',
      'Cash dividends do NOT affect net income',
      'Preferred dividends are deducted from NI before computing basic EPS',
      'Cumulative preferred: dividends in arrears must be paid first',
      'Stock split: no journal entry, no balance sheet effect',
      'Stock issuance journal: Par to Common Stock, excess to APIC',
      'Weighted avg shares for mid-year repurchases'
    ],
    questions: [
      {
        id: 'ch9_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Consolidated financial statements are prepared when a company owns _____ of the ordinary shares of another company.',
        options: ['Less than 20%', 'More than 50%', 'Less than 50%', 'Between 20% and 50%'],
        correct: 1,
        explanation: '>50% = control = consolidation.'
      },
      {
        id: 'ch9_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'Skyline: Issued shares (par €10): €600,000. Treasury shares (cost €15/sh): €1,800. How many shares are outstanding?',
        answer: 59880, units: 'shares', tolerance: 0.001,
        explanation: 'Issued 60,000 − Treasury 120 = 59,880.'
      },
      {
        id: 'ch9_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Mouns owns 40% of Darian. Darian pays $20,000 dividends and reports $100,000 NI. By how much does Mouns\'s NI increase from the investment in $?',
        answer: 40000, units: '$', tolerance: 0.001,
        explanation: 'Equity method: 40% × 100,000 = $40,000. Dividends reduce the investment, not income.'
      },
      {
        id: 'ch9_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which transaction has NO effect on net income?',
        options: ['Sale of equipment at a gain', 'Declaration of a cash dividend', 'Recording bad debt expense', 'Recognition of revenue earned but not yet collected'],
        correct: 1,
        explanation: 'Dividend declaration: Dr RE / Cr Dividends Payable. Reduces equity, no IS effect.'
      },
      {
        id: 'ch9_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'NI €450,000. Preferred dividends €30,000. Weighted avg common shares 100,000. Compute basic EPS in €.',
        answer: 4.20, units: '€', tolerance: 0.01,
        explanation: 'EPS = (450 − 30) / 100 = €4.20.'
      },
      {
        id: 'ch9_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company has cumulative preferred shares with $10 dividend per share. No preferred dividends were paid in the previous 2 years. There are 1,000 preferred shares. Before any common dividend can be paid, the company must pay preferred dividends of:',
        options: ['$10,000', '$20,000', '$30,000', '$0 — preferred is optional'],
        correct: 2,
        explanation: 'Cumulative preferred: 2 yrs arrears + current = 3 × $10 × 1,000 = $30,000.'
      },
      {
        id: 'ch9_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Investor X owns 25% of Investee Y. At year start, investment was €500,000. Y reports NI €120,000 and pays dividends €40,000. Compute the year-end investment balance in €.',
        answer: 520000, units: '€', tolerance: 0.001,
        explanation: 'End = Beg + 25%×NI − 25%×Div = 500 + 30 − 10 = €520,000.'
      },
      {
        id: 'ch9_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Treasury shares are reported as:',
        options: ['Long-term investment', 'Expense on the IS', 'Deduction from total equity (contra)', 'Current asset'],
        correct: 2,
        explanation: 'Contra-equity. Deducted from total equity by their cost.'
      },
      {
        id: 'ch9_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming (slide-style EPS): NI $8,000; preferred dividends $1,000. 8,000 common shares outstanding all year EXCEPT 800 repurchased on April 1. Compute basic EPS in $.',
        answer: 0.946, units: '$', tolerance: 0.005,
        explanation: 'Weighted avg = 8,000×3/12 + 7,200×9/12 = 2,000 + 5,400 = 7,400. EPS = (8,000−1,000)/7,400 = $0.946.'
      },
      {
        id: 'ch9_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is TRUE of a 2-for-1 stock split?',
        options: ['Reduces total stockholders\' equity', 'Increases retained earnings', 'Doubles shares outstanding and halves par value, with NO change to total equity', 'Recognized as a stock dividend at fair value'],
        correct: 2,
        explanation: 'Stock splits have no journal entry; just an annotation. Total equity unchanged.'
      },
      {
        id: 'ch9_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'A company issues 1,000 shares of $5 par common stock at $18/share. Compute the increase to APIC in $.',
        answer: 13000, units: '$', tolerance: 0.001,
        explanation: 'APIC = (18 − 5) × 1,000 = $13,000. (Common Stock += $5,000; total cash $18,000.)'
      },
      {
        id: 'ch9_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Buying treasury stock for cash has what effect on the accounting equation?',
        options: ['↓ Assets, ↓ Equity', '↓ Assets, ↑ Liabilities', '↑ Liabilities, ↓ Equity', 'No effect on totals'],
        correct: 0,
        explanation: 'Cash (asset) ↓; Treasury Stock (contra-equity) ↑ → total equity ↓ by same amount.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 10
  // =============================================================
  {
    id: 'ch10',
    number: 10,
    title: 'Financial Investments',
    subtitle: 'Debt & equity investments, three-tier influence framework, fair value hierarchy.',
    theory: [
      {
        title: 'What are financial investments?',
        body: `<p><strong>Financial investments</strong> = purchases of securities (debt or equity) issued by other organizations.</p>
        <p>The accounting treatment depends on TWO things:</p>
        <ol>
          <li>The <strong>type</strong> of security (debt vs. equity).</li>
          <li>The <strong>amount</strong> purchased — which determines the degree of influence over the investee.</li>
        </ol>
        <p>Two broad asset classes: <strong>debt investments</strong> (bonds and notes) and <strong>share/equity investments</strong> (passive, significant influence, or controlling).</p>`
      },
      {
        title: 'Three-tier influence framework',
        body: `<table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Ownership %</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Influence</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Investee called</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Method</th></tr>
          <tr><td style="padding:6px"><strong>&lt; 20%</strong></td><td style="padding:6px">Passive</td><td style="padding:6px">(no special label)</td><td style="padding:6px"><strong>Fair value</strong></td></tr>
          <tr><td style="padding:6px"><strong>20–50%</strong></td><td style="padding:6px">Significant influence (presumed)</td><td style="padding:6px">"Associate"</td><td style="padding:6px"><strong>Equity method</strong></td></tr>
          <tr><td style="padding:6px"><strong>≥ 50%</strong></td><td style="padding:6px">Controlling</td><td style="padding:6px">"Subsidiary"</td><td style="padding:6px"><strong>Consolidation</strong></td></tr>
        </table>
        <p style="margin-top:10px"><strong>Important — these are presumptions, not bright-line rules:</strong></p>
        <ul>
          <li><strong>Significant influence</strong> can also arise from being a <em>sole supplier/customer</em> or via legal agreements.</li>
          <li><strong>Control</strong> can arise <em>below</em> 50% through legal agreements or technology licensing.</li>
        </ul>
        <p>Control is evidenced by ability to <em>elect a majority of the board</em>, <em>affect strategic direction</em>, and <em>affect hiring of executive management</em>.</p>`
      },
      {
        title: 'Debt investments — lifecycle',
        body: `<ol>
          <li><strong>Acquisition at cost</strong>: cost = purchase price + brokerage/commission + other necessary acquisition expenditures.</li>
          <li><strong>Interest revenue</strong>: recognized on the income statement as it is earned.</li>
          <li><strong>Sale</strong>: recognize gain/loss = (Sale price − Brokerage fees) − Cost = Net Proceeds − Cost.</li>
        </ol>`
      },
      {
        title: 'Fair value & the 3-level hierarchy',
        body: `<p><strong>Fair value</strong> = the amount an independent buyer would be willing to pay.</p>
        <p>For actively traded assets: <strong>mark-to-market</strong> (= price observed in the market).</p>
        <p>When no active market exists: <strong>mark-to-model</strong> — uses valuation models. <em>More subjective than mark-to-market.</em></p>
        <p><strong>Fair Value Hierarchy:</strong></p>
        <ul>
          <li><strong>Level 1</strong> — quoted prices in active markets for IDENTICAL assets/liabilities. <em>Example: a common share traded on an active exchange.</em></li>
          <li><strong>Level 2</strong> — observable inputs other than Level 1 (quoted prices for similar assets, interest rates, yield curves). <em>Example: a bond infrequently traded but similar to actively traded bonds.</em></li>
          <li><strong>Level 3</strong> — inputs observable only to the reporting entity (management estimates and assumptions). <em>Example: an operating asset judged to be impaired.</em></li>
        </ul>
        <p>Level 1 is most objective; Level 3 is most subjective and requires the most disclosure.</p>`
      },
      {
        title: 'Earnings management risk',
        body: `<p>Different categories of investments have different rules for whether changes in fair value flow through the income statement, retained earnings, or AOCI. This creates earnings-management opportunities:</p>
        <ul>
          <li><strong>Cherry-picking</strong>: <em>sell</em> investments to recognize a gain (or loss), then <em>buy them back later</em>. Recognizes the unrealized gain in income as if it were realized.</li>
          <li><strong>Reclassification AFS → Trading</strong>: moves <em>unrealised</em> gains from AOCI onto the income statement.</li>
        </ul>
        <p><strong>Preventive disclosure</strong>: <em>realised</em> gains and losses on AFS securities must be reported in the <strong>footnotes</strong> so users can identify cherry-picking.</p>`
      }
    ],
    formulas: [
      { name: 'Cost of debt investment at acquisition', formula: 'Cost = Purchase Price + Brokerage Fees + Other Acquisition Expenditures' },
      { name: 'Net proceeds on sale', formula: 'Net Proceeds = Sale Price − Brokerage Fees' },
      { name: 'Gain/Loss on sale of debt investment', formula: 'Gain/Loss = Net Proceeds − Cost' },
      { name: 'Interest revenue', formula: 'Interest Rev = Face × Rate × (Time/12)' }
    ],
    examples: [
      {
        title: 'Debt investment lifecycle',
        problem: `<p>An investor buys $10,000 face value bonds for $10,200 plus $50 brokerage fees. Over the year, $600 of interest is earned and received. Later, the bonds are sold for $10,400 net of $30 brokerage fees. Compute the gain or loss.</p>`,
        solution: `<p>Cost = 10,200 + 50 = $10,250.<br>Net Proceeds = 10,400 (already net of fees).<br>Gain = 10,400 − 10,250 = <strong>$150 gain</strong>.<br>Interest revenue $600 was recognized on the IS during the holding period (separate from the gain).</p>`
      },
      {
        title: 'Fair value hierarchy classification',
        problem: `<p>Classify each as Level 1, 2, or 3:<br>(a) Apple shares listed on NASDAQ.<br>(b) A 10-year corporate bond that trades infrequently; valued by reference to similar actively-traded bonds.<br>(c) An impaired piece of specialized manufacturing equipment with no active market.</p>`,
        solution: `<p>(a) <strong>Level 1</strong> — quoted price in active market for identical asset.<br>(b) <strong>Level 2</strong> — observable inputs (similar securities, rates).<br>(c) <strong>Level 3</strong> — entity-specific assumptions, no observable market data.</p>`
      },
      {
        title: 'Influence override',
        problem: `<p>Investor owns 18% of Investee but holds three of seven board seats and a tech-licensing agreement that gives veto rights over strategic decisions. Which method should the investor use?</p>`,
        solution: `<p>Although below the 20% threshold, the board representation and veto rights give <strong>significant influence</strong> in substance. Use the <strong>equity method</strong>. The 20%/50% lines are presumptions, not bright-line rules — substance over form.</p>`
      }
    ],
    examTopics: [
      'Match ownership % to accounting method (passive < 20% → fair value; 20–50% → equity method/associate; ≥50% → consolidation/subsidiary)',
      'Influence overrides — control below 50% via legal/tech agreements; significant influence via sole supplier/customer',
      'Fair Value Hierarchy: Level 1 (active market, identical), Level 2 (similar/observable), Level 3 (entity-specific)',
      'Mark-to-market vs mark-to-model — model is more subjective',
      'Debt investment cost includes brokerage fees',
      'Gain/Loss on sale = Net Proceeds − Cost',
      'Interest revenue is recognized on the IS as earned',
      'Earnings-management red flags: cherry-picking gains, AFS→Trading reclassification',
      'AFS realized gains/losses must be disclosed in footnotes',
      'Distinguish "associate" (equity method) vs "subsidiary" (consolidation)'
    ],
    questions: [
      {
        id: 'ch10_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Investor owns 35% of the voting shares of Investee Co. Which accounting method should the Investor use?',
        options: ['Fair value', 'Equity method', 'Consolidation', 'Cost method'],
        correct: 1,
        explanation: '20–50% triggers significant influence (presumed) → equity method. The investee is called an "associate."'
      },
      {
        id: 'ch10_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'A company is classified as a "subsidiary" of an investor when:',
        options: ['Investor owns less than 20% of voting shares', 'Investor owns between 20% and 50% of voting shares', 'Investor has control (typically ≥50% of voting shares, or below via legal/technology agreements)', 'Investor has any minority interest'],
        correct: 2,
        explanation: 'Subsidiary = controlled entity. Threshold is generally ≥50%, but control can also arise below 50% through legal/tech agreements.'
      },
      {
        id: 'ch10_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is a Level 1 input under the Fair Value Hierarchy?',
        options: ['Management\'s discounted cash flow estimate of an impaired asset\'s value', 'Quoted price for similar bonds in an inactive market', 'The closing price of a NYSE-listed common share', 'A broker quote for an over-the-counter derivative'],
        correct: 2,
        explanation: 'Level 1 = quoted price in active market for IDENTICAL asset. NYSE-listed share = Level 1.'
      },
      {
        id: 'ch10_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'A bond that does not trade actively is valued by reference to similar bonds that DO trade actively. This is a:',
        options: ['Level 1 input', 'Level 2 input', 'Level 3 input', 'Mark-to-model with no observable inputs'],
        correct: 1,
        explanation: 'Level 2 = observable inputs other than identical-asset prices (similar assets, interest rates, yield curves).'
      },
      {
        id: 'ch10_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Investor buys $20,000 of bonds for $19,800 plus $120 brokerage fees. Compute the cost recorded for the investment in $.',
        answer: 19920, units: '$', tolerance: 0.001,
        explanation: 'Cost = Purchase price + Brokerage = 19,800 + 120 = $19,920. The face value ($20,000) is irrelevant for recording cost.'
      },
      {
        id: 'ch10_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Same bonds. Sold for $20,500 net of $80 brokerage fees on sale. Compute the gain/loss in $ (positive = gain).',
        answer: 580, units: '$', tolerance: 0.001,
        explanation: 'Net Proceeds = 20,500 − 80 = 20,420. Gain = 20,420 − 19,920 = $500. (If problem states $20,500 is already NET of fees, then gain = 20,500 − 19,920 = $580.)'
      },
      {
        id: 'ch10_q7', type: 'mcq', difficulty: 'hard',
        prompt: 'Mark-to-market vs mark-to-model: which is GENERALLY considered more subjective?',
        options: ['Mark-to-market — relies on potentially manipulated market prices', 'Mark-to-model — uses valuation models with assumptions', 'Both are equally objective', 'Neither — fair value is always inherently subjective'],
        correct: 1,
        explanation: 'Mark-to-market uses observable market prices (objective). Mark-to-model relies on assumptions and valuation models — more subjective.'
      },
      {
        id: 'ch10_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'A company sells appreciated AFS securities at a gain and immediately buys them back at the same price. The earnings-management red flag this represents is:',
        options: ['Channel stuffing', 'Cherry-picking gains', 'Big bath', 'Income smoothing'],
        correct: 1,
        explanation: 'Cherry-picking = selling to crystallize an unrealized gain into reported income, then repurchasing.'
      },
      {
        id: 'ch10_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Investor owns 18% of Investee but has 3 of 7 board seats and veto rights over strategic decisions through a licensing agreement. Which method applies?',
        options: ['Fair value (passive — below 20% threshold)', 'Equity method (significant influence in substance, despite <20% ownership)', 'Consolidation', 'No accounting required for this stake'],
        correct: 1,
        explanation: 'The 20%/50% rules are presumptions. Substance: significant influence exists via board seats and veto rights → equity method.'
      },
      {
        id: 'ch10_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Why must realized gains and losses on AFS securities be disclosed in the footnotes?',
        options: ['IFRS prohibits AFS securities from being on the balance sheet', 'To allow users to identify "cherry-picking" — selling appreciated AFS securities just to boost reported income', 'AFS gains and losses are not allowed in net income', 'Footnote disclosure replaces income statement reporting for AFS'],
        correct: 1,
        explanation: 'Disclosing realized AFS gains/losses lets analysts spot suspicious trading patterns that may be earnings management.'
      },
      {
        id: 'ch10_q11', type: 'mcq', difficulty: 'easy',
        prompt: 'An investee in which the investor owns 25% is referred to as:',
        options: ['A subsidiary', 'An associate', 'A passive investment', 'A controlled entity'],
        correct: 1,
        explanation: '20–50% ownership = associate (significant influence, equity method).'
      }
    ]
  },

  // =============================================================
  // CHAPTER 11
  // =============================================================
  {
    id: 'ch11',
    number: 11,
    title: 'Statement of Cash Flows',
    subtitle: 'Indirect method, three sections, free cash flow, OCFCL.',
    theory: [
      {
        title: 'Three sections of the SCF',
        body: `<ul>
          <li><strong>Operating (CFO)</strong>: cash from running the business — receipts from customers, payments to suppliers/employees, taxes, interest.</li>
          <li><strong>Investing (CFI)</strong>: cash from buying/selling long-term assets and investments — PP&E acquisitions/sales, buying/selling securities of other companies, lending and collecting on loans.</li>
          <li><strong>Financing (CFF)</strong>: cash from owners and creditors — issuing/repurchasing shares, issuing/repaying debt, dividends paid.</li>
        </ul>
        <p>Net change in cash = CFO + CFI + CFF. The SCF reconciles beginning to ending cash.</p>
        <p><strong>Cash equivalents</strong> = short-term, highly liquid investments with original maturity ≤ 3 months.</p>`
      },
      {
        title: 'Direct vs indirect method',
        body: `<p>Both yield the SAME CFO — only the <em>format</em> of the operating section differs.</p>
        <p><strong>Indirect method</strong> (used by ~99% of firms): start with Net Income, adjust for non-cash items and working-capital changes.</p>
        <p>Direct method lists actual cash receipts and payments.</p>`
      },
      {
        title: 'Indirect method — adjustments to NI',
        body: `<p><strong>ADD to NI:</strong></p>
        <ul>
          <li>Depreciation, Amortization, Impairment</li>
          <li>Losses on sale of investments / PP&E</li>
          <li>Decreases in current assets (AR, Inventory, Prepaid)</li>
          <li>Increases in current liabilities (AP, Unearned, Accrued)</li>
        </ul>
        <p><strong>SUBTRACT from NI:</strong></p>
        <ul>
          <li>Gains on sale of investments / PP&E (cash goes in CFI)</li>
          <li>Increases in current assets</li>
          <li>Decreases in current liabilities</li>
        </ul>
        <p><strong>Mnemonic:</strong> <em>asset up = cash down</em>; <em>liability up = cash up</em>.</p>`
      },
      {
        title: 'Investing & financing — direct',
        body: `<p>For each long-term asset/equity/debt account, identify cash inflows and outflows.</p>
        <p><strong>Noncash transactions</strong> (e.g., acquiring equipment by signing a note, issuing stock for land) are <em>disclosed separately</em>, NOT in the main SCF.</p>`
      },
      {
        title: 'Free Cash Flow & OCFCL',
        body: `<ul>
          <li><strong>Free Cash Flow (FCF) = CFO − CapEx</strong>. Cash available to investors after maintaining/expanding operations.</li>
          <li><strong>Operating Cash Flow to Current Liabilities (OCFCL) = CFO / Avg Current Liabilities</strong>. Liquidity measure.</li>
          <li><strong>Operating Cash Flow to CapEx (OCFCX) = CFO / CapEx</strong>. Self-funding ability.</li>
        </ul>`
      }
    ],
    formulas: [
      { name: 'Net Δ cash', formula: 'Δ Cash = CFO + CFI + CFF' },
      { name: 'Operating CF (indirect)', formula: 'NI + Dep/Amort − Gains + Losses − ΔAR − ΔInv − ΔPrepaid + ΔAP + ΔAccrued + ΔUnearned' },
      { name: 'Free Cash Flow', formula: 'FCF = CFO − CapEx' },
      { name: 'OCFCL', formula: 'CFO / Average Current Liabilities' },
      { name: 'OCFCX', formula: 'CFO / Capital Expenditures' }
    ],
    examples: [
      {
        title: 'Operating CF (mock-style indirect)',
        problem: `<p>Morgan Corporation: accrual NI €50,000. AR ↑ €6,000; AP ↓ €4,000; Unearned revenue ↑ €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net CFO.</p>`,
        solution: `<p>50 + 7 (dep) − 6 (ΔAR) − 4 (ΔAP) + 1 (ΔUnearned) = <strong>€48,000</strong>.<br>PPE acquisition is investing.</p>`
      },
      {
        title: 'Investing CF (mock-style)',
        problem: `<p>Donald Plastics: Building acquired (cash) €200,000. Machinery acquired by signing note €10,000. Dividends paid €20,000. Competitor shares purchased (cash) €30,000. Land sold (cash) €40,000. Depreciation €9,000. Compute CFI.</p>`,
        solution: `<p>Cash investing only: −200 − 30 + 40 = <strong>−€190,000</strong>.<br>Note-purchase is non-cash; dividends are financing; depreciation is non-cash.</p>`
      },
      {
        title: 'Financing CF backed out',
        problem: `<p>Beg RE $80,000; End RE $76,000. NI $64,000. Long-term loan: Beg $49,000, End $42,000. No new loans. Compute CFF.</p>`,
        solution: `<p>Dividends = 80 + 64 − 76 = $68,000. Loan repaid = 49 − 42 = $7,000.<br>CFF = −68,000 − 7,000 = <strong>−$75,000</strong>.</p>`
      },
      {
        title: 'Jana Juice June 2019 SCF (slide reconciliation)',
        problem: `<p>Operating CF $2,300. Investing CF −$10,200 (fixtures). Financing CF: loans +$12,000 − dividends $100 = $11,900. Beg cash $6,460. Compute ending cash.</p>`,
        solution: `<p>Net Δ cash = 2,300 − 10,200 + 11,900 = $4,000.<br>Ending cash = 6,460 + 4,000 = <strong>$10,460</strong>.</p>`
      },
      {
        title: 'National Beverage Corp — full SCF case (in $ thousands)',
        problem: `<p>For the year ended May 3, 2014. NI $43,635. D&A $10,063. AR Apr 27, 2013 = 64,069 → May 3, 2014 = 58,205. Inventory 39,234 → 43,914. Prepaid 5,706 → 8,405. AP 44,261 → 45,606. Accrued 19,176 → 18,917. Investing: PP&E purchases $12,124, PP&E disposal proceeds $62, ST investment purchases $1,463, ST investment sales $2,443. Financing: LT debt repayment $22,772, treasury stock repurchase $7,024, dividends $726. Beg cash $18,267. Build the full cash flow statement.</p>`,
        solution: `<p><strong>Operating</strong>:<br>NI 43,635<br>+ D&A 10,063<br>+ ΔAR (decrease) 5,864<br>− ΔInventory (increase) 4,680<br>− ΔPrepaid (increase) 2,699<br>+ ΔAP (increase) 1,345<br>− ΔAccrued (decrease) 259<br>= <strong>CFO $53,269</strong>.<br><br><strong>Investing</strong>:<br>− PP&E purchase 12,124<br>+ PP&E disposal 62<br>− ST investment purchase 1,463<br>+ ST investment sale 2,443<br>= <strong>CFI ($11,082)</strong>.<br><br><strong>Financing</strong>:<br>− LT debt repayment 22,772<br>− Treasury repurchase 7,024<br>− Dividends 726<br>= <strong>CFF ($30,522)</strong>.<br><br>Net Δ cash = 53,269 − 11,082 − 30,522 = <strong>$11,665</strong>.<br>End cash = 18,267 + 11,665 = <strong>$29,932 ✓</strong>.</p>`
      },
      {
        title: 'Juanito Pizza / Computer Services — full SCF case ($)',
        problem: `<p>NI $145,000. Depreciation $9,000 (building $6K + equipment $3K). Loss on disposal of equipment $3,000. AR 30,000 → 20,000. Inventory 10,000 → 15,000. Prepaid 1,000 → 5,000. AP 12,000 → 28,000. Income tax payable 8,000 → 6,000. Bought building for cash $120,000. Bought equipment for cash $25,000. Sold equipment for $4,000 cash (cost $8,000, accum dep $1,000 → BV $7,000, loss $3,000). Issued shares $20,000 cash. Paid dividends $29,000. Issued $110,000 LT bonds DIRECTLY in exchange for land. Beg cash $33,000. Build the full SCF.</p>`,
        solution: `<p><strong>Operating</strong>:<br>NI 145,000 + Dep 9,000 + Loss 3,000 + ΔAR 10,000 − ΔInv 5,000 − ΔPrepaid 4,000 + ΔAP 16,000 − ΔIncome tax 2,000 = <strong>CFO $172,000</strong>.<br><br><strong>Investing</strong>: − Building 120,000 − Equipment 25,000 + Equipment sale 4,000 = <strong>CFI ($141,000)</strong>.<br><br><strong>Financing</strong>: + Issued shares 20,000 − Dividends 29,000 = <strong>CFF ($9,000)</strong>.<br><br>Net Δ cash = 172 − 141 − 9 = <strong>$22,000</strong>.<br>End cash = 33,000 + 22,000 = <strong>$55,000 ✓</strong>.<br><br><em>Non-cash disclosure: $110,000 LT bonds issued for land — disclosed separately, NOT in main SCF.</em></p>`
      }
    ],
    examTopics: [
      'Indirect method: NI + Dep − Gains + Losses ± ΔWC',
      '↑ AR/Inv → SUBTRACT (cash tied up)',
      '↑ AP/Unearned → ADD (cash conserved)',
      'Gain on disposal → SUBTRACT from operating (proceeds belong in investing)',
      'Dividends paid → FINANCING outflow',
      'Buying equipment → INVESTING outflow',
      'Issuing/repurchasing shares → FINANCING',
      'Free Cash Flow = CFO − CapEx',
      'Noncash transactions are disclosed separately, not in main SCF',
      'Cash equivalents = original maturity ≤ 3 months'
    ],
    questions: [
      {
        id: 'ch11_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the indirect method, a gain on disposal of long-term assets should be:',
        options: ['Deducted from NI because it belongs in investing', 'Added because it represents an additional source of operating revenue', 'Neither added nor deducted', 'Added because it increases cash from operating'],
        correct: 0,
        explanation: 'Cash proceeds belong in investing (full amount). Subtract the gain from NI to remove the double-count.'
      },
      {
        id: 'ch11_q2', type: 'numeric', difficulty: 'hard',
        prompt: 'Morgan Corporation: accrual NI €50,000. AR ↑ €6,000; AP ↓ €4,000; Unearned ↑ €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute CFO in €.',
        answer: 48000, units: '€', tolerance: 0.001,
        explanation: '50 + 7 − 6 − 4 + 1 = €48,000.'
      },
      {
        id: 'ch11_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'Donald Plastics: Building (cash) €200,000; Machinery via note €10,000; Dividends €20,000; Competitor shares (cash) €30,000; Land sold (cash) €40,000; Depreciation €9,000. Compute CFI in € (negative for outflow).',
        answer: -190000, units: '€', tolerance: 0.001,
        explanation: 'Cash investing only: −200 − 30 + 40 = −€190,000.'
      },
      {
        id: 'ch11_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg RE $80,000; End RE $76,000. NI $64,000. Long-term loan: Beg $49,000, End $42,000. No new loans. Compute CFF in $.',
        answer: -75000, units: '$', tolerance: 0.001,
        explanation: 'Dividends = 68,000. Loan repaid = 7,000. CFF = −$75,000.'
      },
      {
        id: 'ch11_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Ranger 2015: CFO $52,000; CFF −$10,000; CFI −$130,000. Compute net change in cash for 2015 in $ (negative for decrease).',
        answer: -88000, units: '$', tolerance: 0.001,
        explanation: '52 − 10 − 130 = −$88,000.'
      },
      {
        id: 'ch11_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company sold equipment with BV $40,000 for $50,000 cash. Under indirect method:',
        options: ['Operating shows +$50,000; investing shows nothing', 'Operating subtracts the $10,000 gain; investing shows +$50,000', 'Operating shows +$10,000; investing shows +$40,000', 'Operating shows −$50,000; investing shows +$10,000'],
        correct: 1,
        explanation: 'Reverse the gain in operating; full proceeds in investing.'
      },
      {
        id: 'ch11_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'A decrease in accounts payable, under the indirect method, is:',
        options: ['Added to NI', 'Subtracted from NI', 'Reported as a financing outflow', 'Reported as an investing outflow'],
        correct: 1,
        explanation: 'AP down = cash paid > expense. Subtract from NI.'
      },
      {
        id: 'ch11_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'CFO $250,000. CapEx $90,000. Compute Free Cash Flow in $.',
        answer: 160000, units: '$', tolerance: 0.001,
        explanation: 'FCF = CFO − CapEx = 250 − 90 = $160,000.'
      },
      {
        id: 'ch11_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Acquiring a building by issuing $500,000 of common stock would:',
        options: ['Appear as a $500,000 investing outflow and a $500,000 financing inflow', 'Appear only in the noncash transactions disclosure', 'Appear as a $500,000 operating inflow', 'Not be reported anywhere'],
        correct: 1,
        explanation: 'Noncash investing/financing transactions are disclosed in supplemental notes, not in the main SCF (no cash moved).'
      },
      {
        id: 'ch11_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Jana Juice (slide): CFO $2,300; CFI −$10,200; CFF $11,900. Beginning cash $6,460. Compute ending cash in $.',
        answer: 10460, units: '$', tolerance: 0.001,
        explanation: 'Δ cash = 2,300 − 10,200 + 11,900 = 4,000. End = 6,460 + 4,000 = $10,460.'
      },
      {
        id: 'ch11_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'CFO €120,000. Average current liabilities €240,000. Compute OCFCL.',
        answer: 0.5, units: '', tolerance: 0.01,
        explanation: 'OCFCL = 120 / 240 = 0.50.'
      },
      // From National Beverage Corp case
      {
        id: 'ch11_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'National Beverage 2014 (case): NI $43,635; D&A $10,063; ΔAR −5,864 (decrease); ΔInventory +4,680; ΔPrepaid +2,699; ΔAP +1,345; ΔAccrued −259. Compute net CFO in $ (thousands).',
        answer: 53269, units: '$K', tolerance: 1,
        explanation: '43,635 + 10,063 + 5,864 − 4,680 − 2,699 + 1,345 − 259 = $53,269K. (AR DOWN = ADD; Inv/Prepaid UP = SUBTRACT; AP UP = ADD; Accrued DOWN = SUBTRACT.)'
      },
      {
        id: 'ch11_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'National Beverage investing: PP&E purchases ($12,124); PP&E disposal $62; ST investments purchased ($1,463); ST investments sold $2,443. Compute net CFI in $ (thousands, negative for outflow).',
        answer: -11082, units: '$K', tolerance: 1,
        explanation: '−12,124 + 62 − 1,463 + 2,443 = −$11,082K outflow.'
      },
      {
        id: 'ch11_q14', type: 'numeric', difficulty: 'hard',
        prompt: 'Juanito Pizza case: NI $145,000; Dep $9,000; Loss on disposal $3,000; ΔAR −$10,000 (decrease); ΔInv +$5,000; ΔPrepaid +$4,000; ΔAP +$16,000; ΔIncome tax payable −$2,000. Compute net CFO in $.',
        answer: 172000, units: '$', tolerance: 1,
        explanation: '145 + 9 + 3 + 10 − 5 − 4 + 16 − 2 = $172,000.'
      },
      {
        id: 'ch11_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'In the Juanito Pizza case, the company issued $110,000 of long-term bonds in DIRECT EXCHANGE for land (no cash changed hands). Where does this transaction appear on the SCF?',
        options: ['$110,000 financing inflow + $110,000 investing outflow', 'Only as a financing inflow of $110,000', 'Only as an investing outflow of $110,000', 'In supplemental noncash disclosure — NOT in the main SCF sections'],
        correct: 3,
        explanation: 'Noncash investing/financing transactions are disclosed in supplemental notes. The main SCF only reports actual cash flows.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 12
  // =============================================================
  {
    id: 'ch12',
    number: 12,
    title: 'Financial Ratios & Analysis',
    subtitle: 'Profitability, liquidity, solvency, market ratios, DuPont, CCC, vertical/horizontal analysis.',
    theory: [
      {
        title: 'Why ratios — and how to interpret them',
        body: `<p>Ratios alone are not enough — must compare to a benchmark:</p>
        <ul>
          <li><strong>Time-trend</strong>: firm vs its own history.</li>
          <li><strong>Peer-group</strong>: firm vs similar companies.</li>
          <li><strong>Industry</strong>: firm vs industry averages.</li>
        </ul>`
      },
      {
        title: 'Vertical vs horizontal analysis',
        body: `<p><strong>Vertical (common-size)</strong>: each line as % of base. Income Statement: % of revenue. Balance Sheet: % of total assets. Lets you compare firms of different sizes.</p>
        <p><strong>Horizontal</strong>: % change vs base period. (Year 2 − Year 1) / Year 1.</p>
        <p><em>Trap</em>: A 70% decrease means new value = base × 30%, NOT base × 70%.</p>`
      },
      {
        title: 'Profitability — ROE, ROA, ROFL',
        body: `<ul>
          <li><strong>ROE = NI / Avg Equity</strong> — primary summary measure of company performance.</li>
          <li><strong>ROA = NI / Avg Total Assets</strong>.</li>
          <li><strong>Return on Financial Leverage = ROE − ROA</strong>. Portion of ROE from debt.</li>
        </ul>
        <p><strong>DuPont decomposition</strong>: ROE = Profit Margin × Asset Turnover × Equity Multiplier = (NI/Sales) × (Sales/Avg Assets) × (Avg Assets/Avg Equity).</p>
        <p><strong>ROA = Profit Margin × Asset Turnover</strong>.</p>`
      },
      {
        title: 'Liquidity ratios',
        body: `<ul>
          <li><strong>Current Ratio</strong> = CA / CL.</li>
          <li><strong>Quick Ratio</strong> = (Cash + Marketable Sec + AR) / CL. <em>Excludes inventory & prepaid.</em></li>
          <li><strong>OCFCL</strong> = CFO / Avg CL.</li>
          <li><strong>Working Capital</strong> = CA − CL.</li>
        </ul>`
      },
      {
        title: 'Solvency ratios',
        body: `<ul>
          <li><strong>Debt-to-Equity</strong> = Total Liabilities / Total Equity. Average public co ≈ 1.0.</li>
          <li><strong>Times Interest Earned (TIE)</strong> = EBIT / Interest = (NI + Tax + Interest) / Interest. Higher = safer.</li>
        </ul>`
      },
      {
        title: 'Working-capital cycle (CCC)',
        body: `<p><strong>CCC = DIO + DSO − DPO</strong>.</p>
        <ul>
          <li><strong>DIO</strong> = 365 / Inventory Turnover.</li>
          <li><strong>DSO</strong> = 365 / AR Turnover.</li>
          <li><strong>DPO</strong> = 365 / AP Turnover.</li>
        </ul>
        <p>Lower CCC = faster cash recovery. A company with no inventory: CCC = DSO − DPO.</p>`
      },
      {
        title: 'Market ratios',
        body: `<ul>
          <li><strong>EPS</strong> = (NI − Pref Div) / Weighted Avg Common Shares.</li>
          <li><strong>P/E</strong> = Price / EPS.</li>
          <li><strong>BVPS</strong> = Common Equity / Common Shares.</li>
          <li><strong>Market-to-Book</strong> = Price / BVPS.</li>
          <li><strong>Dividend Yield</strong> = Annual DPS / Price.</li>
          <li><strong>Payout Ratio</strong> = DPS / EPS.</li>
        </ul>`
      },
      {
        title: 'Limitations',
        body: `<ul>
          <li>Hard to benchmark diversified firms.</li>
          <li>International comparison: IFRS vs GAAP, FIFO vs LIFO can distort.</li>
          <li>Different accounting policies, seasonal effects, one-off items distort comparisons.</li>
        </ul>`
      }
    ],
    formulas: [
      { name: 'Current Ratio', formula: 'CA / CL' },
      { name: 'Quick Ratio', formula: '(Cash + Marketable Sec + AR) / CL' },
      { name: 'Working Capital', formula: 'CA − CL' },
      { name: 'OCFCL', formula: 'CFO / Avg Current Liabilities' },
      { name: 'Debt-to-Equity', formula: 'Total Liabilities / Total Equity' },
      { name: 'Debt-to-Assets', formula: 'Total Liabilities / Total Assets' },
      { name: 'Times Interest Earned', formula: '(NI + Tax + Interest) / Interest = EBIT / Interest' },
      { name: 'Gross Profit Margin', formula: 'GP / Net Sales' },
      { name: 'Operating Margin', formula: 'Operating Income / Net Sales' },
      { name: 'Net Profit Margin', formula: 'NI / Net Sales' },
      { name: 'ROA', formula: 'NI / Average Total Assets' },
      { name: 'ROE', formula: 'NI / Average Equity' },
      { name: 'Return on Financial Leverage', formula: 'ROE − ROA' },
      { name: 'DuPont', formula: 'ROE = PM × AT × EM' },
      { name: 'AR Turnover', formula: 'Net Credit Sales / Avg AR' },
      { name: 'DSO', formula: '365 / AR Turnover' },
      { name: 'Inventory Turnover', formula: 'COGS / Avg Inventory' },
      { name: 'DIO', formula: '365 / Inventory Turnover' },
      { name: 'AP Turnover', formula: 'COGS / Avg AP' },
      { name: 'DPO', formula: '365 / AP Turnover' },
      { name: 'Cash Conversion Cycle', formula: 'CCC = DIO + DSO − DPO' },
      { name: 'EPS (basic)', formula: '(NI − Pref Div) / Weighted Avg Common Shares' },
      { name: 'P/E Ratio', formula: 'Price / EPS' },
      { name: 'Dividend Yield', formula: 'Annual DPS / Price' },
      { name: 'Payout Ratio', formula: 'DPS / EPS' },
      { name: 'Book Value per Share', formula: 'Common Equity / Shares Outstanding' },
      { name: 'Market-to-Book', formula: 'Price / BVPS' }
    ],
    examples: [
      {
        title: 'Lowe\'s FY ending Jan 30, 2015 (slide profitability)',
        problem: `<p>Lowe\'s: NI $2,698M; Avg Equity ($11,853 + $9,968)/2 = $10,910.5M; Avg Total Assets ($31,827 + $32,732)/2 = $32,279.5M. Compute ROE, ROA, ROFL.</p>`,
        solution: `<p>ROE = 2,698 / 10,910.5 = <strong>24.73%</strong>.<br>ROA = 2,698 / 32,279.5 = <strong>8.35%</strong>.<br>ROFL = 24.73 − 8.35 = <strong>16.38%</strong> (over 60% of ROE comes from leverage).</p>`
      },
      {
        title: 'Lowe\'s working-capital cycle (slide)',
        problem: `<p>COGS $36,665M; Avg AP $5,124M. AR negligible (cash retailer). Inv Turnover 4.07x. Compute CCC.</p>`,
        solution: `<p>DIO = 365 / 4.07 ≈ 90 days (slide rounds to 80).<br>DSO ≈ 0 (cash retailer).<br>AP Turnover = 36,665 / 5,124 = 7.15. DPO = 365 / 7.15 = 51 days.<br>CCC = 80 + 0 − 51 = <strong>29 days</strong> (slide).</p>`
      },
      {
        title: 'P/E ratio (mock-style)',
        problem: `<p>1,000,000 shares (par €2). NI €12,000,000; div €3,000,000. Price €108. Compute P/E.</p>`,
        solution: `<p>EPS = 12M / 1M = €12. P/E = 108 / 12 = <strong>9</strong>.</p>`
      },
      {
        title: 'CCC with no inventory',
        problem: `<p>CCC 100 days. No inventory. DPO 50 days. Compute DSO.</p>`,
        solution: `<p>CCC = DSO + 0 − 50 → DSO = <strong>150 days</strong>.</p>`
      }
    ],
    examTopics: [
      'TIE = (NI + Tax + Interest) / Interest = EBIT / Interest',
      'CCC = DIO + DSO − DPO (no inventory: DIO = 0)',
      'P/E = Price / EPS (compute EPS first using NI / shares)',
      'ROA, ROE, and Return on Financial Leverage = ROE − ROA',
      'Profit Margin = NI / Sales',
      'DuPont: ROE = PM × AT × EM',
      'Quick ratio EXCLUDES inventory and prepaid',
      'Horizontal analysis: a 70% decrease means new value = base × 30%',
      'Use averages (not period-end) for any turnover ratio',
      'Cross-firm comparisons: adjust for IFRS vs GAAP, LIFO vs FIFO'
    ],
    questions: [
      {
        id: 'ch12_q1', type: 'numeric', difficulty: 'medium',
        prompt: 'CCC 100 days, no inventory, DPO 50 days. Compute DSO in days.',
        answer: 150, units: 'days', tolerance: 0.001,
        explanation: 'CCC = DSO + DIO − DPO. DIO = 0. DSO = 100 + 50 = 150.'
      },
      {
        id: 'ch12_q2', type: 'numeric', difficulty: 'medium',
        prompt: '1,000,000 shares (par €2). NI €12,000,000; div €3,000,000. Price €108. Compute P/E.',
        answer: 9, units: '', tolerance: 0.01,
        explanation: 'EPS = 12. P/E = 108 / 12 = 9.'
      },
      {
        id: 'ch12_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'PG & Company: NI $12,846M; Avg Equity $62,269M. Compute ROE in %.',
        answer: 20.6, units: '%', tolerance: 0.1,
        explanation: 'ROE = 12,846 / 62,269 = 20.6%.'
      },
      {
        id: 'ch12_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Yonge: NI $602M; Sales $90,374M. Compute the profit margin (decimal).',
        answer: 0.0067, units: '', tolerance: 0.001,
        explanation: 'PM = 602 / 90,374 = 0.0067 (~0.67%).'
      },
      {
        id: 'ch12_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Flynn: NI €6,000,000 in 2019. NI decreased 70% in 2020 (using 2019 base). Compute Flynn\'s 2020 NI in €.',
        answer: 1800000, units: '€', tolerance: 0.001,
        explanation: 'Decrease = 70% × 6M = 4.2M. 2020 NI = 6M − 4.2M = €1.8M.'
      },
      {
        id: 'ch12_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'TIE = (160 + 60 + 40) / 40 = 6.5.'
      },
      {
        id: 'ch12_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Total Assets €1,200,000; CL €140,000; Non-current liabilities €340,000. Compute the Debt-to-Equity ratio.',
        answer: 0.667, units: '', tolerance: 0.005,
        explanation: 'Total Liab = 480. Equity = 1,200 − 480 = 720. D/E = 480/720 = 0.667.'
      },
      {
        id: 'ch12_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide data: NI $2,698M; Avg Total Assets $32,279.5M. Compute ROA in %.',
        answer: 8.35, units: '%', tolerance: 0.05,
        explanation: 'ROA = 2,698 / 32,279.5 = 8.35% (slide-confirmed).'
      },
      {
        id: 'ch12_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'DSO 45, DIO 60, DPO 30. Compute CCC in days.',
        answer: 75, units: 'days', tolerance: 0.001,
        explanation: 'CCC = 60 + 45 − 30 = 75.'
      },
      {
        id: 'ch12_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Profit margin 8%; asset turnover 1.5; equity multiplier 2.0. Compute ROE under DuPont in %.',
        answer: 24, units: '%', tolerance: 0.01,
        explanation: 'ROE = 0.08 × 1.5 × 2.0 = 0.24 = 24%.'
      },
      {
        id: 'ch12_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide: Avg Equity $10,910.5M; Avg Total Assets $32,279.5M. Compute the Equity Multiplier.',
        answer: 2.96, units: '', tolerance: 0.05,
        explanation: 'EM = Avg Assets / Avg Equity = 32,279.5 / 10,910.5 = 2.96.'
      },
      {
        id: 'ch12_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Why is comparing a US LIFO oil company directly to a European FIFO oil company misleading without adjustment?',
        options: ['Currency differences distort all ratios', 'LIFO understates ending inventory in inflation, inflating Inventory Turnover artificially', 'IFRS firms use different fiscal years', 'Tax rates differ across countries'],
        correct: 1,
        explanation: 'The Chevron vs Total slide case: unadjusted Chevron showed 10.87× turnover; FIFO-adjusted only 6.00× — closer to Total\'s 6.83×.'
      },
      {
        id: 'ch12_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide: COGS $36,665M; Avg AP $5,124M. Compute DPO rounded to nearest day.',
        answer: 51, units: 'days', tolerance: 0.5,
        explanation: 'AP Turnover = 36,665 / 5,124 = 7.15. DPO = 365 / 7.15 = 51 days.'
      }
    ]
  }
];

// =============================================================
// MOCK EXAMS
// =============================================================
const MOCKS = [
  {
    id: 'mock_21',
    title: 'IE Mock Final Exam (Mock 21)',
    durationMinutes: 90,
    source: 'Actual past exam — full reproduction',
    questions: [
      // 20 MCQ from the actual mock
      { id: 'mock21_mcq1', type: 'mcq', difficulty: 'easy', prompt: 'Which one of the following is NOT an external user of accounting information?', options: ['Regulatory agencies', 'Customers', 'Investors', 'All of the above are external users of accounting information'], correct: 3, explanation: 'All listed are external. Internal = managers and employees.' },
      { id: 'mock21_mcq2', type: 'mcq', difficulty: 'medium', prompt: 'A long-term asset is depreciated over its useful life. EBIT after the first year of depreciation is LOWER if the company uses:', options: ['Double-declining balance', 'Straight-line', 'Operating income is not affected by depreciation', 'None'], correct: 0, explanation: 'DDB front-loads depreciation; Year 1 expense > SL.' },
      { id: 'mock21_mcq3', type: 'mcq', difficulty: 'medium', prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000, total assets must change by:', options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'], correct: 2, explanation: 'A = L + E. ΔA = −55,000.' },
      { id: 'mock21_mcq4', type: 'mcq', difficulty: 'medium', prompt: 'Ron services a car on July 31. Customer picks up Aug 1, mails payment Aug 5, Ron receives check Aug 6. When is revenue recorded?', options: ['July 31', 'August 1', 'August 5', 'August 6'], correct: 0, explanation: 'Revenue earned when service is performed.' },
      { id: 'mock21_mcq5', type: 'mcq', difficulty: 'medium', prompt: 'Consolidated financial statements are prepared when a company owns _____ of the ordinary shares of another company.', options: ['Less than 20%', 'More than 50%', 'Less than 50%', 'Between 20% and 50%'], correct: 1, explanation: '>50% = control = consolidation.' },
      { id: 'mock21_mcq6', type: 'mcq', difficulty: 'medium', prompt: 'Which adjustment requires DECREASING the liabilities reported on the balance sheet?', options: ['Use of $400 of supplies during the year', 'Recording $400 of depreciation on equipment', 'Earning $400 of revenue collected at the beginning of the year', 'Recording $400 of wages earned that will be paid next year'], correct: 2, explanation: 'Earning previously-collected revenue reduces unearned revenue (a liability).' },
      { id: 'mock21_mcq7', type: 'mcq', difficulty: 'easy', prompt: 'Adjusting entries:', options: ['Ensure revenue and expense recognition principles are followed', 'Are necessary to conform to IFRS and US GAAP', 'Include both accruals and deferrals', 'All of these answer choices are correct'], correct: 3, explanation: 'All true.' },
      { id: 'mock21_mcq8', type: 'mcq', difficulty: 'medium', prompt: 'GLF Company: Beg Inventory $8,000. Purchases $28,400. Ending count $9,600. COGS for the month is:', options: ['$1,600', '$28,400', '$26,800', '$36,400'], correct: 2, explanation: 'COGS = 8 + 28.4 − 9.6 = $26,800.' },
      { id: 'mock21_mcq9', type: 'mcq', difficulty: 'medium', prompt: 'Skyline Corporation: Issued shares (par €10): €600,000. Treasury shares (cost €15/sh): €1,800. How many ordinary shares are outstanding?', options: ['80,000', '59,880', '79,880', '60,000'], correct: 1, explanation: 'Issued 60,000 − Treasury 120 = 59,880.' },
      { id: 'mock21_mcq10', type: 'mcq', difficulty: 'medium', prompt: 'In rising prices, the inventory method whose balance sheet inventory is closest to current cost is:', options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All produce the same value'], correct: 0, explanation: 'FIFO leaves newest (most expensive) units on B/S.' },
      { id: 'mock21_mcq11', type: 'mcq', difficulty: 'easy', prompt: 'The net amount expected to be received in cash from receivables is called the:', options: ['Gross realizable value', 'Gross cash value', 'Allowance value', 'Cash (net) realizable value'], correct: 3, explanation: 'NRV = Gross AR − Allowance.' },
      { id: 'mock21_mcq12', type: 'mcq', difficulty: 'easy', prompt: 'Sales revenue:', options: ['May be recorded before cash is collected', 'Always equals cash collections in a month', 'Only results from credit sales', 'Is only recorded after cash is collected'], correct: 0, explanation: 'Accrual: revenue recognized when earned, not when cash is collected.' },
      { id: 'mock21_mcq13', type: 'mcq', difficulty: 'hard', prompt: 'If an expenditure related to a depreciable asset is incorrectly treated as a CAPITAL expenditure instead of repairs/maintenance, which is true?', options: ['NI lower; future depreciation higher', 'NI higher; future depreciation lower', 'NI higher; future depreciation higher', 'NI lower; future depreciation lower'], correct: 2, explanation: 'Expense not recognized → NI too high. Asset inflated → future dep too high.' },
      { id: 'mock21_mcq14', type: 'mcq', difficulty: 'medium', prompt: 'A $600,000 bond was retired at 98 when the book value was $590,000. The retirement entry would include:', options: ['Gain of $10,000', 'Gain of $2,000', 'Loss of $2,000', 'Loss of $10,000'], correct: 1, explanation: 'Cash = 588. Gain = 590 − 588 = $2,000.' },
      { id: 'mock21_mcq15', type: 'mcq', difficulty: 'medium', prompt: 'When a company sells an asset at a gain, which is true?', options: ['Proceeds > historical cost', 'Proceeds < book value', 'Proceeds > book value', 'Proceeds = historical cost'], correct: 2, explanation: 'Gain = Proceeds > Book Value.' },
      { id: 'mock21_mcq16', type: 'mcq', difficulty: 'hard', prompt: 'Hale Kennels sells equipment July 1, 2020 for $80,000. Cost $300,000; 5-yr life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Gain or loss?', options: ['$45,000 gain', '$30,000 loss', '$45,000 loss', '$30,000 gain'], correct: 3, explanation: 'BV = 50,000. Gain = 80 − 50 = $30,000.' },
      { id: 'mock21_mcq17', type: 'mcq', difficulty: 'medium', prompt: 'Which would NOT be recorded as an intangible asset?', options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'], correct: 2, explanation: 'Internally generated goodwill is never capitalized.' },
      { id: 'mock21_mcq18', type: 'mcq', difficulty: 'easy', prompt: 'Unearned Rent Revenue is:', options: ['A contra account to Rent Revenue', 'Reported as a current liability', 'A revenue account', 'Debited when rent is received in advance'], correct: 1, explanation: 'Cash received in advance creates an obligation → liability.' },
      { id: 'mock21_mcq19', type: 'mcq', difficulty: 'hard', prompt: 'Mouns Company owns 40% of Darian Corporation. Darian pays $20,000 dividends to Mouns and reports $100,000 NI. The investment will increase Mouns\'s NI by:', options: ['$20,000', '$40,000', '$32,000', '$8,000'], correct: 1, explanation: 'Equity method: 40% × 100,000 = $40,000.' },
      { id: 'mock21_mcq20', type: 'mcq', difficulty: 'medium', prompt: 'Under the indirect method, a gain on disposal of long-term assets should be:', options: ['Deducted from NI because it belongs in investing', 'Added because it represents an additional source of operating revenue', 'Neither added nor deducted', 'Added because it increases cash from operating'], correct: 0, explanation: 'Cash proceeds belong in investing. Subtract gain from NI.' },
      // 9 calculated answers from the actual mock
      { id: 'mock21_calc1', type: 'numeric', difficulty: 'hard', prompt: 'Morgan Corporation: Accrual NI €50,000. AR ↑ €6,000; AP ↓ €4,000; Unearned ↑ €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net CFO in €.', answer: 48000, units: '€', tolerance: 0.001, explanation: '50 + 7 − 6 − 4 + 1 = €48,000.' },
      { id: 'mock21_calc2', type: 'numeric', difficulty: 'hard', prompt: 'Donald Plastics PLC 2019: Building (cash) €200,000. Machinery via note €10,000. Dividends paid €20,000. Competitor shares (cash) €30,000. Land sold (cash) €40,000. Depreciation €9,000. Compute CFI in € (negative for outflow).', answer: -190000, units: '€', tolerance: 0.001, explanation: 'Cash investing: −200 − 30 + 40 = −€190,000.' },
      { id: 'mock21_calc3', type: 'numeric', difficulty: 'medium', prompt: 'CCC 100 days. No inventory. DPO 50 days. Compute DSO in days.', answer: 150, units: 'days', tolerance: 0.001, explanation: 'CCC = DSO − DPO. DSO = 150.' },
      { id: 'mock21_calc4', type: 'numeric', difficulty: 'medium', prompt: '1,000,000 shares (par €2). NI €12,000,000; div €3,000,000. Price €108. Compute P/E.', answer: 9, units: '', tolerance: 0.01, explanation: 'EPS = 12. P/E = 108 / 12 = 9.' },
      { id: 'mock21_calc5', type: 'numeric', difficulty: 'hard', prompt: 'PG & Company 2016: NI $12,846; Avg Total Assets $131,503; Avg Equity $62,269; Interest $946. Compute Return on Financial Leverage in % (= ROE − ROA).', answer: 10.8, units: '%', tolerance: 0.5, explanation: 'ROE = 20.6%; ROA = 9.8%; ROFL ≈ 10.8%.' },
      { id: 'mock21_calc6', type: 'numeric', difficulty: 'medium', prompt: 'Ranger Inc. 2015: CFO $52,000; CFF −$10,000; CFI −$130,000. Compute net change in cash for 2015 in $ (negative for decrease).', answer: -88000, units: '$', tolerance: 0.001, explanation: '52 − 10 − 130 = −$88,000.' },
      { id: 'mock21_calc7', type: 'numeric', difficulty: 'medium', prompt: 'Flynn Corporation: NI €6,000,000 in 2019. NI decreased 70% in 2020 (vs 2019 base). Compute Flynn\'s 2020 NI in €.', answer: 1800000, units: '€', tolerance: 0.001, explanation: '6M × 30% = €1.8M.' },
      { id: 'mock21_calc8', type: 'numeric', difficulty: 'medium', prompt: 'Fryman Company 2020: NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).', answer: 6.5, units: 'times', tolerance: 0.01, explanation: 'TIE = 260 / 40 = 6.5.' },
      { id: 'mock21_calc9', type: 'numeric', difficulty: 'medium', prompt: 'Yonge\'s 2015: Interest $435M; NI $602M; Sales $90,374M; Avg total assets $23,491M; Tax rate 35%. Compute the profit margin (decimal).', answer: 0.0067, units: '', tolerance: 0.001, explanation: 'PM = 602 / 90,374 ≈ 0.0067.' }
    ]
  },
  // =============================================================
  // FINAL EXAM 2024 V1 — full reproduction (15 MCQ + 15 numeric)
  // =============================================================
  {
    id: 'mock_2024',
    title: 'IE Final Exam 2024 V1',
    durationMinutes: 90,
    source: 'Actual past exam — full reproduction (30 questions)',
    questions: [
      { id: 'm24_1', type: 'mcq', difficulty: 'easy', prompt: 'A dividend is:', options: ['A distribution of the company\'s earnings to its shareholders', 'Equal to liabilities minus equity', 'Equal to assets minus equity', 'Equal to revenues less expenses'], correct: 0, explanation: 'Dividend = distribution of earnings to shareholders. Reduces RE.' },
      { id: 'm24_2', type: 'mcq', difficulty: 'easy', prompt: 'Equity is best depicted by:', options: ['Assets = Liabilities', 'Liabilities + Assets', 'Residual equity + Assets', 'Assets − Liabilities'], correct: 3, explanation: 'A = L + E ⇒ E = A − L.' },
      { id: 'm24_3', type: 'mcq', difficulty: 'hard', prompt: 'If inventory at the end of the year is UNDERSTATED by $60,000, what will this error cause?', options: ['An understatement of COGS by $60,000', 'An overstatement of gross profit by $60,000', 'An overstatement of inventory by $60,000', 'An understatement of net income by $60,000'], correct: 3, explanation: 'COGS = Beg + Purch − End. Understated End → overstated COGS → understated GP and NI.' },
      { id: 'm24_4', type: 'mcq', difficulty: 'medium', prompt: 'Goodwill can be recorded as an asset when:', options: ['An offer is received to purchase the business above asset value', 'A business has above-normal profitability', 'A business is purchased and payment made in excess of fair value of net assets', 'A business creates customer goodwill internally'], correct: 2, explanation: 'Goodwill = price paid − FV of net identifiable assets in an acquisition. Internally generated goodwill is NEVER recorded.' },
      { id: 'm24_5', type: 'mcq', difficulty: 'medium', prompt: 'Quechua issued $400,000, 10-year, 10% coupon bonds. Market rate 12%. The bonds were issued at:', options: ['A price below $400,000', 'A higher price than $400,000', 'A price of $400,000', 'All incorrect'], correct: 0, explanation: 'Coupon (10%) < Market (12%) → discount → price below face.' },
      { id: 'm24_6', type: 'mcq', difficulty: 'medium', prompt: 'Why might a company repurchase its own shares?', options: ['It feels the market undervalues its shares', 'To offset dilutive effects of employee share options', 'To increase the number of shares outstanding', 'A and B'], correct: 3, explanation: 'Both A (signal undervaluation) and B (offset dilution) are valid reasons. C is wrong: repurchase REDUCES shares outstanding.' },
      { id: 'm24_7', type: 'mcq', difficulty: 'medium', prompt: 'Which transaction impacting current liabilities has a corresponding entry on the income statement?', options: ['Purchase inventory on credit Jan 1', 'Pay Feb 1 for the Jan 1 purchase', 'Interest accrued on a note payable', 'Pay employees in March for February wages'], correct: 2, explanation: 'Accrued interest = expense (IS) + payable (BS). The others are pure asset/liability movements with no IS impact (assuming wages were already accrued in Feb).' },
      { id: 'm24_8', type: 'mcq', difficulty: 'easy', prompt: 'All of the following increase revenue EXCEPT:', options: ['Issuance of ordinary shares by British Airways', 'Sale of clothing by French Connection', 'Performance of accounting services by PwC', 'Sale of petroleum by Royal Dutch Shell'], correct: 0, explanation: 'Share issuance is FINANCING, not revenue. The others are operating revenues.' },
      { id: 'm24_9', type: 'mcq', difficulty: 'medium', prompt: 'At what level of investment ownership is significant influence often presumed?', options: ['Greater than 20% of voting shares', 'Between 20% and 50% of voting shares', 'Greater than 50% of voting shares', 'Greater than 20% of voting shares OR market value'], correct: 1, explanation: '20–50% = significant influence (presumed) → equity method.' },
      { id: 'm24_10', type: 'mcq', difficulty: 'medium', prompt: 'Law firm received $2,000 for legal services to be provided in the future, credited Unearned Service Revenue. Service is performed before period end, but no adjusting entry. This causes:', options: ['Expenses to be overstated', 'Net income to be overstated', 'Liabilities to be understated', 'Revenues to be understated'], correct: 3, explanation: 'Without the entry: Unearned Revenue (liability) too high, Revenue too low → revenues understated, NI understated.' },
      { id: 'm24_11', type: 'mcq', difficulty: 'medium', prompt: 'Willie\'s RE increased $15,000. Dividends declared $28,000. Compute net income or loss.', options: ['Net income $13,000', 'Net income $43,000', 'Net loss $43,000', 'Net loss $13,000'], correct: 1, explanation: 'ΔRE = NI − Div → 15,000 = NI − 28,000 → NI = $43,000.' },
      { id: 'm24_12', type: 'mcq', difficulty: 'medium', prompt: 'Which event will NOT appear in INVESTING cash flows?', options: ['Purchase of treasury stock', 'Purchase of long-term investments', 'Purchase of a building', 'Sale of a machine'], correct: 0, explanation: 'Treasury stock purchase is FINANCING (involves the company\'s own equity). Other three involve external assets.' },
      { id: 'm24_13', type: 'mcq', difficulty: 'medium', prompt: 'Which statement is FALSE?', options: ['SCF explains how cash balance changed during a period', 'PP&E acquisition/disposition cash flows are investing', 'Under indirect method, an INCREASE in AR will be ADDED to NI', 'CFF includes cash flows of issuing/retiring long-term debt and equity'], correct: 2, explanation: 'AR up = cash tied up → SUBTRACT from NI, not add. Others are true.' },
      { id: 'm24_14', type: 'mcq', difficulty: 'medium', prompt: 'Gummy: Beg inventory $118,000; End $110,000; Net sales $999,000; GP $303,000. Inventory turnover is closest to:', options: ['2.57', '2.75', '8.76', '6.11'], correct: 3, explanation: 'COGS = 999 − 303 = 696. Avg Inv = 114. Turnover = 696 / 114 = 6.11.' },
      { id: 'm24_15', type: 'mcq', difficulty: 'hard', prompt: 'Three-company table. A: D/E 2.4, CR 0.9, NP 4K/Sales 150K. B: D/E 1.8, CR 0.7, NP 6.6K/Sales 250K. C: D/E 0.6, CR 1.1, NP 4K/Sales 30K. Which is TRUE?', options: ['Company A has the best solvency ratio', 'Company B has the best liquidity ratio', 'Company C has the best profitability ratios', 'Company A and C have the same profitability ratios'], correct: 2, explanation: 'C has lowest D/E (best solvency), highest CR (best liquidity), AND highest NPM (4/30=13.3% vs A 2.7% and B 2.6%). C has the best profitability ratios.' },
      { id: 'm24_16', type: 'numeric', difficulty: 'hard', prompt: '$10M warehouse contract, total estimated cost $7.5M. 2022 costs $2.625M. Compute 2022 revenue under percentage-of-completion in $.', answer: 3500000, units: '$', tolerance: 0.001, explanation: '% complete = 2,625 / 7,500 = 35%. Revenue = 35% × 10M = $3,500,000.' },
      { id: 'm24_17', type: 'numeric', difficulty: 'hard', prompt: 'Sumantra sold a machine for $115,000. Cost $175,000 five years ago; SL over 12 years to $25,000 salvage. Compute the gain (loss) reported in $.', answer: 2500, units: '$', tolerance: 0.001, explanation: 'Annual SL = (175−25)/12 = 12,500. After 5 yrs, Accum Dep = 62,500. BV = 112,500. Gain = 115,000 − 112,500 = $2,500.' },
      { id: 'm24_18', type: 'numeric', difficulty: 'medium', prompt: 'Watch Station: Beg RE $0; NI $1,750,000; Dividends paid $300,000. Compute ending RE in $.', answer: 1450000, units: '$', tolerance: 0.001, explanation: 'End RE = 0 + 1,750,000 − 300,000 = $1,450,000.' },
      { id: 'm24_19', type: 'numeric', difficulty: 'hard', prompt: 'Gel IQ: NI $570K; AP ↓ $49K; Prepaid ↑ $38K; Dep $68.5K; AR ↓ $48K; Loss on sale $38K; Wages payable ↑ $22.5K; Unearned rev ↓ $38K. Compute net cash from OPERATING activities in $.', answer: 622000, units: '$', tolerance: 0.001, explanation: '570 − 49 − 38 + 68.5 + 48 + 38 + 22.5 − 38 = $622,000.' },
      { id: 'm24_20', type: 'numeric', difficulty: 'medium', prompt: 'Kobo: NI $27,000; Total assets $40,500; Total equity $19,100. Compute D/E.', answer: 1.12, units: '', tolerance: 0.01, explanation: 'Total Liab = 40,500 − 19,100 = 21,400. D/E = 21,400 / 19,100 = 1.12.' },
      { id: 'm24_21', type: 'numeric', difficulty: 'medium', prompt: 'Signoria: Issued bonds $67,000; cash dividends $9,700; treasury stock $16,700; new equipment $20,700. Compute net CFF in $.', answer: 40600, units: '$', tolerance: 0.001, explanation: '67 − 9.7 − 16.7 = $40,600. Equipment is investing.' },
      { id: 'm24_22', type: 'numeric', difficulty: 'medium', prompt: 'Pitti: Sold equipment $130,000; bought building $3,255,000; sold long-term investments $145,000; paid dividends $15,000. Compute net CFI in $ (negative for outflow).', answer: -2980000, units: '$', tolerance: 0.001, explanation: '130 − 3,255 + 145 = −$2,980,000. Dividends are financing.' },
      { id: 'm24_23', type: 'numeric', difficulty: 'hard', prompt: 'Fiorentella: EBIT $133,000; Interest $18,300; Tax $29,800; Avg Equity $693,000. Compute ROE in %.', answer: 12.25, units: '%', tolerance: 0.05, explanation: 'NI = 133 − 18.3 − 29.8 = 84.9. ROE = 84.9 / 693 = 12.25%.' },
      { id: 'm24_24', type: 'numeric', difficulty: 'hard', prompt: 'Vaporetto: NI $304,500; Loss on sale $19,450; Dep $42,250. AR 400→500; Inv 100→75; AP 200→280; Accrued 300→260. Compute net cash from OPERATING in $.', answer: 331200, units: '$', tolerance: 0.001, explanation: '304.5 + 19.45 + 42.25 − 100 (ΔAR) + 25 (ΔInv) + 80 (ΔAP) − 40 (ΔAccrued) = $331,200.' },
      { id: 'm24_25', type: 'numeric', difficulty: 'medium', prompt: 'Madagascar: Sales 100K; Interest 10K; Op Exp 20K; COGS 30K; Tax 5K; Dep 6K; Inventory 40K. Compute Gross Profit Margin in %.', answer: 70, units: '%', tolerance: 0.01, explanation: 'GPM = (Sales − COGS) / Sales = (100 − 30) / 100 = 70%.' },
      { id: 'm24_26', type: 'numeric', difficulty: 'hard', prompt: 'Rainbow: CFO $362,400; NI $310,800; Interest $33,600; Tax $248,400. Compute Times Interest Earned (in times).', answer: 17.64, units: 'times', tolerance: 0.05, explanation: 'TIE = (NI + Tax + Interest) / Interest = (310.8 + 248.4 + 33.6) / 33.6 = 17.64.' },
      { id: 'm24_27', type: 'numeric', difficulty: 'hard', prompt: 'Agnes: CA 153K; Total liab 303K; Avg AR 12.9K; Inv 41K; LT liab 203K; Sales 139K; COGS 87K. Compute DSO in days (365-day year).', answer: 33.87, units: 'days', tolerance: 0.05, explanation: 'ART = Sales / Avg AR = 139 / 12.9 = 10.78. DSO = 365 / 10.78 = 33.87 days.' },
      { id: 'm24_28', type: 'numeric', difficulty: 'hard', prompt: 'Anna\'s Antiques: aging analysis estimates $8,120 uncollectible. AR balance $250,000. Allowance has $1,625 CREDIT balance pre-adjustment. Compute Bad Debt Expense in $.', answer: 6495, units: '$', tolerance: 0.001, explanation: 'BDE = Required ending allowance − existing balance = 8,120 − 1,625 = $6,495.' },
      { id: 'm24_29', type: 'numeric', difficulty: 'medium', prompt: 'Ricardus: Sold a machine. Cost $60,000; accum dep $45,000; gain $6,000. Compute the selling price in $.', answer: 21000, units: '$', tolerance: 0.001, explanation: 'BV = 60 − 45 = 15. Gain = Price − BV → Price = 15 + 6 = $21,000.' },
      { id: 'm24_30', type: 'numeric', difficulty: 'hard', prompt: 'Square9 laptops: Beg 160 @ $460; Purch 260 @ $510, 360 @ $560, 230 @ $610. Sold 900. Compute LIFO COGS in $.', answer: 497500, units: '$', tolerance: 0.001, explanation: 'Available 1,010, sold 900, ending 110 (oldest @ $460 = $50,600). Total cost avail = $548,100. LIFO COGS = 548,100 − 50,600 = $497,500.' }
    ]
  },
  // =============================================================
  // FINAL EXAM 2025 V1 — full reproduction (15 MCQ + 15 numeric)
  // =============================================================
  {
    id: 'mock_2025',
    title: 'IE Final Exam 2025 V1',
    durationMinutes: 90,
    source: 'Actual past exam — full reproduction (30 questions)',
    questions: [
      { id: 'm25_1', type: 'mcq', difficulty: 'easy', prompt: 'Which describes the primary objective of the BALANCE SHEET?', options: ['To measure the net income of a business up to a particular point in time', 'To report the difference between cash inflows and outflows for the period', 'To report the financial position of the reporting entity at a particular point in time', 'To report changes in common stock and retained earnings for the period'], correct: 2, explanation: 'BS = financial position at a point in time.' },
      { id: 'm25_2', type: 'mcq', difficulty: 'medium', prompt: 'A corporation purchased factory equipment using cash. Which is correct?', options: ['Cost is an expense on the IS at time of purchase', 'Total assets will not change', 'Total liabilities will increase', 'Stockholders\' equity will decrease'], correct: 1, explanation: 'Equipment ↑, Cash ↓ by same amount → total assets unchanged.' },
      { id: 'm25_3', type: 'mcq', difficulty: 'medium', prompt: 'Initially recording deferred/unearned revenue when cash is received from a customer:', options: ['Revenue is increased', 'Liabilities are not affected', 'Retained earnings increase', 'Net income is not affected'], correct: 3, explanation: 'Dr Cash / Cr Unearned Revenue (liability). No revenue, no NI effect at this point.' },
      { id: 'm25_4', type: 'mcq', difficulty: 'medium', prompt: 'Under IFRS, which would NOT be recorded as an intangible asset?', options: ['Internally generated goodwill', 'Franchise rights', 'Purchased patents', 'Purchased copyrights'], correct: 0, explanation: 'Internally generated goodwill is never capitalized.' },
      { id: 'm25_5', type: 'mcq', difficulty: 'medium', prompt: 'HarborView SA: NI €210,000; Interest €28,000; Tax €32,000. Compute Times Interest Earned.', options: ['8.43', '9.64', '7.50', '6.56'], correct: 1, explanation: 'TIE = (210 + 32 + 28) / 28 = 270 / 28 = 9.64.' },
      { id: 'm25_6', type: 'mcq', difficulty: 'medium', prompt: 'Which transaction results in an INCREASE when using indirect method to calculate operating cash flows?', options: ['Decrease in inventory', 'Increase in accounts receivable', 'Increase in prepaid expenses', 'Decrease in accounts payable'], correct: 0, explanation: 'Decrease in inventory frees up cash → ADD. The other three are subtractions.' },
      { id: 'm25_7', type: 'mcq', difficulty: 'hard', prompt: 'MapleTech sold equipment for €58,000 cash. Cost €120,000; accum dep €75,000. Which is correct?', options: ['Investing CF +€45,000; no gain or loss', 'Investing CF +€58,000; gain of €13,000', 'Financing CF +€58,000; gain of €45,000', 'Financing CF +€58,000; loss of €13,000'], correct: 1, explanation: 'BV = 120 − 75 = 45. Gain = 58 − 45 = €13,000. Cash proceeds (€58,000) appear in INVESTING.' },
      { id: 'm25_8', type: 'mcq', difficulty: 'medium', prompt: 'Pinky Promise has +CFO, −CFI, −CFF. What does this pattern suggest?', options: ['More assets being sold than CAPEX', 'The company is in start-up growth stage', 'The company is losing money from operations', 'The company is a mature company'], correct: 3, explanation: '+CFO (profitable operations) + −CFI (investing in growth) + −CFF (returning cash to investors via debt repayment & dividends) = mature, profitable.' },
      { id: 'm25_9', type: 'mcq', difficulty: 'medium', prompt: 'Aqua Bona: D/E rose from 1.2 to 2.8; Interest coverage fell from 5× to 2×. This indicates:', options: ['Lower financial risk', 'Increased solvency', 'Higher leverage risk', 'Improved profitability'], correct: 2, explanation: 'D/E up = more debt; coverage down = less ability to pay interest. Both signal HIGHER leverage / financial risk.' },
      { id: 'm25_10', type: 'mcq', difficulty: 'hard', prompt: 'Luna SA repurchased €500,000 face-value bonds. Carrying value €512,000; gain on retirement €7,000. What were cash proceeds paid and where on the SCF?', options: ['€512,000 paid; Financing outflow', '€505,000 paid; Financing outflow', '€519,000 paid; Investing outflow', '€507,000 paid; Financing outflow'], correct: 1, explanation: 'Gain = CV − Cash → 7,000 = 512,000 − Cash → Cash = €505,000. Bond retirement is FINANCING.' },
      { id: 'm25_11', type: 'mcq', difficulty: 'hard', prompt: 'Bunny: retired ONE-FOURTH of $419,000 of bonds payable for $99,800. Originally issued at par in 2019. Which is correct?', options: ['Loss of $4,950 will be reported', 'Gain of $319,200 will be reported', 'Gain of $4,950 will be reported', 'SE not affected'], correct: 2, explanation: 'Face retired = 419,000/4 = 104,750. Issued at par → BV = 104,750. Gain = 104,750 − 99,800 = $4,950.' },
      { id: 'm25_12', type: 'mcq', difficulty: 'medium', prompt: 'Company repurchased shares of its own common stock for $20,600. Originally issued in 2022 for $16,000 with $6,600 par. Which is correct for 2024?', options: ['Stockholders\' equity decreases $20,600', 'NI increases by $9,400', 'NI decreases by $9,400', 'SE increases by $16,000'], correct: 0, explanation: 'Treasury stock = contra-equity. SE ↓ by repurchase cost = $20,600. NEVER any P&L gain or loss.' },
      { id: 'm25_13', type: 'mcq', difficulty: 'hard', prompt: 'Days table. Alpha: DIO 45, DSO 70, DPO 40. Beta: 110/35/60. Gamma: 28/90/25. Which statement is WRONG?', options: ['Gamma has the slowest collection of receivables', 'Beta takes the longest time to sell inventory', 'Gamma has the best days payable outstanding', 'Alpha has the best CCC cycle'], correct: 2, explanation: 'A true (Gamma DSO 90 highest); B true (Beta DIO 110 highest); D true (Alpha CCC = 75 lowest); C WRONG: Gamma\'s DPO is the LOWEST (25), which is WORST not best — companies want HIGH DPO to delay paying suppliers.' },
      { id: 'm25_14', type: 'mcq', difficulty: 'medium', prompt: 'A: CR 2.1, QR 1.4, NPM 6%, ROA 7%. B: CR 1.3, QR 0.9, NPM 11%, ROA 13%. Most accurate interpretation?', options: ['A is more liquid; B is more profitable', 'A is more profitable; B is more liquid', 'B is both more liquid and more profitable', 'A is both more liquid and more profitable'], correct: 0, explanation: 'A has higher CR and QR (more liquid). B has higher NPM and ROA (more profitable).' },
      { id: 'm25_15', type: 'mcq', difficulty: 'medium', prompt: 'Which of the following REDUCES Cash Flow from Financing (CFF)?', options: ['Issuance of common stock for cash', 'Purchase of long-term investments using cash', 'Repayment of long-term debt with cash', 'Issuance of bonds at a premium for cash'], correct: 2, explanation: 'Debt repayment is a financing OUTFLOW. Stock/bond issuance are inflows. Long-term investment purchase is INVESTING (not financing).' },
      { id: 'm25_16', type: 'numeric', difficulty: 'medium', prompt: 'Eagle Crest: Common stock $12K → $16K; APIC ↑ $3.7K; RE $70K → $91K; NI $38K. Compute dividends paid in $.', answer: 17000, units: '$', tolerance: 0.001, explanation: 'ΔRE = NI − Div → 21,000 = 38,000 − Div → Div = $17,000.' },
      { id: 'm25_17', type: 'numeric', difficulty: 'hard', prompt: 'Vivid Corp Dec 31 adjustments: Dep $45K; Recorded AR $29K; Accrued exp $14K; Used insurance $5K (was prepaid); Rent earned $3K (was unearned). Total assets PRIOR = $430K. Compute total assets AFTER in $.', answer: 409000, units: '$', tolerance: 0.001, explanation: 'Asset effects: −45 (Dep) + 29 (AR) − 5 (insurance) = −21. Accrued exp & rent earned hit liabilities. End assets = 430 − 21 = $409,000.' },
      { id: 'm25_18', type: 'numeric', difficulty: 'hard', prompt: 'Hudson Co: NRV of AR estimated $226,000. AR balance Dec 31 $272,500. Write-offs during year $21,300. Allowance Jan 1 $31,500. Compute 2024 Bad Debt Expense in $.', answer: 36300, units: '$', tolerance: 0.001, explanation: 'Required ending allowance = 272.5 − 226 = 46.5. BDE = required + write-offs − beg allowance = 46.5 + 21.3 − 31.5 = $36,300.' },
      { id: 'm25_19', type: 'numeric', difficulty: 'medium', prompt: 'Bayfield: Beg inventory $220,000; COGS $920,000; End inventory $170,000. Compute purchases in $.', answer: 870000, units: '$', tolerance: 0.001, explanation: 'COGS = Beg + Purch − End → 920 = 220 + P − 170 → P = $870,000.' },
      { id: 'm25_20', type: 'numeric', difficulty: 'medium', prompt: 'Solaris equipment list price $72,000. Paid $55,000 cash + financed $17,000. Shipping $2,600. Installation $3,800. Compute the recorded cost in $.', answer: 78400, units: '$', tolerance: 0.001, explanation: 'Capitalize all costs to acquire and prepare for use: 72,000 + 2,600 + 3,800 = $78,400. Financing source is irrelevant.' },
      { id: 'm25_21', type: 'numeric', difficulty: 'medium', prompt: 'Evans Suppliers: Oct 1, 2024 signed 1-year, 6%, $160,000 note. Calendar year basis. Compute interest expense for 2024 in $.', answer: 2400, units: '$', tolerance: 0.001, explanation: 'Interest = 160,000 × 6% × 3/12 = $2,400 (3 months: Oct, Nov, Dec).' },
      { id: 'm25_22', type: 'numeric', difficulty: 'hard', prompt: 'Artemis: 10,500,000 shares issued (par $1). APIC $27,300,000. 9,900,000 outstanding. Treasury repurchase price $12/share. Compute net contributed capital in $.', answer: 30600000, units: '$', tolerance: 0.001, explanation: 'Common Stock = 10,500,000 × $1 = 10.5M. APIC = 27.3M. Treasury = 600,000 × $12 = 7.2M. Net = 10.5 + 27.3 − 7.2 = $30,600,000.' },
      { id: 'm25_23', type: 'numeric', difficulty: 'hard', prompt: 'SkyBridge SA: NI €150K; Dep €35K; AR ↑ €19K; Inv ↑ €14K; Unearned ↑ €7K; Prepaid ↓ €4K. Compute CFO in €.', answer: 163000, units: '€', tolerance: 0.001, explanation: '150 + 35 − 19 − 14 + 7 + 4 = €163,000.' },
      { id: 'm25_24', type: 'numeric', difficulty: 'hard', prompt: 'Revenue €1,200; Op Exp (excl D&A) €120; D&A €60; COGS €720; Interest €30; Tax €54. Compute Net Profit Margin in %.', answer: 18, units: '%', tolerance: 0.05, explanation: 'GP = 480. EBIT = 480 − 120 − 60 = 300. EBT = 270. NI = 216. NPM = 216 / 1,200 = 18%.' },
      { id: 'm25_25', type: 'numeric', difficulty: 'medium', prompt: 'Y1 Total assets €900; Y2 Total assets €1,300; Y2 NI €180. Compute ROA Y2 in %.', answer: 16.36, units: '%', tolerance: 0.05, explanation: 'Avg Assets = (900 + 1,300)/2 = 1,100. ROA = 180 / 1,100 = 16.36%.' },
      { id: 'm25_26', type: 'numeric', difficulty: 'medium', prompt: 'SilverStone: Y1 COGS €3,900; Y2 COGS €4,200. Inventory Y1 €520; Y2 €600. Compute Inventory Turnover for Y2 (in times).', answer: 7.5, units: 'times', tolerance: 0.05, explanation: 'Avg Inv Y2 = (520 + 600)/2 = 560. Turnover = 4,200 / 560 = 7.50.' },
      { id: 'm25_27', type: 'numeric', difficulty: 'easy', prompt: 'Aurora: DIO 52; DPO 34; DSO 35. Compute Cash Conversion Cycle in days.', answer: 53, units: 'days', tolerance: 0.001, explanation: 'CCC = DIO + DSO − DPO = 52 + 35 − 34 = 53 days.' },
      { id: 'm25_28', type: 'numeric', difficulty: 'hard', prompt: 'Communicated mobile phones: Beg 270 @ $570; Purch 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175. Compute FIFO ENDING INVENTORY in $.', answer: 158400, units: '$', tolerance: 0.001, explanation: 'Available 1,395, sold 1,175, ending 220 units. FIFO leaves NEWEST units: 220 × $720 (from the Oct 285-unit batch) = $158,400.' },
      { id: 'm25_29', type: 'numeric', difficulty: 'medium', prompt: 'Frame Industries: Jan 1, 2024 purchased delivery vehicle costing $26,300; 6-year life; $2,900 residual. Compute book value as of Dec 31, 2025 (SL method) in $.', answer: 18500, units: '$', tolerance: 0.001, explanation: 'Annual SL = (26,300 − 2,900)/6 = $3,900. After 2 yrs: Accum Dep = $7,800. BV = 26,300 − 7,800 = $18,500.' },
      { id: 'm25_30', type: 'numeric', difficulty: 'hard', prompt: 'SilverPeak 2024: Issued shares €620K; dividends €95K; treasury repurchase €25K; loan repaid €40K; equipment purchased €30K. Compute Financing CF in €.', answer: 460000, units: '€', tolerance: 0.001, explanation: 'CFF = +620 − 95 − 25 − 40 = €460,000. Equipment is INVESTING.' }
    ]
  }
];
