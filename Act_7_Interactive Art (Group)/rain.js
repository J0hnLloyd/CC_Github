//Credits to: https://www.youtube.com/watch?v=YQysSfaLDyo
// https://www.youtube.com/watch?v=KkyIDI6rQJI

class Drop {
  //constructs the properties for the raindrop
  constructor(x, y, ySpeed) {
    this.x = x; // x coordinates
    this.y = y; // y coordinates
    this.ySpeed = ySpeed; // ySpeed coordinates
  }

  fall() { // falling animation
    // calculates the distance of x and y coordinates of the raindrop and the mouse
    var distance = dist(mouseX, mouseY, this.x, this.y);
    // if the distance is less than 100 make the stroke white else change to a different color
    if (distance < 80) {
      // this will have the effect of rain moving away from the cursor
    } else {
      // updates the y coordinates by adding ySpeed which causes the raindrop to move down
      this.y += this.ySpeed;
    }
  }
  display() {
    // displaying the raindrop
    stroke(255);
    //creates the raindrop that extends by 30
    line(this.x, this.y, this.x, this.y + 30);
    if (this.y > height) {
      //if the raindrop has exceed the height it will basically removes the raindrop from the rain array using shift() which lessens the lag
      rain.shift();
    }
  }
}
