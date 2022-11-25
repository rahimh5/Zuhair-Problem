const questions = [
    {
        id: 0,
        question: "What is 6 x 6?",
        ans: "36",
        A: "48",
        B: "36",
        C: "38",
        D: "26",
    },
    {
        id: 1,
        question: "What is 3 x 8?",
        ans: "24",
        A: "28",
        B: "26",
        C: "22",
        D: "24",
    },
    {
        id: 2,
        question: "What is 4 x 12?",
        ans: "48",
        A: "60",
        B: "52",
        C: "48",
        D: "36",
    },
    {
        id: 3,
        question: "What is 1 x 3?",
        ans: "3",
        A: "5",
        B: "1",
        C: "4",
        D: "3",
    },
    {
        id: 4,
        question: "What is 6 x 3?",
        ans: "18",
        A: "18",
        B: "17",
        C: "19",
        D: "16",
    },
  ];

  // select items

const question = document.getElementById("question");
const choiceA = document.getElementById("choice-A");
const choiceB = document.getElementById("choice-B");
const choiceC = document.getElementById("choice-C");
const choiceD = document.getElementById("choice-D");

const btnA = document.querySelector('.A');
const btnB = document.querySelector('.B');
const btnC = document.querySelector('.C');
const btnD = document.querySelector('.D');
const nextQuestionBtn = document.querySelector('.nextQuestion');
const allBtns = document.querySelectorAll(".btn");

const showChecker = document.getElementById("checker");
const nextQuestion = document.getElementById("next-quetsion-btn");

///////////////////////////////////////////////////////////////
////                          CODE                         ////
///////////////////////////////////////////////////////////////

let Score = 0;
let questionID = 0;
let answerSelected = "";
window.addEventListener('DOMContentLoaded',function(){
    showQuestion(questionID);
})

///////////////////////////////////////////////////////////////
////                       FUNCTIONS                       ////
///////////////////////////////////////////////////////////////

function showQuestion(questionID) {
    const questionLoaded = questions[questionID];
    question.textContent = questionLoaded.question;
    choiceA.textContent = questionLoaded.A;
    choiceB.textContent = questionLoaded.B;
    choiceC.textContent = questionLoaded.C;
    choiceD.textContent = questionLoaded.D;
}

function checkAnswer(answerSelected) {
    console.log("Checking answer...")
    if(answerSelected === questions[questionID].ans) {
        showChecker.style.display = "block";
        nextQuestion.style.display = "block";
        console.log("Correct!")
    } else {
        document.getElementById("checker").style.display = "none";
        showChecker.style.display = "none";
        nextQuestion.style.display = "none";
        console.log("Wrong!")
        console.log("Answer needed: " + questions[questionID].ans + "\n***************************************")
    }
}

///////////////////////////////////////////////////////////////
////                       QUESTIONS                       ////
///////////////////////////////////////////////////////////////

nextQuestionBtn.addEventListener('click', function() {
    questionID++
    if(questionID > questions.length - 1) {
        questionID = 0;
    }
    showQuestion(questionID);
    console.log("New question loaded...")
    showChecker.style.display = "none";
    nextQuestion.style.display = "none";
  });


///////////////////////////////////////////////////////////////
////                       BUTTONS                         ////
///////////////////////////////////////////////////////////////

btnA.addEventListener('click', function() {
    console.log("Answer choice: A")
    answerSelected = choiceA.textContent;
    checkAnswer(answerSelected);
})
btnB.addEventListener('click', function() {
    console.log("Answer choice: B")
    answerSelected = choiceB.textContent;
    checkAnswer(answerSelected);
})
btnC.addEventListener('click', function() {
    console.log("Answer choice: C")
    answerSelected = choiceC.textContent;
    checkAnswer(answerSelected);
})
btnD.addEventListener('click', function() {
    console.log("Answer choice: D")
    answerSelected = choiceD.textContent;
    checkAnswer(answerSelected);
})

