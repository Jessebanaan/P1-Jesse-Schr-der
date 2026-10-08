// Scherm status ("START", "QUIZ" of "EINDE")
let schermStatus = "START";

// Tijd/timer dingen
let timer = 10.0;   // 10 seconden per vraag
let maxTijd = 10.0;

let isBeantwoord = false; // Is er al geklikt op de vraag
let gekozenOptie = -1;    // Welke knop is ingedrukt

// === 10 MAKKELIJKE VRAGEN ===
let makkelijkeVragen = [
  {
    vraag: "Wat betekent de gele vlag tijdens een autorace?",
    opties: ["Race is gestopt", "Gevaar op de baan", "Race finish"],
    correct: 1,
  },
  {
    vraag: "Welk type banden gebruiken Formule 1-auto's op een droge baan?",
    opties: ["Slicks", "Inters", "Wets"],
    correct: 0,
  },
  {
    vraag: "In welk jaar pakte Max Verstappen zijn eerste wereldtitel in de F1?",
    opties: ["2020", "2021", "2022"],
    correct: 1,
  },
  {
    vraag: "Welke coureurs hebben (gedeeld) de meeste F1-wereldtitels gewonnen?",
    opties: ["Senna & Prost", "Hamilton & Schumacher", "Verstappen & Vettel"],
    correct: 1,
  },
  {
    vraag: "Hoe heet de beroemdste oval race in het Amerikaanse NASCAR-kampioenschap?",
    opties: ["Indianapolis 500", "Daytona 500", "Bathurst 1000"],
    correct: 1,
  },
  {
    vraag: "Welke kleur vlag wordt er gezwaaid als een race is afgelopen?",
    opties: ["Rode vlag", "Gele vlag", "Zwart-wit geblokte vlag"],
    correct: 2,
  },
  {
    vraag: "Wat gebeurt er als de zwarte vlag wordt gezwaaid tijdens een race?",
    opties: ["Diskwalificatie", "Inhalen is toegestaan", "Er rijdt een safety car op de baan"],
    correct: 0,
  },
  {
    vraag: "Welk nummer gebruikte Max Verstappen als wereldkampioen op zijn F1-auto?",
    opties: ["33", "1", "3"],
    correct: 1,
  },
  {
    vraag: "In welk land ligt het beroemde F1-circuit Portimao?",
    opties: ["Spanje", "Portugal", "Mexico"],
    correct: 1,
  },
  {
    vraag: "Wat betekent DRS in de Formule 1?",
    opties: ["Drag Reduction System", "Direct Race Steering", "Driver Recovery System"],
    correct: 0,
  }
];

// === 10 GEMIDDELDE VRAGEN ===
let gemiddeldeVragen = [
  {
    vraag: "Op welk beroemd circuit wordt de 24 uur van Le Mans gereden?",
    opties: ["Circuit de la Sarthe", "Spa Francorchamps", "Le Mans Street Circuit"],
    correct: 0,
  },
  {
    vraag: "Welk automerk heeft de meeste constructeurstitels gewonnen in de F1?",
    opties: ["McLaren", "Mercedes", "Ferrari"],
    correct: 2,
  },
  {
    vraag: "Welk land staat bekend om de WRC-rally over ijs en sneeuw in de winter?",
    opties: ["IJsland", "Frankrijk", "Zweden"],
    correct: 2,
  },
  {
    vraag: "Wat is de bekendste 24-uursrace op de Amerikaanse IMSA-kalender?",
    opties: ["Petit Le Mans", "24H at Daytona", "Road America 6H"],
    correct: 1,
  },
  {
    vraag: "Hoe heet het bekende Italiaanse circuit dat ook wel 'Temple of Speed' heet?",
    opties: ["Monza", "Imola", "Mugello"],
    correct: 0,
  },
  {
    vraag: "Wat is de bijnaam van de uitdagende Nürburgring Nordschleife?",
    opties: ["Green Hell", "The Concrete Monster", "De Red Horse"],
    correct: 0,
  },
  {
    vraag: "Welke beroemde race vormt samen met de F1 GP van Monaco en Le Mans de 'Triple Crown'?",
    opties: ["Daytona 500", "Indianapolis 500", "Bathurst 1000"],
    correct: 1,
  },
  {
    vraag: "Op welk iconisch Belgisch circuit vind je de beroemde bochtencombinatie Eau Rouge?",
    opties: ["Zolder", "Spa-Francorchamps", "Circuit Du France"],
    correct: 1,
  },
  {
    vraag: "Wat voor soort motoren worden er tegenwoordig gebruikt in de Formule 1?",
    opties: ["V8 Atmosferisch", "V10 Hybride", "V6 Turbo Hybride"],
    correct: 2,
  },
  {
    vraag: "Welk automerk won in 2023 de 24 Uur van Le Mans bij hun terugkeer in de topklasse?",
    opties: ["Porsche", "Ferrari", "Toyota"],
    correct: 1,
  }
];

