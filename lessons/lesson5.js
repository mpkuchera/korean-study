// Lesson 5 · Conversation 1 — from the teacher's "Vocab 5-1" video (10/28). The textbook pages for Lesson 5
// aren't in the shared folder yet; check against the New Words box (and add Conversation 2) once they are.

// [place, English, things you do there] for the 에 / 에서 drill
const EESEO_PLACES = [
  ['도서관', 'the library', [['공부해요', 'study'], ['책을 읽어요', 'read a book']]],
  ['공원', 'the park', [['운동해요', 'exercise'], ['테니스를 쳐요', 'play tennis'], ['친구를 만나요', 'meet a friend']]],
  ['백화점', 'the department store', [['쇼핑해요', 'shop'], ['선물을 사요', 'buy a gift']]],
  ['커피숍', 'the coffee shop', [['커피를 마셔요', 'drink coffee'], ['친구를 만나요', 'meet a friend'], ['공부해요', 'study']]],
  ['랩', 'the lab', [['일해요', 'work'], ['공부해요', 'study']]],
  ['학교 식당', 'the school cafeteria', [['점심을 먹어요', 'eat lunch'], ['피자를 먹어요', 'eat pizza']]],
  ['집', 'home', [['일해요', 'work'], ['저녁을 먹어요', 'eat dinner'], ['전화해요', 'make a phone call']]],
];

