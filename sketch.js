function setup() {
  createCanvas(1000,400);
  ball = new Ball();
  platform = new Platform();
  noCursor();
}

function draw() {
  background(200);

  ball.show();
  ball.update();

  platform.show();
  platform.update();



  if (platform.hits(ball)){
    ball.up();
    platform.count += 1;
    if (platform.record < platform.count){
      platform.record = platform.count;
    }
    print("hit");
    ball.bounce();
  }

  if (ball.y == height) {
    textSize(100);
    text('GAME OVER',200,200);
    
    if (keyIsPressed){
      ball.reset();
    }
  }
}
