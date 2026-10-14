// Huisdier statistieken
let honger = 100;
let geluk = 100;
let energie = 100;
let gezondheid = 100;

// Geld dingen
let money = 10; // Startgeld is 10
let moneyPerClick = 1; // Hoeveel geld je nu krijgt per klik op Work
let upgradeCost = 10;  // Wat de eerste upgrade kost

let feedCost = 5; // Wat voeden nu kost

// Status voor het karakter
let status = ["verity", "cruelty", "sadity"];

// Game over dingen
let gameOver = false; 

// Image dingen
let img;
let achtergrond;
let blij;

function preload() {
  achtergrond = loadImage("huisdierachtergrond");
  blij = loadImage("Naamloos-1.png");
}

function setup() {
  createCanvas(800, 600);

  let score = getItem("score");
}

function draw() {
  background(achtergrond);
  strokeWeight(1);

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
  fill("black");
  text(`Money: ${money}`, 675, 50);

  // BEPAAL STATUS EN TEKEN HUISDIER
  let huidigeStatus = status[0]; // standaard "verity"
  
  if (gezondheid < 30) {
    huidigeStatus = status[1]; // "cruelty" (boos/rood)
  } else if (geluk < 40 || energie < 30) {
    huidigeStatus = status[2]; // "sadity" (verdrietig/blauw)
  }

// 1. Kleur kiezen op basis van de status (geel voor verity zoals op de foto)
  if (huidigeStatus === "cruelty") {
    fill(220, 50, 50); // Rood voor boos
  } else if (huidigeStatus === "sadity") {
    fill(50, 100, 220); // Blauw voor verdrietig
  } else {
    fill(255, 220, 0); // Mooi geel voor verity[cite: 1]
  }

  // Het hoofdje
  stroke(0);
  strokeWeight(1);
  circle(400, 300, 100);
  
  // Oogjes
  fill("black");
  noStroke();
  circle(380, 280, 10);
  circle(420, 280, 10);

  // 2. Alleen een lach tekenen als het verity is
  if (huidigeStatus === "verity") {
    noFill();
    stroke(0);
    strokeWeight(3); // Maak de lach mooi dik
    arc(400, 310, 50, 30, 0, PI); // Tekent een mooie glimlach[cite: 1]
  }

  // 2. Alleen een lach tekenen als het verity is
  if (huidigeStatus === "cruelty") {
    noFill();
    stroke(0);
    strokeWeight(3); // Maak de lach mooi dik
    arc(400, 310, 50, 30, 0, PI); // Tekent een mooie glimlach[cite: 1]
  }

    // 3. Verdrietig wanneer het sadity is
  if (huidigeStatus === "sadity") {
    noFill();
    stroke(0);
    strokeWeight(3); // Maak de lach mooi dik
    arc(arc(400, 320, 40, 25, PI, TWO_PI));
  }

  // Check of een van de stats 0 is
  if (honger <= 0 || geluk <= 0 || energie <= 0 || gezondheid <= 0) {
    gameOver = true;
  }

// Als het game over is
  if (gameOver) {
    background(0); // Zwarte achtergrond
    
    // Teken het dode huisdier (deadity)
    fill(100); // Grauwe kleur voor de dood
    stroke(0);
    strokeWeight(1);
    circle(400, 300, 100);

    // Kruisjes ogen (Links oog)
    stroke(0);
    strokeWeight(3);
    line(372, 272, 388, 288); // Schuine lijn 1
    line(388, 272, 372, 288); // Schuine lijn 2

    // Kruisjes ogen (Rechts oog)
    line(412, 272, 428, 288); // Schuine lijn 1
    line(428, 272, 412, 288); // Schuine lijn 2

    // Dode mond (een rechte streep of platte mond)
    line(385, 330, 415, 330);

    // Tekst
    fill(255, 0, 0); // Rode tekst
    noStroke();
    textSize(40);
    text("GAME OVER", 280, 180);
    
    textSize(20);
    text("Deadity", 370, 220);
    text("You just killed your pet!", 300, 420);
    
    return; // Stopt de rest van de draw()
  }

  // Toon ook even op het scherm welke status het dier heeft (handig voor debugging!)
  textSize(24);
  fill(255)
  text(`${huidigeStatus}`, 370, 180);

  // 1. Feed Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(16);
  text(`Feed (${feedCost})`, 125, 505); // Laat de feedcost zien

  // 2. Play Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Play", 260, 505);

  // 3. Clean Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Clean", 132, 555);

  // 4. Sleep Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Sleep", 255, 555);

  // 5. Work Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(600, 480, 120, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Work", 635, 505);

  // Upgrade Button
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(600, 530, 120, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(14);
  text(`Upgrade (${upgradeCost})`, 610, 555);
}

function mouseClicked() {
  if (gameOver) {
    return; // Stop meteen als de game over is
  }
// Feed knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 480 && mouseY < 520) {
    if (money >= feedCost) {
      money = money - feedCost;      
      honger = min(100, honger + 10);
      feedCost = feedCost + 1;     
      print("Fed! Nieuwe prijs wordt: " + feedCost);
    } else {
      print("Niet genoeg geld om te voeden!");
    }
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
    energie = max(0, energie - 5);
    print("Cleaned");
  }

  // Sleep knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 530 && mouseY < 570) {
    energie = 100;
    gezondheid = min(100, gezondheid + 5);
    print("Slept");
  }

  // Work knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 480 && mouseY < 520) {
    gezondheid = max(0, gezondheid - 1);
    geluk = max(0, geluk - 1);
    energie = max(0, energie - 1);
    money = money + moneyPerClick;
    print("Gewerkt!");
  }

  // Upgrade knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 530 && mouseY < 570) {
    if (money >= upgradeCost) {
      money = money - upgradeCost;
      moneyPerClick = moneyPerClick + 1;
      upgradeCost = floor(upgradeCost * 1.5);
      print("Upgrade gekocht! Per klik krijg je nu: " + moneyPerClick);
    } else {
      print("Niet genoeg geld!");
    }
  }
}

function keyPressed() {
  if (gameOver) {
    return; // Stop meteen als de game over is
  }
  if (key === "c" || key === "C") {
    gezondheid = min(100, gezondheid + 15);
  }
  if (key === "f" || key === "F") {
    honger = min(100, honger + 5);
  }
  if (key === "e" || key === "E") {
    energie = min(100, energie + 5);
  }
  if (key === "p" || key === "P") {
    geluk = min(100, geluk + 5);
  }
}

function saveScore() {
  // Sla een waarde op
  storeItem("money");
}