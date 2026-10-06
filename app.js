'use strict';

// ---- Edit this line as the semester goes ----
const UPCOMING = 'Next up: Midterm on Lessons 1–3 · Tue Oct 27';

// Lesson files call addLesson({...}); see lessons/_template.js for the shape.
const LESSONS = [];
function addLesson(lesson) { LESSONS.push(lesson); }

// ---------- utilities ----------
const $ = id => document.getElementById(id);

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('korean-study:' + key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('korean-study:' + key, JSON.stringify(value)); } catch { /* storage unavailable */ }
  },
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function speak(text) {
  if (!window.speechSynthesis) { alert('Audio is not supported in this browser.'); return; }
  speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'ko-KR';
  utt.rate = 0.85;
  const ko = speechSynthesis.getVoices().find(v => v.lang.startsWith('ko'));
  if (ko) utt.voice = ko;
  speechSynthesis.speak(utt);
}
if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();

// The part of a vocab entry worth speaking: "보다 (봐요)" -> "보다", "영 / 공" -> "영"
const speakable = k => k.replace(/\(.*?\)/g, '').split('/')[0].replace(/^-/, '').trim();

// Helpers for lesson files that build reference HTML.
function speakBtn(text) { return `<button class="speak-btn" onclick="event.stopPropagation();speak('${text}')">🔊</button>`; }

// Accepted typed answers for a vocab entry (used by "Spell it").
function acceptedAnswers(v) {
  if (v.accept) return v.accept;
  const out = new Set();
  const add = s => { s = s.trim().replace(/^=/, ''); if (s) out.add(s); };
  add(v.k);
  add(v.k.replace(/\(.*?\)/g, ''));
  (v.k.match(/\((.*?)\)/g) || []).forEach(p => add(p.slice(1, -1)));
  [...out].forEach(s => s.split('/').forEach(add));
  return [...out];
}
const normalize = s => s.replace(/[\s.?!,]/g, '');

// ---------- lesson selection ----------
let selected = new Set();

function activeLessons() { return LESSONS.filter(l => selected.has(l.id)); }
// Stable id per item, used to track progress: "vocab:1:학생", "quiz:2:<question>", …
function itemId(key, lessonId, item) {
  return `${key}:${lessonId}:${item.k || (item.info ? item.info + ' ' : '') + (item.q || item.sentence)}`;
}
// Vocab can be narrowed to one conversation (weekly vocab quizzes cover one conversation's New Words).
// Only applies when a single lesson is selected.
let convFilter = store.get('conv', 0);
const convActive = () => selected.size === 1 && convFilter ? convFilter : 0;
const inConv = v => !convActive() || v.conv === convActive();
function pool(key) {
  return activeLessons().flatMap(l => (l[key] || []).filter(item => key !== 'vocab' || inConv(item))
    .map(item => ({ ...item, lesson: l.id, id: itemId(key, l.id, item) })));
}
function setConv(c) { convFilter = c; store.set('conv', c); refreshAll(); }

// ---------- rounds ----------
// Long sets are served in bite-size rounds. Each mode keeps a shuffled deck and deals
// roundSize items at a time without repeats until everything has been seen once.
const ROUND_SIZES = [10, 20, 0]; // 0 = all
let roundSize = store.get('roundSize', 20);
let decks = {};

function deal(key, items) {
  let d = decks[key];
  if (!d || d.total !== items.length || !d.left.length) d = decks[key] = { left: shuffle(items.map((_, i) => i)), total: items.length };
  const picked = d.left.splice(0, roundSize || items.length);
  return { idx: picked, items: picked.map(i => items[i]), left: d.left.length, total: items.length };
}
function roundLabel(total) { return roundSize && total > roundSize ? `rounds of ${roundSize} · ${total} total` : `${total}`; }
function nextRoundBtn(left, onclick) {
  return left ? `<button class="btn btn-green" onclick="${onclick}">Next ${Math.min(left, roundSize)} →</button>` : '';
}
function roundNote(left, total) {
  return left ? `${total - left} of ${total} done · ${left} to go` : (total > (roundSize || total) ? `🎉 You've been through all ${total}! Next round starts a fresh shuffle.` : '');
}
function setRoundSize(n) { roundSize = n; store.set('roundSize', n); refreshAll(); }

function renderLessonBar() {
  $('lessonBar').innerHTML = '<span class="lb-label">Studying:</span>' +
    LESSONS.map(l => `<button class="chip ${selected.has(l.id) ? 'on' : ''}" onclick="toggleLesson(${l.id})">L${l.id} ${l.title}</button>`).join('') +
    (LESSONS.length > 1 ? '<button class="chip-link" onclick="selectAllLessons()">all</button>' : '') +
    convChips() +
    '<span class="lb-spacer"></span><span class="lb-label">Round:</span>' +
    ROUND_SIZES.map(n => `<button class="chip ${roundSize === n ? 'on' : ''}" onclick="setRoundSize(${n})">${n || 'All'}</button>`).join('');
}
function convChips() {
  const l = selected.size === 1 && activeLessons()[0];
  if (!l || !l.conversations) return '';
  const convs = Object.keys(l.conversations).map(Number);
  return '<span class="lb-label" style="margin-left:8px">Vocab:</span>' +
    [0, ...convs].map(c => `<button class="chip ${convActive() === c ? 'on' : ''}" onclick="setConv(${c})" title="${c ? l.conversations[c] : 'All conversations'}">${c ? 'Conv ' + c : 'All'}</button>`).join('');
}
function toggleLesson(id) {
  if (selected.has(id)) { if (selected.size === 1) return; selected.delete(id); }
  else selected.add(id);
  store.set('lessons', [...selected]);
  refreshAll();
}
function selectAllLessons() { selected = new Set(LESSONS.map(l => l.id)); store.set('lessons', [...selected]); refreshAll(); }

