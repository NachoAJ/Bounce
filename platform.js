function Platform() {
  this.x = (width/2)-50;
  this.y = height-50;
  this.count = 0;
  this.record = 0;

  this.show = function(){
    fill(255,0,0);
    rect(this.x,this.y,100,10);
  }

  this.update = function() {
    textSize(32);
    text('Puntos: '+this.count,20,50);
    text('Record: '+this.record,20,80);
    this.x = mouseX-50;
  //  this.y = mouseY;
  }


  this.hits = function(ball){
    if (ball.y+10 > this.y && ball.y < this.y){
      if (ball.x > this.x && ball.x < this.x + 100){
        return true;
      }
    }
    return false;
  }
}
