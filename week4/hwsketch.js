let particles =[];
const num = 500;
const noiseScale = 0.02;


function setup(){
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i <num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255,193,188);
}

function draw(){
  background(0, 2);
  for(let i =0; i <num; i ++){
    let p =particles[i];
    point(p.x, p.y);
    let n = noise(p.x *noiseScale, p.y *noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
  
  }
}

