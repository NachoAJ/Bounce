function setup() {
  createCanvas(1000,400);
  ball = new Ball();
  platform = new Platform();
  noCursor();
}

function draw() {
  background(220);

  this.count = 0;

  ball.show();
  ball.update();

  platform.show();
  platform.update();

  if (platform.hits(ball)){
    ball.up();
    platform.count += 1;
    print("hit");
    ball.bounce();
  }
}
