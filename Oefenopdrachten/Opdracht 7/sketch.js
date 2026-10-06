let namen = [
  ['Ngai', 'Opa Vano', 'Jesse', 'Mieles', 'Bliss']
];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let index = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (index % 2 == 0){
        fill(255)
      } else {
        fill(0)
      }
      square(j * 60 + 35, i * 60 + 35, 60);
      fill(255,0,0)
      text(index, j * 60 + 35, i * 60 + 45)
      text(namen, j * 60 + 35, i * 60 + 45)
    
      index++;
    }
  }
}
