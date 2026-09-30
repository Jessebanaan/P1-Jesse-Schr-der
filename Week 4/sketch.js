let gekozenKleur;

let kleuren = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "black",
  "grey",
  "brown",
  "purple",
];

let diameters = [0, 0, 0, 0, 0, 0, 0, 0];
let snelheden = [4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5];

function setup() {
  createCanvas(800, 600, WEBGL);
  gekozenKleur = random(kleuren);
}

function draw() {
  background(gekozenKleur);

  orbitControl();

  // RINGEN TEKENEN
  strokeWeight(3);
  noFill();

  for (let i = 0; i < diameters.length; i++) {
    let alpha = map(diameters[i], 0, 500, 255, 0);
    alpha = constrain(alpha, 0, 255);

    stroke(255, 255, 255, alpha);
    circle(0, 0, diameters[i]);

    diameters[i] += snelheden[i];
    if (diameters[i] > 500) {
      diameters[i] = 0;
    }
  }

  // CENTRALE BAL (ZON)
  push();
    fill("yellow");
    stroke("orange");
    strokeWeight(1);
    ellipsoid(40); // Iets groter gemaakt
  pop();

  push();
    translate(200, 0, 0); 
    fill("cyan");
    stroke("blue");
    ellipsoid(15);
  pop();

  push();
    translate(-150, -100, -50);
    stroke("white");
    ellipsoid(20);
  pop();
}

function keyPressed() {
  gekozenKleur = random(kleuren);
}