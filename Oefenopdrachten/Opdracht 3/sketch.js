let score = 40;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

if (score > 90) {
    text("Uitstekend!", 50, 50);
} else if (score > 70 && score < 89) {
    text("Goed gedaan!", 50, 50);
} else if (score > 50 && score < 69) {
    text("Voldoende", 50, 50);
} else {
    text("Onvoldoende", 50, 50)
}
}
