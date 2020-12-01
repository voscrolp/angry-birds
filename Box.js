class Box{
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

    this.image = loadImage("sprites/wood1.png");
    this.image2 = loadImage("sprites/stone block.png");
    this.image3 = loadImage("sprites/ice blok (1).png");

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
};
