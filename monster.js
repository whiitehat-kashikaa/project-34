class Monster{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 400, 300);
        this.width = 400;
        this.height = 300;
        this.image = loadImage("Monster-02.png");
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
