var highScores = document.querySelector(".highScores")
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");

//array of all quiz questions
var quizQuestions = [
    {
        que: "Commonly used date types DO NOT indcude:",
        choices: ["string", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        que: "Arrays in JavaScript can be used to store?",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        que: "A useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
    {
        que: "What does DOM stand for?",
        choices: ["Document Object Model", "Document Object Method", "Do Own Model"],
        answer: "Document Object Model"
    },

];


// timer function, counting back from 25 seconds
function setTime() {
    var counter = 25;
    var timeInterval = setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert("Sorry, you ran out of time!");
            clearInterval(counter);
        }
    }, 1000);
}

function startButton () {
    document.getElementsByClassName("start-button");
    startTimer();
};