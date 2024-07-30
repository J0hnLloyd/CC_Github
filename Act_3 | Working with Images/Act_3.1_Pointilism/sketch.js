function preload() {
  img = loadImage('pattern.jpeg'); // Loads Image file...
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51, 34);
  
  // Defines the Shape for the clipping mask...
  rect(100, 100, 200, 200); // Position... | "Width & height"

  let ctx = drawingContext;
  ctx.save(); // Saves the current context...
  ctx.clip(); // Apply the clipping mask...

  // Image...
  image(img, 0, 0, width, height);
  
  ctx.restore(); // Restore the context to remove the clipping...
}
