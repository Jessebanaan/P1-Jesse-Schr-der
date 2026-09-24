// Spel variabelen
let spelGestart = false; // Voor kleurselectie scherm
let beurt = "red";
let gameOver = false;
let gelijkspel = false;
let winLijn = null; // Slaat de coÃ¶rdinaten op van de winnende streep

// Tijd variabelen
let maxTijd = 5;
let startTijd = 0;
let overigeTijd = 5;

// Speler kleuren (instelbaar via kleurselectie)
let speler1Kleur = "red";
let speler2Kleur = "blue";
let beschikbareKleuren = ["red", "blue", "green", "orange", "purple"];

// Vakjes variabelen
let rectW = 80;
let rectH = 80;

let vak1Kleur = "grey";
let vak2Kleur = "grey";
let vak3Kleur = "grey";
let vak4Kleur = "grey";
let vak5Kleur = "grey";
let vak6Kleur = "grey";
let vak7Kleur = "grey";
let vak8Kleur = "grey";
let vak9Kleur = "grey";

let vak1X = 50;  let vak1Y = 50;
let vak2X = 150; let vak2Y = 50;
let vak3X = 250; let vak3Y = 50;

let vak4X = 50;  let vak4Y = 150;
let vak5X = 150; let vak5Y = 150;
let vak6X = 250; let vak6Y = 150;

let vak7X = 50;  let vak7Y = 250;
let vak8X = 150; let vak8Y = 250;
let vak9X = 250; let vak9Y = 250;

// Knop variabelen (Eindscherm)
let playAgainX = 55;
let playAgainY = 340;
let playAgainW = 130;
let playAgainH = 45;

let changeColorX = 215;
let changeColorY = 340;
let changeColorW = 130;
let changeColorH = 45;

// Geluiden & Afbeelding
let klikGeluid;
let img;

function preload() {
  img = loadImage("Boterkaaseneieren.png-1600x900.png");
}

function setup() {
  createCanvas(400, 400);
  klikGeluid = loadSound('klik.ogg');
}

function speelKlik() {
  if (klikGeluid && klikGeluid.isLoaded()) {
    klikGeluid.play();
  }
} 

function draw() {
  background(220);

  // KLEURSELECTIE SCHERM VOOR START SPEL
  if (!spelGestart) {
    tekenKleurSelectie();
    return;
  }

  // ACHTERGROND & DYNAMISCHE RAND
  image(img, 0, 0, 400, 400);
  
  // Achtergrondindicatie voor wie aan de beurt is
  noFill();
  strokeWeight(15);
  stroke(beurt);
  rect(0, 0, width, height);

  // VAKJES TEKENEN MET HOVER EFFECT
  tekenVakje(vak1X, vak1Y, vak1Kleur);
  tekenVakje(vak2X, vak2Y, vak2Kleur);
  tekenVakje(vak3X, vak3Y, vak3Kleur);
  tekenVakje(vak4X, vak4Y, vak4Kleur);
  tekenVakje(vak5X, vak5Y, vak5Kleur);
  tekenVakje(vak6X, vak6Y, vak6Kleur);
  tekenVakje(vak7X, vak7Y, vak7Kleur);
  tekenVakje(vak8X, vak8Y, vak8Kleur);
  tekenVakje(vak9X, vak9Y, vak9Kleur);

  // TIMER
  fill(255);
  strokeWeight(5);
  stroke(0);
  textSize(20);
  textAlign(LEFT, BASELINE);
  text(overigeTijd, 15, 200);

  if (gameOver == false) {
    let verstreken = (millis() - startTijd) / 1000;
    overigeTijd = ceil(maxTijd - verstreken);
    
    if (overigeTijd <= 0) {
      beurt = (beurt == speler1Kleur) ? speler2Kleur : speler1Kleur;
      startTijd = millis();
    }
  }

  // WINSTINDICATIE STREEP
  if (winLijn) {
    stroke(255, 215, 0); // Goudkleurige streep
    strokeWeight(10);
    line(winLijn.x1, winLijn.y1, winLijn.x2, winLijn.y2);
  }

  // GAME OVER / EINDE SCHERM
  if (gameOver == true) {
    textSize(30);
    fill(255);
    stroke(10);
    textAlign(CENTER, CENTER);
    
    if (gelijkspel == true) {
      text("Draw!", 200, 35);
    } else {
      text("Game finished", 200, 35);
    }

    // 1. Play again knop (Groen)
    fill("#37ff00");
    stroke("#2dcf00");
    strokeWeight(3);
    rect(playAgainX, playAgainY, playAgainW, playAgainH, 8);
    
    fill("white");
    textSize(16);
    stroke(0);
    text("Opnieuw", playAgainX + playAgainW / 2, playAgainY + playAgainH / 2);

    // 2. Kies nieuwe kleur knop (Blauw)
    fill("#008cff");
    stroke("#0066cc");
    strokeWeight(3);
    rect(changeColorX, changeColorY, changeColorW, changeColorH, 8);
    
    fill("white");
    textSize(16);
    stroke(0);
    text("Kleur kiezen", changeColorX + changeColorW / 2, changeColorY + changeColorH / 2);

    textAlign(LEFT, BASELINE);
    overigeTijd = "";
  } else {
    // BEURT TEKST EN CURSOR
    textSize(30);
    fill(255);
    stroke(10);
    textAlign(CENTER, CENTER);
    text(beurt.toUpperCase() + "'s turn", 200, 35);
    textAlign(LEFT, BASELINE);

    strokeWeight(3);
    stroke(0);
    fill(beurt);
    circle(mouseX, mouseY, 15);
  }
}

