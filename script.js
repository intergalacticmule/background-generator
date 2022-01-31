// Declare necessary variables
var css = document.querySelector("h3");
var colorSelector1 = document.getElementsByClassName("color1")[0];
var colorSelector2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient");
var button = document.getElementsByTagName('button')[0];
var color1;
var color2;
//Generates random number 1-255
function generateRandomNumber() {
	return Math.floor(Math.random() * 256);
}
//Generates hex color from 3 random 1-255 numbers
function generateHexColor() {
	var hexColor = "#"
	for (i = 0; i < 3; i++) {
		var num = generateRandomNumber().toString(16)
		if (num.length < 2) {
			num = "0" + num
		}
		hexColor += num;
	}
	return hexColor;
}
//Generates two random hex colors for the background during initial page load
function generateTwoColors() {
	color1 = generateHexColor();
	color2 = generateHexColor();
}

generateTwoColors();
//Sets background gradients based on color variable values
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	css.textContent = body.style.background + ";";

	button.style.backgroundImage = "linear-gradient(to right, " + color1 + " 0%" + ", " + color2 + " 51%" + ")";

	colorSelector1.value = color1;
	colorSelector2.value = color2;
}

setGradient();
//Recaptures color values in case of color picker usage
function changeColors() {
	color1 = colorSelector1.value;
	color2 = colorSelector2.value;
	setGradient();
}
//Randomizes background colors
function randomizeColors() {
	generateTwoColors();
	setGradient();
}
//Changes color1 in case color picker #1 is used
colorSelector1.addEventListener("input", changeColors);
//Changes color2 in case color picker #2 is used
colorSelector2.addEventListener("input", changeColors);
//Changes colors in case "randomize" button is used
button.addEventListener("click", randomizeColors);