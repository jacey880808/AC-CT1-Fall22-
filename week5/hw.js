let posX
let posY
let radius


function setup() {
  createCanvas(400, 400);
  
  posX = width/2
  posY = height/2
  radius = 50
}

function draw() {
  background(0);
  
  push()
  fill(245, 64, 112);
  //console.log(frameCount)
  posY = sin(frameCount*0.1)*50 + height/2
  posX = cos(frameCount*0.01)*50 + width/2 
  //radius = sin(frameCount*0.1)*30
  rect(posX, posY, radius*2)
  pop()
  
  push()
  fill('#97E3FE');
  translate(width / 2, height / 2);
  rotate(PI/2);
  circle(50, posY, radius*1.5)
  pop()
  
  
  push()
  fill('#FD8326');
  //console.log(frameCount)
  posY = sin(frameCount*(random()))
  posX = cos(frameCount*0.0001) + width/2 
  circle(posX, 2*posY, radius*2)
  pop()
  
  push()
  fill('#4CAF50');
  //console.log(frameCount)
  posY = sin(frameCount*0.2)
  posX = cos(frameCount*1) +20
  translate(width, random());
  rotate(PI*3)
  circle(posX, 2*posY, radius/2)
  pop()
   
  
  push()
  fill('#FFFFFF')
  translate(width / 2, height / 2);
  for(let i=0;i<1;i++){rotate(sin(millis()*0.001*(i*0.3 +1)));
  noStroke()
  rect(random(),random(), 52, 52);
  pop()
}
  
  push()
  fill('#A84CFF')
  translate(width, height);
  for(let i=0;i<1;i++){rotate(sin(millis()*0.001*(i*5 +1)));
  noStroke()
  rect(-86,-86, 32, 82);
  pop()
}
  
  
}