// HOVER EFFECT FUNCTIE
function tekenVakje(x, y, kleur) {
  strokeWeight(5);
  stroke(150);
  
  // Check hover op een leeg vakje
  if (kleur == "grey" && mouseX > x && mouseX < x + rectW && mouseY > y && mouseY < y + rectH) {
    fill(200, 200, 255); // Lichte highlight bij hover
  } else {
    fill(kleur);
  }
  
  rect(x, y, rectW, rectH, 10);
}

// KLEURSELECTIE SCHERM
function tekenKleurSelectie() {
  background(40);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  textSize(22);
  text("Kies Speler 1 Kleur:", 200, 50);
  
  for (let i = 0; i < beschikbareKleuren.length; i++) {
    fill(beschikbareKleuren[i]);
    if (speler1Kleur == beschikbareKleuren[i]) stroke(255); else stroke(0);
    strokeWeight(speler1Kleur == beschikbareKleuren[i] ? 4 : 1);
    rect(45 + i * 65, 75, 50, 50, 8);
  }

  fill(255);
  noStroke();
  text("Kies Speler 2 Kleur:", 200, 180);

  for (let i = 0; i < beschikbareKleuren.length; i++) {
    fill(beschikbareKleuren[i]);
    if (speler2Kleur == beschikbareKleuren[i]) stroke(255); else stroke(0);
    strokeWeight(speler2Kleur == beschikbareKleuren[i] ? 4 : 1);
    rect(45 + i * 65, 205, 50, 50, 8);
  }

  // Start knop
  fill("#37ff00");
  stroke(0);
  strokeWeight(2);
  rect(135, 310, 130, 45, 10);
  fill(0);
  noStroke();
  textSize(20);
  text("Start Spel", 200, 332);
  textAlign(LEFT, BASELINE);
}

