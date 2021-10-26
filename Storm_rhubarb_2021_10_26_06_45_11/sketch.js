class Drop{
    
    constructor(){
        this.x = random(150,width-20);
        this.y = random(-200,-100);
        this.z = random(0,10);
        this.yspeed = map(this.z,0,5,2,1);        
    }
    fall(){
        this.y = this.y + this.yspeed/3;
        var g = map(this.z,0,20,0,0.2);
        this.yspeed = this.yspeed + g;
        if(this.y > height){
            this.y = random(100,-100);
            this.yspeed = random(4,10);
        }
    }
    show(){
        var l = map(this.z,0,10,10,10);
        stroke(120,70,226);
        square(this.x,this.y,20);
    }
}


var drops=[];

function setup()
{
    createCanvas(500,400);
    for(var i=0;i<5;i++)
    {
        drops[i] = new Drop();
    }
    
}

function draw()
{
    background(200,230,250);
  rect(0, 30, 30, 50);
  line(0, 60, 30, 60)
  rect(70, 30, 30, 50);
  line(70, 60, 100, 60)
  rect(30, 300, 40, 30)
  line(100, 0, 100, 400)
    for(var i=0;i<drops.length;i++)
    {
        drops[i].fall();
        drops[i].show();
      
    }
    if (mouseIsPressed) {
    fill(230,230,250);
      rect(100,0,400,400)
  } else {
  }

  print(mouseIsPressed);
}