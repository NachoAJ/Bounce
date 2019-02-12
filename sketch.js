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

  var i;

  for( i = 0; i <= 1000; i+=10){
    fill(0);
    triangle(i,height,i+5,height-15,i+10,height);

  }

  if(ball.gravity == 0){
    textSize(35);
    fill(255,0,0);
    text('Haz click para empezar',300,200);
    if (mouseIsPressed){
          ball.start();
    }
  }


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
    fill(255,0,0);
    textSize(100);
    text('GAME OVER',200,200);
    textSize(25);
    text('Haz click para reiniciar',365,250);
    if (mouseIsPressed){
      ball.reset();
    }
  }

}
