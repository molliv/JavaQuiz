var highScores = document.querySelector(".highScores");
var timer = document.querySelector(".timer");
var startBtn = document.querySelector(".start-Btn");
var questions = document.querySelector("#questions");

//array of all quiz questions
var quizQuestions = [
    {
        q: "Commonly used date types DO NOT indcude:",
        choices: ["string", "booleans", "alerts", "numbers"],
        a: "alerts"
    },
    {
        q: "Arrays in JavaScript can be used to store?",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        a: "all of the above"
    },
    {
        q: "A useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        a: "console.log"
    },
    {
        q: "What does DOM stand for?",
        choices: ["Document Object Model", "Document Object Method", "Document Own Model"],
        a: "Document Object Model"
    },
];

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

submitButton.onclick = function() {
    showResults();
}

start-Btn.addEventListener("click", function(){
    startTimer();
});

let score = 0;
let currentQuestion = 0;
let timeLeft = 25;

//function displayHighScores () {

//}

//function startQuiz () {
//    document.createElement("")
//}



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

//startButton.addEventListener("click", showResults);