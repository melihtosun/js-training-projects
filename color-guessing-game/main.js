// Color Container DOM
const colorContainer = document.querySelector('#colorcontainer');

// Creates a random color
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);
var rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";

// Sets color to the screen
colorContainer.style.backgroundColor = rgbColor;

// Function to check if choice is right or wrong
var colorBoxes = document.getElementsByClassName("color-box");
for (var i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === colorContainer.style.backgroundColor) {
          alert("Correct! You guessed the color!");
          location.reload();
      } else {
          alert("Wrong! Try again.");
      }
  });
}

// Sets the correct color to a random choice
document.getElementById("color" + (Math.floor(Math.random() * 4) + 1)).style.backgroundColor = colorContainer.style.backgroundColor;

// Sets a random color to other choices
for (let i = 0; i < colorBoxes.length; i++) {
  if (colorBoxes[i].style.backgroundColor == colorContainer.style.backgroundColor) {
    continue
  } else {
    var red = Math.floor(Math.random() * 256);    // Random value for red (0-255)
    var green = Math.floor(Math.random() * 256);  // Random value for green (0-255)
    var blue = Math.floor(Math.random() * 256);   // Random value for blue (0-255)
    var rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    colorBoxes[i].style.backgroundColor = rgbColor
  }
}

// Sets every background color code to the every choices inner HTML
for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].innerHTML = colorBoxes[i].style.backgroundColor
}
