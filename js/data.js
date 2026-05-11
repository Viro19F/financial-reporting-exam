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
        explanation: 'Correct: D. External users are EVERYONE outside the company who reads the financials — investors deciding to buy stock, regulators checking compliance, customers checking financial stability. So A (regulators), B (customers), and C (investors) are ALL external. Internal users are only managers and employees. Since A, B, C are all external, D is the right answer.'
      },
      {
        id: 'ch1_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000 during a period, then total assets must change by:',
        options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'],
        correct: 2,
        explanation: 'Correct: C — assets decrease by ¥55,000. The accounting equation says A = L + E. If we change both sides we must keep them equal: ΔA = ΔL + ΔE = (−45,000) + (−10,000) = −55,000. Trap: A picks the right number but wrong direction; D forgets to add both effects.'
      },
      {
        id: 'ch1_q3', type: 'mcq', difficulty: 'easy',
        prompt: 'Which financial statement reports the financial position of a company at a single point in time?',
        options: ['Income Statement', 'Statement of Cash Flows', 'Balance Sheet', 'Statement of Retained Earnings'],
        correct: 2,
        explanation: 'Correct: C — Balance Sheet. The balance sheet is a SNAPSHOT at one date ("as of Dec 31"). The Income Statement, Statement of Cash Flows, and Statement of Stockholders\' Equity all cover a PERIOD ("for the year ended"). Memorize: BS = point-in-time; the others = period.'
      },
      {
        id: 'ch1_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which inventory cost-flow method is NOT permitted?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'Specific identification'],
        correct: 1,
        explanation: 'Correct: B — LIFO. IFRS prohibits LIFO because it can distort the balance sheet (old, outdated costs sit in ending inventory). US GAAP allows all four methods, mainly because LIFO gives a US tax benefit in inflation. FIFO, weighted-average, and specific identification are all permitted under IFRS.'
      },
      {
        id: 'ch1_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following pairs are BOTH considered fundamental qualitative characteristics of useful financial information?',
        options: ['Relevance and Comparability', 'Relevance and Faithful Representation', 'Timeliness and Verifiability', 'Understandability and Cost'],
        correct: 1,
        explanation: 'Correct: B — Relevance and Faithful Representation. These are the two FUNDAMENTAL qualitative characteristics under the IASB framework. Comparability, Verifiability, Timeliness, and Understandability are ENHANCING qualitative characteristics. Cost is a constraint, not a quality. So options A, C, and D mix in enhancing or non-quality items.'
      },
      {
        id: 'ch1_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Beginning retained earnings €240,000. Net income €85,000. Dividends declared €30,000. Compute ending retained earnings in €.',
        answer: 295000, units: '€', tolerance: 0.001,
        explanation: 'Formula: End RE = Beg RE + Net Income − Dividends. Substitute: 240,000 + 85,000 − 30,000 = €295,000. Common mistake: subtracting dividends declared but not yet paid (declared dividends still reduce RE — payment timing doesn\'t matter).'
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
        explanation: 'Correct: B — equity has no obligation to repay; investors own a share of the company. Debt (A) carries a legal repayment obligation and interest. C is wrong — equity is usually MORE expensive than debt because investors demand a higher return for higher risk. D describes debt (interest is tax-deductible), not equity.'
      },
      {
        id: 'ch1_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which of the following is permitted but is NOT permitted under US GAAP?',
        options: ['Use of FIFO inventory method', 'Reversal of an impairment loss on a non-financial asset', 'Capitalization of interest during construction', 'Recording goodwill on acquisition'],
        correct: 1,
        explanation: 'Correct: B — IFRS allows reversal of impairment losses on non-financial assets (except goodwill); US GAAP forbids any reversal. FIFO (A) is allowed under both. Capitalization of construction interest (C) is required under both. Goodwill (D) is recorded under both.'
      },
      {
        id: 'ch1_q9', type: 'mcq', difficulty: 'easy',
        prompt: 'A company purchases equipment for $50,000 in cash. The immediate effect on the accounting equation is:',
        options: ['Assets increase, liabilities increase', 'Assets unchanged (one asset up, another down)', 'Assets increase, equity increases', 'Liabilities decrease, equity decreases'],
        correct: 1,
        explanation: 'Correct: B — total assets unchanged. The transaction is Equipment +$50,000 and Cash −$50,000. One asset went up, another went down by the same amount. No liability or equity changed. This is a classic "asset swap."'
      },
      {
        id: 'ch1_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is NOT one of the four basic financial statements?',
        options: ['Statement of Financial Position', 'Statement of Cash Flows', 'Statement of Stockholders\' Equity', 'Statement of Working Capital'],
        correct: 3,
        explanation: 'Correct: D — there is no "Statement of Working Capital" among the four basic financial statements. The four are: Statement of Financial Position (= Balance Sheet), Income Statement, Statement of Stockholders\' Equity, and Statement of Cash Flows. Working capital is a CALCULATION (CA − CL), not a statement.'
      },
      {
        id: 'ch1_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'A company has Net income $4,200M and Average Stockholders\' Equity $28,000M. Compute Return on Equity in %.',
        answer: 15, units: '%', tolerance: 0.01,
        explanation: 'Formula: ROE = Net Income / Average Stockholders\' Equity. Substitute: ROE = 4,200 / 28,000 = 0.15 = 15%. Common mistake: using total assets instead of equity in the denominator (that gives ROA, not ROE), or using end-of-period equity instead of AVERAGE equity.'
      },
      {
        id: 'ch1_q12', type: 'numeric', difficulty: 'medium',
        prompt: 'Total Liabilities $23,287M; Total Equity $8,055M. Compute Debt-to-Equity ratio.',
        answer: 2.89, units: '', tolerance: 0.01,
        explanation: 'Formula: D/E = Total Liabilities / Total Stockholders\' Equity. Substitute: 23,287 / 8,055 = 2.89. This means for every $1 of equity, the company has $2.89 of debt — that\'s a highly leveraged firm. Common mistake: dividing equity by liabilities (gives the inverse).'
      },
      {
        id: 'ch1_q13', type: 'mcq', difficulty: 'medium',
        prompt: 'Which statement reports performance OVER a period rather than at a point in time?',
        options: ['Balance Sheet', 'Statement of Financial Position', 'Income Statement', 'None — all statements are point-in-time'],
        correct: 2,
        explanation: 'Correct: C — Income Statement. The IS shows revenues earned and expenses incurred OVER a period ("for the year ended"). The Balance Sheet (= Statement of Financial Position) is a point-in-time snapshot, so A and B are wrong (they\'re the same statement). D is wrong because the IS, SCF, and Statement of Stockholders\' Equity are all period statements.'
      },
      {
        id: 'ch1_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'A company\'s assets increased by $80,000. Liabilities increased by $30,000 and net income was $40,000 (no dividends or share issuances). Reconcile the change in equity.',
        options: ['Equity increased $50,000 — matches NI plus a $10,000 adjustment', 'Equity increased $50,000 — but NI was only $40,000, so $10,000 must be unaccounted for', 'Equity increased $50,000 (= ΔA − ΔL) — this exceeds NI, suggesting other comprehensive income or share issuance the question denied', 'No reconciliation possible from this data'],
        correct: 2,
        explanation: 'Correct: C. ΔE = ΔA − ΔL = 80,000 − 30,000 = +50,000. Net income only explains $40,000 of that increase, so the missing $10,000 must come from another source — Other Comprehensive Income or a stock issuance. The question said "no dividends or share issuances," so the $10,000 must be OCI. C captures this reasoning correctly.'
      },
      // From MCQ C1 textbook practice pack
      {
        id: 'ch1_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following is a potential cost of the public disclosure of accounting information?',
        options: ['Loss of competitive advantage caused by revealing information to competitors', 'Potential increased regulation and taxes due to reporting excessive profits in politically sensitive industries', 'Raising and then failing to meet the expectations of investors', 'All of the above are potential costs of disclosure'],
        correct: 3,
        explanation: 'Correct: D — all three are real costs of disclosure. Loss of competitive advantage (rivals see your numbers), political/regulatory cost (reporting big profits attracts taxes/regulation), and investor expectation costs are all genuine. Companies weigh these against benefits (lower borrowing rates, better supplier terms) when deciding what to disclose.'
      },
      {
        id: 'ch1_q16', type: 'mcq', difficulty: 'easy',
        prompt: 'Banks that lend money to corporations are considered:',
        options: ['Creditors', 'Shareholders / stockholders', 'Both a and b', 'Neither a nor b'],
        correct: 0,
        explanation: 'Correct: A — banks lending money are CREDITORS. They have a legal claim to be repaid principal plus interest. Shareholders (B) own equity, not debt. So C and D are wrong: a bank lending money is unambiguously a creditor.'
      },
      {
        id: 'ch1_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following expressions is a correct statement of the accounting equation?',
        options: ['Equity + Assets = Liability', 'Assets − (Liabilities + Equity) = 0', 'Liabilities − Equity = Assets', 'Liabilities + Assets = Equity'],
        correct: 1,
        explanation: 'Correct: B — Assets − (Liabilities + Equity) = 0 is just A = L + E rearranged. A is wrong because Equity + Assets ≠ Liabilities. C is wrong because Liabilities − Equity ≠ Assets. D is wrong because Liabilities + Assets ≠ Equity. Only B preserves the fundamental equation.'
      },
      {
        id: 'ch1_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is NOT one of the four basic financial reports?',
        options: ['The balance sheet', 'The income statement', 'The statement of changes in equity', 'The notes to the financial statements'],
        correct: 3,
        explanation: 'Correct: D — notes to the financial statements are NOT one of the four basic statements; they\'re disclosures that ACCOMPANY the statements. The four basic reports are: Balance Sheet, Income Statement, Statement of Changes in Equity, and Statement of Cash Flows. Footnotes are essential but not a "statement."'
      },
      // From Practice Quiz FRA2024
      {
        id: 'ch1_q19', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following would NOT be considered an external user of accounting data?',
        options: ['Taxing authority representative', 'Management', 'Creditors', 'Customers'],
        correct: 1,
        explanation: 'Correct: B — Management is INTERNAL. The other three (tax authorities, creditors, customers) are all external users who consume the firm\'s published financials to make decisions. Internal users (management, board, employees) get detailed managerial-accounting reports that aren\'t published.'
      },
      {
        id: 'ch1_q20', type: 'mcq', difficulty: 'easy',
        prompt: 'A basic assumption of accounting that requires activities of an entity be kept SEPARATE from the activities of its owner is referred to as the:',
        options: ['Stand-alone concept', 'Monetary unit assumption', 'Corporate form of ownership', 'Economic entity assumption'],
        correct: 3,
        explanation: 'Correct: D — Economic Entity Assumption. This says the business is a separate entity from its owner — the owner\'s personal grocery bills don\'t go on the company\'s books. A ("stand-alone") isn\'t a real concept. B (monetary unit) is about reporting in a stable currency. C describes a legal form, not an accounting principle.'
      },
      {
        id: 'ch1_q21', type: 'mcq', difficulty: 'easy',
        prompt: 'The common characteristic possessed by ALL assets is:',
        options: ['Long life', 'Great monetary value', 'Tangible nature', 'Future economic benefit'],
        correct: 3,
        explanation: 'Correct: D — future economic benefit. That\'s the defining characteristic of an asset. Assets need NOT be long-lived (cash is an asset), have great monetary value (a $5 stapler is an asset), or be tangible (patents and goodwill are intangible assets). Only "future benefit" applies to ALL assets.'
      },
      {
        id: 'ch1_q22', type: 'numeric', difficulty: 'hard',
        prompt: 'Stahl Consulting started with total assets €200,000 and total liabilities €50,000. During the year: catering revenues €160,000; expenses €80,000; issued ordinary shares €30,000; paid dividends €50,000. Compute end-of-year equity in €.',
        answer: 210000, units: '€', tolerance: 0.001,
        explanation: 'Step 1: Beg Equity = Assets − Liabilities = 200,000 − 50,000 = €150,000. Step 2: Net Income = Revenues − Expenses = 160,000 − 80,000 = €80,000. Step 3: ΔRE = NI − Dividends = 80,000 − 50,000 = €30,000. Step 4: End Equity = Beg Equity + ΔRE + Share Issuance = 150,000 + 30,000 + 30,000 = €210,000.'
      },
      {
        id: 'ch1_q23', type: 'numeric', difficulty: 'hard',
        prompt: 'Nguyen began the year with equity $651,000. Issued shares $882,000; recorded expenses $2,520,000; paid dividends $168,000. Ending equity $1,593,000. Compute revenue for the year in $.',
        answer: 2748000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: ΔEquity = End − Beg = 1,593,000 − 651,000 = $942,000. Step 2: ΔEquity = NI + Share Issuance − Dividends → 942,000 = NI + 882,000 − 168,000 → NI = $228,000. Step 3: NI = Revenue − Expenses → 228,000 = Rev − 2,520,000 → Rev = $2,748,000.'
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
      },
      {
        title: 'Target — balance sheet snapshot (slide data)',
        problem: `<p>Target Feb 2, 2019: Total assets $41,290M; Total liabilities $29,993M. What is total equity? Then Target Jan 29, 2022: Total assets $53,811M; Gross profit $31,042M (FY2022). Verify the BS identity holds.</p>`,
        solution: `<p>Equity (Feb 2019) = 41,290 − 29,993 = <strong>$11,297M</strong>. Confirms A = L + E.<br>Jan 2022 total assets $53,811M is a snapshot; the $31,042M GP is a period figure (income statement). Different statements report different periodicity.</p>`
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
        explanation: 'Correct: C — Inventory. Quick Ratio = (Cash + Marketable Securities + AR) / Current Liabilities. It deliberately EXCLUDES inventory because inventory is the slowest current asset to convert to cash (you\'d have to sell it first, possibly at a discount). Prepaid expenses are also excluded for the same reason.'
      },
      {
        id: 'ch2_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following items is NOT a non-current asset?',
        options: ['Goodwill', 'Land', 'Inventory', 'Patent'],
        correct: 2,
        explanation: 'Correct: C — Inventory is a CURRENT asset (sold within one year). Goodwill (A), Land (B), and Patents (D) are all long-lived, non-current assets. The trap: inventory "feels" big and lasting, but it\'s classified as current because the operating cycle turns it into cash within a year.'
      },
      {
        id: 'ch2_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Sales €800,000; COGS €450,000; Operating expenses €180,000; Interest €25,000; Tax rate 30%. Compute Net Income in €.',
        answer: 101500, units: '€', tolerance: 0.001,
        explanation: 'Step 1: Gross Profit = Sales − COGS = 800,000 − 450,000 = €350,000. Step 2: EBIT = GP − Operating Expenses = 350,000 − 180,000 = €170,000. Step 3: EBT = EBIT − Interest = 170,000 − 25,000 = €145,000. Step 4: Tax = 145,000 × 30% = €43,500. Step 5: NI = 145,000 − 43,500 = €101,500.'
      },
      {
        id: 'ch2_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is classified as a CURRENT liability?',
        options: ['Bonds payable due in 5 years', '20-year mortgage', 'Unearned revenue earnable within 12 months', 'Treasury shares'],
        correct: 2,
        explanation: 'Correct: C — Unearned revenue earnable within 12 months IS a current liability (the company owes the customer the service/goods, deliverable in <1 year). A and B are LONG-TERM liabilities (due in 5+ years). D — treasury shares are contra-EQUITY, not a liability at all.'
      },
      {
        id: 'ch2_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Cash 30; AR 70; Inventory 100; Prepaid 10; AP 60; Accrued 20; Long-term Debt 200. Compute working capital in €.',
        answer: 130, units: '€', tolerance: 0.001,
        explanation: 'Formula: Working Capital = Current Assets − Current Liabilities. Step 1: CA = Cash 30 + AR 70 + Inventory 100 + Prepaid 10 = 210. Step 2: CL = AP 60 + Accrued 20 = 80 (long-term debt is NOT current). Step 3: WC = 210 − 80 = €130. Common mistake: including the €200 long-term debt as a current liability.'
      },
      {
        id: 'ch2_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company has the following: Cash 50; AR 100; Inventory 200; Prepaid 20; AP 80; Accrued 40. Compute the Quick Ratio.',
        options: ['1.25', '2.25', '3.08', '3.25'],
        correct: 0,
        explanation: 'Correct: A — 1.25. Quick Ratio = (Cash + Marketable Sec + AR) / Current Liabilities = (50 + 100) / (80 + 40) = 150 / 120 = 1.25. Trap: option B (2.25) includes inventory in the numerator — that gives the CURRENT ratio, not the quick ratio. Always exclude inventory and prepaid for QR.'
      },
      {
        id: 'ch2_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT a criterion for liability recognition?',
        options: ['The obligation is probable', 'The amount is reasonably estimable', 'The transaction has occurred', 'The obligation is more than $1,000'],
        correct: 3,
        explanation: 'Correct: D — there is no $1,000 minimum threshold for liability recognition. The three criteria are: (1) the obligation is probable, (2) the amount is reasonably estimable, (3) the past transaction has already occurred. Materiality is a separate issue, but no specific dollar floor exists.'
      },
      {
        id: 'ch2_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Current ratio = 2.5. Current liabilities €180,000. Compute current assets in €.',
        answer: 450000, units: '€', tolerance: 0.001,
        explanation: 'Formula: Current Ratio = Current Assets / Current Liabilities. Rearrange: CA = CR × CL = 2.5 × 180,000 = €450,000. Common mistake: dividing instead of multiplying (giving 72,000), or computing working capital instead of total CA.'
      },
      {
        id: 'ch2_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is most appropriately measured at FAIR VALUE rather than historical cost on the balance sheet?',
        options: ['Land held for own use', 'A patent purchased 5 years ago', 'Marketable securities held for trading', 'Inventory of finished goods'],
        correct: 2,
        explanation: 'Correct: C — trading marketable securities are reported at FAIR VALUE, with changes flowing through P&L each period. Land (A) is at historical cost (not depreciated). Patents (B) are at amortized historical cost. Inventory (D) is at lower of cost or NRV. Only marketable securities trade in active markets where fair value is reliable.'
      },
      {
        id: 'ch2_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'In a multi-step income statement, INTEREST EXPENSE is classified as:',
        options: ['Operating expense (always)', 'Cost of goods sold', 'Nonoperating expense (deducted to compute pre-tax income)', 'A direct reduction of equity'],
        correct: 2,
        explanation: 'Correct: C — Interest is NONOPERATING. In a multi-step income statement, interest expense appears BELOW operating income (EBIT) and is deducted to reach pre-tax income. It\'s not part of the main business operations — it\'s the cost of financing. So A is wrong (not operating). B is wrong (interest ≠ COGS). D is wrong (interest hits the income statement, not equity directly).'
      },
      {
        id: 'ch2_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Target FY2022: Cash & equivalents $2,229M; Short-term investments $0; AR $1,310M; Inventory $13,902M; Prepaid $1,394M; Other CA $2,738M. Current liabilities $21,747M. Compute the Quick Ratio (use Cash + AR only — Target reports no marketable securities).',
        answer: 0.16, units: '', tolerance: 0.01,
        explanation: 'Formula: Quick Ratio = (Cash + Marketable Sec + AR) / Current Liabilities. Substitute: QR = (2,229 + 1,310) / 21,747 = 3,539 / 21,747 = 0.16. Note: Target reports no marketable securities, so use Cash + AR only. A QR of 0.16 means Target has only $0.16 of liquid assets per $1 of current liabilities — typical for a mass retailer that relies on inventory turnover.'
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
      },
      {
        title: 'Jana Juice — May 2019 income statement (pre-adjustments)',
        problem: `<p>Jana Juice May transactions yield: cash sale $2,400 + credit sale $2,900 = $5,300 sales; COGS $1,300 (= $600 + $700); operating expenses $2,900 (advertising + supplies + wages + rent); interest expense $40 on the $4,000 loan. Compute May NI.</p>`,
        solution: `<p>Sales 5,300 − COGS 1,300 = GP <strong>$4,000</strong>.<br>Operating income = 4,000 − 2,900 = <strong>$1,100</strong>.<br>Pre-tax income = 1,100 − 40 = $1,060.<br>(Slide shows pre-tax used as final NI figure $1,060 since May is intra-period; tax accrued at June year-end.)</p>`
      },
      {
        title: 'Jana Juice — June 30 balance sheet check',
        problem: `<p>After all June adjusting entries (NI $1,414; dividend $400 declared), Jana Juice\'s books show: Common Stock $10,000; ending RE $1,974. Confirm the balance sheet identity.</p>`,
        solution: `<p>Total equity = 10,000 + 1,974 = <strong>$11,974</strong>.<br>Slide shows total assets <strong>$28,650</strong> = total liabilities <strong>$16,676</strong> + equity <strong>$11,974</strong>. ✓<br>RE roll-forward: Beg RE 960 + NI 1,414 − Div 400 = $1,974.</p>`
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
        explanation: 'Correct: D — all three are true. (A) Adjusting entries enforce the revenue and matching principles. (B) IFRS and US GAAP both require accrual accounting, which requires adjusting entries. (C) Adjustments include both accruals (cash hasn\'t moved yet) and deferrals (cash already moved). All three statements describe what adjusting entries do.'
      },
      {
        id: 'ch3_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Ron services a car on July 31. Customer picks up August 1 and mails payment August 5; Ron receives the check August 6. When is the revenue earned?',
        options: ['July 31', 'August 1', 'August 5', 'August 6'],
        correct: 0,
        explanation: 'Correct: A — July 31. Under accrual accounting, revenue is earned WHEN THE SERVICE IS PERFORMED, regardless of when cash arrives. The car was serviced on July 31, so revenue is recognized that day. Pickup, mailing, and receipt of the check are just collection events that don\'t affect when revenue is earned.'
      },
      {
        id: 'ch3_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Which adjustment requires DECREASING the liabilities reported on the balance sheet?',
        options: ['A company uses $400 of supplies during the year', 'Recording $400 of depreciation on equipment', 'Earning $400 of revenue collected at the beginning of the year', 'Recording $400 of wages earned that will be paid next year'],
        correct: 2,
        explanation: 'Correct: C — earning previously-collected revenue. The original entry was Dr Cash / Cr Unearned Revenue (a liability). When the service is performed, you reduce the liability: Dr Unearned Rev / Cr Revenue. Liability ↓. Options A and B (using supplies, depreciation) reduce ASSETS, not liabilities. D INCREASES a liability (Wages Payable). Only C decreases a liability.'
      },
      {
        id: 'ch3_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'On May 1, paid $36,000 for a 3-year insurance policy and recorded as Prepaid Insurance. Compute insurance expense for the year ending December 31 in $.',
        answer: 8000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Insurance Expense = (Months consumed / Total months) × Total premium. Months consumed = May 1 to Dec 31 = 8 months. Total months = 36. Insurance Expense = (8/36) × 36,000 = 8 × 1,000 = $8,000. Common mistake: using 12 months consumed (forgetting the policy started May 1, not Jan 1).'
      },
      {
        id: 'ch3_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg supplies $2,400; purchases $9,800; ending count $1,900. Compute supplies expense for the year in $.',
        answer: 10300, units: '$', tolerance: 0.001,
        explanation: 'Formula: Supplies Expense = Beginning Supplies + Purchases − Ending Supplies. Substitute: 2,400 + 9,800 − 1,900 = $10,300. The logic: this is what was used. Note this matches the COGS formula structure — beginning + additions − ending = consumed.'
      },
      {
        id: 'ch3_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Failure to record an accrued wages expense at year-end will:',
        options: ['Overstate assets and understate liabilities', 'Overstate net income and understate liabilities', 'Understate net income and overstate liabilities', 'Have no effect on the financial statements'],
        correct: 1,
        explanation: 'Correct: B — overstate net income and understate liabilities. Without the entry: wages expense is too low → NI is too high → equity too high. Wages payable is missing → liabilities too low. Trap: option A says "overstate ASSETS" but assets aren\'t affected by an unrecorded wage accrual.'
      },
      {
        id: 'ch3_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'A 6-month, 8% note payable for $30,000 was signed November 1, 2024. How much interest expense should be accrued at December 31, 2024 in $?',
        answer: 400, units: '$', tolerance: 0.001,
        explanation: 'Formula: Accrued Interest = Principal × Annual Rate × (Months/12). Months from Nov 1 to Dec 31 = 2 months. Substitute: 30,000 × 8% × 2/12 = 30,000 × 0.0133 = $400. Common mistake: using 6/12 (the full note term) or 1/12 (only December).'
      },
      {
        id: 'ch3_q8', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is an example of an ACCRUED revenue?',
        options: ['Cash received in advance for services to be performed next month', 'Interest earned on a bond but not yet received', 'Sale of inventory paid in cash at point of sale', 'A customer deposit for a custom order'],
        correct: 1,
        explanation: 'Correct: B — interest earned but not yet received. Accrued revenue means: revenue has been EARNED (the service was provided / time has passed) but cash hasn\'t been received yet. Interest accrues over time, so by year-end you\'ve earned some interest the borrower hasn\'t paid. A describes UNEARNED (deferred) revenue. C and D involve cash at the point of sale.'
      },
      {
        id: 'ch3_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'A consulting firm collected $48,000 on April 1 for a 12-month engagement and credited Unearned Revenue. What balance should appear in Unearned Revenue at December 31 in $?',
        answer: 12000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Unearned balance at year-end = Original cash − Revenue earned to date. Months earned = April 1 to Dec 31 = 9 months. Monthly revenue = 48,000 / 12 = $4,000. Earned = 9 × 4,000 = $36,000. Unearned remaining = 48,000 − 36,000 = $12,000. Common mistake: computing earned amount instead of unearned (gives 36,000).'
      },
      {
        id: 'ch3_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is the normal balance for these accounts (in order): Asset, Revenue, Treasury Stock, Liability?',
        options: ['Debit, Credit, Debit, Credit', 'Credit, Debit, Credit, Debit', 'Debit, Debit, Credit, Credit', 'Debit, Credit, Credit, Debit'],
        correct: 0,
        explanation: 'Correct: A — Debit, Credit, Debit, Credit. Asset = debit (normal balance). Revenue = credit. Treasury Stock = debit (it\'s a contra-equity, so it carries a debit balance even though it sits in equity). Liability = credit. Memorize the mnemonic DEAD CLER: Debits Expand Assets and Dividends; Credits expand Liabilities, Equity, and Revenues.'
      },
      {
        id: 'ch3_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Jana Juice June 2019: equipment cost $10,200; useful life 5 years; no salvage. Compute the MONTHLY depreciation expense in $.',
        answer: 170, units: '$', tolerance: 0.001,
        explanation: 'Formula: Monthly Depreciation = Cost / (Useful Life in years × 12 months). Substitute: 10,200 / (5 × 12) = 10,200 / 60 = $170/month. Or equivalently: Annual = 10,200/5 = 2,040, then /12 = $170. Slide-confirmed answer.'
      },
      {
        id: 'ch3_q12', type: 'numeric', difficulty: 'medium',
        prompt: 'Pre-tax income $2,020. Tax rate 30%. Compute net income in $.',
        answer: 1414, units: '$', tolerance: 0.001,
        explanation: 'Formula: NI = Pre-tax Income × (1 − Tax Rate). Substitute: 2,020 × (1 − 0.30) = 2,020 × 0.70 = $1,414. Or step-by-step: Tax = 2,020 × 0.30 = $606, then NI = 2,020 − 606 = $1,414. Either method works.'
      },
      // From MCQ C3 textbook practice pack
      {
        id: 'ch3_q13', type: 'mcq', difficulty: 'easy',
        prompt: 'A journal entry that contains more than two accounts is called:',
        options: ['A posted journal entry', 'An adjusting journal entry', 'An erroneous journal entry', 'A compound journal entry'],
        correct: 3,
        explanation: 'Correct: D — compound journal entry. A compound entry has 3 or more accounts (e.g., Dr Cash, Dr AR / Cr Sales, Cr Tax Payable). "Posted" (A) just means transferred to the ledger. "Adjusting" (B) describes the timing/purpose, not the structure. "Erroneous" (C) is wrong unless the entry is incorrect.'
      },
      {
        id: 'ch3_q14', type: 'mcq', difficulty: 'easy',
        prompt: 'Posting refers to the process whereby journal entry information is transferred from:',
        options: ['Journal to general ledger accounts', 'General ledger accounts to a journal', 'Source documents to a journal', 'A journal to source documents'],
        correct: 0,
        explanation: 'Correct: A — Journal to general ledger accounts. The accounting cycle: source documents → JOURNAL (chronological record) → POST → LEDGER (account-by-account). Posting is the act of transferring journal entries into the individual ledger accounts. The other options reverse this flow.'
      },
      {
        id: 'ch3_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is an example of an ADJUSTING entry?',
        options: ['Recording the purchase of supplies on account', 'Recording depreciation expense on a truck', 'Recording cash received from customers for services rendered', 'Recording the cash payment of wages to employees'],
        correct: 1,
        explanation: 'Correct: B — depreciation expense. Depreciation is a deferred-expense adjusting entry: it allocates the cost of a long-lived asset (a prepaid resource) to expense over time. A (purchasing supplies on account), C (cash from customers), and D (paying wages) are all routine cash/credit transactions, not adjusting entries.'
      },
      {
        id: 'ch3_q16', type: 'numeric', difficulty: 'medium',
        prompt: 'Equipment placed in service Jan 1, 2013 cost $20,000 with no salvage and an 8-year life. Compute ACCUMULATED depreciation at end of fiscal year 2015 (3rd year) in $ using straight-line.',
        answer: 7500, units: '$', tolerance: 0.001,
        explanation: 'Formula: Annual SL Depreciation = (Cost − Salvage) / Useful Life. Substitute: (20,000 − 0) / 8 = $2,500/year. After 3 years (2013, 2014, 2015): Accumulated Depreciation = 3 × 2,500 = $7,500. Common mistake: forgetting to multiply by 3 years (gives 2,500 only).'
      },
      {
        id: 'ch3_q17', type: 'numeric', difficulty: 'hard',
        prompt: 'Custom Cakes received $24,000 in customer deposits during November. Unearned Revenue balance was $4,000 at start of November and $6,000 at end. How much revenue did Custom Cakes recognize during November in $?',
        answer: 22000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Beg Unearned + Cash Received − End Unearned = Revenue Recognized. Substitute: 4,000 + 24,000 − 6,000 = $22,000. Logic: the change in the Unearned Revenue liability tells you how much was earned vs. newly collected. Common mistake: just using the cash collected ($24,000) — but some of it is still owed.'
      },
      // From Final Exam 2025 V1 (Vivid adjusting entries)
      {
        id: 'ch3_q18', type: 'numeric', difficulty: 'hard',
        prompt: 'Vivid Corp Dec 31 adjusting entries: Depreciation $45,000; Recorded AR $29,000; Accrued expenses $14,000; Used insurance $5,000 (was prepaid); Rent revenue earned $3,000 (was unearned). Total assets PRIOR to entries = $430,000. Compute total assets AFTER the adjusting entries in $.',
        answer: 409000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Identify which adjustments hit ASSETS. Depreciation reduces equipment (−$45K). Recording AR adds to AR (+$29K). Used insurance reduces prepaid (−$5K). Accrued expenses and rent earned hit liabilities/equity, NOT assets. Step 2: Net asset change = −45 + 29 − 5 = −$21K. Step 3: End assets = 430,000 − 21,000 = $409,000.'
      },
      // From Practice Quiz FRA2024
      {
        id: 'ch3_q19', type: 'mcq', difficulty: 'medium',
        prompt: 'Under accrual-basis accounting:',
        options: ['Cash must be received before revenue is recognized', 'Net income is calculated by matching cash outflows against cash inflows', 'Events that change a company\'s financial statements are recognized in the period they occur rather than in the period in which cash is paid or received', 'The ledger accounts must be adjusted to reflect a cash basis of accounting before financial statements are prepared under IFRS'],
        correct: 2,
        explanation: 'Correct: C — accrual records events when they OCCUR (revenue earned, expense incurred), not when cash moves. Required by IFRS and US GAAP. A is wrong (accrual records BEFORE cash if needed). B describes cash basis. D is backwards: accrual books are NOT converted to cash basis under IFRS.'
      },
      {
        id: 'ch3_q20', type: 'mcq', difficulty: 'easy',
        prompt: 'If an adjustment is needed for unearned revenues, the:',
        options: ['Liability and related revenue are overstated before adjustment', 'Liability and related revenue are understated before adjustment', 'Liability is overstated and the related revenue is understated before adjustment', 'Liability is understated and the related revenue is overstated before adjustment'],
        correct: 2,
        explanation: 'Correct: C — liability overstated, revenue understated. The original cash receipt was Dr Cash / Cr Unearned Revenue (liability). Before the adjustment, that liability sits there even though some/all has been earned. Pre-adjustment: liability is too high (still includes earned portion); revenue is too low (hasn\'t been recognized).'
      },
      {
        id: 'ch3_q21', type: 'mcq', difficulty: 'medium',
        prompt: 'If a company FAILS to make an adjusting entry to record supplies expense, then:',
        options: ['Equity will be understated', 'Expenses will be understated', 'Assets will be understated', 'Net income will be understated'],
        correct: 1,
        explanation: 'Correct: B — expenses understated. Walk through it: supplies were used but no expense was recorded → expenses too low → NI too high → equity too high → assets (supplies) too high. Among the choices, only B is correct. A says equity understated (wrong — it\'s overstated). C says assets understated (wrong — overstated). D says NI understated (wrong — overstated).'
      },
      {
        id: 'ch3_q22', type: 'mcq', difficulty: 'hard',
        prompt: 'Iron Inn collected €150,000 cash in December for resort reservations and credited Unearned Revenue. By Dec 31 it had earned 1/3 (the rest in January). The required Dec 31 adjusting entry impacts the BALANCE SHEET by:',
        options: ['Increased Equity €100,000', 'Decreased Liabilities €50,000', 'Increased Assets €150,000', 'Decreased Equity €50,000'],
        correct: 1,
        explanation: 'Correct: B — liabilities decrease €50,000. Step 1: 1/3 × €150,000 = €50,000 was earned by year-end. Step 2: Adjusting entry: Dr Unearned Revenue 50,000 / Cr Revenue 50,000. Step 3: Effect — liability ↓ €50,000; revenue ↑ €50,000 → equity ↑ €50,000. B describes the liability side correctly. A and D have wrong signs/amounts; C ignores that no new asset is created.'
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
        body: `<p>The converged standard <strong>ASC 606 / IFRS 15</strong> became effective for public companies in January 2018.</p>
        <ol>
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
      },
      {
        title: 'Mouser, Inc. — full aging method problem (slide)',
        problem: `<p>Mouser\'s aging analysis shows specific %-of-uncollectible per bucket totaling required allowance. During 2024: $12,512 of specific accounts written off. Beginning Allowance balance: $11,880. Required ending Allowance per aging analysis = $14,800. Compute (A) bad debt expense and (B) ending NRV given ending gross AR of $510,000.</p>`,
        solution: `<p>Allowance T-account: Beg 11,880 (credit) − Write-offs 12,512 = (632) DEBIT balance pre-adjustment.<br>(A) Bad Debt Expense = Required ending − Existing balance = 14,800 − (−632) = <strong>$15,432</strong>.<br>(B) End NRV = Gross AR − Ending Allowance = 510,000 − 14,800 = <strong>$495,200</strong>.</p>`
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
        explanation: 'Correct: D — Cash (net) realizable value. NRV = Gross AR − Allowance for Doubtful Accounts. It\'s the amount you actually expect to collect. "Gross realizable" and "gross cash value" aren\'t standard terms. "Allowance value" is just the doubtful-accounts estimate, not the net.'
      },
      {
        id: 'ch4_q2', type: 'mcq', difficulty: 'easy',
        prompt: 'Sales revenue:',
        options: ['May be recorded before cash is collected', 'Always equals cash collections in a month', 'Only results from credit sales', 'Is only recorded after cash is collected'],
        correct: 0,
        explanation: 'Correct: A — sales revenue may be recorded BEFORE cash is collected. Under accrual accounting, revenue is recognized when EARNED (performance obligation satisfied), regardless of cash timing. Credit sales are the classic example: book the sale today, collect cash later. B, C, D all incorrectly tie revenue to cash collection.'
      },
      {
        id: 'ch4_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Unearned Rent Revenue is:',
        options: ['A contra account to Rent Revenue', 'Reported as a current liability', 'A revenue account', 'Debited when rent is received in advance'],
        correct: 1,
        explanation: 'Correct: B — current liability. Cash received in advance creates an obligation to deliver goods/services → liability. "Unearned" because the company hasn\'t earned it yet. Typically classified as current (deliverable within 1 year). It\'s NOT a contra account (A), revenue (C), or debited (D — credited when received).'
      },
      {
        id: 'ch4_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Gross AR €420,000. Aging estimates €18,000 will be uncollectible. Allowance currently has a credit balance of €4,500. Compute Bad Debt Expense in € (no write-offs occurred).',
        answer: 13500, units: '€', tolerance: 0.001,
        explanation: 'Formula (Aging method): Bad Debt Expense = Required Ending Allowance − Existing Allowance Balance. Substitute: BDE = 18,000 − 4,500 = €13,500. Common mistake: using €18,000 (the full required allowance) without subtracting what\'s already there. Also: this assumes no write-offs occurred (as stated).'
      },
      {
        id: 'ch4_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'After recording bad debt expense above, a specific customer account of €2,800 is written off. Compute the NRV of receivables AFTER the write-off in €.',
        answer: 402000, units: '€', tolerance: 0.001,
        explanation: 'Formula: NRV = Gross AR − Allowance. Before write-off: NRV = 420,000 − 18,000 = €402,000. The write-off entry (Dr Allowance 2,800 / Cr AR 2,800) reduces BOTH gross AR and allowance by €2,800 each. After: 417,200 − 15,200 = €402,000. NRV is UNCHANGED — that\'s a key concept. The bad-debt expense was already taken when the allowance was estimated.'
      },
      {
        id: 'ch4_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'On September 1, accepted a 4-month, 6%, $25,000 note receivable. Compute interest revenue accrued at December 31 in $.',
        answer: 500, units: '$', tolerance: 0.001,
        explanation: 'Formula: Interest = Principal × Rate × (Time/12). Substitute: 25,000 × 6% × 4/12 = $500. Time = Sept 1 to Dec 31 = 4 months. Common mistake: using full 6 months (the note\'s term, not the period accrued) or annual interest of $1,500.'
      },
      {
        id: 'ch4_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the allowance method, the journal entry to write off a specific uncollectible account:',
        options: ['Decreases NI and decreases assets', 'Decreases NI but does not affect total assets', 'Has no effect on NI or net realizable value of receivables', 'Increases bad debt expense and decreases the allowance account'],
        correct: 2,
        explanation: 'Correct: C — no effect on NI or NRV. The write-off entry (Dr Allowance / Cr AR) reduces gross AR and allowance by equal amounts, leaving NRV unchanged. No expense is recorded — the bad debt expense was recorded earlier when the allowance was estimated. A and B are wrong because there\'s no NI effect. D describes recording bad debt expense, not write-off.'
      },
      {
        id: 'ch4_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Net credit sales €1,800,000. % of sales method estimates 1.5% uncollectible. Allowance has a DEBIT balance of €3,000. Compute Bad Debt Expense in €.',
        answer: 27000, units: '€', tolerance: 0.001,
        explanation: 'Formula (% of sales method): Bad Debt Expense = Net Credit Sales × %. Substitute: 1,800,000 × 1.5% = €27,000. The existing allowance balance is IGNORED under the % of sales method (this is the income-statement approach). Common mistake: trying to add/subtract the existing balance (that\'s the AGING method, not % of sales).'
      },
      {
        id: 'ch4_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Net credit sales €4,500,000. Beg AR €380,000. End AR €420,000. Compute Days Sales Outstanding (DSO) rounded to nearest day.',
        answer: 32, units: 'days', tolerance: 0.05,
        explanation: 'Step 1: Average AR = (380,000 + 420,000) / 2 = €400,000. Step 2: AR Turnover = Net Credit Sales / Avg AR = 4,500,000 / 400,000 = 11.25. Step 3: DSO = 365 / Turnover = 365 / 11.25 = 32.4 ≈ 32 days. Common mistake: using END AR instead of AVERAGE AR.'
      },
      {
        id: 'ch4_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Haskell contract: $8,000,000; total estimated cost $6,000,000. Year 1 costs incurred $2,400,000. Compute Year 1 revenue under percentage-of-completion in $.',
        answer: 3200000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Year 1 Revenue = (Costs to Date / Total Estimated Costs) × Total Contract. Substitute: % complete = 2,400,000 / 6,000,000 = 40%. Year 1 Revenue = 40% × 8,000,000 = $3,200,000. Common mistake: applying 40% to the GROSS PROFIT ($2M) instead of the contract price.'
      },
      {
        id: 'ch4_q11', type: 'mcq', difficulty: 'medium',
        prompt: 'Which earnings-management tactic involves pushing extra inventory to customers near period-end to inflate sales?',
        options: ['Cookie jar reserve', 'Big bath', 'Channel stuffing', 'Income smoothing'],
        correct: 2,
        explanation: 'Correct: C — Channel stuffing. This means pushing extra inventory to customers (offering deep discounts, easy returns) right before period end to inflate current-period revenue. "Cookie jar" (A) is over-reserving in good years to release in bad years. "Big bath" (B) is taking a huge one-time loss in an already-bad period. "Income smoothing" (D) is the broader category.'
      },
      {
        id: 'ch4_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Pledging vs Factoring of accounts receivable. Which is correct?',
        options: ['Pledging removes AR; Factoring keeps AR on books', 'Pledging keeps AR on books; Factoring removes AR', 'Both remove AR from the books', 'Both keep AR on the books'],
        correct: 1,
        explanation: 'Correct: B — pledging keeps AR on books; factoring removes AR. Pledging = using AR as COLLATERAL for a loan (you still own them). Factoring = SELLING the AR to a third party (you no longer own them, so they leave the balance sheet). The trap is just remembering which is which.'
      },
      {
        id: 'ch4_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'A 30-year, $21M building has been depreciated for 12 years using straight-line (no salvage). Useful life is now extended to 36 years. Compute the new annual depreciation expense in $ (slide-style change-in-estimate).',
        answer: 525000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Original annual depreciation = $21M / 30 = $700,000. Step 2: Book Value after 12 yrs = 21M − (12 × 700K) = 21M − 8.4M = $12.6M. Step 3: Remaining new life = 36 − 12 = 24 years. Step 4: New annual depreciation = 12.6M / 24 = $525,000. Change in estimate is treated PROSPECTIVELY (no restatement of past).'
      },
      // From MCQ C4 textbook practice pack
      {
        id: 'ch4_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'Which best describes the condition(s) for revenue recognition from a contract with a customer?',
        options: ['Cash payment must have been received from the customer', 'All performance obligations must be fulfilled', 'At least one of the contract\'s performance obligations must be fulfilled', 'There must be no uncertainty about the amount to be received'],
        correct: 2,
        explanation: 'Correct: C — at least one performance obligation must be fulfilled. Under IFRS 15/ASC 606, revenue is recognized as EACH performance obligation is satisfied — one at a time. A is wrong (cash receipt is irrelevant under accrual). B is too strict (you don\'t need ALL obligations satisfied at once). D is wrong (variable consideration is allowed).'
      },
      {
        id: 'ch4_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'When multiple products or services are bundled and sold for one price, the revenue should be:',
        options: ['Recognised when the bundle is sold', 'Allocated among the distinct performance obligations and recognised as each is fulfilled', 'Deferred until all elements are delivered', 'Recognised when the customer pays cash'],
        correct: 1,
        explanation: 'Correct: B — allocate among distinct performance obligations and recognize each as fulfilled. This is Steps 4-5 of IFRS 15: allocate price by stand-alone selling price, then recognize as each obligation is satisfied. A is wrong (don\'t recognize all at once). C is wrong (don\'t defer everything). D is wrong (cash payment is irrelevant).'
      },
      {
        id: 'ch4_q16', type: 'mcq', difficulty: 'hard',
        prompt: 'A construction company contracts to build a production facility for a customer. It should recognize revenue as construction progresses ONLY if:',
        options: ['It receives advance cash payments', 'It retains title until completion', 'There are no contingent payments', 'Title transfers to the customer as the project progresses'],
        correct: 3,
        explanation: 'Correct: D — title transfers as construction progresses. Recognizing revenue OVER TIME requires control to transfer to the customer over time. Title transferring as work progresses is one indicator. Cash payments (A), retaining title (B — that\'s the OPPOSITE), and absence of contingencies (C) don\'t determine timing.'
      },
      {
        id: 'ch4_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'When management selectively excludes some revenues, expenses, gains, and losses from earnings calculated using GAAP, it is an example of:',
        options: ['Income smoothing', 'Big bath accounting', 'Cookie jar accounting', 'Non-IFRS or pro forma earnings'],
        correct: 3,
        explanation: 'Correct: D — Pro forma / non-GAAP earnings. When management excludes certain GAAP items to present "adjusted earnings," that\'s pro forma. Useful for legitimate one-time-item adjustments, but a red flag if used to mask poor performance. The other options (A, B, C) are different earnings-management tactics.'
      },
      {
        id: 'ch4_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'If bad debts expense is determined by estimating uncollectible AR, the entry to record the WRITE-OFF of a specific uncollectible account would DECREASE:',
        options: ['Allowance for uncollectible accounts', 'Net income', 'Net book value of accounts receivable', 'Bad debts expense'],
        correct: 0,
        explanation: 'Correct: A — Allowance for uncollectible accounts. The write-off entry is Dr Allowance / Cr AR. Both gross AR and the allowance DECREASE by the same amount. Net AR (NRV) is unchanged. Net income (B) doesn\'t change (no expense is recorded). Net book value of AR (C) is unchanged. Bad debts expense (D) is unchanged (it was recorded when the allowance was set up).'
      },
      {
        id: 'ch4_q19', type: 'mcq', difficulty: 'hard',
        prompt: 'If management intentionally UNDERESTIMATES bad debts expense, then net income is:',
        options: ['Overstated and assets are understated', 'Understated and assets are overstated', 'Understated and assets are understated', 'Overstated and assets are overstated'],
        correct: 3,
        explanation: 'Correct: D — both NI and assets are OVERSTATED. Walk through it: underestimated bad debts → expense too low → NI too high. Allowance too low → net AR (gross AR − allowance) too high → assets too high. Both go the SAME direction (overstated). Trap: choices A and C have them moving opposite ways.'
      },
      // From Practice Quiz FRA2024 (allowance method)
      {
        id: 'ch4_q20', type: 'numeric', difficulty: 'hard',
        prompt: 'Hahn Co uses % of receivables method. Year-end AR $1,500,000. Allowance has $2,000 DEBIT balance. Estimates 1% of AR will be uncollectible. Compute the bad debt expense to record in $.',
        answer: 17000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Required ending allowance = 1% × 1,500,000 = $15,000 (CREDIT balance). Step 2: Current balance is $2,000 DEBIT (the wrong direction). Step 3: To go from $2,000 debit to $15,000 credit requires a credit of $17,000. Step 4: Bad Debt Expense = $17,000. The trap: forgetting to add the $2,000 debit (which acts like a negative starting allowance).'
      },
      {
        id: 'ch4_q21', type: 'numeric', difficulty: 'medium',
        prompt: 'Cash realizable value of AR was $33,000 BEFORE the write-off of a $2,000 account. Compute the cash realizable value AFTER the write-off in $.',
        answer: 33000, units: '$', tolerance: 0.001,
        explanation: 'Formula: NRV (after write-off) = NRV (before). Before: $33,000. The write-off entry reduces gross AR and allowance by $2,000 each — they cancel. NRV is UNCHANGED at $33,000. Common mistake: subtracting $2,000 (giving $31,000) — but the write-off was already anticipated when the allowance was set up.'
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
      },
      {
        title: 'What drives changes in GPM and turnover?',
        body: `<p><strong>GPM moves because of:</strong> stale product line; change in product mix; new competitors; macro decline; overstocked inventory; pricing changes.</p>
        <p><strong>Inventory turnover moves because of:</strong> mix shift to higher/lower margin products; excessive purchases; missed demand trends; increased competition; promotion changes; manufacturing efficiency improvements.</p>
        <p>Higher turnover is usually good, but read it together with GPM — a company "selling fast" by deeply discounting is a different story than one selling fast at full price.</p>`
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
      },
      {
        title: 'VTech — illustrative inventory ratios (slide)',
        problem: `<p>VTech: Inventory $372.6M at Mar 31, 2020. Inventory turnover ~4.0×. Compute DIO. Comment on the GPM trend if it dropped from ~33% (2018) to ~30% (2019-20).</p>`,
        solution: `<p>DIO = 365 / 4.0 ≈ <strong>91 days</strong> (vs ~89 days in 2018-19 → slowing).<br>GPM ↓ 33% → 30% suggests competitive pressure, mix shift, or input-cost inflation outpacing pricing power.</p>`
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
        explanation: 'Formula: COGS = Beginning Inventory + Purchases − Ending Inventory. Substitute: 8,000 + 28,400 − 9,600 = $26,800. The simplest core inventory equation — memorize it. The logic: what you started with, plus what you bought, minus what\'s left = what was sold.'
      },
      {
        id: 'ch5_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'In rising prices, the inventory method that produces the balance sheet inventory CLOSEST to current cost is:',
        options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All produce the same value'],
        correct: 0,
        explanation: 'Correct: A — FIFO. In rising prices, FIFO assigns the OLDEST (cheapest) costs to COGS and leaves the NEWEST (most expensive) units in ending inventory. So the balance sheet inventory under FIFO most closely matches today\'s replacement cost. LIFO does the opposite. Average is in between.'
      },
      {
        id: 'ch5_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'In rising prices, which method produces the LOWEST net income?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'All produce the same NI'],
        correct: 1,
        explanation: 'Correct: B — LIFO. In rising prices, LIFO assigns the NEWEST (highest) costs to COGS → highest COGS → lowest gross profit → lowest NI. This is exactly why US firms use LIFO: lower NI = lower taxes = more cash kept. FIFO does the opposite (highest NI). Weighted-average is in between.'
      },
      {
        id: 'ch5_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg 100 @ €5; Purchase 1: 150 @ €6; Purchase 2: 200 @ €8. Sold 350. Compute COGS under FIFO in €.',
        answer: 2300, units: '€', tolerance: 0.001,
        explanation: 'FIFO method: oldest costs are assigned to COGS first. Sold 350 units. Take 100 @ €5 = 500, then 150 @ €6 = 900, then need 100 more from the €8 batch = 800. COGS = 500 + 900 + 800 = €2,300. Common mistake: applying €8 to all 350 sold (gives 2,800).'
      },
      {
        id: 'ch5_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Same data — compute COGS under WEIGHTED-AVERAGE in €.',
        answer: 2333.33, units: '€', tolerance: 0.005,
        explanation: 'Step 1: Total cost of goods available = 100×5 + 150×6 + 200×8 = 500 + 900 + 1,600 = €3,000. Step 2: Total units = 100 + 150 + 200 = 450. Step 3: Avg cost per unit = 3,000 / 450 = €6.6667. Step 4: Ending inventory (100 units left) = 100 × 6.6667 = €666.67. Step 5: COGS = 3,000 − 666.67 = €2,333.33.'
      },
      {
        id: 'ch5_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, inventory is reported at:',
        options: ['Historical cost only', 'Lower of cost or net realizable value (NRV)', 'Lower of cost or replacement cost', 'Fair value with gains/losses to P&L'],
        correct: 1,
        explanation: 'Correct: B — Lower of cost or NRV (LCNRV). Under IFRS, inventory is reported at the LOWER of historical cost or NRV (= selling price − costs to complete & sell). If NRV falls below cost, write down to NRV. A is wrong (no historical-cost only). C is the OLD US GAAP rule (replaced). D — fair value with P&L is for marketable securities, not inventory.'
      },
      {
        id: 'ch5_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'COGS €960,000. Beg Inventory €120,000; ending €100,000. Compute inventory turnover (in times).',
        answer: 8.73, units: 'times', tolerance: 0.01,
        explanation: 'Step 1: Average Inventory = (120,000 + 100,000) / 2 = €110,000. Step 2: Inventory Turnover = COGS / Avg Inv = 960,000 / 110,000 = 8.73 times. Common mistake: using ending inventory only (gives 9.6) or beginning only (gives 8.0) — must AVERAGE.'
      },
      {
        id: 'ch5_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Cost = $50,000. NRV = $42,000. Under IFRS, by how much is inventory written down ($)? Then NRV recovers to $48,000 — what is the new carrying value?',
        answer: 48000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Initial write-down: NRV ($42,000) < Cost ($50,000), write down by $8,000. Carrying value = $42,000. Step 2: NRV recovers to $48,000. Under IFRS, you can REVERSE the write-down up to (but not exceeding) original cost. Step 3: New carrying = MIN(50,000, 48,000) = $48,000. Note: under US GAAP, you couldn\'t reverse — would be stuck at $42,000.'
      },
      {
        id: 'ch5_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'A company overstated its 2024 ending inventory by $5,000. Which is correct?',
        options: ['2024 COGS overstated; 2024 NI understated', '2024 COGS understated; 2024 NI overstated', '2024 NI correct, 2025 NI understated', 'Both years\' NI unaffected'],
        correct: 1,
        explanation: 'Correct: B — COGS understated, NI overstated. From COGS = Beg + Purch − End: if End is OVERstated, COGS is UNDERstated → Gross Profit and NI are OVERstated in 2024. The error self-corrects in 2025 (overstated 2024 End becomes overstated 2025 Beg → 2025 COGS overstated → 2025 NI understated).'
      },
      {
        id: 'ch5_q10', type: 'numeric', difficulty: 'medium',
        prompt: 'Net sales €1,200,000. Beg inv €80,000. Purchases €750,000. End inv €110,000. Compute gross profit margin in %.',
        answer: 40, units: '%', tolerance: 0.01,
        explanation: 'Step 1: COGS = 80,000 + 750,000 − 110,000 = €720,000. Step 2: Gross Profit = Sales − COGS = 1,200,000 − 720,000 = €480,000. Step 3: GPM = GP / Sales = 480,000 / 1,200,000 = 40%. Common mistake: dividing GP by COGS instead of by Sales.'
      },
      {
        id: 'ch5_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Goggles (slide example): Beg 100 @ $4; Purchase 400 @ $4.50. Sold 460. Compute COGS under LIFO in $.',
        answer: 2040, units: '$', tolerance: 0.001,
        explanation: 'LIFO (periodic): newest costs go to COGS first. Sold 460 units. Take all 400 @ $4.50 (newest batch) = $1,800. Then need 60 more from the older batch @ $4 = $240. COGS = 1,800 + 240 = $2,040. The 40 units left are the oldest @ $4 = $160. Slide-confirmed.'
      },
      {
        id: 'ch5_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'Chevron 2015: LIFO Inventory $6,334; LIFO Reserve $3,745. Compute the FIFO-adjusted Inventory in $M.',
        answer: 10079, units: '$M', tolerance: 0.001,
        explanation: 'Formula: FIFO Inventory = LIFO Inventory + LIFO Reserve. Substitute: 6,334 + 3,745 = $10,079M. The LIFO Reserve is the cumulative difference between FIFO and LIFO valuations — adding it back converts LIFO firms to FIFO basis for cross-firm comparison.'
      },
      {
        id: 'ch5_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'Chevron 2015: LIFO COGS $69,751M. Δ LIFO Reserve = −$4,390M (reserve fell). Compute FIFO COGS in $M.',
        answer: 74141, units: '$M', tolerance: 0.001,
        explanation: 'Formula: FIFO COGS = LIFO COGS − Δ LIFO Reserve. Substitute: 69,751 − (−4,390) = 69,751 + 4,390 = $74,141M. When the reserve FALLS (negative Δ), FIFO COGS is HIGHER than LIFO COGS — which makes sense: LIFO had been holding back "low" costs and is now releasing them.'
      },
      {
        id: 'ch5_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'A manufacturer\'s inventory passes through which three stages in order?',
        options: ['Finished Goods → WIP → Raw Materials', 'Raw Materials → Finished Goods → WIP', 'Raw Materials → Work-in-Process → Finished Goods', 'WIP → Raw Materials → Finished Goods'],
        correct: 2,
        explanation: 'Correct: C — Raw Materials → Work-in-Process → Finished Goods. Manufacturing inventory flows through three stages: raw materials (parts from suppliers) → WIP (partially built, includes labor/overhead added) → finished goods (ready to sell). When sold, FG becomes COGS. The other options are scrambled.'
      },
      // From MCQ C5 textbook practice pack
      {
        id: 'ch5_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT normally reported as part of total manufacturing inventory cost?',
        options: ['Work-in-process', 'Finished goods', 'Property, plant, and equipment', 'Raw materials'],
        correct: 2,
        explanation: 'Correct: C — Property, plant, and equipment. PP&E is a separate long-term asset line on the balance sheet, NOT part of inventory. Inventory for a manufacturer = Raw Materials + WIP + Finished Goods. PP&E refers to factories, machines, equipment used to MAKE the inventory.'
      },
      {
        id: 'ch5_q16', type: 'mcq', difficulty: 'medium',
        prompt: 'When the current year\'s ENDING inventory amount is OVERSTATED, then:',
        options: ['Current year\'s COGS is overstated', 'Current year\'s total assets are understated', 'Current year\'s net income is overstated', 'Next year\'s income is overstated'],
        correct: 2,
        explanation: 'Correct: C — current year\'s NI overstated. From COGS = Beg + Purch − End: overstated End → understated COGS → overstated Gross Profit → overstated NI. (A is wrong — COGS is understated, not overstated. B is wrong — assets are OVERstated by the inventory error. D is wrong — next year\'s NI will be UNDERstated as the error reverses.)'
      },
      {
        id: 'ch5_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'In a period of rising prices, the inventory cost allocation method that tends to result in the LOWEST reported net income is:',
        options: ['LIFO', 'FIFO', 'Average cost', 'Specific identification'],
        correct: 0,
        explanation: 'Correct: A — LIFO. In rising prices, LIFO uses the newest (highest) costs for COGS → highest COGS → lowest Gross Profit → lowest NI. This is exactly why US firms favor LIFO: lower reported NI means lower taxes and more cash kept in the business. FIFO would give the opposite (highest NI).'
      },
      {
        id: 'ch5_q18', type: 'numeric', difficulty: 'hard',
        prompt: 'Beyer Corp: Beg 2,000 units @ $50 = $100,000. Purchase 5,000 @ $75 = $375,000. Sold 6,000 units. Compute LIFO ENDING INVENTORY in $.',
        answer: 50000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Total available = 2,000 + 5,000 = 7,000 units. Step 2: Sold = 6,000, so ending = 1,000 units. Step 3: Under LIFO, ending inventory consists of the OLDEST units (the newest were sold first). Step 4: 1,000 units × $50 (the old beginning-inventory price) = $50,000. Note: under FIFO, ending would be 1,000 × $75 = $75,000.'
      },
      {
        id: 'ch5_q19', type: 'numeric', difficulty: 'hard',
        prompt: 'Sletten Industries (LIFO): Sales $200M, LIFO COGS $135M. LIFO Reserve was $14M at Jan 1 and $22M at Dec 31. If Sletten had used FIFO, what would 2017 GROSS PROFIT have been in $M?',
        answer: 73, units: '$M', tolerance: 0.5,
        explanation: 'Step 1: ΔLIFO Reserve = 22 − 14 = +$8M. Step 2: FIFO COGS = LIFO COGS − ΔReserve = 135 − 8 = $127M. (When reserve increases, FIFO COGS is LOWER.) Step 3: FIFO Gross Profit = Sales − FIFO COGS = 200 − 127 = $73M. Common mistake: ignoring the reserve change and using LIFO COGS directly.'
      },
      // From Final Exam 2024 V1 — Square9 LIFO
      {
        id: 'ch5_q20', type: 'numeric', difficulty: 'hard',
        prompt: 'Square9 laptops: Beg 160 @ $460; Purchases 260 @ $510, 360 @ $560, 230 @ $610. Sold 900. Compute LIFO COGS in $.',
        answer: 497500, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Total available = 160 + 260 + 360 + 230 = 1,010 units; sold 900; ending = 110 units. Step 2: Under LIFO, ending = oldest units = 110 × $460 = $50,600. Step 3: Total cost of goods available = 160×460 + 260×510 + 360×560 + 230×610 = 73,600 + 132,600 + 201,600 + 140,300 = $548,100. Step 4: LIFO COGS = 548,100 − 50,600 = $497,500.'
      },
      // From Final Exam 2024 V1 — Gummy turnover
      {
        id: 'ch5_q21', type: 'numeric', difficulty: 'medium',
        prompt: 'Gummy Co: Beg inventory $118,000; End $110,000; Net sales $999,000; Gross profit $303,000. Compute inventory turnover (in times).',
        answer: 6.11, units: 'times', tolerance: 0.05,
        explanation: 'Step 1: COGS = Sales − Gross Profit = 999,000 − 303,000 = $696,000. Step 2: Average Inventory = (118,000 + 110,000) / 2 = $114,000. Step 3: Inventory Turnover = COGS / Avg Inv = 696,000 / 114,000 = 6.11 times. Common mistake: using Sales instead of COGS in the numerator.'
      },
      // From Final Exam 2025 V1 — Communicated FIFO
      {
        id: 'ch5_q22', type: 'numeric', difficulty: 'hard',
        prompt: 'Communicated Inc mobile phones: Beg 270 @ $570; Purchases 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175. Compute FIFO ENDING INVENTORY in $.',
        answer: 158400, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Total available = 270 + 370 + 470 + 285 = 1,395 units; sold 1,175; ending = 220 units. Step 2: Under FIFO, ending = NEWEST units. The newest batch is 285 @ $720 (Oct). Step 3: Take 220 from that newest batch: 220 × $720 = $158,400. Common mistake: using LIFO logic (oldest at $570) — gives a much smaller answer.'
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
      },
      {
        title: 'Tanner Truck — Units-of-Production schedule (slide)',
        problem: `<p>Same Tanner truck: cost $80,000; salvage $8,000; estimated total 80,000 miles. Year 1 driven 18,000 miles. Compute Year 1 depreciation expense and Year 1 ending book value.</p>`,
        solution: `<p>Rate = (80,000 − 8,000) / 80,000 = <strong>$0.90/mile</strong>.<br>Year 1 dep = 18,000 × $0.90 = <strong>$16,200</strong>.<br>Year 1 BV = 80,000 − 16,200 = <strong>$63,800</strong>.</p>`
      },
      {
        title: 'Tanner Truck — impairment journal entry (slide)',
        problem: `<p>Tanner truck is impaired by $6,000. Show the journal entry.</p>`,
        solution: `<p><strong>Dr Impairment Expense $6,000 / Cr Truck $6,000</strong>.<br>Impairment hits the income statement (loss). Future depreciation will be recomputed on the lower book value.</p>`
      },
      {
        title: 'SatCo trademark impairment (slide)',
        problem: `<p>SatCo carries a trademark at BV $62,000. Fair market value falls to $40,000. Compute the impairment loss and entry.</p>`,
        solution: `<p>Impairment = 62,000 − 40,000 = <strong>$22,000</strong>.<br>Dr Impairment Loss 22,000 / Cr Trademark 22,000.<br>Under IFRS, this loss could later be reversed (up to original cost) if FMV recovers; under US GAAP it cannot.</p>`
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
        explanation: 'Correct: A — Double-declining balance. DDB front-loads depreciation: it applies a doubled rate to the (declining) book value, so Year 1 expense is much larger under DDB than under straight-line. Higher depreciation = lower EBIT in Year 1. Over the asset\'s life, total depreciation is the same — only the timing differs.'
      },
      {
        id: 'ch6_q2', type: 'mcq', difficulty: 'hard',
        prompt: 'If a repair cost is incorrectly CAPITALIZED instead of expensed, which is true?',
        options: ['NI lower; future depreciation higher', 'NI higher; future depreciation lower', 'NI higher; future depreciation higher', 'NI lower; future depreciation lower'],
        correct: 2,
        explanation: 'Correct: C — NI HIGHER and future depreciation HIGHER. Capitalizing instead of expensing: the cost is added to an asset account instead of hitting the income statement now → expense is lower → NI is higher. But that inflated asset gets depreciated over future years → future depreciation is higher. Both effects increase together.'
      },
      {
        id: 'ch6_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When a company sells an asset at a GAIN, which is TRUE?',
        options: ['Proceeds > historical cost', 'Proceeds < book value', 'Proceeds > book value', 'Proceeds = historical cost'],
        correct: 2,
        explanation: 'Correct: C — Proceeds > Book Value. Gain/Loss on disposal = Sale Proceeds − Book Value. A gain means proceeds exceed book value (= cost − accumulated depreciation). A is wrong — could be at a gain even if proceeds < cost (because BV < cost). B is wrong — that would be a loss. D is wrong — equal to historical cost doesn\'t tell you about BV.'
      },
      {
        id: 'ch6_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Hale Kennels sells equipment July 1, 2020 for $80,000. Cost $300,000; 5-yr life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Compute gain/loss in $ (positive = gain).',
        answer: 30000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Annual SL Depreciation = (Cost − Salvage) / Life = (300,000 − 50,000) / 5 = $50,000/yr. Step 2: Half-year (Jan 1 − Jul 1) = 50,000 × 6/12 = $25,000. Step 3: Total Accum Dep = 225,000 + 25,000 = $250,000. Step 4: Book Value = 300,000 − 250,000 = $50,000. Step 5: Gain = Proceeds − BV = 80,000 − 50,000 = $30,000.'
      },
      {
        id: 'ch6_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which would NOT be recorded as an intangible asset?',
        options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'],
        correct: 2,
        explanation: 'Correct: C — Internally generated goodwill. Goodwill is ONLY recorded when acquired through a business purchase (price paid > FV of net identifiable assets). Internally generated goodwill (great service, brand reputation built over time) is NEVER capitalized, no matter how valuable. Patents, copyrights, and franchises CAN be capitalized.'
      },
      {
        id: 'ch6_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Cost $50,000; salvage $5,000; 8-year life. Compute annual SL depreciation in $.',
        answer: 5625, units: '$', tolerance: 0.001,
        explanation: 'Formula: Annual SL Depreciation = (Cost − Salvage) / Useful Life. Substitute: (50,000 − 5,000) / 8 = 45,000 / 8 = $5,625/year. Common mistake: forgetting to subtract salvage value (gives 6,250) or using the wrong life.'
      },
      {
        id: 'ch6_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Tanner truck (slide-style): $80,000 cost; 5-year life; $8,000 salvage. Using DDB, compute YEAR 3 depreciation in $.',
        answer: 11520, units: '$', tolerance: 0.001,
        explanation: 'DDB rate = 2 / Useful Life = 2/5 = 40%. Step 1: Year 1 BV = 80,000; Year 1 dep = 80,000 × 40% = $32,000; Year 1 ending BV = 48,000. Step 2: Year 2 dep = 48,000 × 40% = $19,200; ending BV = 28,800. Step 3: Year 3 dep = 28,800 × 40% = $11,520. DDB applies the rate to the BOOK VALUE, not the depreciable base.'
      },
      {
        id: 'ch6_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Acquirer pays $5,000,000 for target. Target\'s net identifiable assets have fair value $4,200,000. Compute goodwill recognized in $.',
        answer: 800000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Goodwill = Purchase Price − Fair Value of Net Identifiable Assets Acquired. Substitute: 5,000,000 − 4,200,000 = $800,000. The goodwill represents the premium paid above identifiable net assets — for things like brand value, customer relationships, synergies. Recorded as an indefinite-life intangible (NEVER amortized, but tested annually for impairment).'
      },
      {
        id: 'ch6_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Which can be capitalized as part of the cost of self-constructed equipment?',
        options: ['Marketing costs to launch the product', 'Training costs for employees', 'Interest on borrowings used to finance construction', 'Routine maintenance after installation'],
        correct: 2,
        explanation: 'Correct: C — interest on borrowings used to finance construction (capitalized interest). This is required for self-constructed qualifying assets. A (marketing) and B (training) are operating expenses, not capitalizable. D (routine maintenance after installation) is expensed. Only interest during the construction period gets capitalized into the asset\'s cost.'
      },
      {
        id: 'ch6_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'A building has BV $800,000. Recoverable amount is now $650,000. Under IFRS, the impairment loss recorded is:',
        options: ['$0', '$150,000', '$650,000', '$800,000'],
        correct: 1,
        explanation: 'Formula: Impairment Loss = Book Value − Recoverable Amount. Substitute: 800,000 − 650,000 = $150,000. The asset is written down to its recoverable amount (the new BV becomes $650,000). Under IFRS, this loss could later be REVERSED if the asset\'s value recovers; under US GAAP, no reversal allowed.'
      },
      {
        id: 'ch6_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Tanner truck after 4 yrs of SL depreciation ($14,400/yr from $80,000 cost). Useful life now extended from 5 to 7 years; salvage unchanged at $8,000. Compute NEW annual depreciation in $.',
        answer: 4800, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Original annual dep = $14,400. Step 2: Book Value after 4 yrs = 80,000 − (4 × 14,400) = 80,000 − 57,600 = $22,400. Step 3: New remaining life = (5 − 4) + 2 extra years = 3 years. Step 4: New annual dep = (BV − Salvage) / Remaining life = (22,400 − 8,000) / 3 = 14,400 / 3 = $4,800.'
      },
      {
        id: 'ch6_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'Patent purchased for $80,000. Legal life 10 years; expected economic benefit period 5 years. Compute annual amortization expense in $.',
        answer: 16000, units: '$', tolerance: 0.001,
        explanation: 'Rule: Amortize a patent over the SHORTER of its legal life or its expected economic benefit period. Legal = 10 years; economic = 5 years. Use 5 years. Annual amortization = 80,000 / 5 = $16,000. Common mistake: using the longer (legal) life — gives only $8,000.'
      },
      {
        id: 'ch6_q13', type: 'mcq', difficulty: 'medium',
        prompt: 'Under DDB, a company stops recording depreciation when:',
        options: ['Half the useful life has passed', 'Book value reaches salvage value', 'Cumulative depreciation equals depreciable base', 'Never — depreciation continues to zero'],
        correct: 1,
        explanation: 'Correct: B — Book Value reaches Salvage Value. Under DDB, you stop depreciating once BV = salvage (you cap the final year\'s expense). In the Tanner truck slide, Y5 expense was capped at $2,368 to bring BV exactly to $8,000 (the salvage). The other options are wrong: depreciation doesn\'t auto-stop at half-life or run to zero.'
      },
      // From MCQ C6 textbook practice pack
      {
        id: 'ch6_q14', type: 'mcq', difficulty: 'medium',
        prompt: 'Burgstahler bought a lot to construct a new corporate office building. An older building on the lot was razed immediately so the new one could be built. The cost of razing the older building should be:',
        options: ['Recorded as part of the cost of the LAND', 'Written off as a loss in the year of purchase', 'Written off as an extraordinary item', 'Recorded as part of the cost of the new building'],
        correct: 0,
        explanation: 'Correct: A — recorded as part of the cost of the LAND. Costs to PREPARE land for use (razing existing structures, grading, clearing) are capitalized to LAND, not the new building. Land is never depreciated, but the razing cost is part of getting the land ready. The new building is depreciated separately on its own cost basis.'
      },
      {
        id: 'ch6_q15', type: 'mcq', difficulty: 'easy',
        prompt: 'The purpose of recording PERIODIC depreciation of long-term PP&E assets is to:',
        options: ['Report declining asset values on the balance sheet', 'Allocate asset costs over the periods benefited by use of the assets', 'Account for costs to reflect change in general price levels', 'Set aside funds to replace assets when their economic usefulness expires'],
        correct: 1,
        explanation: 'Correct: B — allocate asset costs over the periods benefited. Depreciation is a SYSTEMATIC ALLOCATION of the asset\'s cost to expense over its useful life. It is NOT a valuation adjustment (A — depreciation doesn\'t track market value), NOT inflation-related (C), and NOT a cash reserve (D — no cash is set aside).'
      },
      {
        id: 'ch6_q16', type: 'mcq', difficulty: 'medium',
        prompt: 'When the estimate of an asset\'s useful life is changed:',
        options: ['Depreciation expense for ALL past periods must be recalculated', 'There is no change in the amount of depreciation expense recorded for future years', 'Only depreciation expense for current and future years is affected', 'Only depreciation expense in the current year is affected'],
        correct: 2,
        explanation: 'Correct: C — only current and future years are affected. A change in estimate (useful life, salvage) is treated PROSPECTIVELY: recompute depreciation over the remaining life with the new estimate. Past periods are NOT restated. A is wrong (no restatement). B is wrong (future depreciation DOES change). D is wrong (future years also change).'
      },
      {
        id: 'ch6_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'If the sale of a depreciable asset results in a LOSS, the proceeds from the sale were:',
        options: ['Less than current fair value', 'Greater than cost', 'Greater than book value', 'Less than book value'],
        correct: 3,
        explanation: 'Correct: D — proceeds less than book value. Loss on disposal = Proceeds < Book Value. A is wrong (current FV is irrelevant — gain/loss depends on BV, not FV). B is wrong (greater than cost would mean a gain, not loss). C is wrong (greater than BV = gain).'
      },
      {
        id: 'ch6_q18', type: 'mcq', difficulty: 'medium',
        prompt: 'Which best describes the current method of accounting for R&D costs (under US GAAP)?',
        options: ['Revenue recognition method', 'Systematic and rational allocation', 'Immediate recognition as an expense', 'Income tax minimization'],
        correct: 2,
        explanation: 'Correct: C — immediate recognition as expense. Under US GAAP, ALL R&D is expensed when incurred (no capitalization). Rationale: future benefits are too uncertain. (Under IFRS, RESEARCH is expensed but DEVELOPMENT may be capitalized if specific criteria are met — this is a key IFRS vs GAAP difference.)'
      },
      {
        id: 'ch6_q19', type: 'mcq', difficulty: 'medium',
        prompt: 'Goodwill should be recorded on the balance sheet as an intangible asset only when:',
        options: ['It is sold to another company', 'It is acquired through the purchase of another business', 'A company reports above-normal earnings for five or more consecutive years', 'A definite benefit can be established (e.g., excellent service reputation)'],
        correct: 1,
        explanation: 'Correct: B — acquired through purchase of another business. Goodwill ONLY arises from an acquisition, calculated as price paid − FV of identifiable net assets. A is irrelevant (offers don\'t trigger recording). C and D describe internally generated goodwill, which is NEVER recorded on the balance sheet.'
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
      },
      {
        title: 'Drone Delivery — financial leverage decision (slide)',
        problem: `<p>Company has $100,000 equity, generates $20,000 NI/year (20% ROE). It can buy $100,000 of new drones expected to earn an additional $20,000/year. Choice: issue $100,000 new stock OR borrow $100,000 at 8% interest. Which is favorable for ROE, and why?</p>`,
        solution: `<p><strong>Borrowing is favorable when project return (20%) > borrowing cost (8%).</strong><br>If borrow at 8%: extra income = 20,000 − 100,000×8% = $12,000. New NI = 32,000. Equity unchanged at 100,000 → <strong>ROE = 32%</strong>.<br>If issue stock: NI = 40,000. Equity = 200,000 → <strong>ROE = 20%</strong> (unchanged).<br>Leverage boosted ROE from 20% to 32% — positive financial leverage.</p>`
      },
      {
        title: 'Bikes R Us — short-term note accrual (slide)',
        problem: `<p>Bikes R Us borrows $3,000 at 6% on January 1; quarterly interest payments. Compute the interest accrual at March 31.</p>`,
        solution: `<p>Interest = 3,000 × 6% × 3/12 = <strong>$45</strong>.<br>Dr Interest Expense 45 / Cr Interest Payable 45.</p>`
      },
      {
        title: 'Sunshine bonds — early retirement at premium (slide)',
        problem: `<p>Same Sunshine $400,000 / 8% / 10-period bonds, originally issued at premium ($434,121). After 3 years, carrying value is $414,869. Bond retired at 102% of face. Compute gain/loss and journal entry.</p>`,
        solution: `<p>Cash paid = 400,000 × 1.02 = $408,000.<br>Gain = Carrying value − Cash = 414,869 − 408,000 = <strong>$6,869 gain</strong>.<br>Entry: Dr Bond Payable 400,000, Dr Bond Premium 14,869 / Cr Cash 408,000, Cr Gain on Retirement 6,869.</p>`
      },
      {
        title: 'Effective cost of debt — over the bond\'s life (slide)',
        problem: `<p>For Sunshine\'s $400,000 / 8% / 10-period bond, compare TOTAL cost across the three issue scenarios: par, discount (10% market), premium (6% market).</p>`,
        solution: `<p>Cash interest paid is identical: 10 × $16,000 = $160,000 in all cases.<br><strong>Par</strong>: total cost = $160,000 (just interest).<br><strong>Discount</strong> ($30,887 discount): total cost = 160,000 + 30,887 = <strong>$190,887</strong> (paid more in interest because issued cheap).<br><strong>Premium</strong> ($34,121 premium): total cost = 160,000 − 34,121 = <strong>$125,879</strong> (got premium upfront, repaid only face).</p>`
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
        explanation: 'Step 1: Cash Paid = Face × Quote% = 600,000 × 0.98 = $588,000. Step 2: Gain/Loss = Carrying Value − Cash Paid = 590,000 − 588,000 = +$2,000 GAIN. The company bought back the bond for less than its carrying value. Trap: don\'t subtract Face Value ($600K) from CV — use Cash Paid ($588K).'
      },
      {
        id: 'ch7_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'Formula: TIE = (NI + Tax + Interest) / Interest = EBIT / Interest. Substitute: (160,000 + 60,000 + 40,000) / 40,000 = 260,000 / 40,000 = 6.5 times. The company\'s pre-tax pre-interest earnings cover interest 6.5×. Common mistake: forgetting to add back tax and interest to NI (gives 4.0).'
      },
      {
        id: 'ch7_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When the market rate of interest is HIGHER than the coupon rate, bonds will be issued at:',
        options: ['Par', 'A premium', 'A discount', 'Depends on the maturity'],
        correct: 2,
        explanation: 'Correct: C — discount. Logic: when market rate > coupon rate, the bond\'s coupon payments look LOW compared to what investors could earn elsewhere → bond is unattractive at face value → must sell BELOW face (at a discount) to compensate buyers. The opposite (market < coupon) creates a premium.'
      },
      {
        id: 'ch7_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'A €500,000 face bond was issued at 102. Five years later it is retired at 105 when carrying value is €506,000. Compute gain/loss in € (positive = gain).',
        answer: -19000, units: '€', tolerance: 0.001,
        explanation: 'Step 1: Cash Paid = Face × Quote = 500,000 × 1.05 = €525,000. Step 2: Gain/Loss = Carrying Value − Cash Paid = 506,000 − 525,000 = −€19,000 (LOSS). The negative answer means a loss. The company paid more than the bond\'s book value — bad outcome for the issuer.'
      },
      {
        id: 'ch7_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'A pending lawsuit has a probable loss between $50,000 and $200,000 with most likely outcome $100,000. Under IFRS:',
        options: ['Disclose in footnotes only', 'Recognize a $100,000 provision and disclose the range', 'Recognize a $200,000 provision (most conservative)', 'No entry until lawsuit is settled'],
        correct: 1,
        explanation: 'Correct: B — recognize a $100,000 provision and disclose the range. Under IAS 37: when a loss is probable AND reliably estimable, recognize a PROVISION (a real liability) at the most likely amount. The range should also be disclosed in the footnotes. A understates (it\'s probable, not just possible). C uses the wrong amount. D ignores the recognition criteria.'
      },
      {
        id: 'ch7_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'A 4-year, 8%, $300,000 note payable signed October 1. Principal & interest due at maturity. Compute interest expense for year ending December 31 of the issue year in $.',
        answer: 6000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Interest = Principal × Rate × (Months/12). Months from Oct 1 to Dec 31 = 3. Substitute: 300,000 × 8% × 3/12 = $6,000. Common mistake: using 12/12 (full year — gives 24,000) or treating the note as quarterly.'
      },
      {
        id: 'ch7_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which is NOT classified as a long-term liability?',
        options: ['Bonds payable due in 10 years', '15-year mortgage', 'Current portion of long-term debt due within next year', 'Pension obligations'],
        correct: 2,
        explanation: 'Correct: C — Current portion of long-term debt is a CURRENT liability (due within next year). The other three are clearly long-term: bonds payable in 10 years, 15-yr mortgage, pension obligations. The trap: even though the current portion came from a long-term debt, its CLASSIFICATION is current.'
      },
      {
        id: 'ch7_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Bond face $1,000,000; 5% coupon (annual); issued at $950,000 when market = 6%. Compute Year 1 INTEREST EXPENSE under effective-interest in $.',
        answer: 57000, units: '$', tolerance: 0.001,
        explanation: 'Formula (effective-interest method): Interest Expense = Beginning Carrying Value × Market Rate. Substitute: 950,000 × 6% = $57,000. Note: the cash interest paid is only Face × Coupon = 1,000,000 × 5% = $50,000. The $7,000 difference is the discount amortization (added to carrying value).'
      },
      {
        id: 'ch7_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Sunshine Co (slide): $400,000 of 8% bonds, 10 periods semi-annual, market = 10% (= 5%/period). Issue price = $369,113. Compute Period 1 interest expense in $.',
        answer: 18456, units: '$', tolerance: 0.001,
        explanation: 'Formula (effective-interest method): Interest Expense = Beginning Carrying Value × Market Rate per period. Market rate per period = 10%/2 = 5%. Substitute: 369,113 × 5% = $18,456. Cash interest = 16,000; discount amortized = 18,456 − 16,000 = $2,456. Slide-confirmed answer.'
      },
      {
        id: 'ch7_q10', type: 'numeric', difficulty: 'medium',
        prompt: 'Nestle (slide): COGS CHF 46,647M; Avg AP CHF 18,301M. Compute Days Payable Outstanding (DPO) rounded to nearest day.',
        answer: 143, units: 'days', tolerance: 0.5,
        explanation: 'Step 1: AP Turnover = COGS / Avg AP = 46,647 / 18,301 = 2.55. Step 2: DPO = 365 / AP Turnover = 365 / 2.55 = 143 days. So Nestle takes about 143 days to pay suppliers — using their working capital as free financing. Common mistake: using Sales instead of COGS in turnover.'
      },
      {
        id: 'ch7_q11', type: 'mcq', difficulty: 'hard',
        prompt: 'A $1,000 invoice has terms 2/10, n/30. The annualized cost of forgoing the discount is approximately:',
        options: ['2.0%', '24.0%', '36.5%', '37.2%'],
        correct: 3,
        explanation: 'Correct: D — about 37.2% per year. Formula: (Discount/Net Cost) × (365/(Net days − Discount days)) = (2/98) × (365/20) ≈ 37.2%. Logic: by paying full price on day 30 instead of discounted on day 10, you\'re effectively borrowing for 20 extra days at a 2% cost — annualizes to ~37%. Forgoing cash discounts is VERY expensive.'
      },
      {
        id: 'ch7_q12', type: 'mcq', difficulty: 'easy',
        prompt: 'Under the effective-interest method, as a discount bond approaches maturity, the carrying value:',
        options: ['Stays constant', 'Decreases toward face', 'Increases toward face', 'Increases above face'],
        correct: 2,
        explanation: 'Correct: C — increases toward face. A bond issued at a discount has carrying value < face initially. Each period, the discount amortization is ADDED to carrying value (interest expense > cash paid → difference accretes the bond up). At maturity, carrying value = face value (the firm pays off face). The opposite happens with premiums (decrease toward face).'
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
        explanation: 'Correct: B — Dr Right-of-Use Asset / Cr Lease Liability at PV of lease payments. Under IFRS 16, lessees must recognize a ROU asset and a lease liability at lease commencement. Both are measured at the present value of future lease payments. A treats it as a simple operating expense (wrong under IFRS 16). C is the OLD operating-lease treatment (no longer allowed). D uses gross undiscounted payments (wrong — must discount).'
      },
      {
        id: 'ch8_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Which lease may be EXEMPTED from balance sheet recognition under IFRS 16?',
        options: ['10-year building lease', '9-month forklift lease', '3-year delivery truck lease', '5-year printing press lease'],
        correct: 1,
        explanation: 'Correct: B — 9-month forklift lease. The IFRS 16 short-term exemption applies to leases with terms ≤ 12 months and no purchase option. A 9-month lease qualifies. The other three (10-year, 3-year, 5-year) are too long. Low-value leases (e.g., laptops, tablets) are also exempt regardless of term.'
      },
      {
        id: 'ch8_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming (slide): 5-yr lease, $3,256 annual payment at year-end, 8% rate. PV factor (n=5, r=8%) = 3.99271. Compute initial lease liability in $.',
        answer: 13000, units: '$', tolerance: 1,
        explanation: 'Formula: Initial Lease Liability = Annual Payment × PV Annuity Factor. Substitute: 3,256 × 3.99271 = $13,000. Both ROU asset and lease liability start at this PV. The PV of future payments tells you the "true" amount being financed at the discount rate. Slide-confirmed answer.'
      },
      {
        id: 'ch8_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Continuing Phelps: ROU asset = $13,000, 5-year SL depreciation. Compute YEAR 1 INTEREST expense in $ at 8%.',
        answer: 1040, units: '$', tolerance: 0.5,
        explanation: 'Formula: Annual Interest = Beginning Lease Liability × Discount Rate. Substitute: 13,000 × 8% = $1,040. The interest is computed on the OPENING liability balance each year (effective-interest method). Y1 interest is highest because the liability is still full; later years see less interest as the principal is paid down.'
      },
      {
        id: 'ch8_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Year 2: end-of-Y1 liability = $10,784. Compute Year 2 INTEREST expense in $.',
        answer: 863, units: '$', tolerance: 1,
        explanation: 'Formula: Year 2 Interest = End-of-Year-1 Lease Liability × Discount Rate. Substitute: 10,784 × 8% = $863. Notice interest is LESS than Year 1 ($1,040) — that\'s because the liability has been paid down. Each year interest decreases (decreasing-interest pattern), even though the cash payment stays constant at $3,256.'
      },
      {
        id: 'ch8_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'On the lessee\'s SCF, the PRINCIPAL portion of a lease payment is classified as:',
        options: ['Operating outflow', 'Investing outflow', 'Financing outflow', 'Not on the SCF'],
        correct: 2,
        explanation: 'Correct: C — Financing outflow. The PRINCIPAL portion of a lease payment reduces the lease liability — analogous to repaying debt → financing. The INTEREST portion is operating (or financing under an IFRS option). A and B are wrong. D is wrong because lease payments DO appear on the SCF.'
      },
      {
        id: 'ch8_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Compared to the previous standard for operating leases, IFRS 16 generally:',
        options: ['Reduces total assets and liabilities', 'Increases total assets and liabilities, with front-loaded total expense', 'Has no balance sheet effect', 'Decreases total expense over the lease term'],
        correct: 1,
        explanation: 'Correct: B — increases assets and liabilities, with front-loaded total expense. IFRS 16 brings what used to be off-balance-sheet operating leases ON the balance sheet (ROU + Lease Liability). Total expense over the lease is unchanged, but it\'s front-loaded because interest is highest in early years (when the liability is largest). A is wrong (it INCREASES not decreases). C is wrong (clear B/S impact). D is wrong (lifetime expense is identical).'
      },
      {
        id: 'ch8_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming Year 1 total income statement impact under the ROU model (depreciation + interest) in $.',
        answer: 3640, units: '$', tolerance: 1,
        explanation: 'Step 1: Annual Depreciation = ROU Asset / Lease Term = 13,000 / 5 = $2,600. Step 2: Year 1 Interest = Beg Liability × Rate = 13,000 × 8% = $1,040. Step 3: Total Year 1 expense = 2,600 + 1,040 = $3,640. Compare: under short-term/low-value treatment, expense would be just $3,256 (the cash payment). ROU front-loads expense by $384 in Year 1.'
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
        title: 'Three sources of financing',
        body: `<p>Companies fund their operations from three sources:</p>
        <ol>
          <li><strong>Creditors</strong> (debt financing) — banks, bondholders. Legal obligation to repay; interest is tax-deductible.</li>
          <li><strong>New equity issuance</strong> — selling new shares to investors. No repayment obligation; dilutes ownership.</li>
          <li><strong>Reinvested retained earnings</strong> — profits not paid out as dividends. Cheapest funding source; no new shares, no new debt.</li>
        </ol>`
      },
      {
        title: 'Dividends, splits, stock dividends',
        body: `<ul>
          <li><strong>Cash dividend</strong>: declaration → Dr RE / Cr Dividends Payable; payment → Dr Dividends Payable / Cr Cash. <em>No effect on NI.</em></li>
          <li><strong>Property dividend</strong>: distribution of NON-cash assets (e.g., shares of a subsidiary, inventory). Recorded at fair value; difference vs. book value goes to NI as gain/loss.</li>
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
      },
      {
        title: 'Phelps — cash dividend journal entry (slide)',
        problem: `<p>Phelps pays a $780 quarterly cash dividend. Show the entry. What is the effect on net income?</p>`,
        solution: `<p>Declaration: Dr RE 780 / Cr Dividends Payable 780.<br>Payment: Dr Dividends Payable 780 / Cr Cash 780.<br><strong>No effect on net income</strong> — dividend reduces equity directly via RE.</p>`
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
        explanation: 'Correct: B — More than 50%. Owning >50% of voting shares = CONTROL → consolidation (combine the financial statements as a single economic entity). 20-50% → significant influence → equity method. <20% → passive → fair value. The 50% threshold is the consolidation trigger.'
      },
      {
        id: 'ch9_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'Skyline: Issued shares (par €10): €600,000. Treasury shares (cost €15/sh): €1,800. How many shares are outstanding?',
        answer: 59880, units: 'shares', tolerance: 0.001,
        explanation: 'Step 1: Issued shares = €600,000 / €10 par = 60,000 shares. Step 2: Treasury shares = €1,800 / €15 cost = 120 shares. Step 3: Outstanding = Issued − Treasury = 60,000 − 120 = 59,880 shares. Common mistake: dividing both by the same price — must use par for issued, cost for treasury.'
      },
      {
        id: 'ch9_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Mouns owns 40% of Darian. Darian pays $20,000 dividends and reports $100,000 NI. By how much does Mouns\'s NI increase from the investment in $?',
        answer: 40000, units: '$', tolerance: 0.001,
        explanation: 'Formula (Equity Method): Income from investment = Ownership % × Investee Net Income. Substitute: 40% × 100,000 = $40,000. The $20,000 dividend reduces the INVESTMENT account on Mouns\'s balance sheet, NOT income. Common mistake: counting dividends as income (cost method behavior, not equity method).'
      },
      {
        id: 'ch9_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which transaction has NO effect on net income?',
        options: ['Sale of equipment at a gain', 'Declaration of a cash dividend', 'Recording bad debt expense', 'Recognition of revenue earned but not yet collected'],
        correct: 1,
        explanation: 'Correct: B — Declaration of a cash dividend. The entry is Dr Retained Earnings / Cr Dividends Payable — it reduces equity directly via RE, with NO income statement impact. A (gain on sale), C (bad debt expense), and D (revenue earned not yet collected) all hit the income statement.'
      },
      {
        id: 'ch9_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'NI €450,000. Preferred dividends €30,000. Weighted avg common shares 100,000. Compute basic EPS in €.',
        answer: 4.20, units: '€', tolerance: 0.01,
        explanation: 'Formula: Basic EPS = (NI − Preferred Dividends) / Weighted Average Common Shares. Substitute: (450,000 − 30,000) / 100,000 = 420,000 / 100,000 = €4.20. Common mistake: forgetting to subtract preferred dividends (gives 4.50) — preferred dividends are paid before EPS to common holders.'
      },
      {
        id: 'ch9_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company has cumulative preferred shares with $10 dividend per share. No preferred dividends were paid in the previous 2 years. There are 1,000 preferred shares. Before any common dividend can be paid, the company must pay preferred dividends of:',
        options: ['$10,000', '$20,000', '$30,000', '$0 — preferred is optional'],
        correct: 2,
        explanation: 'Correct: C — $30,000. With cumulative preferred, all unpaid prior-year ("in arrears") dividends MUST be paid before any common dividend. Two prior years missed + current year = 3 years × $10 × 1,000 shares = $30,000. A and B undercounts the arrears. D is wrong because preferred dividends, while contractually optional in any given year, accumulate on cumulative preferreds.'
      },
      {
        id: 'ch9_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Investor X owns 25% of Investee Y. At year start, investment was €500,000. Y reports NI €120,000 and pays dividends €40,000. Compute the year-end investment balance in €.',
        answer: 520000, units: '€', tolerance: 0.001,
        explanation: 'Formula: End Investment = Beg + (% × Investee NI) − (% × Investee Dividends). Substitute: 500,000 + (25% × 120,000) − (25% × 40,000) = 500,000 + 30,000 − 10,000 = €520,000. The equity method tracks the investor\'s pro-rata share of the investee\'s equity changes. Dividends reduce the investment because they reduce the investee\'s equity.'
      },
      {
        id: 'ch9_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Treasury shares are reported as:',
        options: ['Long-term investment', 'Expense on the IS', 'Deduction from total equity (contra)', 'Current asset'],
        correct: 2,
        explanation: 'Correct: C — deduction from total equity (contra). Treasury stock represents the company buying back its own shares. It\'s a CONTRA-EQUITY account — deducted from total equity at cost. It\'s NOT an asset (you can\'t own yourself), NOT an expense, NOT a current asset. The repurchase doesn\'t generate income or loss.'
      },
      {
        id: 'ch9_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Phelps Swimming (slide-style EPS): NI $8,000; preferred dividends $1,000. 8,000 common shares outstanding all year EXCEPT 800 repurchased on April 1. Compute basic EPS in $.',
        answer: 0.946, units: '$', tolerance: 0.005,
        explanation: 'Step 1: Weighted Average Shares = 8,000 × (3/12) + 7,200 × (9/12) = 2,000 + 5,400 = 7,400. (Full year had 8,000 for Jan-Mar, then 7,200 after Apr 1 repurchase.) Step 2: EPS = (NI − Pref Div) / WAvg Shares = (8,000 − 1,000) / 7,400 = $0.946. Common mistake: using year-end shares (7,200) instead of weighted average.'
      },
      {
        id: 'ch9_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which is TRUE of a 2-for-1 stock split?',
        options: ['Reduces total stockholders\' equity', 'Increases retained earnings', 'Doubles shares outstanding and halves par value, with NO change to total equity', 'Recognized as a stock dividend at fair value'],
        correct: 2,
        explanation: 'Correct: C — doubles shares, halves par, NO change to total equity. A 2-for-1 stock split has NO journal entry; it\'s just an annotation. Each shareholder ends up with 2× shares, but each share is worth half as much, so total economic value is unchanged. A and B are wrong (no effect on RE or total equity). D is wrong (splits are NOT recorded at fair value — that\'s stock dividends).'
      },
      {
        id: 'ch9_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'A company issues 1,000 shares of $5 par common stock at $18/share. Compute the increase to APIC in $.',
        answer: 13000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Cash received = 1,000 shares × $18 = $18,000. Step 2: Common Stock account ↑ by Par × Shares = $5 × 1,000 = $5,000. Step 3: APIC ↑ by (Issue Price − Par) × Shares = ($18 − $5) × 1,000 = $13,000. Check: $5,000 + $13,000 = $18,000 cash received. ✓'
      },
      {
        id: 'ch9_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Buying treasury stock for cash has what effect on the accounting equation?',
        options: ['↓ Assets, ↓ Equity', '↓ Assets, ↑ Liabilities', '↑ Liabilities, ↓ Equity', 'No effect on totals'],
        correct: 0,
        explanation: 'Correct: A — Assets ↓, Equity ↓. Buying treasury stock with cash: Cash (asset) decreases; Treasury Stock (a contra-equity) increases, which means total equity decreases by the same amount. The accounting equation stays balanced: A − E both moved by the same amount. No liability changes.'
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
        explanation: 'Correct: B — Equity method. Owning 35% means significant influence is presumed (the 20-50% range). The investee is called an "associate." Equity method: investment account moves with the investee\'s NI and dividends. A (fair value) is for <20%. C (consolidation) is for >50%. D (cost method) is rarely used today.'
      },
      {
        id: 'ch10_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'A company is classified as a "subsidiary" of an investor when:',
        options: ['Investor owns less than 20% of voting shares', 'Investor owns between 20% and 50% of voting shares', 'Investor has control (typically ≥50% of voting shares, or below via legal/technology agreements)', 'Investor has any minority interest'],
        correct: 2,
        explanation: 'Correct: C — control (typically ≥50% of voting shares, or below via legal/tech agreements). A subsidiary is a CONTROLLED entity. Usually that\'s ≥50%, but control can also exist below 50% through legal arrangements, tech licensing, or contractual rights. A and B describe lower thresholds. D is wrong — minority alone is not control.'
      },
      {
        id: 'ch10_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is a Level 1 input under the Fair Value Hierarchy?',
        options: ['Management\'s discounted cash flow estimate of an impaired asset\'s value', 'Quoted price for similar bonds in an inactive market', 'The closing price of a NYSE-listed common share', 'A broker quote for an over-the-counter derivative'],
        correct: 2,
        explanation: 'Correct: C — closing price of NYSE-listed common share. Level 1 = quoted prices in ACTIVE markets for IDENTICAL assets. NYSE shares trade actively and the price is for that exact security. A is Level 3 (entity-specific DCF). B is Level 2 (similar but not identical). D is Level 2 or 3 (broker quote on inactive OTC).'
      },
      {
        id: 'ch10_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'A bond that does not trade actively is valued by reference to similar bonds that DO trade actively. This is a:',
        options: ['Level 1 input', 'Level 2 input', 'Level 3 input', 'Mark-to-model with no observable inputs'],
        correct: 1,
        explanation: 'Correct: B — Level 2 input. Level 2 = observable inputs OTHER than identical-asset quoted prices. Using prices of similar bonds that trade actively is exactly that — observable, but indirect. Level 1 would require an active market for that EXACT bond. Level 3 would mean entity-specific assumptions with no observable inputs.'
      },
      {
        id: 'ch10_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Investor buys $20,000 of bonds for $19,800 plus $120 brokerage fees. Compute the cost recorded for the investment in $.',
        answer: 19920, units: '$', tolerance: 0.001,
        explanation: 'Formula: Cost = Purchase Price + Brokerage Fees + Other Acquisition Costs. Substitute: 19,800 + 120 = $19,920. The face value ($20,000) is irrelevant for recording cost — only the cash spent matters. The bond was purchased at a slight discount ($200 below face), but plus fees gives the actual cash outlay.'
      },
      {
        id: 'ch10_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Same bonds. Sold for $20,500 net of $80 brokerage fees on sale. Compute the gain/loss in $ (positive = gain).',
        answer: 580, units: '$', tolerance: 0.001,
        explanation: 'Step 1: If the $20,500 is BEFORE deducting brokerage: Net Proceeds = 20,500 − 80 = $20,420; Gain = 20,420 − 19,920 = $500. Step 2: If the $20,500 is already NET of fees (per the question wording): Gain = 20,500 − 19,920 = $580. The answer key uses the second interpretation. Always read carefully whether sale price is gross or net of fees.'
      },
      {
        id: 'ch10_q7', type: 'mcq', difficulty: 'hard',
        prompt: 'Mark-to-market vs mark-to-model: which is GENERALLY considered more subjective?',
        options: ['Mark-to-market — relies on potentially manipulated market prices', 'Mark-to-model — uses valuation models with assumptions', 'Both are equally objective', 'Neither — fair value is always inherently subjective'],
        correct: 1,
        explanation: 'Correct: B — Mark-to-model is more subjective. Mark-to-MARKET uses observable, independent market prices (objective). Mark-to-MODEL uses valuation models that depend on management\'s assumptions (interest rates, growth rates, discount factors) — much more subjective. A reverses this. C is wrong (they\'re not equally objective). D is too cynical.'
      },
      {
        id: 'ch10_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'A company sells appreciated AFS securities at a gain and immediately buys them back at the same price. The earnings-management red flag this represents is:',
        options: ['Channel stuffing', 'Cherry-picking gains', 'Big bath', 'Income smoothing'],
        correct: 1,
        explanation: 'Correct: B — Cherry-picking gains. Selling appreciated AFS securities just to recognize the gain in income, then immediately repurchasing at the same price, is the classic cherry-picking move. It crystallizes an unrealized gain into realized income without changing the economic position. A (channel stuffing) is for inventory/sales. C (big bath) is for losses. D (income smoothing) is broader.'
      },
      {
        id: 'ch10_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Investor owns 18% of Investee but has 3 of 7 board seats and veto rights over strategic decisions through a licensing agreement. Which method applies?',
        options: ['Fair value (passive — below 20% threshold)', 'Equity method (significant influence in substance, despite <20% ownership)', 'Consolidation', 'No accounting required for this stake'],
        correct: 1,
        explanation: 'Correct: B — Equity method (significant influence in substance). The 20% threshold is a PRESUMPTION, not a strict rule. Substance over form: 3 of 7 board seats + veto rights = significant influence regardless of the 18% ownership. So equity method is required. A treats the rules as bright-line (wrong). C requires CONTROL (not present). D ignores the investment entirely (wrong).'
      },
      {
        id: 'ch10_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Why must realized gains and losses on AFS securities be disclosed in the footnotes?',
        options: ['IFRS prohibits AFS securities from being on the balance sheet', 'To allow users to identify "cherry-picking" — selling appreciated AFS securities just to boost reported income', 'AFS gains and losses are not allowed in net income', 'Footnote disclosure replaces income statement reporting for AFS'],
        correct: 1,
        explanation: 'Correct: B — to allow users to identify cherry-picking. Disclosing realized AFS gains/losses lets analysts spot suspicious patterns: a company that sells appreciated AFS securities right before a weak earnings quarter is probably cherry-picking gains to boost income. A, C, D are factually wrong about IFRS/AFS treatment.'
      },
      {
        id: 'ch10_q11', type: 'mcq', difficulty: 'easy',
        prompt: 'An investee in which the investor owns 25% is referred to as:',
        options: ['A subsidiary', 'An associate', 'A passive investment', 'A controlled entity'],
        correct: 1,
        explanation: 'Correct: B — an associate. 20-50% ownership = significant influence (presumed) → equity method → the investee is called an associate. A subsidiary (A) requires control (>50%). C (passive) is <20%. D (controlled) is the same as subsidiary.'
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
        title: 'What the SCF tells you',
        body: `<p>The Statement of Cash Flows explains how a company <strong>generates</strong> cash and how it <strong>uses</strong> cash. Users read it to assess:</p>
        <ul>
          <li><strong>Liquidity</strong> — ability to pay near-term liabilities.</li>
          <li><strong>Solvency</strong> — ability to pay long-term liabilities.</li>
          <li><strong>Financial flexibility</strong> — ability to generate cash for unexpected needs.</li>
        </ul>
        <p>The SCF explains the change in <strong>Cash and Cash Equivalents</strong> between the start and end of the period.</p>`
      },
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
      },
      {
        title: 'Required supplemental disclosures',
        body: `<p>Three disclosures required alongside the main SCF:</p>
        <ol>
          <li><strong>Cash paid for income taxes and interest</strong> (especially under indirect method, where these are buried in NI).</li>
          <li><strong>Schedule of all noncash investing and financing activities</strong> (e.g., issuing stock for land, acquiring equipment by signing a note).</li>
          <li><strong>Policy for determining cash equivalents</strong> (typically: original maturity ≤ 3 months).</li>
        </ol>`
      },
      {
        title: 'SCF pattern interpretation',
        body: `<p>The combination of CFO / CFI / CFF signs tells a story about the company\'s stage:</p>
        <ul>
          <li><strong>+CFO, −CFI, −CFF</strong> = mature, profitable, returning cash to investors (e.g., Coca-Cola, Apple).</li>
          <li><strong>+CFO, −CFI, +CFF</strong> = growing — operations profitable, investing in growth, raising capital.</li>
          <li><strong>−CFO, −CFI, +CFF</strong> = early-stage / start-up — burning cash, raising capital to invest.</li>
          <li><strong>+CFO, +CFI, −CFF</strong> = potentially declining — selling assets, returning cash, possibly winding down.</li>
        </ul>
        <p><em>Slide example — Facebook 2019</em>: CFO €36.3B generated; CFI ($19.8B) spent on investments; CFF ($7.3B) spent → mature, profitable tech company.</p>`
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
        explanation: 'Correct: A — deducted from NI because it belongs in investing. Logic: when you sell an asset at a gain, the FULL cash proceeds belong in INVESTING (not just the gain). But NI already includes the gain. To avoid double-counting, SUBTRACT the gain from NI in operating, then put the full proceeds in investing.'
      },
      {
        id: 'ch11_q2', type: 'numeric', difficulty: 'hard',
        prompt: 'Morgan Corporation: accrual NI €50,000. AR ↑ €6,000; AP ↓ €4,000; Unearned ↑ €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute CFO in €.',
        answer: 48000, units: '€', tolerance: 0.001,
        explanation: 'Indirect method: Start with NI, ADD non-cash items, ADJUST for working capital changes. Calculation: 50,000 + 7,000 (Dep, ADD) − 6,000 (ΔAR up = SUBTRACT) − 4,000 (ΔAP down = SUBTRACT) + 1,000 (ΔUnearned up = ADD) = €48,000. PPE acquisition is INVESTING (excluded from CFO).'
      },
      {
        id: 'ch11_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'Donald Plastics: Building (cash) €200,000; Machinery via note €10,000; Dividends €20,000; Competitor shares (cash) €30,000; Land sold (cash) €40,000; Depreciation €9,000. Compute CFI in € (negative for outflow).',
        answer: -190000, units: '€', tolerance: 0.001,
        explanation: 'Investing CF includes ONLY actual cash investing flows. Calculation: −200,000 (building paid in cash) − 30,000 (competitor shares paid in cash) + 40,000 (land sold for cash) = −€190,000. Excluded: machinery via note (NON-CASH — disclosed separately), dividends (FINANCING), depreciation (NON-CASH adjustment in operating).'
      },
      {
        id: 'ch11_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Beg RE $80,000; End RE $76,000. NI $64,000. Long-term loan: Beg $49,000, End $42,000. No new loans. Compute CFF in $.',
        answer: -75000, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Solve for dividends. End RE = Beg RE + NI − Dividends → 76,000 = 80,000 + 64,000 − Div → Div = $68,000. Step 2: Loan repaid = 49,000 − 42,000 = $7,000. Step 3: CFF = −Dividends − Loan repayment = −68,000 − 7,000 = −$75,000. Both are financing OUTFLOWS.'
      },
      {
        id: 'ch11_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Ranger 2015: CFO $52,000; CFF −$10,000; CFI −$130,000. Compute net change in cash for 2015 in $ (negative for decrease).',
        answer: -88000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Net Δ Cash = CFO + CFI + CFF. Substitute: 52,000 + (−130,000) + (−10,000) = −$88,000. Negative means cash decreased. Common mistake: adding the absolute values without keeping signs consistent.'
      },
      {
        id: 'ch11_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company sold equipment with BV $40,000 for $50,000 cash. Under indirect method:',
        options: ['Operating shows +$50,000; investing shows nothing', 'Operating subtracts the $10,000 gain; investing shows +$50,000', 'Operating shows +$10,000; investing shows +$40,000', 'Operating shows −$50,000; investing shows +$10,000'],
        correct: 1,
        explanation: 'Correct: B — operating subtracts the $10,000 gain; investing shows +$50,000. The full $50,000 cash proceeds belong in INVESTING. NI already includes the $10,000 gain (50K proceeds − 40K BV), so we must subtract it from operating to avoid double-counting. The other options either omit the gain reversal or misallocate the proceeds.'
      },
      {
        id: 'ch11_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'A decrease in accounts payable, under the indirect method, is:',
        options: ['Added to NI', 'Subtracted from NI', 'Reported as a financing outflow', 'Reported as an investing outflow'],
        correct: 1,
        explanation: 'Correct: B — Subtracted from NI. Logic: AP down means cash was paid to suppliers in excess of expense recognized → cash outflow exceeded what hit the income statement → reduce NI to reflect that. Mnemonic: liability DOWN = cash DOWN.'
      },
      {
        id: 'ch11_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'CFO $250,000. CapEx $90,000. Compute Free Cash Flow in $.',
        answer: 160000, units: '$', tolerance: 0.001,
        explanation: 'Formula: Free Cash Flow = CFO − CapEx. Substitute: 250,000 − 90,000 = $160,000. FCF represents cash available to investors after maintaining/expanding operations. A high positive FCF means the firm can pay dividends, buy back shares, or pay down debt without raising capital.'
      },
      {
        id: 'ch11_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Acquiring a building by issuing $500,000 of common stock would:',
        options: ['Appear as a $500,000 investing outflow and a $500,000 financing inflow', 'Appear only in the noncash transactions disclosure', 'Appear as a $500,000 operating inflow', 'Not be reported anywhere'],
        correct: 1,
        explanation: 'Correct: B — appears only in the noncash transactions disclosure. Acquiring an asset by issuing stock is a NONCASH investing/financing transaction. No cash moved, so it can\'t appear in the main SCF (which only reports actual cash flows). It\'s disclosed separately in supplemental notes so users still see the substantive transaction.'
      },
      {
        id: 'ch11_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Jana Juice (slide): CFO $2,300; CFI −$10,200; CFF $11,900. Beginning cash $6,460. Compute ending cash in $.',
        answer: 10460, units: '$', tolerance: 0.001,
        explanation: 'Step 1: Net Δ Cash = CFO + CFI + CFF = 2,300 + (−10,200) + 11,900 = $4,000. Step 2: End Cash = Beg Cash + Δ Cash = 6,460 + 4,000 = $10,460. The SCF reconciles beginning cash to ending cash via the three sections. Slide-confirmed.'
      },
      {
        id: 'ch11_q11', type: 'numeric', difficulty: 'medium',
        prompt: 'CFO €120,000. Average current liabilities €240,000. Compute OCFCL.',
        answer: 0.5, units: '', tolerance: 0.01,
        explanation: 'Formula: OCFCL = Cash Flow from Operations / Average Current Liabilities. Substitute: 120,000 / 240,000 = 0.50. This means CFO covers 50% of current liabilities — modest liquidity. Higher is better. A ratio above 1.0 means CFO alone could pay off all current liabilities.'
      },
      // From National Beverage Corp case
      {
        id: 'ch11_q12', type: 'numeric', difficulty: 'hard',
        prompt: 'National Beverage 2014 (case): NI $43,635; D&A $10,063; ΔAR −5,864 (decrease); ΔInventory +4,680; ΔPrepaid +2,699; ΔAP +1,345; ΔAccrued −259. Compute net CFO in $ (thousands).',
        answer: 53269, units: '$K', tolerance: 1,
        explanation: 'Indirect method: 43,635 + 10,063 (D&A, ADD) + 5,864 (AR DOWN, ADD because cash freed up) − 4,680 (Inv UP, SUBTRACT) − 2,699 (Prepaid UP, SUBTRACT) + 1,345 (AP UP, ADD) − 259 (Accrued DOWN, SUBTRACT) = $53,269K. Mnemonic: ASSET UP → SUBTRACT; LIABILITY UP → ADD.'
      },
      {
        id: 'ch11_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'National Beverage investing: PP&E purchases ($12,124); PP&E disposal $62; ST investments purchased ($1,463); ST investments sold $2,443. Compute net CFI in $ (thousands, negative for outflow).',
        answer: -11082, units: '$K', tolerance: 1,
        explanation: 'Investing CF includes ALL cash investing flows: −12,124 (PP&E purchase) + 62 (PP&E disposal proceeds) − 1,463 (ST investments purchased) + 2,443 (ST investments sold) = −$11,082K. Net outflow because purchases exceeded sales. PP&E disposal is a CASH inflow even though it\'s small.'
      },
      {
        id: 'ch11_q14', type: 'numeric', difficulty: 'hard',
        prompt: 'Juanito Pizza case: NI $145,000; Dep $9,000; Loss on disposal $3,000; ΔAR −$10,000 (decrease); ΔInv +$5,000; ΔPrepaid +$4,000; ΔAP +$16,000; ΔIncome tax payable −$2,000. Compute net CFO in $.',
        answer: 172000, units: '$', tolerance: 1,
        explanation: 'Indirect method, all in $: NI 145 + Dep 9 (ADD) + Loss 3 (ADD — losses on disposal added back, opposite of gains) + ΔAR 10 (DOWN, ADD) − ΔInv 5 (UP, SUBTRACT) − ΔPrepaid 4 (UP, SUBTRACT) + ΔAP 16 (UP, ADD) − ΔIncome tax 2 (DOWN, SUBTRACT) = $172,000.'
      },
      {
        id: 'ch11_q15', type: 'mcq', difficulty: 'medium',
        prompt: 'In the Juanito Pizza case, the company issued $110,000 of long-term bonds in DIRECT EXCHANGE for land (no cash changed hands). Where does this transaction appear on the SCF?',
        options: ['$110,000 financing inflow + $110,000 investing outflow', 'Only as a financing inflow of $110,000', 'Only as an investing outflow of $110,000', 'In supplemental noncash disclosure — NOT in the main SCF sections'],
        correct: 3,
        explanation: 'Correct: D — supplemental noncash disclosure, NOT in main SCF sections. Issuing $110,000 of bonds in DIRECT exchange for land is a noncash investing/financing transaction. No cash moved, so it can\'t appear in the operating, investing, or financing sections (which all report actual cash flows). It\'s disclosed in supplemental notes so users still see the substantive transaction.'
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
          <li>"Average" performance is not necessarily good — industry averages can be mediocre baselines.</li>
        </ul>`
      },
      {
        title: 'Issues with using debt financing',
        body: `<p>Debt is cheaper than equity (interest is tax-deductible) and boosts ROE when project return > borrowing cost. But high leverage brings real risks:</p>
        <ul>
          <li><strong>Covenants</strong>: lender restrictions on operating activities (maintain D/E below X, cap dividends, no asset sales without consent). Designed to protect debtholders; constrain management.</li>
          <li><strong>Default risk</strong>: more debt = higher probability of missing a payment, especially in a downturn.</li>
          <li><strong>Debt service</strong>: interest + principal payments soak up cash that could otherwise fund growth.</li>
        </ul>`
      },
      {
        title: 'Quality of financial reporting',
        body: `<p>Management has discretion within GAAP — choice of useful lives, salvage values, bad-debt percentages, fair-value estimates, etc. — which creates manipulation risk.</p>
        <p>Ideal financial statements should:</p>
        <ul>
          <li>Reflect an accurate picture of financial condition and performance.</li>
          <li>Be useful both to <em>assess the past</em> and <em>predict the future</em>.</li>
        </ul>
        <p>When ratios look unusually good, ask whether accounting choices (vs real performance) are driving the result.</p>`
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
      { name: 'Expense-to-Sales (ETS)', formula: 'Specific Expense / Sales (e.g., SG&A/Sales) — disaggregates the profit margin' },
      { name: 'PP&E Turnover', formula: 'Sales / Average Net PP&E' },
      { name: 'Horizontal % change', formula: '(Current − Base) / Base' },
      { name: 'Vertical (common-size) IS', formula: 'Each line as % of Revenue' },
      { name: 'Vertical (common-size) BS', formula: 'Each line as % of Total Assets' },
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
      },
      {
        title: 'Lowe\'s liquidity — Quick Ratio (slide)',
        problem: `<p>Lowe\'s FY ending Jan 30, 2015: Cash $466M; Marketable securities $125M; Current liabilities $9,348M. Compute the Quick Ratio. Interpret.</p>`,
        solution: `<p>QR = (466 + 125) / 9,348 = 591 / 9,348 = <strong>0.063</strong> — extremely low.<br>Lowe\'s has plenty of current assets but most are inventory. Excluding inventory exposes a thin cash buffer for paying short-term obligations. Compare to Current Ratio = $10,080 / $9,348 = 1.07 (looks fine). The QR/CR gap signals heavy reliance on inventory liquidity.</p>`
      },
      {
        title: 'Lowe\'s expense-to-sales & PP&E turnover (slide)',
        problem: `<p>Lowe\'s FY2015: SG&A $13,281M; Sales $56,223M. Avg Net PP&E = ($20,834 + $20,034)/2 = $20,434M. Compute SG&A ETS and PP&E Turnover.</p>`,
        solution: `<p>SG&A ETS = 13,281 / 56,223 = <strong>23.62%</strong> (= % of every sales dollar absorbed by SG&A).<br>PP&E Turnover = 56,223 / 20,434 = <strong>2.75 times</strong> (each $1 of PP&E generates $2.75 of sales — efficient asset use).</p>`
      },
      {
        title: 'Lowe\'s — vertical & horizontal income statement (slide)',
        problem: `<p>Lowe\'s: Total revenue $56,223M (FY2015) vs $53,417M (FY2014). NI $2,698M vs $2,286M. Cost of sales $36,665M vs $34,941M. Compute horizontal % changes for revenue and NI; compute COGS/Revenue and NI/Sales (vertical).</p>`,
        solution: `<p>Horizontal: Revenue Δ = (56,223 − 53,417)/53,417 = <strong>+5.3%</strong>. NI Δ = (2,698 − 2,286)/2,286 = <strong>+18.0%</strong>. NI grew much faster than sales — operating leverage at work.<br>Vertical: COGS/Revenue = 36,665 / 56,223 = <strong>65.21%</strong> (vs 65.41% prior — slight margin improvement). NI/Sales = 2,698 / 56,223 = <strong>4.80%</strong> (vs 4.28% prior).</p>`
      },
      {
        title: 'Lowe\'s solvency — D/E vs industry (slide)',
        problem: `<p>Lowe\'s D/E = $21,859M / $9,968M = 2.19. Retail industry average D/E ≈ 1.10. Interpret.</p>`,
        solution: `<p>Lowe\'s is using <strong>roughly 2× the leverage</strong> of the average retailer. This boosts ROE (Lowe\'s ROFL was 16.4 percentage points!) but also raises default risk. Compare TIE (= 9.29 for Lowe\'s) — debt service is comfortable, so the high D/E is supportable.</p>`
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
        explanation: 'Formula: CCC = DIO + DSO − DPO. With no inventory, DIO = 0, so 100 = DSO − 50 → DSO = 150 days. Logic: the cash conversion cycle is how long money is tied up in operations (inventory + receivables) minus financing from suppliers (payables).'
      },
      {
        id: 'ch12_q2', type: 'numeric', difficulty: 'medium',
        prompt: '1,000,000 shares (par €2). NI €12,000,000; div €3,000,000. Price €108. Compute P/E.',
        answer: 9, units: '', tolerance: 0.01,
        explanation: 'Step 1: EPS = Net Income / Shares = 12,000,000 / 1,000,000 = €12 per share. Step 2: P/E = Price / EPS = 108 / 12 = 9. The dividend (€3M) is irrelevant for P/E — it doesn\'t appear in the formula. Common mistake: subtracting dividends from NI before computing EPS (only do that for PREFERRED dividends).'
      },
      {
        id: 'ch12_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'PG & Company: NI $12,846M; Avg Equity $62,269M. Compute ROE in %.',
        answer: 20.6, units: '%', tolerance: 0.1,
        explanation: 'Formula: ROE = Net Income / Average Stockholders\' Equity. Substitute: 12,846 / 62,269 = 0.206 = 20.6%. Common mistake: using total assets in the denominator (gives ROA, not ROE), or using end-of-period equity instead of average equity.'
      },
      {
        id: 'ch12_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Yonge: NI $602M; Sales $90,374M. Compute the profit margin (decimal).',
        answer: 0.0067, units: '', tolerance: 0.001,
        explanation: 'Formula: Net Profit Margin = Net Income / Sales. Substitute: 602 / 90,374 = 0.00666 ≈ 0.0067. Multiplied by 100, that\'s 0.67% — a thin margin typical of high-volume, low-margin retailers. Common mistake: dividing sales by NI (gives the inverse).'
      },
      {
        id: 'ch12_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Flynn: NI €6,000,000 in 2019. NI decreased 70% in 2020 (using 2019 base). Compute Flynn\'s 2020 NI in €.',
        answer: 1800000, units: '€', tolerance: 0.001,
        explanation: 'TRAP: A 70% DECREASE means the new value = base × (1 − 0.70) = base × 30%. Calculation: 6,000,000 × 30% = €1,800,000. Common mistake: computing 6M × 70% = 4.2M (that\'s the size of the DECREASE, not the new value). Always: new = base × (1 + % change).'
      },
      {
        id: 'ch12_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'Formula: TIE = (NI + Tax + Interest) / Interest = EBIT / Interest. Substitute: (160,000 + 60,000 + 40,000) / 40,000 = 260,000 / 40,000 = 6.5 times. The numerator builds back to EBIT (operating earnings before interest and tax) — that\'s the cash available to cover interest.'
      },
      {
        id: 'ch12_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Total Assets €1,200,000; CL €140,000; Non-current liabilities €340,000. Compute the Debt-to-Equity ratio.',
        answer: 0.667, units: '', tolerance: 0.005,
        explanation: 'Step 1: Total Liabilities = Current + Non-current = 140,000 + 340,000 = €480,000. Step 2: Equity = Assets − Liabilities = 1,200,000 − 480,000 = €720,000. Step 3: D/E = Liabilities / Equity = 480,000 / 720,000 = 0.667. Common mistake: using only current liabilities or only LT liabilities — must SUM all liabilities.'
      },
      {
        id: 'ch12_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide data: NI $2,698M; Avg Total Assets $32,279.5M. Compute ROA in %.',
        answer: 8.35, units: '%', tolerance: 0.05,
        explanation: 'Formula: ROA = Net Income / Average Total Assets. Substitute: 2,698 / 32,279.5 = 0.0835 = 8.35%. Slide-confirmed. ROA measures profitability per dollar of assets — useful to compare with industry. Lowe\'s 8.35% is healthy for a retailer.'
      },
      {
        id: 'ch12_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'DSO 45, DIO 60, DPO 30. Compute CCC in days.',
        answer: 75, units: 'days', tolerance: 0.001,
        explanation: 'Formula: CCC = DIO + DSO − DPO. Substitute: 60 + 45 − 30 = 75 days. Logic: 60 days to sell inventory + 45 days to collect = 105 days of working capital tied up, minus 30 days of supplier financing = 75 days net cycle. Lower CCC = faster cash turnover = better liquidity.'
      },
      {
        id: 'ch12_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Profit margin 8%; asset turnover 1.5; equity multiplier 2.0. Compute ROE under DuPont in %.',
        answer: 24, units: '%', tolerance: 0.01,
        explanation: 'Formula (DuPont): ROE = Profit Margin × Asset Turnover × Equity Multiplier. Substitute: 0.08 × 1.5 × 2.0 = 0.24 = 24%. DuPont decomposes ROE to show drivers — operations (PM), efficiency (AT), and leverage (EM). Common mistake: adding instead of multiplying.'
      },
      {
        id: 'ch12_q11', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide: Avg Equity $10,910.5M; Avg Total Assets $32,279.5M. Compute the Equity Multiplier.',
        answer: 2.96, units: '', tolerance: 0.05,
        explanation: 'Formula: Equity Multiplier = Average Total Assets / Average Equity. Substitute: 32,279.5 / 10,910.5 = 2.96. Lowe\'s uses about $3 of assets for every $1 of equity — i.e., $2 of liabilities for every $1 of equity → high financial leverage, which boosts ROE.'
      },
      {
        id: 'ch12_q12', type: 'mcq', difficulty: 'medium',
        prompt: 'Why is comparing a US LIFO oil company directly to a European FIFO oil company misleading without adjustment?',
        options: ['Currency differences distort all ratios', 'LIFO understates ending inventory in inflation, inflating Inventory Turnover artificially', 'IFRS firms use different fiscal years', 'Tax rates differ across countries'],
        correct: 1,
        explanation: 'Correct: B — LIFO understates ending inventory in inflation, inflating Inventory Turnover artificially. The Chevron-vs-Total slide case: unadjusted Chevron showed 10.87× turnover; FIFO-adjusted only 6.00× — much closer to Total\'s 6.83×. Without the LIFO Reserve adjustment, you\'d think Chevron was wildly more efficient when really it just used a different cost flow. A, C, D may be true but aren\'t the LIFO/FIFO issue.'
      },
      {
        id: 'ch12_q13', type: 'numeric', difficulty: 'hard',
        prompt: 'Lowe\'s slide: COGS $36,665M; Avg AP $5,124M. Compute DPO rounded to nearest day.',
        answer: 51, units: 'days', tolerance: 0.5,
        explanation: 'Step 1: AP Turnover = COGS / Avg AP = 36,665 / 5,124 = 7.15. Step 2: DPO = 365 / Turnover = 365 / 7.15 = 51 days. Lowe\'s takes about 51 days to pay suppliers — moderate. Common mistake: using Sales instead of COGS (gives a higher, wrong DPO).'
      },
      {
        id: 'ch12_q14', type: 'numeric', difficulty: 'medium',
        prompt: 'Lowe\'s FY2015: Cash $466M; Marketable securities $125M; Current liabilities $9,348M. Compute the Quick Ratio.',
        answer: 0.063, units: '', tolerance: 0.005,
        explanation: 'Formula: Quick Ratio = (Cash + Marketable Securities + AR) / Current Liabilities. Substitute: (466 + 125) / 9,348 = 591 / 9,348 = 0.063. AR is negligible for cash retailers like Lowe\'s. A QR of 0.063 means only 6.3¢ of liquid assets per $1 of current liabilities — very thin (relies on inventory turnover for liquidity). Excludes inventory and prepaid.'
      },
      {
        id: 'ch12_q15', type: 'numeric', difficulty: 'medium',
        prompt: 'Lowe\'s FY2015: SG&A $13,281M; Sales $56,223M. Compute the SG&A Expense-to-Sales ratio in %.',
        answer: 23.62, units: '%', tolerance: 0.05,
        explanation: 'Formula: Expense-to-Sales = Specific Expense / Sales. Substitute: SG&A ETS = 13,281 / 56,223 = 0.2362 = 23.62%. Meaning: 23.6¢ of every sales dollar goes to SG&A. ETS lets you compare cost structure across firms or periods — a rising ETS warns of cost discipline issues.'
      },
      {
        id: 'ch12_q16', type: 'numeric', difficulty: 'medium',
        prompt: 'Lowe\'s revenue FY2015 $56,223M; FY2014 $53,417M. Compute horizontal % change in %.',
        answer: 5.25, units: '%', tolerance: 0.1,
        explanation: 'Formula: Horizontal % Change = (Current − Base) / Base. Substitute: (56,223 − 53,417) / 53,417 = 2,806 / 53,417 = 0.0525 = 5.25% (≈ 5.3%). Common mistake: dividing by the current year instead of the base year.'
      },
      {
        id: 'ch12_q17', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following is a valid concern when comparing financial ratios across companies?',
        options: ['Industry "average" ratios are always the right benchmark', 'IFRS vs US GAAP differences can distort cross-firm comparison', 'Seasonal businesses have no need for time-trend analysis', 'Diversified conglomerates are easy to benchmark against pure-play peers'],
        correct: 1,
        explanation: 'Correct: B — IFRS vs US GAAP differences distort cross-firm comparison. Real issues: LIFO permitted under GAAP only, impairment reversals under IFRS only, R&D capitalization differs. A is wrong (industry average can be mediocre). C is wrong (seasonality REQUIRES special handling). D is wrong (conglomerates are HARD to benchmark).'
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
      { id: 'mock21_mcq1', type: 'mcq', difficulty: 'easy', prompt: 'Which one of the following is NOT an external user of accounting information?', options: ['Regulatory agencies', 'Customers', 'Investors', 'All of the above are external users of accounting information'], correct: 3, explanation: 'Correct: D — all listed are external. External users are anyone outside the firm: regulators (A), customers (B), investors (C). Internal = managers and employees only. Since A, B, C are all external, the answer is D.' },
      { id: 'mock21_mcq2', type: 'mcq', difficulty: 'medium', prompt: 'A long-term asset is depreciated over its useful life. EBIT after the first year of depreciation is LOWER if the company uses:', options: ['Double-declining balance', 'Straight-line', 'Operating income is not affected by depreciation', 'None'], correct: 0, explanation: 'Correct: A — Double-declining balance. DDB front-loads depreciation: Year 1 expense is much larger than under straight-line. Higher depreciation = lower EBIT in Year 1. Over the full life, total depreciation is identical — only the timing differs.' },
      { id: 'mock21_mcq3', type: 'mcq', difficulty: 'medium', prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000, total assets must change by:', options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'], correct: 2, explanation: 'Correct: C — ¥55,000 decrease. The accounting equation: A = L + E. ΔA = ΔL + ΔE = (−45,000) + (−10,000) = −55,000. Trap: A picks the right number but wrong direction.' },
      { id: 'mock21_mcq4', type: 'mcq', difficulty: 'medium', prompt: 'Ron services a car on July 31. Customer picks up Aug 1, mails payment Aug 5, Ron receives check Aug 6. When is revenue recorded?', options: ['July 31', 'August 1', 'August 5', 'August 6'], correct: 0, explanation: 'Correct: A — July 31. Under accrual accounting, revenue is earned WHEN THE SERVICE IS PERFORMED. The car was serviced July 31 — that\'s when the performance obligation was satisfied. Mailing/receipt are just collection events.' },
      { id: 'mock21_mcq5', type: 'mcq', difficulty: 'medium', prompt: 'Consolidated financial statements are prepared when a company owns _____ of the ordinary shares of another company.', options: ['Less than 20%', 'More than 50%', 'Less than 50%', 'Between 20% and 50%'], correct: 1, explanation: 'Correct: B — More than 50%. Owning >50% = control = consolidation (combine financial statements as one entity). 20-50% = equity method. <20% = fair value.' },
      { id: 'mock21_mcq6', type: 'mcq', difficulty: 'medium', prompt: 'Which adjustment requires DECREASING the liabilities reported on the balance sheet?', options: ['Use of $400 of supplies during the year', 'Recording $400 of depreciation on equipment', 'Earning $400 of revenue collected at the beginning of the year', 'Recording $400 of wages earned that will be paid next year'], correct: 2, explanation: 'Correct: C — earning $400 of revenue collected at the beginning of the year. Original entry was Dr Cash / Cr Unearned Revenue (liability). When earned: Dr Unearned Rev / Cr Revenue → liability ↓. Options A and B reduce ASSETS, not liabilities. D INCREASES a liability.' },
      { id: 'mock21_mcq7', type: 'mcq', difficulty: 'easy', prompt: 'Adjusting entries:', options: ['Ensure revenue and expense recognition principles are followed', 'Are necessary to conform to IFRS and US GAAP', 'Include both accruals and deferrals', 'All of these answer choices are correct'], correct: 3, explanation: 'Correct: D — all are true. Adjusting entries enforce revenue/matching principles, are required by IFRS/GAAP, and include both accruals and deferrals. All three statements describe what adjusting entries do.' },
      { id: 'mock21_mcq8', type: 'mcq', difficulty: 'medium', prompt: 'GLF Company: Beg Inventory $8,000. Purchases $28,400. Ending count $9,600. COGS for the month is:', options: ['$1,600', '$28,400', '$26,800', '$36,400'], correct: 2, explanation: 'Formula: COGS = Beg + Purchases − End. Substitute: 8,000 + 28,400 − 9,600 = $26,800. Answer C. Common mistake: only adding beg+purch (gives 36,400) or only subtracting (gives 1,600).' },
      { id: 'mock21_mcq9', type: 'mcq', difficulty: 'medium', prompt: 'Skyline Corporation: Issued shares (par €10): €600,000. Treasury shares (cost €15/sh): €1,800. How many ordinary shares are outstanding?', options: ['80,000', '59,880', '79,880', '60,000'], correct: 1, explanation: 'Step 1: Issued = €600,000 / €10 par = 60,000 shares. Step 2: Treasury = €1,800 / €15 cost = 120 shares. Step 3: Outstanding = 60,000 − 120 = 59,880. Answer B. Trap: dividing both by the same price.' },
      { id: 'mock21_mcq10', type: 'mcq', difficulty: 'medium', prompt: 'In rising prices, the inventory method whose balance sheet inventory is closest to current cost is:', options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All produce the same value'], correct: 0, explanation: 'Correct: A — FIFO. In rising prices, FIFO leaves the NEWEST (most expensive) units on the balance sheet, so ending inventory is closest to current cost. LIFO does the opposite (oldest on the balance sheet). Average is in between.' },
      { id: 'mock21_mcq11', type: 'mcq', difficulty: 'easy', prompt: 'The net amount expected to be received in cash from receivables is called the:', options: ['Gross realizable value', 'Gross cash value', 'Allowance value', 'Cash (net) realizable value'], correct: 3, explanation: 'Correct: D — Cash (net) realizable value. NRV = Gross AR − Allowance for Doubtful Accounts. The other options (gross realizable, gross cash value, allowance value) aren\'t standard accounting terms.' },
      { id: 'mock21_mcq12', type: 'mcq', difficulty: 'easy', prompt: 'Sales revenue:', options: ['May be recorded before cash is collected', 'Always equals cash collections in a month', 'Only results from credit sales', 'Is only recorded after cash is collected'], correct: 0, explanation: 'Correct: A — sales revenue MAY be recorded before cash is collected. Under accrual accounting, revenue is recognized when EARNED (performance obligation satisfied), regardless of cash timing. Credit sales: book today, collect later.' },
      { id: 'mock21_mcq13', type: 'mcq', difficulty: 'hard', prompt: 'If an expenditure related to a depreciable asset is incorrectly treated as a CAPITAL expenditure instead of repairs/maintenance, which is true?', options: ['NI lower; future depreciation higher', 'NI higher; future depreciation lower', 'NI higher; future depreciation higher', 'NI lower; future depreciation lower'], correct: 2, explanation: 'Correct: C — NI HIGHER and future depreciation HIGHER. Capitalizing instead of expensing: cost added to asset → expense too low → NI too high. But that inflated asset gets depreciated over future years → future depreciation too high. Both move together.' },
      { id: 'mock21_mcq14', type: 'mcq', difficulty: 'medium', prompt: 'A $600,000 bond was retired at 98 when the book value was $590,000. The retirement entry would include:', options: ['Gain of $10,000', 'Gain of $2,000', 'Loss of $2,000', 'Loss of $10,000'], correct: 1, explanation: 'Cash paid = Face × Quote = 600,000 × 0.98 = $588,000. Gain = Carrying Value − Cash = 590,000 − 588,000 = $2,000 GAIN. Answer B. Trap: subtracting Face Value ($600K) instead of Cash ($588K).' },
      { id: 'mock21_mcq15', type: 'mcq', difficulty: 'medium', prompt: 'When a company sells an asset at a gain, which is true?', options: ['Proceeds > historical cost', 'Proceeds < book value', 'Proceeds > book value', 'Proceeds = historical cost'], correct: 2, explanation: 'Correct: C — Proceeds > Book Value. Gain on disposal = Proceeds − BV. Proceeds can be less than historical cost and still be a gain (because BV < cost). A and B and D are wrong.' },
      { id: 'mock21_mcq16', type: 'mcq', difficulty: 'hard', prompt: 'Hale Kennels sells equipment July 1, 2020 for $80,000. Cost $300,000; 5-yr life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Gain or loss?', options: ['$45,000 gain', '$30,000 loss', '$45,000 loss', '$30,000 gain'], correct: 3, explanation: 'Step 1: Annual SL = (300,000 − 50,000)/5 = $50,000/yr. Step 2: Half-year (Jan-Jul) = $25,000. Step 3: Accum Dep = 225,000 + 25,000 = $250,000. Step 4: BV = 300,000 − 250,000 = $50,000. Step 5: Gain = 80,000 − 50,000 = $30,000. Answer D.' },
      { id: 'mock21_mcq17', type: 'mcq', difficulty: 'medium', prompt: 'Which would NOT be recorded as an intangible asset?', options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'], correct: 2, explanation: 'Correct: C — Internally generated goodwill. Goodwill is ONLY recorded when acquired through buying another business. Internally generated goodwill (brand reputation, customer loyalty), no matter how valuable, is NEVER capitalized. Patents, copyrights, franchises CAN be capitalized.' },
      { id: 'mock21_mcq18', type: 'mcq', difficulty: 'easy', prompt: 'Unearned Rent Revenue is:', options: ['A contra account to Rent Revenue', 'Reported as a current liability', 'A revenue account', 'Debited when rent is received in advance'], correct: 1, explanation: 'Correct: B — current liability. Cash received in advance creates an obligation to deliver goods/services later → liability. "Unearned" because revenue isn\'t recognized until earned. Typically classified as current.' },
      { id: 'mock21_mcq19', type: 'mcq', difficulty: 'hard', prompt: 'Mouns Company owns 40% of Darian Corporation. Darian pays $20,000 dividends to Mouns and reports $100,000 NI. The investment will increase Mouns\'s NI by:', options: ['$20,000', '$40,000', '$32,000', '$8,000'], correct: 1, explanation: 'Equity method: Income = Ownership % × Investee NI = 40% × $100,000 = $40,000. Answer B. The $20,000 dividend reduces the INVESTMENT account, not income. Common mistake: counting dividends as income (cost-method behavior).' },
      { id: 'mock21_mcq20', type: 'mcq', difficulty: 'medium', prompt: 'Under the indirect method, a gain on disposal of long-term assets should be:', options: ['Deducted from NI because it belongs in investing', 'Added because it represents an additional source of operating revenue', 'Neither added nor deducted', 'Added because it increases cash from operating'], correct: 0, explanation: 'Correct: A — deducted from NI because it belongs in investing. The full cash proceeds belong in INVESTING. NI already includes the gain, so we must subtract it from operating to avoid double-counting.' },
      // 9 calculated answers from the actual mock
      { id: 'mock21_calc1', type: 'numeric', difficulty: 'hard', prompt: 'Morgan Corporation: Accrual NI €50,000. AR ↑ €6,000; AP ↓ €4,000; Unearned ↑ €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net CFO in €.', answer: 48000, units: '€', tolerance: 0.001, explanation: 'Indirect method: NI 50,000 + Dep 7,000 − ΔAR 6,000 (up = subtract) − ΔAP 4,000 (down = subtract) + ΔUnearned 1,000 (up = add) = €48,000. PPE acquisition is INVESTING.' },
      { id: 'mock21_calc2', type: 'numeric', difficulty: 'hard', prompt: 'Donald Plastics PLC 2019: Building (cash) €200,000. Machinery via note €10,000. Dividends paid €20,000. Competitor shares (cash) €30,000. Land sold (cash) €40,000. Depreciation €9,000. Compute CFI in € (negative for outflow).', answer: -190000, units: '€', tolerance: 0.001, explanation: 'Investing CF includes ONLY cash investing flows: −200 (building) − 30 (shares) + 40 (land sale) = −€190,000. Excluded: machinery via note (NON-CASH), dividends (FINANCING), depreciation (NON-CASH).' },
      { id: 'mock21_calc3', type: 'numeric', difficulty: 'medium', prompt: 'CCC 100 days. No inventory. DPO 50 days. Compute DSO in days.', answer: 150, units: 'days', tolerance: 0.001, explanation: 'Formula: CCC = DIO + DSO − DPO. With no inventory, DIO = 0 → 100 = DSO − 50 → DSO = 150 days.' },
      { id: 'mock21_calc4', type: 'numeric', difficulty: 'medium', prompt: '1,000,000 shares (par €2). NI €12,000,000; div €3,000,000. Price €108. Compute P/E.', answer: 9, units: '', tolerance: 0.01, explanation: 'Step 1: EPS = NI / Shares = 12,000,000 / 1,000,000 = €12. Step 2: P/E = Price / EPS = 108 / 12 = 9. Dividend is irrelevant for P/E.' },
      { id: 'mock21_calc5', type: 'numeric', difficulty: 'hard', prompt: 'PG & Company 2016: NI $12,846; Avg Total Assets $131,503; Avg Equity $62,269; Interest $946. Compute Return on Financial Leverage in % (= ROE − ROA).', answer: 10.8, units: '%', tolerance: 0.5, explanation: 'Step 1: ROE = NI / Avg Equity = 12,846 / 62,269 = 20.6%. Step 2: ROA = NI / Avg Assets = 12,846 / 131,503 = 9.8%. Step 3: ROFL = ROE − ROA = 20.6 − 9.8 = 10.8%. ROFL measures the portion of ROE driven by financial leverage.' },
      { id: 'mock21_calc6', type: 'numeric', difficulty: 'medium', prompt: 'Ranger Inc. 2015: CFO $52,000; CFF −$10,000; CFI −$130,000. Compute net change in cash for 2015 in $ (negative for decrease).', answer: -88000, units: '$', tolerance: 0.001, explanation: 'Formula: Net Δ Cash = CFO + CFI + CFF = 52,000 + (−130,000) + (−10,000) = −$88,000.' },
      { id: 'mock21_calc7', type: 'numeric', difficulty: 'medium', prompt: 'Flynn Corporation: NI €6,000,000 in 2019. NI decreased 70% in 2020 (vs 2019 base). Compute Flynn\'s 2020 NI in €.', answer: 1800000, units: '€', tolerance: 0.001, explanation: 'TRAP: a 70% DECREASE means the NEW value = base × (1 − 0.70) = base × 30%. Calculation: 6,000,000 × 30% = €1,800,000. Common mistake: 6M × 70% gives the size of the decrease ($4.2M), not the new value.' },
      { id: 'mock21_calc8', type: 'numeric', difficulty: 'medium', prompt: 'Fryman Company 2020: NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).', answer: 6.5, units: 'times', tolerance: 0.01, explanation: 'Formula: TIE = (NI + Tax + Interest) / Interest = (160 + 60 + 40) / 40 = 6.5 times. The numerator builds back to EBIT — the earnings available to cover interest.' },
      { id: 'mock21_calc9', type: 'numeric', difficulty: 'medium', prompt: 'Yonge\'s 2015: Interest $435M; NI $602M; Sales $90,374M; Avg total assets $23,491M; Tax rate 35%. Compute the profit margin (decimal).', answer: 0.0067, units: '', tolerance: 0.001, explanation: 'Formula: Net Profit Margin = Net Income / Sales. Substitute: 602 / 90,374 = 0.00666 ≈ 0.0067 (≈ 0.67%). Interest, taxes, and total assets are irrelevant for the profit margin calculation.' }
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
      { id: 'm24_1', type: 'mcq', difficulty: 'easy', prompt: 'A dividend is:', options: ['A distribution of the company\'s earnings to its shareholders', 'Equal to liabilities minus equity', 'Equal to assets minus equity', 'Equal to revenues less expenses'], correct: 0, explanation: 'Correct: A — distribution of earnings to shareholders. A dividend reduces Retained Earnings and pays cash (or property/stock) to owners. B (L − E) and C (A − E) are nonsense formulas. D describes net income, not a dividend.' },
      { id: 'm24_2', type: 'mcq', difficulty: 'easy', prompt: 'Equity is best depicted by:', options: ['Assets = Liabilities', 'Liabilities + Assets', 'Residual equity + Assets', 'Assets − Liabilities'], correct: 3, explanation: 'Correct: D — Assets − Liabilities. From A = L + E, rearranging gives E = A − L. The other options are scrambled (A is incomplete, B and C aren\'t real equations).' },
      { id: 'm24_3', type: 'mcq', difficulty: 'hard', prompt: 'If inventory at the end of the year is UNDERSTATED by $60,000, what will this error cause?', options: ['An understatement of COGS by $60,000', 'An overstatement of gross profit by $60,000', 'An overstatement of inventory by $60,000', 'An understatement of net income by $60,000'], correct: 3, explanation: 'Correct: D — net income understated by $60,000. From COGS = Beg + Purch − End: understated End → OVERSTATED COGS → understated Gross Profit → understated NI. A is backwards. B is opposite. C confuses the error direction.' },
      { id: 'm24_4', type: 'mcq', difficulty: 'medium', prompt: 'Goodwill can be recorded as an asset when:', options: ['An offer is received to purchase the business above asset value', 'A business has above-normal profitability', 'A business is purchased and payment made in excess of fair value of net assets', 'A business creates customer goodwill internally'], correct: 2, explanation: 'Correct: C — business is purchased and payment exceeds FV of net assets. Goodwill = Purchase Price − FV of Net Identifiable Assets — only arises in an acquisition. A (an offer) doesn\'t trigger anything. B (above-normal profits) and D (internally generated) are NEVER recorded as goodwill.' },
      { id: 'm24_5', type: 'mcq', difficulty: 'medium', prompt: 'Quechua issued $400,000, 10-year, 10% coupon bonds. Market rate 12%. The bonds were issued at:', options: ['A price below $400,000', 'A higher price than $400,000', 'A price of $400,000', 'All incorrect'], correct: 0, explanation: 'Correct: A — price below $400,000 (discount). When Coupon (10%) < Market (12%), the bond\'s coupon payments look LOW compared to market alternatives → bond is unattractive at face → must sell BELOW face (at a discount).' },
      { id: 'm24_6', type: 'mcq', difficulty: 'medium', prompt: 'Why might a company repurchase its own shares?', options: ['It feels the market undervalues its shares', 'To offset dilutive effects of employee share options', 'To increase the number of shares outstanding', 'A and B'], correct: 3, explanation: 'Correct: D — both A and B are valid reasons. Companies repurchase shares when the market UNDERVALUES them (signal of confidence) and to OFFSET DILUTION from employee stock options. C is wrong: repurchasing REDUCES (not increases) shares outstanding.' },
      { id: 'm24_7', type: 'mcq', difficulty: 'medium', prompt: 'Which transaction impacting current liabilities has a corresponding entry on the income statement?', options: ['Purchase inventory on credit Jan 1', 'Pay Feb 1 for the Jan 1 purchase', 'Interest accrued on a note payable', 'Pay employees in March for February wages'], correct: 2, explanation: 'Correct: C — accrued interest. Accruing interest creates BOTH an expense (IS) and a payable (BS). A (purchasing inventory on credit) creates only AP and inventory — no IS. B (paying for prior purchase) is just cash/AP. D (paying for previously accrued wages) is cash/payable.' },
      { id: 'm24_8', type: 'mcq', difficulty: 'easy', prompt: 'All of the following increase revenue EXCEPT:', options: ['Issuance of ordinary shares by British Airways', 'Sale of clothing by French Connection', 'Performance of accounting services by PwC', 'Sale of petroleum by Royal Dutch Shell'], correct: 0, explanation: 'Correct: A — share issuance is FINANCING, not revenue. Issuing stock raises cash from owners but doesn\'t generate revenue (no goods/services delivered). B (clothing sale), C (accounting services), and D (petroleum sale) are all operating revenues from delivering goods/services.' },
      { id: 'm24_9', type: 'mcq', difficulty: 'medium', prompt: 'At what level of investment ownership is significant influence often presumed?', options: ['Greater than 20% of voting shares', 'Between 20% and 50% of voting shares', 'Greater than 50% of voting shares', 'Greater than 20% of voting shares OR market value'], correct: 1, explanation: 'Correct: B — between 20% and 50% of voting shares. This is the presumed range for SIGNIFICANT INFLUENCE → equity method. Below 20% = passive (fair value). Above 50% = control (consolidation). A is too broad; D mixes voting shares with market value (irrelevant).' },
      { id: 'm24_10', type: 'mcq', difficulty: 'medium', prompt: 'Law firm received $2,000 for legal services to be provided in the future, credited Unearned Service Revenue. Service is performed before period end, but no adjusting entry. This causes:', options: ['Expenses to be overstated', 'Net income to be overstated', 'Liabilities to be understated', 'Revenues to be understated'], correct: 3, explanation: 'Correct: D — Revenues understated. Without the adjusting entry: Unearned Revenue (liability) is too high; Revenue is too low → revenues understated → NI understated. A and B are wrong direction. C is wrong (liabilities are OVERstated, not under).' },
      { id: 'm24_11', type: 'mcq', difficulty: 'medium', prompt: 'Willie\'s RE increased $15,000. Dividends declared $28,000. Compute net income or loss.', options: ['Net income $13,000', 'Net income $43,000', 'Net loss $43,000', 'Net loss $13,000'], correct: 1, explanation: 'Formula: ΔRE = NI − Dividends → 15,000 = NI − 28,000 → NI = $43,000. Answer B. Logic: RE went UP by $15K despite paying $28K dividends, so NI must have been positive and large enough to cover both.' },
      { id: 'm24_12', type: 'mcq', difficulty: 'medium', prompt: 'Which event will NOT appear in INVESTING cash flows?', options: ['Purchase of treasury stock', 'Purchase of long-term investments', 'Purchase of a building', 'Sale of a machine'], correct: 0, explanation: 'Correct: A — Purchase of treasury stock is FINANCING, not investing. It involves the company\'s OWN equity (a financing source). The other three (long-term investments, building purchase, machine sale) involve external assets — investing.' },
      { id: 'm24_13', type: 'mcq', difficulty: 'medium', prompt: 'Which statement is FALSE?', options: ['SCF explains how cash balance changed during a period', 'PP&E acquisition/disposition cash flows are investing', 'Under indirect method, an INCREASE in AR will be ADDED to NI', 'CFF includes cash flows of issuing/retiring long-term debt and equity'], correct: 2, explanation: 'Correct: C — that statement is FALSE. Under indirect method, an INCREASE in AR should be SUBTRACTED from NI (cash tied up in receivables), not added. The other three statements (A, B, D) are TRUE descriptions of the SCF.' },
      { id: 'm24_14', type: 'mcq', difficulty: 'medium', prompt: 'Gummy: Beg inventory $118,000; End $110,000; Net sales $999,000; GP $303,000. Inventory turnover is closest to:', options: ['2.57', '2.75', '8.76', '6.11'], correct: 3, explanation: 'Step 1: COGS = Sales − GP = 999 − 303 = 696. Step 2: Avg Inv = (118 + 110)/2 = 114. Step 3: Turnover = COGS/Avg Inv = 696/114 = 6.11. Answer D.' },
      { id: 'm24_15', type: 'mcq', difficulty: 'hard', prompt: 'Three-company table. A: D/E 2.4, CR 0.9, NP 4K/Sales 150K. B: D/E 1.8, CR 0.7, NP 6.6K/Sales 250K. C: D/E 0.6, CR 1.1, NP 4K/Sales 30K. Which is TRUE?', options: ['Company A has the best solvency ratio', 'Company B has the best liquidity ratio', 'Company C has the best profitability ratios', 'Company A and C have the same profitability ratios'], correct: 2, explanation: 'Correct: C. Computing NPMs: A = 4/150 = 2.67%; B = 6.6/250 = 2.64%; C = 4/30 = 13.33%. C has highest NPM. C also has lowest D/E (0.6, best solvency) and highest CR (1.1, best liquidity). C wins on profitability, solvency, AND liquidity.' },
      { id: 'm24_16', type: 'numeric', difficulty: 'hard', prompt: '$10M warehouse contract, total estimated cost $7.5M. 2022 costs $2.625M. Compute 2022 revenue under percentage-of-completion in $.', answer: 3500000, units: '$', tolerance: 0.001, explanation: 'Step 1: % Complete = Costs to Date / Total Estimated Costs = 2,625,000 / 7,500,000 = 35%. Step 2: Year 1 Revenue = 35% × 10,000,000 = $3,500,000. Common mistake: applying 35% to the gross profit instead of contract price.' },
      { id: 'm24_17', type: 'numeric', difficulty: 'hard', prompt: 'Sumantra sold a machine for $115,000. Cost $175,000 five years ago; SL over 12 years to $25,000 salvage. Compute the gain (loss) reported in $.', answer: 2500, units: '$', tolerance: 0.001, explanation: 'Step 1: Annual SL = (175,000 − 25,000) / 12 = $12,500/yr. Step 2: After 5 yrs, Accum Dep = 5 × 12,500 = $62,500. Step 3: BV = 175,000 − 62,500 = $112,500. Step 4: Gain = Proceeds − BV = 115,000 − 112,500 = $2,500.' },
      { id: 'm24_18', type: 'numeric', difficulty: 'medium', prompt: 'Watch Station: Beg RE $0; NI $1,750,000; Dividends paid $300,000. Compute ending RE in $.', answer: 1450000, units: '$', tolerance: 0.001, explanation: 'Formula: End RE = Beg RE + NI − Dividends. Substitute: 0 + 1,750,000 − 300,000 = $1,450,000. Standard RE roll-forward.' },
      { id: 'm24_19', type: 'numeric', difficulty: 'hard', prompt: 'Gel IQ: NI $570K; AP ↓ $49K; Prepaid ↑ $38K; Dep $68.5K; AR ↓ $48K; Loss on sale $38K; Wages payable ↑ $22.5K; Unearned rev ↓ $38K. Compute net cash from OPERATING activities in $.', answer: 622000, units: '$', tolerance: 0.001, explanation: 'Indirect method, all in $K: 570 (NI) − 49 (AP DOWN, subtract) − 38 (Prepaid UP, subtract) + 68.5 (Dep, add) + 48 (AR DOWN, add) + 38 (Loss on sale, add — losses added back) + 22.5 (Wages payable UP, add) − 38 (Unearned DOWN, subtract) = $622K.' },
      { id: 'm24_20', type: 'numeric', difficulty: 'medium', prompt: 'Kobo: NI $27,000; Total assets $40,500; Total equity $19,100. Compute D/E.', answer: 1.12, units: '', tolerance: 0.01, explanation: 'Step 1: Total Liabilities = Assets − Equity = 40,500 − 19,100 = $21,400. Step 2: D/E = Liabilities / Equity = 21,400 / 19,100 = 1.12.' },
      { id: 'm24_21', type: 'numeric', difficulty: 'medium', prompt: 'Signoria: Issued bonds $67,000; cash dividends $9,700; treasury stock $16,700; new equipment $20,700. Compute net CFF in $.', answer: 40600, units: '$', tolerance: 0.001, explanation: 'CFF includes financing flows only: +67,000 (bonds issued) − 9,700 (dividends) − 16,700 (treasury) = $40,600. New equipment is INVESTING (excluded).' },
      { id: 'm24_22', type: 'numeric', difficulty: 'medium', prompt: 'Pitti: Sold equipment $130,000; bought building $3,255,000; sold long-term investments $145,000; paid dividends $15,000. Compute net CFI in $ (negative for outflow).', answer: -2980000, units: '$', tolerance: 0.001, explanation: 'CFI includes investing flows: +130,000 (equipment sold) − 3,255,000 (building bought) + 145,000 (LT investments sold) = −$2,980,000. Dividends are FINANCING (excluded).' },
      { id: 'm24_23', type: 'numeric', difficulty: 'hard', prompt: 'Fiorentella: EBIT $133,000; Interest $18,300; Tax $29,800; Avg Equity $693,000. Compute ROE in %.', answer: 12.25, units: '%', tolerance: 0.05, explanation: 'Step 1: NI = EBIT − Interest − Tax = 133,000 − 18,300 − 29,800 = $84,900. Step 2: ROE = NI / Avg Equity = 84,900 / 693,000 = 12.25%.' },
      { id: 'm24_24', type: 'numeric', difficulty: 'hard', prompt: 'Vaporetto: NI $304,500; Loss on sale $19,450; Dep $42,250. AR 400→500; Inv 100→75; AP 200→280; Accrued 300→260. Compute net cash from OPERATING in $.', answer: 331200, units: '$', tolerance: 0.001, explanation: 'Indirect method: 304,500 (NI) + 19,450 (Loss, add back) + 42,250 (Dep, add) − 100,000 (ΔAR up, subtract) + 25,000 (ΔInv down, add) + 80,000 (ΔAP up, add) − 40,000 (ΔAccrued down, subtract) = $331,200.' },
      { id: 'm24_25', type: 'numeric', difficulty: 'medium', prompt: 'Madagascar: Sales 100K; Interest 10K; Op Exp 20K; COGS 30K; Tax 5K; Dep 6K; Inventory 40K. Compute Gross Profit Margin in %.', answer: 70, units: '%', tolerance: 0.01, explanation: 'Formula: GPM = (Sales − COGS) / Sales = (100K − 30K) / 100K = 70%. Operating expenses, taxes, depreciation, and inventory are irrelevant for GROSS profit margin (only Sales and COGS).' },
      { id: 'm24_26', type: 'numeric', difficulty: 'hard', prompt: 'Rainbow: CFO $362,400; NI $310,800; Interest $33,600; Tax $248,400. Compute Times Interest Earned (in times).', answer: 17.64, units: 'times', tolerance: 0.05, explanation: 'Formula: TIE = (NI + Tax + Interest) / Interest = (310.8 + 248.4 + 33.6) / 33.6 = 592.8 / 33.6 = 17.64 times. The numerator rebuilds EBIT from below.' },
      { id: 'm24_27', type: 'numeric', difficulty: 'hard', prompt: 'Agnes: CA 153K; Total liab 303K; Avg AR 12.9K; Inv 41K; LT liab 203K; Sales 139K; COGS 87K. Compute DSO in days (365-day year).', answer: 33.87, units: 'days', tolerance: 0.05, explanation: 'Step 1: AR Turnover = Sales / Avg AR = 139 / 12.9 = 10.78. Step 2: DSO = 365 / Turnover = 365 / 10.78 = 33.87 days. Common mistake: using COGS instead of Sales.' },
      { id: 'm24_28', type: 'numeric', difficulty: 'hard', prompt: 'Anna\'s Antiques: aging analysis estimates $8,120 uncollectible. AR balance $250,000. Allowance has $1,625 CREDIT balance pre-adjustment. Compute Bad Debt Expense in $.', answer: 6495, units: '$', tolerance: 0.001, explanation: 'Aging method formula: BDE = Required Ending Allowance − Existing Balance. Substitute: 8,120 − 1,625 (CREDIT balance) = $6,495. The CREDIT balance is subtracted because it\'s already in the right direction.' },
      { id: 'm24_29', type: 'numeric', difficulty: 'medium', prompt: 'Ricardus: Sold a machine. Cost $60,000; accum dep $45,000; gain $6,000. Compute the selling price in $.', answer: 21000, units: '$', tolerance: 0.001, explanation: 'Step 1: BV = Cost − Accum Dep = 60,000 − 45,000 = $15,000. Step 2: Gain = Proceeds − BV → 6,000 = Price − 15,000 → Price = $21,000.' },
      { id: 'm24_30', type: 'numeric', difficulty: 'hard', prompt: 'Square9 laptops: Beg 160 @ $460; Purch 260 @ $510, 360 @ $560, 230 @ $610. Sold 900. Compute LIFO COGS in $.', answer: 497500, units: '$', tolerance: 0.001, explanation: 'Step 1: Available = 160 + 260 + 360 + 230 = 1,010 units; sold 900; ending = 110 units. Step 2: Under LIFO, ending = OLDEST units = 110 × $460 = $50,600. Step 3: Total cost available = 73,600 + 132,600 + 201,600 + 140,300 = $548,100. Step 4: LIFO COGS = 548,100 − 50,600 = $497,500.' }
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
      { id: 'm25_1', type: 'mcq', difficulty: 'easy', prompt: 'Which describes the primary objective of the BALANCE SHEET?', options: ['To measure the net income of a business up to a particular point in time', 'To report the difference between cash inflows and outflows for the period', 'To report the financial position of the reporting entity at a particular point in time', 'To report changes in common stock and retained earnings for the period'], correct: 2, explanation: 'Correct: C — financial position at a particular point in time. The Balance Sheet is a SNAPSHOT ("as of Dec 31"). A describes the Income Statement. B describes the Cash Flow Statement. D describes the Statement of Stockholders\' Equity.' },
      { id: 'm25_2', type: 'mcq', difficulty: 'medium', prompt: 'A corporation purchased factory equipment using cash. Which is correct?', options: ['Cost is an expense on the IS at time of purchase', 'Total assets will not change', 'Total liabilities will increase', 'Stockholders\' equity will decrease'], correct: 1, explanation: 'Correct: B — total assets unchanged. The transaction is Equipment +X / Cash −X. One asset goes up, another goes down by the same amount. No IS effect (A wrong), no liabilities (C wrong), no equity change (D wrong).' },
      { id: 'm25_3', type: 'mcq', difficulty: 'medium', prompt: 'Initially recording deferred/unearned revenue when cash is received from a customer:', options: ['Revenue is increased', 'Liabilities are not affected', 'Retained earnings increase', 'Net income is not affected'], correct: 3, explanation: 'Correct: D — net income is not affected. Receiving cash for unearned revenue: Dr Cash / Cr Unearned Revenue (liability). No revenue, no IS impact at this point. Revenue is recognized LATER when earned.' },
      { id: 'm25_4', type: 'mcq', difficulty: 'medium', prompt: 'Under IFRS, which would NOT be recorded as an intangible asset?', options: ['Internally generated goodwill', 'Franchise rights', 'Purchased patents', 'Purchased copyrights'], correct: 0, explanation: 'Correct: A — Internally generated goodwill. Goodwill is ONLY recorded when acquired through buying another business. Internally generated goodwill is NEVER capitalized. Franchise rights, purchased patents, and purchased copyrights CAN be capitalized.' },
      { id: 'm25_5', type: 'mcq', difficulty: 'medium', prompt: 'HarborView SA: NI €210,000; Interest €28,000; Tax €32,000. Compute Times Interest Earned.', options: ['8.43', '9.64', '7.50', '6.56'], correct: 1, explanation: 'Formula: TIE = (NI + Tax + Interest) / Interest = (210 + 32 + 28) / 28 = 270 / 28 = 9.64. Answer B.' },
      { id: 'm25_6', type: 'mcq', difficulty: 'medium', prompt: 'Which transaction results in an INCREASE when using indirect method to calculate operating cash flows?', options: ['Decrease in inventory', 'Increase in accounts receivable', 'Increase in prepaid expenses', 'Decrease in accounts payable'], correct: 0, explanation: 'Correct: A — decrease in inventory. ASSET DOWN = cash freed up = ADD to NI. The other three are SUBTRACTIONS: AR up (asset up), Prepaid up (asset up), AP down (liability down) all reduce CFO.' },
      { id: 'm25_7', type: 'mcq', difficulty: 'hard', prompt: 'MapleTech sold equipment for €58,000 cash. Cost €120,000; accum dep €75,000. Which is correct?', options: ['Investing CF +€45,000; no gain or loss', 'Investing CF +€58,000; gain of €13,000', 'Financing CF +€58,000; gain of €45,000', 'Financing CF +€58,000; loss of €13,000'], correct: 1, explanation: 'Step 1: BV = Cost − Accum Dep = 120,000 − 75,000 = €45,000. Step 2: Gain = Proceeds − BV = 58,000 − 45,000 = €13,000. Step 3: Cash proceeds (€58,000 — full amount) appear in INVESTING. Answer B. Trap: A omits the gain; D classifies as financing (wrong — equipment sale is investing).' },
      { id: 'm25_8', type: 'mcq', difficulty: 'medium', prompt: 'Pinky Promise has +CFO, −CFI, −CFF. What does this pattern suggest?', options: ['More assets being sold than CAPEX', 'The company is in start-up growth stage', 'The company is losing money from operations', 'The company is a mature company'], correct: 3, explanation: 'Correct: D — mature company. The +CFO/−CFI/−CFF pattern means: profitable operations (CFO+), still investing for growth (CFI−), AND returning cash to investors via debt repayment & dividends (CFF−). Classic Apple/Coca-Cola pattern. A is partial. B describes start-ups (−CFO, +CFF). C contradicts the +CFO.' },
      { id: 'm25_9', type: 'mcq', difficulty: 'medium', prompt: 'Aqua Bona: D/E rose from 1.2 to 2.8; Interest coverage fell from 5× to 2×. This indicates:', options: ['Lower financial risk', 'Increased solvency', 'Higher leverage risk', 'Improved profitability'], correct: 2, explanation: 'Correct: C — higher leverage risk. D/E up (more debt) AND interest coverage down (less ability to pay interest) both signal HIGHER financial risk. A is wrong (lower risk would mean lower D/E). B is wrong (lower coverage = WORSE solvency). D — leverage doesn\'t measure profitability.' },
      { id: 'm25_10', type: 'mcq', difficulty: 'hard', prompt: 'Luna SA repurchased €500,000 face-value bonds. Carrying value €512,000; gain on retirement €7,000. What were cash proceeds paid and where on the SCF?', options: ['€512,000 paid; Financing outflow', '€505,000 paid; Financing outflow', '€519,000 paid; Investing outflow', '€507,000 paid; Financing outflow'], correct: 1, explanation: 'Step 1: Gain on retirement = Carrying Value − Cash Paid → 7,000 = 512,000 − Cash → Cash = €505,000. Step 2: Bond retirement is FINANCING (returning capital to bondholders). Answer B.' },
      { id: 'm25_11', type: 'mcq', difficulty: 'hard', prompt: 'Bunny: retired ONE-FOURTH of $419,000 of bonds payable for $99,800. Originally issued at par in 2019. Which is correct?', options: ['Loss of $4,950 will be reported', 'Gain of $319,200 will be reported', 'Gain of $4,950 will be reported', 'SE not affected'], correct: 2, explanation: 'Step 1: Face retired = 419,000 / 4 = $104,750. Step 2: Issued at par → Carrying Value = Face = $104,750. Step 3: Gain = CV − Cash = 104,750 − 99,800 = $4,950. Answer C. Trap: B uses the full $419K. A confuses gain with loss.' },
      { id: 'm25_12', type: 'mcq', difficulty: 'medium', prompt: 'Company repurchased shares of its own common stock for $20,600. Originally issued in 2022 for $16,000 with $6,600 par. Which is correct for 2024?', options: ['Stockholders\' equity decreases $20,600', 'NI increases by $9,400', 'NI decreases by $9,400', 'SE increases by $16,000'], correct: 0, explanation: 'Correct: A — SE decreases $20,600. Treasury stock = contra-equity. Buying back shares for $20,600 reduces SE by the full $20,600 cost. NEVER any P&L gain or loss on treasury (B and C wrong). D ignores the treasury reduction.' },
      { id: 'm25_13', type: 'mcq', difficulty: 'hard', prompt: 'Days table. Alpha: DIO 45, DSO 70, DPO 40. Beta: 110/35/60. Gamma: 28/90/25. Which statement is WRONG?', options: ['Gamma has the slowest collection of receivables', 'Beta takes the longest time to sell inventory', 'Gamma has the best days payable outstanding', 'Alpha has the best CCC cycle'], correct: 2, explanation: 'Correct: C — that statement is WRONG. Gamma\'s DPO is the LOWEST (25 days), which is the WORST not best. Companies want HIGH DPO (delay paying suppliers = free financing). The other statements are TRUE: Gamma has highest DSO (slowest collection ✓), Beta has highest DIO (slowest inventory ✓), Alpha has lowest CCC = 75 (best cycle ✓).' },
      { id: 'm25_14', type: 'mcq', difficulty: 'medium', prompt: 'A: CR 2.1, QR 1.4, NPM 6%, ROA 7%. B: CR 1.3, QR 0.9, NPM 11%, ROA 13%. Most accurate interpretation?', options: ['A is more liquid; B is more profitable', 'A is more profitable; B is more liquid', 'B is both more liquid and more profitable', 'A is both more liquid and more profitable'], correct: 0, explanation: 'Correct: A — A is more liquid; B is more profitable. A has higher CR (2.1 vs 1.3) and higher QR (1.4 vs 0.9) → more liquid. B has higher NPM (11% vs 6%) and higher ROA (13% vs 7%) → more profitable. The other options either reverse this or claim a single firm dominates both.' },
      { id: 'm25_15', type: 'mcq', difficulty: 'medium', prompt: 'Which of the following REDUCES Cash Flow from Financing (CFF)?', options: ['Issuance of common stock for cash', 'Purchase of long-term investments using cash', 'Repayment of long-term debt with cash', 'Issuance of bonds at a premium for cash'], correct: 2, explanation: 'Correct: C — repayment of long-term debt with cash. Debt repayment is a financing OUTFLOW (reduces CFF). A and D are financing INFLOWS (increase CFF). B is INVESTING (purchase of long-term investments), not financing.' },
      { id: 'm25_16', type: 'numeric', difficulty: 'medium', prompt: 'Eagle Crest: Common stock $12K → $16K; APIC ↑ $3.7K; RE $70K → $91K; NI $38K. Compute dividends paid in $.', answer: 17000, units: '$', tolerance: 0.001, explanation: 'Step 1: ΔRE = End − Beg = 91,000 − 70,000 = $21,000. Step 2: ΔRE = NI − Dividends → 21,000 = 38,000 − Div → Div = $17,000. Common stock and APIC changes don\'t affect RE — they\'re separate equity components.' },
      { id: 'm25_17', type: 'numeric', difficulty: 'hard', prompt: 'Vivid Corp Dec 31 adjustments: Dep $45K; Recorded AR $29K; Accrued exp $14K; Used insurance $5K (was prepaid); Rent earned $3K (was unearned). Total assets PRIOR = $430K. Compute total assets AFTER in $.', answer: 409000, units: '$', tolerance: 0.001, explanation: 'Asset effects: Depreciation reduces equipment (−$45K). Recording AR adds (+$29K). Used insurance reduces prepaid (−$5K). Accrued expenses and rent earned hit liabilities, NOT assets. Net asset change = −45 + 29 − 5 = −$21K. End assets = 430,000 − 21,000 = $409,000.' },
      { id: 'm25_18', type: 'numeric', difficulty: 'hard', prompt: 'Hudson Co: NRV of AR estimated $226,000. AR balance Dec 31 $272,500. Write-offs during year $21,300. Allowance Jan 1 $31,500. Compute 2024 Bad Debt Expense in $.', answer: 36300, units: '$', tolerance: 0.001, explanation: 'Formula: BDE = Required Ending Allowance + Write-offs − Beg Allowance. Step 1: Required end allowance = AR − NRV = 272,500 − 226,000 = $46,500. Step 2: BDE = 46,500 + 21,300 − 31,500 = $36,300. The write-offs are added back because they were a charge against the allowance during the year.' },
      { id: 'm25_19', type: 'numeric', difficulty: 'medium', prompt: 'Bayfield: Beg inventory $220,000; COGS $920,000; End inventory $170,000. Compute purchases in $.', answer: 870000, units: '$', tolerance: 0.001, explanation: 'Formula: COGS = Beg + Purchases − End → 920,000 = 220,000 + P − 170,000 → P = 920,000 − 220,000 + 170,000 = $870,000. Solving for purchases when you know the other three.' },
      { id: 'm25_20', type: 'numeric', difficulty: 'medium', prompt: 'Solaris equipment list price $72,000. Paid $55,000 cash + financed $17,000. Shipping $2,600. Installation $3,800. Compute the recorded cost in $.', answer: 78400, units: '$', tolerance: 0.001, explanation: 'Capitalize all costs to acquire AND prepare the asset for use: List Price 72,000 + Shipping 2,600 + Installation 3,800 = $78,400. Financing source (cash vs. note) is irrelevant — the cost is the same. Common mistake: using only the cash paid ($55,000) — missing the financed portion.' },
      { id: 'm25_21', type: 'numeric', difficulty: 'medium', prompt: 'Evans Suppliers: Oct 1, 2024 signed 1-year, 6%, $160,000 note. Calendar year basis. Compute interest expense for 2024 in $.', answer: 2400, units: '$', tolerance: 0.001, explanation: 'Formula: Interest = Principal × Rate × (Months/12). Months from Oct 1 to Dec 31 = 3. Substitute: 160,000 × 6% × 3/12 = $2,400. Common mistake: using 12/12 (full year) — but only 3 months elapsed in 2024.' },
      { id: 'm25_22', type: 'numeric', difficulty: 'hard', prompt: 'Artemis: 10,500,000 shares issued (par $1). APIC $27,300,000. 9,900,000 outstanding. Treasury repurchase price $12/share. Compute net contributed capital in $.', answer: 30600000, units: '$', tolerance: 0.001, explanation: 'Step 1: Common Stock = 10,500,000 × $1 par = $10.5M. Step 2: APIC = $27.3M. Step 3: Treasury = (10,500,000 − 9,900,000) × $12 = 600,000 × $12 = $7.2M. Step 4: Net contributed capital = 10.5M + 27.3M − 7.2M = $30.6M.' },
      { id: 'm25_23', type: 'numeric', difficulty: 'hard', prompt: 'SkyBridge SA: NI €150K; Dep €35K; AR ↑ €19K; Inv ↑ €14K; Unearned ↑ €7K; Prepaid ↓ €4K. Compute CFO in €.', answer: 163000, units: '€', tolerance: 0.001, explanation: 'Indirect method: 150 (NI) + 35 (Dep, add) − 19 (AR up, subtract) − 14 (Inv up, subtract) + 7 (Unearned up, add) + 4 (Prepaid down, add) = €163,000. Mnemonic: ASSET UP → SUBTRACT; LIABILITY UP → ADD.' },
      { id: 'm25_24', type: 'numeric', difficulty: 'hard', prompt: 'Revenue €1,200; Op Exp (excl D&A) €120; D&A €60; COGS €720; Interest €30; Tax €54. Compute Net Profit Margin in %.', answer: 18, units: '%', tolerance: 0.05, explanation: 'Step 1: GP = Revenue − COGS = 1,200 − 720 = 480. Step 2: EBIT = GP − Op Exp − D&A = 480 − 120 − 60 = 300. Step 3: EBT = EBIT − Interest = 300 − 30 = 270. Step 4: NI = EBT − Tax = 270 − 54 = 216. Step 5: NPM = NI / Revenue = 216 / 1,200 = 18%.' },
      { id: 'm25_25', type: 'numeric', difficulty: 'medium', prompt: 'Y1 Total assets €900; Y2 Total assets €1,300; Y2 NI €180. Compute ROA Y2 in %.', answer: 16.36, units: '%', tolerance: 0.05, explanation: 'Step 1: Avg Total Assets = (900 + 1,300) / 2 = 1,100. Step 2: ROA = NI / Avg Assets = 180 / 1,100 = 16.36%. Common mistake: using END assets (gives 13.85%) instead of AVERAGE.' },
      { id: 'm25_26', type: 'numeric', difficulty: 'medium', prompt: 'SilverStone: Y1 COGS €3,900; Y2 COGS €4,200. Inventory Y1 €520; Y2 €600. Compute Inventory Turnover for Y2 (in times).', answer: 7.5, units: 'times', tolerance: 0.05, explanation: 'Step 1: Avg Inventory Y2 = (520 + 600) / 2 = 560. Step 2: Inventory Turnover Y2 = COGS / Avg Inv = 4,200 / 560 = 7.50 times. Common mistake: using just end inventory (7.0) or beg only.' },
      { id: 'm25_27', type: 'numeric', difficulty: 'easy', prompt: 'Aurora: DIO 52; DPO 34; DSO 35. Compute Cash Conversion Cycle in days.', answer: 53, units: 'days', tolerance: 0.001, explanation: 'Formula: CCC = DIO + DSO − DPO = 52 + 35 − 34 = 53 days. Working capital tied up in inventory + receivables, less supplier financing.' },
      { id: 'm25_28', type: 'numeric', difficulty: 'hard', prompt: 'Communicated mobile phones: Beg 270 @ $570; Purch 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175. Compute FIFO ENDING INVENTORY in $.', answer: 158400, units: '$', tolerance: 0.001, explanation: 'Step 1: Available = 270 + 370 + 470 + 285 = 1,395 units; sold 1,175; ending = 220 units. Step 2: Under FIFO, ending = NEWEST units = the most recent 285-unit batch @ $720. Step 3: 220 × $720 = $158,400. Common mistake: using LIFO logic (would give 220 × $570 = $125,400 from oldest).' },
      { id: 'm25_29', type: 'numeric', difficulty: 'medium', prompt: 'Frame Industries: Jan 1, 2024 purchased delivery vehicle costing $26,300; 6-year life; $2,900 residual. Compute book value as of Dec 31, 2025 (SL method) in $.', answer: 18500, units: '$', tolerance: 0.001, explanation: 'Step 1: Annual SL = (Cost − Salvage) / Life = (26,300 − 2,900) / 6 = $3,900/yr. Step 2: After 2 yrs (2024 + 2025), Accum Dep = 2 × 3,900 = $7,800. Step 3: BV = Cost − Accum Dep = 26,300 − 7,800 = $18,500.' },
      { id: 'm25_30', type: 'numeric', difficulty: 'hard', prompt: 'SilverPeak 2024: Issued shares €620K; dividends €95K; treasury repurchase €25K; loan repaid €40K; equipment purchased €30K. Compute Financing CF in €.', answer: 460000, units: '€', tolerance: 0.001, explanation: 'CFF includes financing flows only: +620 (shares issued) − 95 (dividends) − 25 (treasury) − 40 (loan repaid) = €460,000. Equipment is INVESTING (excluded from CFF).' }
    ]
  }
];