function refreshAll() {
  const ids = activeLessons().map(l => l.id);
  decks = {};
  $('subtitle').textContent = `${UPCOMING} · showing Lesson${ids.length > 1 ? 's' : ''} ${ids.join(', ')}${convActive() ? ` (Conversation ${convActive()} vocab)` : ''}`;
  renderLessonBar();
  renderVocab();
  initFlash();
  renderQuizStart();
  renderFillStart();
  renderGrammar();
  renderReference();
}

// ---------- tabs ----------
let currentTab = 'vocab';
function showTab(id) {
  currentTab = id;
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id));
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  store.set('tab', id);
  if (id === 'progress') renderProgress();
  if (id === 'quiz' && !quiz) renderQuizStart(); // refresh review counts
  if (id === 'fill' && !fill) renderFillStart();
}

// ---------- vocab list ----------
function renderVocab() {
  $('vocabBody').innerHTML = activeLessons().map(l => {
    const convs = [...new Set(l.vocab.filter(inConv).map(v => v.conv))];
    return convs.map(c => {
      const items = l.vocab.filter(v => v.conv === c);
      const convTitle = l.conversations && l.conversations[c] ? ` — ${l.conversations[c]}` : '';
      return `<div class="lesson-label">Lesson ${l.id} ${l.title} · ${typeof c === 'string' ? c : `Conversation ${c}`}${convTitle}</div>
        <div class="vocab-grid">${items.map(v => `
          <div class="vocab-card" onclick="this.classList.toggle('flipped')">
            <div><span class="vocab-korean">${v.k}</span> ${speakBtn(speakable(v.k))}</div>
            <div style="text-align:right">
              <span class="vocab-english">${v.e}</span><br>
              ${v.note ? `<span class="vocab-note">${v.note}</span><br>` : ''}
              <span class="vocab-tag">${v.pos}</span>
            </div>
          </div>`).join('')}</div>`;
    }).join('');
  }).join('');
}

// ---------- flashcards ----------
let flashCards = [], flashOrder = [], flashIdx = 0, flashDir = 'ko', flashLeft = 0;

function initFlash() {
  flashCards = pool('vocab');
  nextSet();
}
function nextSet() {
  const r = deal('flash', flashCards);
  flashOrder = r.idx;
  flashLeft = r.left;
  flashIdx = 0;
  showFlash();
}
function showFlash() {
  if (!flashCards.length) return;
  const v = flashCards[flashOrder[flashIdx]];
  const ko = flashDir === 'ko';
  $('fFront').textContent = ko ? v.k : v.e;
  $('fFront').classList.toggle('en', !ko);
  $('fPos').textContent = `L${v.lesson} · ${v.pos}`;
  $('fBack').textContent = ko ? v.e : v.k;
  $('fBack').classList.toggle('en', ko);
  $('fNote').textContent = v.note || '';
  $('flashProg').textContent = `Card ${flashIdx + 1} of ${flashOrder.length}` +
    (flashOrder.length < flashCards.length ? ` · ${flashCards.length - flashLeft} of ${flashCards.length} words dealt` : '');
  const setBtn = $('nextSetBtn'); // missing if the browser cached an older index.html
  if (setBtn) {
    setBtn.style.display = flashOrder.length < flashCards.length ? '' : 'none';
    setBtn.textContent = flashLeft ? `Next set (${Math.min(flashLeft, roundSize)}) →` : '↻ New shuffle';
  }
  $('flashInner').classList.remove('flipped');
}
function flipCard() { $('flashInner').classList.toggle('flipped'); }
function nextCard() { flashIdx = (flashIdx + 1) % flashOrder.length; showFlash(); }
function prevCard() { flashIdx = (flashIdx - 1 + flashOrder.length) % flashOrder.length; showFlash(); }

// ---------- multiple-choice quiz ----------
let quiz = null; // { qs, idx, score, missed, answered }

