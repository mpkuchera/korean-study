// Lesson 3 · 대학 캠퍼스 (The University Campus) — textbook pp. 89–114
// For generated location sentences: position word → English
const POSITIONS = { 위: 'on', 밑: 'under', 옆: 'next to', 앞: 'in front of', 뒤: 'behind', 안: 'inside' };
const SMALL_THINGS = [['가방', 'bag'], ['책', 'book'], ['시계', 'watch'], ['우산', 'umbrella'], ['사전', 'dictionary'], ['컴퓨터', 'computer'], ['교과서', 'textbook']];
const BUILDINGS = [['도서관', 'library'], ['서점', 'bookstore'], ['우체국', 'post office'], ['기숙사', 'dorm'], ['학생회관', 'student center']];
function locationScene() {
  const r = Math.random();
  if (r < 0.45) { // a small thing on/under/next to the desk or chair
    const [t, te] = pick(SMALL_THINGS), [p, pe] = pick([['책상', 'desk'], ['의자', 'chair']]), pos = pick(['위', '밑', '옆']);
    return { thing: t, place: p, pos, ko: `${josa(t, '이', '가')} ${p} ${pos}에 있어요.`, en: `The ${te} is ${POSITIONS[pos]} the ${pe}.` };
  }
  if (r < 0.6) { // something inside the bag
    const [t, te] = pick(SMALL_THINGS.filter(s => ['책', '사전', '교과서', '우산', '시계'].includes(s[0])));
    return { thing: t, place: '가방', pos: '안', ko: `${josa(t, '이', '가')} 가방 안에 있어요.`, en: `The ${te} is inside the bag.` };
  }
  const [a, ae] = pick(BUILDINGS), [b, be] = pick(BUILDINGS.filter(x => x[0] !== a)), pos = pick(['앞', '뒤', '옆']);
  return { thing: a, place: b, pos, ko: `${josa(a, '이', '가')} ${b} ${pos}에 있어요.`, en: `The ${ae} is ${POSITIONS[pos]} the ${be}.` };
}
const HAVE_THINGS = [['가방', 'a bag'], ['책', 'a book'], ['시계', 'a watch'], ['우산', 'an umbrella'], ['사전', 'a dictionary'], ['컴퓨터', 'a computer'],
  ['교과서', 'a textbook'], ['숙제', 'homework'], ['수업', 'class'], ['시험', 'a test'], ['질문', 'a question'], ['시간', 'time'], ['친구', 'a friend']];
// [dictionary form, ~(으)세요 form, meaning] — listed explicitly to avoid irregular stems (알다 → 아세요 etc.)
const HONORIFICS = [
  ['가다', '가세요', 'go'], ['앉다', '앉으세요', 'sit'], ['읽다', '읽으세요', 'read'], ['인사하다', '인사하세요', 'greet'], ['보다', '보세요', 'look'],
  ['쓰다', '쓰세요', 'write'], ['만나다', '만나세요', 'meet'], ['하다', '하세요', 'do'], ['공부하다', '공부하세요', 'study'], ['지내다', '지내세요', 'get along'],
  ['좋다', '좋으세요', 'be good'], ['크다', '크세요', 'be big'], ['많다', '많으세요', 'be many'], ['괜찮다', '괜찮으세요', 'be okay'],
  ['있다', '있으세요', 'have'], ['없다', '없으세요', 'not have'],
];

