# Korean Study Kit

Personal study site for SIL-125 Beginning Korean (Davidson College, Fall 2026), based on *Integrated Korean: Beginning 1* (3rd ed.).

**Live site:** https://mpkuchera.github.io/korean-study/

Features: vocab list with audio, flashcards (both directions), multiple-choice quiz (grammar + auto-generated vocab), fill-in-the-blank, “spell it” typing practice, grammar notes, and reference tables. Use the lesson chips at the top to choose which lessons to study.

## Adding a lesson

1. Copy `lessons/_template.js` to `lessons/lessonN.js` and fill it in from the textbook (New Words for Conversations 1 & 2, grammar points).
2. Add `<script src="lessons/lessonN.js"></script>` at the bottom of `index.html`.
3. Update `UPCOMING` at the top of `app.js`.
4. Commit and push; GitHub Pages updates in a minute or two.

Vocab quiz questions are generated automatically from `vocab`, so `quiz` only needs grammar/usage questions.

No build step — open `index.html` in a browser to preview locally.
