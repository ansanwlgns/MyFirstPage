let Bubble1;
let Bubble2;
let Bubble3;
let Bubble4;

function setup() {
  createCanvas(400, 400);
  background(220, 5);

  Bubble1 = new Bubble(10);
  Bubble2 = new Bubble(10);
  Bubble3 = new Bubble(10);
  Bubble4 = new Bubble(10);
  
  
}

function draw() {
  
  Bubble1.show();
  Bubble1.fly();
  Bubble2.show();
  Bubble2.fly();
  Bubble3.show();
  Bubble3.fly();
  Bubble4.show();
  Bubble4.fly();
}

class Bubble {
  constructor(sizeOfBubble) {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.w = sizeOfBubble;
    this.BubbleColor=color
  }
  show() {
    fill(random(0,255),random(0,255) ,random(0,255),50);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

  fly() {
    let acc = createVector(random(-5, 5), random(-5, 5));
    this.vel.add(acc);
    this.pos.add(this.vel);
    if(this.pos.x>width||this.pos.x<0){
      this.vel.x=this.vel.x*-1;
    }
    if(this.pos.y>height||this.pos.y<0){
      this.vel.y=this.vel.y*-1;
    }
    
    
  }
}

