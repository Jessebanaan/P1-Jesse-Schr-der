// Huisdier statistieken
let honger = 100;
let geluk = 100;
let energie = 100;
let gezondheid = 100;

// Geld
let money = 100;

// Image dingen
let img;

function preload() {
  achtergrond = loadImage("huisdierachtergrond");
  blij = loadImage("Naamloos-1.png");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(achtergrond);
  strokeWeight(1)

  if (frameCount % 60 == 0) {
    honger = max(0, honger - 1);
    geluk = max(0, geluk - 0.5);
  }
    if (frameCount % 600 == 0) {
    gezondheid = max(0, gezondheid - 5);
    energie = max(0, energie - 10);
  }

// Honger balk met tekst
fill(0);
text("Hunger:", 50, 45);

fill(200);
rect(150, 30, 100, 15);

fill("#660000");
rect(150, 30, honger, 15);

// Geluk balk met tekst
fill(0);
text("Luck:", 50, 65);

fill(200);
rect(150, 50, 100, 15);

fill("#00ff0d");
rect(150, 50, geluk, 15);

// Gezondheid balk met tekst
fill(0);
text("Health:", 50, 85);

fill(200);
rect(150, 70, 100, 15);

fill("#ff0000");
rect(150, 70, gezondheid, 15);

// Energie balk met tekst
fill(0);
text("Energy:", 50, 105);

fill(200);
rect(150, 90, 100, 15);

fill("#00a1f1");
rect(150, 90, energie, 15);

// Geld tekst
fill("black")
text(`Money: ${money}`, 675, 50);

  
  if (gezondheid < 30) {
    fill(100, 200, 100);
  } else if (geluk > 70) {
    fill(255, 200, 0);
  } else {
    fill(150);
  }
  circle(400,300,100)

// 1. Feed Knop (Links-boven: X=100, Y=480)
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(16);
  text("Feed", 135, 505);

  // 2. Play Knop (Rechts-boven: X=220, Y=480)
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Play", 260, 505);

  // 3. Clean Knop (Links-onder: X=100, Y=530)
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Clean", 132, 555);

  // 4. Sleep Knop (Rechts-onder: X=220, Y=530)
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Sleep", 255, 555);

  // 5. Work Knop (Rechts apart)
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(600, 505, 120, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Work", 635, 530);


// De tekst op de knop
strokeWeight(1)
stroke(0)
fill(255); // Witte tekst
textSize(16);
text("Work", 635, 525);

  console.log("honger:", honger)
  console.log("geluk:", geluk)
  console.log("energie:", energie)
  console.log("gezondheid:", gezondheid)
  console.log("geld:", money)
}

function mouseClicked() {
  // Feed knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 480 && mouseY < 520) {
    honger = min(100, honger + 10);
    money = max(0, money - 5);
    print("Fed");
  }
  // Play knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 480 && mouseY < 520) {
    geluk = min(100, geluk + 15);
    energie = max(0, energie - 5);
    print("Played");
  }

  // Clean knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 530 && mouseY < 570) {
    gezondheid = min(100, gezondheid + 15);
    energie = max(0, energie - 5)
    print("Cleaned");
  }

  // Sleep knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 530 && mouseY < 570) {
    energie = 100;
    gezondheid = min(100, gezondheid + 10);
    print("Slept");
  }

  // Work knop (het huisdier verliest veel van zijn statistieken want werken is niet goed voor je)
  if (mouseX > 600 && mouseX < 720 && mouseY > 505 && mouseY < 545) {
    money = money + 1;
    gezondheid = min(100, gezondheid - 1);
    geluk = min(100, geluk - 1);
    energie = max(0, energie - 1)
    print("+1 money");
  }
}

function keyPressed(){
if (key === 'c' || key === 'C') {
  gezondheid = min(100, gezondheid + 15);
  print("+10 gezondheid");
}

if (key === 'f' || key === 'F') {
  honger = min(100, honger + 5);
  print("+5 gezondheid");
}

if (key === 'e' || key === 'E') {
  energie = min(100, energie + 5);
  print("+5 energie");
}

if (key === 'p' || key === 'P') {
  geluk = min(100, geluk + 5);
  print("+5 geluk");
}
}
