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

let circleX = 400;
let circleY = 300;
let circleDiameter = 0;

let circleX2 = 400;
let circleY2 = 300;
let circleDiameter2 = 0;

let circleX3 = 400;
let circleY3 = 300;
let circleDiameter3 = 0;

let circleX4 = 400;
let circleY4 = 300;
let circleDiameter4 = 0;

let circleX5 = 400;
let circleY5 = 300;
let circleDiameter5 = 0;

let circleX6 = 400;
let circleY6 = 300;
let circleDiameter6 = 0;

function setup() {
  createCanvas(800, 600);

  gekozenKleur = random(kleuren);
}

function draw() {
  background(gekozenKleur);

  strokeWeight(3);
  stroke("white");
  noFill();

  // Teken de cirkels
  circle(circleX, circleY, circleDiameter);
  circle(circleX2, circleY2, circleDiameter2);
  circle(circleX3, circleY3, circleDiameter3);
  circle(circleX4, circleY4, circleDiameter4);
  circle(circleX5, circleY5, circleDiameter5);
  circle(circleX6, circleY6, circleDiameter6);

  // Laat ze groeien
  circleDiameter = circleDiameter + 4;
  ((circleDiameter2 = circleDiameter2 + 3), 5);
  circleDiameter3 = circleDiameter3 + 3;
  ((circleDiameter4 = circleDiameter4 + 2), 5);
  circleDiameter5 = circleDiameter5 + 2;
  ((circleDiameter6 = circleDiameter6 + 1), 5);

  if (circleDiameter > 1200) {
    circleDiameter = 0;
  }

  if (circleDiameter2 > 1200) {
    circleDiameter2 = 0;
  }

  if (circleDiameter3 > 1200) {
    circleDiameter3 = 0;
  }

  if (circleDiameter4 > 1200) {
    circleDiameter4 = 0;
  }

  if (circleDiameter5 > 1200) {
    circleDiameter5 = 0;
  }

  if (circleDiameter6 > 1200) {
    circleDiameter6 = 0;
  }

  noFill(false)
  fill("black")
  stroke("black")
  circle(400,300,10)
}

function keyPressed() {
  gekozenKleur;
  gekozenKleur = random(kleuren);
}
