// Scherm status
let schermStatus = "START";

// Tijd/timer dingen
let timer = 10.0; // Aantal seconden per vraag
let maxTijd = 10.0; // Maximale tijd

let isBeantwoord = false; // Is er al geklikt op de vraag
let gekozenOptie = -1; // Welke knop is ingedrukt

let vragen = [
  {
    vraag: "Welke coureurs hebben (gedeeld) de meeste Formule 1-wereldtitels gewonnen??",
    opties: ["Senna & Prost", "Hamilton & Schumacher", "Verstappen & Vettel"],
    correct: 1,
  },
  {
    vraag: "Op welk beroemd circuit wordt de 24 uur van Le Mans gereden?",
    opties: ["Circuit de la Sarthe", "Spa Francorchamps", "Le Mans Street Circuit"],
    correct: 0,
  },
  {
    vraag: "Wat betekent de gele vlag tijdens een autorace?",
    opties: ["Race is gestopt", "Gevaar op de baan", "Race finish"],
    correct: 1,
  },
  {
    vraag: "Welk automerk heeft de meeste constructeurstitels gewonnen in de Formule 1?",
    opties: ["Mclaren", "Mercedes", "Ferarri"],
    correct: 2,
  },
  {
    vraag: "Hoe heet de beroemdste oval race in het Amerikaanse NASCAR kampioenschap?",
    opties: ["Indianapolis 500", "Daytona 500", "Bathurst 1000"],
    correct: 1,
  },
  {
    vraag: "In welk jaar pakte Max Verstappen zijn eerste wereldtitel in de Formule 1?",
    opties: ["2020", "2021", "2022"],
    correct: 1,
  },
  {
    vraag: "Welk land staat bekend om de rally stage van het WRC over ijs en sneeuw in de winter?",
    opties: ["Ijsland", "Frankrijk", "Zweden"],
    correct: 2,
  },
  {
    vraag: "Welke 3 klasses worden er gebruikt in het IMSA kampioenschap?",
    opties: ["GT3, LMP2 & GTP", "GT3, LMP2 & Hypercar", "GT3, GT4 & TCR"],
    correct: 0,
  },
  {
    vraag: "Welk type banden gebruiken Formule 1-auto's op een droge baan?",
    opties: ["slicks", "Inters", "Wets"],
    correct: 0,
  },
  {
    vraag: "Wat is de bekendste race op de IMSA kalender?",
    opties: ["Petit Le Mans", "24H at Daytona", "Road America 6H"],
    correct: 1,
  },
];

let huidigeVraag = 0;
let score = 0;

// Plaatjes en zo
let bgFoto;
let correctSound;
let wrongSound;

function preload() {
  bgFoto = loadImage("circuit.avif");
  correctSound = loadSound("correct.mp3");
  wrongSound = loadSound("wrong.mp3");
}

function setup() {
  createCanvas(1000, 600);
  userStartAudio();
}

