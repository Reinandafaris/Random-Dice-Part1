// generate random number antara 1-6 for player 1
let randomNum1 =
  Math.floor(Math.random() * 6) + 1;

// mengambil image based on random number
var randomDiceImage1 =
  "dice" + randomNum1 + ".png";

// set image based on random number
const randomImageSource = `images/${randomDiceImage1}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

///////////////////////////////
// generate random number antara 1-6 for player 2
let randomNum2 =
  Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 =
  "dice" + randomNum2 + ".png";

let randomImageSource2 = `images/${randomDiceImage2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

///////////////////////////////
// menentukan winner
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML =
    "Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML =
    "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML =
    "Draw!";
}
