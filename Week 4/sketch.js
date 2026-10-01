let gekozenKleur;

let kleuren = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "grey",
  "brown",
  "purple",
];

// Arrays voor de ringen
let diameters = [0, 0, 0, 0, 0, 0, 0, 0];
let snelheden = [3, 2.75, 2.5, 2.25, 2, 1.75, 1.5, 1.25];

let sterren = [];

let mijnGeluid;

function preload() {
  mijnGeluid = loadSound("freesound_community-ufo-landing-93632.mp3");
}

function setup() {
  createCanvas(800, 600, WEBGL);

  // Kies kleur bij start
  gekozenKleur = random(kleuren);

  // Genereer 200 sterren op willekeurige locatie
  for (let i = 0; i < 400; i++) {
    let ster = {
      x: random(-4000, 4000), // Willekeurige X-positie
      y: random(-4000, 4000), // Willekeurige Y-positie
      z: random(-4000, 4000), // Willekeurige Z-positie
    };
    sterren.push(ster);
  }
}

function draw() {
  // Maak de achtergrond zwart
  background("black");

  // Maakt het mogelijk om met de muis in de 3D-wereld rond te kijken en te zoomen
  orbitControl();

  // Sterren tekenen
  stroke("white");
  strokeWeight(2);

  for (let i = 0; i < sterren.length; i++) {
    push();
    translate(sterren[i].x, sterren[i].y, sterren[i].z);
    point(0, 0, 0); // Teken een ster op de locatie
    pop();
  }

  // Ringen tekenen
  strokeWeight(3); // Maak de lijnen van de ringen 3 pixels dik
  noFill();

  for (let i = 0; i < diameters.length; i++) {
    // Bereken de transparantie
    let alpha = map(diameters[i], 0, 300, 255, 0);
    alpha = constrain(alpha, 0, 255);

    stroke(255, 255, 0, alpha); // Geel met berekende transparantie
    circle(0, 0, diameters[i]); // Teken de cirkel in het midden van het canvas

    // Laat de ring groeien
    diameters[i] += snelheden[i];

    // Als de ring te groot wordt maak hem weer klein
    if (diameters[i] > 1000) {
      diameters[i] = 0;
    }
  }

  // Stroke weight 0 zodat je geen rare strepen ziet op de bollen
  strokeWeight(0);

  // Zon in het midden
  push();
  fill("yellow");
  strokeWeight(1);
  ellipsoid(40);
  pop();

  // Planeten
  push();
  translate(200, 0, 50);
  fill(gekozenKleur);
  ellipsoid(15);
  pop();

  push();
  translate(100, 0, 200);
  fill(gekozenKleur);
  ellipsoid(25);
  pop();

  push();
  translate(-50, 0, -200);
  fill(gekozenKleur);
  ellipsoid(10);
  pop();

  push();
  translate(-200, 0, 100);
  fill(gekozenKleur);
  ellipsoid(25);
  pop();

  push();
  translate(-500, 0, 800);
  fill(gekozenKleur);
  ellipsoid(85);
  pop();

  push();
  translate(500, 0, -800);
  fill(gekozenKleur);
  ellipsoid(85);
  pop();

  push();
  translate(2000, 0, 2800);
  fill(gekozenKleur);
  ellipsoid(85);
  pop();

  push();
  translate(2000, 0, 1000);
  fill(gekozenKleur);
  ellipsoid(85);
  pop();
}

function keyPressed() {
  // Controleer of de ingedrukte toets de Backspace-toets is
  if (keyCode === BACKSPACE) {
    // Kies een nieuwe willekeurige kleur
    gekozenKleur = random(kleuren);

    if (mijnGeluid.isPlaying()) {
      mijnGeluid.play();
    } else {
      mijnGeluid.play();
    }
  }
}
