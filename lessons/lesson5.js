// Lesson 5 · 서점에서 (At the Bookstore) — textbook pp. 142–162.
// Conversation 1 also keeps the teacher's extras from her "Vocab 5-1" video (탁구, 배드민턴, 피자, 아침, 생신, 근데, 실험실/연구실).

// [place, English, things you do there] for the 에 / 에서 drill
const EESEO_PLACES = [
  ['도서관', 'the library', [['공부해요', 'study'], ['책을 읽어요', 'read a book']]],
  ['공원', 'the park', [['운동해요', 'exercise'], ['테니스를 쳐요', 'play tennis'], ['친구를 만나요', 'meet a friend']]],
  ['백화점', 'the department store', [['쇼핑해요', 'shop'], ['선물을 사요', 'buy a gift']]],
  ['커피숍', 'the coffee shop', [['커피를 마셔요', 'drink coffee'], ['친구를 만나요', 'meet a friend'], ['공부해요', 'study']]],
  ['서점', 'the bookstore', [['책을 사요', 'buy books'], ['일해요', 'work']]],
  ['랩', 'the lab', [['일해요', 'work'], ['공부해요', 'study']]],
  ['학교 식당', 'the school cafeteria', [['점심을 먹어요', 'eat lunch'], ['햄버거를 먹어요', 'eat a hamburger']]],
  ['집', 'home', [['일해요', 'work'], ['저녁을 먹어요', 'eat dinner'], ['전화해요', 'make a phone call']]],
];

// [object, dictionary verb, purpose form, English, place, place in English] for the ~(으)러 drill (G5.3)
const PURPOSES = [
  ['점심', '먹다', '먹으러', 'to eat lunch', '학교 식당', 'the school cafeteria'],
  ['커피', '마시다', '마시러', 'to drink coffee', '커피숍', 'the coffee shop'],
  ['선물', '사다', '사러', 'to buy a gift', '백화점', 'the department store'],
  ['옷', '사다', '사러', 'to buy clothes', '백화점', 'the department store'],
  ['책', '사다', '사러', 'to buy a book', '서점', 'the bookstore'],
  ['테니스', '치다', '치러', 'to play tennis', '공원', 'the park'],
  ['친구', '만나다', '만나러', 'to meet a friend', '커피숍', 'the coffee shop'],
  ['', '공부하다', '공부하러', 'to study', '도서관', 'the library'],
  ['책', '읽다', '읽으러', 'to read', '도서관', 'the library'],
  ['한국어', '연습하다', '연습하러', 'to practice Korean', '랩', 'the lab'],
  ['', '운동하다', '운동하러', 'to exercise', '공원', 'the park'],
  ['수업', '듣다', '들으러', 'to take a class', '학교', 'school'],
  ['', '걷다', '걸으러', 'to take a walk', '공원', 'the park'],
];

