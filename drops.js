class Drops{
    constructor(x,y){
        var options = {
            isStatic:false,
            'friction':0.1
        }
        this.x=x;
        this.y=y;
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world,this.rain);
    }

    update(){
        if(this.rain.position.y > height){
           Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)}) 
        }
    }
    display(){
        var dPos=this.rain.position;
    
        fill("blue");
        ellipseMode(CENTER);
        ellipse(dPos.x,dPos.y,5);
    }
}