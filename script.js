const quizData = [
  {
    question: 'What city is The Office based out of?',
    a: 'New York, New York',
    b: 'Scranton, Pennsylvania',
    c: 'Seattle, Washington',
    d: 'Stamford, Connecticut',
    correct: 'b'
  },
  {
    question: 'What type of farm does Dwight own?',
    a: 'Beetle Farm',
    b: 'Carrot Farm',
    c: 'Beet Farm',
    d: 'Bear Farm',
    correct: 'c'
  },
  {
    question: 'Who does Toby have a crush on in the series?',
    a: 'Kelly',
    b: 'Erin',
    c: 'Phyllis',
    d: 'Pam',
    correct: 'd'
  },
  {
    question: 'What kind of company is Dunder Mifflin?',
    a: 'Staple Company',
    b: 'Printing Company',
    c: 'Paper Company',
    d: 'Fax Company',
    correct: 'c'
  },
  {
    question: 'What does Michael wear on his head on diversity day?',
    a: 'Colin Powell',
    b: 'Ghandi',
    c: 'Martin Luther King',
    d: 'Gan De',
    correct: 'c'
  },
  {
    question: 'Who does Michael Scott hate in the office?',
    a: 'Toby',
    b: 'Creed',
    c: 'Stanley',
    d: 'Jim',
    correct: 'a'
  },
  {
    question: 'Whats the title of the Movie Michael writes?',
    a: 'Nightmare in Scranton',
    b: 'Level One: Midnight',
    c: 'Threat Level Midnight',
    d: 'Return of Dawn',
    correct: 'c'
  },
  {
    question: 'What does Pam study at the Pratt Institute?',
    a: 'Painting',
    b: 'Graphic Design',
    c: 'Drawing',
    d: 'Photography',
    correct: 'b'
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score <= 3) {
        quiz.innerHTML = `<h2>You scored a ${score}/${quizData.length}. Do you even watch The Office?</h2>'
        <div class='stanley'></div>
      <button onclick="location.reload()">Reload</button>`;
      } else if (score > 3 && score <= 7) {
        quiz.innerHTML = `<h2>You scored a ${score}/${quizData.length}. It's okay, we all can't win.</h2>'
        <div class='toby'></div>
      <button onclick="location.reload()">Reload</button>`;
      } else {
        quiz.innerHTML = `<h2>You scored a ${score}/${quizData.length}. Welcome to Dunder Mifflin!</h2>'
        <div class='michael'></div>
        <button onclick="location.reload()">Reload</button>`;
      }
    }

    // quiz.innerHTML = `<h2>You scored a ${score}/${quizData.length}.</h2>'
    //   <button onclick="location.reload()">Reload</button>`;
  }
});