function vocabQuestion(v, all, dir) {
  const field = dir === 'ko' ? 'e' : 'k';
  const correct = v[field];
  // Skip words that share a meaning or spelling (아/어 are both 'oh'; 있다 has two entries in Lesson 3).
  const others = shuffle(all.filter(o => o.e !== v.e && speakable(o.k) !== speakable(v.k)));
  const ranked = [...others.filter(o => o.pos === v.pos), ...others.filter(o => o.pos !== v.pos)];
  const distractors = [];
  for (const o of ranked) {
    if (!distractors.includes(o[field])) distractors.push(o[field]);
    if (distractors.length === 3) break;
  }
  const opts = shuffle([correct, ...distractors]);
  return {
    q: dir === 'ko' ? `<span class="quiz-korean">${v.k}</span> means:` : `How do you say <strong>“${v.e}”</strong>${v.pos ? ` <span class="vocab-tag">${v.pos}</span>` : ''}?`,
    opts, ans: opts.indexOf(correct), why: v.note, key: `${dir}|${v.id}`,
  };
}
function usageQuestion(q) {
  const correct = q.opts[q.ans];
  const opts = shuffle([...q.opts]);
  return { ...q, key: q.key || q.id, opts, ans: opts.indexOf(correct) };
}
function buildQuiz(mode) {
  const vocab = pool('vocab');
  if (mode === 'review') return { qs: shuffle(quizReviewItems()).slice(0, roundSize || undefined).map(m => m()), left: 0, total: 0 };
  if (mode === 'mixed') {
    // about half grammar/usage, rest vocab in both directions
    const n = roundSize || 20, half = Math.ceil(n / 2), quarter = Math.ceil((n - half) / 2);
    const usage = shuffle(pool('quiz')).slice(0, half).map(usageQuestion);
    const ko = shuffle(vocab.slice()).slice(0, quarter).map(v => vocabQuestion(v, vocab, 'ko'));
    const en = shuffle(vocab.slice()).slice(0, n - half - quarter).map(v => vocabQuestion(v, vocab, 'en'));
    return { qs: shuffle([...usage, ...ko, ...en]), left: 0, total: 0 };
  }
  const r = mode === 'usage' ? deal('quiz-usage', pool('quiz')) : deal('quiz-' + mode, vocab);
  const qs = mode === 'usage' ? r.items.map(usageQuestion) : r.items.map(v => vocabQuestion(v, vocab, mode));
  return { qs, left: r.left, total: r.total };
}

function renderQuizStart() {
  quiz = null;
  const nv = pool('vocab').length, nu = pool('quiz').length;
  $('quizBody').innerHTML = `
    <div class="tip"><strong>Pick a mode.</strong> Questions come from the lessons selected above. Missed questions are listed at the end so you can retry just those.</div>
    <div class="mode-grid">
      ${reviewCard(quizReviewItems().length, "startQuiz('review')")}
      <button class="mode-card" onclick="startQuiz('mixed')"><strong>🎯 Mixed practice (${roundSize || 20})</strong><span>Grammar &amp; usage plus vocab in both directions</span></button>
      <button class="mode-card" onclick="startQuiz('usage')"><strong>📐 Grammar &amp; usage (${roundLabel(nu)})</strong><span>Particles, copula, polite endings, expressions</span></button>
      <button class="mode-card" onclick="startQuiz('ko')"><strong>🇰🇷 → 🇺🇸 Vocab: Korean to English (${roundLabel(nv)})</strong><span>Every word in the New Words lists</span></button>
      <button class="mode-card" onclick="startQuiz('en')"><strong>🇺🇸 → 🇰🇷 Vocab: English to Korean (${roundLabel(nv)})</strong><span>Harder — recognize the Korean</span></button>
    </div>`;
}
function startQuiz(mode) { const r = buildQuiz(mode); runQuiz(r.qs, mode, r.left, r.total); }
function runQuiz(qs, mode = null, left = 0, total = 0) { quiz = { qs, mode, left, total, idx: 0, score: 0, missed: [], answered: false }; renderQuiz(); }

