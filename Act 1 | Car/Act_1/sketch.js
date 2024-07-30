function setup () {
  createCanvas( 400, 400);
}

function draw () {
  background (255, 255, 255);
  
  fill (189, 189, 189);
  //rect (x ,y, width, height) 
  rect(150, 150, 150, 40);
  fill (130, 50, 180);
  rect(150, 180, 150, 10);
  
  fill (20, 250, 250);
  //ellipse (x, y width, height)
  fill (0, 0, 0)
  ellipse(177, 190, 40, 40);
  fill (77, 79, 82);
  ellipse(177, 190, 30, 30);
  
  fill (0, 0, 0);
  ellipse(273, 190, 40, 40);
  fill (77, 79, 82);
  ellipse(273, 190, 30, 30);
  // triangle (x1, y1, x2, y2, x3, y3)
  line ( 170, 150, 178, 110);
  line ( 179, 110, 265, 110);
  line (265, 110, 279, 150);

  // line Line ( x1, y1, x2, y2)
  strokeWeight( 1.5);
}
