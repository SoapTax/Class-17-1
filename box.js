class Box
  {
    constructor(x,y,w,h,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vy = vy;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move()
    {
      this.y = this.y+this.vy;
    }
bounce(){
  if(this.y<0 || this.y > height){
    this.vy = -(this.vy)
  }
}
  }

  
