let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = [
  "elephant",
  "giraffe",
  "hippo",
  "monkey",
  "panda",
  "parrot",
  "penguin",
  "pig",
  "rabbit",
  "snake",
];

let buttons = []

function setup() {
  createCanvas(800, 400);

  let button = createButton('Klik mij');
  button.position(400, 200);
   for (let i = 0; i < 5; i++) {
  button.style('background-color', '#4CAF50');
   }
}

function draw() {
  background(220);

}
