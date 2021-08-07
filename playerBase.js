class playerBase{
  constructor(x,y,w,h){
    var options = {
        isStatic : true
      }
      this.w = w
      this.h = h
      this.body = Bodies.rectangle(x,y,w,h,options)
      this.Image = loadImage("assets/base1.png")
      
      World.add(world,this.body)
      }
      show(){
        var pos = this.body.position
        var angle = this.body.angle
  
        imageMode(CENTER)
        image(this.Image,pos.x,pos.y,this.w,this.h)
       
      }
  } 

