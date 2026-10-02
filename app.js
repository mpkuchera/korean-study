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
function pool(key) {
  return activeLessons().flatMap(l => (l[key] || []).map(item => ({ ...item, lesson: l.id })));
}

function renderLessonBar() {
  $('lessonBar').innerHTML = '<span class="lb-label">Studying:</span>' +
    LESSONS.map(l => `<button class="chip ${selected.has(l.id) ? 'on' : ''}" onclick="toggleLesson(${l.id})">L${l.id} ${l.title}</button>`).join('') +
    (LESSONS.length > 1 ? '<button class="chip-link" onclick="selectAllLessons()">all</button>' : '');
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
  $('subtitle').textContent = `${UPCOMING} · showing Lesson${ids.length > 1 ? 's' : ''} ${ids.join(', ')}`;
  renderLessonBar();
  renderVocab();
  initFlash();
  renderTestStart();
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
}

// ---------- vocab list ----------
function renderVocab() {
  $('vocabBody').innerHTML = activeLessons().map(l => {
    const convs = [...new Set(l.vocab.map(v => v.conv))];
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
let flashCards = [], flashOrder = [], flashIdx = 0, flashDir = 'ko';

function initFlash() {
  flashCards = pool('vocab');
  flashOrder = shuffle(flashCards.map((_, i) => i));
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
  $('flashProg').textContent = `Card ${flashIdx + 1} of ${flashOrder.length}`;
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
  // Skip words that share a meaning or spelling (e.g. 아 and 어 are both 'oh').
  const others = shuffle(all.filter(o => o.e !== v.e && o.k !== v.k));
  const ranked = [...others.filter(o => o.pos === v.pos), ...others.filter(o => o.pos !== v.pos)];
  const distractors = [];
  for (const o of ranked) {
    if (!distractors.includes(o[field])) distractors.push(o[field]);
    if (distractors.length === 3) break;
  }
  const opts = shuffle([correct, ...distractors]);
  return {
    q: dir === 'ko' ? `<span class="quiz-korean">${v.k}</span> means:` : `How do you say <strong>“${v.e}”</strong>${v.pos ? ` <span class="vocab-tag">${v.pos}</span>` : ''}?`,
    opts, ans: opts.indexOf(correct), why: v.note,
  };
}
function usageQuestion(q) {
  const correct = q.opts[q.ans];
  const opts = shuffle([...q.opts]);
  return { ...q, opts, ans: opts.indexOf(correct) };
}
function buildQuiz(mode) {
  const vocab = pool('vocab');
  const usage = pool('quiz').map(usageQuestion);
  const ko = vocab.map(v => vocabQuestion(v, vocab, 'ko'));
  const en = vocab.map(v => vocabQuestion(v, vocab, 'en'));
  if (mode === 'usage') return shuffle(usage);
  if (mode === 'ko') return shuffle(ko);
  if (mode === 'en') return shuffle(en);
  // mixed: about half grammar/usage, rest vocab both directions
  return shuffle([...shuffle(usage).slice(0, 10), ...shuffle(ko).slice(0, 5), ...shuffle(en).slice(0, 5)]);
}

function renderQuizStart() {
  quiz = null;
  const nv = pool('vocab').length, nu = pool('quiz').length;
  $('quizBody').innerHTML = `
    <div class="tip"><strong>Pick a mode.</strong> Questions come from the lessons selected above. Missed questions are listed at the end so you can retry just those.</div>
    <div class="mode-grid">
      <button class="mode-card" onclick="startQuiz('mixed')"><strong>🎯 Mixed practice (20)</strong><span>Grammar &amp; usage plus vocab in both directions</span></button>
      <button class="mode-card" onclick="startQuiz('usage')"><strong>📐 Grammar &amp; usage (${nu})</strong><span>Particles, copula, polite endings, expressions</span></button>
      <button class="mode-card" onclick="startQuiz('ko')"><strong>🇰🇷 → 🇺🇸 Vocab: Korean to English (${nv})</strong><span>Every word in the New Words lists</span></button>
      <button class="mode-card" onclick="startQuiz('en')"><strong>🇺🇸 → 🇰🇷 Vocab: English to Korean (${nv})</strong><span>Harder — recognize the Korean</span></button>
    </div>`;
}
function startQuiz(mode) { runQuiz(buildQuiz(mode)); }
function runQuiz(qs) { quiz = { qs, idx: 0, score: 0, missed: [], answered: false }; renderQuiz(); }

function renderQuiz() {
  const el = $('quizBody');
  if (quiz.idx >= quiz.qs.length) {
    const n = quiz.qs.length, pct = Math.round(quiz.score / n * 100);
    el.innerHTML = `<div class="quiz-score">
      <div style="color:var(--muted);margin-bottom:8px">Quiz complete!</div>
      <div class="score-big">${quiz.score}/${n}</div>
      <div style="margin-top:6px;color:var(--muted)">${pct}% — ${pct >= 85 ? '🎉 Great job!' : pct >= 65 ? '📚 Good — keep reviewing!' : '🔄 Review the Grammar tab and try again!'}</div>
      <div class="flash-controls" style="margin-top:18px">
        ${quiz.missed.length ? '<button class="btn btn-green" onclick="retryMissedQuiz()">Retry missed</button>' : ''}
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
      <button class="btn btn-outline btn-small" onclick="renderQuizStart()">✕ Quit</button>
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
    type: 'Spell it', wide: true,
  }));
}
function renderFillStart() {
  fill = null;
  const types = [...new Set(pool('fill').map(q => q.type))].join(' · ');
  $('fillBody').innerHTML = `
    <div class="tip"><strong>Type the answer</strong> with a Korean keyboard (Mac: add “2-Set Korean” in Keyboard settings, switch with Ctrl-Space or 🌐). Press Enter or ✓ Check.</div>
    <div class="mode-grid">
      <button class="mode-card" onclick="startFill('blanks')"><strong>📝 Sentence blanks (${pool('fill').length})</strong><span>${types}</span></button>
      <button class="mode-card" onclick="startFill('spell')"><strong>⌨️ Spell the vocab (${spellQuestions().length})</strong><span>See the English, type the Korean — best prep for a written vocab quiz</span></button>
    </div>`;
}
function startFill(mode) { runFill(shuffle(mode === 'spell' ? spellQuestions() : pool('fill'))); }
function runFill(qs) { fill = { qs, idx: 0, score: 0, missed: [], answered: false }; renderFill(); }

function answersOf(q) { return Array.isArray(q.blank) ? q.blank : [q.blank]; }

function renderFill() {
  const el = $('fillBody');
  if (fill.idx >= fill.qs.length) {
    const n = fill.qs.length, pct = Math.round(fill.score / n * 100);
    el.innerHTML = `<div class="quiz-score">
      <div style="color:var(--muted);margin-bottom:8px">Done!</div>
      <div class="score-big">${fill.score}/${n}</div>
      <div style="margin-top:6px;color:var(--muted)">${pct}% — ${pct >= 85 ? '🎉 Excellent!' : pct >= 65 ? '📚 Good — keep drilling!' : '🔄 Review and try again!'}</div>
      <div class="flash-controls" style="margin-top:18px">
        ${fill.missed.length ? '<button class="btn btn-green" onclick="runFill(shuffle(fill.missed.slice()))">Retry missed</button>' : ''}
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
      <button class="btn btn-outline btn-small" onclick="renderFillStart()">✕ Quit</button>
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
  if (accepted.some(a => normalize(a) === val)) {
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

// ---------- practice test ----------
// Mirrors the in-class test: vocab, fill in the blanks, answering questions, short answer.
// Parts A–B are auto-graded; C–D show model answers and you mark yourself.
const TEST_MINUTES = 30;
let test = null;

function modelBox(item) {
  return `<div class="model"><span class="label">Model answer${item.model.length > 1 ? 's' : ''}</span><br>
    ${item.model.join('<br>')}
    ${item.check ? `<ul>${item.check.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
    ${item.note ? `<div class="hint">${item.note}</div>` : ''}</div>`;
}
function answerPrompt(a) {
  const info = a.info ? `<span class="info">${a.info}</span>` : '';
  if (a.type === 'question') return `${info}Write the question: <strong>A:</strong> ________ ? &nbsp; <strong>B:</strong> ${a.q}`;
  return `${info}${a.q}${a.en ? ` <span class="info">(${a.en})</span>` : ''}`;
}
// Pick n answer items, mixing the kinds (about you / from info / write the question).
function pickAnswers(n) {
  const byType = {};
  shuffle(pool('answer')).forEach(a => (byType[a.type] = byType[a.type] || []).push(a));
  const out = [];
  while (out.length < n && Object.values(byType).some(l => l.length)) {
    for (const list of Object.values(byType)) if (list.length && out.length < n) out.push(list.pop());
  }
  return shuffle(out);
}

function renderTestStart() {
  if (test && test.timer) clearInterval(test.timer);
  test = null;
  const na = pool('answer').length, ns = pool('shortAnswer').length;
  $('testBody').innerHTML = `
    <div class="tip"><strong>Practice Test format:</strong> some vocab · fill in the blanks · answering questions · short answer — ${TEST_MINUTES} minutes.
      Write full sentences in Korean for the last two parts, then compare with the model answers.</div>
    <div class="mode-grid">
      <button class="mode-card" onclick="startTest()"><strong>📋 Full practice test (${TEST_MINUTES} min timer)</strong><span>10 vocab · 8 fill-in · 5 questions to answer · 1 short answer — new questions every time</span></button>
      <button class="mode-card" onclick="startDrill('answer')"><strong>🗣️ Drill: answering questions (${na})</strong><span>Answer in a full sentence, or write the question for a given answer</span></button>
      <button class="mode-card" onclick="startDrill('shortAnswer')"><strong>✍️ Drill: short answer (${ns})</strong><span>Self-introduction, describing people, your Korean class</span></button>
    </div>`;
}

function startTest() {
  const vocab = pool('vocab');
  const spell = shuffle(vocab.filter(v => !v.noSpell)).slice(0, 5);
  const mc = shuffle(vocab.filter(v => !spell.includes(v))).slice(0, 5).map(v => vocabQuestion(v, vocab, 'ko'));
  test = {
    spell, mc,
    fills: shuffle(pool('fill')).slice(0, 8),
    answers: pickAnswers(5),
    short: shuffle(pool('shortAnswer'))[0],
    end: Date.now() + TEST_MINUTES * 60000,
    submitted: false, self: {},
  };
  const inp = (id, cls = '') => `<input class="blank-input ${cls}" id="${id}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" lang="ko">`;
  const area = (id, cls = '') => `<textarea class="blank-input ${cls}" id="${id}" lang="ko" spellcheck="false" placeholder="한국어로 쓰세요…"></textarea>`;
  let n = 0;
  $('testBody').innerHTML = `
    <div class="test-timer" id="testTimer"><span>⏱ <span id="testClock">${TEST_MINUTES}:00</span></span><button class="btn btn-outline btn-small" onclick="if(confirm('Quit this practice test?'))renderTestStart()">✕ Quit</button></div>
    <div class="test-part"><h2>A. Vocabulary</h2><div class="part-note">Write the Korean word, then choose the meaning.</div>
      ${test.spell.map((v, i) => `<div class="test-item"><span class="num">${++n}.</span>${v.e} <span class="vocab-tag">${v.pos}</span> → ${inp('tS' + i, 'wide')}<span class="test-answer" id="tS${i}a"></span></div>`).join('')}
      ${test.mc.map((q, i) => `<div class="test-item test-mc"><span class="num">${++n}.</span>${q.q}<br>
        ${q.opts.map((o, j) => `<label><input type="radio" name="tM${i}" value="${j}"> ${o}</label>`).join('')}<span class="test-answer" id="tM${i}a"></span></div>`).join('')}
    </div>
    <div class="test-part"><h2>B. Fill in the blanks</h2><div class="part-note">Particles, copula, polite endings, vocabulary.</div>
      ${test.fills.map((q, i) => { const [b, a = ''] = q.sentence.split('___'); return `<div class="test-item"><span class="num">${++n}.</span>${b}${inp('tF' + i)}${a}<span class="test-answer" id="tF${i}a"></span></div>`; }).join('')}
    </div>
    <div class="test-part"><h2>C. Answering questions</h2><div class="part-note">Answer in a complete Korean sentence (or write the question that fits the answer).</div>
      ${test.answers.map((a, i) => `<div class="test-item"><span class="num">${++n}.</span>${answerPrompt(a)}${area('tC' + i)}<div id="tC${i}m"></div></div>`).join('')}
    </div>
    <div class="test-part"><h2>D. Short answer</h2>
      <div class="test-item"><span class="num">${++n}.</span>${test.short.q}${test.short.info ? `<span class="info">${test.short.info}</span>` : ''}${area('tD', 'tall')}<div id="tDm"></div></div>
    </div>
    <div style="text-align:center"><button class="btn btn-green" id="testSubmit" onclick="submitTest()">Submit &amp; check</button></div>
    <div id="testResult"></div>`;
  tickTest();
  test.timer = setInterval(tickTest, 1000);
  window.scrollTo(0, 0);
}
function tickTest() {
  if (!test || !$('testClock')) return;
  const left = Math.round((test.end - Date.now()) / 1000);
  const t = Math.abs(left);
  $('testClock').textContent = `${left < 0 ? '−' : ''}${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}${left < 0 ? ' (time’s up!)' : ''}`;
  $('testTimer').classList.toggle('over', left < 0);
}
function gradeInput(id, accepted, shown) {
  const el = $(id), ok = accepted.some(a => normalize(a) === normalize(el.value)) && normalize(el.value) !== '';
  el.readOnly = true;
  el.classList.add(ok ? 'correct' : 'wrong');
  $(id + 'a').className = 'test-answer ' + (ok ? 'ok' : 'no');
  $(id + 'a').textContent = ok ? '✓' : `✗ ${shown}`;
  return ok;
}
function submitTest() {
  if (test.submitted) return;
  test.submitted = true;
  clearInterval(test.timer);
  let auto = 0;
  test.spell.forEach((v, i) => { if (gradeInput('tS' + i, acceptedAnswers(v), v.k)) auto++; });
  test.mc.forEach((q, i) => {
    const picked = document.querySelector(`input[name="tM${i}"]:checked`);
    const ok = picked && +picked.value === q.ans;
    if (ok) auto++;
    document.querySelectorAll(`input[name="tM${i}"]`).forEach(r => { r.disabled = true; });
    $(`tM${i}a`).className = 'test-answer ' + (ok ? 'ok' : 'no');
    $(`tM${i}a`).textContent = ok ? '✓' : `✗ ${q.opts[q.ans]}`;
  });
  test.fills.forEach((q, i) => { if (gradeInput('tF' + i, answersOf(q), answersOf(q)[0])) auto++; });
  test.auto = auto;
  test.autoMax = test.spell.length + test.mc.length + test.fills.length;
  const selfMark = key => `<div class="self-mark"><button class="btn btn-outline btn-small" data-self="${key}" data-v="1" onclick="markSelf(this)">✓ Mine matches</button><button class="btn btn-outline btn-small" data-self="${key}" data-v="0" onclick="markSelf(this)">✗ Not quite</button></div>`;
  test.answers.forEach((a, i) => { $(`tC${i}`).readOnly = true; $(`tC${i}m`).innerHTML = modelBox(a) + selfMark('C' + i); });
  $('tD').readOnly = true;
  $('tDm').innerHTML = modelBox(test.short) + selfMark('D');
  $('testSubmit').style.display = 'none';
  updateTestScore();
  $('testResult').scrollIntoView({ behavior: 'smooth' });
}
function markSelf(btn) {
  test.self[btn.dataset.self] = +btn.dataset.v;
  btn.parentElement.querySelectorAll('.btn').forEach(b => b.classList.remove('on-ok', 'on-no'));
  btn.classList.add(+btn.dataset.v ? 'on-ok' : 'on-no');
  updateTestScore();
}
function updateTestScore() {
  const selfMax = test.answers.length + 1;
  const marked = Object.keys(test.self).length;
  const selfScore = Object.values(test.self).reduce((s, v) => s + v, 0);
  $('testResult').innerHTML = `<div class="quiz-score">
    <div class="score-line">Auto-graded (A–B): ${test.auto}/${test.autoMax}</div>
    <div class="score-line">Self-graded (C–D): ${selfScore}/${selfMax}${marked < selfMax ? ` <span style="font-weight:400;color:var(--muted)">(${selfMax - marked} left to mark)</span>` : ''}</div>
    <div class="flash-controls"><button class="btn btn-green" onclick="startTest()">New practice test</button><button class="btn btn-outline" onclick="renderTestStart()">Back</button></div>
  </div>`;
}

// One-at-a-time drill for free-response items (answer / shortAnswer), self-checked.
let drill = null;
function startDrill(key) { drill = { key, items: shuffle(pool(key)), idx: 0 }; renderDrill(); }
function renderDrill() {
  const el = $('testBody');
  if (drill.idx >= drill.items.length) {
    el.innerHTML = `<div class="quiz-score"><div class="score-big">✓</div><div style="color:var(--muted)">Done with all ${drill.items.length}!</div>
      <div class="flash-controls" style="margin-top:16px"><button class="btn btn-green" onclick="startDrill('${drill.key}')">Again (shuffled)</button><button class="btn btn-outline" onclick="renderTestStart()">Back</button></div></div>`;
    return;
  }
  const item = drill.items[drill.idx];
  const prompt = drill.key === 'answer' ? answerPrompt(item) : `${item.q}${item.info ? `<span class="info">${item.info}</span>` : ''}`;
  el.innerHTML = `
    <div class="meta">${drill.idx + 1} of ${drill.items.length} · Lesson ${item.lesson}</div>
    <div class="blank-q">
      <div class="blank-sentence" style="line-height:1.6">${prompt}</div>
      <textarea class="blank-input ${drill.key === 'shortAnswer' ? 'tall' : ''}" id="drillInp" lang="ko" spellcheck="false" placeholder="한국어로 쓰세요…"></textarea>
      <div style="margin-top:10px"><button class="check-btn" onclick="$('drillModel').innerHTML = modelBox(drill.items[drill.idx]); $('drillNext').style.display='inline-block'">👀 Show model answer</button></div>
      <div id="drillModel"></div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-outline btn-small" onclick="renderTestStart()">✕ Quit</button>
      <button class="btn btn-green" id="drillNext" style="display:none" onclick="drill.idx++; renderDrill()">Next →</button>
    </div>`;
  $('drillInp').focus();
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
  $('resetBtn').addEventListener('click', () => { flashOrder = flashCards.map((_, i) => i); flashIdx = 0; showFlash(); });
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
