class SmallBLock{
    constructor(x, y, width, height, selector) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.selector = selector;
  
      this.image = loadImage("!wood objects/wood small block.png");
  
      World.add(world,this.body);
    }
  
    display(){
      var selector = null;
  
      if(this.selector == 1){
        selector = this.image;
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