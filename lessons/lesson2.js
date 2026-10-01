// Lesson 2 · 한국어 수업 (Korean Language Class) — textbook pp. 67–88
addLesson({
  id: 2,
  title: '한국어 수업',
  english: 'Korean Language Class',
  conversations: { 1: '한국어 수업이 재미있어요.', 2: '한국어를 공부해요.' },

  // New Words (p. 69 & p. 77)
  vocab: [
    // Conversation 1
    { conv: 1, k: '도서관', e: 'library', pos: 'noun' },
    { conv: 1, k: '수업', e: 'course, class', pos: 'noun' },
    { conv: 1, k: '숙제', e: 'homework', pos: 'noun' },
    { conv: 1, k: '식당', e: 'restaurant', pos: 'noun', note: '학교 식당 = school cafeteria' },
    { conv: 1, k: '아침', e: 'breakfast; morning', pos: 'noun', note: 'two meanings!' },
    { conv: 1, k: '친구', e: 'friend', pos: 'noun' },
    { conv: 1, k: '커피', e: 'coffee', pos: 'noun' },
    { conv: 1, k: '학교', e: 'school', pos: 'noun' },
    { conv: 1, k: '-어요/-아요', e: 'polite ending', pos: 'suffix', noSpell: true },
    { conv: 1, k: '들', e: 'plural particle', pos: 'particle', note: '학생들, 친구들' },
    { conv: 1, k: '어', e: 'oh', pos: 'interjection', note: 'L1 also has 아 = oh', accept: ['어', '아'] },
    { conv: 1, k: '괜찮다 (괜찮아요)', e: 'to be all right, okay', pos: 'adjective' },
    { conv: 1, k: '넓다 (넓어요)', e: 'to be spacious, wide', pos: 'adjective' },
    { conv: 1, k: '많다 (많아요)', e: 'to be many, much', pos: 'adjective' },
    { conv: 1, k: '맛있다 (맛있어요)', e: 'to be delicious', pos: 'adjective' },
    { conv: 1, k: '어떻다 (어때요)', e: 'to be how', pos: 'adjective', note: '어때요? = How is it?' },
    { conv: 1, k: '재미있다 (재미있어요)', e: 'to be fun, interesting', pos: 'adjective' },
    { conv: 1, k: '좋다 (좋아요)', e: 'to be good, nice', pos: 'adjective' },
    { conv: 1, k: '먹다 (먹어요)', e: 'to eat', pos: 'verb' },
    { conv: 1, k: '앉다 (앉아요)', e: 'to sit', pos: 'verb' },
    { conv: 1, k: '알다 (알아요)', e: 'to know', pos: 'verb' },
    { conv: 1, k: '아주', e: 'very, really', pos: 'adverb' },
    // Conversation 2
    { conv: 2, k: '공부(하다)', e: 'study', pos: 'noun', accept: ['공부', '공부하다', '공부(하다)'] },
    { conv: 2, k: '남자', e: 'man', pos: 'noun' },
    { conv: 2, k: '내일', e: 'tomorrow', pos: 'noun' },
    { conv: 2, k: '시험', e: 'test, exam', pos: 'noun', note: '시험을 보다 = to take a test' },
    { conv: 2, k: '역사', e: 'history', pos: 'noun' },
    { conv: 2, k: '오늘', e: 'today', pos: 'noun' },
    { conv: 2, k: '음식', e: 'food', pos: 'noun' },
    { conv: 2, k: '주스', e: 'juice', pos: 'noun' },
    { conv: 2, k: '텔레비전', e: 'television', pos: 'noun' },
    { conv: 2, k: '을/를', e: 'object particle', pos: 'particle', note: '을 after consonant, 를 after vowel' },
    { conv: 2, k: '그리고', e: 'and', pos: 'conjunction', note: 'connects two sentences' },
    { conv: 2, k: '만나다 (만나요)', e: 'to meet', pos: 'verb' },
    { conv: 2, k: '보다 (봐요)', e: 'to see, look, watch', pos: 'verb' },
    { conv: 2, k: '쓰다 (써요)', e: 'to write', pos: 'verb' },
    { conv: 2, k: '지내다 (지내요)', e: 'to get along', pos: 'verb', note: '어떻게 지내요? = How are you doing?' },
    { conv: 2, k: '하다 (해요)', e: 'to do', pos: 'verb' },
    { conv: 2, k: '맛없다 (맛없어요)', e: 'to be tasteless, not delicious', pos: 'adjective' },
    { conv: 2, k: '싸다 (싸요)', e: 'to be cheap', pos: 'adjective' },
    { conv: 2, k: '재미없다 (재미없어요)', e: 'to be uninteresting', pos: 'adjective' },
    { conv: 2, k: '크다 (커요)', e: 'to be big', pos: 'adjective' },
    { conv: 2, k: '어떻게', e: 'how', pos: 'adverb' },
    { conv: 2, k: '요즘', e: 'these days', pos: 'adverb' },
    { conv: 2, k: '잘', e: 'well', pos: 'adverb' },
    { conv: 2, k: '지금', e: 'now', pos: 'adverb' },
  ],

  quiz: [
    { q: '이/가 is the ______ particle.', opts: ['subject', 'topic', 'object', 'plural'], ans: 0 },
    { q: '을/를 is the ______ particle.', opts: ['object', 'subject', 'topic', 'plural'], ans: 0 },
    { q: '제가 is the subject form of:', opts: ['저', '나', '제', '씨'], ans: 0, why: '저 + 가 → 제가 · 나 + 가 → 내가' },
    { q: '나 + 가 becomes:', opts: ['내가', '나가', '제가', '너가'], ans: 0 },
    { q: 'The plural particle is:', opts: ['들', '도', '은', '가'], ans: 0, why: 'Plural is optional in Korean: 학생들, 친구들' },
    { q: "To ask 'How is Korean class?' you say:", opts: ['한국어 수업이 어때요?', '한국어 수업을 재미있어요?', '한국어 수업은 뭐예요?', '한국어 수업도 좋아요?'], ans: 0 },
    { q: '아침 can mean which TWO things?', opts: ['breakfast and morning', 'lunch and dinner', 'morning and evening', 'study and homework'], ans: 0 },
    { q: '괜찮아요 means:', opts: ["it's OK / not bad", "it's delicious", "it's fun", "it's big"], ans: 0 },
    { q: 'Polite form of 좋다:', opts: ['좋아요', '좋어요', '좋이에요', '좋예요'], ans: 0, why: 'stem vowel ㅗ → 아요' },
    { q: 'Polite form of 먹다:', opts: ['먹어요', '먹아요', '먹이에요', '먹예요'], ans: 0, why: 'stem vowel ㅓ → 어요' },
    { q: 'Polite form of 알다:', opts: ['알아요', '알어요', '알이에요', '알예요'], ans: 0, why: 'stem vowel ㅏ → 아요' },
    { q: 'Polite form of 넓다:', opts: ['넓어요', '넓아요', '넓요', '넓해요'], ans: 0, why: 'stem vowel ㅓ → 어요' },
    { q: '어떻다 + 어요 becomes:', opts: ['어때요', '어떻어요', '어떠요', '어떻아요'], ans: 0, why: 'irregular: 어떻 + 어요 = 어때요' },
    { q: 'Polite form of 하다:', opts: ['해요', '하요', '하아요', '하어요'], ans: 0, why: 'Every 하다 verb → 해요 (공부해요, 숙제해요)' },
    { q: 'Polite form of 공부하다:', opts: ['공부해요', '공부하요', '공부하아요', '공부예요'], ans: 0 },
    { q: 'Polite form of 보다:', opts: ['봐요', '보어요', '보요', '버요'], ans: 0, why: '보 + 아요 → 봐요 (vowel contraction)' },
    { q: 'Polite form of 싸다:', opts: ['싸요', '싸아요', '싸어요', '써요'], ans: 0, why: '싸 + 아요 → 싸요 (아 + 아 merges)' },
    { q: 'Polite form of 쓰다:', opts: ['써요', '쓰어요', '쓰요', '싸요'], ans: 0, why: 'ㅡ drops before 어요: 쓰 + 어요 → 써요' },
    { q: 'Polite form of 크다:', opts: ['커요', '크어요', '크요', '카요'], ans: 0, why: 'ㅡ drops before 어요: 크 + 어요 → 커요' },
    { q: 'Polite form of 만나다:', opts: ['만나요', '만나아요', '만나어요', '만내요'], ans: 0 },
    { q: '“Lisa eats breakfast.”', opts: ['리사가 아침을 먹어요.', '리사가 아침를 먹어요.', '리사를 아침이 먹어요.', '리사이 아침을 먹어요.'], ans: 0, why: '리사 (vowel) → 가 · 아침 (consonant) → 을' },
    { q: '“Steve meets a friend.”', opts: ['스티브가 친구를 만나요.', '스티브가 친구을 만나요.', '스티브이 친구를 만나요.', '스티브를 친구가 만나요.'], ans: 0, why: '친구 ends in a vowel → 를' },
    { q: '“Yumi watches TV.”', opts: ['유미가 텔레비전을 봐요.', '유미가 텔레비전를 봐요.', '유미가 텔레비전이 봐요.', '유미를 텔레비전을 봐요.'], ans: 0, why: '텔레비전 ends in a consonant → 을' },
    { q: '“The library is big.”', opts: ['도서관이 커요.', '도서관가 커요.', '도서관을 커요.', '도서관이 크어요.'], ans: 0, why: 'Adjectives take a subject (이/가), not an object.' },
    { q: '시험을 봐요 means:', opts: ['I take a test.', 'I look at the test.', 'I write a test.', 'The test is big.'], ans: 0, why: '시험을 보다 = to take a test' },
    { q: '요즘 어떻게 지내요? means:', opts: ['How are you doing these days?', 'What are you doing now?', 'How is the food?', 'Where are you going?'], ans: 0 },
    { q: 'Best reply to 요즘 어떻게 지내요?', opts: ['잘 지내요.', '네, 지내요.', '아니요, 어때요.', '반갑습니다.'], ans: 0 },
    { q: '지금 뭐 해요? means:', opts: ['What are you doing now?', 'How are you these days?', 'What is this?', 'What is your name?'], ans: 0 },
    { q: 'Order these: yesterday · today · tomorrow', opts: ['어제 · 오늘 · 내일', '내일 · 오늘 · 어제', '오늘 · 어제 · 내일', '어제 · 내일 · 오늘'], ans: 0 },
    { q: 'The opposite of 맛있어요 is:', opts: ['맛없어요', '재미없어요', '괜찮아요', '싸요'], ans: 0 },
    { q: 'The opposite of 재미있어요 is:', opts: ['재미없어요', '맛없어요', '재미있아요', '재미아니에요'], ans: 0 },
    { q: '그리고 means:', opts: ['and (connects two sentences)', 'but', 'so', 'or'], ans: 0 },
    { q: '학교 식당 means:', opts: ['school cafeteria', 'school library', 'school class', 'school friend'], ans: 0 },
  ],

  fill: [
    { sentence: '한국어 수업___ 재미있어요.', blank: '이', hint: 'Subject particle — 업 ends in consonant ㅂ', type: 'Particle' },
    { sentence: '커피___ 맛있어요.', blank: '가', hint: 'Subject particle — 피 ends in a vowel', type: 'Particle' },
    { sentence: '학교 식당 음식___ 어때요?', blank: '이', hint: 'Subject particle — 식 ends in consonant ㄱ', type: 'Particle' },
    { sentence: '한국어 수업이 재미있어요. 그리고 친구들___ 좋아요.', blank: ['도', '이'], hint: '“…and my friends are nice, too” → 도 (이 is also grammatical)', type: 'Particle' },
    { sentence: '리사가 아침___ 먹어요.', blank: '을', hint: 'Object particle — 침 ends in consonant ㅁ', type: 'Particle' },
    { sentence: '유미가 텔레비전___ 봐요.', blank: '을', hint: 'Object particle — 전 ends in consonant ㄴ', type: 'Particle' },
    { sentence: '스티브가 친구___ 만나요.', blank: '를', hint: 'Object particle — 구 ends in a vowel', type: 'Particle' },
    { sentence: '소피아가 숙제___ 해요.', blank: '를', hint: 'Object particle — 제 ends in a vowel', type: 'Particle' },
    { sentence: '소피아는 한국어___ 공부해요.', blank: '를', hint: 'Object particle — 어 ends in a vowel', type: 'Particle' },
    { sentence: '숙제가 많___요.', blank: '아', hint: '많다 → stem vowel ㅏ → 아요', type: 'Ending' },
    { sentence: '학교 식당 음식이 맛있___요.', blank: '어', hint: '맛있다 → not ㅏ/ㅗ → 어요', type: 'Ending' },
    { sentence: '커피가 좋___요.', blank: '아', hint: '좋다 → stem vowel ㅗ → 아요', type: 'Ending' },
    { sentence: '도서관이 넓___요.', blank: '어', hint: '넓다 → stem vowel ㅓ → 어요', type: 'Ending' },
    { sentence: '오늘 한국어 시험을 ___요. (보다)', blank: '봐', hint: '보 + 아요 → 봐요', type: 'Irregular' },
    { sentence: '지금 뭐 ___요? (하다)', blank: '해', hint: '하다 → 해요', type: 'Irregular' },
    { sentence: '한국어를 공부___요. (공부하다)', blank: '해', hint: '하다 → 해요', type: 'Irregular' },
    { sentence: '요즘 어떻게 지내요? — 잘 ___요. (지내다)', blank: '지내', hint: '지내 + 어요 → 지내요', type: 'Irregular' },
    { sentence: '학교 식당 음식이 아주 ___요. (싸다)', blank: '싸', hint: '싸 + 아요 → 싸요', type: 'Irregular' },
    { sentence: '도서관이 ___요. (크다)', blank: '커', hint: 'ㅡ drops: 크 + 어요 → 커요', type: 'Irregular' },
    { sentence: '이름을 ___요. (쓰다)', blank: '써', hint: 'ㅡ drops: 쓰 + 어요 → 써요', type: 'Irregular' },
    { sentence: '한국어 수업이 어___요? (어떻다)', blank: '때', hint: '어떻다 → 어때요', type: 'Irregular' },
    { sentence: "'The coffee is delicious' → 커피가 ___있어요.", blank: '맛', hint: '맛있다 = to be delicious', type: 'Vocab' },
    { sentence: "'Korean class is fun' → 한국어 수업이 ___있어요.", blank: '재미', hint: '재미있다 = to be fun', type: 'Vocab' },
    { sentence: '한국어 수업이 재미있어요. ___ 친구들도 좋아요.', blank: '그리고', hint: 'and (between sentences)', type: 'Vocab' },
    { sentence: '오늘은 한국어 시험을 봐요. 그리고 ___은 역사 시험을 봐요.', blank: '내일', hint: 'tomorrow', type: 'Vocab' },
    { sentence: '___ 뭐 해요? (now)', blank: '지금', hint: 'now', type: 'Vocab' },
  ],

  answer: [
    { type: 'you', q: '한국어 수업이 어때요?', en: 'How is Korean class?', model: ['재미있어요.', '아주 재미있어요. 그리고 숙제가 많아요.'] },
    { type: 'you', q: '학교 식당 음식이 어때요?', en: 'How is the cafeteria food?', model: ['맛있어요. 그리고 싸요.', '괜찮아요.', '맛없어요.'] },
    { type: 'you', q: '요즘 어떻게 지내요?', en: 'How are you doing these days?', model: ['잘 지내요.'] },
    { type: 'you', q: '지금 뭐 해요?', en: 'What are you doing now?', model: ['한국어를 공부해요.', '숙제를 해요.'], check: ['Object + 을/를 + verb'] },
    { type: 'you', q: '숙제가 많아요?', en: 'Is there a lot of homework?', model: ['네, 숙제가 많아요.'] },
    { type: 'you', q: '도서관이 어때요?', en: 'How is the library?', model: ['커요. 그리고 넓어요.', '아주 좋아요.'] },
    { type: 'you', q: '오늘 뭐 해요?', en: 'What are you doing today?', model: ['오늘 한국어 시험을 봐요.'] },
    { type: 'info', info: '리사 is eating breakfast.', q: '리사 씨, 지금 뭐 해요?', model: ['아침을 먹어요.'] },
    { type: 'info', info: '유미 is watching TV.', q: '유미 씨, 지금 뭐 해요?', model: ['텔레비전을 봐요.'] },
    { type: 'info', info: '스티브 is meeting a friend.', q: '스티브 씨, 지금 뭐 해요?', model: ['친구를 만나요.'] },
    { type: 'info', info: '소피아: Korean test today, Korean history test tomorrow.', q: '소피아 씨, 오늘 뭐 해요?', model: ['오늘 한국어 시험을 봐요. 그리고 내일은 한국 역사 시험을 봐요.'] },
    { type: 'info', info: 'The coffee is delicious and cheap.', q: '커피가 어때요?', model: ['맛있어요. 그리고 싸요.'] },
    { type: 'question', q: '잘 지내요.', model: ['요즘 어떻게 지내요?'] },
    { type: 'question', q: '아주 재미있어요.', model: ['한국어 수업이 어때요?'], check: ['Any “N이/가 어때요?” works'] },
    { type: 'question', q: '한국어를 공부해요.', model: ['지금 뭐 해요?'] },
    { type: 'question', q: '맛있어요. 그리고 싸요.', model: ['학교 식당 음식이 어때요?'], check: ['Any food/drink + 이/가 어때요?'] },
  ],

  shortAnswer: [
    { q: 'Write 3–4 sentences about your Korean class and school (class, homework, food, library). Use 그리고 at least once.',
      model: ['한국어 수업이 아주 재미있어요.', '그리고 친구들도 좋아요.', '숙제가 많아요.', '학교 식당 음식이 맛있어요. 그리고 싸요.'],
      check: ['Subject + 이/가 + adjective', '-어요/아요 chosen by the stem vowel', '그리고 starts the second sentence'] },
    { q: 'Write a short dialogue (4–6 lines): two classmates ask how each other is doing and what they are doing now.',
      model: ['A: 리사 씨, 요즘 어떻게 지내요?', 'B: 잘 지내요. 소피아 씨는 어떻게 지내요?', 'A: 저도 잘 지내요.', 'B: 지금 뭐 해요?', 'A: 한국어를 공부해요. 오늘 한국어 시험을 봐요.'],
      check: ['저도 = me too', '하다 → 해요, 보다 → 봐요'] },
    { q: 'Describe what each person is doing in one sentence each.', info: '리사: breakfast · 유미: TV · 소피아: homework · 스티브: friend',
      model: ['리사가 아침을 먹어요.', '유미가 텔레비전을 봐요.', '소피아가 숙제를 해요.', '스티브가 친구를 만나요.'],
      check: ['을 after consonant (아침을, 텔레비전을), 를 after vowel (숙제를, 친구를)'] },
  ],

  grammar: [
    {
      id: 'G2.1', tag: 'Lesson 2', title: 'Subject particle: <em>이/가</em>',
      html: `<div class="grammar-body">Marks the subject — the thing the adjective/verb is about.<br>
        • <span class="ko">이</span> after consonant · <span class="ko">가</span> after vowel<br>
        • Special forms: 나 → <span class="ko">내가</span>, 저 → <span class="ko">제가</span></div>
        <div class="example-box">
          <p>한국어 수업<b>이</b> 재미있어요. — Korean class is fun.</p>
          <p>커피<b>가</b> 맛있어요. — The coffee is delicious.</p>
          <p>학교 식당 음식<b>이</b> 어때요? — How is the cafeteria food?</p>
        </div>`,
    },
    {
      id: 'G2.2', tag: 'Lesson 2', title: 'Polite ending: <em>~어요/아요</em>',
      html: `<div class="grammar-body">Stem = dictionary form minus 다. If the stem's last vowel is <strong>ㅏ or ㅗ → 아요</strong>; otherwise <strong>→ 어요</strong>.
        Same ending for statements and questions.</div>
        <table class="rule-table">
          <tr><th>Dictionary</th><th>Stem</th><th>Polite</th><th>Meaning</th></tr>
          <tr><td>괜찮다</td><td>괜찮</td><td>괜찮<strong>아요</strong></td><td>it's okay</td></tr>
          <tr><td>좋다</td><td>좋</td><td>좋<strong>아요</strong></td><td>it's good</td></tr>
          <tr><td>많다</td><td>많</td><td>많<strong>아요</strong></td><td>there are many</td></tr>
          <tr><td>알다</td><td>알</td><td>알<strong>아요</strong></td><td>know</td></tr>
          <tr><td>앉다</td><td>앉</td><td>앉<strong>아요</strong></td><td>sit</td></tr>
          <tr><td>먹다</td><td>먹</td><td>먹<strong>어요</strong></td><td>eat</td></tr>
          <tr><td>넓다</td><td>넓</td><td>넓<strong>어요</strong></td><td>it's spacious</td></tr>
          <tr><td>재미있다</td><td>재미있</td><td>재미있<strong>어요</strong></td><td>it's fun</td></tr>
          <tr><td>맛있다</td><td>맛있</td><td>맛있<strong>어요</strong></td><td>it's delicious</td></tr>
          <tr><td>어떻다</td><td>어떻</td><td><strong>어때요</strong></td><td>how is it? (irregular)</td></tr>
          <tr><td>이다</td><td>이</td><td>이에요 / 예요</td><td>to be (copula)</td></tr>
        </table>`,
    },
    {
      id: 'G2.3', tag: 'Lesson 2', title: 'Polite ending II: stems ending in a vowel',
      html: `<div class="grammar-body">When the stem ends in a vowel, the ending changes shape:</div>
        <table class="rule-table">
          <tr><th>Rule</th><th>Dictionary</th><th>Polite</th></tr>
          <tr><td rowspan="2">(a) every 하다 → 해요</td><td>하다</td><td><strong>해요</strong></td></tr>
          <tr><td>공부하다 / 숙제하다</td><td><strong>공부해요 / 숙제해요</strong></td></tr>
          <tr><td rowspan="4">(b) vowels contract</td><td>싸다 (싸 + 아요)</td><td><strong>싸요</strong></td></tr>
          <tr><td>만나다 (만나 + 아요)</td><td><strong>만나요</strong></td></tr>
          <tr><td>보다 (보 + 아요)</td><td><strong>봐요</strong></td></tr>
          <tr><td>지내다 (지내 + 어요)</td><td><strong>지내요</strong></td></tr>
          <tr><td rowspan="2">(c) ㅡ drops before 어요</td><td>쓰다 (쓰 + 어요)</td><td><strong>써요</strong></td></tr>
          <tr><td>크다 (크 + 어요)</td><td><strong>커요</strong></td></tr>
        </table>
        <div class="example-box">
          <p>유미: 리사 씨, 학교 식당 음식이 어<b>때요</b>? — 리사: 맛있<b>어요</b>. 그리고 <b>싸요</b>.</p>
          <p>마이클: 지금 뭐 <b>해요</b>? — 스티브: 한국어 시험 공부<b>해요</b>.</p>
        </div>`,
    },
    {
      id: 'G2.4', tag: 'Lesson 2', title: 'Object particle: <em>을/를</em>',
      html: `<div class="grammar-body">Marks the object of a verb. <span class="ko">을</span> after consonant · <span class="ko">를</span> after vowel.<br><br>
        Two basic sentence patterns:<br>
        • <strong>N이/가 + Adjective</strong> — 도서관이 커요. 주스가 싸요.<br>
        • <strong>N이/가 + N을/를 + Verb</strong> — 리사가 아침을 먹어요.</div>
        <div class="example-box">
          <p>리사가 아침<b>을</b> 먹어요. — Lisa eats breakfast.</p>
          <p>유미가 텔레비전<b>을</b> 봐요. — Yumi watches TV.</p>
          <p>소피아가 숙제<b>를</b> 해요. — Sophia does homework.</p>
          <p>스티브가 친구<b>를</b> 만나요. — Steve meets a friend.</p>
        </div>
        <div class="grammar-body" style="margin-top:8px">공부하다 = 공부<b>를</b> 하다 · 숙제하다 = 숙제<b>를</b> 하다 · 시험<b>을</b> 보다 = take a test</div>`,
    },
    {
      id: '', tag: 'Lesson 2 · Expressions', title: 'Key expressions',
      html: `<table class="rule-table">
          <tr><th>Korean</th><th>Meaning</th></tr>
          <tr><td>N이/가 어때요?</td><td>How is N? (음식이 어때요? 학교가 어때요?)</td></tr>
          <tr><td>괜찮아요.</td><td>It's OK / not bad.</td></tr>
          <tr><td>요즘 어떻게 지내요?</td><td>How are you doing these days?</td></tr>
          <tr><td>잘 지내요.</td><td>I'm doing fine.</td></tr>
          <tr><td>지금 뭐 해요?</td><td>What are you doing now?</td></tr>
          <tr><td>이름이 뭐예요?</td><td>What is your name?</td></tr>
          <tr><td>어제 · 오늘 · 내일</td><td>yesterday · today · tomorrow</td></tr>
          <tr><td>A. 그리고 B.</td><td>A. And B. (connects sentences)</td></tr>
        </table>`,
    },
  ],
});
