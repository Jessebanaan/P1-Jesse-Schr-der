let rectW = 80;
let rectH = 80;

let vak1X = 50;
let vak1Y = 50;

let vak2X = 150;
let vak2Y = 50;

let vak3X = 250;
let vak3Y = 50;

let vak4X = 50;
let vak4Y = 150;

let vak5X = 150;
let vak5Y = 150;

let vak6X = 250;
let vak6Y = 150;

let vak7X = 50;
let vak7Y = 250;

let vak8X = 150;
let vak8Y = 250;

let vak9X = 250;
let vak9Y = 250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("blue")
  strokeWeight(0)
  rect(0,0,200,400)
  fill("red")
  rect(195,0,210,400)

      // AABB check: zit de muis in de rechthoek?
  if (
    mouseX > vak1X && mouseX < vak1X + rectW && 
    mouseY > vak1Y && mouseY < vak1Y + rectH
  ) {
    fill("red");   // kleur veranderen als muis binnen is
  } else {
    fill("blue");
  }
  
  strokeWeight(5)
  fill("#8a7f7f")
  rect(vak1X, vak1Y, rectW, rectH, 10)
  rect(vak2X, vak2Y, rectW, rectH, 10)
  rect(vak3X, vak3Y, rectW, rectH, 10)
  rect(vak4X, vak4Y, rectW, rectH, 10)
  rect(vak5X, vak5Y, rectW, rectH, 10)
  rect(vak6X, vak6Y, rectW, rectH, 10)
  rect(vak7X, vak7Y, rectW, rectH, 10)
  rect(vak8X, vak8Y, rectW, rectH, 10)
  rect(vak9X, vak9Y, rectW, rectH, 10)



  strokeWeight(0)
  fill("black")
  circle(mouseX, mouseY, 10);
}
