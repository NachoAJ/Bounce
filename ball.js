function Ball(){

  this.x = width/2;
  this.y = 50;
  this. velocity = 0;
  this.gravity = 0.5;
  this.lift = -15;
  this.velocityx = 0;


  this.show = function(){
  fill(255);
  ellipse(this.x,this.y,20,20);
  }

  this.up = function() {
    this.velocity = this.lift;
  }

  this.bounce = function() {
    if(this.x < platform.x+50){
      this.velocityx += -(this.x - platform.x + 50)*0.005
      if(this.velocityx > 0){
        this.velocityx *= -1;
      }
    }
    if(this.x > platform.x+50){
      this.velocityx += (this.x - platform.x + 50)*0.005
      if(this.velocityx < 0){
        this.velocityx *= -1;
      }
    }


  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.x += this.velocityx;
    if (this.y > height){
      this.y = height;
      this.velocity = 0;
      this.velocityx = 0;
    }
    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
    if (this.x < 0 || this.x > width) {
      this.velocityx *= -1;
    }
  }
}