addLesson({
  id: 5,
  title: '서점에서',
  english: 'At the Bookstore',
  conversations: { 1: '서점에서 친구를 만나요.', 2: '선물 사러 백화점에 가요.' },

  vocab: [
    { conv: 1, k: '또', e: 'again', pos: 'adverb', note: '다음에 또 봐요. = See you again next time.' },
    { conv: 1, k: '에', e: 'to (a destination); at, in, on (a time)', pos: 'particle', note: '학교에 가요 = I go to school · still: 집에 있어요' },
    { conv: 1, k: '에서', e: 'in, at (where an action happens)', pos: 'particle', note: '도서관에서 공부해요 · compare 도서관에 가요 / 있어요' },
    { conv: 1, k: '그런데 (근데)', e: 'by the way; but', pos: 'conjunction', note: '근데 = the spoken short form · 그런데 어디 가세요? = By the way, where are you going?', accept: ['그런데', '근데'], syn: 'but' },
    { conv: 1, k: '그럼', e: '(if so) then', pos: 'conjunction', note: '그럼, 다음에 또 봐요.' },
    { conv: 1, k: '가르치다 (가르쳐요)', e: 'to teach', pos: 'verb', note: '뭘 가르치세요? — 물리학을 가르쳐요.', accept: ['가르치다', '가르쳐요'] },
    { conv: 1, k: '사다 (사요)', e: 'to buy', pos: 'verb', accept: ['사다', '사요'] },
    { conv: 1, k: '치다 (쳐요)', e: 'to play (tennis, ping-pong, badminton); to hit', pos: 'verb', note: '테니스를 쳐요 · 이 + 어 → 여', accept: ['치다', '쳐요'] },
    { conv: 1, k: '테니스', e: 'tennis', pos: 'noun', note: '테니스를 치다' },
    { conv: 1, k: '탁구', e: 'table tennis, ping-pong', pos: 'noun', note: '탁구를 치다 (teacher\'s video)' },
    { conv: 1, k: '배드민턴', e: 'badminton', pos: 'noun', note: '배드민턴을 치다 (teacher\'s video)' },
    { conv: 1, k: '공원', e: 'park', pos: 'noun' },
    { conv: 1, k: '다음', e: 'next, following', pos: 'noun', note: '다음에 봐요 = See you next time' },
    { conv: 1, k: '랩 (실험실, 연구실)', e: 'lab', pos: 'noun', note: '컴퓨터 랩 · 실험실 = (science) lab · 연구실 = research lab; a professor\'s office', accept: ['랩', '실험실', '연구실'] },
    { conv: 1, k: '백화점', e: 'department store', pos: 'noun' },
    { conv: 1, k: '생일 (생신)', e: 'birthday', pos: 'noun', note: '생신 = honorific (a parent\'s or teacher\'s birthday)', accept: ['생일'] },
    { conv: 1, k: '선물 (선물하다)', e: 'present, gift; to give a gift', pos: 'noun', accept: ['선물', '선물하다'] },
    { conv: 1, k: '쇼핑 (쇼핑하다)', e: 'shopping; to shop', pos: 'noun', accept: ['쇼핑', '쇼핑하다'] },
    { conv: 1, k: '연습 (연습하다)', e: 'practice; to practice', pos: 'noun', accept: ['연습', '연습하다'] },
    { conv: 1, k: '오래간만 (오랜만)', e: 'after a long time', pos: 'noun', note: '오래간만이에요! = Long time no see!', accept: ['오래간만', '오랜만'] },
    { conv: 1, k: '운동 (운동하다)', e: 'exercise; to exercise', pos: 'noun', accept: ['운동', '운동하다'] },
    { conv: 1, k: '일 (일하다)', e: 'work; to work', pos: 'noun', note: 'not the number 일 (one) · 서점에서 일을 해요', accept: ['일', '일하다'] },
    { conv: 1, k: '전화 (전화하다)', e: 'phone call; to call', pos: 'noun', accept: ['전화', '전화하다'] },
    { conv: 1, k: '아침', e: 'morning; breakfast', pos: 'noun', note: 'also in Lesson 2' },
    { conv: 1, k: '점심', e: 'lunch', pos: 'noun' },
    { conv: 1, k: '저녁', e: 'evening; dinner', pos: 'noun', note: 'two meanings, like 아침' },
    { conv: 1, k: '커피숍 (카페)', e: 'coffee shop, café', pos: 'noun', accept: ['커피숍', '카페'] },
    { conv: 1, k: '햄버거', e: 'hamburger', pos: 'noun' },
    { conv: 1, k: '피자', e: 'pizza', pos: 'noun', note: '(teacher\'s video)' },

    { conv: 2, k: '가게', e: 'store', pos: 'noun', note: '옷가게 = clothing store' },
    { conv: 2, k: '옷', e: 'clothes', pos: 'noun' },
    { conv: 2, k: '오전', e: 'morning; a.m.', pos: 'noun', note: '오전 10시 = 10 a.m.' },
    { conv: 2, k: '오후', e: 'afternoon; p.m.', pos: 'noun', note: '오후 3시 = 3 p.m.' },
    { conv: 2, k: '이번', e: 'this (time)', pos: 'noun', note: '이번 토요일 = this Saturday · 이번 학기 = this semester' },
    { conv: 2, k: '학기', e: 'semester, academic term', pos: 'noun' },
    { conv: 2, k: '정치학', e: 'political science', pos: 'noun' },
    { conv: 2, k: '월요일', e: 'Monday', pos: 'noun', note: '월요일에 = on Monday' },
    { conv: 2, k: '화요일', e: 'Tuesday', pos: 'noun' },
    { conv: 2, k: '수요일', e: 'Wednesday', pos: 'noun' },
    { conv: 2, k: '목요일', e: 'Thursday', pos: 'noun' },
    { conv: 2, k: '금요일', e: 'Friday', pos: 'noun' },
    { conv: 2, k: '토요일', e: 'Saturday', pos: 'noun' },
    { conv: 2, k: '일요일', e: 'Sunday', pos: 'noun' },
    { conv: 2, k: '걷다 (걸어요)', e: 'to walk', pos: 'verb', note: 'ㄷ → ㄹ before a vowel: 걸어요, 걸으세요, 걸으러', accept: ['걷다', '걸어요'] },
    { conv: 2, k: '듣다 (들어요)', e: 'to listen; to take (a course)', pos: 'verb', note: '한국어 수업을 들어요 = I\'m taking Korean · ㄷ → ㄹ: 들어요, 들으세요, 들으러', accept: ['듣다', '들어요'] },
    { conv: 2, k: '좋아하다 (좋아해요)', e: 'to like', pos: 'verb', note: '테니스 좋아하세요? — 네, 좋아해요. · also in Lesson 2', accept: ['좋아하다', '좋아해요'] },
    { conv: 2, k: '같이', e: 'together', pos: 'adverb', note: 'pronounced [가치] · 저하고 같이 = together with me' },
    { conv: 2, k: '언제', e: 'when', pos: 'adverb', note: '생일이 언제예요? = When is your birthday?' },
    { conv: 2, k: '과목', e: 'course, subject (counter)', pos: 'counter', note: '몇 과목 들으세요? — 두 과목 들어요. (native numbers)' },
    { conv: 2, k: '시', e: 'o\'clock (counter)', pos: 'counter', note: 'native numbers: 세 시, 열두 시 · (시간 = hours long)' },
    { conv: 2, k: '분', e: 'minute (counter)', pos: 'counter', note: 'Sino numbers: 삼십 분 (= 반, half past)' },
    { conv: 2, k: '하고', e: 'with', pos: 'particle', note: '저하고 같이 = together with me · also “and” (Lesson 4)', syn: 'and' },
    { conv: 2, k: '~(으)러', e: 'in order to (+ 가요/와요)', pos: 'suffix', note: '점심 먹으러 식당에 가요 · 테니스 치러 가요', noSpell: true },
  ],

  // [dictionary, meaning, polite ~어요, formal ~습니다, honorific ~(으)세요] — formal/honorific only when the book or teacher uses them.
  conjugations: [
    ['가르치다', 'to teach', '가르쳐요|가르치어요', null, '가르치세요'],
    ['사다', 'to buy', '사요', null, null],
    ['치다', 'to play (tennis etc.)', '쳐요|치어요', null, null],
    ['선물하다', 'to give a gift', '선물해요', null, null],
    ['쇼핑하다', 'to shop', '쇼핑해요', null, null],
    ['연습하다', 'to practice', '연습해요', null, '연습하세요'],
    ['운동하다', 'to exercise', '운동해요', null, null],
    ['일하다', 'to work', '일해요', null, null],
    ['전화하다', 'to call', '전화해요', null, null],
    ['듣다', 'to listen; to take (a course)', '들어요', null, '들으세요'],
    ['걷다', 'to walk', '걸어요', null, '걸으세요'],
    ['좋아하다', 'to like', '좋아해요', null, '좋아하세요'],
  ],

  quiz: [
    { q: '오래간만이에요! means:', opts: ['Long time no see!', 'See you next time!', 'Nice to meet you!', 'It\'s been a long day!'], ans: 0, why: '= 오랜만이에요' },
    { q: 'Jenny: 그런데 어디 가세요? — 그런데 here means:', opts: ['by the way', 'but', 'so', 'then'], ans: 0, why: '그런데 = “but,” and also “by the way” when changing the topic' },
    { q: '“I\'m going to the coffee shop.”', opts: ['커피숍에 가요.', '커피숍에서 가요.', '커피숍이 가요.', '커피숍에 가세요.'], ans: 0, why: 'Destination → 에. (가세요 is honorific — not for yourself.)' },
    { q: '“My friend works at the bookstore in front of the school.”', opts: ['친구가 학교 앞 서점에서 일을 해요.', '친구가 학교 앞 서점에 일을 해요.', '친구가 학교 앞 서점을 일을 해요.', '친구가 일을 학교 앞 서점에 해요.'], ans: 0, why: 'Where an action happens → 에서' },
    { q: '그럼, 다음에 또 봐요. means:', opts: ['Okay then, see you again next time.', 'Then, see you tomorrow.', 'So, where are you going next?', 'Then, let\'s meet again today.'], ans: 0 },
    { q: 'You visit a friend\'s home. Leaving, you say:', opts: ['안녕히 계세요.', '안녕히 가세요.', '오래간만이에요.', '어서 오세요.'], ans: 0, why: 'The one leaving says 계세요 (“stay in peace”); the one staying says 가세요. On the street, both say 가세요.' },
    { q: 'You part from a friend on the street. You both say:', opts: ['안녕히 가세요.', '안녕히 계세요.', '다음에 와요.', '안녕히 있어요.'], ans: 0, why: 'Both are leaving → 가세요 (“go in peace”)' },
    { q: '어디 가세요? is short for:', opts: ['어디에 가세요?', '어디에서 가세요?', '어디를 가세요?', '어디가 가세요?'], ans: 0, why: '에 is often dropped after 어디' },
    { q: 'Korean word order is:', opts: ['subject – place – object – verb', 'subject – verb – object – place', 'verb – subject – object', 'object – verb – subject – place'], ans: 0, why: '유미가 교실에서 한국어를 공부해요. The verb comes last; the rest can move around.' },
    { q: '“Professor Lee teaches Korean at the university.”', opts: ['이민수 선생님이 대학교에서 한국어를 가르치세요.', '이민수 선생님이 대학교에 한국어를 가르치세요.', '이민수 선생님이 대학교에서 한국어가 가르치세요.', '이민수 선생님이 가르치세요 대학교에서 한국어를.'], ans: 0, why: 'Place of action → 에서 · object → 을/를 · verb last' },
    // Conversation 2
    { q: '“I\'m going to the department store to buy a birthday gift for my friend.”', opts: ['친구 생일 선물 사러 백화점에 가요.', '친구 생일 선물 사으러 백화점에 가요.', '친구 생일 선물 사러 백화점에서 가요.', '친구 생일 선물 사요 백화점에 가요.'], ans: 0, why: 'Vowel stem 사 + 러 · destination + 에' },
    { q: '친구 생일이 언제예요? asks:', opts: ['When is your friend\'s birthday?', 'What day is your friend\'s birthday party?', 'Where is your friend\'s birthday?', 'How old is your friend?'], ans: 0 },
    { q: 'Sophia: 저는 수업 들으러 학교에 가요. means:', opts: ['I\'m going to school to take a class.', 'I\'m going to school to listen to music.', 'I\'m taking a class at school.', 'I\'m coming from class at school.'], ans: 0, why: '듣다 = to take (a course) · 들으러 = in order to take' },
    { q: '수업이 몇 시에 있어요? — 10 a.m.', opts: ['오전 열 시에 있어요.', '오후 열 시에 있어요.', '오전 십 시에 있어요.', '아침 십 시에 있어요.'], ans: 0, why: 'Hours use native numbers (열 시) · a.m. = 오전' },
    { q: '그럼, 오후에 저하고 같이 백화점에 가요. means:', opts: ['Then let\'s go to the department store together in the afternoon.', 'Then I go to the department store with you in the morning.', 'Then, are you going to the department store this afternoon?', 'Then I\'ll go to the department store alone this afternoon.'], ans: 0, why: 'N하고 같이 = together with N · ~어요 can also mean “let\'s”' },
    { q: '3:30 can be said:', opts: ['세 시 삼십 분 or 세 시 반', '삼 시 삼십 분 or 삼 시 반', '세 시 서른 분 or 세 시 반', '세 시 삼십 분 only'], ans: 0, why: '시 → native · 분 → Sino · 30분 = 반 (half)' },
    { q: 'Polite form of 듣다:', opts: ['들어요', '듣어요', '들러요', '드러요'], ans: 0, why: 'ㄷ → ㄹ before a vowel (ㄷ irregular)' },
    { q: 'Honorific of 걷다:', opts: ['걸으세요', '걷으세요', '걸세요', '걷세요'], ans: 0, why: 'ㄷ → ㄹ before 으 · same pattern as 들으세요' },
    { q: '받다 (to receive) → polite:', opts: ['받아요', '발아요', '받어요', '바다요'], ans: 0, why: 'Not every ㄷ verb is irregular — 받다 stays regular.' },
    { q: '이번 학기에 몇 과목 들으세요? asks:', opts: ['How many courses are you taking this semester?', 'Which courses do you like this semester?', 'How many semesters have you studied?', 'What time is your class this semester?'], ans: 0 },
    { q: 'On the phone: A (at school) 오늘 학교에 오세요? — B (at home):', opts: ['네, 가요.', '네, 와요.', '네, 오세요.', '네, 가세요.'], ans: 0, why: 'B moves away from where B is → 가요 (와요 is wrong here)' },
    { q: '“Steve likes books a lot.”', opts: ['스티브가 책을 아주 좋아해요.', '스티브가 책이 아주 좋아해요.', '스티브가 아주 책을 좋아하세요.', '스티브가 책을 아주 좋아요.'], ans: 0, why: '좋아하다 takes an object (을/를) · 좋아요 = “is good”' },
  ],

  fill: [
    { sentence: '오래___이에요. (Long time no see.)', blank: '간만', hint: '오래간만 = 오랜만', type: 'Expression' },
    { sentence: '커피숍___ 가요. (to)', blank: '에', hint: 'destination', type: 'Particle' },
    { sentence: '친구가 서점___ 일을 해요. (at)', blank: '에서', hint: 'where the action happens', type: 'Particle' },
    { sentence: '공원___ 테니스를 쳐요. (at)', blank: '에서', hint: 'where the action happens', type: 'Particle' },
    { sentence: '부모님은 집___ 계세요. (at)', blank: '에', hint: 'just being somewhere (static)', type: 'Particle' },
    { sentence: '그럼, 다음에 ___ 봐요. (again)', blank: '또', hint: 'again', type: 'Vocab' },
    { sentence: '___, 어디 가세요? (By the way)', blank: ['그런데', '근데'], hint: 'by the way / but', type: 'Vocab' },
    { sentence: '테니스를 ___요. (치다)', blank: '쳐', hint: '이 + 어 → 여', type: 'Conjugation' },
    { sentence: '백화점에서 선물을 ___요. (사다)', blank: '사', hint: '아 + 아 → 아', type: 'Conjugation' },
    // Conversation 2
    { sentence: '선물 ___ 백화점에 가요. (사다 — in order to)', blank: '사러', hint: 'vowel stem + 러', type: '~(으)러' },
    { sentence: '점심 ___ 학교 식당에 가요. (먹다 — in order to)', blank: '먹으러', hint: 'consonant stem + 으러', type: '~(으)러' },
    { sentence: '저는 수업 ___ 학교에 가요. (듣다 — in order to)', blank: '들으러', hint: 'ㄷ → ㄹ before a vowel', type: '~(으)러' },
    { sentence: '공원에 ___ 가요. (걷다 — in order to)', blank: '걸으러', hint: 'ㄷ → ㄹ before a vowel', type: '~(으)러' },
    { sentence: '친구 생일이 ___예요? (when)', blank: '언제', hint: 'when', type: 'Vocab' },
    { sentence: '___ 토요일이에요. (this)', blank: '이번', hint: 'this (time)', type: 'Vocab' },
    { sentence: '수업이 오전 ___ 시에 있어요. (10)', blank: '열', hint: 'hours → native numbers', type: 'Time' },
    { sentence: '세 시 ___ 분 괜찮아요? (30)', blank: '삼십', hint: 'minutes → Sino numbers', type: 'Time' },
    { sentence: '오후에 저하고 ___ 백화점에 가요. (together)', blank: '같이', hint: 'pronounced [가치]', type: 'Vocab' },
    { sentence: '저는 한국어 수업을 ___요. (듣다 — take)', blank: '들어', hint: 'ㄷ → ㄹ before a vowel', type: 'ㄷ irregular' },
    { sentence: '이번 학기에 몇 과목 ___? (듣다 — honorific)', blank: '들으세요', hint: 'ㄷ → ㄹ + 으세요', type: 'ㄷ irregular' },
    { sentence: '테니스 ___? (좋아하다 — honorific)', blank: '좋아하세요', hint: '하 + 세요', type: 'Honorific' },
    { sentence: '___에 수업이 없어요. (Sunday)', blank: '일요일', hint: 'Sunday', type: 'Vocab' },
  ],

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
    {
      type: 'purpose', label: '~(으)러 가요 (going somewhere to do something)', weight: 2,
      mc: () => {
        const [obj, dict, form, en, p, pEn] = pick(PURPOSES), stem = dict.slice(0, -1), o = obj ? obj + ' ' : '';
        const irregular = !form.startsWith(stem); // 듣 → 들, 걷 → 걸
        const say = f => `${o}${f} ${p}에 가요.`;
        return mcq(`“I'm going to ${pEn} ${en}.”`, say(form),
          [say(hasBatchim(stem) ? stem + '러' : stem + '으러'), irregular && say(stem + '으러'), `${o}${form} ${p}에서 가요.`, `${o}${form} ${p}에 가세요.`],
          `${irregular ? `${dict} is ㄷ-irregular (${stem} → ${form[0]}) → ${form}` : batchimWhy(stem, '으러', '러')} · destination + 에 가요`);
      },
      typed: () => {
        const [obj, dict, form, en, p, pEn] = pick(PURPOSES);
        return { sentence: `${obj ? obj + ' ' : ''}___ ${p}에 가요. (${dict} — “I'm going to ${pEn} ${en}.”)`, blank: form, hint: 'consonant stem + 으러 · vowel stem + 러 · ㄷ → ㄹ' };
      },
    },
    {
      type: 'time', label: 'Telling time (시 native · 분 Sino)',
      mc: () => {
        const h = randInt(1, 12), m = pick([0, 30, 5 * randInt(1, 11), randInt(1, 59)]), ampm = pick(['', '', '오전', '오후']);
        const pre = ampm ? ampm + ' ' : '', half = m === 30 && Math.random() < 0.5;
        const say = (hh, mm, a = pre) => `${a}${hh} 시${m ? ' ' + mm : ''}`;
        const min = half ? '반' : `${sino(m)} 분`;
        const clock = `${h}:${String(m).padStart(2, '0')}${ampm === '오전' ? ' a.m.' : ampm === '오후' ? ' p.m.' : ''}`;
        return mcq(`“${clock}” in Korean:`, say(nativeCounting(h), min),
          [say(sino(h), min), m && !half && say(nativeCounting(h), `${nativeCounting(m)} 분`), m && !half && say(sino(h), `${nativeCounting(m)} 분`),
            !m && say(nativeFull(h), min), `${pre}${nativeCounting(h)} 시간${m ? ' ' + min : ''}`, ampm && say(nativeCounting(h), min, (ampm === '오전' ? '오후' : '오전') + ' ')],
          `Hours (시) → native: ${nativeCounting(h)} 시${m ? ` · minutes (분) → Sino: ${sino(m)} 분${m === 30 ? ' (or 반)' : ''}` : ''}${ampm ? ' · a.m. = 오전, p.m. = 오후' : ''}`);
      },
      typed: () => {
        const h = randInt(1, 12), m = randInt(1, 59), clock = `${h}:${String(m).padStart(2, '0')}`;
        return Math.random() < 0.5
          ? { sentence: `${clock} → ___ 시 ${sino(m)} 분`, blank: nativeCounting(h), hint: 'hours → native numbers (한, 두, 세…)' }
          : { sentence: `${clock} → ${nativeCounting(h)} 시 ___ 분`, blank: sino(m), hint: 'minutes → Sino numbers (일, 이, 삼…)' };
      },
    },
  ],

  grammar: [
    {
      id: 'G5.1', tag: 'Lesson 5', title: '<em>에</em> vs. <em>에서</em>',
      html: `<div class="grammar-body"><span class="ko">에</span> = <strong>static location</strong> (있어요, 없어요, 계세요) · <strong>destination</strong> (가요, 와요) · also a time (오후에, 토요일에).<br>
        <span class="ko">에서</span> = <strong>dynamic location</strong> — where you <em>do</em> something (공부해요, 일해요, 운동해요, 먹어요…).</div>
        <div class="example-box">
          <p>도서관<b>에</b> 있어요. — I'm at the library. [static]</p>
          <p>도서관<b>에</b> 가요. — I go to the library. [goal]</p>
          <p>도서관<b>에서</b> 공부해요. — I study at the library. [dynamic]</p>
          <p>A: 어디서 테니스를 쳐요? — B: 공원<b>에서</b> 쳐요.</p>
          <p>A: 생일 선물을 어디에서 사요? — B: 백화점<b>에서</b> 사요.</p>
        </div>
        <div class="grammar-body" style="margin-top:8px">After 어디, 에 is often dropped: 어디(에) 가세요? · 어디(에)서 친구를 만나요? · 어제, 오늘, 내일 never take 에 (내일 봐요).</div>`,
    },
    {
      id: 'G5.2', tag: 'Lesson 5', title: 'Word order: subject – place – object – <em>verb</em>',
      html: `<div class="grammar-body">Korean puts the <strong>verb last</strong>. The other parts can move around because the particles mark their jobs.</div>
        <table class="rule-table">
          <tr><th>Who</th><th>Where</th><th>What</th><th>Do</th></tr>
          <tr><td>유미가</td><td>교실에서</td><td>한국어를</td><td>공부해요</td></tr>
          <tr><td>리사가</td><td>식당에서</td><td>햄버거를</td><td>먹어요</td></tr>
          <tr><td>이민수 선생님이</td><td>대학교에서</td><td>한국어를</td><td>가르치세요</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:8px">한국어를 유미가 교실에서 공부해요 is also fine — just keep the verb at the end.</div>`,
    },
    {
      id: 'G5.3', tag: 'Lesson 5', title: '<em>~(으)러</em> [place]에 가요 — going to do something',
      html: `<div class="grammar-body">Verb stem + <span class="ko">~(으)러</span> = “(in order) to,” only with 가다/오다. Consonant stem → <b>으러</b> · vowel stem → <b>러</b> · ㄷ-irregular: 듣 → <b>들으러</b>, 걷 → <b>걸으러</b>.</div>
        <table class="rule-table">
          <tr><th>Purpose</th><th>Destination</th><th>Go/come</th></tr>
          <tr><td>점심 먹<b>으러</b></td><td>한국 식당에</td><td>가요</td></tr>
          <tr><td>선물 사<b>러</b></td><td>백화점에</td><td>가요</td></tr>
          <tr><td>테니스 치<b>러</b></td><td>—</td><td>가요</td></tr>
        </table>
        <div class="example-box">
          <p>A: 어디 가세요? — B: 점심 <b>먹으러</b> 한국 식당에 가요.</p>
          <p>A: 어디 가세요? — B: 테니스 <b>치러</b> 가요. (the place can be left out)</p>
          <p>한국어를 <b>연습하러</b> 매일 컴퓨터 랩에 와요.</p>
        </div>`,
    },
    {
      id: 'G5.4', tag: 'Lesson 5', title: 'ㄷ-irregular verbs: <em>듣다, 걷다</em>',
      html: `<div class="grammar-body">Stem-final <b>ㄷ → ㄹ</b> before a vowel (어요, 으세요, 으러). Before a consonant it stays: 듣다, 듣고.</div>
        <table class="rule-table">
          <tr><th></th><th>~어요</th><th>~(으)세요</th><th>~(으)러</th></tr>
          <tr><td>듣다 (listen; take a course)</td><td>들어요</td><td>들으세요</td><td>들으러</td></tr>
          <tr><td>걷다 (walk)</td><td>걸어요</td><td>걸으세요</td><td>걸으러</td></tr>
          <tr><td>받다 (receive) — regular!</td><td>받아요</td><td>받으세요</td><td>받으러</td></tr>
        </table>
        <div class="example-box">
          <p>A: 이번 학기에 몇 과목 <b>들으세요</b>? — B: 두 과목 <b>들어요</b>.</p>
          <p>화(요일), 목(요일)에는 정치학 수업을 <b>들어요</b>.</p>
          <p>A: 어디 가세요? — B: 공원에 <b>걸으러</b> 가요.</p>
        </div>`,
    },
    {
      id: '', tag: 'Lesson 5 · Expressions', title: 'Time, days, goodbyes, and 가요 vs. 와요',
      html: `<div class="grammar-body"><strong>Time:</strong> <span class="ko">시</span> takes <b>native</b> numbers, <span class="ko">분</span> takes <b>Sino</b> numbers: 12:50 = 열두 시 오십 분 · 30분 = <b>반</b> (6시 반).<br>
        오전 10시 (a.m.) · 오후 3시 (p.m.) · 저녁 7시 · 밤 11시 · 새벽 4시 (dawn) · 지금 몇 시예요? — 열 시 이십사 분이에요.</div>
        <table class="rule-table">
          <tr><th>#</th><th>시 (native)</th><th>분 (Sino)</th></tr>
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => `<tr><td>${n}</td><td>${nativeCounting(n)} 시</td><td>${sino(n)} 분</td></tr>`).join('')}
        </table>
        <div class="grammar-body" style="margin-top:10px"><strong>Days:</strong> 월 · 화 · 수 · 목 · 금 · 토 · 일 + 요일 (Mon → Sun) · on Monday = 월요일<b>에</b> · 월(요일), 수(요일), 금(요일)에는 = on MWF</div>
        <div class="grammar-body" style="margin-top:10px"><strong>Goodbyes:</strong> the one <em>staying</em> says <span class="ko">안녕히 가세요</span> (go in peace); the one <em>leaving</em> says <span class="ko">안녕히 계세요</span> (stay in peace). Both leaving (on the street) → both say 안녕히 가세요.<br>
          <span class="ko">오래간만이에요 / 오랜만이에요</span> = Long time no see · <span class="ko">다음에 (또) 봐요</span> = See you next time · <span class="ko">N하고 같이</span> = together with N</div>
        <div class="grammar-body" style="margin-top:10px"><strong>가요 vs. 와요:</strong> 오다 = toward where the <em>speaker</em> is; 가다 = away. On the phone from home, to a friend at school: 오늘 학교에 오세요? — 네, <b>가요</b>. (와요 is wrong.)<br>
          <span class="ko">수업을 들어요</span> = I'm taking a class (literally “listen to”).</div>`,
    },
  ],

  reference: [],
});
