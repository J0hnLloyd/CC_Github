let table;
let Genre_Counts = {}; // Stores each genres...

function preload() {
  table = loadTable('data.csv', 'csv', 'header'); // Loads the CSV file...
}

function setup() {
  createCanvas(1520, windowHeight); // Sets Canvas height to window Height & specified window width...
  background(0); // Sets Canvas background color to black...

  processData(); // Processess the data from the CSV file...

  drawBarChart(); // Draws the bar chart based on the processed data...
}

function processData() {
  let rows = table.getRows(); // Gets all rows from the table...
  for (let row of rows) { // Creates each row in the table...
    let genres = row.getString('You\'re Preferred/Favorite Genres').split(';');

    // Displays over each genre in the list...
    for (let genre of genres) {
      genre = genre.trim(); 
      if (genre) { 
        if (Genre_Counts[genre]) {
          Genre_Counts[genre]++;
        } else {
          Genre_Counts[genre] = 1;
        }
      }
    }
  }
}

// Bar chart properties...

function drawBarChart() {
  let x = 50; // X position for drawing bars...
  let barWidth = 65; // Bar Widths...
  let maxBarHeight = 400; // Bar Maximum Height...
  let genres = Object.keys(Genre_Counts); // Gets an array of genre names...
  let maxCount = Math.max(...Object.values(Genre_Counts)); // Finds the highest count to scale bars...

  textSize(11); // Genre name text size...
  textAlign(CENTER); // Centers Genre names horizontally...

  // Color Palete for each Bars...
  let colors = [
    color(179, 156, 95),   // Light brown
    color(214, 224, 117),  // Pale yellow
    color(224, 163, 117),  // Light orange
    color(100, 150, 250),  // Light blue
    color(255, 100, 150),  // Pink
    color(150, 255, 100),  // Light green
    color(250, 150, 100),  // Light salmon
    color(200, 100, 255),  // Light purple
    color(100, 255, 255),  // Cyan
    color(255, 255, 100),  // Yellow
    color(255, 100, 255),  // Magenta
    color(150, 100, 255),  // Blue-violet
    color(255, 180, 100),  // Coral
    color(100, 255, 180),  // Aquamarine
    color(200, 200, 255),  // Light Lavender
  ];

  // Iterate over each genre and its count...
  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i];
    let count = Genre_Counts[genre];
    let barHeight = map(count, 0, maxCount, 0, maxBarHeight); // Controls or Scales the bar's height based on count...

    fill(colors[i % colors.length]); // Cycle through the colors array
    // Draw the bar
    rect(x, height - barHeight - 50, barWidth, barHeight);
    
    fill(255); // Sets Genre names text color to white...
    text(genre, x + barWidth / 2, height - 30); // Positions genre names below the bars...
    
    // Updates the x position for the next bar....
    x += barWidth + 20;
  }
  
  fill(255); // Sets text color...
  textSize(30); // Sets text size...
  text("Preffered Genres I Favorite Genres.", width / 2, 65); // Displays the text...
}