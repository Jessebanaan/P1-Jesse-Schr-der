
function setup() {
  createCanvas(1400, 870);
}

function draw() {
  background("lightblue");

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

  // zon
  fill(255, 255, 0)
  stroke(255, 215, 140)
  circle(130,130,150)

  // stoplicht
  strokeWeight(0)
  fill(130)
  rect(1200,560,10,100,50)
  rect(1180,450,50,130)

  // lichten voor het stoplicht
  fill("lightgreen")
  circle(1205,550,40)
  fill("orange")
  circle(1205,510,40)
}