function mousePressed() {
  // KLEURSELECTIE LOGICA
  if (!spelGestart) {
    for (let i = 0; i < beschikbareKleuren.length; i++) {
      let x = 45 + i * 65;
      if (mouseX > x && mouseX < x + 50) {
        if (mouseY > 75 && mouseY < 125 && beschikbareKleuren[i] != speler2Kleur) {
          speler1Kleur = beschikbareKleuren[i];
          beurt = speler1Kleur;
        }
        if (mouseY > 205 && mouseY < 255 && beschikbareKleuren[i] != speler1Kleur) {
          speler2Kleur = beschikbareKleuren[i];
        }
      }
    }
    
    // Klik op Start Spel
    if (mouseX > 135 && mouseX < 265 && mouseY > 310 && mouseY < 355) {
      spelGestart = true;
      startTijd = millis();
    }
    return;
  }

  // EINDESCHERM KNOPPEN
  if (gameOver == true) {
    // 1. Klik op "Opnieuw" (Direct nog een potje met dezelfde kleuren)
    if (
      mouseX > playAgainX && mouseX < playAgainX + playAgainW &&
      mouseY > playAgainY && mouseY < playAgainY + playAgainH
    ) {
      resetGame(); 
      return;
    }

    // 2. Klik op "Kleur kiezen" (Terug naar het kleurselectiescherm)
    if (
      mouseX > changeColorX && mouseX < changeColorX + changeColorW &&
      mouseY > changeColorY && mouseY < changeColorY + changeColorH
    ) {
      resetGame();
      spelGestart = false; // Schakelt het selectiescherm weer in
      return;
    }
    return;
  }

  let geplaatst = false;

  // VAKJES KLIKKEN
  if (mouseX > vak1X && mouseX < vak1X + rectW && mouseY > vak1Y && mouseY < vak1Y + rectH && vak1Kleur == "grey") { vak1Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak2X && mouseX < vak2X + rectW && mouseY > vak2Y && mouseY < vak2Y + rectH && vak2Kleur == "grey") { vak2Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak3X && mouseX < vak3X + rectW && mouseY > vak3Y && mouseY < vak3Y + rectH && vak3Kleur == "grey") { vak3Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak4X && mouseX < vak4X + rectW && mouseY > vak4Y && mouseY < vak4Y + rectH && vak4Kleur == "grey") { vak4Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak5X && mouseX < vak5X + rectW && mouseY > vak5Y && mouseY < vak5Y + rectH && vak5Kleur == "grey") { vak5Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak6X && mouseX < vak6X + rectW && mouseY > vak6Y && mouseY < vak6Y + rectH && vak6Kleur == "grey") { vak6Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak7X && mouseX < vak7X + rectW && mouseY > vak7Y && mouseY < vak7Y + rectH && vak7Kleur == "grey") { vak7Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak8X && mouseX < vak8X + rectW && mouseY > vak8Y && mouseY < vak8Y + rectH && vak8Kleur == "grey") { vak8Kleur = beurt; geplaatst = true; }
  else if (mouseX > vak9X && mouseX < vak9X + rectW && mouseY > vak9Y && mouseY < vak9Y + rectH && vak9Kleur == "grey") { vak9Kleur = beurt; geplaatst = true; }

  if (!geplaatst) return;

  speelKlik();

  // CONTROLEER WIN-CONDITIES EN BEPAAL WINLIJN
  if (vak1Kleur != "grey" && vak1Kleur == vak2Kleur && vak2Kleur == vak3Kleur) { gameOver = true; winLijn = {x1: 90, y1: 90, x2: 310, y2: 90}; }
  else if (vak4Kleur != "grey" && vak4Kleur == vak5Kleur && vak5Kleur == vak6Kleur) { gameOver = true; winLijn = {x1: 90, y1: 190, x2: 310, y2: 190}; }
  else if (vak7Kleur != "grey" && vak7Kleur == vak8Kleur && vak8Kleur == vak9Kleur) { gameOver = true; winLijn = {x1: 90, y1: 290, x2: 310, y2: 290}; }
  else if (vak1Kleur != "grey" && vak1Kleur == vak4Kleur && vak4Kleur == vak7Kleur) { gameOver = true; winLijn = {x1: 90, y1: 90, x2: 90, y2: 290}; }
  else if (vak2Kleur != "grey" && vak2Kleur == vak5Kleur && vak5Kleur == vak8Kleur) { gameOver = true; winLijn = {x1: 190, y1: 90, x2: 190, y2: 290}; }
  else if (vak3Kleur != "grey" && vak3Kleur == vak6Kleur && vak6Kleur == vak9Kleur) { gameOver = true; winLijn = {x1: 290, y1: 90, x2: 290, y2: 290}; }
  else if (vak1Kleur != "grey" && vak1Kleur == vak5Kleur && vak5Kleur == vak9Kleur) { gameOver = true; winLijn = {x1: 90, y1: 90, x2: 290, y2: 290}; }
  else if (vak3Kleur != "grey" && vak3Kleur == vak5Kleur && vak5Kleur == vak7Kleur) { gameOver = true; winLijn = {x1: 290, y1: 90, x2: 90, y2: 290}; }

  // GELIJKSPEL CONTROLE
  if (vak1Kleur != "grey" && vak2Kleur != "grey" && vak3Kleur != "grey" &&
      vak4Kleur != "grey" && vak5Kleur != "grey" && vak6Kleur != "grey" &&
      vak7Kleur != "grey" && vak8Kleur != "grey" && vak9Kleur != "grey") {
    if (!gameOver) {
      gameOver = true;
      gelijkspel = true;
    }
  }

  // WISSEL BEURT
  if (!gameOver) {
    beurt = (beurt == speler1Kleur) ? speler2Kleur : speler1Kleur;
  }

  startTijd = millis();
}

function resetGame() {
  vak1Kleur = "grey";
  vak2Kleur = "grey";
  vak3Kleur = "grey";
  vak4Kleur = "grey";
  vak5Kleur = "grey";
  vak6Kleur = "grey";
  vak7Kleur = "grey";
  vak8Kleur = "grey";
  vak9Kleur = "grey";

  gameOver = false;
  gelijkspel = false;
  winLijn = null;

  beurt = speler1Kleur;
  startTijd = millis();
}