class Ground{
    constructor(x,y,width,height){
        var options={
            isStatis:true,
            'restitution':0,
            'friction':0,
            'density':1,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.heigt=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTRE);
        Fill (255);
        rect(this.body.position.x,this.body.positiony,this.width,this.height);
    }
}