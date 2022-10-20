let posX
let posY
let radius
let interval=1000
let bgColor


function setup() {
  createCanvas(400, 400);
  colorMode(HSB,TWO_PI, 1, 1)
  bgColor = (0,0,0)
  posX = width/2
  posY = height/2
  radius = 50
  
    let timer1 = setInterval(()=>{
    bgColor = color(0,0,random())
  },interval) 
    
}

function draw() {
  background(bgColor);
  
  push()
  fill(245, 64, 112);
  //console.log(frameCount)
  posY = sin(frameCount*0.1)*50 + height/2
  posX = cos(frameCount*0.01)*50 + width/2 
  //radius = sin(frameCount*0.1)*30
  noStroke()
  rect(posX, posY, radius*2)
  pop()
  
  push()
  fill('#97E3FE');
  translate(width / 2, height / 2);
  rotate(PI/2);
  noStroke()
  circle(50, posY, radius*1.5)
  pop()
  
  
  push()
  fill('#FD8326');
  //console.log(frameCount)
  posY = sin(frameCount*(random()))
  posX = cos(frameCount*0.0001) + width/2 
  noStroke()
  circle(posX, 2*posY, radius*2)
  pop()
  
  push()
  fill('#4CAF50');
  //console.log(frameCount)
  posY = sin(frameCount*0.2)
  posX = cos(frameCount*1) +20
  translate(width, random());
  rotate(PI*3)
  noStroke()
  circle(sin(frameCount*0.1)*50 + height/2, 2*posY, radius/2)
  pop()
   
  
  push()
  fill('#FFFFFF')
  translate(width / 2, height / 2);
  for(let i=0;i<1;i++){rotate(sin(millis()*0.001*(i*0.3 +1)));
  noStroke()
  rect(random(),sin(frameCount*0.1)*20 + height/2, 52, 52);
  pop()
}
  
  push()
  fill('#A84CFF')
  translate(width, height);
  for(let i=0;i<1;i++){rotate(sin(millis()*0.001*(i*5 +1)));
  noStroke()
  rect(-86,-86, sin(frameCount*0.1)*50 + height/2, 82);
  pop()
}
  
  
}