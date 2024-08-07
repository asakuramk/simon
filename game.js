const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
nextSequence()


console.log(gamePattern)


function nextSequence() {
  const randomNumber = Math.ceil(Math.random() * 3)
  randomChosenColour = buttonColours[randomNumber];

  // console.log(randomNumber)
  gamePattern.push(randomChosenColour);


  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  var audio = new AudioContext("sounds/" + randomChosenColour + ".mp3");
  audio.resume();
  audio.play();
}
