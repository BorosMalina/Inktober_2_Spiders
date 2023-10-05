let spiderSize;

let posX = 100;
let posY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spiderSize = random(30, 100);
}

function draw() {
  background(0);

  fill(255, 100, 0);
  circle(posX, posY, spiderSize);

  let d = dist(posX, posY, mouseX, mouseY);
  /////////
  if (d > 100) {

    //horizontal movement
    if (posX < mouseX) {
      posX += 10;
    } else {
      posX -= 10;
    }

    //vertical movement
    if (posY < mouseY) {
      posY += 10;
    } else {
      posY -= 10;
    }

  }
  //////////
}