//Moeilijke vragen
let moeilijkeVragen = [
  {
    vraag: "Welke 3 klasses worden er gebruikt in het IMSA-kampioenschap?",
    opties: ["GT3, LMP2 & GTP", "GT3, LMP2 & Hypercar", "GT3, GT4 & TCR"],
    correct: 0,
  },
  {
    vraag: "Hoe heet het 6 km lange rechte stuk op het Circuit de la Sarthe?",
    opties: ["Main Straight", "Tetre Rouge", "Mulsanne Straight"],
    correct: 2,
  },
  {
    vraag: "Door welke klasse is de GTE-klasse vervangen in 2024?",
    opties: ["LMGT3", "Hypercar", "Supercar"],
    correct: 0,
  },
  {
    vraag: "Hoe vaak heeft Porsche de 24 uur van Le Mans in totaal gewonnen?",
    opties: ["11 keer", "19 keer", "30 keer"],
    correct: 1,
  },
  {
    vraag: "Wat is de naam van de populaire 125cc 2 takt schakelklasse in het karten?",
    opties: ["Senior Max", "DD2", "KZ2"],
    correct: 2,
  },
  {
    vraag: "Wat betekent de blauwe vlag met een geel kruis in de Amerikaanse IndyCar?",
    opties: ["Laagste categorie op de baan", "Snelheidslimiet in de pits", "Je wordt op een ronde gezet"],
    correct: 2,
  },
  {
    vraag: "Wat is de minimale gewichts eis (inclusief coureur) van een 2024 F1-auto?",
    opties: ["752 kg", "798 kg", "820 kg"],
    correct: 1,
  },
  {
    vraag: "Welk circuit heeft de beroemde steile bocht genaamd 'Krausel-Eichen'?",
    opties: ["Nürburgring Nordschleife", "Hockenheim ring", "Oscherleben"],
    correct: 0,
  },
  {
    vraag: "Wat is de maximale snelheid die is toegestaan in de F1 pitstraat tijdens de race?",
    opties: ["60 km/h", "80 km/h", "100 km/h"],
    correct: 1,
  },
  {
    vraag: "Hoe heet de steile, beroemde bocht op het circuit van Laguna Seca?",
    opties: ["The Corkscrew", "Eau Rouge", "Spoon Curve"],
    correct: 0,
  }
];

// Deze lijst bevat de willekeurig vragen van de gekozen moeilijkheid
let actieveVragenLijst = [];

let huidigeVraag = 0;
let score = 0;

