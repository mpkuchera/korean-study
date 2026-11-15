// Lesson 6 · 나의 하루 (My Day) — textbook pp. 164–188.

// N(으)로 (G6.1): 로 after a vowel or ㄹ, 으로 after any other consonant
const endsInL = n => (lastSyllable(n) - 0xAC00) % 28 === 8;
const ro = n => n + (hasBatchim(n) && !endsInL(n) ? '으로' : '로');
const roWhy = n => endsInL(n) ? `${n.slice(-1)} ends in ㄹ → 로` : batchimWhy(n, '으로', '로');

const VEHICLES = [['차', 'by car'], ['버스', 'by bus'], ['지하철', 'by subway'], ['자전거', 'by bicycle'], ['트럭', 'by truck']];
const TOOLS = [['볼펜', 'with a ballpoint pen', '쓰세요', 'write'], ['연필', 'with a pencil', '쓰세요', 'write'],
  ['한국어', 'in Korean', '말하세요', 'speak'], ['영어', 'in English', '말하세요', 'speak'], ['한국말', 'in Korean', '말하세요', 'speak']];
// [from, to, English] for 에서 … 까지 얼마나 걸려요?
const ROUTES = [['집', '학교', 'home to school'], ['기숙사', '도서관', 'the dorm to the library'], ['한인타운', '학교', 'Koreatown to school'],
  ['아파트', '공원', 'the apartment to the park'], ['교실', '서점', 'the classroom to the bookstore']];

// [before the verb, dictionary, present, past, English present, English past] for the past-tense drill (G6.3)
const ACTIVITIES = [
  ['수영장에서', '수영하다', '수영해요', '수영했어요', 'swim at the pool', 'swam at the pool'],
  ['친구하고 테니스를', '치다', '쳐요', '쳤어요', 'play tennis with a friend', 'played tennis with a friend'],
  ['도서관에서 숙제를', '하다', '해요', '했어요', 'do homework at the library', 'did homework at the library'],
  ['백화점에서', '쇼핑하다', '쇼핑해요', '쇼핑했어요', 'shop at the department store', 'shopped at the department store'],
  ['친구를', '만나다', '만나요', '만났어요', 'meet a friend', 'met a friend'],
  ['커피숍에서 커피를', '마시다', '마셔요', '마셨어요', 'drink coffee at the coffee shop', 'drank coffee at the coffee shop'],
  ['집에서 음악을', '듣다', '들어요', '들었어요', 'listen to music at home', 'listened to music at home'],
  ['아침을', '먹다', '먹어요', '먹었어요', 'eat breakfast', 'ate breakfast'],
  ['기숙사 식당에', '가다', '가요', '갔어요', 'go to the dorm cafeteria', 'went to the dorm cafeteria'],
  ['공원에서', '운동하다', '운동해요', '운동했어요', 'exercise in the park', 'exercised in the park'],
  ['일곱 시에', '일어나다', '일어나요', '일어났어요', 'get up at seven', 'got up at seven'],
];
const PAST_TIMES = [['어제', 'Yesterday'], ['어제 오후에', 'Yesterday afternoon'], ['지난 주말에', 'Last weekend'], ['지난 토요일에', 'Last Saturday']];
const HABIT_TIMES = [['보통', 'usually'], ['매일', 'every day'], ['자주', 'often']];
// [object, polite, past, English] for 안 / 못 with ordinary verbs; [noun, English] for N 안/못 하다
const NEG_VERBS = [['아침을', '먹어요', '먹었어요', 'eat breakfast'], ['커피를', '마셔요', '마셨어요', 'drink coffee'],
  ['텔레비전을', '봐요', '봤어요', 'watch TV'], ['학교에', '가요', '갔어요', 'go to school'], ['테니스를', '쳐요', '쳤어요', 'play tennis']];
const NEG_HADA = [['수영', 'swim'], ['운동', 'exercise'], ['공부', 'study'], ['전화', 'call'], ['숙제', 'do homework'], ['쇼핑', 'go shopping'], ['축구', 'play soccer'], ['일', 'work']];

