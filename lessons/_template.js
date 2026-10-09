// Lesson N · 제목 (English title) — textbook pp. __–__
// 1. Copy this file to lessons/lessonN.js and fill it in.
// 2. Add <script src="lessons/lessonN.js"></script> at the bottom of index.html.
addLesson({
  id: 0,
  title: '제목',
  english: 'English title',
  conversations: { 1: 'Conversation 1 title', 2: 'Conversation 2 title' },

  // From the "New Words" boxes. conv = which conversation's list.
  // Optional: note (shown under the meaning), accept (list of typed answers for "Spell it"),
  // noSpell: true (skip in "Spell it", e.g. suffixes).
  vocab: [
    { conv: 1, k: '한국어', e: 'English meaning', pos: 'noun' },
  ],

  // Multiple choice. ans = index of the correct option; options are shuffled on screen. why = optional explanation.
  quiz: [
    { q: 'Question?', opts: ['right', 'wrong', 'wrong', 'wrong'], ans: 0, why: '' },
  ],

  // Fill in the blank. ___ marks the blank. blank = string or list of accepted answers.
  fill: [
    { sentence: '저___ 학생이에요.', blank: '는', hint: 'Shown on request or after a miss', type: 'Particle' },
  ],

  // Optional: generators build a fresh question each time (🎲 Fresh practice). Use helpers from app.js:
  // pick, randInt, josa(word, afterConsonant, afterVowel), hasBatchim, batchimWhy, mcq(q, correct, wrongs, why),
  // nounsUpTo(n), CAST, sino(n), nativeCounting(n). Make sure no "wrong" option is actually also correct.
  generators: [
    { type: 'topic', label: 'Topic particle', typed: ctx => ({ sentence: '저___ 학생이에요.', blank: '는', hint: '' }), mc: ctx => mcq('Question', 'right', ['wrong1', 'wrong2', 'wrong3'], 'why') },
  ],

  // Grammar cards. html uses classes: grammar-body, ko, example-box (with <b>), rule-table.
  grammar: [
    { id: 'GN.1', tag: 'Lesson N', title: 'Title with <em>highlight</em>', html: '<div class="grammar-body">…</div>' },
  ],

  // Optional extra reference blocks (Reference tab).
  reference: [],
});
