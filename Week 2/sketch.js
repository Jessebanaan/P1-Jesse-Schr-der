// Zon
let cirkelX = 130;
let cirkelY = 130;
let zondiameter = 150;

// Rood stoplicht
let roodX = 1205;
let roodY = 460;
let rooddiameter = 40;

let tint = 0;

let daycolor = ("lightblue");
let nightcolor = ("black")

function setup() {
  canvasy = (870)
  canvasx = (1400)
  createCanvas(canvasx, canvasy)
}

function keyPressed() {
  if (keyCode === 13) {
    console.log("Enter is ingedrukt");
  }
}

function keyReleased() {
  if (keyCode === 13) {
    console.log("Enter is losgelaten");
  }
}


function draw() {
background("lightblue")
  if (millis() > 23500) {
    background("black");
  } else {
    background("lightblue"); 
  }

  // Zon met beweging
  fill(255, 255, 0)
  stroke(255, 215, 140)
  strokeWeight(10)
  circle(cirkelX, cirkelY, zondiameter);
  cirkelX = cirkelX + 1;

  // Zon weer terug laten gaan naar het begin
 { 
  if (cirkelX > 1500) 
    cirkelX = -100
  }

  // bergen
  strokeWeight(1)
  stroke("grey")
  fill(100)
  triangle(30, 775, 258, 250, 500, 775)
  triangle(500, 775, 700, 350, 900, 775)
  triangle(300, 775, 500, 450, 700, 775)

  // weg met lijnen
  strokeWeight(0)
  fill(160)
  rect(0,670,1400,200)

  fill("white")
  rect(-10,740,20,20,20)
  rect(100,740,100,20,20)
  rect(300,740,100,20,20)
  rect(500,740,100,20,20)
  rect(700,740,100,20,20)
  rect(900,740,100,20,20)
  rect(1100,740,100,20,20)
  rect(1300,740,100,20,20)

  // strookje gras
  fill("green")
  rect(0,620,1400,50)

  // boomstammen
  fill("brown")
  rect(110,530,20,100)
  rect(300,565,20,100)
  rect(500,550,20,100)

  // boombladeren
  strokeWeight(10)
  stroke("darkgreen")
  fill("green")
  circle(120,500,100)
  circle(310,535,100)
  circle(510,520,100)

  // stoplicht
  strokeWeight(0)
  fill(130)
  rect(1200,560,10,100,50)
  rect(1180,430,50,150)

  // lichten voor het stoplicht
  fill("#2fff00")
  circle(1205,550,40)
  fill("#824c00")
  circle(1205,505,40)
  fill("#930000")
  circle(roodX, roodY, rooddiameter);

  // wolken
  fill("#ffffff")
  circle(300,85,70)
  circle(330,80,70)
  circle(360,85,70)

  circle(500,155,70)
  circle(530,150,70)
  circle(560,155,70)

  
}

