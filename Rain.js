class Rain{
    constructor(x,y){
    var options ={
        restitution:0.4,
        isStatic:false

        
    } 
    
    this.body=Bodies.circle(x,y,2,options);
   
    World.add(world,this.body);
    
    
    }
    display(){

        var pos =this.body.position;
        var angle=this.body.angle;

     

      
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,3,3);
        pop();
      
      
      
      
       
    
    
        
    
    
    
    }
    
    
    }