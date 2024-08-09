const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
let userClickedPattern = [];


// nextSequence();

$('.btn').on("click", function handler() {
  let userChosenColour = "";
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // alert(userChosenColour)
  // console.log(userClickedPattern);
});


function nextSequence() {
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