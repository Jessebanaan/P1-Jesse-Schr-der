let honger = 100;
let geluk = 100;
let energie = 100;
let gezondheid = 100;

let money = 10;
let moneyPerClick = 1;
let upgradeCost = 10;
let feedCost = 5;

// Status van het huisdier
let status = ["verity", "cruelty", "sadity", "moggity"];

// Spel-states
let gameOver = false;
let isSlapend = false; 

// Datums voor de grafsteen
let geboorteDatum = "";
let sterfDatum = "";
let dagen = "";

// Voor de tekstwolkjes
let actieTekst = ""; 
let actieTimer = 0;   

// Plaatjes en geluiden
let achtergrond;
let skull;
let mijnGeluid;
let heyItsVerity;
let eat;
let sleepSound;
let clean;
let dead;

function preload() {
  achtergrond = loadImage("Achtergronden/huisdierachtergrond");
  skull = loadImage("skull");

  mijnGeluid = loadSound("Sounds/verity-greeting.mp3");
  heyItsVerity = loadSound("Sounds/hey-its-me-its-verity.mp3");
  eat = loadSound("Sounds/nom-nom-nom_gPJiWn4.mp3");
  sleepSound = loadSound("Sounds/talking-ben-snore.mp3");
  clean = loadSound("Sounds/quick-ting.mp3");
  dead = loadSound("Sounds/roblox-death-sound_1.mp3");
}

function setup() {
  createCanvas(800, 600);

  // Probeer oude data op te slaan als het er is
  if (getItem("opgeslagenGeld") !== null) { money = getItem("opgeslagenGeld"); }
  if (getItem("opgeslagenHonger") !== null) { honger = getItem("opgeslagenHonger"); }
  if (getItem("opgeslagenGeluk") !== null) { geluk = getItem("opgeslagenGeluk"); }
  if (getItem("opgeslagenEnergie") !== null) { energie = getItem("opgeslagenEnergie"); }
  if (getItem("opgeslagenGezondheid") !== null) { gezondheid = getItem("opgeslagenGezondheid"); }
  if (getItem("opgeslagenUpgradeCost") !== null) { upgradeCost = getItem("opgeslagenUpgradeCost"); }
  if (getItem("opgeslagenMoneyPerClick") !== null) { moneyPerClick = getItem("opgeslagenMoneyPerClick"); }
  if (getItem("opgeslagenFeedCost") !== null) { feedCost = getItem("opgeslagenFeedCost"); }

  // Geboortedatum ophalen of aanmaken als die er nog niet is
  let opgeslagenGeboorte = getItem("opgeslagenGeboorte");
  if (opgeslagenGeboorte !== null) {
    geboorteDatum = opgeslagenGeboorte;
  } else {
    let d = new Date();
    geboorteDatum = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    storeItem("opgeslagenGeboorte", geboorteDatum);
  }
}

function allesOpslaan() {
  storeItem("opgeslagenGeld", money);
  storeItem("opgeslagenHonger", honger);
  storeItem("opgeslagenGeluk", geluk);
  storeItem("opgeslagenEnergie", energie);
  storeItem("opgeslagenGezondheid", gezondheid);
  storeItem("opgeslagenUpgradeCost", upgradeCost);
  storeItem("opgeslagenMoneyPerClick", moneyPerClick);
  storeItem("opgeslagenFeedCost", feedCost);
  storeItem("opgeslagenGeboorte", geboorteDatum);
}

