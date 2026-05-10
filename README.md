# Financial Reporting & Analysis — Exam Hub

Interactive study site for the IE University FRA final exam. Built from the actual Mock Final Exam 21 + chapter slides 1–12.

**Live site:** https://viro19f.github.io/financial-reporting-exam/

## What's inside

Five study modes:

1. **Review** — concepts, formulas, and worked examples for all 11 chapters
2. **Practice** — drill MCQ + numeric questions per chapter, instant feedback
3. **Mocks** — full-length 90-minute timed exam (Mock 21, the actual past exam)
4. **Master quiz** — every question across every chapter, filterable by chapter / difficulty / "previously missed"
5. **Formula vault** — searchable reference of every formula on the exam

## Chapters covered

| # | Title | Topics |
|---|-------|--------|
| 1 | Introduction | Users, IFRS vs GAAP, accounting equation |
| 2 | Financial Statements | IS, BS, CFS, classification |
| 3 | Adjusting Entries | Accruals, deferrals, matching |
| 4 | Revenue & Receivables | Recognition, allowance, NRV |
| 5 | Inventory & COGS | FIFO, LIFO, average, LCNRV |
| 6 | Long-Term Assets | Depreciation, disposal, intangibles |
| 7 | Liabilities & Bonds | Premium/discount, retirement, TIE |
| 8 | Leases | IFRS 16 ROU model |
| 9 | Equity | Treasury, dividends, equity method |
| 11 | Cash Flow Statement | Indirect method, classifications |
| 12 | Ratios | Profitability, liquidity, solvency, CCC |

(Chapter 10 is not part of this course.)

## Stack

Pure HTML + CSS + vanilla JS. No build step, no dependencies. Deploys as static files to GitHub Pages.

```
index.html        Home with 5 mode cards
chapters.html     Grid of all chapters
chapter.html      Chapter detail (?id=ch1) — theory / formulas / examples / exam-tips tabs
practice.html     Per-chapter drill (?ch=ch1)
mocks.html        Mock exam list + timed runner (?id=mock_21)
master.html       Filterable master quiz
vault.html        Formula reference, searchable
css/style.css     Light + dark mode
js/data.js        All chapter content + questions + mock exam
js/quiz.js        Reusable MCQ/numeric quiz engine
js/app.js         Theme toggle, progress storage
js/{chapter,practice,mocks,master,vault}.js  Per-page logic
```

## Local preview

```sh
cd financial-reporting-exam
python3 -m http.server 8000
# open http://localhost:8000
```

Progress saves automatically to `localStorage`. Click ↻ in the top bar to reset.
