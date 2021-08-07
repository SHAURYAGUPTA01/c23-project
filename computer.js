class Computer{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
          }
          this.w = w
          this.h = h
          this.body = Bodies.rectangle(x,y,w,h,options)
          this.image = loadImage("assets/player.png")
          
          World.add(world,this.body)
          }
          show(){
            var pos = this.body.position
            var angle = this.body.angle
      
           
            imageMode(CENTER)
            image(this.image,pos.x,pos.y,this.w,this.h)
           
          }
    }
