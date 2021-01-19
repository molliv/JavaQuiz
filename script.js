var highScores = document.querySelector(".highScores");
var timer = document.querySelector(".timer");
var startBtn = document.querySelector(".start-Btn");
var questions = document.querySelector("#questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultsEl = document.getElementById("result");
var questionsEl = document.getElementById("questions");


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

varshowQuiz = function () {

}
/*
function showQuestions (questions, quizContainer) {
    var output = []
    var answers;
    for (var i = 0; i < questions.length; i++) {
        answers = [];
        for(letter in questions [i].answers) {
            answers.push (
                '<label>'
                    +'<input type="radio" name="question'+i+' " value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
    }
    quizContainer.innerHTML = output.join("");
}
*/
/*
function showResults (questions, quizContainer, resultsContainer) {
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

submitButton.onclick = function() {
    showResults();
}

start-Btn.addEventListener("click", function(){
    startTimer();
});

let score = 0;
let currentQuestion = 0;
let timeLeft = 25;


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
}

//start-Btn.addEventListener("click", startTimer);

function submitButton () {
    document.getElementsByClassName("start-button");
    startTimer();
};

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
    displayQuiz ();
});

$(document).on("click", ".highscores", function (event) {
    event.preventDefault ();
    displayHighScores ();
});

//startButton.addEventListener("click", showResults);