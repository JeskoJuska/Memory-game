//variables
var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var startGame = false;

var level = 0;


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}


$(document).keydown(function() {
  if (startGame) {} else {
    startGame = true;
    nextSequence();
  }
});

function wrongColor(){
  gamePattern = [];
  level = 0;
  console.log("wrong");
}


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColors[randomNumber]);

  $("h1").text("level " + level++);


  $("#" + buttonColors[randomNumber]).fadeOut(100).fadeIn(100);
  playSound(buttonColors[randomNumber]);
}



$(".btn").click(function() {
  //chosen color
  var userChosenColor = this.id; //$(this).attr("id");

  //press animation
  animatePress(userChosenColor);

  //sound of chosen button
  playSound(userChosenColor);

  //adding pressed button to memory or end of the game
  if (userChosenColor != gamePattern[userClickedPattern.length]) {wrongColor();}
  else {
    userClickedPattern.push(userChosenColor);
  }

  if (userClickedPattern.length === gamePattern.length) setTimeout(function () {
    userClickedPattern = [];
    nextSequence();
  }, 1000);
});
