class Dustbin{
    constructor(x,y,width,height){
    var options={
        'restituion':0,
        'friction':1,
        'density':0.1,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
}

display(){
rectMode(CENTRE)
Fill(255);
rect(this.body.position.x,this.body.postion.y,this.width,this.height);
}
}
