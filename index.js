var readlineSync = require("readline-sync")
//intialization of score
var score = 0;
var highScore = [
  {
    name: "raju",
    score: 4,
  },
  {
    name: "rajiv",
    score: 2,
  }
]
var questions = [{
  question: "First Name of Ranjan ",
  answer: "priya"
},
{
  question: "Ranjan's favourite food? ",
  answer: "meals"
},
{ question: "Ranjan hobby ", answer: "edm" }, { question: "In which year Ranjan was Born ", answer: "2000" }, { question: "Does ranjan have ex phone number ?", answer: "yes" }, { question: "Do you believe in him", answer: "yes" }]


function welcome() {
  var userName = readlineSync.question("what is your name ");
  console.log("welcome " + userName + " do you know Ranjan");
}

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("----------")
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScore() {
  console.log("you scored ", score);
  console.log("check out the high score,if you be there ping me and i will update it");
  highScore.map(score => console.log(score.name, ":", score.score))
}

welcome();
game();
showScore();