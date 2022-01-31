const quizData = [
    {
        question: "Which one is a vovel?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct : "a",
    },
    {
        question: "Which one is an odd number?",
        a: "12",
        b: "10",
        c: "11",
        d: "2",
        correct : "c",
    },
    {
        question: "Which one is an even number?",
        a: "11",
        b: "13",
        c: "19",
        d: "8",
        correct : "d",
    },
    {
        question: "Which one is a consonent?",
        a: "a",
        b: "e",
        c: "i",
        d: "z",
        correct : "d",
    },
    {
        question: "Which one is a not a fruit?",
        a: "orange",
        b: "apple",
        c: "tomato",
        d: "pineapple",
        correct : "c",
    },
    
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});
