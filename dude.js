class Super {
    constructor(x, y, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, 400, 300, options);
      this.width = 400;
      this.height = 300;
      this.image = loadImage("images/Superhero-01.png");
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }