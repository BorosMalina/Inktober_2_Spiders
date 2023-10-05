let spiderSize;

let posX=0;
let posY=0;
let spiderSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spiderSize = random(30, 90);
}

function draw() {
  background(0);
  frameRate(165);

  fill(255, 100, 0);
  circle(posX, posY, spiderSize);

  let d = dist(posX, posY, mouseX, mouseY);
  spiderSpeed = d / 60;

  if (d > spiderSize) {
    posX += (mouseX - posX) / spiderSize;
    posY += (mouseY - posY) / spiderSize;
  }

  fill(255);
  circle(posX+spiderSize/4, posY, spiderSize/4);
  circle(posX-spiderSize/4, posY, spiderSize/4);
}