addLesson({
  id: 6,
  title: '나의 하루',
  english: 'My Day',
  conversations: { 1: '차로 한 시간쯤 걸려요.', 2: '어제 뭐 했어요?' },

  vocab: [
    { conv: 1, k: '날씨', e: 'weather', pos: 'noun', note: '날씨가 어때요? — 추워요 / 더워요' },
    { conv: 1, k: '말 (말하다)', e: 'speech, words; to speak', pos: 'noun', note: '한국어로 말하세요. = Please speak in Korean.', accept: ['말', '말하다'] },
    { conv: 1, k: '버스', e: 'bus', pos: 'noun' },
    { conv: 1, k: '볼펜', e: 'ballpoint pen', pos: 'noun' },
    { conv: 1, k: '비행기', e: 'airplane', pos: 'noun' },
    { conv: 1, k: '연필', e: 'pencil', pos: 'noun', note: '연필로 = with a pencil (ㄹ → 로)' },
    { conv: 1, k: '자전거', e: 'bicycle', pos: 'noun' },
    { conv: 1, k: '지하철', e: 'subway', pos: 'noun', note: '지하철로 = by subway (ㄹ → 로)' },
    { conv: 1, k: '차', e: 'car', pos: 'noun', note: '차로 = by car' },
    { conv: 1, k: '트럭', e: 'truck', pos: 'noun' },
    { conv: 1, k: '하루', e: '(one) day', pos: 'noun', note: '나의 하루 = my day' },
    { conv: 1, k: '한인타운', e: 'Koreatown', pos: 'noun' },
    { conv: 1, k: '가깝다 (가까워요)', e: 'to be close, near', pos: 'adjective', note: 'ㅂ → 우: 가까워요', accept: ['가깝다', '가까워요'] },
    { conv: 1, k: '덥다 (더워요)', e: 'to be hot', pos: 'adjective', note: 'ㅂ → 우: 더워요', accept: ['덥다', '더워요'] },
    { conv: 1, k: '멀다 (멀어요)', e: 'to be far', pos: 'adjective', accept: ['멀다', '멀어요'] },
    { conv: 1, k: '쉽다 (쉬워요)', e: 'to be easy', pos: 'adjective', note: 'ㅂ → 우: 쉬워요', accept: ['쉽다', '쉬워요'] },
    { conv: 1, k: '어렵다 (어려워요)', e: 'to be difficult', pos: 'adjective', note: 'ㅂ → 우: 어려워요', accept: ['어렵다', '어려워요'] },
    { conv: 1, k: '좁다 (좁아요)', e: 'to be narrow, small (space)', pos: 'adjective', note: 'regular! 좁아요 (opposite: 넓어요)', accept: ['좁다', '좁아요'] },
    { conv: 1, k: '춥다 (추워요)', e: 'to be cold', pos: 'adjective', note: 'ㅂ → 우: 추워요', accept: ['춥다', '추워요'] },
    { conv: 1, k: '걸리다 (걸려요)', e: 'to take (time)', pos: 'verb', note: '얼마나 걸려요? — 한 시간쯤 걸려요. (걸어요 = I walk)', accept: ['걸리다', '걸려요'] },
    { conv: 1, k: '살다 (살아요)', e: 'to live', pos: 'verb', note: '어디 살아요/사세요? — 한인타운에 살아요.', accept: ['살다', '살아요'] },
    { conv: 1, k: '보통', e: 'usually', pos: 'adverb', note: '보통 걸어서 가요.' },
    { conv: 1, k: '얼마나 (얼마)', e: 'how long, how much', pos: 'adverb', note: '얼마나 걸려요? = How long does it take? · 얼마예요? = How much is it?', accept: ['얼마나', '얼마'] },
    { conv: 1, k: '좀 (조금)', e: 'a little', pos: 'adverb', note: '좀 멀어요. · 좀 = short for 조금', accept: ['좀', '조금'] },
    { conv: 1, k: '까지', e: 'up to, to (a place)', pos: 'particle', note: '집에서 학교까지 = from home to school' },
    { conv: 1, k: '에서', e: 'from (a place)', pos: 'particle', note: '집에서 학교까지 · (Lesson 5: 에서 = at, for actions)' },
    { conv: 1, k: '(으)로', e: 'by means of (car, pen, language)', pos: 'particle', note: '차로 · 버스로 · 볼펜으로 · 한국어로 · 지하철로 (ㄹ → 로)', noSpell: true },
    { conv: 1, k: '쯤', e: 'about, around', pos: 'suffix', note: '한 시간쯤 · 6시쯤' },

    { conv: 2, k: '대답 (대답하다)', e: 'answer; to answer', pos: 'noun', accept: ['대답', '대답하다'] },
    { conv: 2, k: '때', e: 'time (when)', pos: 'noun', note: '중학교 때 = in middle school · 시험 때 = at exam time (but 주말에, 1월에)' },
    { conv: 2, k: '수영 (수영하다)', e: 'swimming; to swim', pos: 'noun', accept: ['수영', '수영하다'] },
    { conv: 2, k: '수영장', e: 'swimming pool', pos: 'noun' },
    { conv: 2, k: '어제', e: 'yesterday', pos: 'noun', note: '어제 뭐 했어요?' },
    { conv: 2, k: '음악', e: 'music', pos: 'noun', note: '음악을 들어요 = listen to music' },
    { conv: 2, k: '주말', e: 'weekend', pos: 'noun', note: '주말에 = on the weekend' },
    { conv: 2, k: '중학교', e: 'middle school', pos: 'noun' },
    { conv: 2, k: '축구 (축구하다)', e: 'soccer; to play soccer', pos: 'noun', accept: ['축구', '축구하다'] },
    { conv: 2, k: '클래식', e: 'classical music', pos: 'noun' },
    { conv: 2, k: '태권도', e: 'Taekwondo', pos: 'noun' },
    { conv: 2, k: '테니스장', e: 'tennis court', pos: 'noun' },
    { conv: 2, k: '파티', e: 'party', pos: 'noun' },
    { conv: 2, k: '지난', e: 'last, past', pos: 'pre-noun', note: '지난 주말 = last weekend · 지난 학기 = last semester' },
    { conv: 2, k: '바쁘다 (바빠요)', e: 'to be busy', pos: 'adjective', note: 'past: 바빴어요', accept: ['바쁘다', '바빠요'] },
    { conv: 2, k: '모르다 (몰라요)', e: 'to not know', pos: 'verb', note: '알다 ↔ 모르다 · 제임스 알아요? — 아니요, 몰라요.', accept: ['모르다', '몰라요'] },
    { conv: 2, k: '일어나다 (일어나요)', e: 'to get up', pos: 'verb', note: '보통 7시에 일어나요.', accept: ['일어나다', '일어나요'] },
    { conv: 2, k: '너무', e: 'too, too much', pos: 'adverb', note: '숙제가 너무 어려워요.' },
    { conv: 2, k: '못', e: 'cannot', pos: 'adverb', note: '못 가요 · 수영 못 해요 · 잘 못 쳐요 = not good at playing' },
    { conv: 2, k: '안', e: 'not (do not)', pos: 'adverb', note: '안 가요 · 전화 안 해요 · (Lesson 3: 안 = inside)' },
    { conv: 2, k: '왜', e: 'why', pos: 'adverb', note: '왜요? = Why?' },
    { conv: 2, k: '자주', e: 'often, frequently', pos: 'adverb' },
    { conv: 2, k: '~었/았어요', e: 'past tense', pos: 'suffix', note: '먹었어요 · 갔어요 · 했어요', noSpell: true },
  ],

  // [dictionary, meaning, polite, formal, honorific, past] — honorific only where the book shows it.
  conjugations: [
    ['가깝다', 'to be close', '가까워요', null, '가까우세요', '가까웠어요'],
    ['덥다', 'to be hot', '더워요', null, '더우세요', '더웠어요'],
    ['멀다', 'to be far', '멀어요', null, null, '멀었어요'],
    ['쉽다', 'to be easy', '쉬워요', null, null, '쉬웠어요'],
    ['어렵다', 'to be difficult', '어려워요', null, null, '어려웠어요'],
    ['좁다', 'to be narrow', '좁아요', null, '좁으세요', '좁았어요'],
    ['춥다', 'to be cold', '추워요', null, null, '추웠어요'],
    ['걸리다', 'to take (time)', '걸려요|걸리어요', null, null, '걸렸어요|걸리었어요'],
    ['살다', 'to live', '살아요', null, '사세요', '살았어요'],
    ['말하다', 'to speak', '말해요', null, '말하세요', '말했어요'],
    ['대답하다', 'to answer', '대답해요', null, null, '대답했어요'],
    ['수영하다', 'to swim', '수영해요', null, null, '수영했어요'],
    ['축구하다', 'to play soccer', '축구해요', null, null, '축구했어요'],
    ['바쁘다', 'to be busy', '바빠요', null, null, '바빴어요'],
    ['모르다', 'to not know', '몰라요', null, null, '몰랐어요'],
    ['일어나다', 'to get up', '일어나요', null, null, '일어났어요'],
    // Earlier verbs in the past tense (G6.3 table and examples)
    ['가다', 'to go', null, null, null, '갔어요'],
    ['오다', 'to come', null, null, null, '왔어요'],
    ['하다', 'to do', null, null, null, '했어요'],
    ['먹다', 'to eat', null, null, null, '먹었어요'],
    ['만나다', 'to meet', null, null, null, '만났어요'],
    ['배우다', 'to learn', null, null, null, '배웠어요'],
    ['보다', 'to see, watch', null, null, null, '봤어요|보았어요'],
    ['치다', 'to play (tennis)', null, null, null, '쳤어요|치었어요'],
    ['쓰다', 'to write', null, null, null, '썼어요'],
    ['크다', 'to be big', null, null, null, '컸어요'],
    ['예쁘다', 'to be pretty', null, null, null, '예뻤어요'],
    ['많다', 'to be many', null, null, null, '많았어요'],
    ['좋다', 'to be good', null, null, null, '좋았어요'],
    ['맛있다', 'to be delicious', null, null, null, '맛있었어요'],
    ['있다', 'to be, to have', null, null, null, '있었어요'],
    ['없다', 'to not be, not have', null, null, null, '없었어요'],
    ['괜찮다', 'to be okay', null, null, null, '괜찮았어요'],
    ['어떻다', 'to be how', null, null, null, '어땠어요'],
    ['전화하다', 'to call', null, null, null, '전화했어요'],
    ['이다', 'to be (N)', null, null, null, '이었어요|였어요'],
    ['아니다', 'to not be (N)', null, null, null, '아니었어요'],
  ],

  quiz: [
    { q: '집에서 학교까지 얼마나 걸려요? asks:', opts: ['How long does it take from home to school?', 'How far is your home from school?', 'How much is it from home to school?', 'When do you go from home to school?'], ans: 0 },
    { q: '“It takes about an hour by car.”', opts: ['차로 한 시간쯤 걸려요.', '차로 일 시간쯤 걸려요.', '차에서 한 시간쯤 걸려요.', '차로 한 시간쯤 걸어요.'], ans: 0, why: '(으)로 = by · 시간 takes native numbers · 쯤 = about · 걸려요 = takes (걸어요 = walk)' },
    { q: 'Jenny: 좀 멀어요. means:', opts: ['It\'s a little far.', 'It\'s very far.', 'It\'s a little close.', 'It\'s not far.'], ans: 0, why: '좀 = 조금 (a little)' },
    { q: '“I usually walk; it takes 5 minutes.”', opts: ['보통 걸어서 5분 걸려요.', '보통 걷어서 5분 걸려요.', '보통 걸어로 5분 걸려요.', '보통 걸으러 5분 걸려요.'], ans: 0, why: '걷다 → 걸어서 (on foot) · ㄷ → ㄹ before a vowel' },
    { q: '저는 학교 앞 아파트에 살아요. means:', opts: ['I live in an apartment in front of the school.', 'I live in an apartment behind the school.', 'My apartment is at school.', 'I walk to the apartment in front of the school.'], ans: 0 },
    { q: 'Which particle: 지하철 ___ 가요 (by subway)?', opts: ['로', '으로', '에서', '을'], ans: 0, why: 'After ㄹ → 로 (지하철로, 연필로)' },
    { q: 'Which particle: 볼펜 ___ 쓰세요 (with a pen)?', opts: ['으로', '로', '에서', '에'], ans: 0, why: 'After a consonant other than ㄹ → 으로' },
    { q: '한국어로 말하세요. means:', opts: ['Please speak in Korean.', 'Please speak to the Korean.', 'Please study Korean.', 'Korean is easy to speak.'], ans: 0 },
    { q: 'Polite form of 춥다:', opts: ['추워요', '춥어요', '춥아요', '추와요'], ans: 0, why: 'ㅂ → 우, then 우 + 어 → 워' },
    { q: 'Polite form of 좁다:', opts: ['좁아요', '조워요', '좁어요', '조와요'], ans: 0, why: '좁다 is regular (like 넓다 → 넓어요)' },
    { q: '한국어 시험이 쉬워요? — No, a little hard.', opts: ['아니요, 조금 어려워요.', '아니요, 조금 어렵어요.', '아니요, 조금 어렵아요.', '아니요, 조금 어려워세요.'], ans: 0, why: '어렵다 → 어려워요 (ㅂ → 우)' },
    // Conversation 2
    { q: '유미 씨, 어제 오후에 뭐 했어요? asks:', opts: ['Yumi, what did you do yesterday afternoon?', 'Yumi, what are you doing this afternoon?', 'Yumi, what do you usually do in the afternoon?', 'Yumi, what will you do tomorrow afternoon?'], ans: 0 },
    { q: '“I swam at the school swimming pool.”', opts: ['학교 수영장에서 수영했어요.', '학교 수영장에서 수영해요.', '학교 수영장에 수영했어요.', '학교 수영장에서 수영했아요.'], ans: 0, why: 'Past ~했어요 · action at a place → 에서 · the ending after 었/았 is always 어요' },
    { q: '제니는 테니스 안 좋아해요. means:', opts: ['Jenny doesn\'t like tennis.', 'Jenny can\'t play tennis.', 'Jenny likes tennis a lot.', 'Jenny didn\'t play tennis.'], ans: 0 },
    { q: 'Yumi: 네, 그런데 잘 못 쳐요. means:', opts: ['Yes, but I\'m not very good at playing.', 'Yes, but I don\'t play.', 'Yes, and I play well.', 'Yes, but I can\'t play today.'], ans: 0, why: '잘 해요 = good at · 못 해요 = bad at · 잘 못 해요 = not that good at' },
    { q: '“I was busy, so I couldn\'t go.”', opts: ['바빴어요. 그래서 못 갔어요.', '바빴어요. 그래서 안 갔어요.', '바빠요. 그래서 못 가요.', '바쁘었어요. 그래서 못 갔어요.'], ans: 0, why: 'Circumstances prevented it → 못 (not 안) · 바쁘다 → 바빴어요' },
    { q: '“I can\'t swim today.”', opts: ['오늘은 수영 못 해요.', '오늘은 못 수영해요.', '오늘은 수영 안 해요.', '오늘은 수영해요 못.'], ans: 0, why: 'N하다 verbs: N + 못/안 + 하다' },
    { q: '스티브 씨, 제임스 알아요? — No (I don\'t know him).', opts: ['아니요, 몰라요.', '아니요, 안 알아요.', '아니요, 못 알아요.', '아니요, 알아요.'], ans: 0, why: '알다 has its own negative: 모르다 → 몰라요' },
    { q: 'Past tense of 오다:', opts: ['왔어요', '오았어요', '왔아요', '와었어요'], ans: 0, why: '오 + 았 → 왔 · the ending is always 어요' },
    { q: 'Past tense of 학생이다 (I was a student):', opts: ['학생이었어요', '학생였어요', '학생이았어요', '학생이에요었어요'], ans: 0, why: 'After a consonant → 이었어요 · after a vowel → 였어요 (친구였어요)' },
    { q: '“I learned Taekwondo in middle school.”', opts: ['중학교 때 태권도를 배웠어요.', '중학교에 태권도를 배웠어요.', '중학교 때 태권도를 배워요.', '중학교 때 태권도를 배우었아요.'], ans: 0, why: '[N 때] = at the time of N · 배우다 → 배웠어요' },
    { q: '“on the weekend” / “at exam time”', opts: ['주말에 / 시험 때', '주말 때 / 시험에', '주말에 / 시험에', '주말 때 / 시험 때'], ans: 0, why: 'Time words take 에 (주말에, 1월에) · other nouns take 때 (시험 때, 중학교 때)' },
    { q: '왜 파티에 안 왔어요? asks:', opts: ['Why didn\'t you come to the party?', 'Why aren\'t you coming to the party?', 'When did you come to the party?', 'Why couldn\'t you go to the party?'], ans: 0 },
  ],

  fill: [
    { sentence: '집___ 학교까지 얼마나 걸려요? (from)', blank: '에서', hint: 'from (a place)', type: 'Particle' },
    { sentence: '집에서 학교___ 얼마나 걸려요? (to)', blank: '까지', hint: 'up to (a place)', type: 'Particle' },
    { sentence: '차로 한 시간___ 걸려요. (about)', blank: '쯤', hint: 'about, around', type: 'Vocab' },
    { sentence: '집에서 학교까지 ___ 걸려요? (how long)', blank: '얼마나', hint: 'how long / how much', type: 'Vocab' },
    { sentence: '___ 멀어요. (a little)', blank: ['좀', '조금'], hint: 'a little', type: 'Vocab' },
    { sentence: '보통 걸어서 5분 ___. (걸리다)', blank: ['걸려요', '걸리어요'], hint: '이 + 어 → 여', type: 'Conjugation' },
    { sentence: '저는 학교 앞 아파트에 ___. (살다)', blank: '살아요', hint: 'stem vowel ㅏ → 아요', type: 'Conjugation' },
    { sentence: '학교에 버스___ 가요. (by)', blank: '로', hint: 'after a vowel → 로', type: '(으)로' },
    { sentence: '학교에 지하철___ 가요. (by)', blank: '로', hint: 'after ㄹ → 로', type: '(으)로' },
    { sentence: '볼펜___ 쓰세요. (with)', blank: '으로', hint: 'after a consonant (not ㄹ) → 으로', type: '(으)로' },
    { sentence: '한국어___ 말하세요. (in)', blank: '로', hint: 'after a vowel → 로', type: '(으)로' },
    { sentence: '요즘 한국 날씨가 아주 ___요. (춥다)', blank: '추워', hint: 'ㅂ → 우', type: 'ㅂ irregular' },
    { sentence: '아니요, ___요. (가깝다)', blank: '가까워', hint: 'ㅂ → 우', type: 'ㅂ irregular' },
    { sentence: '선생님, 지금 ___? (덥다 — honorific)', blank: '더우세요', hint: 'ㅂ → 우 + 세요', type: 'ㅂ irregular' },
    // Conversation 2
    { sentence: '어제 뭐 ___? (하다 — past)', blank: '했어요', hint: '하다 → 했어요', type: 'Past' },
    { sentence: '친구하고 같이 테니스 ___. (치다 — past)', blank: ['쳤어요', '치었어요'], hint: '이 + 었 → 였', type: 'Past' },
    { sentence: '오늘 8시에 아침을 ___. (먹다 — past)', blank: '먹었어요', hint: 'stem vowel ㅓ → 었어요', type: 'Past' },
    { sentence: '지난 주말에 친구를 ___. (만나다 — past)', blank: '만났어요', hint: '아 + 았 → 았', type: 'Past' },
    { sentence: '지난 학기가 어땠어요? — ___. (바쁘다 — past)', blank: '바빴어요', hint: 'ㅡ drops, then 았', type: 'Past' },
    { sentence: '오늘은 8시 30분에 ___. (일어나다 — past)', blank: '일어났어요', hint: '아 + 았 → 았', type: 'Past' },
    { sentence: '숙제가 ___. (어렵다 — past)', blank: '어려웠어요', hint: 'ㅂ → 우 + 었 → 웠', type: 'Past' },
    { sentence: '___ 주말에 뭐 했어요? (last)', blank: '지난', hint: 'last, past', type: 'Vocab' },
    { sentence: '제니는 테니스 ___ 좋아해요. (doesn\'t)', blank: '안', hint: 'general negation', type: '안/못' },
    { sentence: '바빴어요. 그래서 ___ 갔어요. (couldn\'t)', blank: '못', hint: 'circumstances prevented it', type: '안/못' },
    { sentence: '오늘은 수영 ___ 해요. (can\'t)', blank: '못', hint: 'N + 못 + 하다', type: '안/못' },
    { sentence: '아니요, 제임스 ___. (don\'t know)', blank: '몰라요', hint: '알다 ↔ 모르다', type: 'Negative' },
    { sentence: '중학교 ___ 태권도를 배웠어요. (in, at the time of)', blank: '때', hint: 'N + 때', type: 'Vocab' },
    { sentence: '___ 파티에 안 왔어요? (why)', blank: '왜', hint: 'why', type: 'Vocab' },
  ],

  generators: [
    {
      type: 'ro', label: '(으)로 — by car, with a pen, in Korean',
      mc: () => {
        if (Math.random() < 0.6) {
          const [n, en] = pick(VEHICLES), alt = n + (ro(n).endsWith('으로') ? '로' : '으로');
          return mcq(`“I go to school ${en}.”`, `학교에 ${ro(n)} 가요.`,
            [`학교에 ${alt} 가요.`, `학교에 ${n}에서 가요.`, `학교에 ${josa(n, '을', '를')} 가요.`, `학교에 ${n}에 가요.`],
            `${roWhy(n)} · (으)로 = by means of`);
        }
        const [n, en, v, vEn] = pick(TOOLS), alt = n + (ro(n).endsWith('으로') ? '로' : '으로');
        return mcq(`“Please ${vEn} ${en}.”`, `${ro(n)} ${v}.`, [`${alt} ${v}.`, `${n}에서 ${v}.`, `${n}에 ${v}.`],
          `${roWhy(n)} · (으)로 = with / in (a tool, a language)`);
      },
      typed: () => {
        const [n, en] = pick([...VEHICLES, ...TOOLS.map(([n, en]) => [n, en])]);
        return { sentence: `${n}___ (${en})`, blank: ro(n).slice(n.length), hint: 'vowel or ㄹ → 로 · other consonant → 으로' };
      },
    },
    {
      type: 'duration', label: '에서 … 까지 얼마나 걸려요? (how long it takes)',
      mc: () => {
        const [a, b, en] = pick(ROUTES), hrs = Math.random() < 0.3;
        const n = hrs ? randInt(1, 3) : pick([5, 10, 15, 20, 30, 40, 45, 50]);
        const [how, howEn] = pick([['차로', 'by car'], ['버스로', 'by bus'], ['지하철로', 'by subway'], ['자전거로', 'by bicycle'], ['걸어서', 'on foot']]);
        const t = hrs ? `${nativeCounting(n)} 시간` : `${sino(n)} 분`, tWrong = hrs ? `${sino(n)} 시간` : `${nativeCounting(n)} 분`;
        const say = (x, y, tt, v = '걸려요') => `${x} ${y} ${how} ${tt}쯤 ${v}.`;
        return mcq(`“From ${en} takes about ${n} ${hrs ? (n > 1 ? 'hours' : 'hour') : 'minutes'} ${howEn}.”`, say(`${a}에서`, `${b}까지`, t),
          [say(`${a}까지`, `${b}에서`, t), say(`${a}에서`, `${b}까지`, tWrong), say(`${a}에서`, `${b}까지`, t, '걸어요')],
          `A에서 B까지 = from A to B · ${hrs ? '시간 → native' : '분 → Sino'} numbers · 쯤 = about · 걸려요 = it takes`);
      },
      typed: () => {
        const [a, b, en] = pick(ROUTES), r = Math.random();
        if (r < 0.35) return { sentence: `${a}___ ${b}까지 얼마나 걸려요? (from ${en})`, blank: '에서', hint: 'from' };
        if (r < 0.7) return { sentence: `${a}에서 ${b}___ 얼마나 걸려요? (from ${en})`, blank: '까지', hint: 'up to, to' };
        const n = pick([10, 15, 20, 30, 40]);
        return { sentence: `차로 ___ 분쯤 걸려요. (${n} minutes)`, blank: sino(n), hint: '분 → Sino numbers' };
      },
    },
    {
      type: 'past', label: 'Past tense ~었/았어요 vs. present', weight: 2,
      mc: () => {
        const [pre, , pres, past, enPres, enPast] = pick(ACTIVITIES);
        if (Math.random() < 0.65) {
          const [t, tEn] = pick(PAST_TIMES);
          return mcq(`“${tEn}, I ${enPast}.”`, `${t} ${pre} ${past}.`,
            [`${t} ${pre} ${pres}.`, `${t} ${pre} ${past.replace(/어요$/, '아요')}.`, `${t} ${pre} ${past.replace(/어요$/, '요')}.`],
            `${t} → past: ${pres} → ${past} · the ending after 었/았 is always 어요`);
        }
        const [t, tEn] = pick(HABIT_TIMES);
        return mcq(`“I ${tEn} ${enPres}.”`, `${t} ${pre} ${pres}.`, [`${t} ${pre} ${past}.`, `어제 ${pre} ${pres}.`, `${t} ${pre} ${past.replace(/어요$/, '아요')}.`],
          `${t} (${tEn}) = a habit → present ${pres}`);
      },
      typed: () => {
        const [pre, dict, , past, , enPast] = pick(ACTIVITIES), [t, tEn] = pick(PAST_TIMES);
        return { sentence: `${t} ${pre} ___. (${dict} — “${tEn}, I ${enPast}.”)`, blank: dict === '치다' ? [past, '치었어요'] : past, hint: 'ㅏ/ㅗ → 았어요 · otherwise 었어요 · 하다 → 했어요' };
      },
    },
    {
      type: 'an-mot', label: '안 (don\'t) vs. 못 (can\'t)',
      mc: () => {
        const r = Math.random();
        if (r < 0.3) {
          const [o, pres, , en] = pick(NEG_VERBS);
          return mcq(`“I usually don't ${en}.” (my choice)`, `보통 ${o} 안 ${pres}.`, [`보통 ${o} 못 ${pres}.`, `보통 안 ${o} ${pres}.`, `보통 ${o} ${pres} 안.`],
            '안 = don\'t (your choice) · it goes right before the verb');
        }
        if (r < 0.55) {
          const [o, , past, en] = pick(NEG_VERBS);
          return mcq(`“I was busy, so I couldn't ${en}.”`, `바빴어요. 그래서 ${o} 못 ${past}.`,
            [`바빴어요. 그래서 ${o} 안 ${past}.`, `바빴어요. 그래서 못 ${o} ${past}.`, `바빴어요. 그래서 ${o} ${past} 못.`],
            'Something stopped you → 못, not 안 (English says “didn\'t go because I was busy,” Korean says 못 갔어요)');
        }
        if (r < 0.85) {
          const [n, en] = pick(NEG_HADA), cant = Math.random() < 0.5;
          return cant
            ? mcq(`“I can't ${en} today.”`, `오늘은 ${n} 못 해요.`, [`오늘은 못 ${n}해요.`, `오늘은 ${n} 안 해요.`, `오늘은 ${n}해요 못.`], `N하다 verbs: ${n} + 못 + 해요 · can't → 못`)
            : mcq(`“I don't ${en} on weekends.”`, `주말에는 ${n} 안 해요.`, [`주말에는 안 ${n}해요.`, `주말에는 ${n} 못 해요.`, `주말에는 ${n}해요 안.`], `N하다 verbs: ${n} + 안 + 해요 · don't → 안`);
        }
        return pick([
          () => mcq('“I don\'t know (him).”', '아니요, 몰라요.', ['아니요, 안 알아요.', '아니요, 못 알아요.', '아니요, 알아요 안.'], '알다 has its own negative: 모르다 → 몰라요'),
          () => mcq('“There\'s no class today.”', '오늘은 수업이 없어요.', ['오늘은 수업이 안 있어요.', '오늘은 수업이 못 있어요.', '오늘은 수업이 아니에요.'], '있다 → 없다 (not 안 있어요) · 아니에요 is for “is not [N]”'),
          () => mcq('“I\'m not a student.”', '저는 학생이 아니에요.', ['저는 학생이 안 이에요.', '저는 학생이 없어요.', '저는 안 학생이에요.'], '이다 → 아니다: N이/가 아니에요'),
        ])();
      },
      typed: () => {
        if (Math.random() < 0.5) {
          const [n, en] = pick(NEG_HADA);
          return { sentence: `오늘은 ${n} ___ 해요. (I can't ${en} today.)`, blank: '못', hint: 'can\'t' };
        }
        const [o, pres, , en] = pick(NEG_VERBS);
        return { sentence: `보통 ${o} ___ ${pres}. (I usually don't ${en}.)`, blank: '안', hint: 'don\'t (by choice)' };
      },
    },
  ],

  grammar: [
    {
      id: 'G6.1', tag: 'Lesson 6', title: 'N<em>(으)로</em> — by means of',
      html: `<div class="grammar-body"><strong>Transportation</strong> and <strong>tools/languages</strong>. After a vowel or <b>ㄹ</b> → <span class="ko">로</span> · after any other consonant → <span class="ko">으로</span>.</div>
        <table class="rule-table">
          <tr><th>로</th><th>으로</th></tr>
          <tr><td>차로 · 버스로 · 비행기로 · 자전거로 · 지하철로 · 연필로 · 한국어로 · 영어로</td><td>트럭으로 · 볼펜으로</td></tr>
        </table>
        <div class="example-box">
          <p>A: 학교에 차로 가요? — B: 저는 차가 없어요. <b>버스로</b> 가요.</p>
          <p>A: 학교에 어떻게 가요? — B: <b>자전거로</b> 가요.</p>
          <p><b>한국어로</b> 말하세요. — Please speak in Korean. · <b>볼펜으로</b> 쓰세요. — Please write with a pen.</p>
          <p>On foot: <b>걸어서</b> 가요 (not 걸어로) — 마이클은 집에서 학교까지 걸어서 가요.</p>
        </div>`,
    },
    {
      id: 'G6.2', tag: 'Lesson 6', title: 'ㅂ-irregular adjectives: <em>가깝다 → 가까워요</em>',
      html: `<div class="grammar-body">Stem-final <b>ㅂ → 우</b> before a vowel, then 우 + 어 → <b>워</b> (always 어요, even after ㅏ).</div>
        <table class="rule-table">
          <tr><th></th><th>~어요</th><th>~(으)세요</th><th>past</th></tr>
          <tr><td>가깝다 (close)</td><td>가까워요</td><td>가까우세요</td><td>가까웠어요</td></tr>
          <tr><td>덥다 (hot)</td><td>더워요</td><td>더우세요</td><td>더웠어요</td></tr>
          <tr><td>춥다 (cold) · 쉽다 (easy) · 어렵다 (hard)</td><td>추워요 · 쉬워요 · 어려워요</td><td></td><td>추웠어요 · 쉬웠어요 · 어려웠어요</td></tr>
          <tr><td>좁다 (narrow) — <strong>regular</strong></td><td>좁아요</td><td>좁으세요</td><td>좁았어요</td></tr>
        </table>
        <div class="example-box">
          <p>A: 한인타운에서 학교까지 멀어요? — B: 아니요, <b>가까워요</b>.</p>
          <p>A: 한국어 시험이 <b>쉬워요</b>? — B: 아니요, 조금 <b>어려워요</b>.</p>
          <p>Same pattern you already know: 고마워요, 반가워요. Regular like 좁다: 넓다 → 넓어요.</p>
        </div>`,
    },
    {
      id: 'G6.3', tag: 'Lesson 6', title: 'Past tense: <em>~었/았/ㅆ어요</em>',
      html: `<div class="grammar-body">Same choice as ~어요/아요: stem vowel <b>ㅏ/ㅗ → 았어요</b>, otherwise <b>었어요</b>; vowels contract the same way (가 → 갔어요). The ending after 었/았 is always <b>어요</b>.</div>
        <table class="rule-table">
          <tr><th>Present</th><th>Past</th><th>Rule</th></tr>
          <tr><td>많아요 · 좋아요</td><td>많았어요 · 좋았어요</td><td>ㅏ/ㅗ → 았</td></tr>
          <tr><td>먹어요 · 맛있어요</td><td>먹었어요 · 맛있었어요</td><td>other vowels → 었</td></tr>
          <tr><td>가요 · 일어나요 · 와요 · 배워요</td><td>갔어요 · 일어났어요 · 왔어요 · 배웠어요</td><td>contraction → ㅆ어요</td></tr>
          <tr><td>해요 · 전화해요</td><td>했어요 · 전화했어요</td><td>하다 → 했어요</td></tr>
          <tr><td>써요 · 커요 · 바빠요 · 예뻐요</td><td>썼어요 · 컸어요 · 바빴어요 · 예뻤어요</td><td>ㅡ drops</td></tr>
          <tr><td>이에요/예요 · 아니에요</td><td>이었어요/였어요 · 아니었어요</td><td>copula</td></tr>
        </table>
        <div class="example-box">
          <p>A: 일요일 오전에 뭐 <b>했어요</b>? — B: 형하고 같이 축구<b>했어요</b>.</p>
          <p>A: 오늘 점심 <b>어땠어요</b>? — B: <b>괜찮았어요</b>.</p>
          <p>중학교 때 태권도를 <b>배웠어요</b>. — I learned Taekwondo in middle school.</p>
          <p>보통 7시에 일어나요. 그런데 오늘은 8시 30분에 <b>일어났어요</b>.</p>
        </div>`,
    },
    {
      id: 'G6.4', tag: 'Lesson 6', title: '<em>안</em> (don\'t) vs. <em>못</em> (can\'t)',
      html: `<div class="grammar-body">Put <span class="ko">안</span> or <span class="ko">못</span> right before the verb. <b>안</b> = general “not” (your choice) · <b>못</b> = can't (something prevents you).<br>
        For <b>N하다</b> verbs, it goes between: 전화 <b>안</b> 해요 · 수영 <b>못</b> 해요.</div>
        <table class="rule-table">
          <tr><th></th><th>안 (don't)</th><th>못 (can't)</th></tr>
          <tr><td>가요</td><td>안 가요</td><td>못 가요</td></tr>
          <tr><td>먹어요</td><td>안 먹어요</td><td>못 먹어요</td></tr>
          <tr><td>전화해요</td><td>전화 안 해요</td><td>전화 못 해요</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:8px">Some words have their own negative instead: 있다 ↔ <b>없다</b> · 맛있다 ↔ <b>맛없다</b> · 이다 ↔ <b>아니다</b> · 알다 ↔ <b>모르다</b> (몰라요).</div>
        <div class="example-box">
          <p>마이클: 아니요. 화요일하고 목요일에는 <b>안</b> 와요.</p>
          <p>유미: 아니요, 도서관에 가요. 오늘은 수영 <b>못</b> 해요.</p>
          <p>제니: 왜 파티에 안 왔어요? — 스티브: 바빴어요. 그래서 <b>못</b> 갔어요. (not 안 갔어요)</p>
        </div>`,
    },
    {
      id: '', tag: 'Lesson 6 · Expressions', title: 'From…to, how long, how often, 때',
      html: `<table class="rule-table">
          <tr><th>Korean</th><th>Meaning</th></tr>
          <tr><td>[A]에서 [B]까지</td><td>from A to B — 집에서 학교까지 · 서울에서 보스턴까지</td></tr>
          <tr><td>얼마나 걸려요? — 한 시간쯤 걸려요.</td><td>How long does it take? — About an hour.</td></tr>
          <tr><td>걸어서 30분 · 차로 5분 · 버스로 1시간</td><td>30 min on foot · 5 min by car · 1 hour by bus</td></tr>
          <tr><td>어디 살아요/사세요? · 집이 어디예요?</td><td>Where do you live? — ___에 살아요 = ___에서 살아요 (both fine)</td></tr>
          <tr><td>잘 해요 · 못 해요 · 잘 못 해요</td><td>good at · bad at · not that good at</td></tr>
          <tr><td>[N] 때 vs. [time]에</td><td>시험 때, 중학교 때 · but 주말에, 1월에 · (아침에 = in the morning; 아침 때 = at breakfast time)</td></tr>
          <tr><td>매일 (날마다) · 매주 · 매달 · 매년</td><td>every day · week · month · year — 매일 아침 = every morning</td></tr>
          <tr><td>왜요? — 수업이 많아요.</td><td>Why? — I have a lot of classes. (왜 한국어를 공부하세요?)</td></tr>
          <tr><td>2022년 10월 28일</td><td>Dates go largest → smallest: year, month, day</td></tr>
        </table>`,
    },
  ],

  reference: [],
});
