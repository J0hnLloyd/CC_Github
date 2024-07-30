// inspired by Yayoi Kusama: https://www.youtube.com/watch?v=0xtYKu_4IWM

class createShape {
  //constructs the properties for the shapes
  constructor(x, y, size, clr) {
    this.x = x; // x coordinates
    this.y = y; // y coordinates
    this.size = size; // size
    this.clr = clr; // color
    this.fade = 255; // the inital fade value
    // randomly choose what shapes are to be displayed which is stored so that the shapes would not flicker
    this.choose = random(0,1) > 0.5;
    this.choose2 = random(1,2) > 1.5;
  }

  display() { //display the shape
    noStroke();
    fill(this.clr[0], this.clr[1], this.clr[2], this.fade); // sets the fill color which we get from the color randomization within the clr array
    if (this.choose) {
    ellipse(this.x, this.y, this.size);
    } else if (this.choose2) {
      arc(this.x, this.y,this.x, this.y,this.x, this.y);
      }
    else {
      rectMode(CENTER); // rectMode is used so that it would display center to the cursor
      rect(this.x, this.y, this.size); 
    }
  }

  fadeout() { // Fading out of the shape
    this.fade -= 3; // fading time
    if (this.fade <= 0) { // if the fade value is less than or equal to 0
      //removes one current shape from the shapes array 
      shapes.splice(shapes.indexOf(this),1);
    }
  }
}
