# Korean Study Kit

Static site (no build) hosted on GitHub Pages from `main` at mpkuchera/korean-study. The owner is a beginner Korean student adding a lesson every week or two.

- Lesson content lives in `lessons/lessonN.js` (shape in `lessons/_template.js`); `app.js` is the shared UI. Keep content out of `app.js`.
- Check Korean content against the textbook pages (the owner shares the course PDFs). The syllabus says vocab quizzes cover the New Words from **both** Conversation 1 and 2 of each lesson.
- Never commit the course PDFs/syllabus (copyrighted; the syllabus has staff contact info). `.gitignore` excludes them.
- After editing, open `index.html` in the browser and click through each tab before pushing.
