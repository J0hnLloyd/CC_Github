// Credits to: https://www.youtube.com/watch?v=XgHo-aoa5ts...

let trails = []; // Array for Trails...

function setup() {
  createCanvas(400, 400); // Sets Canvas Size...
  noStroke(); // Remove stroke (Shape Strokes) for seamless trail effect...
}

function draw() {
  background(38, 41, 56); // Changes Canvas background color to solid peach dark blue...
  trails.push(createVector(mouseX, mouseY));
  
  if (trails.length > 150) { 
    trails.shift(); // Ensures trails doesn't go too long depending on the value and also changes its final size...
  }

  for (let i = 0; i < trails.length; i++) {
    let trailposition = trails[i]; // Variable for trails' positions
    let size = i / 2;
    
    // Creates a gradient effect from blue to black...
    let blue = color(0, 0, 255); // Blue color...
    let black = color(0, 0, 0); // Black color...
    let interColor = lerpColor(blue, black, i / trails.length); // Helps in finding a color that lies somewhere between two specified colors which in this case is "Blue" & "Black"
    fill(interColor); // Fills shapes Colors...

    if (mouseIsPressed && mouseButton === LEFT) {
      // Switches to Squares when left mouse button is pressed...
      rectMode(CENTER);
      rect(trailposition.x, trailposition.y, size, size);
    } else {
      // Draws ellipses when left mouse button is not pressed... (Default)
      ellipse(trailposition.x, trailposition.y, size);
    }
  }
}

// When S or s is pressed it saves or downloads a png of the current canvas...
function keyPressed() {
  if (key === 's' || key === 'S') { // If 's' or 'S' key is pressed...
    save('myCanvas.png');
  }
}