// Grab a reference to the "Start" button
var startButton = document.getElementById("start");
var questionsContainer = document.querySelector(".questions");
var startContainer = document.querySelector(".start-game");

var timer;

function startTimer() {
    // assign a start time
    timer = 30;
    console.log(timer)
    var myfunc = setInterval(function() {
        timer--;
        console.log(timer)
    },1000);
}

// var startButton = document.querySelector(".container");

console.log(startButton);
startButton.addEventListener("click", function(event) {
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