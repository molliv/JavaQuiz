// variables to manipulate
var highScores = document.getElementById("highScores");
var timer = document.getElementById("timer");
var startQuizDiv = document.getElementById("homepage");
var startQuizBtn = document.getElementById("start-Btn");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var gameoverDiv = document.getElementById("gameover");
var finalScoreEl = document.getElementById("finalScore");
var highscoreInputName = document.getElementById("userName");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreContainer = document.getElementById("highScoreContainer");
var highscoreDiv = document.getElementById("highScorePage");
var highscoreDisplayName = document.getElementById("highscoreInitials");
var highscoreDisplayScore = document.getElementById("highscoreScores");
//var quizBody = document.getElementById("quiz");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//array of all quiz questions
var quizQuestions = [
    {
        q: "Commonly used date types DO NOT indcude:",
        choices: ["a: string", "b: booleans", "c: alerts", "d: numbers"],
        a: "c"
    },
    {
        q: "Arrays in JavaScript can be used to store?",
        choices: ["a: numbers and strings", "b: other arrays", "c: booleans", "d: all of the above"],
        a: "d"
    },
    {
        q: "A useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a: JavaScript", "b: terminal/bash", "c: for loops", "d: console.log"],
        a: "d"
    },
    {
        q: "What does DOM stand for?",
        choices: ["a: Document Object Model", "b: Document Object Method", "c: Document Own Model"],
        a: "a"
    },
];

var score = 0;
var currentQuestion = 0;
var timeLeft = 25;
var correct;


function showQuestions () {
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function startQuiz () {
    startQuizDiv.style.display="none";
    generatequizQuestions ();
}
// timer function, counting back from 25 seconds
function countDown() {
    var counter = 25;
    var timeInterval = setInterval(function() {
        counter--;
        if (timeLeft > 1) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
    quizBody.style.display= "block";
}

function showScore () {
    quizBody.style.display= "none";
    clearInterval(timeInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of" + quizQuestions.length + " correct!";
}

submitScore.addEventListener("click", function highscore(){
    if(highscoreInputName.value === "") {
        alert("You must enter initials");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var crreuntHighscore = {
            name : currentUser,
            score : score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores ();
    }
});

function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i = 0; i < highScores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highScores[i].name;
        newScoreSpan.textContent = highScores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

function showHighscore(){
    startQuizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    generatehighScores();
}

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    } else{
        showScore();
    }
}

//submitScoreBtn.addEventListener("click", addScore);

startQuizBtn.addEventListener("click", startQuiz);


/*
function showResults () {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var userAnswer = "";
    var numCorrect = 0;

    for(var i = 0; i < questions.length; i++) {
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer === questions[i].correctAnswer) {
            numCorrect++;
        }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
*/

/*
start-Btn.addEventListener("click", function(){
    startTimer();
});
*/

/*
function submitButton () {
    document.getElementsByClassName("start-button");
    startTimer();
};
*/

/*
$(document).on("click", function (event) {
    event.preventDefault();
    if (event.target.textContent !== quizQuestions[currentQuestion].answer) {
        timeLeft -=3;
    } else {
        score += 10;
    }
    currentQuestion ++
    if (currentQuestion === quizQuestions.length) {
        displayHighScores ();
        return score;
    }
});
*/
/*
$(document).on("click", ".highscores", function (event) {
    event.preventDefault ();
    displayHighScores ();
});
*/
