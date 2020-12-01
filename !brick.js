class Brick{
    constructor(x, y, width, height, angle, selector) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.selector = selector;
  
      this.image = loadImage("!wood objects/wood brick.png");
      this.image2 = loadImage("!stone objects/stone brick.png");
      this.image3 = loadImage("!glass objects/glass brick.png");

      Matter.Body.setAngle(this.body,angle);
  
      World.add(world,this.body);
    }
  
    display(){
      var selector = null;
  
      if(this.selector == 1){
        selector = this.image;
      }
  
      if(this.selector == 2){
        selector = this.image2;
      }
  
      if(this.selector == 3){
        selector = this.image3;
      }
  
      var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(selector, 0, 0, this.width, this.height);
          pop();
    }
  }