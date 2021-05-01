class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<4){

        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(135,206,234);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visible=this.visible-5
        pop();
      }
    }
    score(){
       if(this.visible<0 && this.visible>-105){
        score++;
      }
    }
  };
  