function quitQuiz() {
  if (quiz && !quiz.logged) { quiz.logged = true; logRound('Quiz Me', quiz.mode, quiz.score, quiz.idx + (quiz.answered ? 1 : 0)); }
  renderQuizStart();
}
function renderQuiz() {
  const el = $('quizBody');
  if (quiz.idx >= quiz.qs.length) {
    const n = quiz.qs.length, pct = Math.round(quiz.score / n * 100);
    if (!quiz.logged) { quiz.logged = true; logRound('Quiz Me', quiz.mode, quiz.score, n); }
    el.innerHTML = `<div class="quiz-score">
      <div style="color:var(--muted);margin-bottom:8px">Round complete!</div>
      <div class="score-big">${quiz.score}/${n}</div>
      <div style="margin-top:6px;color:var(--muted)">${pct}% — ${pct >= 85 ? '🎉 Great job!' : pct >= 65 ? '📚 Good — keep reviewing!' : '🔄 Review the Grammar tab and try again!'}</div>
      ${quiz.mode && quiz.mode !== 'mixed' ? `<div class="hint">${roundNote(quiz.left, quiz.total)}</div>` : ''}
      <div class="flash-controls" style="margin-top:18px">
        ${quiz.mode === 'mixed' || quiz.mode === 'review' ? `<button class="btn btn-green" onclick="startQuiz('${quiz.mode}')">${quiz.mode === 'review' ? 'Review more' : `Another ${n}`} →</button>` : quiz.mode ? (nextRoundBtn(quiz.left, `startQuiz('${quiz.mode}')`) || `<button class="btn btn-green" onclick="startQuiz('${quiz.mode}')">↻ Start over</button>`) : ''}
        ${quiz.missed.length ? '<button class="btn btn-outline" onclick="retryMissedQuiz()">Retry missed</button>' : ''}
        <button class="btn btn-outline" onclick="renderQuizStart()">Choose another mode</button>
      </div>
      ${quiz.missed.length ? `<div class="missed"><h3>Missed (${quiz.missed.length})</h3><ul>${quiz.missed.map(q => `<li>${q.q} → <strong>${q.opts[q.ans]}</strong></li>`).join('')}</ul></div>` : ''}
    </div>`;
    return;
  }
  const q = quiz.qs[quiz.idx];
  quiz.answered = false;
  el.innerHTML = `
    <div class="meta">Question ${quiz.idx + 1} of ${quiz.qs.length} · Score: ${quiz.score}</div>
    <div class="quiz-card">
      <div class="quiz-q">${q.q}</div>
      <div class="options">${q.opts.map((o, i) => `<button class="opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
      <div id="qfeedback"></div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-outline btn-small" onclick="quitQuiz()">✕ Quit</button>
      <button class="btn btn-green" id="quizNext" onclick="nextQuiz()" style="display:none">Next →</button>
    </div>`;
}
function answerQuiz(i) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.qs[quiz.idx];
  const opts = document.querySelectorAll('#quizBody .opt');
  opts.forEach(o => { o.disabled = true; });
  opts[q.ans].classList.add('correct');
  const why = q.why ? `<br>${q.why}` : '';
  record(q.key, i === q.ans);
  if (i === q.ans) {
    quiz.score++;
    $('qfeedback').innerHTML = `<div class="feedback ok">✓ Correct!${why}</div>`;
  } else {
    opts[i].classList.add('wrong');
    quiz.missed.push(q);
    $('qfeedback').innerHTML = `<div class="feedback no">✗ The answer is: <strong>${q.opts[q.ans]}</strong>${why}</div>`;
  }
  $('quizNext').style.display = 'inline-block';
  $('quizNext').focus();
}
function nextQuiz() { quiz.idx++; renderQuiz(); }
function retryMissedQuiz() { runQuiz(shuffle(quiz.missed.map(usageQuestion))); }

// ---------- fill-in-the-blank & spelling ----------
let fill = null; // { qs, idx, score, missed, answered }

function spellQuestions() {
  return pool('vocab').filter(v => !v.noSpell).map(v => ({
    sentence: `<strong>${v.e}</strong> <span class="vocab-tag">${v.pos}</span><br>___`,
    blank: acceptedAnswers(v), display: v.k,
    hint: `Starts with “${speakable(v.k)[0]}” · ${speakable(v.k).length} syllable${speakable(v.k).length > 1 ? 's' : ''}`,
    type: 'Spell it', wide: true, key: 'spell|' + v.id,
  }));
}
function renderFillStart() {
  fill = null;
  const types = [...new Set(pool('fill').map(q => q.type))].join(' · ');
  $('fillBody').innerHTML = `
    <div class="tip"><strong>Type the answer</strong> with a Korean keyboard (Mac: add “2-Set Korean” in Keyboard settings, switch with Ctrl-Space or 🌐). Press Enter or ✓ Check.</div>
    <div class="mode-grid">
      ${reviewCard(fillReviewItems().length, "startFill('review')")}
      <button class="mode-card" onclick="startFill('mixed')"><strong>🎯 Mixed practice (${roundSize || 20})</strong><span>Half sentence blanks, half spelling</span></button>
      <button class="mode-card" onclick="startFill('blanks')"><strong>📝 Sentence blanks (${roundLabel(pool('fill').length)})</strong><span>${types}</span></button>
      <button class="mode-card" onclick="startFill('spell')"><strong>⌨️ Spell the vocab (${roundLabel(spellQuestions().length)})</strong><span>See the English, type the Korean — best prep for a written vocab quiz</span></button>
    </div>`;
}
function startFill(mode) {
  if (mode === 'review') return runFill(shuffle(fillReviewItems()).slice(0, roundSize || undefined), 'review');
  if (mode === 'mixed') {
    const n = roundSize || 20, half = Math.ceil(n / 2);
    return runFill(shuffle([...shuffle(pool('fill')).slice(0, half), ...shuffle(spellQuestions()).slice(0, n - half)]), 'mixed');
  }
  const r = deal('fill-' + mode, mode === 'spell' ? spellQuestions() : pool('fill'));
  runFill(r.items, mode, r.left, r.total);
}
function runFill(qs, mode = null, left = 0, total = 0) { fill = { qs, mode, left, total, idx: 0, score: 0, missed: [], answered: false }; renderFill(); }

function answersOf(q) { return Array.isArray(q.blank) ? q.blank : [q.blank]; }

function quitFill() {
  if (fill && !fill.logged) { fill.logged = true; logRound('Fill-in', fill.mode, fill.score, fill.idx + (fill.answered ? 1 : 0)); }
  renderFillStart();
}
function renderFill() {
  const el = $('fillBody');
  if (fill.idx >= fill.qs.length) {
    const n = fill.qs.length, pct = Math.round(fill.score / n * 100);
    if (!fill.logged) { fill.logged = true; logRound('Fill-in', fill.mode, fill.score, n); }
    el.innerHTML = `<div class="quiz-score">
      <div style="color:var(--muted);margin-bottom:8px">Round complete!</div>
      <div class="score-big">${fill.score}/${n}</div>
      <div style="margin-top:6px;color:var(--muted)">${pct}% — ${pct >= 85 ? '🎉 Excellent!' : pct >= 65 ? '📚 Good — keep drilling!' : '🔄 Review and try again!'}</div>
      ${fill.mode && fill.mode !== 'mixed' ? `<div class="hint">${roundNote(fill.left, fill.total)}</div>` : ''}
      <div class="flash-controls" style="margin-top:18px">
        ${fill.mode === 'mixed' || fill.mode === 'review' ? `<button class="btn btn-green" onclick="startFill('${fill.mode}')">${fill.mode === 'review' ? 'Review more' : `Another ${n}`} →</button>` : fill.mode ? (nextRoundBtn(fill.left, `startFill('${fill.mode}')`) || `<button class="btn btn-green" onclick="startFill('${fill.mode}')">↻ Start over</button>`) : ''}
        ${fill.missed.length ? '<button class="btn btn-outline" onclick="runFill(shuffle(fill.missed.slice()))">Retry missed</button>' : ''}
        <button class="btn btn-outline" onclick="renderFillStart()">Back</button>
      </div>
      ${fill.missed.length ? `<div class="missed"><h3>Missed (${fill.missed.length})</h3><ul>${fill.missed.map(q => `<li>${q.sentence.replace('<br>', ' ').replace('___', `<strong>${q.display || answersOf(q)[0]}</strong>`)}</li>`).join('')}</ul></div>` : ''}
    </div>`;
    return;
  }
  const q = fill.qs[fill.idx];
  fill.answered = false;
  const [before, after = ''] = q.sentence.split('___');
  el.innerHTML = `
    <div class="meta">Question ${fill.idx + 1} of ${fill.qs.length} · Score: ${fill.score} · <span style="color:var(--green);font-weight:600">${q.type}</span></div>
    <div class="blank-q">
      <div class="blank-sentence">${before}<input class="blank-input ${q.wide ? 'wide' : ''}" id="fillInp" placeholder="?" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="ko">${after}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="check-btn" onclick="submitFill()">✓ Check</button>
        <button class="check-btn ghost" onclick="showFillHint()">💡 Hint</button>
      </div>
      <div class="hint" id="fillHint" style="display:none"></div>
      <div id="fillFeedback"></div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-outline btn-small" onclick="quitFill()">✕ Quit</button>
      <button class="btn btn-green" id="fillNext" onclick="nextFill()" style="display:none">Next →</button>
    </div>`;
  const inp = $('fillInp');
  inp.addEventListener('keydown', e => {
    // Ignore Enter while the Korean IME is still composing a syllable.
    if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229) { fill.answered ? nextFill() : submitFill(); }
  });
  inp.focus();
}
function showFillHint() {
  const el = $('fillHint');
  el.style.display = 'block';
  el.textContent = 'Hint: ' + fill.qs[fill.idx].hint;
}
function submitFill() {
  if (fill.answered) return;
  const q = fill.qs[fill.idx];
  const inp = $('fillInp');
  const val = normalize(inp.value);
  if (!val) { inp.focus(); return; }
  fill.answered = true;
  inp.readOnly = true;
  const accepted = answersOf(q);
  const shown = q.display || accepted[0];
  const ok = accepted.some(a => normalize(a) === val);
  record(q.key || q.id, ok);
  if (ok) {
    fill.score++;
    inp.classList.add('correct');
    $('fillFeedback').innerHTML = `<div class="feedback ok">✓ Correct!${q.display && q.display !== inp.value.trim() ? ` (${q.display})` : ''}${q.why ? '<br>' + q.why : ''}</div>`;
  } else {
    inp.classList.add('wrong');
    fill.missed.push(q);
    showFillHint();
    $('fillFeedback').innerHTML = `<div class="feedback no">✗ Answer: <strong>${shown}</strong>${q.why ? '<br>' + q.why : ''}</div>`;
  }
  $('fillNext').style.display = 'inline-block';
}
function nextFill() { fill.idx++; renderFill(); }

// ---------- progress tracking ----------
// Saved in this browser only (localStorage). items[key] = { a: attempts, c: correct, r: last 5 results (1/0), t: last seen }
// rounds = completed (or quit) rounds: { t, s: section, m: mode, c: correct, n: answered, L: lessons }
let progress = loadProgress();

function loadProgress() {
  const p = store.get('progress', null);
  return p && p.items && Array.isArray(p.rounds) ? p : { v: 1, items: {}, rounds: [] };
}
function saveProgress() { store.set('progress', progress); }
function record(key, ok) {
  if (!key) return;
  const it = progress.items[key] || (progress.items[key] = { a: 0, c: 0, r: [], t: 0 });
  it.a++; if (ok) it.c++;
  it.r = [...it.r, ok ? 1 : 0].slice(-5);
  it.t = Date.now();
  saveProgress();
}
const MODE_LABELS = {
  mixed: 'Mixed', usage: 'Grammar & usage', ko: 'Vocab KO→EN', en: 'Vocab EN→KO', review: 'Review misses',
  blanks: 'Sentence blanks', spell: 'Spelling', test: 'Full practice test', answer: 'Answering questions', shortAnswer: 'Short answer',
};
function logRound(section, mode, c, n) {
  if (!n) return null;
  const round = { t: Date.now(), s: section, m: MODE_LABELS[mode] || 'Retry missed', c, n, L: activeLessons().map(l => l.id) };
  progress.rounds.push(round);
  if (progress.rounds.length > 3000) progress.rounds.shift();
  saveProgress();
  return round;
}

// new → learning → known (last 2 right); review = most recent attempt wrong
function itemStatus(key) {
  const it = progress.items[key];
  if (!it || !it.r.length) return 'new';
  const r = it.r;
  if (r[r.length - 1] === 0) return 'review';
  return r.length >= 2 && r[r.length - 2] === 1 ? 'known' : 'learning';
}
function quizReviewItems() {
  const vocab = pool('vocab'), out = [];
  pool('quiz').forEach(q => { if (itemStatus(q.id) === 'review') out.push(() => usageQuestion(q)); });
  vocab.forEach(v => ['ko', 'en'].forEach(dir => { if (itemStatus(`${dir}|${v.id}`) === 'review') out.push(() => vocabQuestion(v, vocab, dir)); }));
  return out;
}
function fillReviewItems() {
  return [...pool('fill').filter(q => itemStatus(q.id) === 'review'), ...spellQuestions().filter(q => itemStatus(q.key) === 'review')];
}
function reviewCard(n, onclick) {
  return n
    ? `<button class="mode-card review-card" onclick="${onclick}"><strong>🔁 Review my misses (${n})</strong><span>Questions you got wrong the last time you saw them</span></button>`
    : '';
}

const dayOf = t => new Date(t).toLocaleDateString('en-CA'); // YYYY-MM-DD, local time
const stripTags = h => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const pctOf = (c, n) => n ? Math.round(c / n * 100) : 0;

// Every trackable item across all lessons (not just the selected ones), grouped for the mastery view.
function trackedCategories(l) {
  const id = (key, item) => itemId(key, l.id, item);
  const vocab = l.vocab || [];
  return [
    { name: 'Vocab: Korean → English', items: vocab.map(v => ({ key: 'ko|' + id('vocab', v), label: `${v.k} → ${v.e}` })) },
    { name: 'Vocab: English → Korean', items: vocab.map(v => ({ key: 'en|' + id('vocab', v), label: `${v.e} → ${v.k}` })) },
    { name: 'Spelling', items: vocab.filter(v => !v.noSpell).map(v => ({ key: 'spell|' + id('vocab', v), label: `✍️ ${v.e} → ${v.k}` })) },
    { name: 'Grammar & usage', items: (l.quiz || []).map(q => ({ key: id('quiz', q), label: `${stripTags(q.q)} → ${q.opts[q.ans]}` })) },
    { name: 'Fill-in blanks', items: (l.fill || []).map(q => ({ key: id('fill', q), label: q.sentence.replace('___', `[${[].concat(q.blank)[0]}]`) })) },
  ];
}

function streakDays(days) {
  let n = 0;
  const d = new Date();
  if (!days.has(dayOf(d))) d.setDate(d.getDate() - 1); // today not studied yet: count up to yesterday
  while (days.has(dayOf(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function accuracyChart(byDay) {
  const pts = byDay.slice(-21);
  if (!pts.length) return '<div class="hint">Finish a round to start your chart.</div>';
  const W = 640, H = 220, L = 40, R = 52, T = 16, B = 34;
  const x = i => pts.length === 1 ? (L + W - R) / 2 : L + i * (W - L - R) / (pts.length - 1);
  const y = p => T + (100 - p) * (H - T - B) / 100;
  const grid = [0, 50, 100].map(p => `<line x1="${L}" x2="${W - R}" y1="${y(p)}" y2="${y(p)}" class="grid"/><text x="${L - 8}" y="${y(p) + 4}" text-anchor="end" class="axis">${p}%</text>`).join('');
  const step = Math.ceil(pts.length / 7);
  const xlabels = pts.map((d, i) => (i % step === 0 || i === pts.length - 1) ? `<text x="${x(i)}" y="${H - 10}" text-anchor="middle" class="axis">${+d.day.slice(5, 7)}/${+d.day.slice(8)}</text>` : '').join('');
  const line = pts.length > 1 ? `<polyline class="line" points="${pts.map((d, i) => `${x(i)},${y(d.pct)}`).join(' ')}"/>` : '';
  const dots = pts.map((d, i) => `<g class="pt"><circle cx="${x(i)}" cy="${y(d.pct)}" r="14" class="hit"/><circle cx="${x(i)}" cy="${y(d.pct)}" r="4.5" class="dot"/>
    <title>${d.day}: ${d.pct}% correct (${d.c} of ${d.n} questions)</title></g>`).join('');
  const last = pts[pts.length - 1];
  const lastLabel = `<text x="${x(pts.length - 1) + 10}" y="${y(last.pct) + 4}" class="val">${last.pct}%</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Daily accuracy, last ${pts.length} study days">${grid}${xlabels}${line}${dots}${lastLabel}</svg>`;
}

