// variables to manipulate
var quizDiv = document.getElementById("homepage");
var startQuizBtn = document.getElementById("startbtn");
var quizBody = document.getElementById("quiz");
var quizTimer = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("result");
var gameoverDiv = document.getElementById("gameover");
var finalscoreEl = document.getElementById("finalscore");
var username = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitScore");
var hsContainer = document.getElementById("highscoreContainer");
var hsDiv = document.getElementById("highscorePage");
var hsName = document.getElementById("highscore-initials");
var hsScore = document.getElementById("highscore-score");
var plaAgain = document.getElementById("playAgain");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Quiz question object
var quizQuestions = [
    {
    question: "Commonly used date types DO NOT indcude:",
    choiceA: "string",
    choiceB: "booleans",
    choiceC: "numbers",
    choiceD: "alerts",
    rightAnswer: "d"},
    {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Document Object Method",
    choiceC: "Docoument Own Method",
    choiceD: "Deployment Object Model",
    rightAnswer: "a"},
    {
    question: "Arrays in JavaScript can be used to store?",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    rightAnswer: "d"},
    {
    question : "A useful tool used during development and debugging for printing content to the debugger is:",
    choiceA : "JavaScript",
    choiceB : "terminal/bash",
    choiceC : "forloops",
    choiceD : "console.log",
    rightAnswer : "d"},   
];

// additional global variables
var currentQuestionIndex = 0;
var finalQuestionIndex = quizQuestions.length;
var counter = 25;
var timerInterval;
var score = 0;
var correct;

// function to generate questions and go from question to question
function generateQuizQuestions(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return displayScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// function to start quiz 
function startQuiz(){
    gameoverDiv.style.display = "none";
    quizDiv.style.display = "none";
    generateQuizQuestions();

    //starts timer
    timerInterval = setInterval(function() {
        counter--;
        quizTimer.textContent = "Time left: " + counter;
    
        if(counter === 0) {
          clearInterval(timerInterval);
          displayScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}

// function to display score
function displayScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    username.value = "";
    finalscoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// saves highscores
submitScoreBtn.addEventListener("click", function highscore(){    
    
    if (username.value === ""){
        alert("You must put in intitials");
        return false;
    }else{
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var currentUser = username.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
    
        gameoverDiv.style.display = "none";
        hsContainer.style.display = "flex";
        hsDiv.style.display = "block";
        savedScores.push(currentHighscore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateHighscores();
    }
    
});

// function clears list of highscores and generates a new highscore list from local storage
function generateHighscores(){
    hsName.innerHTML = "";
    hsScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i = 0; i < highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        hsName.appendChild(newNameSpan);
        hsScore.appendChild(newScoreSpan);
    }
}

// function displays highscore page 
function showHighscore(){
    quizDiv.style.display = "none"
    gameoverDiv.style.display = "none";
    hsContainer.style.display = "flex";
    hsDiv.style.display = "block";
    generateHighscores();
}

// function checks the response to each answer 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].rightAnswer;
    //displays if answer is correct
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That's CORRECT!");
        currentQuestionIndex++;
        generateQuizQuestions();
        //displays if answer is incorrect

    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That's INCORRECT.")
        //decreased by 3 seconds if incorrect
        if (counter <= 3) {
            counter = 0;
        }
        else {
            counter -= 3;
        }
        currentQuestionIndex++;
        generateQuizQuestions();

    }else{
        displayScore();
    }
}

// function replays the quiz and sets everything back to 0
function replay () {
    gameoverDiv.style.display = "none";
    hsContainer.style.display = "none";
    quizDiv.style.display = "flex";
    currentQuestionIndex = 0
    counter = 25;
    score = 0;
}

// This button starts the quiz!
startQuizBtn.addEventListener("click",startQuiz);