//Used Old clip function for less code lines...

function setup() {
  createCanvas(400,400); //Canvas Size
  background(255);
  strokeWeight(2);
  
  // Rectangle / Square...
  fill(96, 156, 106); 
  rect(80,65,250,250);
  canvas.getContext("2d").clip(); //Clip Function
  fill(255);
  
  // Ellipse / Circle...
  fill(0, 0, 0);
  ellipse(200,200,250,250)
  canvas.getContext("2d").clip(); //Clip Function...
  fill(255)
  
  // Text...
  textSize(70)
  text("Hello",130,175);
  text("World",115,250);
}