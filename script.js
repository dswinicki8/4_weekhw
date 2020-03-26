
var questionField = document.getElementById("question");
var startButton = document.getElementById("startButton");
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


var questions = [
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        correctAnswer: "<script>",
    },
    {
        question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        choices: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"],
        correctAnswer: "alert(“GeeksforGeeks”);",
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”??",
        choices: ["<script src=”geek.js”>", "<script href=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"],
        correctAnswer: "<script src=”geek.js”>",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        correctAnswer: "program",
    },
    {
        question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
        choices: ["function = Geekfunc()", "function Geekfunc()", "function := Geekfunc()", "function : Geekfunc()"],
        correctAnswer: "function Geekfunc()",
    }];


function renderQuestion() {
    document.getElementById("question").textContent = questions[questionCounter].question;
    document.getElementById("answerOne").textContent = questions[questionCounter].choices[0];
    document.getElementById("answerTwo").textContent = questions[questionCounter].choices[1];
    document.getElementById("answerThree").textContent = questions[questionCounter].choices[2];
    document.getElementById("answerFour").textContent = questions[questionCounter].choices[3];
}

function evaluateQuestion() {
    answerOne.addEventListener('click', function () {
        if (questionCounter == 2 ) {
            scoreBoard ++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        } else {
            scoreBoard --;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        }
    })
    answerTwo.addEventListener('click', function () {
        if (questionCounter == 4 ) {
            scoreBoard ++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        } else {
            scoreBoard --;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        }
    })
    answerThree.addEventListener('click', function () {
        if (questionCounter == 0 , 3 ) {
            scoreBoard ++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        } else {
            scoreBoard --;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        }
    })
    answerFour.addEventListener('click', function () {
        if (questionCounter == 1 ) {
            scoreBoard ++;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        } else {
            scoreBoard --;
            document.getElementById("scoreBoard").textContent = scoreBoard.toString();
            questionCounter++;
            renderQuestion();
        }
    })

        
}




function startGame() {

    var timeleft = 20;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timeCard").innerHTML = "Finished";
            prompt("Your score was " + scoreBoard + ".")
        } else {
            document.getElementById("timeCard").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);


}


$("#startButton").on("click", function startQuiz() {

    renderQuestion();
    startGame();
    evaluateQuestion();
})