// Plaatjes en geluiden
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

  //1ste scherm start waar je moeilijkheid kan kiezen
  if (schermStatus === "START") {
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text("MOTORSPORT QUIZ", width / 2, height / 2 - 100);

    textSize(18);
    text("Kies je moeilijkheidsgraad:", width / 2, height / 2 - 40);

    // Knoppen voor de 3 gamemodes
    let niveaus = ["EASY", "MEDIUM", "HARD"];
    let kleuren = [color(0, 200, 80), color(255, 204, 0), color(220, 50, 50)];

    for (let i = 0; i < niveaus.length; i++) {
      let knopX = width / 2 - 225 + i * 150;
      let knopY = height / 2 + 10;
      let knopB = 130;
      let knopH = 50;

      let isHover = mouseX > knopX && mouseX < knopX + knopB && mouseY > knopY && mouseY < knopY + knopH;

      fill(isHover ? kleuren[i] : 45);
      rect(knopX, knopY, knopB, knopH, 8);

      fill(isHover ? 0 : 255);
      textSize(18);
      text(niveaus[i], knopX + knopB / 2, knopY + 32);
    }
  }

  // 2de scherm de quiz
  else if (schermStatus === "QUIZ") {
    let actieveVraag = actieveVragenLijst[huidigeVraag];

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

    // --- TIJDSBALK TEKENEN ---
    let balkBreedte = map(timer, 0, maxTijd, 0, 300);
    if (timer < 4) {
      fill(220, 50, 50); // Rood als er nog minder dan 4 sec over zijn
    } else {
      fill(255, 204, 0); // Geel
    }
    rect(width / 2 - 150, 130, balkBreedte, 10, 5);

    // Vragen en antwoorden maken
    fill(255);
    textSize(22);
    textAlign(CENTER);
    text(actieveVraag.vraag, width / 2, 80);

    for (let i = 0; i < actieveVraag.opties.length; i++) {
      let knopX = width / 2 - 150;
      let knopY = 170 + i * 70;
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
    text("Score: " + score + " / " + actieveVragenLijst.length, width / 2, height - 40);
  }

  // 3de scherm eindscherm
  else if (schermStatus === "EINDE") {
    fill(255);
    textSize(36);
    textAlign(CENTER);
    text("Einde quiz!", width / 2, height / 2 - 80);

    textSize(24);
    text("Eindscore: " + score + " / " + actieveVragenLijst.length, width / 2, height / 2 - 20);

    // Speel opnieuw Knop
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
  // Klik op startscherm bijv gamemode
  if (schermStatus === "START") {
    let niveaus = ["EASY", "MEDIUM", "HARD"];

    for (let i = 0; i < niveaus.length; i++) {
      let knopX = width / 2 - 225 + i * 150;
      let knopY = height / 2 + 10;
      let knopB = 130;
      let knopH = 50;

      if (mouseX > knopX && mouseX < knopX + knopB && mouseY > knopY && mouseY < knopY + knopH) {
        startQuiz(niveaus[i]);
      }
    }
  }

  // Klikken op de quiz bijv het antwoords
  else if (schermStatus === "QUIZ" && !isBeantwoord) {
    let actieveVraag = actieveVragenLijst[huidigeVraag];

    for (let i = 0; i < actieveVraag.opties.length; i++) {
      let knopX = width / 2 - 150;
      let knopY = 170 + i * 70;

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

  // Klik op eindscherm namelijk opnieuw spelen
  else if (schermStatus === "EINDE") {
    let knopX = width / 2 - 125;
    let knopY = height / 2 + 40;

    if (mouseX > knopX && mouseX < knopX + 250 && mouseY > knopY && mouseY < knopY + 50) {
      schermStatus = "START"; // Terug naar het menu om weer een gamemode te kiezen
    }
  }
}

function startQuiz(gekozenNiveau) {
  // laat vrgane weer opnieuw willekeurig komen en zo
  if (gekozenNiveau === "EASY") {
    actieveVragenLijst = shuffle(makkelijkeVragen);
  } else if (gekozenNiveau === "MEDIUM") {
    actieveVragenLijst = shuffle(gemiddeldeVragen);
  } else if (gekozenNiveau === "HARD") {
    actieveVragenLijst = shuffle(moeilijkeVragen);
  }

  resetQuiz();
  schermStatus = "QUIZ";
}

function volgendeVraag() {
  huidigeVraag++;
  isBeantwoord = false;
  gekozenOptie = -1;
  timer = 10.0; // Reset timer voor volgende vraag

  if (huidigeVraag >= actieveVragenLijst.length) {
    schermStatus = "EINDE";
  }
}

function resetQuiz() {
  huidigeVraag = 0;
  score = 0;
  isBeantwoord = false;
  gekozenOptie = -1;
  timer = 10.0; // Reset timer bij start
}