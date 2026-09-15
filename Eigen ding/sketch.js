let points = 0;
let clicksPerPress = 1;
let levelText = "1";

function setup() {
  canvasy = (800)
  canvasx = (1400)
  createCanvas(canvasx, canvasy)
}

function keyPressed() {
    if (keyCode === 32) {
        points = points + clicksPerPress;
        console.log("Points: " + points)
	}
}

function keyReleased() {
  if (keyCode === 32) {
  }
}

function draw() {
  // Achtergrond van het spel
  background("#02d1ff")
  strokeWeight(0)
  fill("#0097b9")
  rect(0,0,1400,100)
  fill("white")
  strokeWeight(3)
  text("Clicker spel", 600, 60)
  fill("#0097b9")
  circle(700,400,150)


textSize(32)
strokeWeight(3)
stroke("black")
fill("white")
  text(points, 690, 410)
  text("Level " + levelText, 660, 300)
  text("Points per click: " + clicksPerPress, 600, 550)

  // Level systeem
  if (points >= 10) {
    levelText = 2;
    clicksPerPress = 2;
  } 
  if (points >= 100) {
    levelText = 3;
    clicksPerPress = 3;
  }
  if (points >= 300) {
    levelText = 4;
    clicksPerPress = 4;
  }
}