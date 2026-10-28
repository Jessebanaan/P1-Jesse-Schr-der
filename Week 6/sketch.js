let honger = 100;
let geluk = 100;
let energie = 100;
let gezondheid = 100;

let money = 10;
let moneyPerClick = 1;
let upgradeCost = 10;
let feedCost = 5;

let aantalDoden = 0;
let totaalGeld = 10;
let geslapen = 0;

// Status van het huisdier
let status = ["verity", "cruelty", "sadity", "moggity"];

// Spel-states
let gameOver = false;
let isSlapend = false;
let bezigMetResetten = false; // Voor het "are you sure" schermpje

// Datums en leeftijd voor het scherm
let geboorteTijd = 0;
let geboorteDatum = "";
let sterfDatum = "";

// Voor de tekstwolkjes
let actieTekst = "";
let actieTimer = 0;

// Positie en grootte van het huisdier (midden van het plaatje)
let petX = 400;
let petY = 320;
let petGrootte = 256;
let deadGrootte = 220; // grootte van Deadity op het game-over scherm

// Plaatjes en geluiden
let achtergrond;
let skull;
let geldIcoon;
let verity;
let cruelty;
let sadity;
let moggity;
let deadity;
let mijnGeluid;
let heyItsVerity;
let eat;
let sleepSound;
let clean;
let dead;

