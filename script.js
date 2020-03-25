var questionField = document.getElementById("question");
var startButton = document.getElementById("startButton");
var aButton = document.getElementById("aButton");
var bButton = document.getElementById("bButton");
var cButton = document.getElementById("cButton");
var dButton = document.getElementById("dButton");
var scoreBoard = document.getElementById("scoreBoard");
var timeCard = document.getElementById("timeCard");
var highscoreList = document.getElementById("highscoreList");
var reset = document.getElementById("resetButton");
var answerOne = document.getElementById("answerOne")
var answerTwo = document.getElementById("answerTwo")
var answerThree = document.getElementById("answerThree")
var answerFour = document.getElementById("answerFour")

var scoreBoard = 0
var questionCounter = 0

$("#scoreBoard").textContent = "0"

var questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D: <js>"],
        correctAnswer: "C: <script>",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D; <js>"],
        correctAnswer: "<script>",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D; <js>"],
        correctAnswer: "<script>",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D; <js>"],
        correctAnswer: "<script>",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D; <js>"],
        correctAnswer: "<script>",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code??",
        choices: ["A: <javascript>", "B: <scripted>", "C: <script>", "D; <js>"],
        correctAnswer: "<script>",
    }];


function renderQuestion() {
    document.getElementById("question").textContent = questions[questionCounter].question;
    document.getElementById("answerOne").textContent = questions[questionCounter].choices[0];
    document.getElementById("answerTwo").textContent = questions[questionCounter].choices[1];
    document.getElementById("answerThree").textContent = questions[questionCounter].choices[2];
    document.getElementById("answerFour").textContent = questions[questionCounter].choices[3];
}


function startTimer() {

    var timeleft = 70;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timeCard").innerHTML = "Finished";
        } else {
            document.getElementById("timeCard").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}



$("#startButton").on("click", function startQuiz(){

    renderQuestion();
    startTimer();
});

