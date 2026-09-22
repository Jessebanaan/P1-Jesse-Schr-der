// Spel variablene
let beurt = "red";
let gameOver = false;

// Vakjes variabelen
let rectW = 80;
let rectH = 80;

let vak1Kleur = ("grey");
let vak2Kleur = ("grey");
let vak3Kleur = ("grey");
let vak4Kleur = ("grey");
let vak5Kleur = ("grey");
let vak6Kleur = ("grey");
let vak7Kleur = ("grey");
let vak8Kleur = ("grey");
let vak9Kleur = ("grey");

let vak1X = 50;  let vak1Y = 50;
let vak2X = 150; let vak2Y = 50;
let vak3X = 250; let vak3Y = 50;

let vak4X = 50;  let vak4Y = 150;
let vak5X = 150; let vak5Y = 150;
let vak6X = 250; let vak6Y = 150;

let vak7X = 50;  let vak7Y = 250;
let vak8X = 150; let vak8Y = 250;
let vak9X = 250; let vak9Y = 250;

// Play again knop
let playAgainX = 135;
let playAgainY = 345;
let playAgainW = 40;
let playAgainH = 120;
let playAgainText = "Play again";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Achtergrond van het veld
  strokeWeight(0);
  fill("blue");
  rect(0, 0, 200, 400);
  fill("red");
  rect(195, 0, 210, 400);

  // Vakjes tekenen
  strokeWeight(5);
  fill(vak1Kleur);
  rect(vak1X, vak1Y, rectW, rectH, 10);

  fill(vak2Kleur);
  rect(vak2X, vak2Y, rectW, rectH, 10);

  fill(vak3Kleur);
  rect(vak3X, vak3Y, rectW, rectH, 10);

  fill(vak4Kleur);
  rect(vak4X, vak4Y, rectW, rectH, 10);

  fill(vak5Kleur);
  rect(vak5X, vak5Y, rectW, rectH, 10);

  fill(vak6Kleur);
  rect(vak6X, vak6Y, rectW, rectH, 10);

  fill(vak7Kleur);
  rect(vak7X, vak7Y, rectW, rectH, 10);

  fill(vak8Kleur);
  rect(vak8X, vak8Y, rectW, rectH, 10);

  fill(vak9Kleur);
  rect(vak9X, vak9Y, rectW, rectH, 10);

  // Laat de tekst en knop verschijnen wanneer het spel klaar is
  if (gameOver == true) {
    textSize(30)
    fill(255)
    stroke(10)
    text("Game finished", 100, 35)
    // Play again knop
   fill("#37ff00")
    rect(playAgainX, playAgainY, playAgainH, playAgainW, 5)
    fill("white")
    textSize(20)
    text(playAgainText, 150, 370)
  }

  // Muisstip
  strokeWeight(3);
  fill("white");
  circle(mouseX, mouseY, 10);
}

function mousePressed(){
  if (gameOver == true) { return; }


  if (mouseX > vak1X && mouseX < vak1X + rectW && mouseY > vak1Y && mouseY < vak1Y + rectH && vak1Kleur == "grey") {
    vak1Kleur = beurt;
  }

  // VAK 2
  if (mouseX > vak2X && mouseX < vak2X + rectW && mouseY > vak2Y && mouseY < vak2Y + rectH && vak2Kleur == "grey") {
    vak2Kleur = beurt;
  }

    // VAK 3
  if (mouseX > vak3X && mouseX < vak3X + rectW && mouseY > vak3Y && mouseY < vak3Y + rectH && vak3Kleur == "grey") {
    vak3Kleur = beurt;
  }

    // VAK 4
  if (mouseX > vak4X && mouseX < vak4X + rectW && mouseY > vak4Y && mouseY < vak4Y + rectH && vak4Kleur == "grey") {
    vak4Kleur = beurt;
  }

    // VAK 5
  if (mouseX > vak5X && mouseX < vak5X + rectW && mouseY > vak5Y && mouseY < vak5Y + rectH && vak5Kleur == "grey") {
    vak5Kleur = beurt;
  }

    // VAK 6
  if (mouseX > vak6X && mouseX < vak6X + rectW && mouseY > vak6Y && mouseY < vak6Y + rectH && vak6Kleur == "grey") {
    vak6Kleur = beurt;
  }

    // VAK 7
  if (mouseX > vak7X && mouseX < vak7X + rectW && mouseY > vak7Y && mouseY < vak7Y + rectH && vak7Kleur == "grey") {
    vak7Kleur = beurt;
  }

    // VAK 8
  if (mouseX > vak8X && mouseX < vak8X + rectW && mouseY > vak8Y && mouseY < vak8Y + rectH && vak8Kleur == "grey") {
    vak8Kleur = beurt;
  }

    // VAK 9
  if (mouseX > vak9X && mouseX < vak9X + rectW && mouseY > vak9Y && mouseY < vak9Y + rectH && vak9Kleur == "grey") {
    vak9Kleur = beurt;
  }

  // Alle mogelijke combinaties die er zijn gebruiken om het spel te spelen
if (
  (vak1Kleur != "grey" && vak1Kleur == vak2Kleur && vak2Kleur == vak3Kleur) || 
  (vak4Kleur != "grey" && vak4Kleur == vak5Kleur && vak5Kleur == vak6Kleur) || 
  (vak7Kleur != "grey" && vak7Kleur == vak8Kleur && vak8Kleur == vak9Kleur) || 
  
  (vak1Kleur != "grey" && vak1Kleur == vak4Kleur && vak4Kleur == vak7Kleur) || 
  (vak2Kleur != "grey" && vak2Kleur == vak5Kleur && vak5Kleur == vak8Kleur) || 
  (vak3Kleur != "grey" && vak3Kleur == vak6Kleur && vak6Kleur == vak9Kleur) || 
  
  (vak1Kleur != "grey" && vak1Kleur == vak5Kleur && vak5Kleur == vak9Kleur) || 
  (vak3Kleur != "grey" && vak3Kleur == vak5Kleur && vak5Kleur == vak7Kleur) 
) {
  gameOver = true;
}

  if (mouseX > playAgainX && mouseX < playAgainX + playAgainW && mouseY > playAgainY && mouseY < playAgainY + playAgainH) {
    gameOver = false;
  }

// Wissel de beurt om elke keer dat er op een vakje word gedrukt
  if (beurt == "red") {
    beurt = "blue";
  } else {
    beurt = "red";
  }
}

function mouseReleased(){

}
