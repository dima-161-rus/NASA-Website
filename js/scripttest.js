const quizData = [{
    question: "What two motions do all planets have?",
    a: "orbit and spin",
    b: "rock and roll",
    c: "twist and shout",
    d: "wiggle and wobble",
    correct: "a",
},
{
    question: "Which type of star is the Sun classified?",
    a: "A-type star",
    b: "G2 V star",
    c: "K-type star",
    d: "F-type star",
    correct: "b",
},
{
    question: "When did the Space Age begin?",
    a: "1969",
    b: "1941",
    c: "1957",
    d: "1999",
    correct: "c",
},
{
    question: "What is the scientific term used for the twinkling of stars?",
    a: "Refraction",
    b: "Parallax",
    c: "Albedo",
    d: "Scintillation",
    correct: "d",
},
{
    question: "What is the nucleus of a comet made of?",
    a: "helium and water",
    b: "ice, dust, and organic materials",
    c: "radio waves",
    d: "fire",
    correct: "b",
},
{
    question: "The day on which the Sun’s direct rays cross the celestial equator is called:",
    a: "the ecliptic",
    b: "the equinox",
    c: "the aphelion",
    d: "the solstice",
    correct: "b",
},
{
    question: "Which is the name of a radio source that is very far from Earth?",
    a: "quasar",
    b: "taser",
    c: "tracer",
    d: "phaser",
    correct: "a",
},
{
    question: "Which planet's axis is almost parallel to its orbital plane, making it spin nearly on its side?",
    a: "Saturn",
    b: "Jupiter",
    c: "Venus",
    d: "Uranus",
    correct: "d",
},
{
    question: "What is the name of the first space tourist?",
    a: "Greg Olsen",
    b: "Mark Shuttleworth",
    c: "Dennis Tito",
    d: "Richard Garriott",
    correct: "c",
},
{
    question: "What is the acceleration of gravity at Earth's surface?",
    a: "11.2 metres (37 feet) per second per second",
    b: "1.6 metres (5 feet) per second per second",
    c: "7.5 metres (25 feet) per second per second",
    d: "9.8 metres (32 feet) per second per second",
    correct: "d",
},
];

const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberOfQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitequiz = document.getElementById("submite");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQtn = 0;
let answerd = 0;

const loadQuiz = () => {
    countQuestion.innerHTML=`${currentQtn +1}`;
    tottleNumberOfQuestion.innerHTML=quizData.length;
    questionNumber.innerHTML=`${currentQtn + 1}`;
    questionTitle.innerHTML=quizData[currentQtn].question;
    answerLable[0].innerHTML=quizData[currentQtn].a;
    answerLable[1].innerHTML=quizData[currentQtn].b;
    answerLable[2].innerHTML=quizData[currentQtn].c;
    answerLable[3].innerHTML=quizData[currentQtn].d;

    reset();

    if(currentQtn == quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitequiz.style.display="block";
    }
}
const reset = () => {
    allInputs.forEach((allInputs) =>{
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click", () =>{
    let answer =getSelected();
    if(answer){
        if(answer == quizData[currentQtn].correct){
            answerd++;
        }
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
});

submitequiz.addEventListener("click", () => {
    let answer = getSelected();
    if(answer === quizData[currentQtn].correct){
        answerd++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display = "block";
        scoreEl.innerHTML=`Questions answered correctly: ${answerd} / ${quizData.length}`;
    }
})

const getSelected = () => {
    let answer;
    allInputs.forEach((allInputs) => {
        if(allInputs.checked){
            answer = allInputs.value;
        }
    });
    return answer;
}
loadQuiz();