// !!!LOWER YOUR VOLUME!!!
// Clicking the Canvas plays the muisc!!!

var song; // Declares variable for Audio or Music...
var fft;
var bg; // Declares variable for the background image...
var Custom_Font; // Declares variable for custom font...

function preload() {
  song = loadSound("aud/engine.mp3"); // Loads Music or Audio used...
  bg = loadImage("img/purp.png"); // Loads background image...
  Custom_Font = loadFont("font/Mono.ttf"); // Loads font...
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Adjusts Canvas size to Window Width & Height...
  fft = new p5.FFT();
  textAlign(CENTER, CENTER); // Centers text...
}

function draw() {
  image(bg, 0, 0, windowWidth, windowHeight); // Displays the background image...
  
  stroke(255);
  noFill();

// https://www.youtube.com/watch?v=uk96O7N1Yo0 used this video's example of wave pattern as Inspiration & Chosen preferences...

// DNA WAVE PATTERN... 
  
  var wave = fft.waveform();
  
  beginShape();
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));
    
    var x = i;
    var y = wave[index] * 150 + height / 2; 
    vertex(x, y);
  }
  endShape();
  
  // Text Properties...
  fill(255); // Sets text color...
  textSize(60); // Sets text size...
  textFont(Custom_Font); // Applies custom font used...
  text("Rynx - Engine", width / 2, 460); // Displays the text...
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}