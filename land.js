class Land{
    constructor(x,y,width,height){
        var options = {

        }
        this.image = loadImage("images/land.png");
        this.body = Bodies.rectangle(x,y,width,height)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
       // rect(pos.x,pos.y,this.width,this.height)
        image(this.image,pos.x,pos.y,this.width,this.height)
    
    }
}