function draw() {
  background(220);
  image(bgFoto, 0, 0, width, height);

  // Overlay voor betere leesbaarheid van tekst
  fill(0, 140);
  rect(0, 0, width, height);

  // 1ste scherm (start)
  if (schermStatus === "START") {
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text("MOTORSPORT QUIZ", width / 2, height / 2 - 80);

    textSize(18);
    text("Wat weet jij over motorsport?", width / 2, height / 2 - 30);

    // Start knop
    let knopX = width / 2 - 100;
    let knopY = height / 2 + 30;
    let isHover = mouseX > knopX && mouseX < knopX + 200 && mouseY > knopY && mouseY < knopY + 50;

    fill(isHover ? color(255, 204, 0) : 45);
    rect(knopX, knopY, 200, 50, 8);

    fill(isHover ? 0 : 255);
    textSize(20);
    text("START QUIZ", width / 2, knopY + 32);
  }

  // 2de shcerm (quiz)
  else if (schermStatus === "QUIZ") {
    let actieveVraag = vragen[huidigeVraag];

    // Timer logica
    if (!isBeantwoord) {
      timer -= deltaTime / 1000;

      if (timer <= 0) {
        timer = 0;
        isBeantwoord = true;
        gekozenOptie = -1; // Geen optie gekozen is fout
        wrongSound.play();
        setTimeout(volgendeVraag, 1200);
      }
    }

    // Tijdsbalk maken
    let balkBreedte = map(timer, 0, maxTijd, 0, 300);
    if (timer < 4) {
      fill(220, 50, 50); // Rood als de tijd bijna op is
    } else {
      fill(255, 204, 0); // Geel
    }
    rect(width / 2 - 150, 140, balkBreedte, 10, 5);

    // Vraag met opties maken
    fill(255);
    textSize(22);
    textAlign(CENTER);
    text(actieveVraag.vraag, width / 2, 80);

    for (let i = 0; i < actieveVraag.opties.length; i++) {
      let knopX = width / 2 - 150;
      let knopY = 180 + i * 70;
      let knopB = 300;
      let knopH = 50;

      let isHover = mouseX > knopX && mouseX < knopX + knopB && mouseY > knopY && mouseY < knopY + knopH;

      if (isBeantwoord) {
        if (i === actieveVraag.correct) {
          fill(0, 200, 80); // Groen voor goed antwoord
        } else if (i === gekozenOptie) {
          fill(220, 50, 50); // Rood voor jouw foute keuze
        } else {
          fill(60); // Grijs voor overige opties
        }
      } else {
        fill(isHover ? color(255, 204, 0) : 45);
      }

      rect(knopX, knopY, knopB, knopH, 8);

      fill(!isBeantwoord && isHover ? 0 : 255);
      textSize(16);
      text(actieveVraag.opties[i], width / 2, knopY + 30);
    }

    // Score onderin
    fill(255);
    textSize(18);
    text("Score: " + score, width / 2, height - 40);
  }

  // 3rde scherm (einde)
  else if (schermStatus === "EINDE") {
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text("Einde quiz!", width / 2, height / 2 - 80);

    textSize(24);
    text("Eindscore: " + score + " / " + vragen.length, width / 2, height / 2 - 20);

    // Speel Opnieuw Knop
    let knopX = width / 2 - 125;
    let knopY = height / 2 + 40;
    let isHover = mouseX > knopX && mouseX < knopX + 250 && mouseY > knopY && mouseY < knopY + 50;

    fill(isHover ? color(255, 204, 0) : 45);
    rect(knopX, knopY, 250, 50, 8);

    fill(isHover ? 0 : 255);
    textSize(20);
    text("Speel opnieuw", width / 2, knopY + 32);
  }
}

function mousePressed() {
  // Klikken op Startscherm
  if (schermStatus === "START") {
    let knopX = width / 2 - 100;
    let knopY = height / 2 + 30;

    if (mouseX > knopX && mouseX < knopX + 200 && mouseY > knopY && mouseY < knopY + 50) {
      resetQuiz();
      schermStatus = "QUIZ";
    }
  }

  // Klikken tijdens de Quiz
  else if (schermStatus === "QUIZ" && !isBeantwoord) {
    let actieveVraag = vragen[huidigeVraag];

    for (let i = 0; i < actieveVraag.opties.length; i++) {
      let knopX = width / 2 - 150;
      let knopY = 180 + i * 70;

      if (mouseX > knopX && mouseX < knopX + 300 && mouseY > knopY && mouseY < knopY + 50) {
        gekozenOptie = i;
        isBeantwoord = true;

        if (i === actieveVraag.correct) {
          score++;
          correctSound.play();
        } else {
          wrongSound.play();
        }

        setTimeout(volgendeVraag, 1200);
      }
    }
  }

  // Klikken op eindscherm (opnieuw Spelen)
  else if (schermStatus === "EINDE") {
    let knopX = width / 2 - 125;
    let knopY = height / 2 + 40;

    if (mouseX > knopX && mouseX < knopX + 250 && mouseY > knopY && mouseY < knopY + 50) {
      resetQuiz();
      schermStatus = "QUIZ";
    }
  }
}

function volgendeVraag() {
  huidigeVraag++;
  isBeantwoord = false;
  gekozenOptie = -1;
  timer = 10.0; // Reset timer voor volgende vraag

  if (huidigeVraag >= vragen.length) {
    schermStatus = "EINDE";
  }
}

function resetQuiz() {
  huidigeVraag = 0;
  score = 0;
  isBeantwoord = false;
  gekozenOptie = -1;
  timer = 10.0; // Reset timer bij herstart
}