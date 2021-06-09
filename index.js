
var readlineSync = require("readline-sync");
var score = 0;

// data of high scores
var highscores = [
  {
    name: "roopa",
    score: 6
  },
  {
    name: "vishaka",
    score: 5
  },
  {
    name: "chethan",
    score: 4
  }
]


function welcome() {
  var userName = readlineSync.question("What is your Name ?  ")
  console.log("Welcome " + userName + " to DO YOU KNOW RAJESH ")
  console.log("ALL THE BEST!!!")
  console.log("---------------")
}

function play(question, answer){
  var userAns = readlineSync.question(question)
  console.log("you entered ",userAns )
  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log("You are right")
    score = score + 1
  } else {
    console.log("You are Wrong")
    console.log("Correct answer is " + answer)
    score = score - 1
  }
  console.log("current score: ", score)
  console.log("------------")
}


var questions = [
  { 
  question : "what is my full name - ", 
  answer: "Rajesh Krishna" },
  {
    question : "where do I live - ", 
    answer: "Mangalore" },

  {
    question : "who is my fav superhero - ",
    answer: "Thor"
  },
  
  {
    question: "what is my age - ",
    answer: "23"
  },
  
  {
    question: "what is my heigth - ",
    answer:"5.7"
  },
  
  {
    question: "what is my fav dish - ",
    answer:"Biryani"
  } 
  ]

function game() {
  for (var i=0; i< questions.length; i++){
    var currentQue = questions[i]
    play(currentQue.question, currentQue.answer)
}
}

function showScores() {
  console.log("YAY!!!! You scored: ", score)
  console.log("These are the high scores: ")
  highscores.map(score => console.log(score.name, " : ", score.score))

}

welcome();
game();
showScores();