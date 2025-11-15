const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// ------------ VARIABILI STATO -------------
let index = 0;
let score = 0;

// ------------ ELEMENTI HTML -------------
const questionText = document.getElementById("question-text");
const buttons = [
  document.getElementById("answer-btn1"),
  document.getElementById("answer-btn2"),
  document.getElementById("answer-btn3"),
  document.getElementById("answer-btn4"),
];
const footer = document.querySelector("footer p");

// ------------ FUNZIONE SHUFFLE -------------
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
}

// ------------ MOSTRA DOMANDA -------------
function showQuestion() {
  const q = questions[index];

  questionText.innerHTML = q.question;
  footer.innerHTML = "QUESTION " + (index + 1) + " <span>/ " + questions.length + "</span>";

  const allAnswers = [];

  // aggiungo le risposte sbagliate
  for (let i = 0; i < q.incorrect_answers.length; i++) {
    allAnswers.push(q.incorrect_answers[i]);
  }

  // aggiungo la risposta corretta
  allAnswers.push(q.correct_answer);

  // mischio le risposte
  shuffle(allAnswers);

  // popolo i bottoni
  for (let i = 0; i < 4; i++) {
    buttons[i].style.backgroundColor = "";
    buttons[i].style.color = "";
    buttons[i].disabled = false;

    if (i < allAnswers.length) {
      buttons[i].style.display = "inline-block";
      buttons[i].innerText = allAnswers[i];
    } else {
      buttons[i].style.display = "none";
      buttons[i].innerText = "";
    }
  }
}

// ------------ LOGICA RISPOSTA -------------
function chooseAnswer(text) {
  const correct = questions[index].correct_answer;

  if (text === correct) {
    score++;
  }

  index++;


  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ------------ RISULTATO FINALE -------------
function showResult() {
  let message = "";
  let comment = "";

  if (score >= 6) {
    message = "Quiz superato! 🎉";
    comment = "Complimenti! 🎯";
  } else {
    message = "Quiz non superato 😢";
    comment = "Ricarica la pagina per riprovare💪";
  }

  document.body.innerHTML =
    '<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; min-height:100vh; font-family:Outfit; text-align:center; padding:20px;">' +
    "<h1>" + message + "</h1>" +
    "<p>Hai fatto <strong>" + score + "</strong> punti su <strong>" + questions.length + "</strong></p>" +
    "<p>" + comment + "</p>" +
    "</div>";
}

// ------------ LISTENER BOTTONI -------------
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const answerText = this.innerText;

    if (!answerText) {
      return;
    }

    // colora il bottone cliccato
    this.style.backgroundColor = "#D20094";
    this.style.color = "white";

    // disabilita tutti i bottoni per evitare doppi click
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].disabled = true;
    }

    // aspetta 1.2 secondi prima di passare alla domanda successiva
    setTimeout(function () {
      chooseAnswer(answerText);
    }, 200);
  });
}

// ------------ AVVIO QUIZ -------------
showQuestion();