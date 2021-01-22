// variables to manipulate
var highscores = document.getElementById("highscores");
var timer = document.getElementById("timer");
var homepage = document.getElementById("homepage");
var startQuizBtn = document.getElementById("start-Btn");
var questionsEl = document.getElementById("questions");
//var resultsEl = document.getElementById("results");
var gameoverDiv = document.getElementById("gameover");
var finalscoreEl = document.getElementById("finalscore");
var username = document.getElementById("username");
var submitscoreBtn = document.getElementById("submitscore");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscorePage = document.getElementById("highscorePage");
var highscoreInitials = document.getElementById("highscoreInitials");
var DisplayScore = document.getElementById("scores");
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

// additional global variables
var score = 0;
var timeLeft = 25;
var correct;
var counter;
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;

// function to generate quiz questions
function generatequizQuestions () {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    for (var i = 0; i < quizQuestions.length; i++) {
        console.log(quizQuestions[i].q);
        console.log(quizQuestions[i].choices);
        console.log(quizQuestions[i].a);

        gameoverDiv.style.display = "none";
        if (currentQuestionIndex === finalQuestionIndex) {
            return showScore();
        } 
        questionsEl.innerHTML = "<p>" + currentQuestion.q + "</p>";
        buttonA.innerHTML = currentQuestion.a;
        buttonB.innerHTML = currentQuestion.b;
        buttonC.innerHTML = currentQuestion.c;
        buttonD.innerHTML = currentQuestion.d;
    }

};

// timer function, counting back from 25 seconds
function countDown() { 
    var counter = setInterval(function() {
        counter--;
        if (timeLeft > 1) {
            counter.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            counter.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            counter.textContent = '';
            clearInterval(counter);
        }
    }, 1000);
}

function startQuiz () {
    homepage.style.display="none";
    questionsEl.style.display= "block";
    generatequizQuestions ();
    countDown ();
}


submitscoreBtn.addEventListener("click", function highscore(){
    if(username.value === "") {
        alert("You must enter initials");
        return false;
    } else {
        var savedhighscores = JSON.parse(localStorage.getItem("savedhighscores")) || [];
        var currentUser = username.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscorePage.style.display = "block";
        savedhighscores.push(currentHighscore);
        localStorage.setItem("savedhighscores", JSON.stringify(savedsighscores));
        generatehighscores ();
    }
});

// function to check for answer and proceed to next question
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

//displays if answer is correct.
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generatequizQuestions();

//displays if answer is wrong.    
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generatequizQuestions();
        
    } else{
        showScore();
    }



    if (currentQuestionIndex < quizQuestions.length) {
        currentQuestionIndex++;
    }
    generatequizQuestions(currentQuestionIndex);
}

function showScore () {
    questionsEl.style.display= "none";
    clearInterval(counter);
    username.value = "";
    finalscoreEl.innerHTML = "You got " + score + " out of" + quizQuestions.length + " correct!";
}

function generatehighscores(){
    highscoreInitials.innerHTML = "";
    DisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedsighscores")) || [];
    for (i = 0; i < highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreInitials.appendChild(newNameSpan);
        DisplayScore.appendChild(newScoreSpan);
    }
}

function showhighscore(){
    homepage.style.display = "none"
    gameoverDiv.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscorePage.style.display = "block";
    generatehighscores();
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
        displayhighScores ();
        return score;
    }
});
*/
/*
$(document).on("click", ".highScores", function (event) {
    event.preventDefault ();
    displayHighScores ();
});
*/
