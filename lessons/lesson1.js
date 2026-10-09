// Lesson 1 · 인사 (Greetings) — textbook pp. 44–66
addLesson({
  id: 1,
  title: '인사',
  english: 'Greetings',
  conversations: { 1: '저는 스티브 윌슨이에요.', 2: '한국 사람이에요?' },

  // New Words (p. 47 & p. 55). conv = which conversation's list it comes from.
  vocab: [
    // Conversation 1
    { conv: 1, k: '1학년', e: 'freshman', pos: 'noun', note: '일 학년 · 1st-year student' },
    { conv: 1, k: '2학년', e: 'sophomore', pos: 'noun', note: '이 학년 · 2nd-year student' },
    { conv: 1, k: '3학년', e: 'junior', pos: 'noun', note: '삼 학년 · 3rd-year student' },
    { conv: 1, k: '4학년', e: 'senior', pos: 'noun', note: '사 학년 · 4th-year student' },
    { conv: 1, k: '대학생', e: 'college student', pos: 'noun' },
    { conv: 1, k: '미국', e: 'the United States', pos: 'noun' },
    { conv: 1, k: '사람', e: 'person, people', pos: 'noun' },
    { conv: 1, k: '인사', e: 'greeting', pos: 'noun' },
    { conv: 1, k: '학년', e: 'school year', pos: 'noun' },
    { conv: 1, k: '학생', e: 'student', pos: 'noun' },
    { conv: 1, k: '한국', e: 'Korea', pos: 'noun' },
    { conv: 1, k: '저', e: 'I (humble)', pos: 'pronoun', note: '나 = plain form', syn: 'I' },
    { conv: 1, k: '안녕하다 (안녕하세요)', e: "to be well; 'Hi / Hello / How are you?'", pos: 'adjective' },
    { conv: 1, k: '이다 (이에요/예요)', e: 'to be (equation)', pos: 'copula' },
    { conv: 1, k: '과', e: 'lesson, chapter', pos: 'counter', note: '1과 = Lesson 1' },
    { conv: 1, k: '도', e: 'also, too', pos: 'particle' },
    { conv: 1, k: '은/는', e: "topic particle ('as for')", pos: 'particle' },
    { conv: 1, k: '영 / 공', e: '0 (zero)', pos: 'number', note: 'either one in phone numbers' },
    { conv: 1, k: '일', e: '1', pos: 'number', note: 'Sino-Korean' },
    { conv: 1, k: '이', e: '2', pos: 'number', note: 'Sino-Korean' },
    { conv: 1, k: '삼', e: '3', pos: 'number', note: 'Sino-Korean' },
    { conv: 1, k: '사', e: '4', pos: 'number', note: 'Sino-Korean' },
    { conv: 1, k: '오', e: '5', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    { conv: 1, k: '육', e: '6', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    { conv: 1, k: '칠', e: '7', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    { conv: 1, k: '팔', e: '8', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    { conv: 1, k: '구', e: '9', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    { conv: 1, k: '십', e: '10', pos: 'number', note: 'Sino-Korean (number table p. 48)' },
    // Conversation 2
    { conv: 2, k: '선생님', e: 'teacher', pos: 'noun' },
    { conv: 2, k: '씨', e: "attached to a person's name for courtesy", pos: 'noun', note: '유미 씨, 김유미 씨 — never for teachers/seniors, never last name alone' },
    { conv: 2, k: '영국', e: 'United Kingdom', pos: 'noun' },
    { conv: 2, k: '영어', e: 'the English language', pos: 'noun' },
    { conv: 2, k: '이름', e: 'name', pos: 'noun' },
    { conv: 2, k: '일본', e: 'Japan', pos: 'noun' },
    { conv: 2, k: '중국', e: 'China', pos: 'noun' },
    { conv: 2, k: '클래스', e: 'class (loanword)', pos: 'noun', note: '한국어 클래스', syn: 'class' },
    { conv: 2, k: '한국어 (=한국말)', e: 'Korean language', pos: 'noun' },
    { conv: 2, k: '아', e: 'oh', pos: 'interjection', note: '아, 그래요? · L2 also has 어 = oh', accept: ['아', '어'] },
    { conv: 2, k: '네 (=예)', e: 'yes; I see; okay', pos: 'adverb' },
    { conv: 2, k: '아니요', e: 'no', pos: 'adverb' },
    { conv: 2, k: '이/가', e: 'subject particle', pos: 'particle', note: '이 after consonant, 가 after vowel' },
    { conv: 2, k: '그렇다 (그래요)', e: "to be so ('Is that right?')", pos: 'adjective' },
    { conv: 2, k: '반갑다 (반갑습니다)', e: "to be glad ('Glad to meet you.')", pos: 'adjective' },
    { conv: 2, k: '아니다 (아니에요)', e: 'to not be (negative equation)', pos: 'copula' },
    { conv: 2, k: '뭐 (=무엇)', e: 'what', pos: 'pronoun' },
    // Used by the teacher in class/tests but not in the New Words lists
    { conv: 'From class', k: '대학교', e: 'university, college', pos: 'noun' },
    { conv: 'From class', k: '교수', e: 'professor', pos: 'noun', note: 'About yourself: 저는 교수예요. (교수님 only for others)' },
    { conv: 'From class', k: '우리', e: 'we; our', pos: 'pronoun', note: '우리 학교 = our school' },
    { conv: 'From class', k: '제', e: 'my (humble)', pos: 'pronoun', note: '제 친구 = my friend · plain: 내' },
    { conv: 'From class', k: '너', e: 'you (casual — close friends only)', pos: 'pronoun', note: '너의 이름이 뭐야? = casual 이름이 뭐예요?', syn: 'you' },
    // From the teacher's "Korean Vocabularies" doc (Oct 2026), not in the textbook New Words
    { conv: 'From class', k: '나', e: 'I (plain)', pos: 'pronoun', note: 'with friends; 저 is humble · 나 + 가 → 내가', syn: 'I' },
    { conv: 'From class', k: '당신', e: 'you (rarely said to someone directly)', pos: 'pronoun', note: 'Koreans use the person\'s name + 씨 instead', syn: 'you' },
    { conv: 'From class', k: '그', e: 'he', pos: 'pronoun' },
    { conv: 'From class', k: '그녀', e: 'she (mostly in writing)', pos: 'pronoun' },
    { conv: 'From class', k: '만나서 반가워요', e: 'Nice to meet you', pos: 'expression', note: 'casual: 만나서 반가워 · formal: 반갑습니다', accept: ['만나서 반가워요', '만나서반가워요'] },
  ],

  // Multiple-choice grammar & usage. ans = index of the correct option (options get shuffled).
  quiz: [
    { q: 'What does 안녕하세요? mean?', opts: ['Hello / How are you?', 'Goodbye', 'Thank you', "I'm sorry"], ans: 0, why: 'Used any time of day; reply with 안녕하세요.' },
    { q: '저는 학생이에요. means:', opts: ['I am a student.', 'You are a student.', 'She is a student.', 'We are students.'], ans: 0 },
    { q: 'Which copula form follows a <strong>consonant</strong>-final noun?', opts: ['이에요', '예요', '아요', '어요'], ans: 0, why: '학생이에요, 대학생이에요 · after a vowel: 유미예요' },
    { q: '김유미예요. Why 예요 and not 이에요?', opts: ['미 ends in a vowel', '미 ends in a consonant', "It's a question", "It's plural"], ans: 0 },
    { q: '스티브는 미국 사람이에요. Which particle marks 스티브 as the topic?', opts: ['는', '도', '이에요', '가'], ans: 0 },
    { q: '저는 3학년이에요. 리사<strong>도</strong> 3학년이에요. What does 도 signal?', opts: ['also / too (parallel)', 'contrast', 'subject', 'plural'], ans: 0 },
    { q: '유미는 한국 사람이에요. 스티브<strong>는</strong> 미국 사람이에요. Here 은/는 shows:', opts: ['contrast (as for Steve…)', 'also / too', 'plural', 'object'], ans: 0 },
    { q: 'Which is the <strong>humble</strong> form of “I”?', opts: ['저', '나', '씨', '뭐'], ans: 0, why: '저 = humble, 나 = plain' },
    { q: 'In 김유미, which part is the family name?', opts: ['김', '유미', '유', '미'], ans: 0, why: 'Korean puts the family name first.' },
    { q: 'How do you politely address your classmate 김유미?', opts: ['유미 씨', '김 씨', '유미 선생님', '너'], ans: 0, why: '씨 goes after the full name or given name — not after the last name alone.' },
    { q: '이름이 뭐예요? means:', opts: ['What is your name?', 'Where are you from?', 'What year are you?', 'Who is the teacher?'], ans: 0, why: 'Not used to a senior/teacher.' },
    { q: '반갑습니다 means:', opts: ['Glad to meet you.', 'Is that right?', 'Goodbye.', "I'm a student."], ans: 0 },
    { q: '아, 그래요? means:', opts: ['Oh, is that right?', "Oh, it's good.", 'Oh, no.', 'Oh, what?'], ans: 0 },
    { q: '뭐 is a contracted form of:', opts: ['무엇', '무어', '뭐예요', '누구'], ans: 0 },
    { q: 'How do you turn 한국 사람이에요. into a yes/no question?', opts: ['Same words, rising intonation: 한국 사람이에요?', 'Put 이에요 first', 'Add 네 at the end', 'Change 이에요 to 예요'], ans: 0, why: 'In the polite style, statements and questions have the same ending.' },
    { q: 'A: 3학년이에요?  (You are a 2nd-year.)  B: ___', opts: ['아니요, 2학년이에요.', '네, 2학년이에요.', '아니요, 3학년이에요.', '네, 3학년이 아니에요.'], ans: 0 },
    { q: 'A: 미국 사람이에요?  (You are American.)  B: ___', opts: ['네, 미국 사람이에요.', '아니요, 미국 사람이에요.', '네, 미국 사람이 아니에요.', '아, 미국이에요.'], ans: 0 },
    { q: 'Negative of 학생이에요:', opts: ['학생이 아니에요', '학생가 아니에요', '학생은 아니요', '학생 아니예요'], ans: 0, why: 'N이/가 아니에요 — 학생 ends in a consonant → 이' },
    { q: 'Negative of 한국어 클래스예요:', opts: ['한국어 클래스가 아니에요', '한국어 클래스이 아니에요', '한국어 클래스는 아니요', '한국어 클래스 예요 아니'], ans: 0, why: '클래스 ends in a vowel → 가' },
    { q: '소피아: 아니요, 한국 사람이 아니에요. 중국 사람이에요. Where is Sophia from?', opts: ['China', 'Korea', 'Japan', 'the UK'], ans: 0 },
    { q: 'The language of 일본 is:', opts: ['일본어', '일본말어', '일어', '영어'], ans: 0, why: 'country + 어 = language: 한국어, 중국어, 일본어' },
    { q: 'An American (미국 사람) speaks:', opts: ['영어', '미국어', '영국어', '한국어'], ans: 0, why: '영어 = English (for both 미국 and 영국)' },
    { q: 'Introducing yourself as a professor, you say:', opts: ['저는 교수예요.', '저는 교수님이에요.', '저는 교수님예요.', '저는 교수이에요.'], ans: 0, why: 'Never attach the honorific 님 to yourself. 교수 ends in a vowel → 예요.' },
    { q: 'Negative of 선생님이에요:', opts: ['선생님이 아니에요', '선생님을 아니에요', '선생님는 아니에요', '선생님 아니예요'], ans: 0, why: '아니에요 always takes 이/가 — never 을/를.' },
    { q: '안녕! 너의 이름이 뭐야? is:', opts: ["a casual (반말) way to ask someone's name", 'a formal greeting to a teacher', 'asking where someone is from', 'asking what year someone is in'], ans: 0, why: 'Polite: 이름이 뭐예요? · Casual reply: 미셸이야.' },
    { q: '“Glad to meet you.” (the expression, not the dictionary form)', opts: ['반갑습니다', '반갑다', '반가워다', '반갑어요'], ans: 0, why: '반갑다 is the dictionary form; use 반갑습니다 / 만나서 반가워요 to actually say it.' },
    { q: '네 can mean:', opts: ['yes / I see / okay', 'no', 'what', 'oh'], ans: 0 },
    { q: 'How is the phone number 258-0037 read?', opts: ['이오팔(의) 공공삼칠', '이오팔(의) 십십삼칠', '이오팔(의) 일일삼칠', '이십오팔 공공삼칠'], ans: 0, why: '0 = 영 or 공; the dash is 의 (pronounced 에) and can be skipped.' },
    { q: 'Sino-Korean 7:', opts: ['칠', '팔', '일', '구'], ans: 0 },
    { q: 'Sino-Korean 6:', opts: ['육', '오', '칠', '사'], ans: 0 },
  ],

  // Sentence blanks. blank may be a string or a list of accepted answers.
  fill: [
    { sentence: '저___ 학생이에요.', blank: '는', hint: 'Topic particle — 저 ends in a vowel', type: 'Particle' },
    { sentence: '마이클___ 1학년이에요.', blank: '은', hint: 'Topic particle — 마이클 ends in consonant ㄹ', type: 'Particle' },
    { sentence: '유미___ 한국 사람이에요.', blank: '는', hint: 'Topic particle — 유미 ends in a vowel', type: 'Particle' },
    { sentence: '수잔___ 4학년이에요.', blank: '은', hint: 'Topic particle — 수잔 ends in consonant ㄴ', type: 'Particle' },
    { sentence: '저는 3학년이에요. 리사___ 3학년이에요.', blank: '도', hint: 'Same thing → also / too', type: 'Particle' },
    { sentence: '이름___ 뭐예요?', blank: '이', hint: 'Subject particle — 이름 ends in consonant ㅁ', type: 'Particle' },
    { sentence: '저는 김유미___요.', blank: '예', hint: '미 ends in a vowel → 예요', type: 'Copula' },
    { sentence: '마이클은 대학생___에요.', blank: '이', hint: '생 ends in consonant ㅇ → 이에요', type: 'Copula' },
    { sentence: '저는 스티브 윌슨___에요.', blank: '이', hint: '슨 ends in consonant ㄴ → 이에요', type: 'Copula' },
    { sentence: '소피아 왕은 선생님___ 아니에요.', blank: '이', hint: 'N이/가 아니에요 — 님 ends in a consonant', type: 'Negative' },
    { sentence: '저는 한국어 클래스___ 아니에요.', blank: '가', hint: 'N이/가 아니에요 — 스 ends in a vowel', type: 'Negative' },
    { sentence: '스티브는 일본 사람이 ___에요.', blank: '아니', hint: 'not be = 아니다 → 아니에요', type: 'Negative' },
    { sentence: 'A: 한국 사람이에요?  B: ___, 한국 사람이에요.', blank: ['네', '예'], hint: 'The content is true', type: 'Yes/No' },
    { sentence: 'A: 3학년이에요?  B: ___, 2학년이에요.', blank: '아니요', hint: 'The content is not true', type: 'Yes/No' },
    { sentence: '이름이 ___예요?', blank: '뭐', hint: 'what (= 무엇)', type: 'Vocab' },
    { sentence: "___습니다. ('Glad to meet you.')", blank: '반갑', hint: '반갑다 = to be glad', type: 'Vocab' },
    { sentence: '중국 사람 → language: 중국___', blank: '어', hint: 'country + 어 = language', type: 'Vocab' },
    { sentence: '영국 사람 → language: ___', blank: '영어', hint: 'English', type: 'Vocab' },
    { sentence: '채윤정은 한국어 선생님이에요. 새온이는 한국어 선생님___ 아니에요.', blank: '이', hint: '아니에요 takes 이/가 (never 을/를) — 님 ends in a consonant', type: 'Negative' },
    { sentence: '저는 미국 사람이에요. 대학생___ 아니에요.', blank: '이', hint: 'N이/가 아니에요 — 생 ends in a consonant', type: 'Negative' },
    { sentence: '저는 교수___요.', blank: '예', hint: '교수 ends in a vowel → 예요 (and no 님 for yourself)', type: 'Copula' },
    { sentence: '유미 ___, 1학년이에요?', blank: '씨', hint: 'courtesy title after a name', type: 'Vocab' },
  ],

  // Free response, self-checked against model answers (Practice Test tab).
  // type: 'you' = answer about yourself · 'info' = answer from the given info · 'question' = write the question for answer q.
  answer: [
    { type: 'you', q: '이름이 뭐예요?', en: 'What is your name?', model: ['저는 ___이에요/예요.', 'e.g. 저는 스티브 윌슨이에요. / 저는 김유미예요.'], check: ['이에요 after a consonant, 예요 after a vowel'] },
    { type: 'you', q: '한국 사람이에요?', en: 'Are you Korean?', model: ['아니요, 한국 사람이 아니에요. 미국 사람이에요.'], check: ['아니요 + N이/가 아니에요', 'Then say what you are'] },
    { type: 'you', q: '중국 사람이에요?', en: 'Are you Chinese?', model: ['아니요, 중국 사람이 아니에요. 미국 사람이에요.'] },
    { type: 'you', q: '대학생이에요?', en: 'Are you a college student?', model: ['네, 대학생이에요.', '아니요, 대학생이 아니에요.'] },
    { type: 'you', q: '1학년이에요?', en: 'Are you a freshman?', model: ['네, 1학년이에요.', '아니요, 1학년이 아니에요. ___학년이에요.'] },
    { type: 'info', info: '소피아: 한국 사람 (X), 중국 사람 (O)', q: '소피아 씨는 한국 사람이에요?', model: ['아니요, 한국 사람이 아니에요. 중국 사람이에요.'] },
    { type: 'info', info: '스티브: 미국 사람 (O), 3학년 (O)', q: '스티브 씨, 1학년이에요?', model: ['아니요, 1학년이 아니에요. 3학년이에요.'] },
    { type: 'info', info: '유미: 한국 사람 (O), 1학년 (O)', q: '유미 씨는 한국 사람이에요?', model: ['네, 한국 사람이에요.'] },
    { type: 'info', info: '마이클: 일본 사람 (X), 미국 사람 (O), 대학생 (O)', q: '마이클 씨는 일본 사람이에요?', model: ['아니요, 일본 사람이 아니에요. 미국 사람이에요.'] },
    { type: 'info', info: '이민수 선생님: 한국 사람 (O), 한국어 선생님 (O)', q: '이민수 선생님은 영어 선생님이에요?', model: ['아니요, 영어 선생님이 아니에요. 한국어 선생님이에요.'] },
    { type: 'question', q: '마이클 정이에요.', model: ['이름이 뭐예요?'] },
    { type: 'question', q: '아니요, 저는 3학년이에요.', model: ['2학년이에요? (or 1학년 / 4학년이에요?)'], check: ['Any year except 3학년 works'] },
    { type: 'question', q: '네, 일본 사람이에요.', model: ['일본 사람이에요?'] },
    { type: 'question', q: '아니요, K101은 한국어 클래스예요.', model: ['K101은 영어 클래스예요? (or 중국어/일본어 클래스예요?)'] },
    { type: 'question', q: '네, 반갑습니다.', model: ['안녕하세요? 저는 ___이에요/예요. 반갑습니다.'], note: 'Any greeting + self-introduction works here.' },
  ],

  shortAnswer: [
    { q: 'Introduce yourself in 3–4 sentences: greeting, name, nationality, and what you are (student, year, etc.).',
      model: ['안녕하세요? 저는 ___이에요/예요.', '미국 사람이에요. 한국 사람이 아니에요.', '저는 한국어 클래스 학생이에요.', '반갑습니다.'],
      check: ['저는 (topic) — not 저가', '이에요 vs 예요 matches the last letter', 'Negative: N이/가 아니에요'] },
    { q: 'Write three sentences about 마이클. Use both N이에요/예요 and N이/가 아니에요.', info: 'Information: 일본 사람 (X), 미국 사람 (O), 대학생 (O)',
      model: ['마이클은 일본 사람이 아니에요.', '미국 사람이에요.', '마이클은 대학생이에요.'], check: ['마이클 ends in ㄹ → 은', '사람 ends in a consonant → 이 아니에요'] },
    { q: 'Write three sentences about 소피아. Use both N이에요/예요 and N이/가 아니에요.', info: 'Information: 한국 사람 (X), 중국 사람 (O), 1학년 (O)',
      model: ['소피아는 한국 사람이 아니에요.', '중국 사람이에요.', '소피아는 1학년이에요.'], check: ['소피아 ends in a vowel → 는'] },
    { q: 'Write two sentences about each person using 은/는, 도, and 이에요/아니에요.', info: 'Ellen: Japanese, college student · Bill: junior, not American',
      model: ['엘렌은 일본 사람이에요. 엘렌은 대학생이에요.', '빌은 3학년이에요. 빌은 미국 사람이 아니에요.'], check: ['If two people share something, use 도: 빌도 대학생이에요.'] },
  ],

  // Fresh practice: build new questions from the vocab + grammar rules each time (see "generated practice" in app.js).
  generators: [
    {
      type: 'topic', label: 'Topic particle 은/는',
      typed: ctx => {
        const w = pick([...CAST.map(c => c[0]), ...nounsUpTo(ctx.upTo, ['씨']).map(n => n.w)]);
        return { sentence: `${w}___ (topic: “as for ${w}…”)`, blank: hasBatchim(w) ? '은' : '는', hint: `Look at the last syllable “${w.slice(-1)}” — does it have a bottom consonant?`, why: batchimWhy(w, '은', '는') };
      },
      mc: ctx => {
        const w = pick([...CAST.map(c => c[0]), ...nounsUpTo(ctx.upTo, ['씨']).map(n => n.w)]);
        return mcq(`Add the <strong>topic</strong> particle to <span class="quiz-korean">${w}</span>`, josa(w, '은', '는'), [josa(w, '는', '은'), josa(w, '이', '가'), josa(w, '가', '이')], batchimWhy(w, '은', '는'));
      },
    },
    {
      type: 'copula', label: '이에요 / 예요',
      typed: ctx => {
        if (Math.random() < 0.4) { const [ko, en] = pick(CAST); return { sentence: `저는 ${ko}___. (“I'm ${en}.”)`, blank: hasBatchim(ko) ? '이에요' : '예요', hint: `Last syllable: “${ko.slice(-1)}”`, why: batchimWhy(ko, '이에요', '예요') }; }
        const n = pick(nounsUpTo(ctx.upTo, ['씨']));
        return { sentence: `${n.w}___. (${n.w} = ${n.e} · “it is …”)`, blank: hasBatchim(n.w) ? '이에요' : '예요', hint: `Last syllable: “${n.w.slice(-1)}”`, why: batchimWhy(n.w, '이에요', '예요') };
      },
      mc: ctx => {
        const n = pick(nounsUpTo(ctx.upTo, ['씨']));
        return mcq(`<span class="quiz-korean">${n.w}</span> (${n.e}) + “it is” →`, josa(n.w, '이에요', '예요'), [josa(n.w, '예요', '이에요'), n.w + '이예요', josa(n.w, '을 이에요', '를 예요')], batchimWhy(n.w, '이에요', '예요') + ' (이예요 is a common misspelling)');
      },
    },
    {
      type: 'negative', label: 'N이/가 아니에요',
      typed: ctx => {
        const n = pick(nounsUpTo(ctx.upTo, ['씨']));
        return { sentence: `${n.w}___ 아니에요. (${n.w} = ${n.e} · “it is not …”)`, blank: hasBatchim(n.w) ? '이' : '가', hint: '아니에요 takes the subject particle', why: batchimWhy(n.w, '이', '가') };
      },
      mc: ctx => {
        const n = pick(nounsUpTo(ctx.upTo, ['씨']));
        return mcq(`<span class="quiz-korean">${n.w}</span> (${n.e}) + “it is not” →`, josa(n.w, '이 아니에요', '가 아니에요'), [josa(n.w, '을 아니에요', '를 아니에요'), josa(n.w, '가 아니에요', '이 아니에요'), josa(n.w, '은 아니요', '는 아니요')], 'N이/가 아니에요 — never 을/를. ' + batchimWhy(n.w, '이', '가'));
      },
    },
    {
      type: 'yesno', label: 'Answering yes/no questions',
      mc: () => {
        const [name, eng] = pick(CAST);
        const countries = [['한국', 'Korean'], ['중국', 'Chinese'], ['일본', 'Japanese'], ['미국', 'American'], ['영국', 'British']];
        if (Math.random() < 0.5) {
          const actual = pick(countries), ask = Math.random() < 0.4 ? actual : pick(countries.filter(c => c !== actual));
          const q = `(${eng} is ${actual[1]}.) A: ${name} 씨, ${ask[0]} 사람이에요? &nbsp;B: ___`;
          if (ask === actual) return mcq(q, `네, ${ask[0]} 사람이에요.`, [`아니요, ${ask[0]} 사람이에요.`, `네, ${ask[0]} 사람이 아니에요.`, `네, ${ask[0]} 사람예요.`], '네 = the content is true.');
          return mcq(q, `아니요, ${ask[0]} 사람이 아니에요. ${actual[0]} 사람이에요.`,
            [`네, ${ask[0]} 사람이 아니에요. ${actual[0]} 사람이에요.`, `아니요, ${ask[0]} 사람가 아니에요. ${actual[0]} 사람이에요.`, `아니요, ${ask[0]} 사람이에요. ${actual[0]} 사람이 아니에요.`], '아니요 = the content is false; then N이 아니에요.');
        }
        const years = ['freshman', 'sophomore', 'junior', 'senior'], actual = randInt(1, 4), ask = Math.random() < 0.4 ? actual : pick([1, 2, 3, 4].filter(y => y !== actual));
        const q = `(${eng} is a ${years[actual - 1]}.) A: ${name} 씨, ${ask}학년이에요? &nbsp;B: ___`;
        if (ask === actual) return mcq(q, `네, ${ask}학년이에요.`, [`아니요, ${ask}학년이에요.`, `네, ${ask}학년이 아니에요.`, `네, ${ask}학년예요.`]);
        return mcq(q, `아니요, ${ask}학년이 아니에요. ${actual}학년이에요.`, [`네, ${ask}학년이 아니에요. ${actual}학년이에요.`, `아니요, ${ask}학년가 아니에요. ${actual}학년이에요.`, `아니요, ${actual}학년이 아니에요. ${ask}학년이에요.`]);
      },
    },
    {
      type: 'language', label: 'Country → person / language',
      typed: () => {
        const c = pick(['한국', '중국', '일본', '미국', '영국']);
        if (Math.random() < 0.5) return { sentence: `${c} 사람 → language: ___`, blank: c === '미국' || c === '영국' ? '영어' : (c === '한국' ? ['한국어', '한국말'] : c + '어'), hint: 'country + 어 (but English is special)' };
        return { sentence: `a person from ${c} → ___`, blank: c + ' 사람', hint: 'country + 사람' };
      },
    },
    {
      type: 'phone', label: 'Reading phone numbers',
      mc: () => {
        const digits = () => Array.from({ length: 4 }, () => randInt(0, 9));
        const a = [randInt(2, 9), randInt(0, 9), randInt(0, 9)], b = digits();
        const read = ds => ds.map(d => d === 0 ? '공' : SINO_DIGITS[d]).join('');
        const say = (x, y) => `${read(x)}(의) ${read(y)}`;
        const tweak = ds => { const c = ds.slice(), i = randInt(0, c.length - 1); c[i] = (c[i] + randInt(1, 8)) % 10; return c; };
        return mcq(`Read the phone number <strong>${a.join('')}-${b.join('')}</strong>`, say(a, b), [say(tweak(a), b), say(a, tweak(b)), say(b.slice(0, 3), [...a, b[3]])], '0 = 공 (or 영); the dash is 의 (pronounced 에).');
      },
    },
  ],

  grammar: [
    {
      id: 'G1.1', tag: 'Lesson 1', title: 'Equational expression: N1<em>은/는</em> N2<em>이에요/예요</em>',
      html: `<div class="grammar-body">“N1 is N2.” The copula <span class="ko">이다</span> (“to be”) attaches to N2.<br><br>
        • <span class="ko">이에요</span> after a <strong>consonant</strong> (학생<span class="ko">이에요</span>)<br>
        • <span class="ko">예요</span> after a <strong>vowel</strong> (김유미<span class="ko">예요</span>)<br><br>
        Topic particle: <span class="ko">은</span> after consonant, <span class="ko">는</span> after vowel.</div>
        <div class="example-box">
          <p>저는 스티브<b>예요</b>. — I am Steve.</p>
          <p>마이클은 대학생<b>이에요</b>. — Michael is a college student.</p>
          <p>유미는 1학년<b>이에요</b>. — Yumi is a freshman.</p>
        </div>`,
    },
    {
      id: 'G1.2', tag: 'Lesson 1', title: 'Omission of redundant elements',
      html: `<div class="grammar-body">Korean drops subjects/topics when they're clear from context.
        <span class="ko">안녕하세요?</span> literally means “[Are you] well?”</div>
        <div class="example-box">
          <p>스티브: 저는 스티브 윌슨이에요. <b>3학년이에요.</b></p>
          <p>(The second sentence drops 저는 — it's obvious.)</p>
        </div>`,
    },
    {
      id: 'G1.3', tag: 'Lesson 1', title: 'Comparing items: <em>은/는</em> vs. <em>도</em>',
      html: `<div class="grammar-body"><span class="ko">은/는</span> = topic / contrast (“as for…”)<br>
        <span class="ko">도</span> = parallel (“also, too”) — it <strong>replaces</strong> 은/는 (저도, not 저는도)</div>
        <div class="example-box">
          <p>유미는 한국 사람이에요. 스티브<b>는</b> 미국 사람이에요. (different)</p>
          <p>저는 3학년이에요. 리사<b>도</b> 3학년이에요. (parallel)</p>
        </div>
        <table class="rule-table">
          <tr><th></th><th>I</th><th>As for me…</th><th>I also…</th></tr>
          <tr><td>Plain</td><td>나</td><td>나는</td><td>나도</td></tr>
          <tr><td>Humble</td><td>저</td><td>저는</td><td>저도</td></tr>
        </table>`,
    },
    {
      id: 'G1.4', tag: 'Lesson 1', title: 'Yes/no questions',
      html: `<div class="grammar-body">No special grammar — same words as the statement, just <strong>rising intonation</strong>.<br>
        Answer <span class="ko">네</span> (or <span class="ko">예</span>) if the content is true, <span class="ko">아니요</span> if it isn't.<br>
        Use the person's <strong>name + 씨</strong> instead of “you.”</div>
        <div class="example-box">
          <p>마이클: 유미 씨, 한국 사람이에요? ↗</p>
          <p>유미: <b>네</b>, 한국 사람이에요.</p>
          <p>스티브: 소피아 씨, 3학년이에요? ↗</p>
          <p>소피아: <b>아니요</b>, 2학년이에요.</p>
        </div>`,
    },
    {
      id: 'G1.5', tag: 'Lesson 1', title: 'Negative equation: N1<em>은/는</em> N2<em>이/가 아니에요</em>',
      html: `<div class="grammar-body">“N1 is not N2.” N2 takes the subject particle: <span class="ko">이</span> after consonant, <span class="ko">가</span> after vowel.</div>
        <table class="rule-table">
          <tr><th></th><th>after consonant</th><th>after vowel</th></tr>
          <tr><td>is</td><td>학생<strong>이에요</strong></td><td>클래스<strong>예요</strong></td></tr>
          <tr><td>is not</td><td>학생<strong>이 아니에요</strong></td><td>클래스<strong>가 아니에요</strong></td></tr>
        </table>
        <div class="example-box">
          <p>소피아 왕은 선생님<b>이 아니에요</b>. 학생이에요.</p>
          <p>유미: 스티브 씨, 1학년이에요? — 스티브: 아니요, 1학년<b>이 아니에요</b>. 3학년이에요.</p>
          <p>스티브 윌슨<b>도</b> 일본 사람<b>이 아니에요</b>. 미국 사람이에요.</p>
        </div>`,
    },
    {
      id: '', tag: 'Lesson 1 · Expressions', title: 'Countries, people &amp; languages',
      html: `<div class="grammar-body">country + <span class="ko">사람</span> = person from there · country + <span class="ko">어</span> = its language (except English = <span class="ko">영어</span>)</div>
        <table class="rule-table">
          <tr><th>Country</th><th>Person</th><th>Language</th></tr>
          <tr><td>한국 Korea</td><td>한국 사람</td><td>한국어 (=한국말)</td></tr>
          <tr><td>중국 China</td><td>중국 사람</td><td>중국어</td></tr>
          <tr><td>일본 Japan</td><td>일본 사람</td><td>일본어</td></tr>
          <tr><td>미국 USA</td><td>미국 사람</td><td>영어</td></tr>
          <tr><td>영국 UK</td><td>영국 사람</td><td>영어</td></tr>
        </table>
        <div class="grammar-body" style="margin-top:10px">
          • <span class="ko">이름이 뭐예요?</span> “What's your name?” — not to a senior (use 성함이 어떻게 되세요?)<br>
          • <span class="ko">씨</span> after full name or given name (김유미 씨, 유미 씨) — not for teachers/seniors, not after last name alone<br>
          • Korean names put the family name first: in 김유미, 김 is the family name</div>`,
    },
  ],

  reference: [
    {
      title: 'Sino-Korean numbers 0–10 (tap the romanization to reveal)',
      html: `<div class="vocab-grid">${[
        [0, '영 / 공', 'yeong / gong'], [1, '일', 'il'], [2, '이', 'i'], [3, '삼', 'sam'], [4, '사', 'sa'], [5, '오', 'o'],
        [6, '육', 'yuk'], [7, '칠', 'chil'], [8, '팔', 'pal'], [9, '구', 'gu'], [10, '십', 'sip'],
      ].map(([n, ko, rom]) => `<div class="num-card"><span class="num-digit">${n}</span><span class="num-ko">${ko}</span>
        <span class="num-rom reveal-on-tap" onclick="this.classList.toggle('shown')">[${rom}]</span>${speakBtn(ko.split(' / ')[0])}</div>`).join('')}</div>`,
    },
    {
      title: 'Phone number practice — say it, then tap to check',
      html: `<div class="vocab-grid">${[
        ['119', '일일구'], ['370-6481', '삼칠공(의) 육사팔일'], ['590-2406', '오구공(의) 이사공육'],
        ['964-0387', '구육사(의) 공삼팔칠'], ['(367) 801-4592', '삼육칠 팔공일(의) 사오구이'], ['258-0037', '이오팔(의) 공공삼칠'],
      ].map(([num, ko]) => `<div class="phone-card"><span class="phone-num">${num}</span>
        <span class="phone-ko reveal-on-tap" onclick="this.classList.toggle('shown')">${ko}</span>${speakBtn(ko.replace(/\(의\)/g, '에'))}</div>`).join('')}</div>
        <div class="tip" style="margin-top:8px">0 is read <strong>영</strong> or <strong>공</strong>. The dash is <strong>의</strong> (pronounced “에”) and is optional: 이오팔(의) 공공삼칠 (p. 48).</div>`,
    },
    {
      title: 'School years',
      html: `<div class="grammar-block"><table class="rule-table">
        <tr><th>Hangeul</th><th>Read as</th><th>Meaning</th></tr>
        <tr><td>1학년</td><td>일 학년</td><td>freshman</td></tr>
        <tr><td>2학년</td><td>이 학년</td><td>sophomore</td></tr>
        <tr><td>3학년</td><td>삼 학년</td><td>junior</td></tr>
        <tr><td>4학년</td><td>사 학년</td><td>senior</td></tr>
      </table></div>`,
    },
  ],
});
