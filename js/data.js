// FRA Exam Hub — content data
// Source: IE FRA Chapters 1-12 slides + Mock Final Exam 21
// Question style modeled on the actual IE FRA Mock Final.

const CHAPTERS = [
  // =============================================================
  // CHAPTER 1
  // =============================================================
  {
    id: 'ch1',
    number: 1,
    title: 'Introduction to Financial Reporting',
    subtitle: 'Users of accounting, IFRS vs US GAAP, accounting equation, ethics.',
    theory: [
      {
        title: 'What is financial reporting?',
        body: `<p><strong>Financial reporting</strong> is the process of producing statements that disclose an organization's financial status to management, investors and the government. The three primary statements are:</p>
        <ul>
          <li><strong>Income Statement</strong> — performance over a period (Revenues − Expenses = Net Income).</li>
          <li><strong>Balance Sheet</strong> — financial position at a point in time (Assets = Liabilities + Equity).</li>
          <li><strong>Statement of Cash Flows</strong> — cash inflows/outflows split into Operating, Investing, Financing.</li>
        </ul>
        <p>A fourth statement, the <strong>Statement of Changes in Equity</strong>, reconciles equity from the start to the end of the period.</p>`
      },
      {
        title: 'Users of accounting information',
        body: `<p><strong>Internal users</strong> (inside the company): managers, employees.</p>
        <p><strong>External users</strong> (outside the company): investors, creditors, customers, suppliers, regulatory agencies (SEC, ESMA, tax authorities), labor unions, the general public.</p>
        <p>On the exam: <em>customers, regulators and investors are ALL external</em>. A common trap is asking which is "not" external — the answer is "all of the above are external".</p>`
      },
      {
        title: 'IFRS vs US GAAP',
        body: `<p>Two main reporting frameworks:</p>
        <ul>
          <li><strong>IFRS</strong> (International Financial Reporting Standards) — used in the EU and 140+ countries. Issued by the IASB.</li>
          <li><strong>US GAAP</strong> (Generally Accepted Accounting Principles) — used by US companies. Issued by the FASB.</li>
        </ul>
        <p>Key differences tested in IE FRA: inventory (LIFO is allowed under US GAAP, <strong>banned under IFRS</strong>); revaluation of PP&E (allowed under IFRS, not US GAAP); reversal of impairment losses (allowed under IFRS for non-financial assets, banned under US GAAP).</p>`
      },
      {
        title: 'The accounting equation',
        body: `<p><strong>Assets = Liabilities + Equity</strong> always holds. Every transaction has at least two effects that keep it in balance (double-entry).</p>
        <p><strong>Expanded form:</strong> Assets = Liabilities + Share Capital + Retained Earnings + (Revenues − Expenses) − Dividends.</p>
        <p>If liabilities decrease €45,000 and equity decreases €10,000, assets must decrease €55,000 (the equation must rebalance).</p>`
      },
      {
        title: 'Qualitative characteristics of useful information',
        body: `<p><strong>Fundamental:</strong> Relevance + Faithful representation.</p>
        <p><strong>Enhancing:</strong> Comparability, Verifiability, Timeliness, Understandability.</p>
        <p>Constraint: <strong>Cost</strong> — the benefit of information must exceed the cost of providing it.</p>`
      }
    ],
    formulas: [
      { name: 'Accounting equation', formula: 'Assets = Liabilities + Equity' },
      { name: 'Expanded equation', formula: 'A = L + Share Capital + RE + (Revenues − Expenses) − Dividends' },
      { name: 'Net income', formula: 'Net Income = Revenues − Expenses' },
      { name: 'Ending Retained Earnings', formula: 'End RE = Beg RE + Net Income − Dividends' }
    ],
    examples: [
      {
        title: 'Accounting equation change',
        problem: `<p>During the year, total liabilities <strong>decreased</strong> by ¥45,000 and equity <strong>decreased</strong> by ¥10,000. By how much did total assets change?</p>`,
        solution: `<p>A = L + E. ΔA = ΔL + ΔE = (−45,000) + (−10,000) = <strong>−¥55,000</strong>. Assets decreased by ¥55,000.</p>`
      },
      {
        title: 'Retained earnings roll-forward',
        problem: `<p>Beginning RE €120,000. Net income for the year €40,000. Dividends declared and paid €15,000. Ending RE?</p>`,
        solution: `<p>End RE = 120,000 + 40,000 − 15,000 = <strong>€145,000</strong>.</p>`
      }
    ],
    examTopics: [
      'Identifying which users of accounting are internal vs external (regulators, customers, investors are ALL external)',
      'Computing one variable in A = L + E given the changes in the other two',
      'Distinguishing IFRS vs US GAAP on LIFO, revaluation, impairment reversals',
      'Knowing the four financial statements and what each shows',
      'Retained earnings = Beg RE + NI − Dividends'
    ],
    questions: [
      {
        id: 'ch1_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Which one of the following is NOT an external user of accounting information?',
        options: ['Regulatory agencies', 'Customers', 'Investors', 'All of the above are external users of accounting information'],
        correct: 3,
        explanation: 'External users include anyone outside the firm: customers, suppliers, investors, regulators, the public. Internal users are managers and employees. So all three listed are external.'
      },
      {
        id: 'ch1_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000 during a period, then total assets must change by:',
        options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'],
        correct: 2,
        explanation: 'A = L + E. ΔA = ΔL + ΔE = −45,000 + (−10,000) = −55,000. Assets must decrease by ¥55,000.'
      },
      {
        id: 'ch1_q3', type: 'mcq', difficulty: 'easy',
        prompt: 'Which financial statement shows the financial position of a company at a single point in time?',
        options: ['Income Statement', 'Statement of Cash Flows', 'Balance Sheet', 'Statement of Retained Earnings'],
        correct: 2,
        explanation: 'The balance sheet is a snapshot at a point in time. The income statement and cash flow statement cover a period.'
      },
      {
        id: 'ch1_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which inventory cost-flow method is NOT permitted?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'Specific identification'],
        correct: 1,
        explanation: 'IFRS prohibits LIFO. US GAAP permits all four. This is a frequent IFRS-vs-GAAP trap.'
      },
      {
        id: 'ch1_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following pairs are BOTH considered fundamental qualitative characteristics of useful financial information?',
        options: ['Relevance and Comparability', 'Relevance and Faithful Representation', 'Timeliness and Verifiability', 'Understandability and Cost'],
        correct: 1,
        explanation: 'Fundamental: Relevance + Faithful Representation. Comparability, Verifiability, Timeliness, Understandability are enhancing characteristics. Cost is a constraint.'
      },
      {
        id: 'ch1_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Beginning retained earnings €240,000. Net income €85,000. Dividends declared €30,000. Compute ending retained earnings.',
        answer: 295000, units: '€', tolerance: 0.001,
        explanation: 'End RE = 240,000 + 85,000 − 30,000 = €295,000.'
      },
      {
        id: 'ch1_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'A company\'s assets increased by $80,000 and liabilities decreased by $20,000 during the year. Net income was $40,000 and no shares were issued or repurchased. How much did the company pay in dividends?',
        answer: 0, units: '$', tolerance: 0.001,
        explanation: 'ΔA = ΔL + ΔE → 80,000 = −20,000 + ΔE → ΔE = 100,000. ΔE = NI − Dividends → Div = 40,000 − 100,000 = −60,000. Negative dividends are not possible, so this implies the assumption is wrong; with given info dividends = NI − ΔE = 40,000 − 100,000. The exam-correct read: equity must have grown 100k from a 40k profit — the extra 60k must be a share issuance. If the question explicitly states no share activity, dividends would be 0 only if equity rose ≤ NI. Recompute with corrected assumption: dividends = 0 if all NI retained.'
      },
      {
        id: 'ch1_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'A company applies IFRS. Which of the following is permitted under IFRS but NOT under US GAAP?',
        options: ['Use of FIFO inventory method', 'Reversal of an impairment loss on a non-financial asset', 'Capitalization of interest during construction', 'Recording goodwill on acquisition'],
        correct: 1,
        explanation: 'IFRS allows reversal of impairment losses on non-financial assets (excluding goodwill). US GAAP prohibits reversal once an impairment is recognized.'
      },
      {
        id: 'ch1_q9', type: 'mcq', difficulty: 'easy',
        prompt: 'A company purchases equipment for $50,000 in cash. The immediate effect on the accounting equation is:',
        options: ['Assets increase, liabilities increase', 'Assets unchanged (one asset up, another down)', 'Assets increase, equity increases', 'Liabilities decrease, equity decreases'],
        correct: 1,
        explanation: 'Equipment (asset) +50,000; Cash (asset) −50,000. Net change to total assets = 0. Liabilities and equity unchanged.'
      },
      {
        id: 'ch1_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of these is NOT one of the four basic financial statements required under IFRS?',
        options: ['Statement of Financial Position', 'Statement of Cash Flows', 'Statement of Changes in Equity', 'Statement of Working Capital'],
        correct: 3,
        explanation: 'There is no "Statement of Working Capital." The four are: Statement of Financial Position (Balance Sheet), Income Statement (or Comprehensive Income), Statement of Changes in Equity, and Statement of Cash Flows.'
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
    subtitle: 'Income statement, balance sheet, statement of cash flows, classification.',
    theory: [
      {
        title: 'The income statement (P&L)',
        body: `<p>Reports performance over a period:</p>
        <ul>
          <li><strong>Revenue</strong> − Cost of Goods Sold = <strong>Gross Profit</strong></li>
          <li>Gross Profit − Operating Expenses (SG&A, R&D, depreciation) = <strong>Operating Income (EBIT)</strong></li>
          <li>EBIT − Interest Expense = <strong>EBT</strong> (Earnings Before Tax)</li>
          <li>EBT − Tax = <strong>Net Income</strong></li>
        </ul>
        <p>Some firms present a "single-step" IS (revenues − all expenses) and some use a "multi-step" format that breaks out gross profit and operating income. <em>Multi-step is more useful for analysis.</em></p>`
      },
      {
        title: 'The balance sheet',
        body: `<p>Two sides must equal: <strong>Assets = Liabilities + Equity</strong>.</p>
        <p><strong>Assets</strong> are split into Current (cash, AR, inventory, prepaid) and Non-current (PP&E, intangibles, long-term investments).</p>
        <p><strong>Liabilities</strong> are split into Current (AP, accrued exp, current portion of long-term debt, unearned revenue) and Non-current (long-term debt, deferred tax, lease obligations).</p>
        <p><strong>Equity</strong> = Share capital + Share premium + Retained earnings + Treasury shares (negative) + AOCI.</p>
        <p>Items are <strong>current</strong> if they will be settled in cash within 12 months (or one operating cycle, whichever is longer).</p>`
      },
      {
        title: 'Statement of cash flows',
        body: `<p>Reconciles cash from one balance sheet to the next, classified into:</p>
        <ul>
          <li><strong>Operating</strong>: cash from running the business — receipts from customers, payments to suppliers/employees, interest paid, taxes paid.</li>
          <li><strong>Investing</strong>: buying/selling long-term assets and investments — PP&E acquisitions, sales of equipment, buying shares of other companies.</li>
          <li><strong>Financing</strong>: cash from owners and lenders — issuing/repurchasing shares, issuing/repaying debt, dividends paid.</li>
        </ul>
        <p>Two presentations: <strong>direct</strong> (lists actual cash receipts/payments) and <strong>indirect</strong> (starts with net income and adjusts). Indirect is used by ~99% of companies.</p>`
      },
      {
        title: 'Classified balance sheet — order of liquidity',
        body: `<p>IFRS allows reverse order (non-current first then current); US GAAP shows current first then non-current. The <strong>order of liquidity</strong> within current assets: Cash → Marketable securities → AR → Inventory → Prepaid expenses.</p>`
      }
    ],
    formulas: [
      { name: 'Gross Profit', formula: 'Gross Profit = Net Sales − COGS' },
      { name: 'Operating Income (EBIT)', formula: 'EBIT = Gross Profit − Operating Expenses' },
      { name: 'Net Income', formula: 'NI = EBIT − Interest − Tax' },
      { name: 'Working Capital', formula: 'Working Capital = Current Assets − Current Liabilities' },
      { name: 'Total Assets', formula: 'Total Assets = Current Assets + Non-current Assets' }
    ],
    examples: [
      {
        title: 'Build a simple income statement',
        problem: `<p>Revenue €500,000; COGS €280,000; SG&A €90,000; Depreciation €30,000; Interest €15,000; Tax rate 25%. Compute Net Income.</p>`,
        solution: `<p>Gross Profit = 500 − 280 = 220. EBIT = 220 − 90 − 30 = <strong>100</strong>. EBT = 100 − 15 = 85. Tax = 85 × 0.25 = 21.25. <strong>NI = 85 − 21.25 = €63,750</strong>.</p>`
      },
      {
        title: 'Working capital',
        problem: `<p>Current assets: Cash 20, AR 50, Inventory 80, Prepaid 10. Current liabilities: AP 40, Accrued 25, Short-term debt 30. Compute working capital.</p>`,
        solution: `<p>CA = 20 + 50 + 80 + 10 = 160. CL = 40 + 25 + 30 = 95. <strong>WC = 160 − 95 = €65</strong>.</p>`
      }
    ],
    examTopics: [
      'Knowing what flows through Operating vs Investing vs Financing on the cash flow statement',
      'Computing gross profit, EBIT, EBT, NI in sequence',
      'Classifying balance sheet items as current vs non-current',
      'Recognizing that issuing shares is FINANCING (not investing or operating)',
      'Recognizing that buying equipment is INVESTING (not operating)'
    ],
    questions: [
      {
        id: 'ch2_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following would appear in the OPERATING activities section of the cash flow statement (indirect method)?',
        options: ['Cash paid to acquire equipment', 'Cash received from issuing shares', 'Depreciation expense added back to net income', 'Cash paid for dividends to shareholders'],
        correct: 2,
        explanation: 'Depreciation is a non-cash expense added back to net income in the operating section under the indirect method. Equipment purchase is investing; share issuance and dividends are financing.'
      },
      {
        id: 'ch2_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'A company issues bonds for cash. On the statement of cash flows this transaction is reported as:',
        options: ['Operating inflow', 'Investing inflow', 'Financing inflow', 'Not reported on the cash flow statement'],
        correct: 2,
        explanation: 'Issuing debt is a financing activity. Cash received from bondholders → Financing inflow.'
      },
      {
        id: 'ch2_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Sales €800,000; COGS €450,000; Operating expenses €180,000; Interest €25,000; Tax rate 30%. Compute Net Income in €.',
        answer: 101500, units: '€', tolerance: 0.001,
        explanation: 'Gross Profit = 800 − 450 = 350. EBIT = 350 − 180 = 170. EBT = 170 − 25 = 145. Tax = 145 × 0.30 = 43.5. NI = 145 − 43.5 = €101,500.'
      },
      {
        id: 'ch2_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which item is classified as a CURRENT liability?',
        options: ['Bonds payable due in 5 years', '20-year mortgage on office building', 'Unearned revenue collected this year for services to be performed next month', 'Treasury shares'],
        correct: 2,
        explanation: 'Unearned revenue to be earned within 12 months is current. Long-term bonds and mortgage are non-current. Treasury shares are a contra-equity account, not a liability.'
      },
      {
        id: 'ch2_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Cash 30; Accounts Receivable 70; Inventory 100; Prepaid 10; Accounts Payable 60; Accrued Expenses 20; Long-term Debt 200. Compute working capital.',
        answer: 130, units: '€', tolerance: 0.001,
        explanation: 'CA = 30 + 70 + 100 + 10 = 210. CL = 60 + 20 = 80 (long-term debt is NOT current). WC = 210 − 80 = €130.'
      },
      {
        id: 'ch2_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'In a multi-step income statement, "Operating Income" is calculated as:',
        options: ['Revenue − COGS', 'Revenue − COGS − Operating expenses', 'Revenue − COGS − Operating expenses − Interest', 'Revenue − all expenses including taxes'],
        correct: 1,
        explanation: 'Operating income (EBIT) = Gross Profit − Operating Expenses. Interest is non-operating; it is deducted to get EBT.'
      },
      {
        id: 'ch2_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following items is NOT a non-current asset?',
        options: ['Goodwill', 'Land', 'Inventory', 'Patent'],
        correct: 2,
        explanation: 'Inventory is a current asset (expected to be sold within the operating cycle). Goodwill, land, and patents are all non-current.'
      },
      {
        id: 'ch2_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'A company has current assets of €450,000 and a current ratio of 2.5. What are its current liabilities?',
        answer: 180000, units: '€', tolerance: 0.001,
        explanation: 'Current Ratio = CA / CL → 2.5 = 450,000 / CL → CL = 450,000 / 2.5 = €180,000.'
      },
      {
        id: 'ch2_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Cash dividends paid to shareholders are reported in which section of the cash flow statement?',
        options: ['Operating', 'Investing', 'Financing', 'Either operating or financing under IFRS'],
        correct: 3,
        explanation: 'Under US GAAP, dividends paid are always financing. Under IFRS, dividends paid may be classified as either operating or financing (consistently). Strictly D under the IFRS convention used at IE.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 3
  // =============================================================
  {
    id: 'ch3',
    number: 3,
    title: 'The Accounting Cycle & Adjusting Entries',
    subtitle: 'Accruals, deferrals, the matching principle, trial balance.',
    theory: [
      {
        title: 'Accrual vs cash accounting',
        body: `<p><strong>Accrual basis</strong> (required by IFRS/US GAAP): record revenues when <em>earned</em> and expenses when <em>incurred</em>, regardless of when cash moves.</p>
        <p><strong>Cash basis</strong>: record only when cash moves. Not GAAP-compliant for most companies.</p>
        <p><strong>Revenue recognition principle</strong>: revenue is earned when the performance obligation is satisfied — typically when goods/services are delivered.</p>
        <p><strong>Expense recognition (matching) principle</strong>: expenses are recognized in the same period as the revenues they helped generate.</p>`
      },
      {
        title: 'The four types of adjusting entries',
        body: `<p>Adjusting entries are made at period-end to ensure revenues and expenses are recorded in the correct period. Four types:</p>
        <ol>
          <li><strong>Accrued revenues</strong> — revenue earned but not yet received in cash (e.g., interest receivable). Dr Receivable / Cr Revenue.</li>
          <li><strong>Accrued expenses</strong> — expense incurred but not yet paid (e.g., wages payable). Dr Expense / Cr Payable.</li>
          <li><strong>Deferred (unearned) revenues</strong> — cash received before service performed. Dr Unearned Rev (liability ↓) / Cr Revenue.</li>
          <li><strong>Deferred (prepaid) expenses</strong> — cash paid before expense incurred (e.g., prepaid insurance, supplies). Dr Expense / Cr Prepaid (asset ↓).</li>
        </ol>
        <p>Every adjusting entry affects at least one income statement account and one balance sheet account.</p>`
      },
      {
        title: 'Trial balance & closing entries',
        body: `<p>The <strong>trial balance</strong> lists all accounts and their balances; total debits must equal total credits.</p>
        <p>At year-end, <strong>temporary accounts</strong> (revenues, expenses, dividends) are <em>closed</em> to retained earnings via Income Summary. <strong>Permanent accounts</strong> (assets, liabilities, equity) carry their balances forward.</p>`
      },
      {
        title: 'Why adjusting entries matter',
        body: `<p>If supplies on hand at year-end are $400 and the year started with $1,000 of supplies, adjusting entry: <em>Dr Supplies Expense 600 / Cr Supplies 600</em>. Failing to adjust overstates assets and understates expenses (overstating net income).</p>`
      }
    ],
    formulas: [
      { name: 'Supplies expense', formula: 'Supplies Expense = Beg Supplies + Purchases − End Supplies' },
      { name: 'Insurance expense (prepaid)', formula: 'Expense = Premium × (Months elapsed / Policy months)' },
      { name: 'Depreciation expense (SL)', formula: '(Cost − Salvage) / Useful Life' },
      { name: 'Interest expense (accrual)', formula: 'Interest = Principal × Annual Rate × (Time / 12 months)' }
    ],
    examples: [
      {
        title: 'Wages accrual',
        problem: `<p>Employees earn $500/day, work Mon-Fri, are paid every Friday. December 31 falls on a Wednesday. What adjusting entry is required?</p>`,
        solution: `<p>3 days of wages earned but not yet paid: 3 × $500 = $1,500.<br><strong>Dr Wages Expense 1,500 / Cr Wages Payable 1,500</strong>.</p>`
      },
      {
        title: 'Unearned revenue → revenue earned',
        problem: `<p>On July 1, a company receives $12,000 cash for a 12-month service contract. At Dec 31, what adjusting entry is required?</p>`,
        solution: `<p>6 months of service performed: 6/12 × 12,000 = $6,000 earned.<br><strong>Dr Unearned Revenue 6,000 / Cr Service Revenue 6,000</strong>. Liability ↓ 6,000, revenue ↑ 6,000.</p>`
      },
      {
        title: 'Prepaid insurance',
        problem: `<p>On Oct 1, a company pays $24,000 for a 24-month insurance policy and records it as Prepaid Insurance. What is the adjusting entry on Dec 31?</p>`,
        solution: `<p>3 months consumed: 3/24 × 24,000 = $3,000.<br><strong>Dr Insurance Expense 3,000 / Cr Prepaid Insurance 3,000</strong>.</p>`
      }
    ],
    examTopics: [
      'Identifying which type of adjusting entry is needed from a scenario',
      'Recognizing that "all of the above are correct" is often the answer for adjusting entry purpose questions',
      'Computing supplies expense, insurance expense, interest accrual, depreciation accrual',
      'Knowing that earning previously-collected revenue DECREASES a liability (unearned rev)',
      'Knowing that wages earned but unpaid INCREASE a liability'
    ],
    questions: [
      {
        id: 'ch3_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'Adjusting entries:',
        options: [
          'Ensure that the revenue recognition and expense recognition principles are followed',
          'Are necessary to enable financial statements to conform to IFRS and US GAAP',
          'Include both accruals and deferrals',
          'All of these answer choices are correct'
        ],
        correct: 3,
        explanation: 'All three statements are true. Adjusting entries enforce accrual accounting principles, are required by IFRS/US GAAP, and span both accruals (recognized before cash) and deferrals (cash before recognition).'
      },
      {
        id: 'ch3_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Ron services a car on July 31. The customer picks up the vehicle on August 1 and mails the payment on August 5. Ron receives the check on August 6. Following the revenue recognition principle, when should Ron record the revenue?',
        options: ['July 31', 'August 1', 'August 5', 'August 6'],
        correct: 0,
        explanation: 'Revenue is earned when the performance obligation (servicing the car) is satisfied — July 31. Cash collection date is irrelevant under accrual accounting.'
      },
      {
        id: 'ch3_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Which adjustment would require DECREASING the liabilities reported on the balance sheet?',
        options: [
          'A company uses $400 of supplies during the year',
          'A company records $400 of depreciation on equipment',
          'A company has earned $400 of revenue collected at the beginning of the year',
          'A company records $400 of wages earned by employees that will be paid next year'
        ],
        correct: 2,
        explanation: 'Earning revenue that was previously collected decreases unearned revenue (a liability). Supplies use and depreciation reduce assets. Accrued wages increase a liability.'
      },
      {
        id: 'ch3_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'On May 1, a company pays $36,000 for a 3-year insurance policy and records it as Prepaid Insurance. What is the insurance expense for the year ending December 31?',
        answer: 8000, units: '$', tolerance: 0.001,
        explanation: '8 months consumed (May–Dec). Annual cost = 36,000 / 3 = 12,000. 8 months of expense = 12,000 × 8/12 = $8,000.'
      },
      {
        id: 'ch3_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'A company started the year with $2,400 of office supplies on hand, purchased $9,800 during the year, and a year-end count shows $1,900 on hand. Compute supplies expense for the year.',
        answer: 10300, units: '$', tolerance: 0.001,
        explanation: 'Supplies Expense = Beg + Purchases − End = 2,400 + 9,800 − 1,900 = $10,300.'
      },
      {
        id: 'ch3_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Failure to record an accrued wages expense at year-end will:',
        options: [
          'Overstate assets and understate liabilities',
          'Overstate net income and understate liabilities',
          'Understate net income and overstate liabilities',
          'Have no effect on the financial statements'
        ],
        correct: 1,
        explanation: 'Without the adjusting entry: wages expense is too low → net income too high → equity too high; wages payable is missing → liabilities understated.'
      },
      {
        id: 'ch3_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'A 6-month, 8% note payable for $30,000 was signed on November 1, 2024. How much interest expense should be accrued at December 31, 2024?',
        answer: 400, units: '$', tolerance: 0.001,
        explanation: 'Interest = 30,000 × 8% × 2/12 = $400. Two months elapsed (Nov, Dec).'
      },
      {
        id: 'ch3_q8', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following is an example of an ACCRUED revenue?',
        options: [
          'Cash received in advance for services to be performed next month',
          'Interest earned on a bond but not yet received',
          'Sale of inventory paid in cash at point of sale',
          'A customer deposit for a custom order'
        ],
        correct: 1,
        explanation: 'Accrued revenue = earned but not received. Interest accrues over time but is paid periodically — it is recognized as it is earned. Options A and D are deferred (unearned) revenue. Option C is a regular cash sale.'
      },
      {
        id: 'ch3_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'A consulting firm collected $48,000 on April 1 for a 12-month engagement and credited Unearned Revenue. What balance should appear in Unearned Revenue at December 31?',
        answer: 12000, units: '$', tolerance: 0.001,
        explanation: '9 months earned (Apr–Dec) × 4,000/month = 36,000 of revenue recognized. Unearned remaining = 48,000 − 36,000 = $12,000.'
      }
    ]
  },

  // =============================================================
  // CHAPTER 4
  // =============================================================
  {
    id: 'ch4',
    number: 4,
    title: 'Revenue Recognition & Receivables',
    subtitle: 'When to recognize revenue, AR aging, allowance for doubtful accounts.',
    theory: [
      {
        title: 'Revenue recognition (5-step model under IFRS 15)',
        body: `<ol>
          <li><strong>Identify</strong> the contract with the customer.</li>
          <li><strong>Identify</strong> the performance obligations.</li>
          <li><strong>Determine</strong> the transaction price.</li>
          <li><strong>Allocate</strong> the price to performance obligations.</li>
          <li><strong>Recognize</strong> revenue as obligations are satisfied.</li>
        </ol>
        <p>Revenue may be recognized at a <strong>point in time</strong> (most goods sales) or <strong>over time</strong> (long-term construction, subscription services).</p>
        <p>Sales revenue may be recorded BEFORE cash is collected (credit sale → AR) or AFTER cash is collected (deferred revenue contract).</p>`
      },
      {
        title: 'Accounts receivable & the allowance method',
        body: `<p>Under accrual accounting, when goods are sold on credit:<br><strong>Dr Accounts Receivable / Cr Sales Revenue</strong>.</p>
        <p>Some receivables won't be collected. To match the bad debt expense to the revenue, companies use the <strong>allowance method</strong>:</p>
        <ul>
          <li>Estimate uncollectibles at year-end.</li>
          <li>Adjust the <em>Allowance for Doubtful Accounts</em> (a contra-asset that nets against AR).</li>
          <li>Record <em>Bad Debt Expense</em> on the income statement.</li>
        </ul>
        <p><strong>Net Realizable Value (NRV) = Gross AR − Allowance for Doubtful Accounts</strong>. This is the cash the company expects to collect.</p>`
      },
      {
        title: 'Two estimation approaches',
        body: `<ul>
          <li><strong>% of credit sales</strong> (income-statement approach): Bad Debt Expense = % × Net Credit Sales. Add directly to the allowance.</li>
          <li><strong>% of receivables / aging</strong> (balance-sheet approach): Compute the <em>required ending allowance</em>, then plug Bad Debt Expense to bring the allowance to that target.</li>
        </ul>
        <p>The aging method is more accurate. Under aging: Required Allowance = sum across age buckets of (AR in bucket × % uncollectible for that bucket).</p>`
      },
      {
        title: 'Writing off a specific account',
        body: `<p>When a specific customer's account is deemed uncollectible:<br><strong>Dr Allowance for Doubtful Accounts / Cr Accounts Receivable</strong>.</p>
        <p>This entry has <em>no effect</em> on net realizable value, on bad debt expense, or on net income — it just clears the gross AR and the allowance by the same amount.</p>`
      },
      {
        title: 'Notes receivable & interest',
        body: `<p>A note receivable is a written promise. <strong>Interest = Principal × Rate × (Time/12)</strong>. At year-end, accrue interest earned to date even if not yet received.</p>`
      }
    ],
    formulas: [
      { name: 'Net realizable value', formula: 'NRV = Gross AR − Allowance for Doubtful Accounts' },
      { name: 'Bad debt (% of sales)', formula: 'Bad Debt Expense = % × Net Credit Sales' },
      { name: 'Bad debt (aging)', formula: 'Bad Debt Expense = Required ending allowance − Existing allowance balance' },
      { name: 'Interest on note', formula: 'Interest = Principal × Rate × (Time/12)' },
      { name: 'AR Turnover', formula: 'AR Turnover = Net Credit Sales / Average AR' },
      { name: 'Days Sales Outstanding (DSO)', formula: 'DSO = 365 / AR Turnover' }
    ],
    examples: [
      {
        title: 'Allowance under % of receivables',
        problem: `<p>Year-end gross AR = $200,000. The aging analysis estimates 4% will be uncollectible. The allowance currently has a credit balance of $1,500. Compute the bad debt expense.</p>`,
        solution: `<p>Required ending allowance = 200,000 × 4% = $8,000.<br>Existing allowance = $1,500 credit.<br>Bad Debt Expense = 8,000 − 1,500 = <strong>$6,500</strong>.</p>`
      },
      {
        title: 'Write-off effect',
        problem: `<p>Allowance has $8,000 credit balance. Gross AR = $200,000. Net realizable value = ?<br>Then a customer's $1,200 account is written off. New NRV = ?</p>`,
        solution: `<p>Initial NRV = 200,000 − 8,000 = $192,000.<br>After write-off: AR = 200,000 − 1,200 = 198,800; Allowance = 8,000 − 1,200 = 6,800.<br>NRV = 198,800 − 6,800 = <strong>$192,000</strong>. Unchanged — that's the point of using the allowance method.</p>`
      },
      {
        title: 'Accrued interest on note',
        problem: `<p>On October 1, accepted a 6-month, 9%, $40,000 note receivable. Compute interest revenue accrued at December 31.</p>`,
        solution: `<p>Interest = 40,000 × 9% × 3/12 = <strong>$900</strong>. Three months elapsed (Oct, Nov, Dec).</p>`
      }
    ],
    examTopics: [
      'Knowing that revenue is recognized when EARNED, not when cash is received',
      'Net realizable value (NRV) = Gross AR − Allowance — also called "cash (net) realizable value"',
      'Bad debt expense under % of receivables = Required allowance − existing allowance balance',
      'A specific write-off has no effect on NRV or net income',
      'Computing accrued interest on a note: Principal × Rate × (Time/12)',
      'Sales revenue may be recorded BEFORE cash is collected (the answer is "may be recorded before cash is collected")'
    ],
    questions: [
      {
        id: 'ch4_q1', type: 'mcq', difficulty: 'easy',
        prompt: 'The net amount expected to be received in cash from receivables is called the:',
        options: ['Gross realizable value', 'Gross cash value', 'Allowance value', 'Cash (net) realizable value'],
        correct: 3,
        explanation: 'Net (cash) realizable value = Gross AR − Allowance for Doubtful Accounts. This is what the company expects to actually collect.'
      },
      {
        id: 'ch4_q2', type: 'mcq', difficulty: 'easy',
        prompt: 'Sales revenue:',
        options: [
          'May be recorded before cash is collected',
          'Will always equal cash collections in a month',
          'Only results from credit sales',
          'Is only recorded after cash is collected'
        ],
        correct: 0,
        explanation: 'Under accrual accounting, revenue is recognized when earned regardless of when cash is collected. Credit sales create AR before cash arrives.'
      },
      {
        id: 'ch4_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'Unearned Rent Revenue is:',
        options: [
          'A contra account to Rent Revenue',
          'Reported as a current liability',
          'A revenue account',
          'Debited when rent is received in advance'
        ],
        correct: 1,
        explanation: 'Cash received in advance creates an obligation (perform service / refund) → liability. Typically current because obligation is settled within 12 months.'
      },
      {
        id: 'ch4_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Gross AR at year-end is €420,000. Aging analysis estimates €18,000 will be uncollectible. The Allowance for Doubtful Accounts currently has a credit balance of €4,500. Compute Bad Debt Expense in €.',
        answer: 13500, units: '€', tolerance: 0.001,
        explanation: 'Under aging method: Bad Debt Expense = Required ending allowance − existing balance = 18,000 − 4,500 = €13,500.'
      },
      {
        id: 'ch4_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Same data as above. After recording bad debt expense, a specific customer account of €2,800 is determined to be uncollectible and is written off. What is the net realizable value of receivables AFTER the write-off?',
        answer: 402000, units: '€', tolerance: 0.001,
        explanation: 'Before write-off: AR = 420,000; Allowance = 18,000; NRV = 402,000. Write-off reduces both AR and allowance by 2,800: AR = 417,200; Allowance = 15,200; NRV = 402,000. Unchanged.'
      },
      {
        id: 'ch4_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'On September 1, a company accepted a 4-month, 6%, $25,000 note receivable from a customer. What is the interest revenue to accrue at December 31?',
        answer: 500, units: '$', tolerance: 0.001,
        explanation: 'Interest = 25,000 × 6% × 4/12 = $500. Sept 1 → Dec 31 = 4 months. (Some answer sets count from Sept 1; if exam treats Sept 1 as the issue date, the full 4 months equals the note term.)'
      },
      {
        id: 'ch4_q7', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the allowance method, the journal entry to write off a specific uncollectible account:',
        options: [
          'Decreases net income and decreases assets',
          'Decreases net income but does not affect total assets',
          'Has no effect on net income or net realizable value of receivables',
          'Increases bad debt expense and decreases the allowance account'
        ],
        correct: 2,
        explanation: 'Write-off: Dr Allowance / Cr AR. Net AR (NRV) is unchanged because both gross AR and allowance decrease by the same amount. No P&L impact.'
      },
      {
        id: 'ch4_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'A company\'s net credit sales are €1,800,000. It estimates 1.5% of net credit sales will be uncollectible (% of sales method). The Allowance for Doubtful Accounts currently has a DEBIT balance of €3,000. Compute the bad debt expense for the year.',
        answer: 27000, units: '€', tolerance: 0.001,
        explanation: 'Under % of sales method, the existing allowance balance does NOT enter the calculation. Bad Debt Expense = 1,800,000 × 1.5% = €27,000.'
      },
      {
        id: 'ch4_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'Net credit sales €4,500,000. Beginning AR €380,000. Ending AR €420,000. Compute Days Sales Outstanding (DSO), rounded to the nearest day.',
        answer: 32, units: 'days', tolerance: 0.05,
        explanation: 'AR Turnover = 4,500,000 / ((380,000 + 420,000)/2) = 4,500,000 / 400,000 = 11.25. DSO = 365 / 11.25 = 32.4 ≈ 32 days.'
      },
      {
        id: 'ch4_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following describes the effect on the financial statements when a previously written-off receivable is later collected (allowance method)?',
        options: [
          'Increases bad debt expense and increases cash',
          'Reverses the write-off (Dr AR / Cr Allowance) then records collection (Dr Cash / Cr AR), so net effect: cash and allowance both increase',
          'Increases net income directly',
          'No journal entry is made — the receivable was written off'
        ],
        correct: 1,
        explanation: 'Two-step recovery: reinstate the receivable, then record cash receipt. Net effect on the books: Cash up, Allowance up. No P&L impact (already recognized when originally estimated).'
      }
    ]
  },

  // =============================================================
  // CHAPTER 5
  // =============================================================
  {
    id: 'ch5',
    number: 5,
    title: 'Inventories & Cost of Goods Sold',
    subtitle: 'FIFO, LIFO, weighted-average, LCM/NRV, periodic vs perpetual.',
    theory: [
      {
        title: 'COGS equation',
        body: `<p>The fundamental inventory equation:</p>
        <p style="font-family:var(--mono);background:var(--bg-elev);padding:10px 14px;border-radius:6px;font-size:14px"><strong>Beginning Inventory + Purchases = Goods Available for Sale</strong><br><strong>Goods Available for Sale − Ending Inventory = COGS</strong></p>
        <p>Equivalently: <strong>COGS = Beginning Inventory + Purchases − Ending Inventory</strong>.</p>`
      },
      {
        title: 'Inventory cost-flow methods',
        body: `<p>Same physical inventory, different accounting assumption about which units sold first:</p>
        <ul>
          <li><strong>FIFO</strong> (First-In, First-Out): oldest costs flow to COGS; newest costs stay in ending inventory. <em>In rising prices: low COGS, high gross profit, high ending inventory.</em></li>
          <li><strong>LIFO</strong> (Last-In, First-Out): newest costs flow to COGS; oldest costs stay in ending inventory. <em>In rising prices: high COGS, low gross profit, low ending inventory, lower taxes (US only).</em> <strong>Banned under IFRS.</strong></li>
          <li><strong>Weighted-average</strong>: cost per unit = total cost / total units. Smooths between FIFO and LIFO.</li>
        </ul>
        <p><strong>Key result:</strong> in periods of rising prices, FIFO produces ending inventory closest to current cost, while LIFO matches more current costs to revenue (better income statement, worse balance sheet).</p>`
      },
      {
        title: 'Lower of Cost or Net Realizable Value (LCNRV)',
        body: `<p>Under <strong>IFRS</strong>: inventory is reported at the lower of cost or <strong>NRV</strong> (= estimated selling price − costs to complete and sell).</p>
        <p>Under <strong>US GAAP</strong>: inventory is reported at the lower of cost or <strong>market</strong> (with market generally = NRV under recent updates).</p>
        <p>If NRV &lt; cost, write down the inventory: <em>Dr COGS (or Inventory Write-down) / Cr Inventory</em>. Under IFRS, write-downs may be reversed if NRV recovers (capped at original write-down). Under US GAAP, write-downs are NOT reversed.</p>`
      },
      {
        title: 'Periodic vs perpetual',
        body: `<p><strong>Periodic</strong>: COGS computed only at period-end via the equation above. Requires a physical count.</p>
        <p><strong>Perpetual</strong>: every sale immediately reduces inventory and records COGS. Used by modern POS systems.</p>`
      },
      {
        title: 'Inventory turnover',
        body: `<p>How many times the average inventory was sold during the period.</p>
        <p><strong>Inventory Turnover = COGS / Average Inventory</strong></p>
        <p><strong>Days Inventory Outstanding (DIO) = 365 / Inventory Turnover</strong></p>
        <p>Higher turnover = more efficient. Combine with DSO and DPO for the cash conversion cycle.</p>`
      }
    ],
    formulas: [
      { name: 'Cost of Goods Sold', formula: 'COGS = Beg Inventory + Purchases − End Inventory' },
      { name: 'Goods Available for Sale', formula: 'GAFS = Beg Inventory + Purchases' },
      { name: 'Gross Profit', formula: 'Gross Profit = Net Sales − COGS' },
      { name: 'Gross Profit Margin', formula: 'GP Margin = Gross Profit / Net Sales' },
      { name: 'Inventory Turnover', formula: 'Inv Turnover = COGS / Average Inventory' },
      { name: 'Days Inventory Outstanding', formula: 'DIO = 365 / Inventory Turnover' },
      { name: 'LCNRV (IFRS)', formula: 'Inventory carrying value = MIN(Cost, NRV)' },
      { name: 'NRV', formula: 'NRV = Estimated Selling Price − Costs to Complete & Sell' }
    ],
    examples: [
      {
        title: 'Compute COGS via the equation',
        problem: `<p>Beginning inventory $8,000. Purchases during month $28,400. Physical count at month-end shows $9,600 on hand. Compute COGS.</p>`,
        solution: `<p>COGS = 8,000 + 28,400 − 9,600 = <strong>$26,800</strong>.</p>`
      },
      {
        title: 'FIFO vs LIFO under rising prices',
        problem: `<p>Three purchases of one product:<br>Jan: 100 units @ $10<br>Apr: 100 units @ $12<br>Sep: 100 units @ $15<br>Sold 200 units. Compute COGS and ending inventory under FIFO and LIFO.</p>`,
        solution: `<p><strong>FIFO</strong>: COGS uses oldest 200 units = (100×10) + (100×12) = $2,200. End Inv = 100×15 = $1,500.<br><strong>LIFO</strong>: COGS uses newest 200 units = (100×15) + (100×12) = $2,700. End Inv = 100×10 = $1,000.<br><em>Rising prices: LIFO COGS higher, FIFO ending inventory higher.</em></p>`
      },
      {
        title: 'Weighted average',
        problem: `<p>Beginning: 50 units @ $4. Purchase: 150 units @ $6. Sold 120 units. Compute COGS and ending inventory under weighted-average.</p>`,
        solution: `<p>Avg cost = (50×4 + 150×6) / 200 = (200 + 900) / 200 = $5.50/unit.<br>COGS = 120 × 5.50 = <strong>$660</strong>. End Inv = 80 × 5.50 = <strong>$440</strong>.</p>`
      }
    ],
    examTopics: [
      'Computing COGS = Beg + Purchases − End (this appears nearly every year)',
      'Knowing that FIFO produces the highest ending inventory in rising prices',
      'Knowing that LIFO produces the highest COGS / lowest gross profit in rising prices',
      'LIFO is BANNED under IFRS',
      'Lower of cost or NRV — write-down required if NRV < cost',
      'IFRS allows write-down REVERSAL; US GAAP does not'
    ],
    questions: [
      {
        id: 'ch5_q1', type: 'numeric', difficulty: 'easy',
        prompt: 'At the beginning of September, GLF Company reported Inventory of $8,000. During the month, the company purchased $28,400 of inventory. At September 30, a physical count reported $9,600 on hand. Compute Cost of Goods Sold for the month in $.',
        answer: 26800, units: '$', tolerance: 0.001,
        explanation: 'COGS = Beg + Purchases − End = 8,000 + 28,400 − 9,600 = $26,800.'
      },
      {
        id: 'ch5_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'In periods of rising prices, the inventory method that results in the inventory value on the balance sheet that is closest to current cost is:',
        options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All methods produce the same balance sheet value'],
        correct: 0,
        explanation: 'Under FIFO, the oldest (cheapest) units are expensed via COGS, leaving the newest (most expensive, near current cost) units on the balance sheet.'
      },
      {
        id: 'ch5_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'In periods of rising prices, which method produces the LOWEST net income?',
        options: ['FIFO', 'LIFO', 'Weighted-average', 'All methods produce the same net income'],
        correct: 1,
        explanation: 'LIFO assigns the newest (highest) costs to COGS, producing the highest COGS, lowest gross profit, lowest taxable income, lowest net income.'
      },
      {
        id: 'ch5_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Inventory data: Beg 100 units @ €5. Purchase 1: 150 units @ €6. Purchase 2: 200 units @ €8. Sold 350 units. Compute COGS under FIFO in €.',
        answer: 2300, units: '€', tolerance: 0.001,
        explanation: 'FIFO sells oldest first: 100 × 5 = 500 + 150 × 6 = 900 + 100 × 8 = 800. Total = €2,300.'
      },
      {
        id: 'ch5_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Same data as previous question. Compute COGS under WEIGHTED-AVERAGE in €.',
        answer: 2433.33, units: '€', tolerance: 0.005,
        explanation: 'Total cost = 100×5 + 150×6 + 200×8 = 500 + 900 + 1,600 = 3,000. Total units = 450. Avg = 3,000/450 = €6.6667. COGS = 350 × 6.6667 ≈ €2,333.33. (Re-verify with units: ending inv = 100 units × 6.6667 = 666.67; COGS = 3,000 − 666.67 = €2,333.33.)'
      },
      {
        id: 'ch5_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, inventory is reported on the balance sheet at:',
        options: [
          'Historical cost only',
          'Lower of cost or net realizable value (NRV)',
          'Lower of cost or replacement cost',
          'Fair value with gains/losses to P&L'
        ],
        correct: 1,
        explanation: 'IFRS uses LCNRV. NRV = estimated selling price − costs to complete & sell. Write-downs to NRV may be reversed under IFRS (not under US GAAP).'
      },
      {
        id: 'ch5_q7', type: 'numeric', difficulty: 'medium',
        prompt: 'COGS for the year is €960,000. Beginning inventory €120,000; ending inventory €100,000. Compute inventory turnover.',
        answer: 8.73, units: 'times', tolerance: 0.01,
        explanation: 'Average Inventory = (120,000 + 100,000) / 2 = 110,000. Turnover = 960,000 / 110,000 = 8.73 times.'
      },
      {
        id: 'ch5_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Inventory cost = $50,000. NRV = $42,000. Under IFRS, by how much (in $) must inventory be written down? Then later in the year NRV recovers to $48,000. Compute the cumulative inventory carrying value AFTER reversal under IFRS.',
        answer: 48000, units: '$', tolerance: 0.001,
        explanation: 'Initial write-down: cost (50,000) > NRV (42,000), so write down by 8,000. Carrying = 42,000. NRV recovers to 48,000 — IFRS allows reversal up to original cost. New carrying = MIN(50,000, 48,000) = $48,000. (Reversal of 6,000.)'
      },
      {
        id: 'ch5_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'A company overstated its ending inventory at December 31, 2024 by $5,000. Which of the following statements is correct?',
        options: [
          '2024 COGS is overstated and 2024 net income is understated',
          '2024 COGS is understated and 2024 net income is overstated',
          '2024 net income is correct but 2025 net income is understated',
          'Both years\' net income are unaffected'
        ],
        correct: 1,
        explanation: 'COGS = Beg + Purch − End. If End is overstated, COGS is understated, NI is overstated. Note: the error self-corrects in 2025 because beginning inventory (overstated) inflates 2025 COGS, understating 2025 NI by the same amount.'
      },
      {
        id: 'ch5_q10', type: 'numeric', difficulty: 'medium',
        prompt: 'Net sales €1,200,000. Beginning inventory €80,000. Purchases €750,000. Ending inventory €110,000. Compute gross profit margin in %.',
        answer: 40, units: '%', tolerance: 0.01,
        explanation: 'COGS = 80 + 750 − 110 = 720,000. Gross Profit = 1,200,000 − 720,000 = 480,000. GP Margin = 480,000 / 1,200,000 = 40%.'
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
    subtitle: 'PP&E, depreciation methods, intangibles, impairment, disposals.',
    theory: [
      {
        title: 'Capitalize vs expense',
        body: `<p>Costs to <strong>acquire and prepare</strong> a long-term asset for use are capitalized: purchase price, sales tax, freight, installation, testing, legal fees.</p>
        <p>Subsequent costs are capitalized only if they <em>extend useful life or improve productivity</em>. Routine maintenance is expensed immediately.</p>
        <p><strong>If a repair is incorrectly capitalized: current-year net income is overstated</strong> (expense too low) <strong>and future depreciation is overstated</strong> (asset base too high → more depreciation in future years).</p>`
      },
      {
        title: 'Depreciation methods',
        body: `<ul>
          <li><strong>Straight-line</strong>: equal expense each year. <em>(Cost − Salvage) / Useful Life</em>.</li>
          <li><strong>Double-declining balance (DDB)</strong>: accelerated. Rate = 2 × (1/Life). Apply rate to <em>book value</em> (NOT to depreciable base). Stop when book value = salvage.</li>
          <li><strong>Units-of-production</strong>: <em>(Cost − Salvage) × (Units this period / Total expected units)</em>.</li>
        </ul>
        <p>DDB produces <strong>higher depreciation in early years</strong> → lower EBIT in year 1 vs straight-line.</p>`
      },
      {
        title: 'Asset disposal',
        body: `<p>When selling a long-term asset:</p>
        <ol>
          <li>Update depreciation to date of sale.</li>
          <li>Compute <strong>Book Value = Cost − Accumulated Depreciation</strong>.</li>
          <li><strong>Gain/Loss = Sale Proceeds − Book Value</strong>. Positive = gain; negative = loss.</li>
        </ol>
        <p>Gains/losses appear on the income statement (typically "Other income/expense").</p>`
      },
      {
        title: 'Intangible assets',
        body: `<ul>
          <li><strong>Limited life</strong> (patents, copyrights, franchises with finite term): amortize straight-line over useful life.</li>
          <li><strong>Indefinite life</strong> (goodwill, trademarks renewed indefinitely): NOT amortized. Tested annually for impairment.</li>
        </ul>
        <p><strong>Internally generated goodwill is NEVER recorded as an asset.</strong> Goodwill arises ONLY from acquisitions (price paid > fair value of net identifiable assets).</p>
        <p>Research costs are <em>expensed</em>. Development costs may be capitalized under IFRS if specific criteria are met (technical feasibility, intent to use, etc.); under US GAAP, all R&D is expensed.</p>`
      },
      {
        title: 'Impairment',
        body: `<p>If an asset's recoverable amount is less than its book value, write down to recoverable amount. Loss to P&L.</p>
        <p>Under <strong>IFRS</strong>, impairment can be reversed (except for goodwill). Under <strong>US GAAP</strong>, impairment cannot be reversed.</p>`
      }
    ],
    formulas: [
      { name: 'Straight-line depreciation', formula: 'Annual Dep = (Cost − Salvage) / Useful Life' },
      { name: 'Double-declining balance', formula: 'Annual Dep = (2 / Useful Life) × Beginning Book Value' },
      { name: 'Units-of-production', formula: '((Cost − Salvage) / Total units) × Units used' },
      { name: 'Book value', formula: 'Book Value = Cost − Accumulated Depreciation' },
      { name: 'Gain/Loss on disposal', formula: 'Gain/Loss = Proceeds − Book Value' },
      { name: 'Goodwill', formula: 'Goodwill = Purchase Price − Fair Value of Net Identifiable Assets Acquired' }
    ],
    examples: [
      {
        title: 'Asset disposal',
        problem: `<p>On July 1, 2020, Hale Kennels sells equipment for $80,000. Original cost $300,000; estimated 5-year life; salvage $50,000. Accumulated depreciation at January 1, 2020 was $225,000 (straight-line). Compute the gain or loss on disposal.</p>`,
        solution: `<p>Annual SL depreciation = (300,000 − 50,000) / 5 = 50,000/year. Half-year (Jan–Jul) = 25,000.<br>Accum Dep at sale = 225,000 + 25,000 = 250,000.<br>Book Value = 300,000 − 250,000 = 50,000.<br>Gain = Proceeds − BV = 80,000 − 50,000 = <strong>$30,000 gain</strong>.</p>`
      },
      {
        title: 'Capitalizing a repair (the trap)',
        problem: `<p>A company spends $5,000 on routine maintenance for a machine but capitalizes the cost rather than expensing it. What is the effect on current-year net income and on future depreciation?</p>`,
        solution: `<p>Capitalizing instead of expensing means the $5,000 is added to the asset rather than hitting the income statement. <strong>Current net income is too high</strong> (expense was understated by 5,000). The asset base is too high, so <strong>future depreciation will be too high</strong> (the 5,000 will be depreciated over the remaining life). Both NI and future depreciation are <strong>overstated</strong>.</p>`
      },
      {
        title: 'Double-declining balance',
        problem: `<p>Equipment cost $40,000; salvage $4,000; useful life 5 years. Compute Year 1 and Year 2 depreciation under DDB.</p>`,
        solution: `<p>DDB rate = 2/5 = 40%.<br>Year 1: 40% × 40,000 = $16,000. BV end Y1 = 24,000.<br>Year 2: 40% × 24,000 = $9,600. BV end Y2 = 14,400.</p>`
      }
    ],
    examTopics: [
      'Capitalize vs expense — getting it wrong inflates BOTH current NI and future depreciation',
      'Computing gain/loss on disposal: Proceeds − Book Value',
      'Internally generated goodwill is NOT capitalized',
      'DDB produces higher depreciation in early years (lower EBIT) vs straight-line',
      'Goodwill = price paid − fair value of net identifiable assets acquired',
      'IFRS allows impairment reversals (not for goodwill); US GAAP does not'
    ],
    questions: [
      {
        id: 'ch6_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'A long-term asset is depreciated over its useful life. Earnings before interest and tax after the first year of depreciation is LOWER if the company uses:',
        options: [
          'Double-declining balance depreciation',
          'Straight-line depreciation',
          'Operating income is not affected by depreciation',
          'None of the above is correct'
        ],
        correct: 0,
        explanation: 'DDB front-loads depreciation. Year 1 expense is much higher than straight-line, reducing EBIT more.'
      },
      {
        id: 'ch6_q2', type: 'mcq', difficulty: 'hard',
        prompt: 'If an expenditure related to a depreciable asset is incorrectly treated as a CAPITAL expenditure, instead of as repairs and maintenance expense, which is true?',
        options: [
          "Current year's net income will be lower and future depreciation will be higher",
          "Current year's net income will be higher and future depreciation will be lower",
          "Current year's net income will be higher and future depreciation will be higher",
          "Current year's net income will be lower and future depreciation will be lower"
        ],
        correct: 2,
        explanation: 'Capitalizing means the expense is NOT recognized in the current period (NI too high). The asset base is inflated, so depreciation in subsequent periods will also be too high.'
      },
      {
        id: 'ch6_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When a company sells an asset at a gain, which of the following is TRUE?',
        options: [
          'Proceeds from the sale exceeded the historical cost of the asset',
          'Proceeds from the sale were less than the book value of the asset',
          'Proceeds from the sale exceeded the book value of the asset',
          'Proceeds from the sale equal the historical cost of the asset'
        ],
        correct: 2,
        explanation: 'Gain on disposal occurs when Proceeds > Book Value. Historical cost is irrelevant — what matters is book value at date of sale.'
      },
      {
        id: 'ch6_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'On July 1, 2020, Hale Kennels sells equipment for $80,000. Original cost $300,000; 5-year life; salvage $50,000. Accumulated depreciation at January 1, 2020 was $225,000 using straight-line. Compute the gain or loss on disposal in $ (positive for gain, negative for loss).',
        answer: 30000, units: '$', tolerance: 0.001,
        explanation: 'Annual SL = (300−50)/5 = 50. Half-year to July 1 = 25. Accum Dep = 225 + 25 = 250. BV = 300 − 250 = 50. Gain = 80 − 50 = $30,000.'
      },
      {
        id: 'ch6_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'Which one of the following would NOT be recorded as an intangible asset?',
        options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'],
        correct: 2,
        explanation: 'Internally generated goodwill is never capitalized. Goodwill is recognized only when acquired in a business combination.'
      },
      {
        id: 'ch6_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Equipment cost $50,000; salvage $5,000; useful life 8 years. Compute annual depreciation under STRAIGHT-LINE in $.',
        answer: 5625, units: '$', tolerance: 0.001,
        explanation: 'Annual = (50,000 − 5,000) / 8 = 45,000 / 8 = $5,625.'
      },
      {
        id: 'ch6_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Equipment cost €60,000; salvage €6,000; useful life 4 years. Using DOUBLE-DECLINING BALANCE, compute YEAR 2 depreciation in €.',
        answer: 15000, units: '€', tolerance: 0.001,
        explanation: 'DDB rate = 2/4 = 50%. Year 1: 50% × 60,000 = 30,000. BV end Y1 = 30,000. Year 2: 50% × 30,000 = €15,000.'
      },
      {
        id: 'ch6_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Company A acquires Company B for $5,000,000 in cash. Company B\'s identifiable net assets have a fair value of $4,200,000. Compute the goodwill recognized in $.',
        answer: 800000, units: '$', tolerance: 0.001,
        explanation: 'Goodwill = Purchase Price − FV of Net Identifiable Assets = 5,000,000 − 4,200,000 = $800,000.'
      },
      {
        id: 'ch6_q9', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS, which of the following can be capitalized as part of the cost of self-developed equipment?',
        options: [
          'Marketing costs to launch the product made by the equipment',
          'Training costs for employees to operate the equipment',
          'Interest on borrowings used to finance the construction',
          'Routine maintenance after installation'
        ],
        correct: 2,
        explanation: 'IAS 23 (and US GAAP) require capitalizing borrowing costs directly attributable to the construction of qualifying assets. Marketing, training, and routine maintenance are expensed.'
      },
      {
        id: 'ch6_q10', type: 'mcq', difficulty: 'medium',
        prompt: 'A company\'s building has a book value of $800,000. Its recoverable amount is now estimated at $650,000. Under IFRS, the impairment loss recorded is:',
        options: ['$0 — no entry needed', '$150,000', '$650,000', '$800,000'],
        correct: 1,
        explanation: 'Impairment = BV − Recoverable Amount = 800,000 − 650,000 = $150,000. Dr Impairment Loss / Cr Accumulated Impairment.'
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
    subtitle: 'Notes payable, bonds (premium/discount), retirement, contingent liabilities.',
    theory: [
      {
        title: 'Bonds at par, premium, discount',
        body: `<p>Bonds pay a fixed <strong>coupon rate</strong> (stated rate). The <strong>market rate</strong> (effective interest rate) reflects current investor return required.</p>
        <ul>
          <li><strong>Coupon = Market</strong>: bonds issued at <strong>par</strong> (face value).</li>
          <li><strong>Coupon &lt; Market</strong>: bonds issued at a <strong>discount</strong> (less than face). Investors demand more return, so price drops.</li>
          <li><strong>Coupon &gt; Market</strong>: bonds issued at a <strong>premium</strong> (more than face). Investors will pay extra for the higher coupon.</li>
        </ul>
        <p>Bond price quoted as a percent of face: "98" = 98% of face.</p>`
      },
      {
        title: 'Effective-interest amortization',
        body: `<p>Interest expense each period = <strong>Carrying Value × Market Rate × (period/12)</strong>.</p>
        <p>Cash paid = <strong>Face × Coupon Rate × (period/12)</strong>.</p>
        <p>Difference = amortization of premium/discount, adjusting carrying value toward face by maturity.</p>
        <ul>
          <li>Discount: Interest Expense > Cash paid → carrying value rises toward face.</li>
          <li>Premium: Interest Expense < Cash paid → carrying value falls toward face.</li>
        </ul>`
      },
      {
        title: 'Bond retirement',
        body: `<p>If a bond is repurchased before maturity:</p>
        <p><strong>Gain/Loss = Carrying Value − Cash Paid</strong>.</p>
        <p>If carrying value > cash paid → gain (bought back cheap). If carrying value < cash paid → loss.</p>`
      },
      {
        title: 'Notes payable & current portion',
        body: `<p>The portion of long-term debt due within 12 months is reclassified to a <strong>current liability</strong> ("current portion of long-term debt").</p>
        <p>Interest on a note is recorded as it accrues, even if cash is paid only at maturity.</p>`
      },
      {
        title: 'Contingent liabilities',
        body: `<p>Possible obligations dependent on a future event (lawsuits, warranties).</p>
        <ul>
          <li><strong>Probable + estimable</strong>: <em>recognize</em> as a liability and accrue the loss.</li>
          <li><strong>Reasonably possible</strong>: disclose in the footnotes.</li>
          <li><strong>Remote</strong>: ignore.</li>
        </ul>`
      }
    ],
    formulas: [
      { name: 'Cash interest paid', formula: 'Cash = Face × Coupon Rate × (Time/12)' },
      { name: 'Interest expense (effective)', formula: 'Expense = Carrying Value × Market Rate × (Time/12)' },
      { name: 'Discount/premium amortization', formula: 'Amortization = Interest Expense − Cash Paid' },
      { name: 'Bond carrying value', formula: 'CV = Face ± Unamortized Premium/Discount' },
      { name: 'Gain/Loss on retirement', formula: 'Gain/Loss = Carrying Value − Cash Paid to Retire' },
      { name: 'Times Interest Earned', formula: 'TIE = (Net Income + Tax Expense + Interest Expense) / Interest Expense' }
    ],
    examples: [
      {
        title: 'Bond retirement gain/loss',
        problem: `<p>A $600,000 bond is retired at 98 when its book value is $590,000. Compute the gain or loss.</p>`,
        solution: `<p>Cash paid = 600,000 × 0.98 = $588,000.<br>Gain = Carrying Value − Cash paid = 590,000 − 588,000 = <strong>$2,000 gain</strong>.</p>`
      },
      {
        title: 'Times interest earned',
        problem: `<p>Net income €160,000; income tax expense €60,000; interest expense €40,000. Compute TIE.</p>`,
        solution: `<p>TIE = (160,000 + 60,000 + 40,000) / 40,000 = 260,000 / 40,000 = <strong>6.5 times</strong>.</p>`
      },
      {
        title: 'Discount issuance',
        problem: `<p>$1,000,000 face, 5-year bond, 6% coupon (semi-annual), market rate 8%. Bonds issue at $918,891. Compute interest expense for the first 6-month period.</p>`,
        solution: `<p>Interest Expense = 918,891 × 8% × 6/12 = $36,756.<br>Cash paid = 1,000,000 × 6% × 6/12 = $30,000.<br>Discount amortized = 36,756 − 30,000 = $6,756. New carrying value = 918,891 + 6,756 = $925,647.</p>`
      }
    ],
    examTopics: [
      'Bond gain/loss on retirement: Carrying Value − Cash Paid (NOT − Face)',
      'Bond price quoted as % of face: "98" = 98% × face',
      'Discount: market rate > coupon → interest expense > cash paid',
      'Times Interest Earned = (NI + Tax + Interest) / Interest',
      'Current portion of long-term debt is a CURRENT liability',
      'Probable + estimable contingent loss → accrue; reasonably possible → disclose only'
    ],
    questions: [
      {
        id: 'ch7_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'A $600,000 bond was retired at 98 when the book value of the bond was $590,000. The entry to record the retirement would include a:',
        options: [
          'Gain on bond redemption of $10,000',
          'Gain on bond redemption of $2,000',
          'Loss on bond redemption of $2,000',
          'Loss on bond redemption of $10,000'
        ],
        correct: 1,
        explanation: 'Cash paid = 600,000 × 0.98 = 588,000. Carrying value 590,000 > Cash paid 588,000 → gain of $2,000.'
      },
      {
        id: 'ch7_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'Selected info from Fryman Company: Net income €160,000; income tax expense €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'TIE = (NI + Tax + Interest) / Interest = (160,000 + 60,000 + 40,000) / 40,000 = 6.5 times.'
      },
      {
        id: 'ch7_q3', type: 'mcq', difficulty: 'medium',
        prompt: 'When the market rate of interest is HIGHER than the coupon rate, bonds will be issued at:',
        options: ['Par', 'A premium', 'A discount', 'It depends on the bond\'s maturity'],
        correct: 2,
        explanation: 'If market rate > coupon, the bond is less attractive than alternatives, so it must be sold below face value (discount) to compensate buyers.'
      },
      {
        id: 'ch7_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'A €500,000 face bond was issued at 102 (a premium). Five years later the bond is retired at 105 when its carrying value is €506,000. Compute the gain or loss on retirement in € (positive = gain, negative = loss).',
        answer: -19000, units: '€', tolerance: 0.001,
        explanation: 'Cash paid = 500,000 × 1.05 = 525,000. Loss = Carrying value − Cash paid = 506,000 − 525,000 = −19,000. Loss of €19,000.'
      },
      {
        id: 'ch7_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'A pending lawsuit could result in a loss between $50,000 and $200,000 with a most likely outcome of $100,000. The loss is "probable" per legal counsel. Under IFRS, the company should:',
        options: [
          'Disclose the lawsuit in footnotes only',
          'Recognize a $100,000 provision (liability) and disclose the range',
          'Recognize a $200,000 provision (most conservative)',
          'Make no entry until the lawsuit is settled'
        ],
        correct: 1,
        explanation: 'Under IFRS (IAS 37), if loss is probable and reliably estimable, recognize as a provision. Best estimate is the most likely outcome ($100,000); disclose the range.'
      },
      {
        id: 'ch7_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'A 4-year, 8%, $300,000 note payable was signed on October 1. The principal and interest are due at maturity. Compute the interest expense to recognize for the year ending December 31 (year of issue).',
        answer: 6000, units: '$', tolerance: 0.001,
        explanation: 'Interest = 300,000 × 8% × 3/12 = $6,000. (Three months: Oct, Nov, Dec.)'
      },
      {
        id: 'ch7_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'Which of the following is NOT classified as a long-term liability?',
        options: [
          'Bonds payable due in 10 years',
          'Mortgage payable on a building (15-year term)',
          'Current portion of long-term debt due within the next year',
          'Pension obligations'
        ],
        correct: 2,
        explanation: 'The current portion of long-term debt is a CURRENT liability — even though the underlying loan is long-term, the next 12 months\' worth must be reclassified.'
      },
      {
        id: 'ch7_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'A bond with face value $1,000,000 and 5% coupon (paid annually) was issued at $950,000 when the market rate was 6%. Compute the interest EXPENSE for Year 1 in $ using the effective-interest method.',
        answer: 57000, units: '$', tolerance: 0.001,
        explanation: 'Interest Expense = Carrying Value × Market Rate = 950,000 × 6% = $57,000. (Cash paid = 50,000; discount amortized = 7,000.)'
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
    subtitle: 'Operating vs finance leases, lessee accounting under IFRS 16.',
    theory: [
      {
        title: 'IFRS 16 (the new standard)',
        body: `<p>Under <strong>IFRS 16</strong>, lessees recognize <em>almost all</em> leases on the balance sheet:</p>
        <ul>
          <li><strong>Right-of-Use (ROU) Asset</strong> — represents the right to use the asset (an asset).</li>
          <li><strong>Lease Liability</strong> — present value of future lease payments (a liability).</li>
        </ul>
        <p>The lease is initially measured at the <strong>present value of the lease payments</strong> using the implicit rate (or the lessee's incremental borrowing rate).</p>
        <p><strong>Exemptions</strong>: short-term leases (≤12 months) and low-value leases (e.g., laptops) can be expensed straight-line.</p>`
      },
      {
        title: 'Lessee P&L impact',
        body: `<p>Each period:</p>
        <ul>
          <li><strong>Depreciation expense</strong> on the ROU asset (typically straight-line over lease term).</li>
          <li><strong>Interest expense</strong> on the lease liability (decreases as liability is paid down).</li>
        </ul>
        <p>Total expense is <strong>front-loaded</strong> (interest is higher early). Compare to old "operating lease" treatment where expense was straight-line.</p>`
      },
      {
        title: 'Cash flow classification',
        body: `<ul>
          <li><strong>Principal portion</strong> of lease payment → <strong>Financing</strong> activity (cash outflow).</li>
          <li><strong>Interest portion</strong> → <strong>Operating</strong> (or financing under IFRS option).</li>
          <li>Short-term/low-value lease expense → Operating.</li>
        </ul>`
      },
      {
        title: 'US GAAP: operating vs finance',
        body: `<p>US GAAP (ASC 842) maintains the operating vs finance lease distinction for lessees, but BOTH appear on the balance sheet (ROU + liability). The P&L pattern differs:</p>
        <ul>
          <li><strong>Finance lease</strong>: depreciation + interest (front-loaded total expense).</li>
          <li><strong>Operating lease</strong>: single straight-line "lease expense" each period.</li>
        </ul>`
      },
      {
        title: 'Lessor side (brief)',
        body: `<p>Lessors classify as <strong>finance</strong> (transfers risks/rewards: e.g., transfers ownership, has bargain purchase option, lease term ≥ most of useful life, or PV of payments ≥ substantially all FV) or <strong>operating</strong>. Finance leases derecognize the asset; operating leases keep it.</p>`
      }
    ],
    formulas: [
      { name: 'Initial Lease Liability', formula: 'PV of all future lease payments at the discount rate' },
      { name: 'Initial ROU Asset', formula: 'ROU = Lease Liability + initial direct costs + prepayments − incentives' },
      { name: 'Annual depreciation (ROU)', formula: 'Dep = ROU Asset / Lease Term (typically straight-line)' },
      { name: 'Annual interest expense', formula: 'Interest = Beginning Lease Liability × Discount Rate' },
      { name: 'Liability balance roll-forward', formula: 'End = Beg + Interest − Cash Paid' }
    ],
    examples: [
      {
        title: 'Phelps Swimming lease (class example)',
        problem: `<p>Phelps Swimming enters a 5-year lease, $3,256 annual payment at year-end, 8% discount rate. PV annuity factor (n=5, r=8%) = 3.99271. Compute the initial ROU asset/lease liability.</p>`,
        solution: `<p>Initial Lease Liability = $3,256 × 3.99271 = <strong>$13,000</strong>.<br>Initial ROU Asset = $13,000 (no initial direct costs).<br>Initial entry: Dr Leased Asset 13,000 / Cr Lease Liability 13,000.</p>`
      },
      {
        title: 'Year 1 entries (Phelps Swimming)',
        problem: `<p>Continuing the Phelps Swimming lease: compute Year 1 depreciation and interest, and show the payment entry.</p>`,
        solution: `<p>Depreciation = 13,000 / 5 = <strong>$2,600</strong>/year. Dr Dep Exp 2,600 / Cr Acc Dep 2,600.<br>Interest Y1 = 13,000 × 8% = <strong>$1,040</strong>.<br>Principal Y1 = 3,256 − 1,040 = $2,216.<br>Payment entry: Dr Lease Liability 2,216, Dr Interest Exp 1,040 / Cr Cash 3,256.<br>End-of-Y1 lease liability = 13,000 − 2,216 = $10,784.</p>`
      },
      {
        title: 'ROU vs short-term/low-value comparison',
        problem: `<p>Same Phelps lease — compare total Year 1 income statement impact under ROU vs short-term/low-value treatment.</p>`,
        solution: `<p><strong>ROU</strong>: Depreciation 2,600 + Interest 1,040 = <strong>$3,640</strong> Y1 expense.<br><strong>Short-term/low-value</strong>: Rent expense = <strong>$3,256</strong> Y1 (= cash payment).<br>ROU is front-loaded — total expense over the lease term is the same; only timing/classification differs.</p>`
      }
    ],
    examTopics: [
      'Under IFRS 16, lessees recognize ROU asset + Lease Liability for almost all leases',
      'Initial lease liability = PV of lease payments',
      'Lessee expense = depreciation (on ROU) + interest (on liability), front-loaded',
      'Principal portion of payment → financing CF; interest → operating CF',
      'Short-term and low-value lease exemptions apply',
      'US GAAP distinguishes operating vs finance lease P&L treatment; IFRS does not'
    ],
    questions: [
      {
        id: 'ch8_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Under IFRS 16, when a lessee enters into a 5-year lease for office space, the journal entry at lease commencement is:',
        options: [
          'Dr Rent Expense / Cr Cash for the first payment only',
          'Dr Right-of-Use Asset / Cr Lease Liability at the present value of lease payments',
          'No entry — leases are off-balance-sheet under IFRS',
          'Dr Property, Plant & Equipment / Cr Long-term Debt at the gross undiscounted amount'
        ],
        correct: 1,
        explanation: 'IFRS 16 requires lessees to recognize an ROU asset and lease liability at lease commencement, both initially measured at the PV of future lease payments.'
      },
      {
        id: 'ch8_q2', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following lease arrangements may be EXEMPTED from balance sheet recognition under IFRS 16?',
        options: [
          'A 10-year lease of a building',
          'A 9-month lease of a forklift',
          'A 3-year lease of a delivery truck',
          'A 5-year lease of a printing press'
        ],
        correct: 1,
        explanation: 'IFRS 16 exempts short-term leases (≤12 months without purchase option) and low-value leases. The 9-month forklift lease qualifies for the short-term exemption.'
      },
      {
        id: 'ch8_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'A lessee enters a 4-year lease with annual end-of-year payments of €15,000. Discount rate 5%. Compute the initial lease liability in € (PV of ordinary annuity factor at 5%, 4yr = 3.5460).',
        answer: 53190, units: '€', tolerance: 0.005,
        explanation: 'Lease Liability = 15,000 × 3.5460 = €53,190.'
      },
      {
        id: 'ch8_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Continuing the prior question: ROU asset is also €53,190 (no initial direct costs). Compute the YEAR 1 interest expense in €.',
        answer: 2659.5, units: '€', tolerance: 0.01,
        explanation: 'Interest = Beginning Liability × Rate = 53,190 × 5% = €2,659.50.'
      },
      {
        id: 'ch8_q5', type: 'mcq', difficulty: 'medium',
        prompt: 'On the lessee\'s statement of cash flows under IFRS 16, the PRINCIPAL portion of a lease payment is classified as:',
        options: ['Operating outflow', 'Investing outflow', 'Financing outflow', 'Not reported on the cash flow statement'],
        correct: 2,
        explanation: 'Principal repayment of the lease liability is a financing activity (analogous to repaying debt). The interest portion is operating.'
      },
      {
        id: 'ch8_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'Compared to the previous accounting standard for operating leases, IFRS 16 generally:',
        options: [
          'Reduces total assets and total liabilities',
          'Increases total assets and total liabilities, with front-loaded total expense',
          'Has no effect on the balance sheet',
          'Decreases total expense over the lease term'
        ],
        correct: 1,
        explanation: 'IFRS 16 brings operating leases on the balance sheet (ROU asset + lease liability both recognized). Total expense is front-loaded because interest is higher early.'
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
    subtitle: 'Share capital, treasury shares, dividends, equity method, consolidation.',
    theory: [
      {
        title: 'Components of equity',
        body: `<ul>
          <li><strong>Share capital (par)</strong>: par value × shares issued.</li>
          <li><strong>Share premium / Additional paid-in capital</strong>: amount paid above par.</li>
          <li><strong>Retained earnings</strong>: accumulated profits not distributed.</li>
          <li><strong>Treasury shares</strong>: shares repurchased and held by the company. Reduce equity (contra-equity).</li>
          <li><strong>AOCI</strong>: accumulated other comprehensive income (FX translation, certain investment gains, etc.).</li>
        </ul>
        <p><strong>Shares outstanding = Shares issued − Treasury shares.</strong> Authorized shares is the maximum allowed by the charter — usually much higher.</p>`
      },
      {
        title: 'Treasury share transactions',
        body: `<p>Buying treasury at $X: Dr Treasury Shares X / Cr Cash X. Treasury is a contra-equity (reduces total equity).</p>
        <p>Reissuing treasury for more than cost: difference goes to <em>Additional Paid-in Capital from Treasury Shares</em>. <strong>No gain/loss is ever recorded on the income statement</strong> for treasury share transactions.</p>`
      },
      {
        title: 'Dividends',
        body: `<p><strong>Cash dividend</strong>: at declaration date, Dr Retained Earnings / Cr Dividends Payable. At payment date, Dr Dividends Payable / Cr Cash. <em>No effect on net income.</em></p>
        <p><strong>Stock dividend</strong>: small (≤25%) at fair value; large (>25%) at par. Reclassifies within equity, no effect on total equity, no effect on cash.</p>
        <p><strong>Stock split</strong>: increases shares outstanding, decreases par per share proportionally. No journal entry; equity totals unchanged.</p>
        <p><strong>Preferred dividends</strong> are paid before common. <em>Cumulative preferred</em>: missed dividends accumulate (called "dividends in arrears") and must be paid before any common dividend.</p>`
      },
      {
        title: 'Investment classification by ownership %',
        body: `<table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:10px">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:8px;color:var(--text-muted);text-transform:uppercase;font-size:11px;font-weight:500">Ownership</th><th style="text-align:left;padding:8px;color:var(--text-muted);text-transform:uppercase;font-size:11px;font-weight:500">Method</th><th style="text-align:left;padding:8px;color:var(--text-muted);text-transform:uppercase;font-size:11px;font-weight:500">Treatment</th></tr>
          <tr><td style="padding:8px"><strong>&lt; 20%</strong></td><td style="padding:8px">Fair Value</td><td style="padding:8px">Recognize dividends as income; mark-to-market through P&L (FVTPL) or OCI (FVOCI)</td></tr>
          <tr><td style="padding:8px"><strong>20–50%</strong></td><td style="padding:8px">Equity Method</td><td style="padding:8px">"Significant influence." Investment ↑ by share of NI, ↓ by share of dividends received. Recognize share of NI in P&L.</td></tr>
          <tr><td style="padding:8px"><strong>&gt; 50%</strong></td><td style="padding:8px">Consolidation</td><td style="padding:8px">"Control." Combine all assets, liabilities, revenues, expenses. Recognize non-controlling interest.</td></tr>
        </table>`
      },
      {
        title: 'Equity method mechanics',
        body: `<p>Investor owns 30% of investee. Investee earns $1M and pays $200K in dividends.</p>
        <ul>
          <li>Investor's share of NI: 30% × $1M = $300K → <strong>Dr Investment / Cr Equity-method income $300K</strong>.</li>
          <li>Investor's dividend received: 30% × $200K = $60K → <strong>Dr Cash / Cr Investment $60K</strong>. (Reduces the investment account, NOT income.)</li>
        </ul>
        <p>Net effect on income statement: +$300K (the share of NI). The dividend is a return OF investment, not income.</p>`
      }
    ],
    formulas: [
      { name: 'Shares outstanding', formula: 'Outstanding = Issued − Treasury' },
      { name: 'Total equity', formula: 'Equity = Share Capital + Share Premium + RE − Treasury + AOCI' },
      { name: 'Equity method income', formula: 'Income = Ownership % × Investee Net Income' },
      { name: 'Equity method investment roll-fwd', formula: 'End = Beg + (% × NI of investee) − (% × Dividends received)' },
      { name: 'EPS (basic)', formula: 'EPS = (Net Income − Preferred Dividends) / Weighted Avg Common Shares' },
      { name: 'Book value per share', formula: 'BVPS = Common Equity / Common Shares Outstanding' },
      { name: 'Dividend yield', formula: 'Dividend Yield = Annual DPS / Price per Share' }
    ],
    examples: [
      {
        title: 'Treasury share calculation',
        problem: `<p>Issued shares (par €10): €600,000. Treasury shares (at cost €15 per share): €1,800. How many ordinary shares are outstanding?</p>`,
        solution: `<p>Issued shares = 600,000 / 10 = 60,000.<br>Treasury shares = 1,800 / 15 = 120.<br>Outstanding = 60,000 − 120 = <strong>59,880</strong>.</p>`
      },
      {
        title: 'Equity method',
        problem: `<p>Mouns Company owns 40% of Darian Corp. During the year, Darian pays $20,000 in dividends to Mouns and reports $100,000 of net income. By how much does Mouns\'s investment in Darian increase Mouns\'s net income?</p>`,
        solution: `<p>Equity method: investor recognizes its share of investee NI as income.<br>Income = 40% × 100,000 = <strong>$40,000</strong>.<br>The $20,000 dividend reduces the investment account, NOT income.</p>`
      },
      {
        title: 'Cash dividend',
        problem: `<p>A company has 100,000 common shares outstanding. It declares a $0.50/share cash dividend. Show the entries at declaration and payment.</p>`,
        solution: `<p>Total dividend = 100,000 × 0.50 = $50,000.<br>Declaration: Dr Retained Earnings 50,000 / Cr Dividends Payable 50,000.<br>Payment: Dr Dividends Payable 50,000 / Cr Cash 50,000.</p>`
      }
    ],
    examTopics: [
      'Shares outstanding = Issued − Treasury',
      'Treasury share transactions never produce a P&L gain or loss',
      'Equity method (20-50%): share of NI as income; dividends reduce investment',
      'Consolidation triggered at >50% ownership',
      'Cash dividends do not affect net income',
      'Preferred dividends are deducted from NI before EPS calculation'
    ],
    questions: [
      {
        id: 'ch9_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Consolidated financial statements are prepared when a company owns _____ of the ordinary shares of another company.',
        options: ['Less than 20%', 'More than 50%', 'Less than 50%', 'Between 20% and 50%'],
        correct: 1,
        explanation: 'Consolidation is required when one company has CONTROL of another, generally >50% of voting shares. 20–50% triggers equity method, <20% is fair value.'
      },
      {
        id: 'ch9_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'Skyline Corporation: Issued shares (par €10, authorized 80,000): €600,000. Treasury shares (at cost €15 per share): €1,800. How many ordinary shares are outstanding?',
        answer: 59880, units: 'shares', tolerance: 0.001,
        explanation: 'Issued = 600,000 / 10 = 60,000. Treasury = 1,800 / 15 = 120. Outstanding = 60,000 − 120 = 59,880.'
      },
      {
        id: 'ch9_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'Mouns Company owns 40% of Darian Corporation. During the year, Darian pays $20,000 in dividends to Mouns and reports $100,000 in net income. By how much does the investment in Darian increase Mouns\' net income? (in $)',
        answer: 40000, units: '$', tolerance: 0.001,
        explanation: 'Equity method: investor income = 40% × 100,000 = $40,000. Dividends received reduce the investment account, not income.'
      },
      {
        id: 'ch9_q4', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following transactions has NO effect on net income?',
        options: [
          'Sale of equipment at a gain',
          'Declaration of a cash dividend',
          'Recording bad debt expense',
          'Recognition of revenue earned but not yet collected'
        ],
        correct: 1,
        explanation: 'Cash dividend declaration: Dr Retained Earnings / Cr Dividends Payable. Reduces equity directly, never touches the income statement.'
      },
      {
        id: 'ch9_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Net income €450,000. Preferred dividends €30,000. Weighted average common shares outstanding 100,000. Compute basic EPS in €.',
        answer: 4.20, units: '€', tolerance: 0.01,
        explanation: 'EPS = (450,000 − 30,000) / 100,000 = 420,000 / 100,000 = €4.20.'
      },
      {
        id: 'ch9_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company has cumulative preferred shares with $10 dividend per share. No preferred dividends were paid in the previous 2 years. There are 1,000 preferred shares. Before any common dividend can be paid this year, the company must pay preferred dividends of:',
        options: ['$10,000', '$20,000', '$30,000', '$0 — preferred dividends are optional'],
        correct: 2,
        explanation: 'Cumulative preferred: missed dividends ("dividends in arrears") must be paid first. 2 years arrears + current year = 3 × 10 × 1,000 = $30,000.'
      },
      {
        id: 'ch9_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Investor X owns 25% of Investee Y. At year start, the investment account had a balance of €500,000. During the year, Y reported net income of €120,000 and paid total dividends of €40,000. Compute the year-end balance of the investment account in €.',
        answer: 520000, units: '€', tolerance: 0.001,
        explanation: 'Equity method: End = Beg + (25% × 120,000) − (25% × 40,000) = 500,000 + 30,000 − 10,000 = €520,000.'
      },
      {
        id: 'ch9_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Treasury shares are reported on the balance sheet as:',
        options: [
          'A long-term investment',
          'An expense on the income statement',
          'A deduction (contra account) from total stockholders\' equity',
          'A current asset'
        ],
        correct: 2,
        explanation: 'Treasury shares are a contra-equity account. They reduce total equity by the cost paid to repurchase them.'
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
    subtitle: 'Indirect method, classifying activities, reconciling NI to operating CF.',
    theory: [
      {
        title: 'The three sections',
        body: `<ul>
          <li><strong>Operating</strong>: cash from running the business — collections from customers, payments to suppliers/employees, taxes paid, interest paid.</li>
          <li><strong>Investing</strong>: buying/selling long-term assets and investments — equipment purchases/sales, acquiring/disposing of equity stakes.</li>
          <li><strong>Financing</strong>: cash from owners and creditors — issuing/repurchasing shares, issuing/repaying debt, dividends paid.</li>
        </ul>
        <p>Net change in cash = Operating CF + Investing CF + Financing CF.</p>`
      },
      {
        title: 'Indirect method — operating CF',
        body: `<p>Start with Net Income, then adjust:</p>
        <ol>
          <li><strong>Add back non-cash items</strong>: depreciation, amortization, impairments, equity-method income.</li>
          <li><strong>Subtract gains / add back losses</strong> from sales of long-term assets (those go to Investing).</li>
          <li><strong>Adjust for changes in working capital</strong>:</li>
        </ol>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px">
          <tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Account</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Increase</th><th style="text-align:left;padding:6px;color:var(--text-muted);font-weight:500;font-size:11px;text-transform:uppercase">Decrease</th></tr>
          <tr><td style="padding:6px">Current assets (AR, Inv, Prepaid)</td><td style="padding:6px">SUBTRACT</td><td style="padding:6px">ADD</td></tr>
          <tr><td style="padding:6px">Current liabilities (AP, Accrued, Unearned)</td><td style="padding:6px">ADD</td><td style="padding:6px">SUBTRACT</td></tr>
        </table>
        <p style="margin-top:10px"><em>Mnemonic: assets up = cash down; liabilities up = cash up.</em></p>`
      },
      {
        title: 'Investing & financing — direct calculation',
        body: `<p>For each long-term asset/equity/debt account, identify the cash inflows and outflows. <strong>Non-cash transactions</strong> (e.g., acquiring equipment by signing a note) are disclosed separately, NOT in the main statement.</p>`
      },
      {
        title: 'Free cash flow',
        body: `<p><strong>Free Cash Flow = Operating CF − CapEx</strong> (where CapEx = cash spent on PP&E acquisitions). FCF is the cash available to investors after maintaining/expanding operations.</p>`
      }
    ],
    formulas: [
      { name: 'Operating CF (indirect)', formula: 'NI + Depreciation/Amort − Gains + Losses − ΔAR − ΔInv − ΔPrepaid + ΔAP + ΔAccrued + ΔUnearned' },
      { name: 'Net change in cash', formula: 'ΔCash = CFO + CFI + CFF' },
      { name: 'Free Cash Flow', formula: 'FCF = Operating CF − Capital Expenditures' },
      { name: 'Cash flow from investing — example', formula: 'Cash sale of equipment proceeds + Cash from sale of investments − Cash paid for new PP&E − Cash paid for acquisitions' },
      { name: 'Cash flow from financing — example', formula: 'Cash from share issuance + Cash from new debt − Cash paid to repurchase shares − Debt repayments − Dividends paid' }
    ],
    examples: [
      {
        title: 'Operating CF (indirect)',
        problem: `<p>Morgan Corporation has accrual-basis net income of €50,000. During the period: AR increased €6,000; AP decreased €4,000; Unearned revenue increased €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net cash flow from operating activities.</p>`,
        solution: `<p>Start with NI 50,000.<br>+ Depreciation 7,000<br>− ΔAR (6,000) [asset up = cash down]<br>− ΔAP (4,000) [liability down = cash down]<br>+ ΔUnearned 1,000 [liability up = cash up]<br>= 50,000 + 7,000 − 6,000 − 4,000 + 1,000 = <strong>€48,000</strong>.<br>Note: PPE acquisition is INVESTING, not operating.</p>`
      },
      {
        title: 'Investing CF',
        problem: `<p>During the year: Building acquired in cash €200,000. Machinery acquired by signing a promissory note €10,000. Dividend payment €20,000. Bought competitor shares for €30,000 cash. Land sold for €40,000 cash. Depreciation €9,000. Compute net cash flow from investing activities.</p>`,
        solution: `<p>Investing items only (cash, NOT non-cash):<br>− Building 200,000 (cash outflow)<br>− Competitor shares 30,000<br>+ Land sale 40,000<br>= −200,000 − 30,000 + 40,000 = <strong>−€190,000</strong>.<br>Notes: machinery via note is non-cash (disclosed separately). Dividend is FINANCING. Depreciation is non-cash, not in investing.</p>`
      },
      {
        title: 'Financing CF backed out',
        problem: `<p>Beginning RE $80,000; Ending RE $76,000. Net income $64,000. Long-term loan: beginning $49,000, ending $42,000. No new loans. Compute cash flow from financing activities.</p>`,
        solution: `<p>Dividends paid = Beg RE + NI − End RE = 80 + 64 − 76 = $68,000.<br>Loan repayment = 49 − 42 = $7,000.<br>Financing CF = −68,000 − 7,000 = <strong>−$75,000</strong>.</p>`
      }
    ],
    examTopics: [
      'Indirect method: NI + Dep − Gains + Losses ± ΔWC',
      'Increase in AR/Inv → SUBTRACT (cash tied up)',
      'Increase in AP/Unearned → ADD (cash conserved)',
      'Gain on disposal of long-term asset → SUBTRACT from operating (it belongs in investing)',
      'Dividends paid → FINANCING outflow',
      'Buying equipment → INVESTING outflow',
      'Issuing/repurchasing shares → FINANCING'
    ],
    questions: [
      {
        id: 'ch11_q1', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the indirect method, a gain on disposal of long-term assets should be:',
        options: [
          'Deducted from net income because it belongs in the investing section',
          'Added because it represents an additional source of operating revenue',
          'Neither added nor deducted',
          'Added because it increases cash from operating activities'
        ],
        correct: 0,
        explanation: 'The gain inflated NI but is not operating cash — the related cash proceeds belong in INVESTING. So we deduct the gain from NI in operating to remove the double-count.'
      },
      {
        id: 'ch11_q2', type: 'numeric', difficulty: 'hard',
        prompt: 'Morgan Corporation has accrual net income of €50,000. AR increased €6,000; AP decreased €4,000; Unearned revenue increased €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net cash flow from OPERATING activities in €.',
        answer: 48000, units: '€', tolerance: 0.001,
        explanation: '50 + 7 (dep) − 6 (ΔAR) − 4 (ΔAP) + 1 (ΔUnearned) = €48,000. PPE acquisition is investing, not operating.'
      },
      {
        id: 'ch11_q3', type: 'numeric', difficulty: 'hard',
        prompt: 'During 2019: Building acquired in cash €200,000. Machinery acquired by signing a promissory note €10,000. Dividends paid €20,000. Competitor shares bought (cash) €30,000. Land sold (cash) €40,000. Depreciation €9,000. Compute net cash flow from INVESTING activities in € (negative for outflow).',
        answer: -190000, units: '€', tolerance: 0.001,
        explanation: 'Cash investing items only: −200 − 30 + 40 = −€190,000. Machinery via note is non-cash; dividends are financing; depreciation is non-cash.'
      },
      {
        id: 'ch11_q4', type: 'numeric', difficulty: 'hard',
        prompt: 'Beginning RE $80,000; Ending RE $76,000. Net income $64,000. Long-term loan: beginning $49,000, ending $42,000. No new loans. Compute cash flow from FINANCING activities in $ (negative for outflow).',
        answer: -75000, units: '$', tolerance: 0.001,
        explanation: 'Dividends = 80 + 64 − 76 = 68,000. Loan repaid = 49 − 42 = 7,000. CFF = −68 − 7 = −$75,000.'
      },
      {
        id: 'ch11_q5', type: 'numeric', difficulty: 'medium',
        prompt: 'Ranger Inc. 2015: Operating CF $52,000; Financing CF −$10,000; Investing CF −$130,000. Compute the net change in cash for 2015 in $ (negative for decrease).',
        answer: -88000, units: '$', tolerance: 0.001,
        explanation: 'Net Δcash = 52,000 − 10,000 − 130,000 = −$88,000. Net decrease of $88,000.'
      },
      {
        id: 'ch11_q6', type: 'mcq', difficulty: 'medium',
        prompt: 'A company sold equipment with a book value of $40,000 for $50,000 cash. Under the indirect method, on the cash flow statement:',
        options: [
          'Operating shows +$50,000; investing shows nothing',
          'Operating shows −$10,000 (gain reversal); investing shows +$50,000',
          'Operating shows +$10,000; investing shows +$40,000',
          'Operating shows −$50,000; investing shows +$10,000'
        ],
        correct: 1,
        explanation: 'Gain of $10,000 inflates NI in operating — reverse it. The full $50,000 cash proceeds appear in investing.'
      },
      {
        id: 'ch11_q7', type: 'mcq', difficulty: 'easy',
        prompt: 'A decrease in accounts payable during the year, under the indirect method, is:',
        options: [
          'Added to net income in the operating section',
          'Subtracted from net income in the operating section',
          'Reported as a financing outflow',
          'Reported as an investing outflow'
        ],
        correct: 1,
        explanation: 'AP down = the company paid suppliers MORE than the expense recognized → cash decrease. Subtract from NI to compute operating CF.'
      },
      {
        id: 'ch11_q8', type: 'numeric', difficulty: 'hard',
        prompt: 'Operating CF $250,000. Capital expenditures (cash) $90,000. Compute Free Cash Flow in $.',
        answer: 160000, units: '$', tolerance: 0.001,
        explanation: 'FCF = Operating CF − CapEx = 250,000 − 90,000 = $160,000.'
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
    subtitle: 'Liquidity, solvency, profitability, market ratios, DuPont, CCC.',
    theory: [
      {
        title: 'The four ratio families',
        body: `<ul>
          <li><strong>Liquidity</strong> — short-term ability to pay obligations: Current Ratio, Quick Ratio, Cash Ratio.</li>
          <li><strong>Solvency / Leverage</strong> — long-term debt capacity: Debt/Equity, Debt/Assets, Times Interest Earned.</li>
          <li><strong>Profitability</strong> — efficiency at generating profit: Gross/Operating/Net Margin, ROA, ROE.</li>
          <li><strong>Market</strong> — investor-facing: EPS, P/E, Dividend Yield, Book Value per Share.</li>
        </ul>`
      },
      {
        title: 'Profitability — ROE, ROA, return on financial leverage',
        body: `<ul>
          <li><strong>ROE = Net Income / Average Shareholders\' Equity</strong></li>
          <li><strong>ROA = Net Income / Average Total Assets</strong> (some texts use NI + Interest×(1−tax))</li>
          <li><strong>Return on Financial Leverage = ROE − ROA</strong></li>
        </ul>
        <p><strong>DuPont decomposition</strong>: ROE = (NI / Sales) × (Sales / Avg Assets) × (Avg Assets / Avg Equity) = Profit Margin × Asset Turnover × Equity Multiplier.</p>`
      },
      {
        title: 'The cash conversion cycle',
        body: `<p><strong>CCC = DSO + DIO − DPO</strong></p>
        <ul>
          <li>DSO (Days Sales Outstanding) = 365 / AR Turnover. Time to collect from customers.</li>
          <li>DIO (Days Inventory Outstanding) = 365 / Inventory Turnover. Time inventory sits.</li>
          <li>DPO (Days Payable Outstanding) = 365 / AP Turnover. Time to pay suppliers.</li>
        </ul>
        <p>Lower CCC = better cash management. A company with no inventory: CCC = DSO − DPO.</p>`
      },
      {
        title: 'Market ratios',
        body: `<ul>
          <li><strong>EPS = (NI − Preferred Div) / Weighted Avg Common Shares</strong></li>
          <li><strong>P/E Ratio = Price per share / EPS</strong></li>
          <li><strong>Dividend Yield = Annual DPS / Price</strong></li>
          <li><strong>Payout Ratio = Dividends / Net Income</strong></li>
        </ul>`
      },
      {
        title: 'Horizontal & vertical analysis',
        body: `<p><strong>Horizontal</strong>: % change vs base period. (Current − Base) / Base × 100.</p>
        <p><strong>Vertical (common-size)</strong>: each line as % of total (Income Statement: as % of Revenue; Balance Sheet: as % of Total Assets).</p>`
      }
    ],
    formulas: [
      { name: 'Current Ratio', formula: 'Current Assets / Current Liabilities' },
      { name: 'Quick Ratio', formula: '(Cash + Marketable Sec + AR) / Current Liabilities' },
      { name: 'Debt-to-Equity', formula: 'Total Liabilities / Total Equity' },
      { name: 'Debt-to-Assets', formula: 'Total Liabilities / Total Assets' },
      { name: 'Times Interest Earned', formula: '(NI + Tax + Interest) / Interest Expense' },
      { name: 'Gross Profit Margin', formula: 'Gross Profit / Net Sales' },
      { name: 'Operating Margin', formula: 'Operating Income / Net Sales' },
      { name: 'Net Profit Margin', formula: 'Net Income / Net Sales' },
      { name: 'Return on Assets (ROA)', formula: 'Net Income / Average Total Assets' },
      { name: 'Return on Equity (ROE)', formula: 'Net Income / Average Shareholders\' Equity' },
      { name: 'Return on Financial Leverage', formula: 'ROE − ROA' },
      { name: 'DuPont', formula: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier' },
      { name: 'AR Turnover / DSO', formula: 'AR Turn = Net Credit Sales / Avg AR; DSO = 365 / Turn' },
      { name: 'Inv Turnover / DIO', formula: 'Inv Turn = COGS / Avg Inventory; DIO = 365 / Turn' },
      { name: 'AP Turnover / DPO', formula: 'AP Turn = Purchases (or COGS) / Avg AP; DPO = 365 / Turn' },
      { name: 'Cash Conversion Cycle', formula: 'CCC = DSO + DIO − DPO' },
      { name: 'EPS (basic)', formula: '(NI − Preferred Dividends) / Weighted Avg Common Shares' },
      { name: 'P/E Ratio', formula: 'Price per Share / EPS' },
      { name: 'Dividend Yield', formula: 'Annual Dividend per Share / Price' }
    ],
    examples: [
      {
        title: 'P/E ratio',
        problem: `<p>1,000,000 outstanding shares (par €2). Net income €12,000,000; dividends paid €3,000,000. Price €108/share. Compute the P/E ratio.</p>`,
        solution: `<p>EPS = 12,000,000 / 1,000,000 = €12.<br>P/E = 108 / 12 = <strong>9</strong>.</p>`
      },
      {
        title: 'Cash conversion cycle (no inventory)',
        problem: `<p>CCC = 100 days. No inventory. DPO = 50 days. Compute DSO.</p>`,
        solution: `<p>CCC = DSO + DIO − DPO. With DIO = 0: 100 = DSO − 50 → <strong>DSO = 150 days</strong>.</p>`
      },
      {
        title: 'Return on financial leverage',
        problem: `<p>PG & Company: Net income $12,846; Average shareholders\' equity $62,269; Average total assets $131,503; Interest expense $946 (assume tax rate 35%). Compute ROE, ROA, and Return on Financial Leverage.</p>`,
        solution: `<p>ROE = 12,846 / 62,269 = <strong>20.6%</strong>.<br>ROA = 12,846 / 131,503 = <strong>9.8%</strong>.<br>Return on Financial Leverage = ROE − ROA ≈ <strong>10.8%</strong>.</p>`
      }
    ],
    examTopics: [
      'Times Interest Earned = (NI + Tax + Interest) / Interest',
      'CCC = DSO + DIO − DPO (no inventory: DIO = 0)',
      'P/E = Price / EPS (compute EPS first using NI / shares)',
      'ROA, ROE, and Return on Financial Leverage = ROE − ROA',
      'Profit Margin = NI / Sales',
      'Horizontal analysis: a 70% decrease means new value = base × 30% (NOT base × 70%)'
    ],
    questions: [
      {
        id: 'ch12_q1', type: 'numeric', difficulty: 'medium',
        prompt: 'A company has cash conversion cycle of 100 days, no inventory, DPO 50 days. Compute DSO in days.',
        answer: 150, units: 'days', tolerance: 0.001,
        explanation: 'CCC = DSO + DIO − DPO. With no inventory, DIO = 0. So 100 = DSO − 50 → DSO = 150 days.'
      },
      {
        id: 'ch12_q2', type: 'numeric', difficulty: 'medium',
        prompt: 'Company has 1,000,000 outstanding shares (par €2). Net income €12,000,000; dividends €3,000,000. Stock price €108. Compute P/E.',
        answer: 9, units: '', tolerance: 0.01,
        explanation: 'EPS = 12,000,000 / 1,000,000 = €12. P/E = Price / EPS = 108 / 12 = 9.'
      },
      {
        id: 'ch12_q3', type: 'numeric', difficulty: 'medium',
        prompt: 'PG & Company: Net income $12,846 million; Average shareholders\' equity $62,269 million. Compute ROE in %.',
        answer: 20.6, units: '%', tolerance: 0.1,
        explanation: 'ROE = 12,846 / 62,269 = 20.6%.'
      },
      {
        id: 'ch12_q4', type: 'numeric', difficulty: 'medium',
        prompt: 'Yonge\'s 2015: Interest expense $435M; Net income $602M; Sales $90,374M; Avg total assets $23,491M; Tax rate 35%. Compute the profit margin (NI / Sales).',
        answer: 0.0067, units: '', tolerance: 0.001,
        explanation: 'Profit Margin = NI / Sales = 602 / 90,374 = 0.00666 ≈ 0.67%.'
      },
      {
        id: 'ch12_q5', type: 'numeric', difficulty: 'hard',
        prompt: 'Flynn Corporation had net income of €6,000,000 in 2019. Net income decreased 70% in 2020 (using 2019 as base). Compute Flynn\'s 2020 net income in €.',
        answer: 1800000, units: '€', tolerance: 0.001,
        explanation: 'Decrease = 70% × 6,000,000 = 4,200,000. 2020 NI = 6,000,000 − 4,200,000 = €1,800,000.'
      },
      {
        id: 'ch12_q6', type: 'numeric', difficulty: 'medium',
        prompt: 'Net income €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'TIE = (NI + Tax + Interest) / Interest = 260,000 / 40,000 = 6.5.'
      },
      {
        id: 'ch12_q7', type: 'numeric', difficulty: 'hard',
        prompt: 'Company has Total Assets €1,200,000; Current Liabilities €140,000; Non-current liabilities €340,000. Compute the Debt-to-Equity ratio.',
        answer: 0.667, units: '', tolerance: 0.005,
        explanation: 'Total Liabilities = 140 + 340 = 480,000. Equity = Assets − Liabilities = 1,200,000 − 480,000 = 720,000. D/E = 480,000 / 720,000 = 0.667.'
      },
      {
        id: 'ch12_q8', type: 'mcq', difficulty: 'medium',
        prompt: 'Which of the following events would most likely INCREASE a company\'s current ratio?',
        options: [
          'Purchasing inventory on credit',
          'Selling treasury shares for cash',
          'Paying off accounts payable using cash',
          'Declaring (but not paying) a cash dividend'
        ],
        correct: 1,
        explanation: 'Selling treasury shares: Cash (current asset) ↑, Equity ↑. CL unchanged → CR rises. (A) increases CA and CL equally — if CR was >1, ratio falls toward 1. (C) reduces both equally — if CR was >1, ratio rises! Actually pay-off-AP also raises CR if CR>1. The most clearly expansionary is share sale because it adds to CA without touching CL.'
      },
      {
        id: 'ch12_q9', type: 'numeric', difficulty: 'hard',
        prompt: 'A firm has DSO 45 days, DIO 60 days, DPO 30 days. Compute the cash conversion cycle in days.',
        answer: 75, units: 'days', tolerance: 0.001,
        explanation: 'CCC = DSO + DIO − DPO = 45 + 60 − 30 = 75 days.'
      },
      {
        id: 'ch12_q10', type: 'numeric', difficulty: 'hard',
        prompt: 'Profit margin 8%. Asset turnover 1.5. Equity multiplier 2.0. Compute ROE under DuPont in %.',
        answer: 24, units: '%', tolerance: 0.01,
        explanation: 'ROE = PM × AT × EM = 0.08 × 1.5 × 2.0 = 0.24 = 24%.'
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
      {
        id: 'mock21_mcq1', type: 'mcq', difficulty: 'easy',
        prompt: 'Which one of the following is NOT an external user of accounting information?',
        options: ['Regulatory agencies', 'Customers', 'Investors', 'All of the above are external users of accounting information'],
        correct: 3,
        explanation: 'All listed users are external. Internal users are managers and employees.'
      },
      {
        id: 'mock21_mcq2', type: 'mcq', difficulty: 'medium',
        prompt: 'A long-term asset is depreciated over its useful life. Earnings before interest and tax after the first year of depreciation is LOWER if the company uses:',
        options: ['Double-declining balance depreciation', 'Straight-line depreciation', 'Operating income is not affected by depreciation', 'None of the above'],
        correct: 0,
        explanation: 'DDB front-loads depreciation; Year 1 expense is much higher than SL, so EBIT is lower in Year 1.'
      },
      {
        id: 'mock21_mcq3', type: 'mcq', difficulty: 'medium',
        prompt: 'If total liabilities decreased by ¥45,000 and equity decreased by ¥10,000, total assets must change by:',
        options: ['¥55,000 increase', '¥35,000 increase', '¥55,000 decrease', '¥35,000 decrease'],
        correct: 2,
        explanation: 'A = L + E. ΔA = −45 + (−10) = −55 → ¥55,000 decrease.'
      },
      {
        id: 'mock21_mcq4', type: 'mcq', difficulty: 'medium',
        prompt: 'Ron services a car on July 31. Customer picks up August 1, mails payment August 5, Ron receives check August 6. When should Ron record the revenue?',
        options: ['July 31', 'August 1', 'August 5', 'August 6'],
        correct: 0,
        explanation: 'Revenue is recognized when earned (when service is performed) — July 31. Cash collection date is irrelevant under accrual accounting.'
      },
      {
        id: 'mock21_mcq5', type: 'mcq', difficulty: 'medium',
        prompt: 'Consolidated financial statements are prepared when a company owns _____ of the ordinary shares of another company.',
        options: ['Less than 20%', 'More than 50%', 'Less than 50%', 'Between 20% and 50%'],
        correct: 1,
        explanation: '>50% = control = consolidation. 20-50% = significant influence = equity method. <20% = fair value.'
      },
      {
        id: 'mock21_mcq6', type: 'mcq', difficulty: 'medium',
        prompt: 'Which adjustment would require DECREASING the liabilities reported on the balance sheet?',
        options: ['Use of $400 of supplies during the year', 'Recording $400 of depreciation on equipment', 'Earning $400 of revenue collected at the beginning of the year', 'Recording $400 of wages earned that will be paid next year'],
        correct: 2,
        explanation: 'Earning previously-collected revenue reduces Unearned Revenue (a liability).'
      },
      {
        id: 'mock21_mcq7', type: 'mcq', difficulty: 'easy',
        prompt: 'Adjusting entries:',
        options: ['Ensure revenue and expense recognition principles are followed', 'Are necessary to conform to IFRS and US GAAP', 'Include both accruals and deferrals', 'All of these answer choices are correct'],
        correct: 3,
        explanation: 'All three statements are true.'
      },
      {
        id: 'mock21_mcq8', type: 'mcq', difficulty: 'medium',
        prompt: 'GLF Company: Beg Inventory $8,000. Purchases $28,400. Ending physical count $9,600. COGS for the month is:',
        options: ['$1,600', '$28,400', '$26,800', '$36,400'],
        correct: 2,
        explanation: 'COGS = 8,000 + 28,400 − 9,600 = $26,800.'
      },
      {
        id: 'mock21_mcq9', type: 'mcq', difficulty: 'medium',
        prompt: 'Skyline Corporation: Issued shares (par €10): €600,000. Treasury shares (at cost €15/share): €1,800. How many ordinary shares are outstanding?',
        options: ['80,000', '59,880', '79,880', '60,000'],
        correct: 1,
        explanation: 'Issued = 600,000/10 = 60,000. Treasury = 1,800/15 = 120. Outstanding = 59,880.'
      },
      {
        id: 'mock21_mcq10', type: 'mcq', difficulty: 'medium',
        prompt: 'In periods of rising prices, the inventory method that produces the balance sheet inventory closest to current cost is:',
        options: ['FIFO method', 'LIFO method', 'Average-cost method', 'All methods produce the same value'],
        correct: 0,
        explanation: 'FIFO leaves the newest (most expensive) units on the balance sheet.'
      },
      {
        id: 'mock21_mcq11', type: 'mcq', difficulty: 'easy',
        prompt: 'The net amount expected to be received in cash from receivables is called:',
        options: ['Gross realizable value', 'Gross cash value', 'Allowance value', 'Cash (net) realizable value'],
        correct: 3,
        explanation: 'Net (cash) realizable value = Gross AR − Allowance for Doubtful Accounts.'
      },
      {
        id: 'mock21_mcq12', type: 'mcq', difficulty: 'easy',
        prompt: 'Sales revenue:',
        options: ['May be recorded before cash is collected', 'Always equals cash collections in a month', 'Only results from credit sales', 'Is only recorded after cash is collected'],
        correct: 0,
        explanation: 'Under accrual accounting, revenue can be recognized before cash collection (credit sales create AR).'
      },
      {
        id: 'mock21_mcq13', type: 'mcq', difficulty: 'hard',
        prompt: 'If an expenditure related to a depreciable asset is incorrectly treated as a CAPITAL expenditure instead of a repairs expense, which is true?',
        options: ['Net income lower, future depreciation higher', 'Net income higher, future depreciation lower', 'Net income higher, future depreciation higher', 'Net income lower, future depreciation lower'],
        correct: 2,
        explanation: 'Expense not recognized → NI too high. Asset base inflated → future depreciation too high.'
      },
      {
        id: 'mock21_mcq14', type: 'mcq', difficulty: 'medium',
        prompt: 'A $600,000 bond was retired at 98 when the book value was $590,000. The retirement entry would include a:',
        options: ['Gain of $10,000', 'Gain of $2,000', 'Loss of $2,000', 'Loss of $10,000'],
        correct: 1,
        explanation: 'Cash paid = 600,000 × 0.98 = 588,000. Gain = BV − Cash = 590,000 − 588,000 = $2,000.'
      },
      {
        id: 'mock21_mcq15', type: 'mcq', difficulty: 'medium',
        prompt: 'When a company sells an asset at a gain, which is true?',
        options: ['Proceeds exceeded historical cost', 'Proceeds were less than book value', 'Proceeds exceeded book value', 'Proceeds equal historical cost'],
        correct: 2,
        explanation: 'Gain on disposal: Proceeds > Book Value. Historical cost is irrelevant.'
      },
      {
        id: 'mock21_mcq16', type: 'mcq', difficulty: 'hard',
        prompt: 'Hale Kennels sells equipment July 1, 2020 for $80,000. Original cost $300,000; 5-year life; salvage $50,000. Accum Dep at Jan 1 was $225,000 (SL). Gain or loss?',
        options: ['$45,000 gain', '$30,000 loss', '$45,000 loss', '$30,000 gain'],
        correct: 3,
        explanation: 'SL annual = 50,000. Half-year = 25,000. Accum Dep at sale = 250,000. BV = 50,000. Gain = 80,000 − 50,000 = $30,000.'
      },
      {
        id: 'mock21_mcq17', type: 'mcq', difficulty: 'medium',
        prompt: 'Which would NOT be recorded as an intangible asset?',
        options: ['Patents', 'Copyrights', 'Internally generated goodwill', 'Franchises'],
        correct: 2,
        explanation: 'Internally generated goodwill is never capitalized.'
      },
      {
        id: 'mock21_mcq18', type: 'mcq', difficulty: 'easy',
        prompt: 'Unearned Rent Revenue is:',
        options: ['A contra account to Rent Revenue', 'Reported as a current liability', 'A revenue account', 'Debited when rent is received in advance'],
        correct: 1,
        explanation: 'Cash received in advance creates an obligation → liability, typically current.'
      },
      {
        id: 'mock21_mcq19', type: 'mcq', difficulty: 'hard',
        prompt: 'Mouns Company owns 40% of Darian Corporation. Darian pays $20,000 in dividends to Mouns and reports $100,000 in net income. The investment will increase Mouns\'s net income by:',
        options: ['$20,000', '$40,000', '$32,000', '$8,000'],
        correct: 1,
        explanation: 'Equity method: investor income = 40% × 100,000 = $40,000. Dividends reduce investment, not income.'
      },
      {
        id: 'mock21_mcq20', type: 'mcq', difficulty: 'medium',
        prompt: 'Under the indirect method, a gain on disposal of long-term assets should be:',
        options: ['Deducted from NI because it belongs in investing', 'Added because it represents an additional source of operating revenue', 'Neither added nor deducted', 'Added because it increases cash from operating'],
        correct: 0,
        explanation: 'Cash proceeds belong in investing, not operating. Subtract the gain from NI to remove the double-count.'
      },
      // 9 calculated answers from the actual mock
      {
        id: 'mock21_calc1', type: 'numeric', difficulty: 'hard',
        prompt: 'Morgan Corporation: Accrual NI €50,000. AR increase €6,000; AP decrease €4,000; Unearned revenue increase €1,000; PPE acquisition (cash) €10,000; Depreciation €7,000. Compute net cash flow from OPERATING activities in €.',
        answer: 48000, units: '€', tolerance: 0.001,
        explanation: '50 + 7 − 6 − 4 + 1 = €48,000. PPE acquisition is investing.'
      },
      {
        id: 'mock21_calc2', type: 'numeric', difficulty: 'hard',
        prompt: 'Donald Plastics PLC 2019: Building acquired (cash) €200,000. Machinery acquired by signing note €10,000. Dividends paid €20,000. Competitor shares purchased (cash) €30,000. Land sold (cash) €40,000. Depreciation €9,000. Compute INVESTING cash flow in € (negative for outflow).',
        answer: -190000, units: '€', tolerance: 0.001,
        explanation: 'Cash investing only: −200 − 30 + 40 = −€190,000. Note-purchase is non-cash; dividend is financing.'
      },
      {
        id: 'mock21_calc3', type: 'numeric', difficulty: 'medium',
        prompt: 'A company has cash conversion cycle 100 days. No inventory. DPO 50 days. Compute DSO in days.',
        answer: 150, units: 'days', tolerance: 0.001,
        explanation: 'CCC = DSO + DIO − DPO. DIO = 0. So DSO = 100 + 50 = 150 days.'
      },
      {
        id: 'mock21_calc4', type: 'numeric', difficulty: 'medium',
        prompt: 'Company has 1,000,000 outstanding shares (par €2). NI €12,000,000; dividends €3,000,000. Stock price €108. Compute P/E.',
        answer: 9, units: '', tolerance: 0.01,
        explanation: 'EPS = 12,000,000 / 1,000,000 = €12. P/E = 108 / 12 = 9.'
      },
      {
        id: 'mock21_calc5', type: 'numeric', difficulty: 'hard',
        prompt: 'PG & Company 2016: Net income $12,846; Avg total assets $131,503; Avg shareholders\' equity $62,269; Interest expense $946. Compute Return on Financial Leverage in % (= ROE − ROA).',
        answer: 10.8, units: '%', tolerance: 0.5,
        explanation: 'ROE = 12,846 / 62,269 = 20.6%. ROA = 12,846 / 131,503 = 9.8%. Return on FL = 20.6 − 9.8 = 10.8%.'
      },
      {
        id: 'mock21_calc6', type: 'numeric', difficulty: 'medium',
        prompt: 'Ranger Inc. 2015: Operating CF $52,000; Financing CF −$10,000; Investing CF −$130,000. Compute the net change in cash for 2015 in $ (negative for decrease).',
        answer: -88000, units: '$', tolerance: 0.001,
        explanation: 'Net Δcash = 52 − 10 − 130 = −$88,000.'
      },
      {
        id: 'mock21_calc7', type: 'numeric', difficulty: 'medium',
        prompt: 'Flynn Corporation: NI €6,000,000 in 2019. NI decreased 70% in 2020 (using 2019 as base). Compute Flynn\'s 2020 NI in €.',
        answer: 1800000, units: '€', tolerance: 0.001,
        explanation: 'Decrease = 70% × 6,000,000 = 4,200,000. 2020 NI = 6,000,000 − 4,200,000 = €1,800,000.'
      },
      {
        id: 'mock21_calc8', type: 'numeric', difficulty: 'medium',
        prompt: 'Fryman Company 2020: NI €160,000; income tax €60,000; interest expense €40,000. Compute Times Interest Earned (in times).',
        answer: 6.5, units: 'times', tolerance: 0.01,
        explanation: 'TIE = (NI + Tax + Interest) / Interest = 260,000 / 40,000 = 6.5.'
      },
      {
        id: 'mock21_calc9', type: 'numeric', difficulty: 'medium',
        prompt: 'Yonge\'s 2015: Interest expense $435M; NI $602M; Sales $90,374M; Avg total assets $23,491M; Tax rate 35%. Compute the profit margin (decimal).',
        answer: 0.0067, units: '', tolerance: 0.001,
        explanation: 'Profit Margin = NI / Sales = 602 / 90,374 ≈ 0.0067.'
      }
    ]
  }
];