function draw() {
  // Als het spel over is game over scherm
  if (gameOver == true) {
    background(0);

    skull.resize(400, 200);
    image(skull, 500, 250);

    fill(100);
    stroke(0);
    strokeWeight(1);
    circle(400, 300, 100);

    // Dode ogen
    stroke(0);
    strokeWeight(3);
    line(372, 272, 388, 288);
    line(388, 272, 372, 288);
    line(412, 272, 428, 288);
    line(428, 272, 412, 288);
    line(385, 330, 415, 330);

    // Grafsteen
    strokeWeight(10);
    stroke("#3e3e3e");
    circle(150, 300, 100);
    rect(100, 300, 100, 150);

    // Tekst op grafsteen
    strokeWeight(2);
    stroke(0);
    fill(255);
    textSize(25);
    text("Verity", 120, 340);

    textSize(10);
    strokeWeight(0);
    fill("#303030");
    text("R.I.P", 140, 280);

    // Datums op de grafsteen (Geboorte boven, Sterfte onder)
    textSize(14);
    strokeWeight(1);
    fill(255);
    text(geboorteDatum, 115, 390); 
    textSize(20);
    text("-", 150, 410);          
    textSize(14);
    text(sterfDatum, 115, 430);    

    // Game over tekst
    fill(255, 0, 0);
    noStroke();
    textSize(40);
    text("GAME OVER", 280, 180);

    textSize(20);
    text("Deadity", 370, 220);
    text("You killed your verity!", 300, 390);

    // Play Again knop
    fill("#ff0000");
    stroke("#a90000");
    strokeWeight(5);
    rect(335, 430, 140, 40, 10);
    strokeWeight(1);
    stroke(0);
    fill(255);
    textSize(16);
    text("Get a new verity", 347, 455);

    return; 
  }

  // Teken de achtergrond
  background(achtergrond);
  strokeWeight(1);

  // Stats langzaam laten zakken
  if (frameCount % 60 == 0) {
    honger = honger - 1;
    if (honger < 0) { honger = 0; }

    geluk = geluk - 0.5;
    if (geluk < 0) { geluk = 0; }
    
    // Timer voor tekstwolkje
    if (actieTimer > 0) {
      actieTimer = actieTimer - 1;
      if (actieTimer <= 0) {
        actieTekst = ""; 
      }
    }
  }
  
  if (frameCount % 600 == 0) {
    gezondheid = gezondheid - 5;
    if (gezondheid < 0) { gezondheid = 0; }

    energie = energie - 10;
    if (energie < 0) { energie = 0; }
  }

  // Check of het huisdier dood is
  if (honger <= 0 || geluk <= 0 || energie <= 0 || gezondheid <= 0) {
    if (gameOver == false) {
      let d = new Date();
      sterfDatum = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    }

    gameOver = true;
    isSlapend = false;
    actieTimer = 0;
    
    if (dead.isPlaying() == false) {
      dead.play();
    }
  }

  fill(200);
  rect(150, 30, 100, 15);
  fill("#660000");
  rect(150, 30, honger, 15);

  fill(200);
  rect(150, 50, 100, 15);
  fill("#00ff0d");
  rect(150, 50, geluk, 15);

  fill(200);
  rect(150, 70, 100, 15);
  fill("#ff0000");
  rect(150, 70, gezondheid, 15);

  fill(200);
  rect(150, 90, 100, 15);
  fill("#00a1f1");
  rect(150, 90, energie, 15);

  // Geld rechtsboven
  textSize(20);
  strokeWeight(5);
  fill(50, 150, 255);
  stroke("#83f3ff");
  rect(650, 25, 125, 40, 10); 

  strokeWeight(1);
  stroke(0);
  fill("white");
  text("Money: " + money, 660, 50);

  // Statistieken scherm
  textSize(20);
  strokeWeight(5);
  fill(50, 150, 255);
  stroke("#83f3ff");
  rect(650, 75, 125, 140, 10); 

  textSize(9);
  strokeWeight(1);
  stroke(0);
  fill("white");
  text("Birthday: " + geboorteDatum, 670, 205);
  textSize(20);
  

  // Tekst bij de balken
  text("Hunger:", 50, 45);
  text("Energy:", 50, 105);
  text("Health:", 50, 85);
  text("Luck:", 50, 65);

  // Bepaal de status van het huisdier
  let huidigeStatus = status[0]; 
  if (money >= 1000) {
    huidigeStatus = status[3]; // moggity
  } else if (gezondheid < 30) {
    huidigeStatus = status[1]; // cruelty
  } else if (geluk < 40 || energie < 30) {
    huidigeStatus = status[2]; // sadity
  }

  // Kleur van het hoofd aanpassen op basis van status
  if (huidigeStatus == "cruelty") {
    fill(220, 50, 50);
  } else if (huidigeStatus == "sadity") {
    fill(50, 100, 220);
  } else if (huidigeStatus == "moggity") {
    fill(255, 215, 0); // Goudgeel net als de emoji
  } else {
    fill(255, 220, 0);
  }

  // Het hoofd tekenen
  stroke(0);
  strokeWeight(1);
  circle(400, 300, 100);

  // Teken ogen en mond afhankelijk van de status of slaapstand
  if (isSlapend == true) {
    stroke(0);
    strokeWeight(2);
    line(370, 280, 390, 280);
    line(410, 280, 430, 280);

    // Slaapmasker
    fill(50, 50, 100);
    stroke(0);
    strokeWeight(2);
    rect(360, 265, 80, 30, 10);
    
    line(355, 275, 360, 275);
    line(440, 275, 445, 275);

    line(390, 320, 410, 320);

    // Zzz wolkje
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(450, 180, 100, 50, 20);
    circle(450, 250, 20);
    circle(435, 265, 10);
    
    noStroke();
    fill(0);
    textSize(22);
    text("Z z z...", 470, 212);

  } else if (huidigeStatus == "moggity") {

    
    // Wenkbrauwn
    stroke(0);
    strokeWeight(4);
    line(365, 265, 395, 275);
    line(405, 275, 435, 265);

    // Ogen
    strokeWeight(2);
    noFill();
    arc(380, 280, 30, 15, PI, TWO_PI);
    arc(420, 280, 30, 15, PI, TWO_PI);
    fill("black");
    noStroke();
    circle(380, 283, 8);
    circle(420, 283, 8);

    // Kaaklijn
    stroke(160, 120, 0); // Donkergele/bruine schaduwstreep
    strokeWeight(3);
    line(355, 300, 362, 340); 
    line(445, 300, 438, 340); 

    stroke(0);
    strokeWeight(3);
    line(385, 330, 415, 330);

  } else {
    fill("black");
    noStroke();
    circle(380, 280, 10);
    circle(420, 280, 10);

    if (huidigeStatus == "verity" || huidigeStatus == "cruelty") {
      noFill();
      stroke(0);
      strokeWeight(3);
      arc(400, 310, 50, 30, 0, PI);
    } else if (huidigeStatus == "sadity") {
      noFill();
      stroke(0);
      strokeWeight(3);
      arc(400, 320, 40, 25, PI, TWO_PI);
    }
  }

// Tekstwolkje voor andere acties
  if (actieTimer > 0 && isSlapend == false) {
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(450, 180, 120, 50, 20);
    circle(450, 250, 20);
    circle(435, 265, 10);
    
    noStroke();
    fill(0);
    textSize(18);
    text(actieTekst, 465, 212);
    
    stroke(0);
    strokeWeight(1);
  }

  // Toon status naam boven het hoofd
  textSize(24);
  fill(255);
  text(huidigeStatus, 370, 180);

  // Actie knoppen
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(16);
  text("Feed (" + feedCost + ")", 125, 505);

  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Entertain", 240, 505);

  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(100, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Clean", 132, 555);

  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 530, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Sleep", 255, 555);

  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(600, 480, 120, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Work", 635, 505);

  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(600, 530, 120, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(14);
  text("Upgrade (" + upgradeCost + ")", 610, 555);
}

function mouseClicked() {
  if (gameOver == true) {
    if (mouseX > 340 && mouseX < 460 && mouseY > 430 && mouseY < 470) {
      honger = 100;
      geluk = 100;
      energie = 100;
      gezondheid = 100;
      money = 10;
      moneyPerClick = 1;
      upgradeCost = 10;
      feedCost = 5;
      gameOver = false;
      isSlapend = false;
      actieTimer = 0;

      let d = new Date();
      geboorteDatum = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

      allesOpslaan();
    }
    return; 
  }

  // 1. Feed knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 480 && mouseY < 520) {
    if (money >= feedCost) {
      money = money - feedCost;       
      honger = honger + 10;
      if (honger > 100) { honger = 100; }
      
      feedCost = feedCost + 1;     
      isSlapend = false; 
      
      actieTekst = "Yum!";
      actieTimer = 3;

      if (eat.isPlaying()) { eat.stop(); } else { eat.play(); }
      allesOpslaan();
    }
  }

  // 2. Entertain knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 480 && mouseY < 520) {
    geluk = geluk + 15;
    if (geluk > 100) { geluk = 100; }

    energie = energie - 5;
    if (energie < 0) { energie = 0; }

    isSlapend = false;

    actieTekst = "Hey its Verity!";
    actieTimer = 3;

    if (heyItsVerity.isPlaying()) { heyItsVerity.stop(); } else { heyItsVerity.play(); }
    allesOpslaan();
  }

  // 3. Clean knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 530 && mouseY < 570) {
    gezondheid = gezondheid + 15;
    if (gezondheid > 100) { gezondheid = 100; }

    energie = energie - 5;
    if (energie < 0) { energie = 0; }

    isSlapend = false;

    actieTekst = "Pling!";
    actieTimer = 3;

    if (clean.isPlaying()) { clean.stop(); } else { clean.play(); }
    allesOpslaan();
  }

  // 4. Sleep knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 530 && mouseY < 570) {
    energie = 100;
    
    gezondheid = gezondheid + 5;
    if (gezondheid > 100) { gezondheid = 100; }

    isSlapend = true; 
    actieTimer = 0; 

    if (sleepSound.isPlaying()) { sleepSound.stop(); } else { sleepSound.play(); }
    allesOpslaan();
  }

  // 5. Work knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 480 && mouseY < 520) {
    gezondheid = gezondheid - 1;
    geluk = geluk - 1;
    energie = energie - 1;
    money = money + moneyPerClick;
    isSlapend = false;

    actieTekst = "Ezz money!";
    actieTimer = 2;

    allesOpslaan();
  }

  // 6. Upgrade knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 530 && mouseY < 570) {
    if (money >= upgradeCost) {
      money = money - upgradeCost;
      moneyPerClick = moneyPerClick + 1;
      upgradeCost = floor(upgradeCost * 1.5);
      isSlapend = false;
      
      actieTekst = "Upgrade!";
      actieTimer = 2;

      allesOpslaan();
    }
  }

  // Klik op het huisdier zelf voor geluid
  if (isSlapend == false && mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) {
    if (mijnGeluid.isPlaying()) {
      mijnGeluid.stop();
    } else {
      mijnGeluid.play();
    }
  }
}