function preload() {
  achtergrond = loadImage("Achtergronden/huisdierachtergrond");
  skull = loadImage("skull");
  geldIcoon = loadImage("GeldIcoon_transparant.png");

  // Alle typen veritys
  verity = loadImage("Veritys/VerityPixelArt_transparant.png");
  sadity = loadImage("Veritys/SadityPixelArt_transparant.png");
  cruelty = loadImage("Veritys/CrueltyPixelArt_transparant.png");
  moggity = loadImage("Veritys/MoggityPixelArt_transparant.png");
  deadity = loadImage("Veritys/DeadityPixelArt_transparant.png");

  // Sounds
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
  if (getItem("opgeslagenGeld") !== null) {
    money = getItem("opgeslagenGeld");
  }
  if (getItem("opgeslagenHonger") !== null) {
    honger = getItem("opgeslagenHonger");
  }
  if (getItem("opgeslagenGeluk") !== null) {
    geluk = getItem("opgeslagenGeluk");
  }
  if (getItem("opgeslagenEnergie") !== null) {
    energie = getItem("opgeslagenEnergie");
  }
  if (getItem("opgeslagenGezondheid") !== null) {
    gezondheid = getItem("opgeslagenGezondheid");
  }
  if (getItem("opgeslagenUpgradeCost") !== null) {
    upgradeCost = getItem("opgeslagenUpgradeCost");
  }
  if (getItem("opgeslagenMoneyPerClick") !== null) {
    moneyPerClick = getItem("opgeslagenMoneyPerClick");
  }
  if (getItem("opgeslagenFeedCost") !== null) {
    feedCost = getItem("opgeslagenFeedCost");
  }
  if (getItem("opgeslagenAantalDoden") !== null) {
    aantalDoden = getItem("opgeslagenAantalDoden");
  }
  if (getItem("opgeslagenTotaalGeld") !== null) {
    totaalGeld = getItem("opgeslagenTotaalGeld");
  }
  if (getItem("opgeslagenGeslapen") !== null) {
    geslapen = getItem("opgeslagenGeslapen");
  }

  // Geboortetijd en datum ophalen of instellen
  let opgeslagenGeboorteTijd = getItem("opgeslagenGeboorteTijd");
  let opgeslagenGeboorteDatum = getItem("opgeslagenGeboorteDatum");

  if (opgeslagenGeboorteTijd !== null && opgeslagenGeboorteDatum !== null) {
    geboorteTijd = opgeslagenGeboorteTijd;
    geboorteDatum = opgeslagenGeboorteDatum;
  } else {
    geboorteTijd = Date.now();
    let d = new Date();
    geboorteDatum =
      d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    storeItem("opgeslagenGeboorteTijd", geboorteTijd);
    storeItem("opgeslagenGeboorteDatum", geboorteDatum);
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
  storeItem("opgeslagenGeboorteTijd", geboorteTijd);
  storeItem("opgeslagenGeboorteDatum", geboorteDatum);
  storeItem("opgeslagenAantalDoden", aantalDoden);
  storeItem("opgeslagenTotaalGeld", totaalGeld);
  storeItem("opgeslagenGeslapen", geslapen);
}

function draw() {
  // Als het spel over is dan game over scherm
  if (gameOver == true) {
    background(0);

    skull.resize(400, 200);
    image(skull, 500, 250);

    // Deadity (dood huisdier) als plaatje
    imageMode(CENTER);
    image(deadity, 400, 300, deadGrootte, deadGrootte);
    imageMode(CORNER);

    // Grafsteen
    strokeWeight(10);
    fill("grey")
    stroke("#3e3e3e");
    circle(150, 300, 100);
    rect(100, 300, 100, 150);

    // Tekst op grafsteen
    strokeWeight(2);
    stroke(0);
    fill(255);
    textSize(25);
    text("Verity", 120, 360);

    textSize(10);
    strokeWeight(0);
    fill("#303030");
    text("R.I.P", 140, 280);

    // Sterfdatum op de grafsteen
    textSize(14);
    strokeWeight(1);
    fill(255);
    text(sterfDatum, 115, 420);

    // Game over tekst
    fill(255, 0, 0);
    noStroke();
    textSize(40);
    text("GAME OVER", 280, 180);

    textSize(20);
    text("Deadity", 370, 220);
    text("You killed your verity!", 300, 390);

    // Play again knop
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
  if (gameOver == false && bezigMetResetten == false) {
    // Als het geen game over is en niet aan het resetten dan gebeurt er wat
    if (frameCount % 60 == 0) {
      honger = honger - 1;
      if (honger < 0) {
        honger = 0;
      }

      geluk = geluk - 0.5;
      if (geluk < 0) {
        geluk = 0;
      }

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
      if (gezondheid < 0) {
        gezondheid = 0;
      }

      energie = energie - 10;
      if (energie < 0) {
        energie = 0;
      }
    }
  }

  // Check of het huisdier dood is
  if (honger <= 0 || geluk <= 0 || energie <= 0 || gezondheid <= 0) {
    if (gameOver == false) {
      let d = new Date();
      sterfDatum =
        d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    }

    gameOver = true;
    isSlapend = false;
    bezigMetResetten = false;
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
  fill(255);
  text(money, 700, 52);
  geldIcoon.resize(90, 50);
  image(geldIcoon, 630, 20);

  // Bereken hoeveel dagen het huisdier leeft op basis van tijd
  let huidigeTijd = Date.now();
  let verschilInMilli = huidigeTijd - geboorteTijd;
  let dagenGeleefd = floor(verschilInMilli / (1000 * 60 * 60 * 24));
  if (dagenGeleefd < 0) {
    dagenGeleefd = 0;
  }

  // Statistieken scherm
  textSize(20);
  strokeWeight(5);
  fill(50, 150, 255);
  stroke("#83f3ff");
  rect(650, 75, 125, 140, 10);

  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Days: " + dagenGeleefd, 660, 110);

  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Deaths: " + aantalDoden, 660, 135);

  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Earned: " + totaalGeld, 660, 160);

  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Slept: " + geslapen, 660, 185);

  textSize(12);
  fill("white");
  text("Birthday:" + geboorteDatum, 660, 205);
  textSize(20);

  // Reset knop
  textSize(20);
  strokeWeight(5);
  stroke("#a90000");
  fill("red");
  rect(650, 225, 125, 40, 10);
  fill(255);
  strokeWeight(1);
  stroke(0);
  text("Reset", 685, 252);

  // Tekst bij de balken
  stroke(0);
  strokeWeight(1);
  fill(255);
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

  // Kies het plaatje dat bij de status past
  let petPlaatje = verity;
  if (huidigeStatus == "cruelty") {
    petPlaatje = cruelty;
  } else if (huidigeStatus == "sadity") {
    petPlaatje = sadity;
  } else if (huidigeStatus == "moggity") {
    petPlaatje = moggity;
  }

  // Het huisdier tekenen (plaatje staat gecentreerd op petX en petY)
  imageMode(CENTER);
  image(petPlaatje, petX, petY, petGrootte, petGrootte);
  imageMode(CORNER);

  if (isSlapend == true) {
    // Slaapmasker: alle maten zijn gebaseerd op petGrootte
    // (de plaatjes zijn 512 px, dus s is de schaal t.o.v. het origineel)
    let s = petGrootte / 512;

    // Hoogte van de ogen in het originele plaatje (Moggity zit iets hoger)
    let oogY = 220;
    if (huidigeStatus == "moggity") {
      oogY = 203;
    }

    let maskerY = petY + (oogY - 256) * s; // midden van het masker
    let maskerBreedte = 220 * s;
    let maskerHoogte = 90 * s;

    // Bandje loopt tot de rand van het hoofd (hoofd is een cirkel met straal 165)
    let dy = maskerY - petY;
    let halveBand = sqrt(165 * s * (165 * s) - dy * dy);

    fill(50, 50, 100);
    stroke(0);
    strokeWeight(max(2, 4 * s));

    // Bandje om het hoofd
    rect(petX - halveBand, maskerY - 14 * s, halveBand * 2, 28 * s, 6 * s);

    // Het masker zelf
    rect(
      petX - maskerBreedte / 2,
      maskerY - maskerHoogte / 2,
      maskerBreedte,
      maskerHoogte,
      40 * s
    );

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
  strokeWeight(3);
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

  // "Are you sure" scherm
  if (bezigMetResetten == true) {
    // Donkere achtergrond overlay
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);

    // Popup kader
    fill(50, 150, 255);
    stroke("#83f3ff");
    strokeWeight(5);
    rect(250, 200, 300, 200, 15);

    // Vraag tekst
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(22);
    text("Are you sure?", 330, 250);

    // Yes knop
    fill(0, 200, 0);
    stroke(0);
    strokeWeight(2);
    rect(280, 310, 100, 40, 10);
    fill(255);
    textSize(18);
    text("Yes", 315, 337);

    // No knop
    fill(200, 0, 0);
    stroke(0);
    strokeWeight(2);
    rect(420, 310, 100, 40, 10);
    fill(255);
    textSize(18);
    text("No", 457, 337);
  }
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

      aantalDoden++;

      // Reset geboortetijd en datum wanneer het game over is
      geboorteTijd = Date.now();
      let d = new Date();
      geboorteDatum =
        d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

      allesOpslaan();
    }
    return;
  }

  // Als het pop-up scherm open staat = Yes of No
  if (bezigMetResetten == true) {
    // Yes geklikt (Reset alles)
    if (mouseX > 280 && mouseX < 380 && mouseY > 310 && mouseY < 350) {
      // Zet alles weer zoals het in het begin is
      gezondheid = 100;
      honger = 100;
      geluk = 100;
      energie = 100;
      money = 10;
      moneyPerClick = 1;
      upgradeCost = 10;
      feedCost = 5;
      isSlapend = false;

      geslapen = 0;
      totaalGeld = 10;
      aantalDoden = 0;

      // Zorgt voor een nieuwe geboortedatum
      geboorteTijd = Date.now();
      let d = new Date();
      geboorteDatum =
        d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

      bezigMetResetten = false;
      allesOpslaan();
    }

    // No geklikt (Sluit scherm en gewoon verdergaan)
    if (mouseX > 420 && mouseX < 520 && mouseY > 310 && mouseY < 350) {
      bezigMetResetten = false;
    }

    return; // Stop verdere kliks zolang de popup open staat
  }

  // Feed knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 480 && mouseY < 520) {
    if (money >= feedCost) {
      money = money - feedCost;
      honger = honger + 10;
      if (honger > 100) {
        honger = 100;
      }

      feedCost = feedCost + 1;
      isSlapend = false;

      actieTekst = "Yum!";
      actieTimer = 3;

      if (eat.isPlaying()) {
        eat.stop();
      } else {
        eat.play();
      }
      allesOpslaan();
    }
  }

  // Entertain knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 480 && mouseY < 520) {
    geluk = geluk + 15;
    if (geluk > 100) {
      geluk = 100;
    }

    energie = energie - 5;
    if (energie < 0) {
      energie = 0;
    }

    isSlapend = false;

    actieTekst = "Hey its Verity!";
    actieTimer = 3;

    if (heyItsVerity.isPlaying()) {
      heyItsVerity.stop();
    } else {
      heyItsVerity.play();
    }
    allesOpslaan();
  }

  // Clean knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 530 && mouseY < 570) {
    gezondheid = gezondheid + 15;
    if (gezondheid > 100) {
      gezondheid = 100;
    }

    energie = energie - 5;
    if (energie < 0) {
      energie = 0;
    }

    isSlapend = false;

    actieTekst = "Pling!";
    actieTimer = 3;

    if (clean.isPlaying()) {
      clean.stop();
    } else {
      clean.play();
    }
    allesOpslaan();
  }

  // Sleep knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 530 && mouseY < 570) {
    energie = 100;

    gezondheid = gezondheid + 5;
    if (gezondheid > 100) {
      gezondheid = 100;
    }

    isSlapend = true;
    actieTimer = 0;

    geslapen++;

    if (sleepSound.isPlaying()) {
      sleepSound.stop();
    } else {
      sleepSound.play();
    }
    allesOpslaan();
  }

  // Work knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 480 && mouseY < 520) {
    gezondheid = gezondheid - 1;
    geluk = geluk - 1;
    energie = energie - 1;
    money = money + moneyPerClick;
    isSlapend = false;

    actieTekst = "Ezz money!";
    actieTimer = 2;

    totaalGeld += moneyPerClick; // Telt het totaal verdiende geld op

    allesOpslaan();
  }

  // Reset knop
  if (mouseX > 650 && mouseX < 775 && mouseY > 225 && mouseY < 265) {
    bezigMetResetten = true;
  }

  // Upgrade knop
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
  if (isSlapend == false && dist(mouseX, mouseY, petX, petY) < 85) {
    if (mijnGeluid.isPlaying()) {
      mijnGeluid.stop();
    } else {
      mijnGeluid.play();
    }
  }
}