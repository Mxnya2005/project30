class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255
    }
    display(){
      if (this.body.speed<3){
 super.display() 
      }
      else{World.remove(world,this.body)
      this.visibility=this.visibility-5}
    }
  };
  