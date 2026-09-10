function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  //Mijn volledige naam
  text("1. Naam", 20, 50)
  background(220);
  fill("black")
  text("Jesse Schröder", 50, 50);

  //Nederlandse vlag
  text("2. Nederlandse vlag", 40, 90)
  strokeWeight(0)
  fill("red")
  rect(50,100,100,30)
  fill("white")
  rect(50,130,100,30)
  fill("blue")
  rect(50,160,100,30)


  //Schaakbord
  fill("black")
  text("3. Schaakbord", 50, 240)
  strokeWeight(3)
  fill("white")
  rect(50,250,90,90)
  fill("black")
  rect(50,250,30,30)
  rect(80,280,30,30)
  rect(110,310,30,30)
  rect(50,310,30,30)
  rect(110,250,30,30)

  //Transparant huis
  text("4. Transparant huis", 40, 390)
  fill(220)
  rect(50,450,100,100)
  line(50,450,100,400)
  line(150,450,100,400)

  //Verkeerslicht
  fill("black")
  text("5. Verkeerslicht", 300, 40)
  strokeWeight(0)
  fill(100)
  rect(300,50,80,240)
  rect(320,250,40,100)
  fill("red")
  circle(340,100,60)
  fill("orange")
  circle(340,170,60)
  fill("green")
  circle(340,240,60)

  //Dobbelsteen
  fill("black")
  text("6. Dobbelsteen", 300, 380)
  strokeWeight(3)
  fill("white")
  square(300,400,100,20)
  fill("black")
  circle(350,450,25)
  circle(375,475,25)
  circle(325,425,25)

  //Mario
  text("7. Mario", 600, 30)
  strokeWeight(0)
  fill("brown")
  square(600,100,25)
  square(600,150,25)
  square(600,125,25)
  square(600,400,25)
  square(675,400,25)
  fill("pink")
  square(625,100,25)
  fill("red")
  square(600,75,25)
  square(625,75,25)
  square(650,75,25)
  square(675,75,25)
  square(700,75,25)
  square(725,75,25)
  square(675,50,25)
  square(650,50,25)
  square(625,50,25)
  fill("pink")
  square(650,100,25)
  square(675,100,25)
  square(675,125,25)
  square(675,150,25)
  square(650,150,25)
  square(625,150,25)
  square(625,125,25)
  square(650,175,25)
  square(625,175,25)
  fill("black")
  square(650,125,25)
  fill("red")
  square(675,200,25)
  square(650,200,25)
  square(625,200,25)
  square(600,200,25)
  square(700,225,25)
  square(575,225,25)
  square(575,250,25)
  square(575,275,25)
  square(575,300,25)
  square(600,325,25)
  square(625,325,25)
  square(650,325,25)
  square(675,325,25)
  square(700,300,25)
  square(700,275,25)
  square(700,250,25)
  fill("blue")
  square(675,350,25)
  square(675,375,25)
  square(600,350,25)
  square(600,375,25)
  fill("pink")
  square(550,250,25)
  square(550,275,25)
  square(725,250,25)
  square(725,275,25)

  //square als binnenkant van de buik
  fill("red")
  square(600,225,100)

  //Ander game karakter namelijk minecraft mens
  fill("black")
  text("7. Ander karakter", 650, 480)
  fill("pink")
  square(700,500,100)
  
  fill("brown")
  rect(700,500,100,25)
  fill("black")
  square(710,530,20)
  square(770,530,20)
  rect(715,570,70,10)
  square(680,760,50)
  square(770,760,50)

  fill("darkblue")
  square(680,600,140)

  fill("green")
  square(680,740,50)
  square(770,740,50)

  //Extra opdracht auto
  fill("black")
  text("Extra opdracht", 100, 730)
  fill("red");
  rect(150, 800, 120, 50);
  
  rect(180, 760, 60, 40);
  
  // Wielen
  fill(0); 
  circle(175, 850, 30);
  circle(245, 850, 30);
}
