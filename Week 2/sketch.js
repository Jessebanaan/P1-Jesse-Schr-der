// Auto 1
let autoX = 100;
let autoY = 690;
let autoB = 170;
let autoW = 120;
let wielX3 = 130;
let wielY3 = 800;
let wielDiameter2 = 70;
let wielX4 = 240;
let wielY4 = 800;
let wielDiameter3 = 70;

let autoSnelheid = 3;

// Auto 2
let autoX2 = 100;
let autoY2 = 570;
let autoB2 = 170;
let autoW2 = 120;
let wielX = 130;
let wielY = 680;
let wielDiameter = 70;
let wielX2 = 240;
let wielY2 = 680;

let autoSnelheid2 = 4;

// Zon
let cirkelX = 130;
let cirkelY = 130;
let zondiameter = 150;

// Rood stoplicht
let roodX = 1205;
let roodY = 460;
let rooddiameter = 40;
let stoplichtRood;
// Groen stoplicht
let groenX = 1205;
let groenY = 550;
let groendiameter = 40;
let stoplichtGroen;
// Oranje stoplicht
let oranjeX = 1205;
let oranjeY = 505;
let oranjediameter = 40;
let stoplichtOranje;

let flitsCirkelX = 1265; 
let flitsCirkelY = 365;
let flitsCirkelDiameter = 20;
let flitserWit;

// Wolk 1
let wolkX1 = 300;
let wolkY1 = 85;
let wolkDiameter1 = 50;

let wolkX2 = 330;
let wolkY2 = 80;
let wolkDiameter2 = 50;

let wolkX3 = 360;
let wolkY3 = 85;
let wolkDiameter3 = 50;

// Wolk 2
let wolkX4 = 500;
let wolkY4 = 155;
let wolkDiameter4 = 70;

let wolkX5 = 530;
let wolkY5 = 150;
let wolkDiameter5 = 70;

let wolkX6 = 560;
let wolkY6 = 155;
let wolkDiameter6 = 70;

// Wolk 3
let wolkX7 = 300;
let wolkY7 = 305;
let wolkDiameter7 = 110;

let wolkX8 = 330;
let wolkY8 = 300;
let wolkDiameter8 = 110;

let wolkX9 = 360;
let wolkY9 = 305;
let wolkDiameter9 = 110;

// Wolk 4
let wolkX10 = 130;
let wolkY10 = 455;
let wolkDiameter10 = 80;

let wolkX11 = 160;
let wolkY11 = 450;
let wolkDiameter11 = 80;

let wolkX12 = 190;
let wolkY12 = 455;
let wolkDiameter12 = 80;

let stoplichtStaatOpRood = false;

let flitsTimer = 0;

function keyPressed() {
  if (keyCode === 13) {
    console.log("Enter is ingedrukt");
    stoplichtGroen = color("#268500");
    stoplichtOranje = color("#ffc400");

    setTimeout(() => {
      stoplichtRood = color("#ff0000");
      stoplichtOranje = color("#b38900");
      stoplichtStaatOpRood = true;
    }, 1500);
  }
}

function keyReleased() {
  if (keyCode === 13) {
    stoplichtRood = color("#910000");
    stoplichtOranje = color("#b38900");
    stoplichtGroen = color("#48ff00");
    stoplichtStaatOpRood = false;
    console.log("Enter is losgelaten");
  }
}

function setup() {
  canvasy = (870)
  canvasx = (1400)
  createCanvas(canvasx, canvasy)
  stoplichtRood = color("#930101"); 
  stoplichtGroen = color("#48ff00"); 
  stoplichtOranje = color("#b38900"); 
}

