const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
var isStarted = false;

$(document).on("keyup", function () {
  if (!isStarted) {
    isStarted = true;
    $("h1").text("Level 0")
    nextSequence();
  }


})


$('.btn').on("click", function handler() {
  let userChosenColour = "";
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

});


function nextSequence() {
  level += 1;
  $("h1").text("level " + level)
  const randomNumber = Math.ceil(Math.random() * 3)
  randomChosenColour = buttonColours[randomNumber];

  // console.log(randomNumber)
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);

}