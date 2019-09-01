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


$(document).keydown(function(event) {
  if (startGame) {} else {
    startGame = true;
    console.log(event);
    nextSequence();
  }
});

function startOver(){
  gamePattern = [];
  level = 0;
  startGame = false;
}

function wrongColor(){
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  $("body").addClass("game-over");
  setTimeout(function () {
      $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over, Press Any Key to Restart");

  startOver();
}


function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColors[randomNumber]);

  $("h1").text("level " + ++level);


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
      if (userClickedPattern.length === gamePattern.length) setTimeout(function () {
        nextSequence();
      }, 1000);
  }

});
