let spiderSize;

let posX=0;
let posY=0;
let spiderSpeed;
let legPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spiderSize = random(30, 90);
}

function draw() {
  background(0);


  fill(255, 100, 0);
  stroke(255,100,0);
  strokeWeight(10);
  circle(posX, posY, spiderSize);

  let d = dist(posX, posY, mouseX, mouseY);
  spiderSpeed = d / 60;
  legPos = random(posX,posX);

  if (d > spiderSize) {
    posX += (mouseX - posX) / spiderSize;
    posY += (mouseY - posY) / spiderSize;
  }

  let eyeLeft = posX+spiderSize/5;
  let eyeRight = posX-spiderSize/5;

  fill(255);
  stroke(0);
  strokeWeight(1);
  circle(posX+spiderSize/5, posY, spiderSize/4);
  circle(posX-spiderSize/5, posY, spiderSize/4);

  let eyeLeftDirectionX = eyeLeft - mouseX;
  let eyeLeftDirectionY = posY - mouseY;
  
  let eyeLeftDirectionLen = sqrt(eyeLeftDirectionX*eyeLeftDirectionX+eyeLeftDirectionY*eyeLeftDirectionY);
  eyeLeftDirectionX = eyeLeftDirectionX / eyeLeftDirectionLen;
  eyeLeftDirectionY = eyeLeftDirectionY / eyeLeftDirectionLen;

  let eyeRightDirectionX = eyeRight - mouseX;
  let eyeRightDirectionY = posY - mouseY;

  let eyeRightDirectionLen = sqrt(eyeRightDirectionX*eyeRightDirectionX+eyeRightDirectionY*eyeRightDirectionY);
  eyeRightDirectionX = eyeRightDirectionX / eyeRightDirectionLen;
  eyeRightDirectionY = eyeRightDirectionY / eyeRightDirectionLen;

  //spider eyes
  fill(0);
  circle(eyeLeft + eyeLeftDirectionX * -4, posY + eyeLeftDirectionY * -4, spiderSize/8);
  circle(eyeRight + eyeRightDirectionX * -4, posY + eyeRightDirectionY * -4, spiderSize/8);

  fill(255, 20, 0);
  stroke(0);
  strokeWeight(1);
  circle(posX,posY+spiderSize/4, spiderSize/8);

  stroke(255,100,0);
  strokeWeight(6);
  line(posX-spiderSize/2.2, posY+spiderSize/2.8, posX-spiderSize, posY+spiderSize+10*sin((millis()/map(d,spiderSize,1000,500,50))));
  line(posX+spiderSize/2.2, posY+spiderSize/2.8, posX+spiderSize, posY+spiderSize+10*sin((millis()/map(d,spiderSize,1000,500,50))));

  line(posX-spiderSize/2, posY+spiderSize/6, posX-spiderSize-20, posY+spiderSize+5*cos((millis()/map(d,spiderSize,1000,500,50))));
  line(posX+spiderSize/2, posY+spiderSize/6, posX+spiderSize+20, posY+spiderSize+5*cos((millis()/map(d,spiderSize,1000,500,50))));

  line(posX-spiderSize/2, posY-spiderSize/8, posX-spiderSize-20, posY-30+spiderSize+3*sin((millis()/map(d,spiderSize,1000,500,50))));
  line(posX+spiderSize/2, posY-spiderSize/8, posX+spiderSize+20, posY-30+spiderSize+3*sin((millis()/map(d,spiderSize,1000,500,50))));


  angleMode(DEGREES);
  noFill();
  stroke(255, 100, 0);
  strokeWeight(6);
  arc(posX, posY+spiderSize/2.2, spiderSize/1.5, spiderSize/1.5, -10, 60, OPEN);
  arc(posX, posY+spiderSize/2.2, spiderSize/1.5, spiderSize/1.5, 120, 190, OPEN);
  angleMode(RADIANS);



 
}
