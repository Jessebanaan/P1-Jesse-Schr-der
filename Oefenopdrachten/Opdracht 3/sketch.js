let score = 89;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

if (score > 90) {
  fill("green")
  text("Uitstekend!", 50, 50);

} else if (score >= 70 && score <= 89) {
  fill("yellow")
  text("Goed gedaan!", 50, 50);

} else if (score >= 50 && score <= 69) {
  fill("orange")
  text("Voldoende", 50, 50);

} else {
  fill("red")
  text("Onvoldoende", 50, 50)
}
}
