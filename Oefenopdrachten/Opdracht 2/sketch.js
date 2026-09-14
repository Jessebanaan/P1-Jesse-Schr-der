let x = 100;
let greeting = "Hello world!"

let a = 20;
let b = 10;

let optellen = 30;
let aftrekken = 10;
let vermenigvuldigen = 200;
let delen = 2;

// 20 + 10 = 30
optellen = a + b;
// 20 - 10 = 10
aftrekken = a - b;
// 20 * 10 = 200
vermenigvuldigen = a * b;
// 20 / 10 = 2
delen = a / b;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text(x, 20, 20)
  text(greeting, 20, 60)

  text(optellen, 20, 80)
  text(aftrekken, 20, 100)
  text(vermenigvuldigen, 20, 120)
  text(delen, 20, 140)
}
