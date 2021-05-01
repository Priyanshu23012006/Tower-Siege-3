class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA) {
            var endA = this.chain.bodyA.position;
        var endB = this.chain.pointB;
        strokeWeight(4);
        fill(82,226,181);
        line(endA.x, endA.y, endB.x, endB.y);  
        }
      
    }
    fly() {
        this.chain.bodyA=null
    }
}