let x = 200;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(230);
  fill(120, 255, 0);
  ellipse(x, 320, 80);

  fill(255, 100, 0);
  ellipse(x, 120, 80);

  x = x + 1;
  x = x + 1;
}
