class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,65,50);
    this.image = loadImage("sprites/angry bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];

    this.Visibility = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 220){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility = this.Visibility - 0.3;
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}