function masteryBar(keys) {
  const counts = { known: 0, learning: 0, review: 0, new: 0 };
  keys.forEach(k => counts[itemStatus(k)]++);
  const total = keys.length || 1;
  const seg = s => counts[s] ? `<span class="seg seg-${s}" style="flex:${counts[s]}" title="${counts[s]} ${STATUS_LABELS[s]}"></span>` : '';
  return { counts, html: `<div class="mbar">${['known', 'learning', 'review', 'new'].map(seg).join('')}</div>`, total };
}
const STATUS_LABELS = { known: 'mastered', learning: 'learning', review: 'needs review', new: 'not seen yet' };

function renderProgress() {
  const rounds = progress.rounds;
  const answered = rounds.reduce((s, r) => s + r.n, 0);
  const days = new Map();
  rounds.forEach(r => { const d = dayOf(r.t), e = days.get(d) || { day: d, c: 0, n: 0 }; e.c += r.c; e.n += r.n; days.set(d, e); });
  const byDay = [...days.values()].sort((a, b) => a.day < b.day ? -1 : 1).map(d => ({ ...d, pct: pctOf(d.c, d.n) }));
  const now = Date.now(), wk = 7 * 864e5;
  const sum = (from, to) => rounds.filter(r => r.t >= from && r.t < to).reduce((a, r) => ({ c: a.c + r.c, n: a.n + r.n }), { c: 0, n: 0 });
  const thisWk = sum(now - wk, now + 1), lastWk = sum(now - 2 * wk, now - wk);
  const delta = thisWk.n && lastWk.n ? pctOf(thisWk.c, thisWk.n) - pctOf(lastWk.c, lastWk.n) : null;

  const allKeys = LESSONS.flatMap(l => trackedCategories(l).flatMap(c => c.items.map(i => i.key)));
  const mastered = allKeys.filter(k => itemStatus(k) === 'known').length;

  const tiles = `<div class="tiles">
    <div class="tile"><div class="tile-num">${streakDays(new Set(days.keys()))}</div><div class="tile-label">day streak 🔥</div></div>
    <div class="tile"><div class="tile-num">${answered}</div><div class="tile-label">questions answered</div></div>
    <div class="tile"><div class="tile-num">${thisWk.n ? pctOf(thisWk.c, thisWk.n) + '%' : '—'}</div><div class="tile-label">accuracy, last 7 days${delta !== null ? `<br><span class="${delta >= 0 ? 'up' : 'down'}">${delta >= 0 ? '▲' : '▼'} ${Math.abs(delta)} pts vs week before</span>` : ''}</div></div>
    <div class="tile"><div class="tile-num">${mastered}<span class="tile-of">/${allKeys.length}</span></div><div class="tile-label">items mastered</div></div>
  </div>`;

  const legend = `<div class="legend">${['known', 'learning', 'review', 'new'].map(s => `<span><i class="seg-${s}"></i>${STATUS_LABELS[s]}</span>`).join('')}</div>`;
  const mastery = LESSONS.map(l => `<div class="lesson-label">Lesson ${l.id} ${l.title}</div>
    ${trackedCategories(l).filter(c => c.items.length).map(c => { const m = masteryBar(c.items.map(i => i.key)); return `
      <div class="mrow"><div class="mname">${c.name}</div>${m.html}
        <div class="mcount">${m.counts.known}/${c.items.length} mastered${m.counts.review ? ` · <span class="down">${m.counts.review} to review</span>` : ''}</div></div>`; }).join('')}`).join('');

  const trouble = LESSONS.flatMap(l => trackedCategories(l).flatMap(c => c.items.map(i => ({ ...i, cat: c.name, lesson: l.id, it: progress.items[i.key] }))))
    .filter(i => i.it && itemStatus(i.key) === 'review')
    .sort((a, b) => (a.it.c / a.it.a) - (b.it.c / b.it.a) || b.it.t - a.it.t)
    .slice(0, 12);

  const recent = rounds.slice(-10).reverse();
  $('progressBody').innerHTML = `
    <div class="tip"><strong>Saved in this browser only.</strong> Your laptop and phone keep separate records — use Backup below to move or merge them.</div>
    ${rounds.length ? '' : '<div class="tip">No rounds yet — finish a round in Quiz Me or Fill-in &amp; Spell and it will show up here.</div>'}
    ${tiles}
    <div class="grammar-block"><div class="grammar-title">Accuracy by day</div>${accuracyChart(byDay)}
      ${byDay.length ? `<details class="hint"><summary>Show as table</summary><table class="rule-table"><tr><th>Day</th><th>Questions</th><th>Correct</th></tr>${byDay.slice(-21).reverse().map(d => `<tr><td>${d.day}</td><td>${d.n}</td><td>${d.pct}%</td></tr>`).join('')}</table></details>` : ''}
    </div>
    <div class="grammar-block"><div class="grammar-title">Mastery by lesson</div>
      <div class="hint" style="margin-top:0">Mastered = right the last two times you saw it. Needs review = wrong the last time.</div>${legend}${mastery}</div>
    <div class="grammar-block"><div class="grammar-title">Trouble spots</div>
      ${trouble.length ? `<ul class="trouble">${trouble.map(i => `<li><span class="vocab-tag">L${i.lesson} · ${i.cat}</span> ${i.label} <span class="hint">(${i.it.c}/${i.it.a} right)</span></li>`).join('')}</ul>
        <div class="flash-controls"><button class="btn btn-green btn-small" onclick="showTab('quiz');startQuiz('review')">🔁 Review in Quiz Me</button><button class="btn btn-green btn-small" onclick="showTab('fill');startFill('review')">🔁 Review in Fill-in</button></div>`
        : '<div class="hint" style="margin-top:0">Nothing to review right now. 🎉</div>'}
    </div>
    <div class="grammar-block"><div class="grammar-title">Recent rounds</div>
      ${recent.length ? `<table class="rule-table"><tr><th>When</th><th>What</th><th>Score</th></tr>${recent.map(r => `<tr><td>${new Date(r.t).toLocaleString([], { month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</td><td>${r.s} · ${r.m}</td><td>${r.c}/${r.n} (${pctOf(r.c, r.n)}%)</td></tr>`).join('')}</table>` : '<div class="hint" style="margin-top:0">None yet.</div>'}
    </div>
    <div class="grammar-block"><div class="grammar-title">Backup</div>
      <div class="grammar-body">Export saves a file you can import on another device (imports are merged, not overwritten).</div>
      <div class="flash-controls" style="justify-content:flex-start">
        <button class="btn btn-outline btn-small" onclick="exportProgress()">⬇️ Export</button>
        <label class="btn btn-outline btn-small">⬆️ Import<input type="file" accept=".json,application/json" style="display:none" onchange="importProgress(this.files[0])"></label>
        <button class="btn btn-outline btn-small" onclick="resetProgress()">🗑 Reset</button>
      </div>
    </div>`;
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(progress)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `korean-progress-${dayOf(Date.now())}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
function importProgress(file) {
  if (!file) return;
  file.text().then(text => {
    const p = JSON.parse(text);
    if (!p || !p.items || !Array.isArray(p.rounds)) throw new Error('not a progress file');
    // merge: newest result wins per item; rounds are combined (deduped by time + section)
    Object.entries(p.items).forEach(([k, it]) => { if (!progress.items[k] || it.t > progress.items[k].t) progress.items[k] = it; });
    const seen = new Set(progress.rounds.map(r => r.t + r.s));
    p.rounds.forEach(r => { if (!seen.has(r.t + r.s)) progress.rounds.push(r); });
    progress.rounds.sort((a, b) => a.t - b.t);
    saveProgress();
    renderProgress();
    alert('Progress imported and merged.');
  }).catch(e => alert('Could not import that file: ' + e.message));
}
function resetProgress() {
  if (!confirm('Erase all saved progress in this browser? (Export a backup first if you want to keep it.)')) return;
  progress = { v: 1, items: {}, rounds: [] };
  saveProgress();
  refreshAll();
  renderProgress();
}

// ---------- grammar & reference ----------
function renderGrammar() {
  const blocks = activeLessons().flatMap(l => l.grammar || []);
  $('grammarBody').innerHTML = `
    <div class="tip"><strong>Covered:</strong> ${blocks.map(b => b.id).filter(Boolean).join(', ')}</div>` +
    blocks.map(b => `
      <div class="grammar-block">
        <div class="grammar-title">${b.id ? b.id + ' · ' : ''}${b.tag || ''}</div>
        <div class="grammar-h">${b.title}</div>
        ${b.html}
      </div>`).join('');
}
function renderReference() {
  const blocks = activeLessons().flatMap(l => (l.reference || []).map(r => ({ ...r, lesson: l.id })));
  $('referenceBody').innerHTML = blocks.length
    ? blocks.map(r => `<div class="lesson-label">${r.title}</div>${r.html}`).join('')
    : '<div class="tip">No reference material for the selected lessons.</div>';
}

// ---------- init ----------
window.addEventListener('DOMContentLoaded', () => {
  LESSONS.sort((a, b) => a.id - b.id);
  const saved = store.get('lessons', null);
  selected = new Set((saved || LESSONS.map(l => l.id)).filter(id => LESSONS.some(l => l.id === id)));
  if (!selected.size) selected = new Set(LESSONS.map(l => l.id));

  document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));
  $('hideEnBtn').addEventListener('click', e => {
    const on = $('vocab').classList.toggle('hide-en');
    e.currentTarget.classList.toggle('on', on);
  });
  document.querySelectorAll('[data-dir]').forEach(b => b.addEventListener('click', () => {
    flashDir = b.dataset.dir;
    document.querySelectorAll('[data-dir]').forEach(x => x.classList.toggle('on', x === b));
    showFlash();
  }));
  $('flashInner').addEventListener('click', flipCard);
  $('flipBtn').addEventListener('click', flipCard);
  $('nextBtn').addEventListener('click', nextCard);
  $('prevBtn').addEventListener('click', prevCard);
  $('shuffleBtn').addEventListener('click', () => { shuffle(flashOrder); flashIdx = 0; showFlash(); });
  $('resetBtn').addEventListener('click', () => { flashOrder.sort((a, b) => a - b); flashIdx = 0; showFlash(); });
  $('nextSetBtn')?.addEventListener('click', nextSet);
  $('speakBtn').addEventListener('click', () => speak(speakable(flashCards[flashOrder[flashIdx]].k)));
  document.addEventListener('keydown', e => {
    if (currentTab !== 'flash' || e.target.matches('input, textarea')) return;
    if (e.key === ' ') { e.preventDefault(); flipCard(); }
    else if (e.key === 'ArrowRight') nextCard();
    else if (e.key === 'ArrowLeft') prevCard();
  });

  refreshAll();
  const tab = store.get('tab', 'vocab');
  showTab($(tab) && $(tab).classList.contains('section') ? tab : 'vocab');
});
