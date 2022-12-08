// Grab a reference to the "Start" button
var startButton = document.getElementById("start");
var questionsContainer = document.querySelector(".questions");
var startContainer = document.querySelector(".start-game");

var timer = 30;

function startTimer() {
    // assign a start time

    timer = 30;
    console.log(timer)
    var myfunc = setInterval(function () {
        var timerDisplay = document.getElementById("timerDisplay")
        if (timer > 0){
        timer--;
        debugger;
        console.log(timer)
        timerDisplay.textContent = `Time left:${timer}`
    }   else {
        clearInterval(myfunc)
    }
    }, 1000);
}

// var startButton = document.querySelector(".container");

console.log(startButton);
startButton.addEventListener("click", function (e) {
    console.log("click");

    // Start a Timer
    startTimer();
    // Show first question
    showQuestion();
});


function showQuestion() {
    console.log("Show question");

    startContainer.setAttribute("class", "hide");
    questionsContainer.setAttribute("class", "show");
}

function other() {

}

function check() {
    // add or remove time
}