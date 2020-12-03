var hr,min,sec;
var hrAngle,minAng,secAng
function setup() {
  createCanvas(400,400);
angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  
  hr=hour()
  min=minute()
  sec=second()
  translate(200,200)
  rotate(-90)
  secAng=map(sec,0,60,0,360)
  minAng=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  push()
  rotate(secAng)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAng)
  stroke("green")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  strokeWeight(10)
  stroke("red")
  noFill()
  arc(0,0,300,300,0,secAng)
  strokeWeight(10)
  stroke("green")
  noFill()
  arc(0,0,280,280,0,minAng)
  strokeWeight(10)
  stroke("blue")
  noFill()
  arc(0,0,260,260,0,hrAngle)
}