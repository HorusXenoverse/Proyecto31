class particle{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 2,
            isStatic:false
        }
        this.i = 10;
        this.body = Bodies.circle(x, y, this.i, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode();
        noStroke();
        fill("green");
        ellipseMode(RADIUS);
        ellipse(0,0,this.i,this.i);
        pop();
    }

   // this.color=color(random(0,255), random(0,255), random(0,255));
}