addLesson({
  id: 3,
  title: '대학 캠퍼스',
  english: 'The University Campus',
  conversations: { 1: '학교 식당이 어디 있어요?', 2: '오늘 수업 있으세요?' },

  // New Words (p. 91 & p. 101)
  vocab: [
    // Conversation 1
    { conv: 1, k: '가방', e: 'bag', pos: 'noun' },
    { conv: 1, k: '기숙사', e: 'dormitory', pos: 'noun' },
    { conv: 1, k: '대학교', e: 'college, university', pos: 'noun' },
    { conv: 1, k: '뒤', e: 'back, behind', pos: 'noun', note: '도서관 뒤에 = behind the library' },
    { conv: 1, k: '밑', e: 'bottom, below', pos: 'noun', note: '책상 밑에 = under the desk' },
    { conv: 1, k: '밖', e: 'outside', pos: 'noun' },
    { conv: 1, k: '빌딩', e: 'building', pos: 'noun' },
    { conv: 1, k: '서점', e: 'bookstore', pos: 'noun' },
    { conv: 1, k: '시계', e: 'clock, watch', pos: 'noun' },
    { conv: 1, k: '안', e: 'inside', pos: 'noun', note: '빌딩 안에 = inside the building' },
    { conv: 1, k: '앞', e: 'front', pos: 'noun', note: '우체국 앞에 = in front of the post office' },
    { conv: 1, k: '어디', e: 'what place, where', pos: 'noun', note: '어디 goes right before 있어요' },
    { conv: 1, k: '옆', e: 'side, beside', pos: 'noun' },
    { conv: 1, k: '우체국', e: 'post office', pos: 'noun' },
    { conv: 1, k: '의자', e: 'chair', pos: 'noun' },
    { conv: 1, k: '위', e: 'the top side, above', pos: 'noun', note: '책상 위에 = on the desk' },
    { conv: 1, k: '책상', e: 'desk', pos: 'noun' },
    { conv: 1, k: '책', e: 'book', pos: 'noun' },
    { conv: 1, k: '학생회관', e: 'student center', pos: 'noun' },
    { conv: 1, k: '캠퍼스', e: 'campus', pos: 'noun' },
    { conv: 1, k: '층', e: 'floor, layer', pos: 'counter', note: '1층 (일 층), 2층, 3층…' },
    { conv: 1, k: '있다 (있어요)', e: 'to be, exist (in a place)', pos: 'adjective', note: 'location: [place]에 있어요' },
    { conv: 1, k: '저', e: 'uh… (hesitation)', pos: 'interjection', note: 'Different from 저 = I (Lesson 1)' },
    { conv: 1, k: '에', e: 'in, at, on (static location)', pos: 'particle' },
    // Conversation 2
    { conv: 2, k: '경제학', e: 'economics', pos: 'noun' },
    { conv: 2, k: '교과서', e: 'textbook', pos: 'noun' },
    { conv: 2, k: '교실', e: 'classroom', pos: 'noun' },
    { conv: 2, k: '반', e: 'class (a section/group of students)', pos: 'noun', note: '한국어 반 = Korean class (the group)' },
    { conv: 2, k: '사전', e: 'dictionary', pos: 'noun' },
    { conv: 2, k: '시간', e: 'time', pos: 'noun' },
    { conv: 2, k: '여자', e: 'woman', pos: 'noun', note: '여자 친구 = girlfriend' },
    { conv: 2, k: '우산', e: 'umbrella', pos: 'noun' },
    { conv: 2, k: '질문(하다)', e: 'question', pos: 'noun', accept: ['질문', '질문하다', '질문(하다)'] },
    { conv: 2, k: '집', e: 'home, house', pos: 'noun' },
    { conv: 2, k: '컴퓨터', e: 'computer', pos: 'noun' },
    { conv: 2, k: '홀', e: 'hall', pos: 'noun', note: '로이스 홀 = Royce Hall' },
    { conv: 2, k: '-(으)세요', e: 'honorific polite ending', pos: 'suffix', noSpell: true },
    { conv: 2, k: '누구 (누구+가=누가)', e: 'who', pos: 'pronoun', note: 'who + subject particle = 누가', accept: ['누구'] },
    { conv: 2, k: '가다 (가요)', e: 'to go', pos: 'verb' },
    { conv: 2, k: '인사하다 (인사해요)', e: 'to greet', pos: 'verb' },
    { conv: 2, k: '읽다 (읽어요)', e: 'to read', pos: 'verb' },
    { conv: 2, k: '없다 (없어요)', e: 'to not be (existence); to not have', pos: 'adjective', note: '지금 도서관이 없어요 = There\'s no library right now' },
    { conv: 2, k: '있다 (있으세요)', e: 'to have', pos: 'adjective', note: 'N이/가 있어요 = I have N · 있으세요? to someone you respect' },
    { conv: 2, k: '매일', e: 'every day', pos: 'adverb' },
    { conv: 2, k: '열심히', e: 'diligently, hard', pos: 'adverb' },
    { conv: 2, k: '그래서', e: 'so, therefore', pos: 'conjunction' },
    { conv: 2, k: '그런데', e: 'but, however', pos: 'conjunction' },
  ],

  quiz: [
    { q: '학교 식당이 어디 있어요? means:', opts: ['Where is the school cafeteria?', 'How is the school cafeteria?', 'Is the school cafeteria big?', 'What is the school cafeteria?'], ans: 0 },
    { q: '“The bookstore is in the student center.”', opts: ['서점이 학생회관에 있어요.', '서점이 학생회관이에요.', '서점이 학생회관에 이에요.', '서점을 학생회관에 있어요.'], ans: 0, why: 'Location = [place]에 있어요. 이에요 is only for “A is B.”' },
    { q: '“behind the library”', opts: ['도서관 뒤에', '뒤 도서관에', '도서관에 뒤', '뒤에 도서관'], ans: 0, why: 'Place + position word + 에 (도서관 뒤에, 책상 위에)' },
    { q: '“in front of the post office”', opts: ['우체국 앞에', '우체국 뒤에', '우체국 옆에', '우체국 안에'], ans: 0 },
    { q: '“under the desk”', opts: ['책상 밑에', '책상 위에', '책상 옆에', '책상 밖에'], ans: 0 },
    { q: 'Where does 어디 go in “Where is the bookstore?”', opts: ['서점이 어디 있어요?', '어디 서점이 있어요?', '서점이 있어요 어디?', '어디 있어요 서점이?'], ans: 0, why: '어디 goes right before 있어요 (and 에 is usually dropped after 어디).' },
    { q: 'Which particle combination is NOT allowed?', opts: ['밑에가', '밑에도', '밑에는', 'All three are fine'], ans: 0, why: '은/는 and 도 can follow 에, but 이/가 cannot.' },
    { q: 'A: 우체국이 어디 있어요? B: 도서관 뒤에 있어요. A: 서점은요? — 서점은요? means:', opts: ['How about the bookstore?', 'Is it a bookstore?', 'The bookstore is there.', 'I have a bookstore.'], ans: 0, why: 'N은/는요? switches the topic: “What about N?”' },
    { q: '“I don\'t have a class today.”', opts: ['오늘은 수업이 없어요.', '오늘은 수업이 아니에요.', '오늘은 수업을 없어요.', '오늘은 수업이 있어요.'], ans: 0, why: 'Not having / not existing = 없어요. 아니에요 means “is not [N].”' },
    { q: '“We don\'t have a library right now.”', opts: ['지금 도서관이 없어요.', '지금 도서관이 아니에요.', '지금 도서관을 없어요.', '지금 도서관이 없으세요.'], ans: 0, why: '없어요 for non-existence; don\'t use the honorific about your own situation.' },
    { q: 'Teacher: 질문 있어요?  You (no questions):', opts: ['아니요, 없어요.', '아니요, 아니에요.', '아니요, 있어요.', '네, 없어요.'], ans: 0 },
    { q: 'Teacher: 유미 씨, 한국어 사전 있어요?  Yumi (yes):', opts: ['네, 있어요.', '네, 있으세요.', '네, 사전이에요.', '네, 없어요.'], ans: 0, why: 'Never use the honorific (으)세요 about yourself.' },
    { q: 'Asking your professor “Do you have class today?”', opts: ['선생님, 오늘 수업 있으세요?', '선생님, 오늘 수업 있어요?', '선생님, 오늘 수업 있으세요요?', '선생님, 오늘 수업이에요?'], ans: 0, why: 'Use ~(으)세요 to show respect to the listener.' },
    { q: '“Please have a seat.” (polite request)', opts: ['앉으세요.', '앉아요?', '앉세요.', '앉다.'], ans: 0, why: '앉 ends in a consonant → 으세요' },
    { q: 'Honorific form of 가다:', opts: ['가세요', '가으세요', '가요세요', '갔세요'], ans: 0, why: 'Stem ends in a vowel → 세요' },
    { q: 'Honorific form of 읽다:', opts: ['읽으세요', '읽세요', '읽어세요', '일으세요'], ans: 0 },
    { q: 'Honorific form of 좋다 (e.g. “The teacher is nice”):', opts: ['좋으세요', '좋세요', '좋아세요', '조으세요'], ans: 0 },
    { q: 'Honorific form of 크다:', opts: ['크세요', '크으세요', '커세요', '크어요'], ans: 0 },
    { q: 'Honorific form of 인사하다:', opts: ['인사하세요', '인사해세요', '인사하으세요', '인사세요'], ans: 0 },
    { q: '“It\'s Professor Minsoo Lee.” (talking about a respected person)', opts: ['이민수 선생님이세요.', '이민수 선생님세요.', '이민수 선생님이에요세요.', '이민수 선생님 있으세요.'], ans: 0, why: 'Honorific copula: N이세요 after a consonant, N세요 after a vowel (교수세요).' },
    { q: '한국어 반 선생님이 누구세요? means:', opts: ['Who is the Korean class teacher?', 'Where is the Korean classroom?', 'Is the Korean teacher nice?', 'What is the teacher\'s name?'], ans: 0 },
    { q: '누구 + 가 becomes:', opts: ['누가', '누구가', '누구이', '누군가'], ans: 0, why: 'Like 저 + 가 → 제가' },
    { q: '오늘은 수업이 없어요. ___ 내일은 수업이 많아요.', opts: ['그런데', '그래서', '그리고', '도'], ans: 0, why: '그런데 = but (contrast)' },
    { q: '내일 시험이 있어요. ___ 열심히 공부해요.', opts: ['그래서', '그런데', '어디', '누구'], ans: 0, why: '그래서 = so (cause → result)' },
    { q: '로이스 홀 3층 is read:', opts: ['삼 층', '셋 층', '세 층', '삼 홀'], ans: 0, why: 'Floors use Sino-Korean numbers: 일 층, 이 층, 삼 층…' },
    { q: '저… 학교 식당이 어디 있어요? Here 저 means:', opts: ['uh… (hesitation)', 'I (humble)', 'that', 'my'], ans: 0 },
    { q: '매일 열심히 한국어를 공부해요. means:', opts: ['I study Korean hard every day.', 'I study Korean today.', 'I study Korean at home.', 'Korean class is every day.'], ans: 0 },
  ],

  fill: [
    { sentence: '서점이 어디 있어요? — 우체국 옆___ 있어요.', blank: '에', hint: 'Location particle', type: 'Particle' },
    { sentence: '학교 식당은 유니온 빌딩 ___에 있어요. (inside)', blank: '안', hint: 'inside', type: 'Position' },
    { sentence: '유니온 빌딩은 우체국 ___에 있어요. (in front of)', blank: '앞', hint: 'front', type: 'Position' },
    { sentence: '학생회관은 유니온 빌딩 ___에 있어요. (behind)', blank: '뒤', hint: 'back, behind', type: 'Position' },
    { sentence: '가방은 의자 ___에 있어요. (beside)', blank: '옆', hint: 'side, beside', type: 'Position' },
    { sentence: '책은 책상 ___에 있어요. (on top of)', blank: '위', hint: 'top side, above', type: 'Position' },
    { sentence: '가방이 책상 ___에 있어요. (under)', blank: '밑', hint: 'bottom, below', type: 'Position' },
    { sentence: '학교 식당이 ___ 있어요? (where)', blank: '어디', hint: 'where', type: 'Vocab' },
    { sentence: '학교 식당은 도서관 밑에___ 있어요. (also)', blank: '도', hint: '도 can follow 에 (밑에도)', type: 'Particle' },
    { sentence: '우체국이 어디 있어요? — 도서관 뒤에 있어요. — 서점___요? (how about)', blank: '은', hint: 'N은/는요? = what about N? · 점 ends in a consonant', type: 'Particle' },
    { sentence: '기숙사___ 어디 있어요? (changing the topic)', blank: '는', hint: 'Topic particle — 사 ends in a vowel', type: 'Particle' },
    { sentence: '오늘은 수업이 ___어요. (there isn\'t)', blank: '없', hint: '없다 = to not be / not have', type: 'Existence' },
    { sentence: '지금 도서관이 ___어요. (there is no library)', blank: '없', hint: 'Non-existence → 없어요, not 아니에요', type: 'Existence' },
    { sentence: '유미 씨, 한국어 사전 ___어요? (do you have)', blank: '있', hint: '있다 = to have', type: 'Existence' },
    { sentence: '선생님, 우산 있___요? (honorific)', blank: '으세', hint: '있 ends in a consonant → 으세요', type: 'Honorific' },
    { sentence: '스티브 씨, 앉___요. (please sit)', blank: '으세', hint: '앉 ends in a consonant → 으세요', type: 'Honorific' },
    { sentence: '책을 읽___요. (please read)', blank: '으세', hint: '읽 ends in a consonant → 으세요', type: 'Honorific' },
    { sentence: '선생님이 아주 좋___요. (honorific)', blank: '으세', hint: '좋 ends in a consonant → 으세요', type: 'Honorific' },
    { sentence: '이민수 선생님___요. (honorific “is”)', blank: '이세', hint: 'Consonant → N이세요', type: 'Honorific' },
    { sentence: '아버지는 교수___. (honorific “is”)', blank: '세요', hint: 'Vowel → N세요', type: 'Honorific' },
    { sentence: '한국어 반 선생님이 ___세요? (who)', blank: '누구', hint: 'who', type: 'Vocab' },
    { sentence: '오늘은 수업이 없어요. ___ 내일은 경제학 수업이 있어요.', blank: '그런데', hint: 'but, however', type: 'Conjunction' },
    { sentence: '내일 시험이 있어요. ___ 열심히 공부해요.', blank: '그래서', hint: 'so, therefore', type: 'Conjunction' },
    { sentence: '한국어 교실은 로이스 홀 3___에 있어요. (floor)', blank: '층', hint: 'floor counter', type: 'Vocab' },
    { sentence: '___ 열심히 한국어를 공부해요. (every day)', blank: '매일', hint: 'every day', type: 'Vocab' },
  ],

  answer: [
    { type: 'you', q: '오늘 수업 있으세요?', en: 'Do you have class today?', model: ['네, 한국어 수업이 있어요.', '아니요, 오늘은 수업이 없어요.'], check: ['Answer with 있어요/없어요 — never 있으세요 about yourself'] },
    { type: 'you', q: '한국어 교실은 어디 있어요?', en: 'Where is the Korean classroom?', model: ['___ 빌딩 ___층에 있어요.', 'e.g. 로이스 홀 3층에 있어요.'], check: ['[place]에 있어요'] },
    { type: 'you', q: '학교 도서관이 어디 있어요?', en: 'Where is the school library?', model: ['지금 도서관이 없어요.', '___ 앞/뒤/옆에 있어요.'], check: ['No library right now → 없어요 (not 아니에요)'] },
    { type: 'you', q: '우산 있어요?', en: 'Do you have an umbrella?', model: ['네, 있어요.', '아니요, 없어요.'] },
    { type: 'you', q: '질문 있어요?', en: 'Do you have any questions?', model: ['네, 질문 있어요.', '아니요, 없어요.'] },
    { type: 'you', q: '매일 한국어를 공부해요?', en: 'Do you study Korean every day?', model: ['네, 매일 열심히 공부해요.'] },
    { type: 'info', info: 'The book is on the desk.', q: '책은 어디 있어요?', model: ['책상 위에 있어요.'] },
    { type: 'info', info: 'The bag is under the desk.', q: '가방이 어디 있어요?', model: ['책상 밑에 있어요.'] },
    { type: 'info', info: 'The bookstore is inside the student center.', q: '서점이 어디 있어요?', model: ['학생회관 안에 있어요.'] },
    { type: 'info', info: 'The post office is behind the library.', q: '우체국은 어디 있어요?', model: ['도서관 뒤에 있어요.'] },
    { type: 'info', info: 'Steve does not have a watch.', q: '스티브 씨, 시계 있어요?', model: ['아니요, 없어요.', '아니요, 시계가 없어요.'] },
    { type: 'info', info: 'Talking about Professor Lee, who is Korean.', q: '이 선생님은 한국 사람이세요?', model: ['네, 한국 사람이세요.'], check: ['Honorific about a respected person: N이세요'] },
    { type: 'question', q: '학생회관 안에 있어요.', model: ['서점이 어디 있어요?'], check: ['Any “N이/가 어디 있어요?” works'] },
    { type: 'question', q: '아니요, 없어요.', model: ['우산 있어요?'], check: ['Any “N 있어요?” works'] },
    { type: 'question', q: '이민수 선생님이세요.', model: ['한국어 선생님이 누구세요?'] },
    { type: 'question', q: '네, 한국어 수업이 있어요.', model: ['오늘 수업 있으세요?', '오늘 수업 있어요?'] },
  ],

  shortAnswer: [
    { q: 'Describe your campus in 3–4 sentences. Say where at least two places are, and use 그래서 or 그런데.',
      model: ['대학교 캠퍼스는 넓어요.', '학교 식당은 ___ 빌딩 안에 있어요.', '서점은 ___ 옆에 있어요.', '그런데 지금 도서관이 없어요.'],
      check: ['N이/가 [place] + position + 에 있어요', 'Doesn\'t exist → 없어요', '그래서 = so · 그런데 = but'] },
    { q: 'Describe where each thing is.', info: '책: on the desk · 가방: under the desk · 의자: beside the desk',
      model: ['책이 책상 위에 있어요.', '가방이 책상 밑에 있어요.', '의자가 책상 옆에 있어요.'],
      check: ['책 (consonant) → 이 · 의자 (vowel) → 가'] },
    { q: 'Write a short dialogue (4 lines): ask your professor whether they have class today and where the classroom is.',
      model: ['A: 선생님, 오늘 수업 있으세요?', 'B: 네, 한국어 수업이 있어요.', 'A: 한국어 교실은 어디 있어요?', 'B: 로이스 홀 3층에 있어요.'],
      check: ['Use ~(으)세요 when asking the professor', 'The professor answers with plain 있어요'] },
  ],

  generators: [
    {
      type: 'location', label: 'Where things are (에 있어요)',
      mc: () => {
        const sc = locationScene(), wrongPos = pick(Object.keys(POSITIONS).filter(p => p !== sc.pos));
        return mcq(`“${sc.en}”`, sc.ko, [
          `${josa(sc.thing, '이', '가')} ${sc.place} ${wrongPos}에 있어요.`,
          `${josa(sc.thing, '이', '가')} ${sc.place} ${sc.pos}에 이에요.`, // (위예요 / 옆이에요 alone are fine in speech, so not used as a wrong answer)
          `${josa(sc.thing, '을', '를')} ${sc.place} ${sc.pos}에 있어요.`,
          `${josa(sc.place, '이', '가')} ${sc.thing} ${sc.pos}에 있어요.`,
        ], 'thing + 이/가 · place + position word + 에 · 있어요');
      },
      typed: () => {
        const sc = locationScene();
        return Math.random() < 0.6
          ? { sentence: `${josa(sc.thing, '이', '가')} ${sc.place} ___에 있어요. (“${sc.en}”)`, blank: sc.pos, hint: 'position word: 위 밑 옆 앞 뒤 안' }
          : { sentence: `${josa(sc.thing, '이', '가')} ${sc.place} ${sc.pos}___ 있어요. (“${sc.en}”)`, blank: '에', hint: 'location particle' };
      },
    },
    {
      type: 'have', label: 'Have / don\'t have (있어요 / 없어요)',
      mc: () => {
        const [w, en] = pick(HAVE_THINGS), have = Math.random() < 0.5;
        return have
          ? mcq(`“I have ${en}.”`, josa(w, '이 있어요.', '가 있어요.'), [josa(w, '이에요.', '예요.'), josa(w, '을 있어요.', '를 있어요.'), josa(w, '이 없어요.', '가 없어요.')], 'Having = N이/가 있어요')
          : mcq(`“I don't have ${en}.”`, josa(w, '이 없어요.', '가 없어요.'), [josa(w, '이 아니에요.', '가 아니에요.'), josa(w, '을 없어요.', '를 없어요.'), josa(w, '이 있어요.', '가 있어요.')], 'Not having = N이/가 없어요 (아니에요 means “is not [N]”)');
      },
      typed: () => {
        const [w, en] = pick(HAVE_THINGS), have = Math.random() < 0.5;
        return Math.random() < 0.5
          ? { sentence: `“I ${have ? 'have' : "don't have"} ${en}.” → ${josa(w, '이', '가')} ___어요.`, blank: have ? '있' : '없', hint: 'have = 있다 · not have = 없다' }
          : { sentence: `“I ${have ? 'have' : "don't have"} ${en}.” → ${w}___ ${have ? '있' : '없'}어요.`, blank: hasBatchim(w) ? '이' : '가', hint: 'subject particle', why: batchimWhy(w, '이', '가') };
      },
    },
    {
      type: 'honorific', label: 'Honorific ~(으)세요',
      typed: () => {
        const [d, h, e] = pick(HONORIFICS);
        return { sentence: `${d} (${e}) → honorific: ___`, blank: h, hint: 'Stem ends in a consonant → 으세요; in a vowel → 세요', why: `${d} → ${h}`, wide: true };
      },
      mc: () => {
        const [d, h, e] = pick(HONORIFICS), stem = d.slice(0, -1);
        const ask = ['앉다', '읽다', '가다', '쓰다', '보다', '인사하다'].includes(d);
        return mcq(ask ? `Politely ask someone to <strong>${e}</strong> (${d}):` : `Honorific form of <span class="quiz-korean">${d}</span> (${e}):`, h,
          [hasBatchim(stem) ? stem + '세요' : stem + '으세요', stem + '어세요', stem + '아요', d + '세요'], `${stem.slice(-1)} ${hasBatchim(stem) ? 'ends in a consonant → 으세요' : 'ends in a vowel → 세요'}`);
      },
    },
    {
      type: 'honorific-is', label: 'Honorific “is”: 이세요 / 세요',
      typed: () => {
        const [w, en] = pick([['선생님', 'a teacher'], ['교수', 'a professor'], ['한국 사람', 'Korean'], ['미국 사람', 'American'], ['이민수 선생님', 'Professor Minsoo Lee'], ['한국어 선생님', 'the Korean teacher']]);
        return { sentence: `(About your teacher) ${w}___. (“He/She is ${en}.”)`, blank: hasBatchim(w) ? '이세요' : '세요', hint: `Last syllable: “${w.slice(-1)}”`, why: batchimWhy(w, '이세요', '세요') };
      },
    },
    {
      type: 'floor', label: 'Floors (Sino-Korean + 층)',
      mc: () => {
        const n = randInt(1, 15);
        return mcq(`How do you read <strong>${n}층</strong>?`, `${sino(n)} 층`, [`${nativeCounting(n)} 층`, `${sino(n % 9 + 1)} 층`, `${sino(n)} 명`], 'Floors use Sino-Korean numbers.');
      },
      typed: () => {
        const n = randInt(1, 12);
        return { sentence: `${n}층 → ___ 층 (read the number)`, blank: sino(n), hint: 'Sino-Korean: 일 이 삼 사 오…' };
      },
    },
  ],

  grammar: [
    {
      id: 'G3.1', tag: 'Lesson 3', title: 'Location: N이/가 [place]<em>에 있어요</em>',
      html: `<div class="grammar-body">To say where something is: <strong>thing + place (+ position word) + 에 + 있어요</strong>.<br>
        Ask with <span class="ko">어디</span> right before 있어요 (에 is usually dropped): <span class="ko">서점이 어디 있어요?</span></div>
        <table class="rule-table">
          <tr><th>Thing</th><th>Place</th><th>Position</th><th></th></tr>
          <tr><td>유니온 빌딩은</td><td>우체국</td><td>앞 front</td><td>에 있어요</td></tr>
          <tr><td>학생회관은</td><td>유니온 빌딩</td><td>뒤 behind</td><td>에 있어요</td></tr>
          <tr><td>가방은</td><td>의자</td><td>옆 beside</td><td>에 있어요</td></tr>
          <tr><td>학교 식당은</td><td>유니온 빌딩</td><td>안 inside</td><td>에 있어요</td></tr>
          <tr><td>책은</td><td>책상</td><td>위 on/above</td><td>에 있어요</td></tr>
          <tr><td>가방은</td><td>책상</td><td>밑 under</td><td>에 있어요</td></tr>
        </table>
        <div class="example-box">
          <p>A: 서점이 어디 <b>있어요</b>? — B: 우체국 옆<b>에 있어요</b>.</p>
          <p>학교 식당은 도서관 밑<b>에도</b> 있어요. (은/는, 도 can follow 에 — 이/가 cannot)</p>
        </div>
        <div class="grammar-body" style="margin-top:10px"><strong>이에요 vs. 있어요</strong> (p. 91):
          <span class="ko">저는 학생이에요</span> ✓ (A is B) · <span class="ko">학교 식당은 유니온 빌딩에 있어요</span> ✓ (where it is).<br>
          ✗ 저는 학생 있어요 · ✗ 학교 식당은 유니온 빌딩이에요</div>`,
    },
    {
      id: 'G3.2', tag: 'Lesson 3', title: 'Changing the topic: <em>은/는</em> and <em>N은/는요?</em>',
      html: `<div class="grammar-body">Put 은/는 on a new item to switch the conversation to it.
        <span class="ko">N은/는요?</span> = “What about N?” — the rest of the question is understood.</div>
        <div class="example-box">
          <p>유미: 저… 학교 식당이 어디 있어요? — 리사: 기숙사 1층에 있어요.</p>
          <p>유미: 기숙사<b>는</b> 어디 있어요? — 리사: 학생회관 앞에 있어요.</p>
          <p>스티브: 우체국이 어디 있어요? — 마이클: 도서관 뒤에 있어요.</p>
          <p>스티브: 서점<b>은요</b>? — 마이클: 학생회관 안에 있어요.</p>
        </div>`,
    },
    {
      id: 'G3.3', tag: 'Lesson 3', title: 'Having / not having: N이/가 <em>있어요 / 없어요</em>',
      html: `<div class="grammar-body"><span class="ko">있다</span> = to exist / to have · its opposite <span class="ko">없다</span> = to not exist / to not have.<br>
        • Possession: <strong>N이/가 있어요/없어요</strong> (이/가 is often dropped in speech)<br>
        • Existence in a place: <strong>[place]에 있어요/없어요</strong></div>
        <div class="example-box">
          <p>선생님: 유미 씨, 한국어 사전 <b>있어요</b>? — 유미: 네, <b>있어요</b>. 그런데 집에 있어요.</p>
          <p>선생님: 질문 <b>있어요</b>? — 리사: 아니요, <b>없어요</b>.</p>
          <p>오늘 한국어 수업이 <b>있어요</b>. · 영어 사전이 <b>없어요</b>.</p>
          <p>지금 도서관이 <b>없어요</b>. — There's no library right now.</p>
        </div>
        <table class="rule-table">
          <tr><th>Meaning</th><th>Use</th><th>Example</th></tr>
          <tr><td>A is (not) B</td><td>이에요 / 아니에요</td><td>도서관이 아니에요 = it isn't the library</td></tr>
          <tr><td>A exists / doesn't</td><td>있어요 / 없어요</td><td>도서관이 없어요 = there is no library</td></tr>
        </table>`,
    },
    {
      id: 'G3.4', tag: 'Lesson 3', title: 'Honorific ending: <em>~(으)세요</em>',
      html: `<div class="grammar-body">The respectful version of ~어요/아요. Use it:<br>
        • talking <strong>to</strong> someone you respect: <span class="ko">선생님, 우산 있으세요?</span><br>
        • talking <strong>about</strong> someone you respect: <span class="ko">선생님이 아주 좋으세요.</span><br>
        • for polite requests: <span class="ko">앉으세요.</span> = Please sit.<br>
        <strong>Never about yourself</strong> — the professor answers 아니요, 없어요.</div>
        <table class="rule-table">
          <tr><th>after a consonant → 으세요</th><th>after a vowel → 세요</th></tr>
          <tr><td>좋다 → 좋<strong>으세요</strong></td><td>크다 → 크<strong>세요</strong></td></tr>
          <tr><td>앉다 → 앉<strong>으세요</strong> (please sit)</td><td>가다 → 가<strong>세요</strong> (please go)</td></tr>
          <tr><td>읽다 → 읽<strong>으세요</strong> (please read)</td><td>인사하다 → 인사하<strong>세요</strong></td></tr>
          <tr><td>있다 → 있<strong>으세요</strong></td><td>누구 → 누구<strong>세요</strong>? (who is it?)</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:10px">Honorific “is”: <span class="ko">N이세요</span> after a consonant (선생님<b>이세요</b>, 한국 사람<b>이세요</b>) · <span class="ko">N세요</span> after a vowel (교수<b>세요</b>)</div>
        <div class="example-box">
          <p>소피아: 한국어 반 선생님이 <b>누구세요</b>? — 리사: 이민수 <b>선생님이세요</b>.</p>
          <p>스티브 씨, <b>앉으세요</b>. — Steve, please have a seat.</p>
        </div>`,
    },
    {
      id: '', tag: 'Lesson 3 · Expressions', title: 'Key expressions',
      html: `<table class="rule-table">
          <tr><th>Korean</th><th>Meaning</th></tr>
          <tr><td>저…</td><td>Uh… (hesitation before asking)</td></tr>
          <tr><td>N이/가 어디 있어요?</td><td>Where is N?</td></tr>
          <tr><td>N은/는요?</td><td>What about N?</td></tr>
          <tr><td>오늘 수업 있으세요?</td><td>Do you have class today? (respectful)</td></tr>
          <tr><td>누구 + 가 → 누가</td><td>who (as subject): 누가 학교에 있어요?</td></tr>
          <tr><td>A. 그래서 B.</td><td>A. So B. — 내일 시험이 있어요. 그래서 공부해요.</td></tr>
          <tr><td>A. 그런데 B.</td><td>A. But B. — 기숙사가 넓어요. 그런데 아주 싸요.</td></tr>
          <tr><td>매일 열심히</td><td>diligently every day</td></tr>
        </table>`,
    },
  ],

  reference: [
    {
      title: 'Position words (tap 🔊 to hear)',
      html: `<div class="vocab-grid">${[
        ['위', 'on top, above', '책상 위에'], ['밑', 'under, below', '책상 밑에'], ['앞', 'in front', '우체국 앞에'], ['뒤', 'behind', '도서관 뒤에'],
        ['옆', 'beside', '의자 옆에'], ['안', 'inside', '빌딩 안에'], ['밖', 'outside', '교실 밖에'],
      ].map(([ko, en, ex]) => `<div class="num-card"><span class="num-ko" style="flex:0 0 56px;margin-left:0">${ko}</span>
        <span style="flex:1">${en}<br><span class="vocab-note">${ex}</span></span>${speakBtn(ex)}</div>`).join('')}</div>`,
    },
    {
      title: 'Floors (Sino-Korean number + 층)',
      html: `<div class="grammar-block"><table class="rule-table">
        <tr><th>Floor</th><th>Read as</th></tr>
        <tr><td>1층</td><td>일 층</td></tr><tr><td>2층</td><td>이 층</td></tr><tr><td>3층</td><td>삼 층</td></tr>
        <tr><td>4층</td><td>사 층</td></tr><tr><td>5층</td><td>오 층</td></tr>
      </table></div>`,
    },
  ],
});