addLesson({
  id: 5,
  title: '5과',
  english: 'Lesson 5',
  conversations: { 1: 'Vocab 5-1' },

  vocab: [
    { conv: 1, k: '또', e: 'again', pos: 'adverb' },
    { conv: 1, k: '에', e: 'to (a place); at, in, on (a time)', pos: 'particle', note: '학교에 가요 = I go to school · still: 집에 있어요' },
    { conv: 1, k: '에서', e: 'at, in (where an action happens)', pos: 'particle', note: '도서관에서 공부해요 · compare 도서관에 가요 / 있어요' },
    { conv: 1, k: '그런데 (근데)', e: 'by the way; but', pos: 'conjunction', note: '근데 = the spoken short form', accept: ['그런데', '근데'], syn: 'but' },
    { conv: 1, k: '그럼', e: 'then, in that case', pos: 'adverb' },
    { conv: 1, k: '가르치다 (가르쳐요)', e: 'to teach', pos: 'verb', note: '뭘 가르치세요? — 물리학을 가르쳐요.', accept: ['가르치다', '가르쳐요'] },
    { conv: 1, k: '사다 (사요)', e: 'to buy', pos: 'verb', accept: ['사다', '사요'] },
    { conv: 1, k: '치다 (쳐요)', e: 'to play (tennis, ping-pong, badminton); to hit', pos: 'verb', note: '테니스를 쳐요 · 이 + 어 → 여', accept: ['치다', '쳐요'] },
    { conv: 1, k: '테니스', e: 'tennis', pos: 'noun', note: '테니스를 치다' },
    { conv: 1, k: '탁구', e: 'table tennis, ping-pong', pos: 'noun', note: '탁구를 치다' },
    { conv: 1, k: '배드민턴', e: 'badminton', pos: 'noun', note: '배드민턴을 치다' },
    { conv: 1, k: '공원', e: 'park', pos: 'noun' },
    { conv: 1, k: '다음', e: 'next', pos: 'noun', note: '다음 주 = next week' },
    { conv: 1, k: '랩 (실험실, 연구실)', e: 'lab', pos: 'noun', note: '실험실 = (science) lab · 연구실 = research lab; a professor\'s office', accept: ['랩', '실험실', '연구실'] },
    { conv: 1, k: '백화점', e: 'department store', pos: 'noun' },
    { conv: 1, k: '생일 (생신)', e: 'birthday', pos: 'noun', note: '생신 = honorific (a parent\'s or teacher\'s birthday)', accept: ['생일'] },
    { conv: 1, k: '선물 (선물하다)', e: 'gift; to give a gift', pos: 'noun', accept: ['선물', '선물하다'] },
    { conv: 1, k: '쇼핑 (쇼핑하다)', e: 'shopping; to shop', pos: 'noun', accept: ['쇼핑', '쇼핑하다'] },
    { conv: 1, k: '연습 (연습하다)', e: 'practice; to practice', pos: 'noun', accept: ['연습', '연습하다'] },
    { conv: 1, k: '오래간만 (오랜만)', e: 'after a long time', pos: 'noun', note: '오래간만이에요! = Long time no see!', accept: ['오래간만', '오랜만'] },
    { conv: 1, k: '운동 (운동하다)', e: 'exercise; to exercise', pos: 'noun', accept: ['운동', '운동하다'] },
    { conv: 1, k: '일 (일하다)', e: 'work; to work', pos: 'noun', note: 'not the number 일 (one)', accept: ['일', '일하다'] },
    { conv: 1, k: '전화 (전화하다)', e: 'telephone; to call', pos: 'noun', accept: ['전화', '전화하다'] },
    { conv: 1, k: '아침', e: 'morning; breakfast', pos: 'noun' },
    { conv: 1, k: '점심', e: 'lunch; midday', pos: 'noun' },
    { conv: 1, k: '저녁', e: 'dinner; evening', pos: 'noun' },
    { conv: 1, k: '커피숍 (카페)', e: 'coffee shop, café', pos: 'noun', accept: ['커피숍', '카페'] },
    { conv: 1, k: '햄버거', e: 'hamburger', pos: 'noun' },
    { conv: 1, k: '피자', e: 'pizza', pos: 'noun' },
  ],

  // [dictionary, meaning, polite ~어요, formal ~습니다, honorific ~(으)세요] — formal/honorific only when the teacher or book uses them.
  conjugations: [
    ['가르치다', 'to teach', '가르쳐요|가르치어요', null, '가르치세요'],
    ['사다', 'to buy', '사요', null, null],
    ['치다', 'to play (tennis etc.)', '쳐요|치어요', null, null],
    ['선물하다', 'to give a gift', '선물해요', null, null],
    ['쇼핑하다', 'to shop', '쇼핑해요', null, null],
    ['연습하다', 'to practice', '연습해요', null, null],
    ['운동하다', 'to exercise', '운동해요', null, null],
    ['일하다', 'to work', '일해요', null, null],
    ['전화하다', 'to call', '전화해요', null, null],
  ],

  quiz: [],
  fill: [],

  generators: [
    {
      type: 'e-eseo', label: '에 vs. 에서',
      mc: () => {
        const r = Math.random();
        if (r < 0.55) {
          const [p, en, acts] = pick(EESEO_PLACES), [act, actEn] = pick(acts);
          return mcq(`“I ${actEn} at ${en}.”`, `저는 ${p}에서 ${act}.`,
            [`저는 ${p}에 ${act}.`, act !== '쇼핑해요' && `저는 ${josa(p, '을', '를')} ${act}.`, `저는 ${josa(p, '이', '가')} ${act}.`], // 백화점을 쇼핑해요 can pass in speech
            `Doing something at a place → 에서 (${p}에서 ${act})`);
        }
        const [p, en] = pick(EESEO_PLACES), go = r < 0.8;
        // (도서관을 가요 is fine in speech and 도서관이 있어요 = "I have a library", so neither is used as a wrong answer)
        return mcq(go ? `“I go ${en === 'home' ? 'home' : 'to ' + en}.”` : `“I'm at ${en}.”`, `저는 ${p}에 ${go ? '가요' : '있어요'}.`,
          go ? [`저는 ${p}에서 가요.`, `저는 ${josa(p, '이', '가')} 가요.`, `저는 ${p}에 가세요.`] : [`저는 ${p}에서 있어요.`, `저는 ${josa(p, '을', '를')} 있어요.`, `저는 ${p}에 이에요.`],
          go ? 'Going to a place → 에 (destination)' : 'Being somewhere (있어요) → 에, not 에서');
      },
      typed: () => {
        if (Math.random() < 0.55) {
          const [p, en, acts] = pick(EESEO_PLACES), [act, actEn] = pick(acts);
          return { sentence: `${p}___ ${act}. (“I ${actEn} at ${en}.”)`, blank: '에서', hint: 'an action happens there' };
        }
        const [p, en] = pick(EESEO_PLACES);
        return { sentence: `${p}___ 가요. (“I go ${en === 'home' ? 'home' : 'to ' + en}.”)`, blank: '에', hint: 'destination' };
      },
    },
  ],

  grammar: [
    {
      id: 'G5.에', tag: 'Lesson 5', title: '<em>에</em> vs. <em>에서</em>',
      html: `<div class="grammar-body"><span class="ko">에</span> = <strong>to</strong> a place (가요, 와요) or <strong>at</strong> a place where something just <em>is</em> (있어요, 없어요, 계세요) · also at a time (아침에).<br>
        <span class="ko">에서</span> = <strong>at/in</strong> the place where you <em>do</em> something (공부해요, 일해요, 운동해요, 먹어요…).</div>
        <div class="example-box">
          <p>도서관<b>에</b> 가요. — I go to the library.</p>
          <p>도서관<b>에</b> 있어요. — I'm at the library.</p>
          <p>도서관<b>에서</b> 공부해요. — I study at the library.</p>
          <p>공원<b>에서</b> 테니스를 쳐요. — I play tennis in the park.</p>
        </div>`,
    },
  ],

  reference: [],
});
