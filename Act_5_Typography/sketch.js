// https://www.youtube.com/watch?v=eZHclqx2eJY Inspiration and tips and techniques used from this video...

let letters = []; // Array for text Letters (text to point letters)...
let colors = []; // Array for Randomized Colors...
let displayText = "BATH SPA UNIVERSITY";
let font;
let BG_Image;

function preload() {
  font = loadFont("font/RobotoMono.ttf");
  BG_Image = loadImage("img/blu.png"); // Preloads Background Image...
}

function setup() {
  createCanvas(1500, 542); // Sets Canvas Size...
  let x = 0;

  // Assigns random colors to each letter...
  for (let i = 0; i < displayText.length; i++) {
    colors.push(color(random(255), random(255), random(255)));

    // Gets points for each letter...
    let letterPoints = font.textToPoints(displayText[i], 140 + x, 300, 110);
    letters.push(letterPoints);

    // Calculate width of each letter for correct offset...
    let bounds = font.textBounds(displayText[i], 140 + x, 300, 110);
    x += bounds.w + 10; // Add some space between letters...
  }
}

function draw() {
  // Draws or Displays Background Image...
  image(BG_Image, 0, 0, width, height);

  // Draws or Displays each letter with its own randomized color...
  for (let i = 0; i < letters.length; i++) {
    fill(colors[i]);
    for (let j = 0; j < letters[i].length; j++) {
      ellipse(letters[i][j].x, letters[i][j].y, 2, 2);
      noStroke(); // Removes strokes of the shape...
    }
  }
}
