class Slingshot{
  constructor(bodyA,bodyB){

    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length:10,
    }
this.Slingshot=Constraint.create(options)
World.add(world, this.Slingshot)
  }
 display(){
     var plotA=this.Slingshot.bodyA.position;
     var plotB=this.Slingshot.bodyB.position;
     
     strokeWeight(5);
     line(plotA.x,plotA.y,plotB.x,plotB.y);
 }

}