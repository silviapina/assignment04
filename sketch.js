var d;

function setup() {
  // Create canvas, set angle mode, etc.
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  
}

function draw() {
   if(width>height){
    d=height;
  }
  else {
  d=width;
  }

//orologio
  background(0,0,0,5);
  translate(width/2,height/2);
  clockHand(hour()%12,d/10,12,20); 
  clockHand(minute(),d/4.5,60,15);
  clockHand(second(),d/2.5,60,10);
  

//numeri
push();
fill(255);
  textFont('Helvetica')

  for (var t = 0; t < 60; t+=1) {
    v = p5.Vector.fromAngle((t) / 60.0 * TAU - HALF_PI);
    v.mult(d * 0.45);
 if (t == second()) {
      textSize(d / 30);
    } else {
      textSize(d / 80);
    }
    text(t, v.x, v.y);
  }
  

  for (var t = 0; t < 60; t+=1) {
    v = p5.Vector.fromAngle((t) / 60.0 * TAU - HALF_PI);
    v.mult(d * 0.28);
 if (t == minute()) {
      textSize(d / 25);
    } else {
      textSize(d / 70);
    }
    text(t, v.x, v.y);
  }
  
 
  for (var t = 1; t <= 12; t+=1) {
    v = p5.Vector.fromAngle((t) / 12.0 * TAU - HALF_PI);
    v.mult(d*0.15);
if (t == hour() % 12) {
      textSize(d / 20);
    } else {
      textSize(d / 50);
    }
    text(t, v.x, v.y);
  }
pop();
 
}

function clockHand(timevalue,radius,range,r) {
  push();
  noStroke();
  fill(255);
var angle = map(timevalue,0,range,-90,270);
  ellipse(radius*cos(angle),radius*sin(angle),r,r); 
if(timevalue==second()){
 fill(50);
 for(var s = -90; s < angle -10; s+= 360/range){
    ellipse(radius*cos(s),radius*sin(s),r,r);
    }
} else {
  fill(50);
 for(var s = -90; s < angle -1; s+= 360/range){
    ellipse(radius*cos(s),radius*sin(s),r,r);
    }
}
pop();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