function draw() {
background("lightblue")

  // Auto's stoppen voor het stoplicht
  // Auto 1 (langzame auto)
  if (stoplichtStaatOpRood == true && autoX >= 900 && autoX <= 1029) {
    autoSnelheid = 1.5;
  } else {
    autoSnelheid = 3;
  }
  if (stoplichtStaatOpRood == true && autoX >= 1030 && autoX <= 1050) {
    autoSnelheid = 0;
  }

  //Auto 2 (snellere auto)
  if (stoplichtStaatOpRood == true && autoX2 >= 900 && autoX2 <= 1029) {
    autoSnelheid2 = 2;
  } else {
    autoSnelheid2 = 4;
  }

  if (stoplichtStaatOpRood == true && autoX2 >= 1030 && autoX2 <= 1050) {
    autoSnelheid2 = 0;
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


  // 1 wolk die achter de bergen langs gaat
  strokeWeight(0)
  fill("white")
  circle(wolkX10, wolkY10, wolkDiameter10);
  wolkX10 = wolkX10 + 0.4;

   circle(wolkX11, wolkY11, wolkDiameter11);
  wolkX11 = wolkX11 + 0.4;

   circle(wolkX12, wolkY12, wolkDiameter12);
  wolkX12 = wolkX12 + 0.4;

  // bergen
  strokeWeight(10)
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
  rect(1220,670,10,200)
  rect(1205,670,10,200)

  // 2 strookjes gras
  fill("green")
  rect(0,620,1400,50)
  rect(0,850,1500,30)

  // Gebouw
  strokeWeight(3)
  stroke("black")
  fill(100)
  circle(1030,480,60)
  rect(1000,480,60,150)
  fill(255)
  circle(1030,510,45)
  line(1030,510,1050,510)
  line(1030,490,1030,510)
  
  

  // boomstammen
  strokeWeight(0)
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
  strokeWeight(1)
  fill(130)
  rect(1200,560,10,100,50)
  rect(1180,430,50,150)
  

  // lichten voor het stoplicht
  fill(stoplichtRood);
  ellipse(roodX, roodY, rooddiameter);
  fill(stoplichtGroen);
  ellipse(groenX, groenY, groendiameter);
  fill(stoplichtOranje);
  ellipse(oranjeX, oranjeY, oranjediameter);

  // Flitser
  fill(130);
  rect(1300, 360, 10, 300, 50);
  rect(1265, 340, 75, 50, 20); 

  // Flitser
  fill(130);
  rect(1300, 360, 10, 300, 50); // Paal van de flitser

  if (flitsTimer > 0) {
    fill("white"); 
    flitsTimer = flitsTimer - 1;
  } else {
    fill(110); 

    if (random(100) < 0.5) {
      flitsTimer = 10;  
    }
  }
  circle(flitsCirkelX, flitsCirkelY, flitsCirkelDiameter);

  fill(130);
  rect(1265, 340, 75, 50, 20); 


// Wolken
  fill("#ffffff")
  strokeWeight(0)
  circle(wolkX1, wolkY1, wolkDiameter1);
  wolkX1 = wolkX1 + 0.3;

  circle(wolkX2, wolkY2, wolkDiameter2);
  wolkX2 = wolkX2 + 0.3;

  circle(wolkX3, wolkY3, wolkDiameter3);
  wolkX3 = wolkX3 + 0.3;

  circle(wolkX4, wolkY4, wolkDiameter4);
  wolkX4 = wolkX4 + 0.2;
 
  circle(wolkX5, wolkY5, wolkDiameter5);
  wolkX5 = wolkX5 + 0.2;

  circle(wolkX6, wolkY6, wolkDiameter6);
  wolkX6 = wolkX6 + 0.2;

   circle(wolkX7, wolkY7, wolkDiameter7);
  wolkX7 = wolkX7 + 0.25;

   circle(wolkX8, wolkY8, wolkDiameter8);
  wolkX8 = wolkX8 + 0.25;

   circle(wolkX9, wolkY9, wolkDiameter9);
  wolkX9 = wolkX9 + 0.25;

  // Wolken terug laten gaan naar het begin
  { 
  if (wolkX1 > 1600) 
    wolkX1 = -200
  }
  { 
  if (wolkX2 > 1600) 
    wolkX2 = -200
  }
  { 
  if (wolkX3 > 1600) 
    wolkX3 = -200
  }
    { 
  if (wolkX4 > 1600) 
    wolkX4 = -200
  }
  { 
  if (wolkX5 > 1600) 
    wolkX5 = -200
  }
  { 
  if (wolkX6 > 1600) 
    wolkX6 = -200
  }
 
 
  // Auto's
  strokeWeight(1)
  fill("#ff3333")
  rect(autoX2, autoY2, autoB2, autoW2);
  autoX2 = autoX2 + autoSnelheid2;
  
  fill("black")
  circle(wielX, wielY, wielDiameter);
  wielX = wielX + autoSnelheid2;
  circle(wielX2, wielY2, wielDiameter2);
  wielX2 = wielX2 + autoSnelheid2;
  fill("#00c8ff")
  rect(autoX, autoY, autoB, autoW);
  autoX = autoX + autoSnelheid;

  fill("black")
  circle(wielX3, wielY3, wielDiameter2);
  wielX3 = wielX3 + autoSnelheid;
  circle(wielX4, wielY4, wielDiameter3);
  wielX4 = wielX4 + autoSnelheid;

// Auto's terug laten gaan naar het begin 
  { 
  if (autoX > 1600) 
    autoX = -200
  }
  { 
  if (autoX2 > 1600) 
    autoX2 = -200
  }
  { 
  if (wielX > 1600) 
    wielX = -200
  }
  { 
  if (wielX2 > 1600) 
    wielX2 = -200
  }
  { 
  if (wielX3 > 1600) 
    wielX3 = -200
  }
  { 
  if (wielX4 > 1600) 
    wielX4 = -200
  }




  // 1 boom die voor de weg en auto's staat
  fill("brown")
  rect(700,760,20,100)
  stroke("darkgreen")
  strokeWeight(10)
  fill("green")
  circle(710,740,100)
}