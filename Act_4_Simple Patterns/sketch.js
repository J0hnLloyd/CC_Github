function setup() {
  createCanvas(400, 400); // Sets Canvas size...
  stroke(0); // Adds stroke to each squares...
  strokeWeight(1.5); // Adjusts shapes (Square) strokes...

  let squares = 50.2; // Shape (Square) Size...
  
  // Colors to be randomly picked...
  let colors = [
    '#FF5733', 
    '#33FF57', 
    '#3357FF', 
    '#FFD733', 
    '#FF33A8', 
    '#33FFF0', 
    '#9333FF', 
    '#FF7733',
    '#A833FF',
  ];

  // Iterate over the canvas...
  for (let x = 0; x < width; x += squares) {
    for (let y = 0; y < height; y += squares) {
      // Randomly decides should square  be colored or white...
      if (random() > 0.1) { // 10% chance for white or 90% changes for coulored squares...
        fill(random(colors)); // Randomize colors from the list...
        // Draws a colored square at a random offset...
        rect(x + random([-1, 0, 1]) * squares, y, squares, squares);
      } else {
        fill(255); // White color...
        rect(x, y, squares, squares);
      }
    }
  }
}
