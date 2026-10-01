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
let snelheden = [3, 2.75, 2.5, 2.25, 2, 1.75, 1.5, 1.25];

let sterren = [];

function setup() {
  createCanvas(800, 600, WEBGL);
  gekozenKleur = random(kleuren);

  // sterren op random plek
  for (let i = 0; i < 200; i++) {
    let ster = {
      x: random(-4000, 4000),
      y: random(-4000, 4000),
      z: random(-4000, 4000),
    };
    sterren.push(ster);
  }
}

function draw() {
  background("black");

  orbitControl();

  // sterren tekenen
  stroke("white");
  strokeWeight(2);

  for (let i = 0; i < sterren.length; i++) {
    push();
    translate(sterren[i].x, sterren[i].y, sterren[i].z);
    point(0, 0, 0);
    pop();
  }

  // Ringen tekenen
  strokeWeight(3);
  noFill();

  for (let i = 0; i < diameters.length; i++) {
    let alpha = map(diameters[i], 0, 300, 255, 0);
    alpha = constrain(alpha, 0, 255);

    stroke(255, 255, 0, alpha);
    circle(0, 0, diameters[i]);

    diameters[i] += snelheden[i];
    if (diameters[i] > 500) {
      diameters[i] = 0;
    }
  }

  // planeten tekenen
  fill(gekozenKleur)
  // Zon
  push();
  fill("yellow");
  stroke("orange");
  strokeWeight(1);
  ellipsoid(40);
  pop();

  // Planeet
  push();
  translate(200, 0, 50);
  fill("cyan");
  stroke("blue");
  ellipsoid(15);
  pop();

  // Maan
  push();
  translate(100, 0, 200);
  fill("white");
  ellipsoid(25);
  pop();

  // Uranus
  push();
  translate(-50, 0, -200);
  fill("red");
  stroke("red");
  ellipsoid(10);
  pop();

  // Aarde
  push();
  translate(-200, 0, 100);
  fill("green");
  stroke("green");
  ellipsoid(25);
  pop();

  // Grote zon/ster
  push();
  translate(-500, 0, 800);
  fill("white");
  stroke("white");
  ellipsoid(85);
  pop();

  // Grote zon/ster
  push();
  translate(500, 0, -800);
  fill("white");
  stroke("white");
  ellipsoid(85);
  pop();

  // Grote zon/ster
  push();
  translate(2000, 0, 2800);
  fill("white");
  stroke("white");
  ellipsoid(85);
  pop();

    // Grote zon/ster
  push();
  translate(2000, 0, 1000);
  fill("yellow");
  stroke("yellow");
  ellipsoid(85);
  pop();
}

function keyPressed (){
}