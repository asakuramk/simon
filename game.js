const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = "";
let gamePattern = [];
nextSequence()
nextSequence()
nextSequence()

console.log(gamePattern)


function nextSequence() {
  const randomNumber = Math.ceil(Math.random() * 3)
  randomChosenColour = buttonColours[randomNumber];

  // console.log(randomNumber)
  gamePattern.push(randomChosenColour);


  $(`#${randomChosenColour}`).animate({ backgroundColor: 'yellow' }, 500);

}

