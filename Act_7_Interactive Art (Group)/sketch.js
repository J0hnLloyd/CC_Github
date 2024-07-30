//Font used: https://www.dafont.com/moon-get.font
//Sound Effect used: https://pixabay.com/sound-effects/kalimba-g-46244/

var img;
var bg;
var font;
var sound;

// current interactive art sequencing
var currentArt = 0;

// rain array
var rain = [];

// shapes array
var shapes = [];

// preloads the assets used in the interactive art
function preload() {
  bg = loadImage("bg2.jpeg");
  img = loadImage("logo2.png");
  font = loadFont("moon_get-Heavy.ttf");
  sound = loadSound("kalimba.mp3");
}

// initializes the canvas that takes up the whole window's available width and height
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw function is used for the interaction and animation of the art itself
function draw() {
   background(bg);
  //initalizes the for loop for the shapes' drawing sequence
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].fadeout();
  }
  //push and pop is used so that changes are only applicable to the objects within it
  push();
  interactive(currentArt);
  pop();
}

// Every shape inside the canvas will adjust to the window's width and height
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// when the user pressed ENTER it will play a sound and move to another interactive art
function keyPressed() {
  if (keyCode === ENTER) {
    sound.play();
    //displays the interactive art
    interactive(currentArt);
    //cycles from 0 to 1
    currentArt = (currentArt + 1) % 2;
  }
}

//this function goes through the interactive art
function interactive(index) {
  if (index === 0) {
    // centers the image
    push();
    imageMode(CENTER);
    image(img, width / 2, height / 2, 100, 100);
    pop();
  } else if (index === 1) {
    // displays the first text and the raining animation
    scene1();
    displayText();
  }
}

function scene1() {
  // looping through the raindrops within the rain array and executing the functions for the drop
  for (var drop of rain) {
    push();
    drop.fall();
    drop.display();
    pop();
  }
  // for loop to add the raindrop within within the array
  for (var i = 0; i < width / 70; i++) {
    // the drop will be stored in the rain array and have a random x coordinates, -40 y coordinate, 7 ySpeed that dynamically changes with mouseY interaction which basically makes it faster
    rain.push(new Drop(random(width), -40, 7 + mouseY / 50));
  }
}

function displayText() {
  fill(255);
  textSize(width / 40);
  textAlign(CENTER);
  textFont(font);
  text(
    "W E L C O M E  T O  B A T H S P A  U N I V E R S I T Y",
    width / 2,
    height / 2
  );
}

// a mouse clicked function that only executes if the currentArt is equal to 2
function mouseClicked() {
  if (currentArt === 1) {
    sound.play();
    scene2();
  }
}

function scene2() {
  push();
  // size that randomizes between 10 to 200
  var size = random(10, 200);
  // stores a random color
  var clr = [random(255), random(255), random(255)];
  // the shape will be stored in the shapes array that follows the mouse's position a random size and color
  shapes.push(new createShape(mouseX, mouseY, size, clr));
  pop();
}
