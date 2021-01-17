var highScores = document.querySelector(".highScores")
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");


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