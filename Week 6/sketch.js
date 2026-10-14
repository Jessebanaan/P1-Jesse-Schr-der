// Huisdier statistieken
let honger = 100;
let geluk = 100;
let energie = 100;
let gezondheid = 100;

// Geld dingen
let money = 10;
let moneyPerClick = 1;
let upgradeCost = 10;

let feedCost = 5; // Wat voeden nu kost

// Status voor het karakter
let status = ["verity", "cruelty", "sadity"];

// Game over dingen
let gameOver = false;

// Image dingen
let img;
let achtergrond;
let nachtachtergrond;
let blij;
let skull;

function preload() {
  achtergrond = loadImage("huisdierachtergrond");
  nachtachtergrond = loadImage("nachtachtergrond");
  blij = loadImage("Naamloos-1.png");
  skull = loadImage("skull")

  mijnGeluid = loadSound('verity-greeting.mp3');
  heyItsVerity = loadSound('hey-its-me-its-verity.mp3')
  eat = loadSound('nom-nom-nom_gPJiWn4.mp3')
  sleep = loadSound('talking-ben-snore.mp3')
  clean = loadSound('quick-ting.mp3')
  dead = loadSound('roblox-death-sound_1.mp3')
}

function setup() {
  createCanvas(800, 600);

  // Inlezen van opgeslagen data
  let opgeslagenMoney = getItem("opgeslagenGeld");
  if (opgeslagenMoney !== null) {
    money = opgeslagenMoney;
  }

  let opgeslagenHonger = getItem("opgeslagenHonger");
  if (opgeslagenHonger !== null) {
    honger = opgeslagenHonger;
  }

  let opgeslagenGeluk = getItem("opgeslagenGeluk");
  if (opgeslagenGeluk !== null) {
    geluk = opgeslagenGeluk;
  }

  let opgeslagenEnergie = getItem("opgeslagenEnergie");
  if (opgeslagenEnergie !== null) {
    energie = opgeslagenEnergie;
  }

  let opgeslagenGezondheid = getItem("opgeslagenGezondheid");
  if (opgeslagenGezondheid !== null) {
    gezondheid = opgeslagenGezondheid;
  }

  let opgeslagenUpgradeCost = getItem("opgeslagenUpgradeCost");
  if (opgeslagenUpgradeCost !== null) {
    upgradeCost = opgeslagenUpgradeCost;
  }

    let opgeslagenMoneyPerClick = getItem("opgeslagenMoneyPerClick");
  if (opgeslagenMoneyPerClick !== null) {
    moneyPerClick = opgeslagenMoneyPerClick;
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
}

function draw() {
  // Dag en nacht overgang
  let cyclusTijd = millis() % 200000;
  let nachtAlpha = 0;

  if (cyclusTijd < 100000) {
    nachtAlpha = map(cyclusTijd, 0, 100000, 0, 255);
  } else {
    nachtAlpha = map(cyclusTijd, 100000, 200000, 255, 0);
  }

  background(achtergrond);
  tint(255, nachtAlpha);
  image(nachtachtergrond, 0, 0, width, height);
  noTint();

  strokeWeight(1);

  if (!gameOver) {
    if (frameCount % 60 == 0) {
      honger = max(0, honger - 1);
      geluk = max(0, geluk - 0.5);
    }
    if (frameCount % 600 == 0) {
      gezondheid = max(0, gezondheid - 5);
      energie = max(0, energie - 10);
    }
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

  // Geld tekst met achtergrond
  textSize(20)
  strokeWeight(5)
    fill(50, 150, 255);
  stroke("#83f3ff");
  rect(665, 25, 110, 40, 10);

  strokeWeight(1)
  stroke(0)
  fill("white");
  text(`Money: ${money}`, 675, 50);

  // BEPAAL STATUS EN TEKEN HUISDIER
  let huidigeStatus = status[0];

  if (gezondheid < 30) {
    huidigeStatus = status[1];
  } else if (geluk < 40 || energie < 30) {
    huidigeStatus = status[2];
  }

  if (huidigeStatus === "cruelty") {
    fill(220, 50, 50);
  } else if (huidigeStatus === "sadity") {
    fill(50, 100, 220);
  } else {
    fill(255, 220, 0);
  }

  // Het hoofd
  stroke(0);
  strokeWeight(1);
  circle(400, 300, 100);

  // Ogen
  fill("black");
  noStroke();
  circle(380, 280, 10);
  circle(420, 280, 10);

  // Mond op basis van status
  if (huidigeStatus === "verity") {
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(400, 310, 50, 30, 0, PI);
  }

  if (huidigeStatus === "cruelty") {
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(400, 310, 50, 30, 0, PI);
  }

  if (huidigeStatus === "sadity") {
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(400, 320, 40, 25, PI, TWO_PI);
  }

  // Check of een van de stats 0 is
  if (honger <= 0 || geluk <= 0 || energie <= 0 || gezondheid <= 0) {
    gameOver = true;

              if (dead.isPlaying()) {
      dead.stop();
    } else {
      dead.play();
    }
  }

  // Als het game over is
  if (gameOver) {
    background(0);

    skull.resize(400,200);
    image(skull,500,250)

    fill(100);
    stroke(0);
    strokeWeight(1);
    circle(400, 300, 100);

    // Kruisjes ogen
    stroke(0);
    strokeWeight(3);
    line(372, 272, 388, 288);
    line(388, 272, 372, 288);
    line(412, 272, 428, 288);
    line(428, 272, 412, 288);

    // Dode mond
    line(385, 330, 415, 330);

    // Grafsteen
    strokeWeight(10)
    stroke("#3e3e3e")
    circle(150,300,100)
    rect(100,300,100,150)

    strokeWeight(2)
    stroke(0)
    fill(255)
    textSize(25)
    text("Verity", 120, 350)

    textSize(10)
    strokeWeight(0)
    fill("#303030")
    text("R.I.P", 140, 280)

      // Tijd ding
      textSize(25)
      strokeWeight(2)
      fill(255)
  let nu = new Date();
  text(nu.getDate(),115,400);
  text(".",145,400);
  text(nu.getMonth() + 1, 155,400);
  text(nu.getFullYear(), 125,430);

    // Tekst
    fill(255, 0, 0);
    noStroke();
    textSize(40);
    text("GAME OVER", 280, 180);

    textSize(20);
    text("Deadity", 370, 220);
    text("You killed your verity!", 300, 390);

    // Buy a new verity knop
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

  // Status op het scherm tonen
  textSize(24);
  fill(255);
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
  text(`Feed (${feedCost})`, 125, 505);

  // 2. Play Knop
  fill(50, 150, 255);
  stroke("#83f3ff");
  strokeWeight(5);
  rect(220, 480, 110, 40, 10);
  strokeWeight(1);
  stroke(0);
  fill(255);
  text("Entertain", 240, 505);

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
    // Check of er op de Play Again knop wordt geklikt (X: 340 t/m 460, Y: 430 t/m 470)
    if (mouseX > 340 && mouseX < 460 && mouseY > 430 && mouseY < 470) {
      // Reset alle statistieken en variabelen
      honger = 100;
      geluk = 100;
      energie = 100;
      gezondheid = 100;
      money = 10;
      moneyPerClick = 1;
      upgradeCost = 10;
      feedCost = 5;
      gameOver = false;

      allesOpslaan();
      print("Spel opnieuw gestart!");
    }
    return;
  }

  // Feed knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 480 && mouseY < 520) {
    if (money >= feedCost) {
      money = money - feedCost;
      honger = min(100, honger + 10);
      feedCost = feedCost + 1;

            if (eat.isPlaying()) {
      eat.stop();
    } else {
      eat.play();
    }

      allesOpslaan();
      print("Fed!");
    } else {
      print("Niet genoeg geld om te voeden!");
    }
  }

  // Entertain knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 480 && mouseY < 520) {
    geluk = min(100, geluk + 15);
    energie = max(0, energie - 5);

      if (heyItsVerity.isPlaying()) {
      heyItsVerity.stop();
    } else {
      heyItsVerity.play();
    }

    allesOpslaan();
    print("Played");
  }

  // Clean knop
  if (mouseX > 100 && mouseX < 210 && mouseY > 530 && mouseY < 570) {
    gezondheid = min(100, gezondheid + 15);
    energie = max(0, energie - 5);

          if (clean.isPlaying()) {
      clean.stop();
    } else {
      clean.play();
    }

    allesOpslaan();
    print("Cleaned");
  }

  // Sleep knop
  if (mouseX > 220 && mouseX < 330 && mouseY > 530 && mouseY < 570) {
    energie = 100;
    gezondheid = min(100, gezondheid + 5);

          if (sleep.isPlaying()) {
      sleep.stop();
    } else {
      sleep.play();
    }

    allesOpslaan();
    print("Slept");
  }

  // Work knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 480 && mouseY < 520) {
    gezondheid = max(0, gezondheid - 1);
    geluk = max(0, geluk - 1);
    energie = max(0, energie - 1);
    money = money + moneyPerClick;

    allesOpslaan();
    print("Gewerkt!");
  }

  // Upgrade knop
  if (mouseX > 600 && mouseX < 720 && mouseY > 530 && mouseY < 570) {
    if (money >= upgradeCost) {
      money = money - upgradeCost;
      moneyPerClick = moneyPerClick + 1;
      upgradeCost = floor(upgradeCost * 1.5);

      allesOpslaan();
      print("Upgrade gekocht!");
    } else {
      print("Niet genoeg geld!");
    }
  }

if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) {
    if (mijnGeluid.isPlaying()) {
      mijnGeluid.stop();
    } else {
      mijnGeluid.play();
    }
  }
}

// function keyPressed() {
//   if (gameOver) {
//     return;
//   }
//   if (key === "c" || key === "C") {
//     gezondheid = min(100, gezondheid + 15);
//     allesOpslaan();
//   }
//   if (key === "f" || key === "F") {
//     honger = min(100, honger + 5);
//     allesOpslaan();
//   }
//   if (key === "e" || key === "E") {
//     energie = min(100, energie + 5);
//     allesOpslaan();
//   }
//   if (key === "p" || key === "P") {
//     geluk = min(100, geluk + 5);
//     allesOpslaan();
//   }
// }
