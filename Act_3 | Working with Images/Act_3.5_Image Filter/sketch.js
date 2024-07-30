var img; // Declares Variables...

function preload() {
  img = loadImage("blacksquare.jpg");
}

function setup() {
  createCanvas(400, 400); // Canvas Size...
  // Set the initial background color of the canvas to black
}

function draw() {
  image(img, 0, 0);
  // Map the mouseX position to a range of 0 to 5...
  // As the mouse moves horizontally, the blur effect's intensity changes...
  // map() function remaps the value of mouseX from 0-width to 0-5...
  var v = map(mouseX, 0, width, 0, 5);

  filter(BLUR, v);
}
