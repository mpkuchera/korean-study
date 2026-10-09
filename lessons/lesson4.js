// Lesson 4 · 집 (At Home) — textbook pp. 115–139. Conversation 1 (pp. 116–125) added; Conversation 2 to come.

// For generated counting questions: [noun, English singular, English plural, counter, max count]
const COUNTABLES = [
  ['책', 'book', 'books', '권', 12], ['사전', 'dictionary', 'dictionaries', '권', 6], ['교과서', 'textbook', 'textbooks', '권', 6],
  ['가방', 'bag', 'bags', '개', 6], ['의자', 'chair', 'chairs', '개', 12], ['시계', 'watch', 'watches', '개', 5],
  ['우산', 'umbrella', 'umbrellas', '개', 5], ['컴퓨터', 'computer', 'computers', '개', 4], ['책상', 'desk', 'desks', '개', 12],
  ['개', 'dog', 'dogs', '마리', 4],
  ['친구', 'friend', 'friends', '명', 19], ['학생', 'student', 'students', '명', 19], ['동생', 'younger sibling', 'younger siblings', '명', 3],
  ['남동생', 'younger brother', 'younger brothers', '명', 3], ['여동생', 'younger sister', 'younger sisters', '명', 3],
];
const NATIVE_FULL_ONES = ['', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉'];
const nativeFull = n => n === 20 ? '스물' : NATIVE_TENS[Math.floor(n / 10)] + NATIVE_FULL_ONES[n % 10]; // counting aloud, no counter
const RESPECTED = [['아버지', 'My father', 'is'], ['어머니', 'My mother', 'is'], ['부모님', 'My parents', 'are'], ['선생님', 'The teacher', 'is']];
const NOT_RESPECTED = [['동생', 'My younger sibling', 'is'], ['남동생', 'My younger brother', 'is'], ['여동생', 'My younger sister', 'is'], ['친구', 'My friend', 'is']];
const PLACES_L4 = [['보스턴', 'Boston'], ['홍콩', 'Hong Kong'], ['한국', 'Korea'], ['미국', 'the US'], ['중국', 'China'], ['일본', 'Japan'], ['집', 'home'], ['학교', 'school']];

addLesson({
  id: 4,
  title: '집',
  english: 'At Home',
  conversations: { 1: '동생이 두 명 있어요.' },

  // New Words (p. 117)
  vocab: [
    { conv: 1, k: '개', e: 'dog', pos: 'noun' },
    { conv: 1, k: '고등학생', e: 'high school student', pos: 'noun', note: '고등학교 = high school' },
    { conv: 1, k: '남동생', e: 'younger brother', pos: 'noun' },
    { conv: 1, k: '대학원생', e: 'graduate student', pos: 'noun', note: '대학원 = graduate school' },
    { conv: 1, k: '동생', e: 'younger sibling', pos: 'noun', note: 'brother or sister' },
    { conv: 1, k: '보스턴', e: 'Boston', pos: 'noun' },
    { conv: 1, k: '부모님', e: 'parents', pos: 'noun' },
    { conv: 1, k: '아버지', e: 'father', pos: 'noun' },
    { conv: 1, k: '어머니', e: 'mother', pos: 'noun' },
    { conv: 1, k: '여동생', e: 'younger sister', pos: 'noun' },
    { conv: 1, k: '오빠', e: 'older brother (of a female)', pos: 'noun', note: 'what a woman calls her older brother' },
    { conv: 1, k: '형', e: 'older brother (of a male)', pos: 'noun', note: 'what a man calls his older brother' },
    { conv: 1, k: '홍콩', e: 'Hong Kong', pos: 'noun' },
    { conv: 1, k: '한', e: 'one (before a counter)', pos: 'number', note: '하나 → 한 명, 한 개' },
    { conv: 1, k: '두', e: 'two (before a counter)', pos: 'number', note: '둘 → 두 명' },
    { conv: 1, k: '세', e: 'three (before a counter)', pos: 'number', note: '셋 → 세 권' },
    { conv: 1, k: '스무', e: 'twenty (before a counter)', pos: 'number', note: '스물 → 스무 명' },
    { conv: 1, k: '개 (counter)', e: 'item (counter)', pos: 'counter', note: '가방 두 개', accept: ['개'] },
    { conv: 1, k: '권', e: 'volume (counter for books)', pos: 'counter', note: '책 세 권' },
    { conv: 1, k: '년', e: 'year', pos: 'counter', note: 'Sino-Korean: 일 년, 이 년' },
    { conv: 1, k: '달', e: 'month (duration)', pos: 'counter', note: 'native: 한 달, 두 달' },
    { conv: 1, k: '달러 (=불)', e: 'dollar', pos: 'counter' },
    { conv: 1, k: '마리', e: 'animal (counter)', pos: 'counter', note: '개 한 마리 = one dog' },
    { conv: 1, k: '명 (=사람)', e: 'people (counter)', pos: 'counter', note: '두 명 = two people' },
    { conv: 1, k: '시간', e: 'hour (duration)', pos: 'counter', note: 'native: 두 시간' },
    { conv: 1, k: '원', e: 'won (Korean currency)', pos: 'counter', note: '천 원 (₩)' },
    { conv: 1, k: '월', e: 'month (in dates)', pos: 'counter', note: '일월 = January' },
    { conv: 1, k: '일', e: 'day (in dates)', pos: 'counter', note: '삼월 일일 = March 1st' },
    { conv: 1, k: '몇', e: 'how many, what (with a counter)', pos: 'pre-noun', note: '몇 명? 몇 층?' },
    { conv: 1, k: '계시다 (계세요)', e: 'to stay, to be (existence) — honorific', pos: 'verb', note: 'honorific 있다 for respected people' },
    { conv: 1, k: '하고', e: 'and (with nouns)', pos: 'particle', note: '아버지하고 어머니' },
  ],

  quiz: [
    { q: '계세요 is the honorific form of:', opts: ['있어요 (to be somewhere)', '이에요 (to be [N])', '있어요 (to have)', '해요 (to do)'], ans: 0, why: 'Existence: 있어요 → 계세요 · possession: 있어요 → 있으세요 · copula: 이에요 → 이세요' },
    { q: '부모님은 어디 계세요? means:', opts: ['Where are your parents?', 'Do you have parents?', 'Who are your parents?', 'How are your parents?'], ans: 0 },
    { q: '“Professor Lee is at home.”', opts: ['이민수 선생님은 집에 계세요.', '이민수 선생님은 집에 있으세요.', '이민수 선생님은 집이세요.', '이민수 선생님은 집에 있어요요.'], ans: 0, why: 'A respected person being somewhere → 계세요' },
    { q: '“Professor Lee has a younger sibling.”', opts: ['이민수 선생님은 동생이 있으세요.', '이민수 선생님은 동생이 계세요.', '이민수 선생님은 동생이세요.', '이민수 선생님은 동생에 계세요.'], ans: 0, why: 'Having (possession) → 있으세요' },
    { q: 'Sophia (female) talks about her older brother. She calls him:', opts: ['오빠', '형', '남동생', '누나'], ans: 0 },
    { q: 'Steve (male) talks about his older brother. He calls him:', opts: ['형', '오빠', '남동생', '언니'], ans: 0 },
    { q: '동생 means:', opts: ['a younger brother or sister', 'only a younger brother', 'only a younger sister', 'an older sibling'], ans: 0, why: '남동생 = younger brother · 여동생 = younger sister' },
    { q: '하나 + 명 becomes:', opts: ['한 명', '하나 명', '일 명', '한나 명'], ans: 0, why: '하나→한, 둘→두, 셋→세, 넷→네, 스물→스무 before a counter' },
    { q: '20 people:', opts: ['스무 명', '스물 명', '이십 명만', '두십 명'], ans: 0 },
    { q: '5층 and 5명 are read:', opts: ['오 층 · 다섯 명', '다섯 층 · 오 명', '오 층 · 오 명', '다섯 층 · 다섯 명'], ans: 0, why: 'Identifying (floor) → Sino-Korean · counting (people) → native Korean' },
    { q: '삼 과 vs. 세 과:', opts: ['Lesson 3 vs. three lessons', 'three lessons vs. Lesson 3', 'both mean Lesson 3', 'both mean three lessons'], ans: 0 },
    { q: '“Yumi has two older brothers.”', opts: ['유미는 오빠가 두 명 있어요.', '유미는 두 명 오빠가 있어요.', '유미는 오빠가 둘 명 있어요.', '유미는 오빠가 이 명 있어요.'], ans: 0, why: 'Order: noun + particle + number + counter + 있어요' },
    { q: 'A: 남동생이에요, 여동생이에요?  (It\'s a younger sister.)  B:', opts: ['여동생이에요.', '네, 여동생이에요.', '아니요, 남동생이에요.', '남동생이 아니에요.'], ans: 0, why: 'Either-or questions are answered with the choice — no 네/아니요.' },
    { q: '“father and mother”', opts: ['아버지하고 어머니', '아버지 그리고 어머니', '아버지도 어머니', '아버지가 어머니'], ans: 0, why: '하고 joins nouns · 그리고 joins sentences' },
    { q: '동생이 몇 명 있어요? asks:', opts: ['How many younger siblings do you have?', 'Where is your younger sibling?', 'Who is your younger sibling?', 'Is your sibling a student?'], ans: 0 },
    { q: '오빠는 대학원생이에요. means:', opts: ['My older brother is a graduate student.', 'My older brother is a high school student.', 'My younger brother is a college student.', 'My older brother is in graduate school in Boston.'], ans: 0 },
  ],

  fill: [
    { sentence: '아버지하고 어머니가 보스턴에 ___. (are — honorific)', blank: '계세요', hint: 'honorific of 있어요 (existence)', type: 'Honorific' },
    { sentence: '소피아 씨 부모님은 어디 ___? (are — honorific)', blank: '계세요', hint: 'honorific of 있어요 (existence)', type: 'Honorific' },
    { sentence: '오빠___ 동생도 홍콩에 있어요. (and)', blank: '하고', hint: 'and — joins nouns', type: 'Particle' },
    { sentence: '남동생이 ___ 명 있어요. (2)', blank: '두', hint: '둘 → ? before a counter', type: 'Counting' },
    { sentence: '책이 ___ 권 있어요. (3)', blank: '세', hint: '셋 → ? before a counter', type: 'Counting' },
    { sentence: '형이 ___ 명 있어요. (1)', blank: '한', hint: '하나 → ? before a counter', type: 'Counting' },
    { sentence: '교실에 학생이 ___ 명 있어요. (20)', blank: '스무', hint: '스물 → ? before a counter', type: 'Counting' },
    { sentence: '가방이 두 ___ 있어요. (items)', blank: '개', hint: 'counter for things', type: 'Counter' },
    { sentence: '책이 다섯 ___ 있어요. (books)', blank: '권', hint: 'counter for volumes', type: 'Counter' },
    { sentence: '개가 한 ___ 있어요. (animals)', blank: '마리', hint: 'counter for animals', type: 'Counter' },
    { sentence: '동생이 ___ 명 있어요? (how many)', blank: '몇', hint: 'how many', type: 'Vocab' },
    { sentence: '남동생이에요, 여동생___? (either-or question)', blank: '이에요', hint: 'Repeat the same ending for each choice', type: 'Grammar' },
    { sentence: '스티브: ___이 한 명 있어요. (older brother)', blank: '형', hint: 'Steve is male', type: 'Vocab' },
    { sentence: '소피아: ___가 한 명 있어요. (older brother)', blank: '오빠', hint: 'Sophia is female', type: 'Vocab' },
    { sentence: '오빠는 ___이에요. (graduate student)', blank: '대학원생', hint: 'graduate school = 대학원', type: 'Vocab' },
    { sentence: '동생은 지금 ___이에요. (high school student)', blank: '고등학생', hint: 'high school = 고등학교', type: 'Vocab' },
  ],

  generators: [
    {
      type: 'count', label: 'Counting with native numbers + counters',
      mc: () => {
        const [w, sg, pl, c, max] = pick(COUNTABLES), n = randInt(1, max), en = n === 1 ? `one ${sg}` : `${n} ${pl}`;
        const subj = josa(w, '이', '가'), otherCounter = pick(['명', '개', '권', '마리'].filter(x => x !== c));
        return mcq(`“I have ${en}.”`, `${subj} ${nativeCounting(n)} ${c} 있어요.`,
          [`${subj} ${sino(n)} ${c} 있어요.`, `${subj} ${nativeFull(n)} ${c} 있어요.`, `${subj} ${nativeCounting(n)} ${otherCounter} 있어요.`, `${josa(w, '을', '를')} ${nativeCounting(n)} ${c} 있어요.`],
          `Counting → native Korean (short form before a counter: ${nativeCounting(n)}); ${w} takes ${c}.`);
      },
      typed: () => {
        const [w, sg, pl, c, max] = pick(COUNTABLES), n = randInt(1, max), en = n === 1 ? `one ${sg}` : `${n} ${pl}`;
        return Math.random() < 0.6
          ? { sentence: `${josa(w, '이', '가')} ___ ${c} 있어요. (“I have ${en}.”)`, blank: nativeCounting(n), hint: 'Native Korean number, short form before a counter (한, 두, 세, 네, 스무)', why: `${n} → ${nativeCounting(n)} ${c}` }
          : { sentence: `${josa(w, '이', '가')} ${nativeCounting(n)} ___ 있어요. (“I have ${en}.”)`, blank: c === '명' ? ['명', '사람'] : c, hint: 'people 명 · things 개 · books 권 · animals 마리' };
      },
    },
    {
      type: 'which-numbers', label: 'Native or Sino-Korean?',
      mc: () => {
        const native = [['명', n => `${n} ${n > 1 ? 'people' : 'person'}`], ['개', n => `${n} item${n > 1 ? 's' : ''}`], ['권', n => `${n} book${n > 1 ? 's' : ''}`],
          ['마리', n => `${n} animal${n > 1 ? 's' : ''}`], ['시간', n => `${n} hour${n > 1 ? 's' : ''}`], ['달', n => `${n} month${n > 1 ? 's' : ''}`], ['과', n => `${n} lesson${n > 1 ? 's' : ''} (how many)`]];
        const sinoC = [['층', n => `floor ${n}`], ['과', n => `Lesson ${n}`], ['원', n => `${n} won`], ['년', n => `${n} year${n > 1 ? 's' : ''}`], ['학년', n => `year ${n} in school`]];
        const useNative = Math.random() < 0.5, [c, desc] = pick(useNative ? native : sinoC), n = randInt(1, c === '학년' ? 4 : 10);
        const nat = `${nativeCounting(n)} ${c}`, sin = `${sino(n)} ${c}`;
        return mcq(`<strong>${desc(n)}</strong> — how do you say it?`, useNative ? nat : sin,
          [useNative ? sin : nat, `${nativeFull(n)} ${c}`, `${useNative ? nativeCounting(n % 9 + 1) : sino(n % 9 + 1)} ${c}`, `${useNative ? sino(n % 9 + 1) : nativeCounting(n % 9 + 1)} ${c}`],
          useNative ? `Counting ${c === '과' ? 'lessons' : 'things'} → native Korean` : 'Identifying (floor, lesson number, money, years, school year) → Sino-Korean');
      },
      typed: () => {
        const opts = [['명', true, 'people'], ['개', true, 'items'], ['권', true, 'books'], ['마리', true, 'animals'], ['시간', true, 'hours'], ['층', false, 'floor'], ['원', false, 'won'], ['과', false, 'Lesson #']];
        const [c, isNative, desc] = pick(opts), n = randInt(1, 10);
        return { sentence: `${n}${c} (${desc}) → ___ ${c}`, blank: isNative ? nativeCounting(n) : sino(n), hint: isNative ? 'counting → native Korean (한, 두, 세…)' : 'identifying → Sino-Korean (일, 이, 삼…)' };
      },
    },
    {
      type: 'gyeseyo', label: '계세요 vs. 있어요',
      mc: () => {
        const respected = Math.random() < 0.55, [p, en, be] = pick(respected ? RESPECTED : NOT_RESPECTED), [pl, ple] = pick(PLACES_L4);
        const s = `${josa(p, '이', '가')} ${pl}에`;
        return mcq(`“${en} ${be} ${pl === '집' ? 'at home' : pl === '학교' ? 'at school' : 'in ' + ple}.”`, `${s} ${respected ? '계세요' : '있어요'}.`,
          [`${s} ${respected ? '있어요' : '계세요'}.`, `${s} 있으세요.`, `${josa(p, '이', '가')} ${josa(pl, '을', '를')} ${respected ? '계세요' : '있어요'}.`],
          respected ? `${p} is someone you respect → 계세요 (honorific 있어요)` : `${p} is family younger than you / a friend → plain 있어요`);
      },
      typed: () => {
        const respected = Math.random() < 0.55, [p, en, be] = pick(respected ? RESPECTED : NOT_RESPECTED), [pl, ple] = pick(PLACES_L4);
        return { sentence: `${josa(p, '이', '가')} ${pl}에 ___. (“${en} ${be} ${pl === '집' ? 'at home' : pl === '학교' ? 'at school' : 'in ' + ple}.”)`, blank: respected ? '계세요' : '있어요', hint: 'Respected person (parents, teacher) → honorific', wide: true };
      },
    },
    {
      type: 'either-or', label: 'Either-or questions',
      mc: () => {
        const [name, eng] = pick(CAST), r = Math.random();
        if (r < 0.5) {
          const cs = shuffle([['한국', 'Korean'], ['중국', 'Chinese'], ['일본', 'Japanese'], ['미국', 'American'], ['영국', 'British']]).slice(0, 2), actual = pick(cs), other = cs.find(c => c !== actual);
          return mcq(`(${eng} is ${actual[1]}.) A: ${name} 씨는 ${cs[0][0]} 사람이에요, ${cs[1][0]} 사람이에요? &nbsp;B: ___`, `${actual[0]} 사람이에요.`,
            [`네, ${actual[0]} 사람이에요.`, `아니요, ${other[0]} 사람이에요.`, `${other[0]} 사람이에요.`], 'Answer an either-or question with the choice itself — no 네/아니요.');
        }
        if (r < 0.75) {
          const sis = Math.random() < 0.5, a = sis ? '여동생' : '남동생';
          return mcq(`(${eng} has a younger ${sis ? 'sister' : 'brother'}.) A: 남동생이에요, 여동생이에요? &nbsp;B: ___`, `${a}이에요.`,
            [`네, ${a}이에요.`, `아니요, ${sis ? '남동생' : '여동생'}이에요.`, `${sis ? '남동생' : '여동생'}이 아니에요.`], 'Answer with the choice — no 네/아니요.');
        }
        const has = Math.random() < 0.5;
        return mcq(`(${eng} ${has ? 'has' : 'doesn\'t have'} a younger sibling.) A: 동생이 있어요, 없어요? &nbsp;B: ___`, has ? '있어요.' : '없어요.',
          [has ? '네, 없어요.' : '네, 있어요.', has ? '동생이에요.' : '동생이 아니에요.', has ? '없어요.' : '있어요.'], 'Answer with the choice — 있어요 or 없어요.');
      },
    },
    {
      type: 'family', label: 'Family words (형 / 오빠 / 동생)',
      mc: () => {
        const [name, eng, male] = pick([['스티브', 'Steve', true], ['마이클', 'Michael', true], ['소피아', 'Sophia', false], ['리사', 'Lisa', false], ['유미', 'Yumi', false]]);
        const rel = pick([['older brother', male ? '형' : '오빠'], ['younger brother', '남동생'], ['younger sister', '여동생'], ['parents', '부모님'], ['father', '아버지'], ['mother', '어머니']]);
        return mcq(`${eng} (${male ? 'male' : 'female'}) talks about ${male ? 'his' : 'her'} <strong>${rel[0]}</strong>:`, rel[1],
          // 동생 also covers younger brother/sister, so it can't be a wrong answer for those
          ['형', '오빠', '남동생', '여동생', '동생', '부모님', '아버지', '어머니'].filter(x => x !== rel[1] && !(x === '동생' && rel[1].endsWith('동생'))),
          rel[0] === 'older brother' ? `A ${male ? 'man says 형' : 'woman says 오빠'} for an older brother.` : '');
      },
    },
    {
      type: 'hago', label: '하고 (and) with nouns',
      mc: () => {
        const sets = [[['책', 'a book'], ['사전', 'a dictionary'], ['교과서', 'a textbook'], ['가방', 'a bag'], ['우산', 'an umbrella'], ['시계', 'a watch'], ['컴퓨터', 'a computer']],
          [['남동생', 'a younger brother'], ['여동생', 'a younger sister'], ['형', 'an older brother'], ['친구', 'a friend']]];
        const [[a, ae], [b, be]] = shuffle(pick(sets).slice()).slice(0, 2);
        return mcq(`“I have ${ae} and ${be}.”`, `${a}하고 ${josa(b, '이', '가')} 있어요.`,
          [`${a} 그리고 ${josa(b, '이', '가')} 있어요.`, `${a}도 ${josa(b, '이', '가')} 있어요.`, `${a}하고 ${josa(b, '을', '를')} 있어요.`],
          '하고 joins nouns (그리고 joins sentences).');
      },
    },
  ],

  grammar: [
    {
      id: 'G4.1', tag: 'Lesson 4', title: 'Either-or questions: <em>A이에요, B이에요?</em>',
      html: `<div class="grammar-body">Offer two choices by repeating the predicate. Answer with the choice — <strong>not</strong> 네/아니요.</div>
        <div class="example-box">
          <p>스티브: 소피아는 <b>일본 사람이에요, 중국 사람이에요?</b> — 유미: 중국 사람이에요.</p>
          <p>마이클: 동생이 <b>있어요, 없어요?</b> — 소피아: 남동생이 있어요.</p>
          <p>스티브: <b>남동생이에요, 여동생이에요?</b> — 소피아: 여동생이에요.</p>
        </div>`,
    },
    {
      id: 'G4.2', tag: 'Lesson 4', title: 'Two number systems: Sino-Korean and native Korean',
      html: `<div class="grammar-body"><strong>Counting</strong> things/people → native Korean · <strong>identifying</strong> (floor, lesson #, money, year, phone) → Sino-Korean.<br>
        Five native numbers shorten before a counter: 하나→<b>한</b>, 둘→<b>두</b>, 셋→<b>세</b>, 넷→<b>네</b>, 스물→<b>스무</b> (but 스물한, 스물두…).<br>
        100 and up are Sino-Korean only: 백, 천, 만 (10,000).</div>
        <table class="rule-table">
          <tr><th>#</th><th>Sino</th><th>Native</th><th>Before a counter</th></tr>
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 30].map(n => `<tr><td>${n}</td><td>${sino(n)}</td><td>${nativeFull(n)}</td><td>${nativeCounting(n)}</td></tr>`).join('')}
        </table>
        <div class="example-box">
          <p>일 달러는 천 원이에요. — One dollar is 1,000 won.</p>
          <p>5층 = <b>오</b> 층 (which floor) · 5명 = <b>다섯</b> 명 (how many people)</p>
        </div>`,
    },
    {
      id: 'G4.3', tag: 'Lesson 4', title: 'Counters: noun + particle + number + counter',
      html: `<div class="grammar-body">Word order: <strong>noun + 이/가 + number + counter + 있어요</strong>. Ask “how many?” with <span class="ko">몇</span> + counter.</div>
        <table class="rule-table">
          <tr><th>With native numbers</th><th>With Sino-Korean numbers</th></tr>
          <tr><td>명/사람 people · 한 명, 두 명</td><td>층 floor · 일 층, 이 층</td></tr>
          <tr><td>마리 animals · 한 마리</td><td>과 lesson number · 삼 과 (Lesson 3)</td></tr>
          <tr><td>개 items · 두 개</td><td>원 won · 천 원</td></tr>
          <tr><td>권 volumes · 세 권</td><td>학년 school year · 일 학년</td></tr>
          <tr><td>과 lessons (how many) · 세 과</td><td>년 year · 일 년</td></tr>
          <tr><td>시간 hours · 두 시간</td><td>월 month (date) · 일월</td></tr>
          <tr><td>달 months · 한 달</td><td>일 day (date) · 일일</td></tr>
        </table>
        <div class="example-box">
          <p>유미는 오빠<b>가 두 명</b> 있어요. · 가방<b>이 세 개</b> 있어요.</p>
          <p>교실에 의자가 <b>여덟 개</b> 있어요. · 제니는 책이 <b>다섯 권</b> 있어요.</p>
          <p>A: 한국어 교실이 <b>몇 층</b>에 있어요? — B: 2층에 있어요. A: 학생이 많아요? — B: <b>스무 명</b>이에요.</p>
        </div>
        <div class="grammar-body" style="margin-top:8px">몇 + 일 → <b>며칠</b> (what date) · for prices use <b>얼마</b> (how much), not 몇 원.</div>`,
    },
    {
      id: '', tag: 'Lesson 4 · Expressions', title: '계시다, 하고, and family words',
      html: `<div class="grammar-body"><span class="ko">계시다 (계세요)</span> = honorific <strong>있다 for existence</strong> — a respected person (parent, teacher) being somewhere.</div>
        <table class="rule-table">
          <tr><th></th><th>Plain</th><th>Honorific</th></tr>
          <tr><td>is [N]</td><td>학생이에요</td><td>선생님이세요</td></tr>
          <tr><td>is (somewhere)</td><td>리사는 집에 있어요</td><td>선생님은 집에 <b>계세요</b></td></tr>
          <tr><td>has</td><td>리사는 동생이 있어요</td><td>선생님은 동생이 <b>있으세요</b></td></tr>
        </table>
        <div class="grammar-body" style="margin-top:10px"><span class="ko">하고</span> = “and” between <strong>nouns</strong> (아버지하고 어머니) · <span class="ko">그리고</span> joins <strong>sentences</strong>.</div>
        <table class="rule-table">
          <tr><th></th><th>A man says</th><th>A woman says</th></tr>
          <tr><td>older brother</td><td>형</td><td>오빠</td></tr>
          <tr><td>older sister</td><td>누나</td><td>언니</td></tr>
          <tr><td>younger brother / sister</td><td colspan="2">남동생 / 여동생 (both: 동생)</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:10px">School levels: 초등학생 (elementary) · 중학생 (middle) · 고등학생 (high school) · 대학생 (college) · <b>대학원생</b> (graduate)</div>`,
    },
  ],

  reference: [
    {
      title: 'Native Korean numbers (tap 🔊 to hear the counting form)',
      html: `<div class="vocab-grid">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20].map(n => `<div class="num-card"><span class="num-digit">${n}</span>
        <span class="num-ko">${nativeFull(n)}</span><span class="num-rom reveal-on-tap" onclick="this.classList.toggle('shown')">${nativeCounting(n)} 명</span>${speakBtn(nativeCounting(n) + ' 명')}</div>`).join('')}</div>`,
    },
  ],
});
