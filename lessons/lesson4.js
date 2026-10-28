// Lesson 4 · 집 (At Home) — textbook pp. 115–139

// For generated counting questions: [noun, English singular, English plural, counter, max count]
const COUNTABLES = [
  ['책', 'book', 'books', '권', 12], ['사전', 'dictionary', 'dictionaries', '권', 6], ['교과서', 'textbook', 'textbooks', '권', 6],
  ['가방', 'bag', 'bags', '개', 6], ['의자', 'chair', 'chairs', '개', 12], ['시계', 'watch', 'watches', '개', 5],
  ['우산', 'umbrella', 'umbrellas', '개', 5], ['컴퓨터', 'computer', 'computers', '개', 4], ['책상', 'desk', 'desks', '개', 12],
  ['개', 'dog', 'dogs', '마리', 4],
  ['친구', 'friend', 'friends', '명', 10], ['학생', 'student', 'students', '명', 10], // larger counts of people can also take Sino numbers (20명 = 이십 명, p. 123) ['동생', 'younger sibling', 'younger siblings', '명', 3],
  ['남동생', 'younger brother', 'younger brothers', '명', 3], ['여동생', 'younger sister', 'younger sisters', '명', 3],
];
const NATIVE_SHORT = { 하나: '한 명', 둘: '두 명', 셋: '세 명', 넷: '네 명', 스물: '스무 명' };
const NATIVE_FULL_ONES = ['', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉'];
const nativeFull = n => n === 20 ? '스물' : NATIVE_TENS[Math.floor(n / 10)] + NATIVE_FULL_ONES[n % 10]; // counting aloud, no counter
const RESPECTED = [['아버지', 'My father', 'is'], ['어머니', 'My mother', 'is'], ['부모님', 'My parents', 'are'], ['선생님', 'The teacher', 'is']];
const NOT_RESPECTED = [['동생', 'My younger sibling', 'is'], ['남동생', 'My younger brother', 'is'], ['여동생', 'My younger sister', 'is'], ['친구', 'My friend', 'is']];
const PLACES_L4 = [['보스턴', 'Boston'], ['홍콩', 'Hong Kong'], ['한국', 'Korea'], ['미국', 'the US'], ['중국', 'China'], ['일본', 'Japan'], ['집', 'home'], ['학교', 'school']];

// Counters from p. 123: which number system each takes, for the drill and the reference card.
// [counter, native?, what it counts, example, description(n) for the drill, number range]
const COUNTER_DRILL = [
  ['명', true, 'people', '한 명, 두 명', n => `${n} ${n > 1 ? 'people' : 'person'}`, 1, 10],
  ['마리', true, 'animals', '개 한 마리', n => `${n} animal${n > 1 ? 's' : ''}`, 1, 10],
  ['개', true, 'items', '가방 두 개', n => `${n} item${n > 1 ? 's' : ''}`, 1, 10],
  ['권', true, 'books (volumes)', '책 세 권', n => `${n} book${n > 1 ? 's' : ''}`, 1, 10],
  ['과', true, 'lessons — how many', '세 과 = three lessons', n => `${n} lesson${n > 1 ? 's' : ''} (how many)`, 1, 10],
  ['시간', true, 'hours — how long', '두 시간', n => `${n} hour${n > 1 ? 's' : ''}`, 1, 10],
  ['달', true, 'months — how long', '한 달', n => `${n} month${n > 1 ? 's' : ''} (how long)`, 1, 10],
  ['층', false, 'floor', '삼 층 = 3rd floor', n => `floor ${n}`, 1, 10],
  ['과', false, 'lesson number', '삼 과 = Lesson 3', n => `Lesson ${n}`, 1, 10],
  ['원', false, 'won', '천 원', n => `${n} won`, 1, 10],
  ['달러', false, 'dollars', '오 달러', n => `${n} dollar${n > 1 ? 's' : ''}`, 1, 10],
  ['학년', false, 'school year', '일 학년', n => `year ${n} in school`, 1, 4],
  ['년', false, 'years', '이 년', n => `${n} year${n > 1 ? 's' : ''}`, 1, 10],
  ['월', false, 'month in a date', '일월 = January', n => ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n], 1, 12],
  ['일', false, 'day in a date', '일일 = the 1st', n => `the ${n}${n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th'} (day of the month)`, 1, 31],
].map(([c, native, what, ex, desc, lo, hi]) => ({ c, native, what, ex, desc, lo, hi }));
const monthOrSino = (c, n) => c.c === '월' && n === 6 ? '유' : c.c === '월' && n === 10 ? '시' : sino(n); // 유월, 시월
const counterReading = (c, n) => c.native ? `${nativeCounting(n)} ${c.c}` : c.c === '월' ? `${monthOrSino(c, n)}월` : `${sino(n)} ${c.c}`;

