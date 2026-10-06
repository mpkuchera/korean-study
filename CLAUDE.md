# Korean Study Kit

Static site (no build) hosted on GitHub Pages from `main` at mpkuchera/korean-study. The owner is a beginner Korean student adding a lesson every week or two.

- Lesson content lives in `lessons/lessonN.js` (shape in `lessons/_template.js`); `app.js` is the shared UI. Keep content out of `app.js`.
- Check Korean content against the textbook pages (the owner shares the course PDFs). The syllabus says vocab quizzes cover the New Words from **both** Conversation 1 and 2 of each lesson.
- Never commit the course PDFs/syllabus (copyrighted; the syllabus has staff contact info). `.gitignore` excludes them.
- After editing, open `index.html` in the browser and click through each tab before pushing.
- Bump the `?v=` number on every `<script>`/`<link>` tag in `index.html` whenever files change, so browsers do not mix a cached old page with new code.
- Long modes are served in rounds (`deal()` in app.js; Round: 10 · 20 · All in the lesson bar). The owner prefers bite-size rounds like the 20-question mixed practice.
- Progress (📈 tab) is stored in localStorage under `korean-study:progress`, keyed by `itemId()` (lesson + Korean word / question text). Editing an item's Korean text or question text resets its history; avoid gratuitous rewording.
- The Practice Test tab was removed on 2026-10-06 at the owner's request. The `answer` / `shortAnswer` arrays in lesson files are unused now (kept in case it comes back); new lessons don't need them.
