//variables
var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userClickedPattern = [];

var startGame = false;


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(color){
  $("#"+color).addClass("pressed");

  setTimeout(function () {
    $("#"+color).removeClass("pressed");
  }, 100);
}


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColors[randomNumber]);

  $("#" + buttonColors[randomNumber]).fadeOut(100).fadeIn(100);

  playSound(buttonColors[randomNumber]);

}



$(".btn").click(function() {
  var userChosenColor = this.id; //$(this).attr("id");

  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log(userClickedPattern);
});