addLesson({
  id: 4,
  title: '집',
  english: 'At Home',
  conversations: { 1: '동생이 두 명 있어요.', 2: '누구 방이에요?' },

  // New Words (p. 117)
  vocab: [
    { conv: 1, k: '개', e: 'dog', pos: 'noun', syn: 'dog' },
    { conv: 1, k: '고등학생', e: 'high school student', pos: 'noun', note: '고등학교 = high school' },
    { conv: 1, k: '남동생', e: 'younger brother', pos: 'noun' },
    { conv: 1, k: '대학원생', e: 'graduate student', pos: 'noun', note: '대학원 = graduate school' },
    { conv: 1, k: '동생', e: 'younger sibling', pos: 'noun', note: 'brother or sister' },
    { conv: 1, k: '보스턴', e: 'Boston', pos: 'noun' },
    { conv: 1, k: '부모님', e: 'parents', pos: 'noun' },
    { conv: 1, k: '아버지', e: 'father', pos: 'noun', syn: 'father' },
    { conv: 1, k: '어머니', e: 'mother', pos: 'noun', syn: 'mother' },
    { conv: 1, k: '여동생', e: 'younger sister', pos: 'noun' },
    { conv: 1, k: '오빠', e: 'older brother (of a female)', pos: 'noun', note: 'what a woman calls her older brother' },
    { conv: 1, k: '형', e: 'older brother (of a male)', pos: 'noun', note: 'what a man calls his older brother' },
    { conv: 1, k: '홍콩', e: 'Hong Kong', pos: 'noun' },
    { conv: 1, k: '한', e: 'one (before a counter)', pos: 'number', note: '하나 → 한 명, 한 개' },
    { conv: 1, k: '두', e: 'two (before a counter)', pos: 'number', note: '둘 → 두 명' },
    { conv: 1, k: '세', e: 'three (before a counter)', pos: 'number', note: '셋 → 세 권' },
    { conv: 1, k: '스무', e: 'twenty (before a counter)', pos: 'number', note: '스물 → 스무 명' },
    { conv: 1, k: '개 (counter)', e: 'item (counter) · native', pos: 'counter', note: '한 개, 두 개 · 가방 두 개', accept: ['개'] },
    { conv: 1, k: '권', e: 'volume — books (counter) · native', pos: 'counter', note: '한 권, 두 권 · 책 세 권' },
    { conv: 1, k: '년', e: 'year (counter) · Sino', pos: 'counter', note: '일 년, 이 년' },
    { conv: 1, k: '달', e: 'month — how long (counter) · native', pos: 'counter', note: '한 달, 두 달' },
    { conv: 1, k: '달러 (=불)', e: 'dollar (counter) · Sino', pos: 'counter', note: '오 달러 = $5' },
    { conv: 1, k: '마리', e: 'animal (counter) · native', pos: 'counter', note: '한 마리, 두 마리 · 개 한 마리 = one dog' },
    { conv: 1, k: '명 (=사람)', e: 'people (counter) · native', pos: 'counter', note: '한 명, 두 명, 세 명' },
    { conv: 1, k: '시간', e: 'hour — how long (counter) · native', pos: 'counter', note: '한 시간, 두 시간' },
    { conv: 1, k: '원', e: 'won (counter) · Sino', pos: 'counter', note: '천 원 = ₩1,000' },
    { conv: 1, k: '월', e: 'month — in dates (counter) · Sino', pos: 'counter', note: '일월 = January · 6월 = 유월, 10월 = 시월' },
    { conv: 1, k: '일', e: 'day — in dates (counter) · Sino', pos: 'counter', note: '삼월 일일 = March 1st' },
    { conv: 1, k: '몇', e: 'how many, what (with a counter)', pos: 'pre-noun', note: '몇 명? 몇 층?' },
    { conv: 1, k: '계시다 (계세요)', e: 'to stay, to be (existence) — honorific', pos: 'verb', note: 'honorific 있다 for respected people' },
    { conv: 1, k: '하고', e: 'and (with nouns)', pos: 'particle', note: '아버지하고 어머니', syn: 'and' },
    // From the teacher's "Korean Vocabularies" doc (Oct 2026) and the family chart on p. 118
    { conv: 'From class', k: '강아지', e: 'puppy, doggy', pos: 'noun', note: 'often used for any pet dog', syn: 'dog' },
    { conv: 'From class', k: '아빠', e: 'dad', pos: 'noun', note: 'casual 아버지', syn: 'father' },
    { conv: 'From class', k: '엄마', e: 'mom', pos: 'noun', note: 'casual 어머니', syn: 'mother' },
    { conv: 'From class', k: '초등학생', e: 'elementary school student', pos: 'noun' },
    { conv: 'From class', k: '중학생', e: 'middle school student', pos: 'noun' },
    // From the Oct 22 review doc (extended family terms intentionally left out)
    { conv: 'From class', k: '저거 (=저것)', e: 'that (thing over there)', pos: 'pronoun', note: '이거 = this · 저거 = that over there' },
    { conv: 'From class', k: '관계', e: 'relationship (how you\'re related)', pos: 'noun', syn: 'relationship' },
    // Conversation 2 — New Words (p. 127)
    { conv: 2, k: '거 (=것)', e: 'thing', pos: 'noun', note: '스티브 거예요 = It\'s Steve\'s' },
    { conv: 2, k: '누나', e: 'older sister (of a male)', pos: 'noun', note: 'what a man calls his older sister' },
    { conv: 2, k: '뉴욕', e: 'New York', pos: 'noun' },
    { conv: 2, k: '로스앤젤레스', e: 'Los Angeles (L.A.)', pos: 'noun' },
    { conv: 2, k: '룸메이트', e: 'roommate', pos: 'noun' },
    { conv: 2, k: '방', e: 'room', pos: 'noun' },
    { conv: 2, k: '사이', e: 'relationship; between', pos: 'noun', note: '사이가 좋아요 = (they) get along well', syn: 'relationship' },
    { conv: 2, k: '생물학', e: 'biology', pos: 'noun' },
    { conv: 2, k: '아파트', e: 'apartment', pos: 'noun' },
    { conv: 2, k: '언니', e: 'older sister (of a female)', pos: 'noun', note: 'what a woman calls her older sister' },
    { conv: 2, k: '하와이', e: 'Hawai\'i', pos: 'noun' },
    { conv: 2, k: '만', e: 'only', pos: 'particle', note: '언니만 있어요 = I only have an older sister' },
    { conv: 2, k: '의', e: 'of (possessive)', pos: 'particle', note: 'pronounced [에]; mostly in writing' },
    { conv: 2, k: '고맙다 (고마워요)', e: 'to be thankful', pos: 'adjective', note: '고마워요 = Thank you' },
    { conv: 2, k: '나쁘다 (나빠요)', e: 'to be bad', pos: 'adjective' },
    { conv: 2, k: '비싸다 (비싸요)', e: 'to be expensive', pos: 'adjective', note: 'opposite of 싸다' },
    { conv: 2, k: '예쁘다 (예뻐요)', e: 'to be pretty', pos: 'adjective' },
    { conv: 2, k: '작다 (작아요)', e: 'to be small (in size)', pos: 'adjective', note: 'opposite of 크다' },
    { conv: 2, k: '마시다 (마셔요)', e: 'to drink', pos: 'verb' },
    { conv: 2, k: '배우다 (배워요)', e: 'to learn', pos: 'verb' },
    { conv: 2, k: '오다 (와요)', e: 'to come', pos: 'verb' },
    { conv: 2, k: '자다 (자요)', e: 'to sleep', pos: 'verb' },
    { conv: 2, k: '주다 (줘요)', e: 'to give', pos: 'verb', note: '주어요 is also correct' },
    { conv: 2, k: '참', e: 'very, truly', pos: 'adverb', note: '방이 참 예뻐요', syn: 'really' },
    { conv: 2, k: '이거 (=이것)', e: 'this (thing)', pos: 'pronoun', note: '이건 = 이거 + 은' },
    { conv: 2, k: '저희', e: 'we / us / our (humble)', pos: 'pronoun', note: '= 우리 (plain)' },
    { conv: 2, k: '제', e: 'my (humble)', pos: 'pronoun', note: '= 내 (plain) · 제 방 = my room' },
    // Numbers from G4.2 (pp. 121–122) — not in the New Words box, but needed for counting
    ...[['하나', 'one'], ['둘', 'two'], ['셋', 'three'], ['넷', 'four'], ['다섯', 'five'], ['여섯', 'six'], ['일곱', 'seven'], ['여덟', 'eight'], ['아홉', 'nine'], ['열', 'ten'],
      ['스물', 'twenty'], ['서른', 'thirty'], ['마흔', 'forty'], ['쉰', 'fifty'], ['예순', 'sixty'], ['일흔', 'seventy'], ['여든', 'eighty'], ['아흔', 'ninety']]
      .map(([k, e]) => ({ conv: 'Numbers (G4.2)', k, e: `${e} (native)`, pos: 'number', note: NATIVE_SHORT[k] ? `before a counter: ${NATIVE_SHORT[k]}` : 'counting things and people' })),
    { conv: 'Numbers (G4.2)', k: '백', e: 'hundred (Sino-Korean only)', pos: 'number', note: '이백 = 200' },
    { conv: 'Numbers (G4.2)', k: '천', e: 'thousand (Sino-Korean only)', pos: 'number', note: '천 원 = ₩1,000' },
    { conv: 'Numbers (G4.2)', k: '만 (10,000)', e: 'ten thousand (Sino-Korean only)', pos: 'number', note: '만 원 = ₩10,000 · 오만 = 50,000', accept: ['만'] },
    // Words the teacher used in the midterm conversation (10/27)
    { conv: 'From the midterm (10/27)', k: '가르치다 (가르쳐요)', e: 'to teach', pos: 'verb', note: '뭘 가르치세요? — 물리학을 가르쳐요.', accept: ['가르치다', '가르쳐요'] },
    { conv: 'From the midterm (10/27)', k: '살다 (살아요)', e: 'to live', pos: 'verb', note: '어디에서 살아요? — 기숙사에서 살아요.', accept: ['살다', '살아요'] },
    { conv: 'From the midterm (10/27)', k: '형제', e: 'siblings', pos: 'noun', note: '형제 있어요? — 네, 남동생이 한 명 있어요.' },
    { conv: 'From the midterm (10/27)', k: '에서', e: 'at, in (where an action happens)', pos: 'particle', note: '대학교에서 가르쳐요 · compare 에 = where something is: 집에 있어요' },
    { conv: 'From the midterm (10/27)', k: '랑 (이랑)', e: 'and, with (casual)', pos: 'particle', note: '= 하고 · 기숙사랑 교실 · after a consonant: 이랑 (책이랑)', accept: ['랑', '이랑'], syn: 'and' },
    { conv: 'From the midterm (10/27)', k: '뭘 (= 뭐를)', e: 'what (as the object)', pos: 'pronoun', note: '뭘 가르치세요? = What do you teach?', accept: ['뭘'], syn: 'what' },
    { conv: 'From the midterm (10/27)', k: '여기', e: 'here', pos: 'pronoun', note: '여기에 의자가 몇 개 있어요?' },
    { conv: 'From the midterm (10/27)', k: '멀리', e: 'far away', pos: 'adverb', note: '멀리 있어요? = Is it far away? (멀다 → 멀어요 = it\'s far)' },
    { conv: 'From the midterm (10/27)', k: '많이', e: 'a lot, very', pos: 'adverb', note: '많이 멀어요? = Is it very far?' },
    { conv: 'From the midterm (10/27)', k: '연필', e: 'pencil', pos: 'noun' },
    { conv: 'From the midterm (10/27)', k: '물병', e: 'water bottle', pos: 'noun', note: '물 = water + 병 = bottle' },
    { conv: 'From the midterm (10/27)', k: '책가방', e: 'school bag, backpack', pos: 'noun', note: '책 + 가방', syn: 'bag' },
    { conv: 'From the midterm (10/27)', k: '소파', e: 'sofa, couch', pos: 'noun' },
    { conv: 'From the midterm (10/27)', k: '어디에서 왔어요?', e: 'Where are you from?', pos: 'expression', note: 'Literally “Where did you come from?” (past tense of 오다 — learn it as a phrase for now) · also 어디서 왔어요?', accept: ['어디에서 왔어요', '어디서 왔어요'] },
  ],

  // Verb/adjective forms for conjugation practice: [dictionary, meaning, polite ~어요, formal ~습니다, honorific ~(으)세요]
  // ('|' separates accepted alternatives — the first is shown; null = not drilled). Formal and honorific forms are only listed
  // when they appear in the textbook (Lessons 1–4) or the teacher's materials.
  conjugations: [
    ['가르치다', 'to teach', '가르쳐요|가르치어요', null, '가르치세요'],
    ['살다', 'to live', '살아요', null, null],
    ['계시다', 'to be (somewhere) — honorific', '계세요|계셔요|계시어요', null, null],
    ['고맙다', 'to be thankful', '고마워요', null, null],
    ['나쁘다', 'to be bad', '나빠요', null, null],
    ['비싸다', 'to be expensive', '비싸요', '비쌉니다', null],
    ['예쁘다', 'to be pretty', '예뻐요', null, null],
    ['작다', 'to be small', '작아요', '작습니다', null],
    ['마시다', 'to drink', '마셔요|마시어요', null, null],
    ['배우다', 'to learn', '배워요', null, '배우세요'],
    ['오다', 'to come', '와요', null, null],
    ['자다', 'to sleep', '자요', null, null],
    ['주다', 'to give', '줘요|주어요', null, null],
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
    { q: '20 people (counting form):', opts: ['스무 명', '스물 명', '두십 명', '스물두 명'], ans: 0, why: '스물 → 스무 before a counter. (For larger counts 이십 명 is also heard.)' },
    { q: '5층 and 5명 are read:', opts: ['오 층 · 다섯 명', '다섯 층 · 오 명', '오 층 · 오 명', '다섯 층 · 다섯 명'], ans: 0, why: 'Identifying (floor) → Sino-Korean · counting (people) → native Korean' },
    { q: '삼 과 vs. 세 과:', opts: ['Lesson 3 vs. three lessons', 'three lessons vs. Lesson 3', 'both mean Lesson 3', 'both mean three lessons'], ans: 0 },
    { q: '“Yumi has two older brothers.”', opts: ['유미는 오빠가 두 명 있어요.', '유미는 두 명 오빠가 있어요.', '유미는 오빠가 둘 명 있어요.', '유미는 오빠가 이 명 있어요.'], ans: 0, why: 'Order: noun + particle + number + counter + 있어요' },
    { q: 'A: 남동생이에요, 여동생이에요?  (It\'s a younger sister.)  B:', opts: ['여동생이에요.', '네, 여동생이에요.', '아니요, 남동생이에요.', '남동생이 아니에요.'], ans: 0, why: 'Either-or questions are answered with the choice — no 네/아니요.' },
    { q: '“father and mother”', opts: ['아버지하고 어머니', '아버지 그리고 어머니', '아버지도 어머니', '아버지가 어머니'], ans: 0, why: '하고 joins nouns · 그리고 joins sentences' },
    { q: '동생이 몇 명 있어요? asks:', opts: ['How many younger siblings do you have?', 'Where is your younger sibling?', 'Who is your younger sibling?', 'Is your sibling a student?'], ans: 0 },
    { q: '오빠는 대학원생이에요. means:', opts: ['My older brother is a graduate student.', 'My older brother is a high school student.', 'My younger brother is a college student.', 'My older brother is in graduate school in Boston.'], ans: 0 },
    // Conversation 2
    { q: '이건 누구 방이에요? means:', opts: ['Whose room is this?', 'Who is in this room?', 'Is this a room?', 'Where is the room?'], ans: 0, why: '이건 = 이거 + 은 · 누구 = who / whose' },
    { q: 'A: 이거 누구 사전이에요? (It\'s Steve\'s.)  B:', opts: ['스티브 거예요.', '스티브가 거예요.', '스티브 거이에요.', '스티브를 거예요.'], ans: 0, why: 'Possessor + possessed side by side; 거 (thing) replaces the noun. 거 ends in a vowel → 예요' },
    { q: '“It\'s mine.” (humble)', opts: ['제 거예요.', '저 거예요.', '제가 거예요.', '저는 거예요.'], ans: 0, why: '제 = 저 + 의 (my) · 내 거예요 is the plain version' },
    { q: '“our father and mother” (humble)', opts: ['저희 아버지, 어머니', '저 아버지, 어머니', '제희 아버지, 어머니', '우리의 아버지, 어머니'], ans: 0, why: '저희 = humble 우리. Possession is usually shown by placing nouns side by side, without 의.' },
    { q: 'Talking to Steve: “Is this your umbrella?”', opts: ['이거 스티브 씨 우산이에요?', '이거 너 우산이에요?', '이거 당신 우산이에요?', '이거 스티브 씨가 우산이에요?'], ans: 0, why: 'For “your/his/her,” Korean uses the person\'s name instead of a pronoun.' },
    { q: '“Yumi only has an older sister.”', opts: ['유미는 언니만 있어요.', '유미만 언니가 있어요.', '유미는 언니도 있어요.', '유미는 언니가 없어요.'], ans: 0, why: '만 (only) attaches to what is limited. 유미만 = only Yumi.' },
    { q: '룸메이트들하고 사이가 좋아요? means:', opts: ['Do you get along well with your roommates?', 'Are your roommates good?', 'Is there space between the roommates?', 'Do you like your roommates\' room?'], ans: 0, why: '사이 = relationship · 사이가 좋다 = to get along well' },
    { q: '방이 참 예뻐요. means:', opts: ['The room is really pretty.', 'The room is very big.', 'The room is truly small.', 'The room is expensive.'], ans: 0 },
    { q: 'The reply to 방이 참 예뻐요 in the dialogue:', opts: ['고마워요.', '고맙다.', '고맙어요.', '반갑습니다.'], ans: 0, why: '고맙다 → 고마워요 (ㅂ becomes 우 before ~어요)' },
    { q: 'Polite form of 마시다:', opts: ['마셔요', '마시요', '마사요', '마시다요'], ans: 0, why: '이 + 어 → 여' },
    { q: 'Polite form of 배우다:', opts: ['배워요', '배우요', '배우아요', '배와요'], ans: 0, why: '우 + 어 → 워' },
    { q: 'Polite form of 오다:', opts: ['와요', '오요', '오아요', '워요'], ans: 0, why: '오 + 아 → 와 (required when there\'s no consonant before it)' },
    { q: 'Polite form of 자다:', opts: ['자요', '자아요', '자어요', '저요'], ans: 0, why: '아 + 아 → 아' },
    { q: 'Polite form of 예쁘다:', opts: ['예뻐요', '예쁘요', '예빠요', '예쁘어요'], ans: 0, why: 'ㅡ drops before ~어요 (like 크다 → 커요)' },
    { q: 'Polite form of 나쁘다:', opts: ['나빠요', '나뻐요', '나쁘요', '나쁘아요'], ans: 0, why: 'ㅡ drops; the vowel before it is ㅏ → 아요' },
    { q: 'Honorific of 안녕하다 / 계시다 (시 + 어요):', opts: ['안녕하세요 / 계세요', '안녕하셔요 / 계셔요 only', '안녕해요 / 계서요', '안녕하시요 / 계시요'], ans: 0, why: 'Honorific 시 + 어 → 세 (not 셔)' },
  ],

  fill: [
    { sentence: '아버지하고 어머니가 보스턴에 ___. (are — honorific)', blank: '계세요', hint: 'honorific of 있어요 (existence)', type: 'Honorific' },
    { sentence: '소피아 씨 부모님은 어디 ___? (are — honorific)', blank: '계세요', hint: 'honorific of 있어요 (existence)', type: 'Honorific' },
    { sentence: '오빠___ 동생도 홍콩에 있어요. (and)', blank: '하고', hint: 'and — joins nouns', type: 'Particle' },
    { sentence: '남동생이 ___ 명 있어요. (2)', blank: '두', hint: '둘 → ? before a counter', type: 'Counting' },
    { sentence: '책이 ___ 권 있어요. (3)', blank: '세', hint: '셋 → ? before a counter', type: 'Counting' },
    { sentence: '형이 ___ 명 있어요. (1)', blank: '한', hint: '하나 → ? before a counter', type: 'Counting' },
    { sentence: '교실에 학생이 ___ 명 있어요. (20)', blank: ['스무', '이십'], hint: '스물 → ? before a counter', type: 'Counting' },
    { sentence: '가방이 두 ___ 있어요. (items)', blank: '개', hint: 'counter for things', type: 'Counter' },
    { sentence: '책이 다섯 ___ 있어요. (books)', blank: '권', hint: 'counter for volumes', type: 'Counter' },
    { sentence: '개가 한 ___ 있어요. (animals)', blank: '마리', hint: 'counter for animals', type: 'Counter' },
    { sentence: '동생이 ___ 명 있어요? (how many)', blank: '몇', hint: 'how many', type: 'Vocab' },
    { sentence: '남동생이에요, 여동생___? (either-or question)', blank: '이에요', hint: 'Repeat the same ending for each choice', type: 'Grammar' },
    { sentence: '스티브: ___이 한 명 있어요. (older brother)', blank: '형', hint: 'Steve is male', type: 'Vocab' },
    { sentence: '소피아: ___가 한 명 있어요. (older brother)', blank: '오빠', hint: 'Sophia is female', type: 'Vocab' },
    { sentence: '오빠는 ___이에요. (graduate student)', blank: '대학원생', hint: 'graduate school = 대학원', type: 'Vocab' },
    { sentence: '동생은 지금 ___이에요. (high school student)', blank: '고등학생', hint: 'high school = 고등학교', type: 'Vocab' },
    // Conversation 2
    { sentence: '리사 씨, 아파트에 방이 ___ 개 있어요? (how many)', blank: '몇', hint: 'how many', type: 'Vocab' },
    { sentence: '방이 ___ 개 있어요. (3)', blank: '세', hint: 'native 셋 → ? before a counter', type: 'Counting' },
    { sentence: '룸메이트가 ___ 명 있어요. (2)', blank: '두', hint: 'native 둘 → ? before a counter', type: 'Counting' },
    { sentence: '이건 ___ 방이에요? (whose)', blank: '누구', hint: 'who / whose', type: 'Possessive' },
    { sentence: '제 ___예요. (It\'s mine — “my thing”)', blank: '거', hint: 'thing (= 것)', type: 'Possessive' },
    { sentence: '이거 스티브 ___예요. (It\'s Steve\'s.)', blank: '거', hint: 'thing (= 것)', type: 'Possessive' },
    { sentence: '___ 방이에요. (It\'s my room — humble)', blank: '제', hint: '저 + 의', type: 'Possessive' },
    { sentence: '___ 아버지, 어머니는 로스앤젤레스에 계세요. (our — humble)', blank: '저희', hint: 'humble 우리', type: 'Possessive' },
    { sentence: '유미는 언니___ 있어요. (only)', blank: '만', hint: 'only', type: 'Particle' },
    { sentence: '룸메이트들하고 ___가 좋아요. (relationship)', blank: '사이', hint: 'relationship', type: 'Vocab' },
    { sentence: '방이 참 ___요. (예쁘다)', blank: '예뻐', hint: 'ㅡ drops before 어요', type: 'Contraction' },
    { sentence: '___요. (고맙다 — Thank you)', blank: '고마워', hint: 'ㅂ → 우 + 어요', type: 'Contraction' },
    { sentence: '커피를 ___요. (마시다)', blank: '마셔', hint: '이 + 어 → 여', type: 'Contraction' },
    { sentence: '생물학을 ___요. (배우다)', blank: '배워', hint: '우 + 어 → 워', type: 'Contraction' },
    { sentence: '내일 형이 ___요. (오다)', blank: '와', hint: '오 + 아 → 와', type: 'Contraction' },
    { sentence: '책하고 사전을 ___요. (주다)', blank: ['줘', '주어'], hint: '우 + 어 → 워 (주어요 is also allowed)', type: 'Contraction' },
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
      type: 'which-numbers', label: 'Counters: native or Sino-Korean?', weight: 2,
      mc: () => {
        const c = pick(COUNTER_DRILL), n = randInt(c.lo, c.hi), right = counterReading(c, n), m = n % 9 + 1;
        const say = num => c.c === '월' ? `${num}월` : `${num} ${c.c}`; // months are written as one word: 일월, 유월
        const wrongs = c.native
          ? [say(sino(n)), say(nativeCounting(m)), say(sino(m)), say(nativeFull(n))]
          : [say(nativeCounting(n)), say(c.c === '월' ? sino(n % 12 + 1) : sino(m)), say(nativeFull(n)), c.c === '월' && (n === 6 || n === 10) ? say(sino(n)) : say(nativeCounting(m))];
        return mcq(`<strong>${c.desc(n)}</strong> — how do you say it?`, right, wrongs,
          `${c.c} (${c.what}) takes ${c.native ? 'native Korean numbers — counting how many' : 'Sino-Korean numbers — naming / identifying'}` + (c.c === '월' ? ' · 6월 = 유월, 10월 = 시월' : ''));
      },
      typed: () => {
        const c = pick(COUNTER_DRILL.filter(x => x.c !== '월')), n = randInt(c.lo, Math.min(c.hi, 12));
        return { sentence: `${c.desc(n)} → ___ ${c.c}`, blank: c.native ? nativeCounting(n) : sino(n), hint: `${c.c} takes ${c.native ? 'native Korean (한, 두, 세…)' : 'Sino-Korean (일, 이, 삼…)'}`, why: `${c.c} (${c.what}) → ${c.native ? 'native' : 'Sino-Korean'}` };
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
        const rel = pick([['older brother', male ? '형' : '오빠'], ['older sister', male ? '누나' : '언니'], ['younger brother', '남동생'], ['younger sister', '여동생'], ['parents', '부모님'], ['father', '아버지'], ['mother', '어머니']]);
        return mcq(`${eng} (${male ? 'male' : 'female'}) talks about ${male ? 'his' : 'her'} <strong>${rel[0]}</strong>:`, rel[1],
          // 동생 also covers younger brother/sister, so it can't be a wrong answer for those
          ['형', '오빠', '누나', '언니', '남동생', '여동생', '동생', '부모님', '아버지', '어머니'].filter(x => x !== rel[1] && !(x === '동생' && rel[1].endsWith('동생'))),
          rel[0] === 'older brother' ? `A ${male ? 'man says 형' : 'woman says 오빠'} for an older brother.`
            : rel[0] === 'older sister' ? `A ${male ? 'man says 누나' : 'woman says 언니'} for an older sister.` : '');
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
    {
      type: 'numbers', label: 'Reading numbers (both systems)',
      mc: () => {
        const r = Math.random();
        if (r < 0.4) { // native 1–99
          const n = randInt(1, 99);
          return mcq(`<strong>${n}</strong> in <strong>native</strong> Korean (counting):`, nativeFull(n), [sino(n), nativeFull(n % 99 + 1), nativeFull(Math.max(1, n - 10)), nativeCounting(n)], 'Native tens: 열 스물 서른 마흔 쉰 예순 일흔 여든 아흔');
        }
        if (r < 0.7) { // Sino 1–99
          const n = randInt(11, 99);
          return mcq(`<strong>${n}</strong> in <strong>Sino-Korean</strong>:`, sino(n), [nativeFull(n), sino(n % 89 + 11), sino(Math.floor(n / 10) + (n % 10) * 10 || 11)], 'Sino: (digit) + 십 + (digit) — e.g. 삼십칠 = 37');
        }
        const [item, lo, hi, step] = pick([['커피', 2000, 6500, 500], ['주스', 1500, 4500, 500], ['책', 10000, 30000, 1000], ['가방', 20000, 90000, 5000], ['사전', 15000, 45000, 5000]]);
        const n = randInt(lo / step, hi / step) * step, fmt = n.toLocaleString('en-US');
        return mcq(`${item}: <strong>₩${fmt}</strong> — how do you read it?`, `${sino(n)} 원`, [`${sino(n + step)} 원`, `${sino(n * 10)} 원`, `${sino(n)} 달러`], 'Money is always Sino-Korean: 천 = 1,000 · 만 = 10,000');
      },
      typed: () => {
        if (Math.random() < 0.5) { const n = randInt(1, 99); return { sentence: `${n} in native Korean (counting): ___`, blank: nativeFull(n), hint: 'Native tens: 열 스물 서른 마흔 쉰 예순 일흔 여든 아흔', wide: true }; }
        const n = randInt(11, 99);
        return { sentence: `${n} in Sino-Korean: ___`, blank: sino(n), hint: 'digit + 십 + digit', wide: true };
      },
    },
    {
      type: 'possessive', label: 'Whose? 누구 / 거 / 제',
      mc: () => {
        const [w, en] = pick([['책', 'book'], ['사전', 'dictionary'], ['가방', 'bag'], ['우산', 'umbrella'], ['시계', 'watch'], ['방', 'room'], ['컴퓨터', 'computer'], ['교과서', 'textbook']]);
        const r = Math.random();
        if (r < 0.35) return mcq(`“Whose ${en} is this?”`, `이거 누구 ${josa(w, '이에요', '예요')}?`, [`이거 누가 ${josa(w, '이에요', '예요')}?`, `이거 누구 ${josa(w, '예요', '이에요')}?`, `이거 누구를 ${josa(w, '이에요', '예요')}?`], '누구 = whose (no particle) · ' + batchimWhy(w, '이에요', '예요'));
        if (r < 0.7) { const [name, eng] = pick(CAST); return mcq(`A: 이거 누구 ${josa(w, '이에요', '예요')}? (It's ${eng}'s.) B:`, `${name} 거예요.`, [`${josa(name, '이', '가')} 거예요.`, `${name} 거이에요.`, `${josa(name, '을', '를')} 거예요.`], 'Name + 거 (thing) = “Name’s” · 거 ends in a vowel → 예요'); }
        return mcq(`A: 이거 누구 ${josa(w, '이에요', '예요')}? (It's yours.) B: (humble)`, '제 거예요.', ['저 거예요.', '제가 거예요.', '저는 거예요.'], '제 = 저 + 의 (my) · 내 거예요 is the plain form');
      },
    },
    {
      // Question → answer, modeled on the midterm conversation (10/27): understand the question, answer about yourself.
      type: 'answer', label: 'Answering questions (midterm-style)', weight: 2,
      mc: () => {
        const r = randInt(0, 9);
        if (r === 0) {
          const n = randInt(1, 4);
          return mcq(`A: 몇 학년이에요? (You're in year ${n}.)  B:`, `${sino(n)} 학년이에요.`,
            [`${nativeCounting(n)} 학년이에요.`, `${sino(n)} 년이에요.`, `${sino(n)} 학년 있어요.`],
            `학년 takes Sino-Korean numbers: 일 학년, 이 학년, 삼 학년, 사 학년 (년 alone = year)`);
        }
        if (r === 1) {
          const [p, en] = pick([['보스턴', 'Boston'], ['뉴욕', 'New York'], ['로스앤젤레스', 'Los Angeles'], ['하와이', 'Hawaiʻi'], ['홍콩', 'Hong Kong'], ['한국', 'Korea']]);
          return mcq(`A: 고향이 어디예요? (Your hometown is ${en}.)  B:`, `저는 고향이 ${josa(p, '이에요', '예요')}.`,
            [`저는 고향이 ${p}에 이에요.`, `저는 고향을 ${josa(p, '이에요', '예요')}.`, `저는 고향이 ${josa(p, '예요', '이에요')}.`],
            `고향 = hometown · “저는 고향이 X예요” = As for me, my hometown is X · ${batchimWhy(p, '이에요', '예요')}`);
        }
        if (r === 2) {
          const [ask, askEn] = pick([['대학생이세요?', 'Are you a college student?'], ['학생이세요?', 'Are you a student?']]);
          return mcq(`A: ${ask} (${askEn} — you're a professor.)  B:`, '아니요, 저는 교수예요.',
            ['아니요, 저는 교수세요.', '네, 저는 교수예요.', '아니요, 저는 교수이에요.'],
            'Never use the honorific ~(으)세요 about yourself · 교수 ends in a vowel → 예요');
        }
        if (r === 3) {
          const [s, en] = pick([['물리학', 'physics'], ['화학', 'chemistry'], ['수학', 'math'], ['생물학', 'biology'], ['철학', 'philosophy'], ['한국어', 'Korean']]);
          return mcq(`A: 대학교에서 뭘 가르치세요? (You teach ${en}.)  B:`, `${josa(s, '을', '를')} 가르쳐요.`,
            [`${josa(s, '을', '를')} 가르치세요.`, `${josa(s, '이', '가')} 가르쳐요.`, `${josa(s, '을', '를')} 가르쳐세요.`],
            '뭘 = 뭐 + 를 (what, object) · 가르치세요 is the honorific question; answer about yourself with plain 가르쳐요 (이 + 어 → 여)');
        }
        if (r === 4) {
          const [w, en] = pick([['가방', 'bag'], ['책', 'book'], ['우산', 'umbrella'], ['사전', 'dictionary'], ['시계', 'watch']]);
          const [pos, posEn] = pick([['위', 'on'], ['밑', 'under'], ['옆', 'next to'], ['앞', 'in front of'], ['뒤', 'behind']]);
          const [ref, refEn] = pick([['책상', 'desk'], ['의자', 'chair'], ['컴퓨터', 'computer']]);
          return mcq(`A: ${josa(w, '은', '는')} 어디에 있어요? (It's ${posEn} the ${refEn}.)  B:`, `${ref} ${pos}에 있어요.`,
            [`${ref} ${pos}에 이에요.`, `${pos} ${ref}에 있어요.`, `${ref}에 ${pos} 있어요.`],
            `Place + position word + 에 있어요: ${ref} ${pos}에 = ${posEn} the ${refEn} · location uses 있어요, not 이에요`);
        }
        if (r === 5) {
          const [pos, posEn] = pick([['뒤', 'behind'], ['앞', 'in front of'], ['옆', 'next to']]);
          return mcq(`A: 텔레비전은 어디에 있어요? (It's ${posEn} you.)  B:`, `제 ${pos}에 있어요.`,
            [`나 ${pos}에 있어요.`, `제가 ${pos}에 있어요.`, `저는 ${pos}에 있어요.`],
            '“my / me” before a noun: 저 → 제 (humble), 나 → 내 (plain) · your: 너 → 네');
        }
        if (r === 6) {
          const [w, en, pl, c, max] = pick(COUNTABLES.filter(x => x[3] !== '명')), n = randInt(2, Math.min(max, 10));
          const subj = josa(w, '이', '가');
          return mcq(`A: ${pick(['', '여기에 '])}${subj} 몇 ${c} 있어요? (You have ${n}.)  B:`, `${subj} ${nativeCounting(n)} ${c} 있어요.`,
            [`${sino(n)} ${c} ${subj} 있어요.`, `${subj} ${sino(n)} ${c} 있어요.`, `${nativeCounting(n)} ${c} ${subj} 있어요.`],
            `Order: noun + 이/가 + native number + counter + 있어요 (${subj} ${nativeCounting(n)} ${c})`);
        }
        if (r === 7) {
          const [sib, en] = pick([['남동생', 'younger brother'], ['여동생', 'younger sister']]), n = randInt(1, 3);
          const subj = josa(sib, '이', '가');
          return mcq(`A: 형제 있어요? (You have ${n === 1 ? `one ${en}` : `${n} ${en}s`}.)  B:`, `네, ${subj} ${nativeCounting(n)} 명 있어요.`,
            [`네, ${subj} ${sino(n)} 명 있어요.`, `네, ${nativeCounting(n)} 명 ${subj} 있어요.`, `네, ${josa(sib, '을', '를')} ${nativeCounting(n)} 명 있어요.`],
            `형제 = siblings · people counter 명 takes native numbers (한 명, 두 명, 세 명)`);
        }
        if (r === 8) {
          const far = Math.random() < 0.5, [pl, plEn] = pick([['집', 'home'], ['기숙사', 'dorm'], ['고향', 'hometown']]);
          return mcq(`A: ${josa(pl, '이', '가')} ${pick(['멀어요', '멀리 있어요', '많이 멀어요'])}? (${far ? 'Yes, it\'s far.' : 'No, it\'s close.'})  B:`, far ? '네, 멀어요.' : '아니요, 가까워요.',
            far ? ['아니요, 멀어요.', '네, 멀아요.', '네, 가까워요.'] : ['네, 가까워요.', '아니요, 가깝어요.', '아니요, 멀어요.'],
            '멀다 → 멀어요 (far) · 가깝다 → 가까워요 (close: ㅂ → 우) · 네/아니요 answer the question as asked');
        }
        if (Math.random() < 0.3) {
          const [p, en] = pick([['기숙사', 'a dorm'], ['아파트', 'an apartment'], ['보스턴', 'Boston'], ['뉴욕', 'New York']]);
          return mcq(`A: 어디에서 살아요? (You live in ${en}.)  B:`, `${p}에서 살아요.`,
            [`${p}에서 사세요.`, `${p}에서 살어요.`, `${josa(p, '을', '를')} 살아요.`],
            `살다 → 살아요 (stem vowel ㅏ → 아요) · 에서 = at/in · 사세요 is for asking others, not about yourself · (${p}에 살아요 is also fine)`);
        }
        const lots = Math.random() < 0.5;
        return mcq(`A: 오늘 숙제가 많아요? (${lots ? 'Yes, a lot.' : 'No, you don\'t have any.'})  B:`, lots ? '네, 숙제가 많아요.' : '아니요, 숙제가 없어요.',
          lots ? ['네, 숙제를 많아요.', '네, 숙제가 만아요.', '네, 숙제가 많이요.'] : ['아니요, 숙제가 아니에요.', '아니요, 숙제를 없어요.', '네, 숙제가 없어요.'],
          lots ? '많다 → 많아요 (ㅎ is silent: sounds like 마나요) · subject takes 이/가' : 'Not having something → 없어요 · 아니에요 is “is not [N]”');
      },
      typed: () => {
        const r = randInt(0, 3);
        if (r === 0) { const n = randInt(1, 4); return { sentence: `A: 몇 학년이에요? (year ${n})  B: ___ 학년이에요.`, blank: sino(n), hint: '학년 takes Sino-Korean numbers' }; }
        if (r === 1) { const [s, en] = pick([['물리학', 'physics'], ['화학', 'chemistry'], ['수학', 'math']]); return { sentence: `A: 뭘 가르치세요? (${en})  B: ${josa(s, '을', '를')} ___. (가르치다)`, blank: ['가르쳐요', '가르치어요'], hint: 'About yourself → plain polite, not ~세요 · 이 + 어 → 여', wide: true }; }
        if (r === 2) { const [pos, posEn] = pick([['뒤', 'behind'], ['앞', 'in front of'], ['옆', 'next to']]); return { sentence: `텔레비전은 ___ ${pos}에 있어요. (${posEn} me — humble)`, blank: '제', hint: '저 → ? before a noun (“my”)' }; }
        const [w, , , c, max] = pick(COUNTABLES.filter(x => x[3] === '개')), n = randInt(2, Math.min(max, 10));
        return { sentence: `A: ${josa(w, '이', '가')} 몇 ${c} 있어요? (${n})  B: ${josa(w, '이', '가')} ___ ${c} 있어요.`, blank: nativeCounting(n), hint: '개 takes native numbers (한, 두, 세, 네, 다섯…)' };
      },
    },
    {
      type: 'only', label: '만 (only)',
      mc: () => {
        const [name, eng] = pick(CAST), [w, en] = pick([['언니', 'an older sister'], ['오빠', 'an older brother'], ['남동생', 'a younger brother'], ['여동생', 'a younger sister'], ['형', 'an older brother'], ['누나', 'an older sister']]);
        return mcq(`“${eng} only has ${en}.”`, `${josa(name, '은', '는')} ${w}만 있어요.`,
          [`${name}만 ${josa(w, '이', '가')} 있어요.`, `${josa(name, '은', '는')} ${w}도 있어요.`, `${josa(name, '은', '는')} ${josa(w, '이', '가')} 없어요.`],
          '만 attaches right after what is limited: 언니만 = only an older sister · 유미만 = only Yumi');
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
        100 and up are Sino-Korean only: 백, 천, 만 (10,000). Big numbers are grouped by <strong>만</strong> (10,000), not by thousands: 십만 = 100,000 · 백만 = 1,000,000 · 천만 = 10,000,000 · 억 = 100,000,000.<br>
        Pronunciation: 여덟 [여덜] · 십육 [심뉵].</div>
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
          <tr><td>isn't (somewhere)</td><td>리사는 집에 없어요</td><td>선생님은 집에 <b>안 계세요</b></td></tr>
          <tr><td>doesn't have</td><td>리사는 동생이 없어요</td><td>선생님은 동생이 <b>없으세요</b></td></tr>
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
    {
      id: 'G4.4', tag: 'Lesson 4', title: 'Possession: N1 (owner) + N2 (thing)',
      html: `<div class="grammar-body">Put the owner right before the thing — no particle needed: <span class="ko">마이클 책</span> (Michael's book), <span class="ko">학생 이름</span> (the student's name).<br>
        <span class="ko">의</span> (“of,” pronounced [에]) exists but is mostly for writing/abstract things (미국의 대통령).<br>
        <span class="ko">누구</span> = whose: <span class="ko">누구 시계예요?</span> · <span class="ko">거</span> (= 것, “thing”) replaces the noun when it's obvious.</div>
        <table class="rule-table">
          <tr><th></th><th>Plain</th><th>Humble</th></tr>
          <tr><td>I</td><td>나</td><td>저</td></tr>
          <tr><td>my</td><td>내 (나 + 의)</td><td>제 (저 + 의)</td></tr>
          <tr><td>mine</td><td>내 거</td><td>제 거</td></tr>
          <tr><td>our / ours</td><td>우리 / 우리 거</td><td>저희 / 저희 거</td></tr>
        </table>
        <div class="example-box">
          <p>제니: 이거 <b>누구 사전</b>이에요? — 유미: <b>스티브 거</b>예요.</p>
          <p>선생님: 이거 <b>마이클 책</b>이에요? — 마이클: 네, <b>제 거</b>예요.</p>
          <p>리사: 네, <b>저희</b> 아버지, 어머니는 로스앤젤레스에 계세요.</p>
          <p>소피아: <b>제 동생 거</b>예요. — It's my younger sibling's. (possessor + noun + 거)</p>
          <p>Koreans often say <b>우리</b> (our) for “my” family and home: 우리 아버지, 우리 집 (p. 129).</p>
          <p>For “your / his / her,” use the person's name: 이거 <b>스티브 씨 우산</b>이에요?</p>
        </div>`,
    },
    {
      id: 'G4.5', tag: 'Lesson 4', title: 'Vowel contraction in ~어요/아요',
      html: `<div class="grammar-body">When the stem ends in a vowel, the vowels merge:</div>
        <table class="rule-table">
          <tr><th>Rule</th><th>Examples</th></tr>
          <tr><td>아 + 아 → 아</td><td>가요 · 자요 · 만나요 · 싸요 · 비싸요</td></tr>
          <tr><td>애 + 어 → 애</td><td>지내요</td></tr>
          <tr><td>이 + 어 → 여</td><td>마시다 → 마셔요</td></tr>
          <tr><td>honorific 시 + 어 → 세</td><td>안녕하세요 · 계세요</td></tr>
          <tr><td>우 + 어 → 워 · 오 + 아 → 와</td><td>배워요 · 와요 (required) · 줘요/주어요 · 봐요/보아요 (optional after a consonant)</td></tr>
          <tr><td>ㅡ drops</td><td>크다 → 커요 · 예쁘다 → 예뻐요 · 나쁘다 → 나빠요</td></tr>
          <tr><td>ㅂ → 우 (irregular)</td><td>고맙다 → 고마워요 · 반갑다 → 반가워요</td></tr>
        </table>
        <div class="example-box">
          <p>유미: 지금 뭐 하세요? — 마이클: 커피 <b>마셔요</b>.</p>
          <p>제니: 스티브 씨는 뭐 배우세요? — 스티브: 생물학 <b>배워요</b>.</p>
          <p>소피아: 방이 참 <b>예뻐요</b>. — 리사: <b>고마워요</b>.</p>
        </div>`,
    },
    {
      id: '', tag: 'Lesson 4 · Conversation 2 expressions', title: '이건, 만, 사이가 좋아요',
      html: `<table class="rule-table">
          <tr><th>Korean</th><th>Meaning</th></tr>
          <tr><td>이건 = 이거 + 은</td><td>as for this (thing)</td></tr>
          <tr><td>N만</td><td>only N — 제니는 언니<b>만</b> 있어요.</td></tr>
          <tr><td>사이가 좋아요</td><td>(they) get along well</td></tr>
          <tr><td>참 = 아주</td><td>very, truly — 방이 참 예뻐요.</td></tr>
          <tr><td>고마워요</td><td>Thank you (고맙다)</td></tr>
          <tr><td>거 / 것</td><td>thing — 거 in speech, 것 in writing</td></tr>
          <tr><td>___ 씨는 집이 어디예요? — 우리 집은 ___이에요/예요.</td><td>Where's your home (family)? — My home is in ___. (p. 136) · 소피아 씨는 집이 어디예요? — 홍콩이에요.</td></tr>
          <tr><td>___은/는 얼마예요? — ___불 ___센트예요.</td><td>How much is ___? — It's ___ dollars ___ cents. (p. 138; use 얼마, not 몇 원)</td></tr>
        </table>`,
    },
    {
      id: 'Q&A', tag: 'Speaking', title: 'Answering questions about yourself (midterm feedback)',
      html: `<div class="grammar-body">The teacher asks in honorific ~(으)세요; you answer about yourself in plain ~어요/예요. Answer in a full sentence that reuses the question's words.</div>
        <table class="rule-table">
          <tr><th>Question</th><th>Answer pattern</th></tr>
          <tr><td>대학생이세요?</td><td>아니요, 저는 교수<b>예요</b>. (never 교수세요 about yourself)</td></tr>
          <tr><td>대학교에서 뭘 가르치세요?</td><td>물리학을 <b>가르쳐요</b>. (뭘 = 뭐 + 를)</td></tr>
          <tr><td>몇 학년이에요?</td><td><b>삼 학년</b>이에요. (Sino number + 학년, not 3년)</td></tr>
          <tr><td>고향이 어디예요?</td><td>저는 고향이 보스턴이에요. · Two? 저는 고향이 <b>두 개</b>예요.</td></tr>
          <tr><td>형제 있어요?</td><td>네, 남동생이 한 명 있어요. · 저는 남동생<b>만</b> 있어요.</td></tr>
          <tr><td>___이/가 멀어요?</td><td>네, 멀어요. · 아니요, <b>가까워요</b>.</td></tr>
          <tr><td>___은/는 어디에 있어요?</td><td>도서관 옆<b>에 있어요</b>. · 2층에 있어요. (location → 있어요, not 이에요)</td></tr>
          <tr><td>___이/가 몇 개 있어요?</td><td>가방이 <b>여덟 개</b> 있어요. (noun + 이/가 + native number + counter — not 팔 개 가방이)</td></tr>
          <tr><td>어디에서 살아요?</td><td>기숙사<b>에서</b> 살아요. (에서 = where you do something)</td></tr>
          <tr><td>이거 누구 거예요?</td><td>선생님 거예요. · 제 거예요.</td></tr>
          <tr><td>my / your before a noun</td><td>저 → <b>제</b> 뒤에 · 나 → <b>내</b> · 너 → <b>네</b> 연필</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:10px"><strong>How she actually says it:</strong> 뭘 = 뭐를 · 재밌어요 = 재미있어요 · 티비 = 텔레비전 · ___랑 = ___하고 · 멀리 있어요? = 멀어요? · particles often dropped (전공 공부 재밌어요?)<br>
          <strong>Past tense you'll hear before you learn it</strong> (~았/었어요 = did): 오늘 어떻게 지냈어요? (How was your day?) · 오늘 뭐 했어요? (What did you do today?) · 어디에서 왔어요? (Where are you from?)</div>
        <div class="grammar-body" style="margin-top:10px">Didn't catch a word? Ask: <span class="ko">___이/가 뭐예요?</span> (What's ___?) — better than 몰라요.</div>`,
    },
  ],

  reference: [
    {
      title: 'Counters — which numbers? (p. 123)',
      html: `<div class="grammar-block"><table class="rule-table">
        <tr><th>Counter</th><th>Counts</th><th>Numbers</th><th>Example</th></tr>
        ${COUNTER_DRILL.map(c => `<tr><td><strong>${c.c}</strong></td><td>${c.what}</td><td>${c.native ? 'native' : 'Sino'}</td><td>${c.ex}</td></tr>`).join('')}
      </table><div class="hint">Rule of thumb: <strong>counting how many</strong> → native (한, 두, 세…) · <strong>naming which one / money / dates</strong> → Sino (일, 이, 삼…)</div></div>`,
    },
    {
      title: 'Native Korean numbers (tap 🔊 to hear the counting form)',
      html: `<div class="vocab-grid">${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20].map(n => `<div class="num-card"><span class="num-digit">${n}</span>
        <span class="num-ko">${nativeFull(n)}</span><span class="num-rom reveal-on-tap" onclick="this.classList.toggle('shown')">${nativeCounting(n)} 명</span>${speakBtn(nativeCounting(n) + ' 명')}</div>`).join('')}</div>`,
    },
    {
      title: 'Tens: native vs. Sino-Korean',
      html: `<div class="grammar-block"><table class="rule-table">
        <tr><th>#</th><th>Native</th><th>Sino</th></tr>
        ${[10, 20, 30, 40, 50, 60, 70, 80, 90].map(n => `<tr><td>${n}</td><td>${nativeFull(n)}</td><td>${sino(n)}</td></tr>`).join('')}
        <tr><td>100 · 1,000 · 10,000</td><td>—</td><td>백 · 천 · 만</td></tr>
        <tr><td>100,000 · 1,000,000 · 10,000,000 · 100,000,000</td><td>—</td><td>십만 · 백만 · 천만 · 억</td></tr>
      </table>
      <div class="hint">e.g. 37 = 서른일곱 (native) / 삼십칠 (Sino) · ₩25,000 = 이만 오천 원</div></div>`,
    },
  ],
});