// =============================================================
// FORMULA CHAINS — derive each formula from the one above so you only
// have to memorize the anchor. Each chain is a tree of formulas.
// =============================================================
// New chain rule: every formula's first word/term must appear somewhere in a
// previous formula in the same chain. Memorize the anchor at the top; you can
// derive every line below by following the linked words.

const CHAINS = [
  {
    id: 'accounting_eq',
    title: 'The Accounting Equation',
    chapters: 'Ch 1 · Ch 2 · Ch 3',
    intro: 'Memorize the anchor at top. Every line below starts with a word from a line above.',
    steps: [
      { formula: 'Assets = Liabilities + Equity', note: 'Anchor. Always holds.' },
      { formula: 'Equity = Assets − Liabilities', note: '"Equity" was in the line above. Just rearrange.' },
      { formula: 'Liabilities = Assets − Equity', note: '"Liabilities" was in line 1. Same rearrangement.' },
      { formula: 'Equity = Contributed Capital + Retained Earnings', note: 'Expand "Equity" into its sources.' },
      { formula: 'Contributed Capital = Common Stock (par) + APIC − Treasury Stock', note: 'Break down "Contributed Capital" from line 4.' },
      { formula: 'Retained Earnings (end) = Retained Earnings (beg) + Net Income − Dividends', note: 'RE roll-forward — "Retained Earnings" was in line 4.' },
      { formula: 'Net Income = Revenues − Expenses', note: '"Net Income" was in line 6.' },
      { formula: 'Revenues = Net Income + Expenses', note: '"Revenues" was in line 7. Solve for it.' },
      { formula: 'Expenses = Revenues − Net Income', note: '"Expenses" was in line 7. Solve for it.' },
      { formula: 'Dividends = Beg RE + Net Income − End RE', note: '"Dividends" was in line 6. Solve to back out dividends paid.' }
    ]
  },
  {
    id: 'income_statement',
    title: 'Income Statement Build-Down',
    chapters: 'Ch 2 · Ch 12',
    intro: 'Each subtotal contains the previous one — every term reappears below.',
    steps: [
      { formula: 'Revenue − COGS = Gross Profit', note: 'Anchor. Top line minus cost of sales.' },
      { formula: 'Revenue = Gross Profit + COGS', note: '"Revenue" was in line 1.' },
      { formula: 'COGS = Revenue − Gross Profit', note: '"COGS" was in line 1.' },
      { formula: 'Gross Profit − Operating Expenses = Operating Income (EBIT)', note: '"Gross Profit" carries down from line 1; introduces "Operating".' },
      { formula: 'Gross Profit Margin = Gross Profit / Revenue', note: '"Gross Profit" again.' },
      { formula: 'Operating Income − Interest Expense = Pre-tax Income (EBT)', note: '"Operating Income" was in line 4; introduces "Pre-tax".' },
      { formula: 'Operating Margin = Operating Income / Revenue', note: '"Operating" was in line 4.' },
      { formula: 'Pre-tax Income − Tax = Net Income', note: '"Pre-tax Income" was in line 6.' },
      { formula: 'Pre-tax Income × Tax Rate = Tax', note: '"Pre-tax Income" again.' },
      { formula: 'Net Income = Pre-tax Income × (1 − Tax Rate)', note: '"Net Income" was in line 8.' },
      { formula: 'Net Profit Margin = Net Income / Revenue', note: '"Net Income" again.' }
    ]
  },
  {
    id: 'cogs_chain',
    title: 'Inventory & COGS',
    chapters: 'Ch 5',
    intro: 'One core equation — solve for whichever piece is missing.',
    steps: [
      { formula: 'COGS = Beg Inventory + Purchases − End Inventory', note: 'Anchor.' },
      { formula: 'Beg Inventory = COGS + End Inventory − Purchases', note: '"Beg Inventory" was in line 1.' },
      { formula: 'End Inventory = Beg Inventory + Purchases − COGS', note: '"End Inventory" was in line 1.' },
      { formula: 'Purchases = COGS + End Inventory − Beg Inventory', note: '"Purchases" was in line 1.' },
      { formula: 'COGS = Sales − Gross Profit', note: '"COGS" again — links to the income statement.' },
      { formula: 'Gross Profit = Sales − COGS', note: '"Gross Profit" was in line 5.' },
      { formula: 'Sales = COGS + Gross Profit', note: '"Sales" was in line 5.' },
      { formula: 'Gross Profit Margin = Gross Profit / Sales', note: '"Gross Profit" again.' },
      { formula: 'Inventory Turnover = COGS / Average Inventory', note: '"Inventory" was in line 1.' },
      { formula: 'Inventory at FIFO = Inventory at LIFO + LIFO Reserve', note: '"Inventory" again. Introduces FIFO and LIFO.' },
      { formula: 'LIFO Reserve = Inventory at FIFO − Inventory at LIFO', note: '"LIFO" was in line 10.' },
      { formula: 'FIFO COGS = LIFO COGS − Δ LIFO Reserve', note: '"FIFO" was in line 10. Convert LIFO firm to FIFO.' }
    ]
  },
  {
    id: 'receivables_chain',
    title: 'Receivables & Allowance Method',
    chapters: 'Ch 4',
    intro: 'NRV is the anchor — the rest are mechanical.',
    steps: [
      { formula: 'NRV = Gross AR − Allowance', note: 'Anchor. Net realizable value of receivables.' },
      { formula: 'Gross AR = NRV + Allowance', note: '"Gross AR" was in line 1.' },
      { formula: 'Allowance = Gross AR − NRV', note: '"Allowance" was in line 1.' },
      { formula: 'Allowance (end) = Allowance (beg) + Bad Debt Expense − Write-offs + Recoveries', note: '"Allowance" again — roll-forward.' },
      { formula: 'Bad Debt Expense = Allowance (end) − Allowance (beg) + Write-offs − Recoveries', note: '"Bad Debt Expense" was in line 4.' },
      { formula: 'Bad Debt Expense (% of sales method) = Net Credit Sales × Estimated %', note: '"Bad Debt Expense" again — different method.' },
      { formula: 'Bad Debt Expense (aging) = Required Ending Allowance − Existing Balance', note: '"Bad Debt Expense" again — third version.' },
      { formula: 'AR Turnover = Net Credit Sales / Average AR', note: '"AR" was in line 1.' },
      { formula: 'AR Turnover × Average AR = Net Credit Sales', note: '"AR Turnover" was in line 8.' }
    ]
  },
  {
    id: 'depreciation_chain',
    title: 'Depreciation & Asset Disposal',
    chapters: 'Ch 6',
    intro: 'Book value ties everything together.',
    steps: [
      { formula: 'Book Value = Cost − Accumulated Depreciation', note: 'Anchor.' },
      { formula: 'Cost = Book Value + Accumulated Depreciation', note: '"Cost" was in line 1.' },
      { formula: 'Accumulated Depreciation = Cost − Book Value', note: '"Accumulated Depreciation" was in line 1.' },
      { formula: 'Depreciation Expense (SL) = (Cost − Salvage) / Useful Life', note: '"Depreciation" was in line 1; introduces "Salvage" and "Useful Life".' },
      { formula: 'Depreciation Expense (DDB) = (2 / Useful Life) × Beginning Book Value', note: '"Depreciation" again — accelerated method.' },
      { formula: 'Useful Life = (Cost − Salvage) / Annual SL Depreciation', note: '"Useful Life" was in line 4.' },
      { formula: 'Salvage = Cost − (Annual SL Dep × Useful Life)', note: '"Salvage" was in line 4.' },
      { formula: 'Book Value (end of year) = Book Value (beg of year) − Depreciation Expense', note: '"Book Value" again — roll-forward.' },
      { formula: 'Book Value at Sale = Cost − Accumulated Depreciation at Sale', note: '"Book Value" again — at disposal date.' },
      { formula: 'Sale Proceeds − Book Value at Sale = Gain (positive) or Loss (negative)', note: '"Sale" was in line 9.' },
      { formula: 'Sale Proceeds = Book Value + Gain (or − Loss)', note: '"Sale Proceeds" was in line 10. Solve for selling price.' }
    ]
  },
  {
    id: 'bonds_chain',
    title: 'Bonds — Cash, Expense, Carrying Value',
    chapters: 'Ch 7',
    intro: 'Cash interest is constant; interest expense changes via amortization.',
    steps: [
      { formula: 'Cash Interest = Face × Coupon Rate × (Time / 12)', note: 'Anchor. Constant every period.' },
      { formula: 'Face = Cash Interest / (Coupon Rate × Time / 12)', note: '"Face" was in line 1.' },
      { formula: 'Coupon Rate = Cash Interest / (Face × Time / 12)', note: '"Coupon Rate" was in line 1.' },
      { formula: 'Interest Expense = Carrying Value × Market Rate × (Time / 12)', note: '"Interest" was in line 1; introduces "Carrying Value".' },
      { formula: 'Carrying Value = Face + Premium − Discount', note: '"Carrying Value" was in line 4; introduces "Premium" and "Discount".' },
      { formula: 'Premium = Carrying Value − Face', note: '"Premium" was in line 5 (when carrying > face).' },
      { formula: 'Discount = Face − Carrying Value', note: '"Discount" was in line 5 (when carrying < face).' },
      { formula: 'Discount Amortization = Interest Expense − Cash Interest', note: '"Discount" again — period-by-period.' },
      { formula: 'Premium Amortization = Cash Interest − Interest Expense', note: '"Premium" again — opposite sign.' },
      { formula: 'Carrying Value (at issuance) = PV of Face + PV of Cash Interest Annuity', note: '"Carrying Value" again — bond pricing.' },
      { formula: 'Carrying Value − Cash Paid (at retirement) = Gain (positive) or Loss (negative)', note: '"Carrying Value" again — at retirement.' },
      { formula: 'Cash Paid = Carrying Value − Gain (or + Loss)', note: '"Cash Paid" was in line 11. Solve for retirement price.' }
    ]
  },
  {
    id: 'cashflow_chain',
    title: 'Cash Flow Statement (Indirect Method)',
    chapters: 'Ch 11',
    intro: 'Start with NI; reverse non-cash items; adjust for working capital.',
    steps: [
      { formula: 'Net Income = Starting point (from Income Statement)', note: 'Anchor for indirect method.' },
      { formula: 'Net Income + Depreciation + Amortization = Subtotal 1', note: '"Net Income" again — add back non-cash expenses.' },
      { formula: 'Subtotal 1 + Losses on disposal − Gains on disposal = Subtotal 2', note: '"Subtotal" was in line 2 — reverse gains/losses (they belong in investing).' },
      { formula: 'Subtotal 2 ± Δ Working Capital = CFO', note: '"Subtotal" again. Introduces CFO.' },
      { formula: 'Δ Working Capital = − Δ AR − Δ Inventory − Δ Prepaid + Δ AP + Δ Accrued + Δ Unearned', note: '"Δ Working Capital" was in line 4 — asset up = cash down; liability up = cash up.' },
      { formula: 'CFO + CFI + CFF = Net Δ Cash', note: '"CFO" was in line 4. Three sections sum to the change in cash.' },
      { formula: 'CFO − CapEx = Free Cash Flow (FCF)', note: '"CFO" again — cash left for investors.' },
      { formula: 'CFI = Investing inflows − Investing outflows', note: '"CFI" was in line 6.' },
      { formula: 'CFF = Financing inflows − Financing outflows', note: '"CFF" was in line 6.' },
      { formula: 'Net Δ Cash = Ending Cash − Beginning Cash', note: '"Net Δ Cash" was in line 6.' },
      { formula: 'Ending Cash = Beginning Cash + Net Δ Cash', note: '"Ending Cash" was in line 10. Closing identity.' }
    ]
  },
  {
    id: 'dupont_chain',
    title: 'ROE / DuPont Decomposition',
    chapters: 'Ch 12',
    intro: 'Memorize ROE; everything else falls out.',
    steps: [
      { formula: 'ROE = Net Income / Average Equity', note: 'Anchor — primary summary measure of performance.' },
      { formula: 'Net Income = ROE × Average Equity', note: '"Net Income" was in line 1.' },
      { formula: 'Average Equity = Net Income / ROE', note: '"Average Equity" was in line 1.' },
      { formula: 'ROE − Return on Assets (ROA) = Return on Financial Leverage', note: '"ROE" again. Introduces ROA and ROFL.' },
      { formula: 'ROA = Net Income / Average Total Assets', note: '"ROA" was in line 4.' },
      { formula: 'Net Income = ROA × Average Total Assets', note: '"Net Income" again.' },
      { formula: 'Average Total Assets = Net Income / ROA', note: '"Average Total Assets" was in line 5.' },
      { formula: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier', note: '"ROE" again — DuPont decomposition.' },
      { formula: 'Profit Margin = Net Income / Sales', note: '"Profit Margin" was in line 8.' },
      { formula: 'Asset Turnover = Sales / Average Total Assets', note: '"Asset Turnover" was in line 8.' },
      { formula: 'Equity Multiplier = Average Total Assets / Average Equity', note: '"Equity Multiplier" was in line 8.' },
      { formula: 'ROA = Profit Margin × Asset Turnover', note: '"ROA" again — two-factor DuPont.' }
    ]
  },
  {
    id: 'ccc_chain',
    title: 'Cash Conversion Cycle',
    chapters: 'Ch 12',
    intro: 'Three days metrics, three turnovers, one cycle.',
    steps: [
      { formula: 'Cash Conversion Cycle (CCC) = DIO + DSO − DPO', note: 'Anchor. Days inventory + days collecting − days paying.' },
      { formula: 'CCC = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding', note: '"CCC" was in line 1 — same formula spelled out.' },
      { formula: 'Days Inventory Outstanding (DIO) = 365 / Inventory Turnover', note: '"Days" was in line 2.' },
      { formula: 'Days Sales Outstanding (DSO) = 365 / AR Turnover', note: '"Days" again.' },
      { formula: 'Days Payable Outstanding (DPO) = 365 / AP Turnover', note: '"Days" again.' },
      { formula: 'Inventory Turnover = COGS / Average Inventory', note: '"Inventory Turnover" was in line 3.' },
      { formula: 'AR Turnover = Net Credit Sales / Average AR', note: '"AR Turnover" was in line 4.' },
      { formula: 'AP Turnover = COGS / Average AP', note: '"AP Turnover" was in line 5.' },
      { formula: 'Inventory Turnover × Average Inventory = COGS', note: '"Inventory Turnover" again — solve for COGS.' },
      { formula: 'AR Turnover × Average AR = Net Credit Sales', note: '"AR Turnover" again.' },
      { formula: 'AP Turnover × Average AP = COGS', note: '"AP Turnover" again.' }
    ]
  },
  {
    id: 'market_ratios',
    title: 'Market Ratios',
    chapters: 'Ch 9 · Ch 12',
    intro: 'EPS is the anchor; everything price-related grows from it.',
    steps: [
      { formula: 'EPS = (Net Income − Preferred Dividends) / Weighted Avg Common Shares', note: 'Anchor.' },
      { formula: 'Net Income = EPS × Weighted Avg Common Shares + Preferred Dividends', note: '"Net Income" was in line 1.' },
      { formula: 'Weighted Avg Common Shares = (Net Income − Preferred Dividends) / EPS', note: '"Weighted Avg Common Shares" was in line 1.' },
      { formula: 'Preferred Dividends = Net Income − (EPS × Weighted Avg Common Shares)', note: '"Preferred Dividends" was in line 1.' },
      { formula: 'EPS × P/E = Price', note: '"EPS" again. Introduces P/E and Price.' },
      { formula: 'Price / EPS = P/E Ratio', note: '"Price" was in line 5.' },
      { formula: 'Price = EPS × P/E', note: '"Price" again.' },
      { formula: 'EPS = Price / P/E', note: '"EPS" again — solve for EPS given price and P/E.' },
      { formula: 'Common Dividends / Common Shares = DPS (Dividends Per Share)', note: '"Common Shares" was in line 1.' },
      { formula: 'DPS / EPS = Payout Ratio', note: '"DPS" was in line 9.' },
      { formula: 'DPS / Price = Dividend Yield', note: '"DPS" again.' },
      { formula: 'Common Equity / Common Shares Outstanding = Book Value per Share (BVPS)', note: '"Common" again.' },
      { formula: 'BVPS = Common Equity / Common Shares', note: '"BVPS" was in line 12.' },
      { formula: 'Price / BVPS = Market-to-Book Ratio', note: '"Price" again.' }
    ]
  },
  {
    id: 'solvency_chain',
    title: 'Solvency & Leverage',
    chapters: 'Ch 7 · Ch 12',
    intro: 'Total liabilities and total equity link every leverage ratio.',
    steps: [
      { formula: 'Debt-to-Equity = Total Liabilities / Total Equity', note: 'Anchor.' },
      { formula: 'Total Liabilities = Debt-to-Equity × Total Equity', note: '"Total Liabilities" was in line 1.' },
      { formula: 'Total Equity = Total Liabilities / Debt-to-Equity', note: '"Total Equity" was in line 1.' },
      { formula: 'Debt-to-Assets = Total Liabilities / Total Assets', note: '"Debt-to" carries from line 1; introduces Total Assets.' },
      { formula: 'Total Assets = Total Liabilities + Total Equity', note: '"Total Assets" was in line 4 — accounting equation refresher.' },
      { formula: 'Equity Multiplier = Total Assets / Total Equity', note: '"Equity" was in line 1, 3, 5.' },
      { formula: 'Equity Multiplier = 1 + Debt-to-Equity', note: '"Equity Multiplier" was in line 6.' },
      { formula: 'Total Assets / Total Equity = Equity Multiplier', note: '"Total Assets" again — same as line 6.' }
    ]
  },
  {
    id: 'tie_chain',
    title: 'Times Interest Earned (Coverage)',
    chapters: 'Ch 7 · Ch 12',
    intro: 'Two equivalent forms — cycle through them with algebra.',
    steps: [
      { formula: 'Times Interest Earned (TIE) = EBIT / Interest Expense', note: 'Anchor.' },
      { formula: 'EBIT = TIE × Interest Expense', note: '"EBIT" was in line 1.' },
      { formula: 'Interest Expense = EBIT / TIE', note: '"Interest Expense" was in line 1.' },
      { formula: 'EBIT = Net Income + Tax + Interest Expense', note: '"EBIT" again — back-out form.' },
      { formula: 'Net Income = EBIT − Tax − Interest Expense', note: '"Net Income" was in line 4.' },
      { formula: 'TIE = (Net Income + Tax + Interest) / Interest Expense', note: '"TIE" again — substitute the EBIT expansion.' }
    ]
  },
  {
    id: 'equity_method_chain',
    title: 'Equity Method Investment',
    chapters: 'Ch 9 · Ch 10',
    intro: 'Investment moves with investee NI and dividends.',
    steps: [
      { formula: 'Investment (end) = Investment (beg) + (% × Investee NI) − (% × Investee Dividends)', note: 'Anchor for 20–50% ownership.' },
      { formula: 'Investment (beg) = Investment (end) − (% × NI) + (% × Dividends)', note: '"Investment (beg)" was in line 1.' },
      { formula: 'Investor Equity-Method Income = Ownership % × Investee Net Income', note: '"Investor" / "Equity" / "%" all in line 1.' },
      { formula: 'Ownership % = Investor Equity-Method Income / Investee Net Income', note: '"Ownership %" was in line 3.' },
      { formula: 'Investee Net Income = Investor Income / Ownership %', note: '"Investee Net Income" was in line 3.' }
    ]
  }
];

// =============================================================
// RECIPES — step-by-step "how to solve" guides for common
// multi-step question types. Each recipe shows the formula
// chain and the computation, modeled on actual exam problems.
// =============================================================
const RECIPES = [
  // ==================== CHAPTER 1 ====================
  {
    id: 'r_ch1_rev_from_eq',
    chapter: 'Ch 1', chNum: 1,
    title: 'Find REVENUE given equity changes, share issuance, expenses, dividends',
    scenario: 'Beg equity, end equity, share issuance, expenses, and dividends are given. Solve for revenue.',
    example: 'Nguyen: Beg E $651K; Issued $882K; Expenses $2,520K; Dividends $168K; End E $1,593K.',
    steps: [
      { formula: 'ΔEquity = End Equity − Beg Equity', compute: 'ΔE = 1,593 − 651 = 942' },
      { formula: 'ΔEquity = Net Income + Share Issuance − Dividends', compute: '942 = NI + 882 − 168' },
      { formula: 'Net Income = ΔEquity − Issuance + Dividends', compute: 'NI = 942 − 882 + 168 = 228' },
      { formula: 'Net Income = Revenue − Expenses', compute: '228 = Rev − 2,520' },
      { formula: 'Revenue = Net Income + Expenses', compute: 'Rev = 228 + 2,520 = $2,748,000' }
    ]
  },
  {
    id: 'r_ch1_end_eq',
    chapter: 'Ch 1', chNum: 1,
    title: 'Find ENDING EQUITY given activities (revenues, expenses, share issuance, dividends)',
    scenario: 'Start with A − L = Beg E. Add NI − Div + Issuance.',
    example: 'Stahl: A $200; L $50; Rev $160; Exp $80; Issued $30; Div $50.',
    steps: [
      { formula: 'Beg Equity = Assets − Liabilities', compute: 'Beg E = 200 − 50 = 150' },
      { formula: 'Net Income = Revenue − Expenses', compute: 'NI = 160 − 80 = 80' },
      { formula: 'ΔRetained Earnings = Net Income − Dividends', compute: 'ΔRE = 80 − 50 = 30' },
      { formula: 'ΔEquity = ΔRE + Share Issuance', compute: 'ΔE = 30 + 30 = 60' },
      { formula: 'End Equity = Beg Equity + ΔEquity', compute: 'End E = 150 + 60 = 210 → €210,000' }
    ]
  },
  {
    id: 'r_ch1_ni_from_re',
    chapter: 'Ch 1', chNum: 1,
    title: 'Find NET INCOME given RE change and dividends',
    scenario: 'RE roll-forward: solve for NI.',
    example: 'Willie: RE up $15K; Dividends $28K. Find NI.',
    steps: [
      { formula: 'ΔRE = Net Income − Dividends', compute: '15 = NI − 28' },
      { formula: 'Net Income = ΔRE + Dividends', compute: 'NI = 15 + 28 = $43,000' }
    ]
  },
  {
    id: 'r_ch1_div_from_re',
    chapter: 'Ch 1', chNum: 1,
    title: 'Find DIVIDENDS PAID given RE roll-forward',
    scenario: 'Solve the RE equation for dividends.',
    example: 'Eagle Crest: Beg RE $70K; End RE $91K; NI $38K. Find dividends.',
    steps: [
      { formula: 'End RE = Beg RE + NI − Dividends', compute: '91 = 70 + 38 − Div' },
      { formula: 'Dividends = Beg RE + NI − End RE', compute: 'Div = 70 + 38 − 91 = $17,000' }
    ]
  },
  {
    id: 'r_ch1_change_assets',
    chapter: 'Ch 1', chNum: 1,
    title: 'Find Δ ASSETS given Δ Liabilities and Δ Equity',
    scenario: 'Use the change-form of A = L + E.',
    example: 'Mock 21: ΔL = −¥45,000; ΔE = −¥10,000.',
    steps: [
      { formula: 'Assets = Liabilities + Equity (always holds)', compute: '' },
      { formula: 'ΔAssets = ΔLiabilities + ΔEquity', compute: 'ΔA = −45,000 + (−10,000) = −¥55,000' }
    ]
  },

  // ==================== CHAPTER 2 ====================
  {
    id: 'r_ch2_multi_is',
    chapter: 'Ch 2', chNum: 2,
    title: 'Build a multi-step INCOME STATEMENT to find Net Income',
    scenario: 'Walk down: Revenue → GP → EBIT → EBT → NI.',
    example: 'Rev €800K; COGS €450K; Op Exp €180K; Interest €25K; Tax 30%.',
    steps: [
      { formula: 'Gross Profit = Revenue − COGS', compute: 'GP = 800 − 450 = 350' },
      { formula: 'Operating Income (EBIT) = GP − Operating Expenses', compute: 'EBIT = 350 − 180 = 170' },
      { formula: 'Pre-tax Income (EBT) = EBIT − Interest', compute: 'EBT = 170 − 25 = 145' },
      { formula: 'Tax = EBT × Tax Rate', compute: 'Tax = 145 × 0.30 = 43.5' },
      { formula: 'Net Income = EBT − Tax', compute: 'NI = 145 − 43.5 = €101,500' }
    ]
  },
  {
    id: 'r_ch2_quick_ratio',
    chapter: 'Ch 2', chNum: 2,
    title: 'Compute QUICK RATIO (avoid the inventory trap)',
    scenario: 'Quick ratio EXCLUDES inventory and prepaid expenses.',
    example: 'Cash 30; AR 70; Inventory 100; Prepaid 10; CL 80.',
    steps: [
      { formula: 'QR Numerator = Cash + Marketable Securities + AR (no inventory, no prepaid)', compute: 'Num = 30 + 0 + 70 = 100' },
      { formula: 'Quick Ratio = Numerator / Current Liabilities', compute: 'QR = 100 / 80 = 1.25' }
    ]
  },
  {
    id: 'r_ch2_working_cap',
    chapter: 'Ch 2', chNum: 2,
    title: 'Compute WORKING CAPITAL (and identify true current items)',
    scenario: 'Sum current assets and current liabilities; long-term debt is NOT current.',
    example: 'Cash 30; AR 70; Inv 100; Prepaid 10; AP 60; Accrued 20; LT Debt 200.',
    steps: [
      { formula: 'Current Assets = Cash + AR + Inv + Prepaid + Marketable Sec', compute: 'CA = 30 + 70 + 100 + 10 = 210' },
      { formula: 'Current Liabilities = AP + Accrued + Short-term debt + Unearned (NO long-term debt)', compute: 'CL = 60 + 20 = 80' },
      { formula: 'Working Capital = CA − CL', compute: 'WC = 210 − 80 = €130' }
    ]
  },

  // ==================== CHAPTER 3 ====================
  {
    id: 'r_ch3_supplies',
    chapter: 'Ch 3', chNum: 3,
    title: 'Compute SUPPLIES EXPENSE',
    scenario: 'What was used = beg + bought − ending count.',
    example: 'Beg supplies $2,400; Purchases $9,800; End count $1,900.',
    steps: [
      { formula: 'Supplies Expense = Beg Supplies + Purchases − End Supplies', compute: 'Exp = 2,400 + 9,800 − 1,900 = $10,300' }
    ]
  },
  {
    id: 'r_ch3_prepaid',
    chapter: 'Ch 3', chNum: 3,
    title: 'Compute PREPAID INSURANCE EXPENSE for the period',
    scenario: 'Spread the premium over the policy months; expense the months elapsed in this period.',
    example: '$36K, 3-year (36 months) policy, paid May 1; year ends Dec 31.',
    steps: [
      { formula: 'Months elapsed in current period', compute: 'May→Dec = 8 months' },
      { formula: 'Monthly cost = Total Premium / Total Policy Months', compute: 'Monthly = 36,000 / 36 = $1,000' },
      { formula: 'Insurance Expense = Months elapsed × Monthly cost', compute: 'Exp = 8 × 1,000 = $8,000' }
    ]
  },
  {
    id: 'r_ch3_interest',
    chapter: 'Ch 3', chNum: 3,
    title: 'Compute ACCRUED INTEREST',
    scenario: 'Pro-rate annual interest by months elapsed.',
    example: '6-month, 8%, $30,000 note signed Nov 1; year-end Dec 31.',
    steps: [
      { formula: 'Months elapsed', compute: 'Nov + Dec = 2 months' },
      { formula: 'Interest = Principal × Annual Rate × (Months / 12)', compute: 'Interest = 30,000 × 8% × 2/12 = $400' }
    ]
  },
  {
    id: 'r_ch3_unearned',
    chapter: 'Ch 3', chNum: 3,
    title: 'Compute REVENUE EARNED from unearned revenue (and balance remaining)',
    scenario: 'Pro-rate the contract by months performed.',
    example: '$48K collected April 1 for 12-month engagement; year-end Dec 31.',
    steps: [
      { formula: 'Months earned in this period', compute: 'Apr→Dec = 9 months' },
      { formula: 'Monthly rate = Total Contract / Total Months', compute: 'Rate = 48,000 / 12 = $4,000/mo' },
      { formula: 'Revenue Recognized = Months earned × Monthly rate', compute: 'Rev = 9 × 4,000 = $36,000' },
      { formula: 'Unearned remaining = Total − Revenue Recognized', compute: 'Unearned = 48,000 − 36,000 = $12,000' }
    ]
  },
  {
    id: 'r_ch3_vivid',
    chapter: 'Ch 3', chNum: 3,
    title: 'Find TOTAL ASSETS after a batch of adjusting entries',
    scenario: 'Identify which adjustments hit assets vs liabilities. Sum the asset deltas.',
    example: 'Vivid: Pre-adjust assets $430K. Dep $45K, Recorded AR $29K, Accrued exp $14K, Used insurance $5K, Rent earned $3K.',
    steps: [
      { formula: 'Depreciation: subtract from assets (Accum Dep ↑ = contra-asset)', compute: '−45' },
      { formula: 'Recorded AR: ADD to assets', compute: '+29' },
      { formula: 'Used insurance (was prepaid): subtract', compute: '−5' },
      { formula: 'Accrued expenses: NO asset effect (hits liability)', compute: '0' },
      { formula: 'Rent earned (was unearned): NO asset effect (hits liability)', compute: '0' },
      { formula: 'End Assets = Pre-adjust + sum of asset deltas', compute: '430 − 45 + 29 − 5 = $409,000' }
    ]
  },

  // ==================== CHAPTER 4 ====================
  {
    id: 'r_ch4_aging',
    chapter: 'Ch 4', chNum: 4,
    title: 'Compute BAD DEBT EXPENSE under AGING method',
    scenario: 'Solve the Allowance T-account for the plug.',
    example: 'Hudson: Target NRV $226K; AR $272.5K; Write-offs $21.3K; Beg Allowance $31.5K credit.',
    steps: [
      { formula: 'Required Ending Allowance = Gross AR − Target NRV', compute: 'Required = 272.5 − 226 = 46.5' },
      { formula: 'Allowance balance after write-offs = Beg − Write-offs', compute: '31.5 − 21.3 = 10.2 (credit)' },
      { formula: 'BDE = Required Ending Allowance − Existing Balance', compute: 'BDE = 46.5 − 10.2 = $36,300' },
      { formula: 'Equivalent: BDE = Required + Write-offs − Beg', compute: '46.5 + 21.3 − 31.5 = $36,300 ✓' }
    ]
  },
  {
    id: 'r_ch4_pct_sales',
    chapter: 'Ch 4', chNum: 4,
    title: 'Compute BAD DEBT EXPENSE under % OF SALES method',
    scenario: 'Apply % directly to Net Credit Sales. Existing allowance balance is IGNORED.',
    example: 'Net Credit Sales €1,800,000; estimate 1.5% uncollectible; Allowance has €3K DEBIT balance.',
    steps: [
      { formula: 'BDE = Net Credit Sales × Estimated %', compute: 'BDE = 1,800,000 × 1.5% = €27,000' },
      { formula: '(Allowance balance does NOT enter the calculation)', compute: '— ignore the €3K' }
    ]
  },
  {
    id: 'r_ch4_dso',
    chapter: 'Ch 4', chNum: 4,
    title: 'Compute DSO (Days Sales Outstanding)',
    scenario: 'Two steps: turnover, then 365 / turnover.',
    example: 'Net Credit Sales €4,500,000; Beg AR €380K; End AR €420K.',
    steps: [
      { formula: 'Average AR = (Beg AR + End AR) / 2', compute: 'Avg AR = (380 + 420) / 2 = 400' },
      { formula: 'AR Turnover = Net Credit Sales / Avg AR', compute: 'ART = 4,500 / 400 = 11.25' },
      { formula: 'DSO = 365 / AR Turnover', compute: 'DSO = 365 / 11.25 ≈ 32 days' }
    ]
  },
  {
    id: 'r_ch4_pct_completion',
    chapter: 'Ch 4', chNum: 4,
    title: 'Compute REVENUE under percentage-of-completion',
    scenario: 'Costs to date / total estimated costs × contract price = cumulative; subtract prior years.',
    example: 'Haskell: $10M contract; total estimated cost $7.5M; Year 2022 costs $2.625M.',
    steps: [
      { formula: '% complete = Costs to date / Total estimated costs', compute: '% = 2,625 / 7,500 = 35%' },
      { formula: 'Cumulative Revenue = % complete × Total contract', compute: 'Cum Rev = 35% × 10,000,000 = 3,500,000' },
      { formula: 'Period Revenue = Cumulative this year − Cumulative prior years', compute: 'Year 1 = 3,500,000 − 0 = $3,500,000' }
    ]
  },

  // ==================== CHAPTER 5 ====================
  {
    id: 'r_ch5_cogs',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute COGS via the inventory equation',
    scenario: 'COGS = Beg + Purchases − End. Rearrange to solve for any unknown.',
    example: 'GLF: Beg $8K; Purchases $28.4K; End count $9.6K.',
    steps: [
      { formula: 'COGS = Beg + Purchases − End', compute: 'COGS = 8 + 28.4 − 9.6 = $26,800' }
    ]
  },
  {
    id: 'r_ch5_purchases',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute PURCHASES (rearrange the COGS equation)',
    scenario: 'Solve COGS equation for Purchases.',
    example: 'Bayfield: Beg $220K; COGS $920K; End $170K.',
    steps: [
      { formula: 'COGS = Beg + Purchases − End', compute: '920 = 220 + P − 170' },
      { formula: 'Purchases = COGS + End − Beg', compute: 'P = 920 + 170 − 220 = $870,000' }
    ]
  },
  {
    id: 'r_ch5_fifo_end',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute FIFO ENDING INVENTORY',
    scenario: 'FIFO leaves the NEWEST units. Take ending units from the most recent purchase layers.',
    example: 'Communicated: Beg 270 @ $570; Purch 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175.',
    steps: [
      { formula: 'Total available units = Beg + all Purchases', compute: 'Total = 270 + 370 + 470 + 285 = 1,395' },
      { formula: 'Ending units = Total − Sold', compute: 'End units = 1,395 − 1,175 = 220' },
      { formula: 'FIFO End Value = ending units valued at MOST RECENT cost layers', compute: '220 from the Oct 285-unit batch at $720 = $158,400' }
    ]
  },
  {
    id: 'r_ch5_lifo_cogs',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute LIFO COGS',
    scenario: 'LIFO ending = OLDEST layers. COGS = total cost of GAFS − ending.',
    example: 'Square9: Beg 160 @ $460; Purch 260@$510, 360@$560, 230@$610. Sold 900.',
    steps: [
      { formula: 'Total available units; ending units = Total − Sold', compute: 'Available 1,010; End = 110' },
      { formula: 'LIFO End Value = ending units at OLDEST layers', compute: '110 × $460 = $50,600' },
      { formula: 'Total cost of GAFS = sum of (units × cost)', compute: '160×460 + 260×510 + 360×560 + 230×610 = $548,100' },
      { formula: 'LIFO COGS = Total cost of GAFS − LIFO End Value', compute: 'COGS = 548,100 − 50,600 = $497,500' }
    ]
  },
  {
    id: 'r_ch5_avg',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute WEIGHTED-AVERAGE COGS and ending inventory',
    scenario: 'One average cost per unit; multiply by units sold and ending units.',
    example: 'Beg 100 @ €5; Purch 1: 150 @ €6; Purch 2: 200 @ €8. Sold 350.',
    steps: [
      { formula: 'Total cost of GAFS = sum of (units × cost)', compute: '100×5 + 150×6 + 200×8 = 500 + 900 + 1,600 = 3,000' },
      { formula: 'Total units available = Beg + all Purchases', compute: 'Total units = 100 + 150 + 200 = 450' },
      { formula: 'Weighted Avg cost = Total cost / Total units', compute: 'Avg = 3,000 / 450 = €6.6667/unit' },
      { formula: 'COGS = Units sold × Avg cost', compute: 'COGS = 350 × 6.6667 = €2,333.33' },
      { formula: 'End Inventory = Ending units × Avg cost', compute: 'End = 100 × 6.6667 = €666.67' }
    ]
  },
  {
    id: 'r_ch5_inv_turn',
    chapter: 'Ch 5', chNum: 5,
    title: 'Compute INVENTORY TURNOVER and DIO',
    scenario: 'Two-step: turnover then 365/turnover.',
    example: 'COGS €960K; Beg Inv €120K; End Inv €100K.',
    steps: [
      { formula: 'Average Inventory = (Beg + End) / 2', compute: 'Avg = (120 + 100) / 2 = 110' },
      { formula: 'Inventory Turnover = COGS / Avg Inventory', compute: 'Turn = 960 / 110 = 8.73 times' },
      { formula: 'DIO = 365 / Inventory Turnover', compute: 'DIO = 365 / 8.73 ≈ 42 days' }
    ]
  },
  {
    id: 'r_ch5_lifo_to_fifo',
    chapter: 'Ch 5', chNum: 5,
    title: 'Convert LIFO firm to FIFO basis (Chevron vs Total)',
    scenario: 'Add LIFO Reserve to inventory; subtract Δ Reserve from COGS.',
    example: 'Chevron 2015: LIFO Inv $6,334; LIFO Reserve $3,745 (was $8,135 in 2014). LIFO COGS $69,751.',
    steps: [
      { formula: 'FIFO Inventory = LIFO Inventory + LIFO Reserve', compute: 'FIFO Inv = 6,334 + 3,745 = $10,079M' },
      { formula: 'Δ LIFO Reserve = End Reserve − Beg Reserve', compute: 'Δ = 3,745 − 8,135 = −$4,390 (fell)' },
      { formula: 'FIFO COGS = LIFO COGS − Δ LIFO Reserve', compute: 'FIFO COGS = 69,751 − (−4,390) = $74,141M' }
    ]
  },

  // ==================== CHAPTER 6 ====================
  {
    id: 'r_ch6_sl',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute STRAIGHT-LINE depreciation (and book value at any year)',
    scenario: 'Equal expense each year. BV decreases by annual dep.',
    example: 'Frame Ind: Cost $26,300; salvage $2,900; 6-yr life. BV at end of Year 2?',
    steps: [
      { formula: 'Annual SL Dep = (Cost − Salvage) / Useful Life', compute: 'Annual = (26,300 − 2,900) / 6 = $3,900' },
      { formula: 'Accumulated Depreciation = Annual × Years elapsed', compute: 'Accum after 2 yrs = 3,900 × 2 = $7,800' },
      { formula: 'Book Value = Cost − Accumulated Depreciation', compute: 'BV = 26,300 − 7,800 = $18,500' }
    ]
  },
  {
    id: 'r_ch6_ddb',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute DDB depreciation schedule',
    scenario: 'Apply rate to BOOK VALUE (not depreciable base). Stop when BV = salvage.',
    example: 'Tanner truck: $80K, 5-yr, salvage $8K. Compute Y3 dep.',
    steps: [
      { formula: 'DDB Rate = 2 / Useful Life', compute: 'Rate = 2/5 = 40%' },
      { formula: 'Year 1 Dep = Cost × Rate', compute: 'Y1 = 80,000 × 40% = $32,000; BV = 48,000' },
      { formula: 'Year 2 Dep = Beg-Y2 BV × Rate', compute: 'Y2 = 48,000 × 40% = $19,200; BV = 28,800' },
      { formula: 'Year 3 Dep = Beg-Y3 BV × Rate', compute: 'Y3 = 28,800 × 40% = $11,520' },
      { formula: 'Final year: cap at salvage if needed', compute: 'When computed dep would push BV below salvage, cap.' }
    ]
  },
  {
    id: 'r_ch6_disposal',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute GAIN or LOSS on asset disposal (with mid-year sale)',
    scenario: 'Update accumulated depreciation to sale date; compute BV; gain/loss = proceeds − BV.',
    example: 'Hale Kennels: Cost $300K; 5-yr life; salvage $50K; Accum Dep at Jan 1 = $225K; sold July 1 for $80K.',
    steps: [
      { formula: 'Annual SL Dep = (Cost − Salvage) / Life', compute: 'Annual = (300 − 50)/5 = $50K' },
      { formula: 'Partial-year dep up to sale = Annual × (months / 12)', compute: 'Jan→Jul = 6 mo → 50K × 6/12 = $25K' },
      { formula: 'Accum Dep at sale = Beg-year Accum + Partial-year', compute: 'Accum = 225 + 25 = $250K' },
      { formula: 'Book Value = Cost − Accum Dep', compute: 'BV = 300 − 250 = $50K' },
      { formula: 'Gain/Loss = Proceeds − BV', compute: 'Gain = 80 − 50 = $30,000 GAIN' }
    ]
  },
  {
    id: 'r_ch6_change_estimate',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute NEW DEPRECIATION after change in estimate',
    scenario: 'Prospective treatment. Use current BV and remaining life.',
    example: 'Tanner truck after 4 yrs SL ($14,400/yr). Useful life extended from 5 → 7 yrs. New annual?',
    steps: [
      { formula: 'Current Book Value = Cost − Accum Dep at change date', compute: 'BV = 80,000 − 4×14,400 = $22,400' },
      { formula: 'New Remaining Life = New total life − Years already elapsed', compute: 'Remaining = 7 − 4 = 3 yrs' },
      { formula: 'New Annual Dep = (Current BV − Salvage) / New Remaining Life', compute: 'New = (22,400 − 8,000)/3 = $4,800' }
    ]
  },
  {
    id: 'r_ch6_capitalized_cost',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute CAPITALIZED COST of an asset',
    scenario: 'Sum all costs to acquire and prepare for use. Financing source is irrelevant.',
    example: 'Solaris: list price $72K (paid $55K cash + $17K financed); shipping $2.6K; install $3.8K.',
    steps: [
      { formula: 'Capitalized Cost = Purchase Price + Sales Tax + Shipping + Installation + Setup + Testing + Asset Retirement Obligations', compute: 'Cost = 72,000 + 2,600 + 3,800 = $78,400' },
      { formula: 'Financing source (cash vs note) does NOT change capitalized cost', compute: '— $17K financed is irrelevant to the recorded cost' }
    ]
  },
  {
    id: 'r_ch6_goodwill',
    chapter: 'Ch 6', chNum: 6,
    title: 'Compute GOODWILL on acquisition',
    scenario: 'Excess of price over fair value of net identifiable assets.',
    example: 'Acquirer pays $5M for target whose identifiable net assets fair-value at $4.2M.',
    steps: [
      { formula: 'Net Identifiable Assets = FV of Identifiable Assets − FV of Liabilities Assumed', compute: 'Net Identifiable = $4,200,000 (given)' },
      { formula: 'Goodwill = Purchase Price − Fair Value of Net Identifiable Assets', compute: 'Goodwill = 5,000,000 − 4,200,000 = $800,000' }
    ]
  },

  // ==================== CHAPTER 7 ====================
  {
    id: 'r_ch7_par_disc_prem',
    chapter: 'Ch 7', chNum: 7,
    title: 'Determine if bond is at PAR / DISCOUNT / PREMIUM',
    scenario: 'Compare coupon rate to market rate.',
    example: 'Quechua: 10% coupon; 12% market. Issued at?',
    steps: [
      { formula: 'Coupon = Market → Par (face value)', compute: '—' },
      { formula: 'Coupon < Market → Discount (below face)', compute: '10% < 12% → discount → price < $400,000' },
      { formula: 'Coupon > Market → Premium (above face)', compute: '—' }
    ]
  },
  {
    id: 'r_ch7_effective_int',
    chapter: 'Ch 7', chNum: 7,
    title: 'Compute INTEREST EXPENSE under effective-interest method',
    scenario: 'Interest expense floats with carrying value × market rate.',
    example: 'Sunshine bond: face $1M; 5% coupon; market 6%. Issued at $950K. Y1 interest expense?',
    steps: [
      { formula: 'Cash Interest = Face × Coupon Rate × (Time/12)', compute: 'Cash = 1,000,000 × 5% = $50,000' },
      { formula: 'Interest Expense = Beg Carrying Value × Market Rate × (Time/12)', compute: 'Expense = 950,000 × 6% = $57,000' },
      { formula: 'Discount Amortization = Interest Expense − Cash Interest', compute: 'Amort = 57,000 − 50,000 = $7,000' },
      { formula: 'New Carrying Value = Beg CV + Discount Amortization', compute: 'New CV = 950,000 + 7,000 = $957,000' }
    ]
  },
  {
    id: 'r_ch7_retirement',
    chapter: 'Ch 7', chNum: 7,
    title: 'Compute GAIN or LOSS on bond retirement',
    scenario: 'Compare carrying value (NOT face) to cash paid.',
    example: '$600K bond retired at 98 when carrying value is $590K.',
    steps: [
      { formula: 'Cash Paid = Face × (price / 100)', compute: 'Cash = 600,000 × 0.98 = $588,000' },
      { formula: 'Gain/Loss = Carrying Value − Cash Paid', compute: 'Gain = 590,000 − 588,000 = $2,000 GAIN' },
      { formula: 'Positive = gain (CV > Cash); negative = loss (CV < Cash)', compute: '—' }
    ]
  },
  {
    id: 'r_ch7_tie',
    chapter: 'Ch 7', chNum: 7,
    title: 'Compute TIMES INTEREST EARNED (TIE / coverage ratio)',
    scenario: 'Two equivalent forms — pick whichever fits the data.',
    example: 'NI €160K; Tax €60K; Interest €40K.',
    steps: [
      { formula: 'EBIT = NI + Tax + Interest', compute: 'EBIT = 160 + 60 + 40 = 260' },
      { formula: 'TIE = EBIT / Interest Expense', compute: 'TIE = 260 / 40 = 6.5 times' },
      { formula: 'Equivalent: TIE = (NI + Tax + Interest) / Interest', compute: '(160 + 60 + 40) / 40 = 6.5 ✓' }
    ]
  },
  {
    id: 'r_ch7_2_10',
    chapter: 'Ch 7', chNum: 7,
    title: 'Compute COST of forgoing a 2/10, n/30 cash discount',
    scenario: 'Annualize the implicit interest in the discount.',
    example: '$1,000 invoice, terms 2/10, n/30.',
    steps: [
      { formula: 'Effective rate per period = Discount % / (1 − Discount %)', compute: '2/98 ≈ 2.04%' },
      { formula: 'Periods per year = 365 / (Net days − Discount days)', compute: '365 / (30 − 10) = 365/20 = 18.25' },
      { formula: 'Annualized cost = Per-period rate × Periods per year', compute: '2.04% × 18.25 ≈ 37.2% per year' }
    ]
  },

  // ==================== CHAPTER 8 ====================
  {
    id: 'r_ch8_initial',
    chapter: 'Ch 8', chNum: 8,
    title: 'Compute INITIAL LEASE LIABILITY (ROU)',
    scenario: 'PV of all future lease payments at the discount rate.',
    example: 'Phelps Swimming: 5-yr lease, $3,256/yr at year-end, 8% rate. PV factor (5,8%) = 3.99271.',
    steps: [
      { formula: 'Lease Liability = Annual Payment × PV Annuity Factor (n, r)', compute: 'Liab = 3,256 × 3.99271 = $13,000' },
      { formula: 'Initial ROU Asset = Lease Liability + IDC + Prepayments − Incentives', compute: 'ROU = $13,000 (no IDCs)' }
    ]
  },
  {
    id: 'r_ch8_y1_exp',
    chapter: 'Ch 8', chNum: 8,
    title: 'Compute lease YEAR 1 expenses (depreciation + interest)',
    scenario: 'Total expense is front-loaded in Y1.',
    example: 'Phelps Swimming: ROU $13K; 5-yr SL; 8% rate.',
    steps: [
      { formula: 'Annual Depreciation = ROU Asset / Lease Term', compute: 'Dep = 13,000 / 5 = $2,600/yr' },
      { formula: 'Y1 Interest = Beg Lease Liability × Discount Rate', compute: 'Interest = 13,000 × 8% = $1,040' },
      { formula: 'Y1 Total IS expense = Depreciation + Interest', compute: 'Total = 2,600 + 1,040 = $3,640' },
      { formula: 'Y1 Principal Repayment = Cash Payment − Interest', compute: 'Principal = 3,256 − 1,040 = $2,216' },
      { formula: 'End-Y1 Lease Liability = Beg − Principal', compute: 'End Liab = 13,000 − 2,216 = $10,784' }
    ]
  },

  // ==================== CHAPTER 9 ====================
  {
    id: 'r_ch9_outstanding',
    chapter: 'Ch 9', chNum: 9,
    title: 'Compute OUTSTANDING SHARES (Issued − Treasury)',
    scenario: 'Convert dollar amounts to share counts using par/cost per share.',
    example: 'Skyline: Issued shares (par €10) €600,000; Treasury (at cost €15/sh) €1,800.',
    steps: [
      { formula: 'Issued Shares = Issued account balance / Par Value', compute: 'Issued = 600,000 / 10 = 60,000 shares' },
      { formula: 'Treasury Shares = Treasury cost / Cost per share', compute: 'Treasury = 1,800 / 15 = 120 shares' },
      { formula: 'Outstanding Shares = Issued − Treasury', compute: 'Outstanding = 60,000 − 120 = 59,880 shares' }
    ]
  },
  {
    id: 'r_ch9_eps',
    chapter: 'Ch 9', chNum: 9,
    title: 'Compute BASIC EPS with mid-year share change',
    scenario: 'Weighted-average shares; then (NI − Pref Div) / WAS.',
    example: 'Phelps: NI $8K; Pref Div $1K. 8K shares all year EXCEPT 800 repurchased Apr 1.',
    steps: [
      { formula: 'Weighted Avg Shares = Σ (shares × fraction of year held)', compute: '8,000 × 3/12 + 7,200 × 9/12 = 2,000 + 5,400 = 7,400' },
      { formula: 'EPS Numerator = NI − Preferred Dividends', compute: '8,000 − 1,000 = 7,000' },
      { formula: 'Basic EPS = (NI − Pref Div) / Weighted Avg Common Shares', compute: 'EPS = 7,000 / 7,400 = $0.946' }
    ]
  },
  {
    id: 'r_ch9_equity_method',
    chapter: 'Ch 9', chNum: 9,
    title: 'Compute EQUITY-METHOD INCOME and investment balance',
    scenario: 'Income = % × Investee NI. Dividends reduce investment, NOT income.',
    example: 'Mouns owns 40% of Darian. Darian NI $100K; pays $20K div to Mouns.',
    steps: [
      { formula: 'Investor Income = Ownership % × Investee Net Income', compute: 'Income = 40% × 100,000 = $40,000' },
      { formula: 'Investment Δ from NI = + (% × NI)', compute: '+40,000' },
      { formula: 'Investment Δ from Dividends = − (% × Dividends)', compute: '−(40% × 50,000) = −20,000 (reduces investment, NOT income)' },
      { formula: 'End Investment = Beg + Income − Dividends received', compute: 'Investment account moves; Income only reflects share of NI.' }
    ]
  },
  {
    id: 'r_ch9_contributed',
    chapter: 'Ch 9', chNum: 9,
    title: 'Compute NET CONTRIBUTED CAPITAL (with treasury)',
    scenario: 'Common stock + APIC − Treasury cost.',
    example: 'Artemis: 10.5M shares issued (par $1); APIC $27.3M; 9.9M outstanding; Treasury repurchase price $12/sh.',
    steps: [
      { formula: 'Common Stock = Issued Shares × Par', compute: 'CS = 10,500,000 × $1 = $10,500,000' },
      { formula: 'Treasury Shares = Issued − Outstanding', compute: 'Treasury sh = 10.5M − 9.9M = 600,000' },
      { formula: 'Treasury Cost = Treasury Shares × Cost per Share', compute: 'Treasury $ = 600,000 × $12 = $7,200,000' },
      { formula: 'Net Contributed Capital = Common Stock + APIC − Treasury Stock', compute: 'Net = 10.5M + 27.3M − 7.2M = $30,600,000' }
    ]
  },

  // ==================== CHAPTER 11 ====================
  {
    id: 'r_ch11_cfo',
    chapter: 'Ch 11', chNum: 11,
    title: 'Compute CFO via INDIRECT METHOD',
    scenario: 'Start with NI; add back non-cash; reverse gains/losses; adjust for working capital.',
    example: 'SkyBridge: NI €150K; Dep €35K; AR ↑ €19K; Inv ↑ €14K; Unearned ↑ €7K; Prepaid ↓ €4K.',
    steps: [
      { formula: 'Start: Net Income', compute: '+150,000' },
      { formula: '+ Depreciation, + Amortization (non-cash add-back)', compute: '+35,000' },
      { formula: '− Δ AR (asset up = cash down)', compute: '−19,000' },
      { formula: '− Δ Inventory (asset up = cash down)', compute: '−14,000' },
      { formula: '+ Δ Prepaid REVERSED — prepaid DOWN means cash freed up: + 4,000', compute: '+4,000 (decrease)' },
      { formula: '+ Δ Unearned (liability up = cash up)', compute: '+7,000' },
      { formula: '= CFO', compute: '150 + 35 − 19 − 14 + 4 + 7 = €163,000' }
    ]
  },
  {
    id: 'r_ch11_cfi',
    chapter: 'Ch 11', chNum: 11,
    title: 'Compute CFI (cash from investing)',
    scenario: 'Only CASH transactions in long-term assets/investments. Ignore non-cash and dividends.',
    example: 'Donald Plastics: Building cash $200K; Machinery via NOTE $10K; Dividends $20K; Competitor shares cash $30K; Land sold cash $40K; Depreciation $9K.',
    steps: [
      { formula: 'List only CASH investing flows', compute: '−Building 200; −Shares 30; +Land 40' },
      { formula: 'Note-purchase of machinery: NON-cash → exclude', compute: '0 (disclosed in supplemental notes)' },
      { formula: 'Dividends: FINANCING, not investing → exclude', compute: '0' },
      { formula: 'Depreciation: NON-cash → exclude (already in CFO add-back)', compute: '0' },
      { formula: 'CFI = sum of cash investing flows', compute: '−200 − 30 + 40 = −€190,000' }
    ]
  },
  {
    id: 'r_ch11_cff',
    chapter: 'Ch 11', chNum: 11,
    title: 'Back out DIVIDENDS (and CFF) from RE roll-forward',
    scenario: 'When dividends paid is not given, derive from RE.',
    example: 'Beg RE $80K; End RE $76K; NI $64K. LT loan: Beg $49K, End $42K, no new loans.',
    steps: [
      { formula: 'Dividends = Beg RE + NI − End RE', compute: 'Div = 80 + 64 − 76 = $68,000' },
      { formula: 'Loan Repayment = Beg Loan − End Loan (if no new loans)', compute: 'Repaid = 49 − 42 = $7,000' },
      { formula: 'CFF = − Dividends − Loan Repayment + Issuances', compute: 'CFF = −68 − 7 = −$75,000' }
    ]
  },
  {
    id: 'r_ch11_change_cash',
    chapter: 'Ch 11', chNum: 11,
    title: 'Compute NET CHANGE IN CASH and verify ending cash',
    scenario: 'Sum the three sections; reconcile to balance sheet.',
    example: 'Ranger: CFO $52K; CFF −$10K; CFI −$130K.',
    steps: [
      { formula: 'Net Δ Cash = CFO + CFI + CFF', compute: '52 − 10 − 130 = −$88,000' },
      { formula: 'End Cash = Beg Cash + Net Δ Cash', compute: 'Verify against B/S' }
    ]
  },
  {
    id: 'r_ch11_fcf',
    chapter: 'Ch 11', chNum: 11,
    title: 'Compute FREE CASH FLOW',
    scenario: 'Cash left for investors after maintaining/expanding operations.',
    example: 'CFO $250K; CapEx $90K.',
    steps: [
      { formula: 'Free Cash Flow = CFO − Capital Expenditures (CapEx)', compute: 'FCF = 250 − 90 = $160,000' }
    ]
  },

  // ==================== CHAPTER 12 ====================
  {
    id: 'r_ch12_roe',
    chapter: 'Ch 12', chNum: 12,
    title: 'Compute ROE',
    scenario: 'NI / Avg Equity. Always use AVERAGE.',
    example: 'PG: NI $12,846; Avg Equity $62,269.',
    steps: [
      { formula: 'Average Equity = (Beg + End) / 2', compute: 'Use given average if provided.' },
      { formula: 'ROE = Net Income / Average Stockholders\' Equity', compute: 'ROE = 12,846 / 62,269 = 20.6%' }
    ]
  },
  {
    id: 'r_ch12_rofl',
    chapter: 'Ch 12', chNum: 12,
    title: 'Compute RETURN ON FINANCIAL LEVERAGE (ROFL)',
    scenario: 'Three-step: ROE, ROA, then difference.',
    example: 'PG: NI $12,846; Avg Equity $62,269; Avg Total Assets $131,503.',
    steps: [
      { formula: 'ROE = NI / Avg Equity', compute: 'ROE = 12,846 / 62,269 = 20.6%' },
      { formula: 'ROA = NI / Avg Total Assets', compute: 'ROA = 12,846 / 131,503 = 9.8%' },
      { formula: 'Return on Financial Leverage = ROE − ROA', compute: 'ROFL = 20.6% − 9.8% = 10.8%' }
    ]
  },
  {
    id: 'r_ch12_dupont',
    chapter: 'Ch 12', chNum: 12,
    title: 'DuPont decomposition (compute ROE three ways)',
    scenario: 'Three drivers multiply to ROE.',
    example: 'PM 8%; Asset Turnover 1.5; Equity Multiplier 2.0.',
    steps: [
      { formula: 'Profit Margin = Net Income / Sales', compute: 'PM = 8%' },
      { formula: 'Asset Turnover = Sales / Average Total Assets', compute: 'AT = 1.5' },
      { formula: 'Equity Multiplier = Avg Total Assets / Avg Equity', compute: 'EM = 2.0' },
      { formula: 'ROE = PM × AT × EM', compute: 'ROE = 0.08 × 1.5 × 2.0 = 24%' }
    ]
  },
  {
    id: 'r_ch12_ccc',
    chapter: 'Ch 12', chNum: 12,
    title: 'Compute CASH CONVERSION CYCLE',
    scenario: 'Three turnovers, three days metrics, sum.',
    example: 'DSO 45, DIO 60, DPO 30.',
    steps: [
      { formula: 'DIO = 365 / Inventory Turnover', compute: '60 (given)' },
      { formula: 'DSO = 365 / AR Turnover', compute: '45 (given)' },
      { formula: 'DPO = 365 / AP Turnover', compute: '30 (given)' },
      { formula: 'CCC = DIO + DSO − DPO', compute: 'CCC = 60 + 45 − 30 = 75 days' },
      { formula: 'Special case — no inventory: CCC = DSO − DPO (DIO = 0)', compute: 'Mock 21 calc 3: 100 = DSO − 50 → DSO = 150' }
    ]
  },
  {
    id: 'r_ch12_pe',
    chapter: 'Ch 12', chNum: 12,
    title: 'Compute P/E RATIO',
    scenario: 'Two-step: EPS first, then P / EPS.',
    example: '1,000,000 outstanding shares; NI €12M; Price €108.',
    steps: [
      { formula: 'EPS = (NI − Preferred Dividends) / Common Shares', compute: 'EPS = 12,000,000 / 1,000,000 = €12' },
      { formula: 'P/E = Price / EPS', compute: 'P/E = 108 / 12 = 9' }
    ]
  },
  {
    id: 'r_ch12_horizontal',
    chapter: 'Ch 12', chNum: 12,
    title: 'HORIZONTAL analysis — % change (and the "70% decrease" trap)',
    scenario: 'A 70% decrease means the new value = base × 30% — NOT base × 70%.',
    example: 'Flynn: 2019 NI €6M. NI decreased 70% in 2020.',
    steps: [
      { formula: 'Decrease amount = % × Base', compute: '70% × 6,000,000 = 4,200,000' },
      { formula: 'New value = Base − Decrease', compute: '2020 NI = 6,000,000 − 4,200,000 = €1,800,000' },
      { formula: 'Equivalent: New = Base × (1 − % decrease)', compute: '6,000,000 × 30% = €1,800,000 ✓' }
    ]
  },
  {
    id: 'r_ch12_de',
    chapter: 'Ch 12', chNum: 12,
    title: 'Compute D/E ratio when liabilities are split',
    scenario: 'Sum CL + Non-current Liab; equity = Assets − Total Liab.',
    example: 'Total Assets €1,200,000; CL €140,000; Non-current Liab €340,000.',
    steps: [
      { formula: 'Total Liabilities = CL + Non-current Liab', compute: 'Total L = 140 + 340 = 480,000' },
      { formula: 'Total Equity = Total Assets − Total Liabilities', compute: 'Equity = 1,200 − 480 = 720,000' },
      { formula: 'D/E = Total Liabilities / Total Equity', compute: 'D/E = 480 / 720 = 0.667' }
    ]
  }
];

// =============================================================
// REARRANGEMENTS — every core formula shown with all its
// algebraic forms. Pick the form that solves for the unknown.
// =============================================================
const REARRANGEMENTS = [
  // ==================== Ch 1 — Foundations ====================
  {
    id: 're_acc_eq', chNum: 1, chapter: 'Ch 1',
    name: 'Accounting Equation',
    base: 'Assets = Liabilities + Equity',
    note: 'Always holds. Same logic in change-form: ΔA = ΔL + ΔE.',
    forms: [
      { var: 'Assets', formula: 'Assets = Liabilities + Equity' },
      { var: 'Liabilities', formula: 'Liabilities = Assets − Equity' },
      { var: 'Equity', formula: 'Equity = Assets − Liabilities' }
    ]
  },
  {
    id: 're_ni', chNum: 1, chapter: 'Ch 1 · 2',
    name: 'Net Income',
    base: 'Net Income = Revenue − Expenses',
    forms: [
      { var: 'Net Income', formula: 'Net Income = Revenue − Expenses' },
      { var: 'Revenue', formula: 'Revenue = Net Income + Expenses' },
      { var: 'Expenses', formula: 'Expenses = Revenue − Net Income' }
    ]
  },
  {
    id: 're_re_roll', chNum: 1, chapter: 'Ch 1 · 9',
    name: 'Retained Earnings Roll-Forward',
    base: 'End RE = Beg RE + Net Income − Dividends',
    forms: [
      { var: 'End RE', formula: 'End RE = Beg RE + Net Income − Dividends' },
      { var: 'Beg RE', formula: 'Beg RE = End RE − Net Income + Dividends' },
      { var: 'Net Income', formula: 'Net Income = End RE − Beg RE + Dividends' },
      { var: 'Dividends', formula: 'Dividends = Beg RE + Net Income − End RE' }
    ]
  },
  {
    id: 're_eq_change', chNum: 1, chapter: 'Ch 1 · 9',
    name: 'Change in Equity',
    base: 'ΔEquity = Net Income + Share Issuance − Dividends',
    note: 'Treasury repurchases also reduce equity (subtract).',
    forms: [
      { var: 'ΔEquity', formula: 'ΔEquity = Net Income + Share Issuance − Dividends' },
      { var: 'Net Income', formula: 'Net Income = ΔEquity − Share Issuance + Dividends' },
      { var: 'Share Issuance', formula: 'Share Issuance = ΔEquity − Net Income + Dividends' },
      { var: 'Dividends', formula: 'Dividends = Net Income + Share Issuance − ΔEquity' }
    ]
  },

  // ==================== Ch 2 — Working Capital & Liquidity ====================
  {
    id: 're_wc', chNum: 2, chapter: 'Ch 2',
    name: 'Working Capital',
    base: 'Working Capital = Current Assets − Current Liabilities',
    forms: [
      { var: 'Working Capital', formula: 'Working Capital = Current Assets − Current Liabilities' },
      { var: 'Current Assets', formula: 'Current Assets = Working Capital + Current Liabilities' },
      { var: 'Current Liabilities', formula: 'Current Liabilities = Current Assets − Working Capital' }
    ]
  },
  {
    id: 're_cr', chNum: 2, chapter: 'Ch 2',
    name: 'Current Ratio',
    base: 'Current Ratio = Current Assets / Current Liabilities',
    forms: [
      { var: 'Current Ratio', formula: 'Current Ratio = Current Assets / Current Liabilities' },
      { var: 'Current Assets', formula: 'Current Assets = Current Ratio × Current Liabilities' },
      { var: 'Current Liabilities', formula: 'Current Liabilities = Current Assets / Current Ratio' }
    ]
  },
  {
    id: 're_qr', chNum: 2, chapter: 'Ch 2',
    name: 'Quick Ratio (excludes inventory & prepaid)',
    base: 'Quick Ratio = (Cash + Marketable Sec + AR) / Current Liabilities',
    forms: [
      { var: 'Quick Ratio', formula: 'Quick Ratio = (Cash + Marketable Sec + AR) / Current Liabilities' },
      { var: 'Quick Assets numerator', formula: 'Quick Assets = Cash + Marketable Securities + AR' },
      { var: 'Current Liabilities', formula: 'Current Liabilities = Quick Assets / Quick Ratio' }
    ]
  },

  // ==================== Ch 3 — Adjusting Entries ====================
  {
    id: 're_supplies', chNum: 3, chapter: 'Ch 3',
    name: 'Supplies Expense',
    base: 'Supplies Expense = Beg Supplies + Purchases − End Supplies',
    forms: [
      { var: 'Supplies Expense', formula: 'Supplies Expense = Beg Supplies + Purchases − End Supplies' },
      { var: 'Beg Supplies', formula: 'Beg Supplies = Supplies Expense + End Supplies − Purchases' },
      { var: 'Purchases', formula: 'Purchases = Supplies Expense + End Supplies − Beg Supplies' },
      { var: 'End Supplies', formula: 'End Supplies = Beg Supplies + Purchases − Supplies Expense' }
    ]
  },
  {
    id: 're_interest', chNum: 3, chapter: 'Ch 3 · 7',
    name: 'Simple Interest (P × R × T)',
    base: 'Interest = Principal × Annual Rate × (Time / 12)',
    note: 'Time is in months. For partial years use the months elapsed.',
    forms: [
      { var: 'Interest', formula: 'Interest = Principal × Rate × (Time / 12)' },
      { var: 'Principal', formula: 'Principal = Interest / (Rate × Time / 12)' },
      { var: 'Rate', formula: 'Rate = Interest / (Principal × Time / 12)' },
      { var: 'Time (months)', formula: 'Time = Interest × 12 / (Principal × Rate)' }
    ]
  },
  {
    id: 're_prepaid', chNum: 3, chapter: 'Ch 3',
    name: 'Prepaid Insurance Expense',
    base: 'Insurance Expense = (Total Premium / Total Months) × Months Elapsed',
    forms: [
      { var: 'Insurance Expense', formula: 'Insurance Expense = (Premium / Total Months) × Months Elapsed' },
      { var: 'Total Premium', formula: 'Premium = (Insurance Expense × Total Months) / Months Elapsed' },
      { var: 'Months Elapsed', formula: 'Months Elapsed = (Insurance Expense × Total Months) / Premium' }
    ]
  },

  // ==================== Ch 4 — Receivables ====================
  {
    id: 're_nrv', chNum: 4, chapter: 'Ch 4',
    name: 'Net Realizable Value of AR',
    base: 'NRV = Gross AR − Allowance for Doubtful Accounts',
    forms: [
      { var: 'NRV', formula: 'NRV = Gross AR − Allowance' },
      { var: 'Gross AR', formula: 'Gross AR = NRV + Allowance' },
      { var: 'Allowance', formula: 'Allowance = Gross AR − NRV' }
    ]
  },
  {
    id: 're_allowance_roll', chNum: 4, chapter: 'Ch 4',
    name: 'Allowance T-Account Roll-Forward',
    base: 'End Allowance = Beg Allowance + Bad Debt Expense − Write-offs + Recoveries',
    forms: [
      { var: 'End Allowance', formula: 'End Allowance = Beg + BDE − Write-offs + Recoveries' },
      { var: 'Beg Allowance', formula: 'Beg Allowance = End − BDE + Write-offs − Recoveries' },
      { var: 'Bad Debt Expense', formula: 'BDE = End − Beg + Write-offs − Recoveries' },
      { var: 'Write-offs', formula: 'Write-offs = Beg + BDE + Recoveries − End' }
    ]
  },
  {
    id: 're_ar_turnover', chNum: 4, chapter: 'Ch 4 · 12',
    name: 'AR Turnover',
    base: 'AR Turnover = Net Credit Sales / Average AR',
    forms: [
      { var: 'AR Turnover', formula: 'AR Turnover = Net Credit Sales / Average AR' },
      { var: 'Net Credit Sales', formula: 'Net Credit Sales = AR Turnover × Average AR' },
      { var: 'Average AR', formula: 'Average AR = Net Credit Sales / AR Turnover' }
    ]
  },
  {
    id: 're_dso', chNum: 4, chapter: 'Ch 4 · 12',
    name: 'Days Sales Outstanding (DSO)',
    base: 'DSO = 365 / AR Turnover',
    forms: [
      { var: 'DSO', formula: 'DSO = 365 / AR Turnover' },
      { var: 'AR Turnover', formula: 'AR Turnover = 365 / DSO' }
    ]
  },

  // ==================== Ch 5 — Inventory ====================
  {
    id: 're_cogs', chNum: 5, chapter: 'Ch 5',
    name: 'COGS Equation',
    base: 'COGS = Beg Inventory + Purchases − End Inventory',
    forms: [
      { var: 'COGS', formula: 'COGS = Beg Inventory + Purchases − End Inventory' },
      { var: 'Beg Inventory', formula: 'Beg Inventory = COGS + End Inventory − Purchases' },
      { var: 'Purchases', formula: 'Purchases = COGS + End Inventory − Beg Inventory' },
      { var: 'End Inventory', formula: 'End Inventory = Beg Inventory + Purchases − COGS' }
    ]
  },
  {
    id: 're_gp', chNum: 5, chapter: 'Ch 2 · 5',
    name: 'Gross Profit',
    base: 'Gross Profit = Sales − COGS',
    forms: [
      { var: 'Gross Profit', formula: 'Gross Profit = Sales − COGS' },
      { var: 'Sales', formula: 'Sales = Gross Profit + COGS' },
      { var: 'COGS', formula: 'COGS = Sales − Gross Profit' }
    ]
  },
  {
    id: 're_gpm', chNum: 5, chapter: 'Ch 5 · 12',
    name: 'Gross Profit Margin',
    base: 'GP Margin = Gross Profit / Sales',
    forms: [
      { var: 'GP Margin', formula: 'GP Margin = Gross Profit / Sales' },
      { var: 'Gross Profit', formula: 'Gross Profit = GP Margin × Sales' },
      { var: 'Sales', formula: 'Sales = Gross Profit / GP Margin' }
    ]
  },
  {
    id: 're_inv_turn', chNum: 5, chapter: 'Ch 5 · 12',
    name: 'Inventory Turnover',
    base: 'Inventory Turnover = COGS / Average Inventory',
    forms: [
      { var: 'Inventory Turnover', formula: 'Inventory Turnover = COGS / Average Inventory' },
      { var: 'COGS', formula: 'COGS = Inventory Turnover × Average Inventory' },
      { var: 'Average Inventory', formula: 'Average Inventory = COGS / Inventory Turnover' }
    ]
  },
  {
    id: 're_lifo_reserve', chNum: 5, chapter: 'Ch 5',
    name: 'LIFO Reserve',
    base: 'LIFO Reserve = FIFO Inventory − LIFO Inventory',
    forms: [
      { var: 'LIFO Reserve', formula: 'LIFO Reserve = FIFO Inventory − LIFO Inventory' },
      { var: 'FIFO Inventory', formula: 'FIFO Inventory = LIFO Inventory + LIFO Reserve' },
      { var: 'LIFO Inventory', formula: 'LIFO Inventory = FIFO Inventory − LIFO Reserve' }
    ]
  },
  {
    id: 're_lifo_cogs', chNum: 5, chapter: 'Ch 5',
    name: 'LIFO → FIFO COGS Conversion',
    base: 'FIFO COGS = LIFO COGS − Δ LIFO Reserve',
    forms: [
      { var: 'FIFO COGS', formula: 'FIFO COGS = LIFO COGS − Δ LIFO Reserve' },
      { var: 'LIFO COGS', formula: 'LIFO COGS = FIFO COGS + Δ LIFO Reserve' },
      { var: 'Δ LIFO Reserve', formula: 'Δ LIFO Reserve = LIFO COGS − FIFO COGS' }
    ]
  },

  // ==================== Ch 6 — Long-Term Assets ====================
  {
    id: 're_bv', chNum: 6, chapter: 'Ch 6',
    name: 'Book Value',
    base: 'Book Value = Cost − Accumulated Depreciation',
    forms: [
      { var: 'Book Value', formula: 'Book Value = Cost − Accumulated Depreciation' },
      { var: 'Cost', formula: 'Cost = Book Value + Accumulated Depreciation' },
      { var: 'Accumulated Depreciation', formula: 'Accumulated Depreciation = Cost − Book Value' }
    ]
  },
  {
    id: 're_sl', chNum: 6, chapter: 'Ch 6',
    name: 'Straight-Line Depreciation',
    base: 'Annual SL = (Cost − Salvage) / Useful Life',
    forms: [
      { var: 'Annual SL Depreciation', formula: 'Annual SL = (Cost − Salvage) / Useful Life' },
      { var: 'Cost', formula: 'Cost = (Annual SL × Useful Life) + Salvage' },
      { var: 'Salvage', formula: 'Salvage = Cost − (Annual SL × Useful Life)' },
      { var: 'Useful Life', formula: 'Useful Life = (Cost − Salvage) / Annual SL' }
    ]
  },
  {
    id: 're_disposal', chNum: 6, chapter: 'Ch 6',
    name: 'Gain/Loss on Disposal',
    base: 'Gain/Loss = Sale Proceeds − Book Value',
    note: 'Positive = gain. Negative = loss.',
    forms: [
      { var: 'Gain/Loss', formula: 'Gain/Loss = Sale Proceeds − Book Value' },
      { var: 'Sale Proceeds', formula: 'Sale Proceeds = Book Value + Gain (or − Loss)' },
      { var: 'Book Value', formula: 'Book Value = Sale Proceeds − Gain (or + Loss)' }
    ]
  },
  {
    id: 're_ddb', chNum: 6, chapter: 'Ch 6',
    name: 'Double-Declining Balance Depreciation',
    base: 'DDB Annual Dep = (2 / Useful Life) × Beginning Book Value',
    forms: [
      { var: 'DDB Dep', formula: 'DDB Dep = (2 / Useful Life) × Beginning Book Value' },
      { var: 'Beginning Book Value', formula: 'Beginning BV = DDB Dep × Useful Life / 2' },
      { var: 'Useful Life', formula: 'Useful Life = 2 × Beginning BV / DDB Dep' }
    ]
  },
  {
    id: 're_goodwill', chNum: 6, chapter: 'Ch 6',
    name: 'Goodwill',
    base: 'Goodwill = Purchase Price − Fair Value of Net Identifiable Assets',
    forms: [
      { var: 'Goodwill', formula: 'Goodwill = Purchase Price − FV of Net Identifiable Assets' },
      { var: 'Purchase Price', formula: 'Purchase Price = Goodwill + FV of Net Identifiable Assets' },
      { var: 'FV of Net Identifiable Assets', formula: 'FV Net Identifiable = Purchase Price − Goodwill' }
    ]
  },

  // ==================== Ch 7 — Bonds ====================
  {
    id: 're_cash_int', chNum: 7, chapter: 'Ch 7',
    name: 'Cash Interest on Bond',
    base: 'Cash Interest = Face × Coupon Rate × (Time / 12)',
    forms: [
      { var: 'Cash Interest', formula: 'Cash Interest = Face × Coupon Rate × (Time / 12)' },
      { var: 'Face', formula: 'Face = Cash Interest / (Coupon Rate × Time / 12)' },
      { var: 'Coupon Rate', formula: 'Coupon Rate = Cash Interest / (Face × Time / 12)' },
      { var: 'Time (months)', formula: 'Time = Cash Interest × 12 / (Face × Coupon Rate)' }
    ]
  },
  {
    id: 're_int_exp', chNum: 7, chapter: 'Ch 7',
    name: 'Bond Interest Expense (Effective Method)',
    base: 'Interest Expense = Carrying Value × Market Rate × (Time / 12)',
    forms: [
      { var: 'Interest Expense', formula: 'Interest Expense = Carrying Value × Market Rate × (Time / 12)' },
      { var: 'Carrying Value', formula: 'Carrying Value = Interest Expense / (Market Rate × Time / 12)' },
      { var: 'Market Rate', formula: 'Market Rate = Interest Expense / (Carrying Value × Time / 12)' }
    ]
  },
  {
    id: 're_carrying', chNum: 7, chapter: 'Ch 7',
    name: 'Bond Carrying Value',
    base: 'Carrying Value = Face + Premium − Discount',
    forms: [
      { var: 'Carrying Value', formula: 'Carrying Value = Face + Premium − Discount' },
      { var: 'Face', formula: 'Face = Carrying Value − Premium + Discount' },
      { var: 'Premium', formula: 'Premium = Carrying Value − Face (when CV > Face)' },
      { var: 'Discount', formula: 'Discount = Face − Carrying Value (when CV < Face)' }
    ]
  },
  {
    id: 're_bond_retire', chNum: 7, chapter: 'Ch 7',
    name: 'Gain/Loss on Bond Retirement',
    base: 'Gain/Loss = Carrying Value − Cash Paid',
    note: 'NOT (Face − Cash Paid). Use carrying value.',
    forms: [
      { var: 'Gain/Loss', formula: 'Gain/Loss = Carrying Value − Cash Paid' },
      { var: 'Cash Paid', formula: 'Cash Paid = Carrying Value − Gain (or + Loss)' },
      { var: 'Carrying Value', formula: 'Carrying Value = Cash Paid + Gain (or − Loss)' }
    ]
  },
  {
    id: 're_tie', chNum: 7, chapter: 'Ch 7 · 12',
    name: 'Times Interest Earned (TIE)',
    base: 'TIE = EBIT / Interest Expense',
    forms: [
      { var: 'TIE', formula: 'TIE = EBIT / Interest Expense' },
      { var: 'EBIT', formula: 'EBIT = TIE × Interest Expense' },
      { var: 'Interest Expense', formula: 'Interest Expense = EBIT / TIE' }
    ]
  },
  {
    id: 're_ebit', chNum: 7, chapter: 'Ch 7 · 12',
    name: 'EBIT (back-out form)',
    base: 'EBIT = Net Income + Tax + Interest',
    forms: [
      { var: 'EBIT', formula: 'EBIT = Net Income + Tax + Interest' },
      { var: 'Net Income', formula: 'Net Income = EBIT − Tax − Interest' },
      { var: 'Tax', formula: 'Tax = EBIT − Net Income − Interest' },
      { var: 'Interest', formula: 'Interest = EBIT − Net Income − Tax' }
    ]
  },

  // ==================== Ch 8 — Leases ====================
  {
    id: 're_lease_liab', chNum: 8, chapter: 'Ch 8',
    name: 'Initial Lease Liability',
    base: 'Lease Liability = Annual Payment × PV Annuity Factor (n, r)',
    forms: [
      { var: 'Lease Liability', formula: 'Lease Liability = Annual Payment × PV Annuity Factor' },
      { var: 'Annual Payment', formula: 'Annual Payment = Lease Liability / PV Annuity Factor' },
      { var: 'PV Annuity Factor', formula: 'PV Annuity Factor = Lease Liability / Annual Payment' }
    ]
  },
  {
    id: 're_lease_int', chNum: 8, chapter: 'Ch 8',
    name: 'Lease Interest Expense (Year N)',
    base: 'Interest Expense = Beginning Lease Liability × Discount Rate',
    forms: [
      { var: 'Interest Expense', formula: 'Interest Expense = Beginning Lease Liability × Discount Rate' },
      { var: 'Beginning Lease Liability', formula: 'Beg Liability = Interest Expense / Discount Rate' },
      { var: 'Discount Rate', formula: 'Discount Rate = Interest Expense / Beginning Liability' }
    ]
  },

  // ==================== Ch 9 — Equity ====================
  {
    id: 're_outstanding', chNum: 9, chapter: 'Ch 9',
    name: 'Outstanding Shares',
    base: 'Outstanding = Issued − Treasury',
    forms: [
      { var: 'Outstanding', formula: 'Outstanding = Issued − Treasury' },
      { var: 'Issued', formula: 'Issued = Outstanding + Treasury' },
      { var: 'Treasury', formula: 'Treasury = Issued − Outstanding' }
    ]
  },
  {
    id: 're_eps', chNum: 9, chapter: 'Ch 9 · 12',
    name: 'Basic EPS',
    base: 'EPS = (Net Income − Preferred Dividends) / Weighted Avg Common Shares',
    forms: [
      { var: 'EPS', formula: 'EPS = (NI − Preferred Dividends) / Weighted Avg Common Shares' },
      { var: 'Net Income', formula: 'NI = EPS × Weighted Avg Common Shares + Preferred Dividends' },
      { var: 'Preferred Dividends', formula: 'Preferred Dividends = NI − (EPS × Weighted Avg Common Shares)' },
      { var: 'Weighted Avg Common Shares', formula: 'Weighted Avg Shares = (NI − Preferred Dividends) / EPS' }
    ]
  },
  {
    id: 're_eq_method', chNum: 9, chapter: 'Ch 9',
    name: 'Equity-Method Income',
    base: 'Investor Income = Ownership % × Investee Net Income',
    forms: [
      { var: 'Investor Income', formula: 'Investor Income = Ownership % × Investee Net Income' },
      { var: 'Ownership %', formula: 'Ownership % = Investor Income / Investee Net Income' },
      { var: 'Investee Net Income', formula: 'Investee Net Income = Investor Income / Ownership %' }
    ]
  },

  // ==================== Ch 10 — Investments ====================
  {
    id: 're_debt_inv', chNum: 10, chapter: 'Ch 10',
    name: 'Debt Investment Cost',
    base: 'Cost = Purchase Price + Brokerage Fees',
    forms: [
      { var: 'Cost', formula: 'Cost = Purchase Price + Brokerage Fees' },
      { var: 'Purchase Price', formula: 'Purchase Price = Cost − Brokerage Fees' },
      { var: 'Brokerage Fees', formula: 'Brokerage Fees = Cost − Purchase Price' }
    ]
  },
  {
    id: 're_debt_sale', chNum: 10, chapter: 'Ch 10',
    name: 'Gain/Loss on Debt Investment Sale',
    base: 'Gain/Loss = Net Proceeds − Cost',
    forms: [
      { var: 'Gain/Loss', formula: 'Gain/Loss = Net Proceeds − Cost' },
      { var: 'Net Proceeds', formula: 'Net Proceeds = Cost + Gain (or − Loss)' },
      { var: 'Cost', formula: 'Cost = Net Proceeds − Gain (or + Loss)' }
    ]
  },

  // ==================== Ch 11 — Cash Flow ====================
  {
    id: 're_change_cash', chNum: 11, chapter: 'Ch 11',
    name: 'Net Change in Cash',
    base: 'Net Δ Cash = CFO + CFI + CFF',
    forms: [
      { var: 'Net Δ Cash', formula: 'Net Δ Cash = CFO + CFI + CFF' },
      { var: 'CFO', formula: 'CFO = Net Δ Cash − CFI − CFF' },
      { var: 'CFI', formula: 'CFI = Net Δ Cash − CFO − CFF' },
      { var: 'CFF', formula: 'CFF = Net Δ Cash − CFO − CFI' }
    ]
  },
  {
    id: 're_end_cash', chNum: 11, chapter: 'Ch 11',
    name: 'Ending Cash',
    base: 'End Cash = Beg Cash + Net Δ Cash',
    forms: [
      { var: 'End Cash', formula: 'End Cash = Beg Cash + Net Δ Cash' },
      { var: 'Beg Cash', formula: 'Beg Cash = End Cash − Net Δ Cash' },
      { var: 'Net Δ Cash', formula: 'Net Δ Cash = End Cash − Beg Cash' }
    ]
  },
  {
    id: 're_fcf', chNum: 11, chapter: 'Ch 11',
    name: 'Free Cash Flow',
    base: 'FCF = CFO − CapEx',
    forms: [
      { var: 'FCF', formula: 'FCF = CFO − CapEx' },
      { var: 'CFO', formula: 'CFO = FCF + CapEx' },
      { var: 'CapEx', formula: 'CapEx = CFO − FCF' }
    ]
  },

  // ==================== Ch 12 — Ratios ====================
  {
    id: 're_roe', chNum: 12, chapter: 'Ch 12',
    name: 'Return on Equity (ROE)',
    base: 'ROE = Net Income / Average Equity',
    forms: [
      { var: 'ROE', formula: 'ROE = Net Income / Average Equity' },
      { var: 'Net Income', formula: 'Net Income = ROE × Average Equity' },
      { var: 'Average Equity', formula: 'Average Equity = Net Income / ROE' }
    ]
  },
  {
    id: 're_roa', chNum: 12, chapter: 'Ch 12',
    name: 'Return on Assets (ROA)',
    base: 'ROA = Net Income / Average Total Assets',
    forms: [
      { var: 'ROA', formula: 'ROA = Net Income / Average Total Assets' },
      { var: 'Net Income', formula: 'Net Income = ROA × Average Total Assets' },
      { var: 'Average Total Assets', formula: 'Average Total Assets = Net Income / ROA' }
    ]
  },
  {
    id: 're_rofl', chNum: 12, chapter: 'Ch 12',
    name: 'Return on Financial Leverage',
    base: 'ROFL = ROE − ROA',
    forms: [
      { var: 'ROFL', formula: 'ROFL = ROE − ROA' },
      { var: 'ROE', formula: 'ROE = ROFL + ROA' },
      { var: 'ROA', formula: 'ROA = ROE − ROFL' }
    ]
  },
  {
    id: 're_dupont', chNum: 12, chapter: 'Ch 12',
    name: 'DuPont — ROE Decomposition',
    base: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier',
    forms: [
      { var: 'ROE', formula: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier' },
      { var: 'Profit Margin', formula: 'Profit Margin = ROE / (Asset Turnover × Equity Multiplier)' },
      { var: 'Asset Turnover', formula: 'Asset Turnover = ROE / (Profit Margin × Equity Multiplier)' },
      { var: 'Equity Multiplier', formula: 'Equity Multiplier = ROE / (Profit Margin × Asset Turnover)' }
    ]
  },
  {
    id: 're_pm', chNum: 12, chapter: 'Ch 12',
    name: 'Profit Margin',
    base: 'Profit Margin = Net Income / Sales',
    forms: [
      { var: 'Profit Margin', formula: 'Profit Margin = Net Income / Sales' },
      { var: 'Net Income', formula: 'Net Income = Profit Margin × Sales' },
      { var: 'Sales', formula: 'Sales = Net Income / Profit Margin' }
    ]
  },
  {
    id: 're_at', chNum: 12, chapter: 'Ch 12',
    name: 'Asset Turnover',
    base: 'Asset Turnover = Sales / Average Total Assets',
    forms: [
      { var: 'Asset Turnover', formula: 'Asset Turnover = Sales / Average Total Assets' },
      { var: 'Sales', formula: 'Sales = Asset Turnover × Average Total Assets' },
      { var: 'Average Total Assets', formula: 'Average Total Assets = Sales / Asset Turnover' }
    ]
  },
  {
    id: 're_em', chNum: 12, chapter: 'Ch 12',
    name: 'Equity Multiplier',
    base: 'Equity Multiplier = Average Total Assets / Average Equity',
    forms: [
      { var: 'Equity Multiplier', formula: 'Equity Multiplier = Average Total Assets / Average Equity' },
      { var: 'Average Total Assets', formula: 'Average Total Assets = Equity Multiplier × Average Equity' },
      { var: 'Average Equity', formula: 'Average Equity = Average Total Assets / Equity Multiplier' }
    ]
  },
  {
    id: 're_ccc', chNum: 12, chapter: 'Ch 12',
    name: 'Cash Conversion Cycle',
    base: 'CCC = DIO + DSO − DPO',
    forms: [
      { var: 'CCC', formula: 'CCC = DIO + DSO − DPO' },
      { var: 'DIO', formula: 'DIO = CCC − DSO + DPO' },
      { var: 'DSO', formula: 'DSO = CCC − DIO + DPO' },
      { var: 'DPO', formula: 'DPO = DIO + DSO − CCC' }
    ]
  },
  {
    id: 're_pe', chNum: 12, chapter: 'Ch 12',
    name: 'P/E Ratio',
    base: 'P/E = Price / EPS',
    forms: [
      { var: 'P/E', formula: 'P/E = Price / EPS' },
      { var: 'Price', formula: 'Price = P/E × EPS' },
      { var: 'EPS', formula: 'EPS = Price / P/E' }
    ]
  },
  {
    id: 're_de', chNum: 12, chapter: 'Ch 7 · 12',
    name: 'Debt-to-Equity Ratio',
    base: 'D/E = Total Liabilities / Total Equity',
    forms: [
      { var: 'D/E', formula: 'D/E = Total Liabilities / Total Equity' },
      { var: 'Total Liabilities', formula: 'Total Liabilities = D/E × Total Equity' },
      { var: 'Total Equity', formula: 'Total Equity = Total Liabilities / D/E' }
    ]
  },
  {
    id: 're_div_yield', chNum: 12, chapter: 'Ch 9 · 12',
    name: 'Dividend Yield',
    base: 'Dividend Yield = Annual DPS / Price',
    forms: [
      { var: 'Dividend Yield', formula: 'Dividend Yield = Annual DPS / Price' },
      { var: 'Annual DPS', formula: 'Annual DPS = Dividend Yield × Price' },
      { var: 'Price', formula: 'Price = Annual DPS / Dividend Yield' }
    ]
  },
  {
    id: 're_payout', chNum: 12, chapter: 'Ch 9 · 12',
    name: 'Payout Ratio',
    base: 'Payout Ratio = DPS / EPS',
    forms: [
      { var: 'Payout Ratio', formula: 'Payout Ratio = DPS / EPS' },
      { var: 'DPS', formula: 'DPS = Payout Ratio × EPS' },
      { var: 'EPS', formula: 'EPS = DPS / Payout Ratio' }
    ]
  },
  {
    id: 're_horizontal', chNum: 12, chapter: 'Ch 12',
    name: 'Horizontal % Change',
    base: '% Change = (Current − Base) / Base',
    forms: [
      { var: '% Change', formula: '% Change = (Current − Base) / Base' },
      { var: 'Current', formula: 'Current = Base × (1 + % Change)' },
      { var: 'Base', formula: 'Base = Current / (1 + % Change)' }
    ]
  }
];

// =============================================================
// APPROACH — plain-English shortcuts for each question type.
// Just the big idea + a quick example. Nothing academic.
// =============================================================
const APPROACH = [
  {
    id: 'ap_adjusting', chNum: 3, chapter: 'Ch 3',
    title: 'Adjusting entries → total assets question',
    bigIdea: 'Some adjustments hit ASSETS, some hit LIABILITIES. The question only cares about assets, so SKIP anything that only touches liabilities.',
    skipThese: 'Skip: "accrued expenses" (touches liab), "rent earned from unearned" (touches liab).',
    counts: 'Count: depreciation (−), prepaid used (−), accrued revenue / AR recorded (+).',
    example: 'Vivid: Start $430. Skip accrued exp $14 and rent earned $3. Left: Dep −$45, Insurance used −$5, AR +$29. Total: −$21. End = 430 − 21 = $409,000.'
  },
  {
    id: 'ap_cfo_dir', chNum: 11, chapter: 'Ch 11',
    title: 'Cash flow — which direction?',
    bigIdea: 'Cash and current accounts move OPPOSITE ways. If an asset went UP, cash went DOWN (you spent cash to get it).',
    shortcut: 'Asset UP = cash DOWN. Liability UP = cash UP. Reverse the sign of every working-capital change.',
    example: 'AR ↑ $6K → subtract $6K. AP ↓ $4K → subtract $4K. Depreciation $7K → ADD (non-cash). CFO = NI + 7 − 6 − 4 = …'
  },
  {
    id: 'ap_inv_rising', chNum: 5, chapter: 'Ch 5',
    title: 'FIFO vs LIFO in rising prices',
    bigIdea: 'FIFO sends OLD (cheap) costs to COGS and leaves NEW (expensive) inventory on the balance sheet. LIFO is the opposite.',
    shortcut: 'Rising prices: FIFO = big profit + big inventory value. LIFO = small profit + small inventory value.',
    example: 'Same data, both methods: FIFO COGS = $2,020 (cheap goods sold). LIFO COGS = $2,040 (expensive goods sold). Gross profit higher under FIFO.'
  },
  {
    id: 'ap_bond_price', chNum: 7, chapter: 'Ch 7',
    title: 'Bond — par, discount, or premium?',
    bigIdea: 'If the bond pays LESS than what the market wants, you have to discount it to sell it. If it pays MORE, you can charge a premium.',
    shortcut: 'Coupon < Market → DISCOUNT (sells cheap). Coupon > Market → PREMIUM (sells expensive). Equal → PAR.',
    example: 'Quechua: 10% coupon, 12% market. 10 < 12 → discount → issue price below $400K.'
  },
  {
    id: 'ap_bond_retire', chNum: 7, chapter: 'Ch 7',
    title: 'Bond retirement — gain or loss?',
    bigIdea: 'IGNORE the face value. Compare what\'s on your books NOW (carrying value) to what you paid in cash.',
    shortcut: 'Carrying value − Cash paid = Gain (positive) or Loss (negative). NOT face minus cash.',
    example: '$600K bond retired at 98 when CV is $590K. Cash paid = 600 × 0.98 = $588K. Gain = 590 − 588 = $2K.'
  },
  {
    id: 'ap_disposal', chNum: 6, chapter: 'Ch 6',
    title: 'Selling an asset — gain or loss?',
    bigIdea: 'Three steps in order: (1) update depreciation to today, (2) compute book value, (3) compare to cash received.',
    shortcut: 'Forget to update partial-year dep and your BV is wrong. ALWAYS update first.',
    example: 'Hale Kennels sells July 1. Annual SL = $50K. Jan→Jul = 6 mo, so +$25K dep. Updated Accum Dep = $250K. BV = 300 − 250 = $50K. Gain = 80 − 50 = $30K.'
  },
  {
    id: 'ap_cap_exp', chNum: 6, chapter: 'Ch 6',
    title: 'Capitalize or expense?',
    bigIdea: 'If the cost gets you the asset READY TO USE — capitalize. If it just keeps the asset running — expense.',
    shortcut: 'Acquisition + setup → capitalize. Routine maintenance → expense.',
    example: 'Solaris: $72K equipment + $2.6K shipping + $3.8K installation = $78,400 capitalized. (Note that "financed" vs "cash" payment is irrelevant — capitalize the full cost either way.)',
    watchOut: 'If you WRONGLY capitalize a routine repair: NI is too high now, and future depreciation is too high (bigger asset base = more dep).'
  },
  {
    id: 'ap_intangible', chNum: 6, chapter: 'Ch 6',
    title: 'Intangibles — capitalize or expense?',
    bigIdea: 'PURCHASED intangibles → capitalize. Made it INTERNALLY → expense (almost always).',
    shortcut: 'Goodwill is special: only counts if you ACQUIRED another company. Internally generated goodwill is NEVER on the balance sheet.',
    example: 'Bought a patent → capitalize and amortize. Developed your own brand recognition → expense (advertising). Acquired Pepsi → goodwill from the deal is recognized.'
  },
  {
    id: 'ap_bde_method', chNum: 4, chapter: 'Ch 4',
    title: 'Bad debt expense — which method?',
    bigIdea: 'Read the question. If it says "aging" or "% of receivables" → use the balance-sheet method (allowance balance matters). If "% of sales" → ignore the allowance balance.',
    shortcut: 'Aging: BDE plugs the allowance to a target ending balance. % of sales: BDE = Sales × %, period.',
    example: 'Hudson (aging): NRV target $226K, AR $272.5K → required allowance = $46.5K. After write-offs of $21.3K, balance is $10.2K. BDE = 46.5 − 10.2 = $36.3K.'
  },
  {
    id: 'ap_writeoff', chNum: 4, chapter: 'Ch 4',
    title: 'Write-off effect (the "trick" question)',
    bigIdea: 'Writing off a specific account is just paperwork. It changes nothing on the income statement and nothing on NRV.',
    shortcut: 'Gross AR ↓ and Allowance ↓ by the same amount → NRV stays put. Bad debt expense was already booked when you estimated the allowance.',
    example: 'NRV $33K before writing off a $2K account → NRV $33K after. Unchanged.'
  },
  {
    id: 'ap_investment', chNum: 10, chapter: 'Ch 10',
    title: 'Investing in another company — which method?',
    bigIdea: 'It\'s about how much CONTROL you have. <20% you\'re just a passive investor. 20–50% you have a real say (equity method). >50% you run the place (consolidate).',
    shortcut: '<20% = Fair Value. 20–50% = Equity Method (investee = "associate"). >50% = Consolidation (investee = "subsidiary").',
    example: 'Mouns owns 40% of Darian → equity method. Income = 40% × Darian\'s NI. Dividends received reduce the INVESTMENT account, not income.'
  },
  {
    id: 'ap_treasury', chNum: 9, chapter: 'Ch 9',
    title: 'Treasury stock — the "no income" rule',
    bigIdea: 'Treasury stock NEVER creates profit or loss. Any "gain" from buying low and reselling high goes into APIC, not the income statement.',
    shortcut: 'No P&L from your own shares. Difference goes to APIC.',
    example: 'Buy back 100 shares at $22 = $2,200 in Treasury. Reissue 80 of them at $24 = cash $1,920; cost basis $1,760. Difference $160 → Cr APIC.'
  },
  {
    id: 'ap_ifrs_gaap', chNum: 1, chapter: 'Ch 1',
    title: 'IFRS vs US GAAP — the four big differences',
    bigIdea: 'Most "which is allowed under X" questions are testing one of these four.',
    shortcut: 'LIFO: GAAP yes, IFRS no. Revaluation up: IFRS yes, GAAP no. Reverse impairment (not goodwill): IFRS yes, GAAP no. Development R&D: IFRS may capitalize, GAAP expense everything.',
    example: '"Under IFRS, which inventory method is NOT permitted?" → LIFO.'
  },
  {
    id: 'ap_quick', chNum: 2, chapter: 'Ch 2',
    title: 'Quick Ratio — what to exclude',
    bigIdea: '"Quick" means "can I pay bills WITHOUT selling inventory?" So exclude inventory. And prepaid (you can\'t hand your landlord prepaid insurance to settle a bill).',
    shortcut: 'QR = (Cash + Marketable Sec + AR) / Current Liabilities. NO inventory. NO prepaid.',
    example: 'Lowe\'s: QR = (466 + 125) / 9,348 = 0.063. Looks terrible — but Lowe\'s is a retailer, most CA is inventory. Current Ratio of 1.07 hides this.'
  },
  {
    id: 'ap_ccc', chNum: 12, chapter: 'Ch 12',
    title: 'Cash Conversion Cycle — what it means',
    bigIdea: 'How many days is your cash trapped? Days inventory sitting around + Days waiting for customer payment − Days you delay paying suppliers.',
    shortcut: 'CCC = DIO + DSO − DPO. Lower is better (cash comes back faster). No inventory? DIO = 0.',
    example: 'Mock 21: CCC 100 days, no inventory, DPO 50. So 100 = DSO − 50 → DSO = 150 days.'
  },
  {
    id: 'ap_dupont', chNum: 12, chapter: 'Ch 12',
    title: 'DuPont — what\'s driving ROE?',
    bigIdea: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier. Three knobs you can turn: prices, efficiency, or leverage.',
    shortcut: 'PM up = cutting costs or charging more. AT up = using assets harder. EM up = more debt.',
    example: 'Lowe\'s ROFL = 16.4 pp out of 24.7% ROE — over 60% comes from leverage. Not great operating performance; just lots of debt.'
  },
  {
    id: 'ap_horizontal', chNum: 12, chapter: 'Ch 12',
    title: 'The "70% decrease" trap',
    bigIdea: 'If something decreased BY 70%, it\'s now 30% of what it was. Multiply by 30%, not by 70%.',
    shortcut: 'Decrease by X% → new = old × (1 − X%).',
    example: 'Flynn 2019 NI €6M, decreased 70% in 2020. New NI = 6M × 30% = €1.8M. (NOT 6M × 70% = 4.2M.)'
  },
  {
    id: 'ap_eps', chNum: 9, chapter: 'Ch 9',
    title: 'EPS when shares changed mid-year',
    bigIdea: 'Use WEIGHTED AVERAGE shares. Each share count gets multiplied by the fraction of the year it was outstanding.',
    shortcut: '8K shares for 3 months + 7.2K for 9 months = 8K × 3/12 + 7.2K × 9/12.',
    example: 'Phelps: 8,000 × 3/12 + 7,200 × 9/12 = 2,000 + 5,400 = 7,400. EPS = (8K − 1K) / 7.4K = $0.946.'
  },
  {
    id: 'ap_shares', chNum: 9, chapter: 'Ch 9',
    title: 'Authorized vs Issued vs Outstanding',
    bigIdea: 'Authorized = the ceiling. Issued = how many we\'ve ever sold. Outstanding = how many are out there right now (= Issued − Treasury).',
    shortcut: 'Outstanding is what matters for EPS, voting, dividends.',
    example: 'Skyline: Issued $600K / par $10 = 60,000 shares. Treasury $1,800 / $15 = 120 shares. Outstanding = 60,000 − 120 = 59,880.'
  },
  {
    id: 'ap_cf_class', chNum: 11, chapter: 'Ch 11',
    title: 'Which section of cash flow — Op, Inv, or Fin?',
    bigIdea: 'Operating = running the business. Investing = long-term stuff (their assets, others\' securities). Financing = your own debt, your own equity, dividends.',
    shortcut: 'Buy equipment → INV. Issue stock or pay dividends → FIN. Cash from customers → OP. Non-cash transactions → footnote only.',
    example: 'Building bought for cash → INV. Machinery bought with a note (no cash) → footnote only. Dividends paid → FIN.'
  },
  {
    id: 'ap_strategy', chNum: 0, chapter: 'Strategy',
    title: 'Universal — how to attack ANY numeric question',
    bigIdea: 'Before you compute anything, do these 4 steps. They save you from sign errors and from using the wrong formula.',
    shortcut: '1) UNDERLINE what they want. 2) LIST the givens. 3) PICK the formula that connects them. 4) PLUG IN and double-check signs.',
    example: 'Nguyen: Want Revenue. Got Beg E, End E, Issuance, Expenses, Dividends. Connect via ΔE = NI + Issuance − Div, then NI = Rev − Exp. Solve ΔE first → NI → Rev.'
  }
];
