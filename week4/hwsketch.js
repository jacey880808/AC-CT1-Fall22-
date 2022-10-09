let particles =[];
const num = 500;
const noiseScale = 0.02;

function setup(){
  createCanvas(1366, 768);
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
    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseRelease(){
  noiseSeed(millis(20));
}

function onScreen(v){
  return v.x>=0 && v.x <=width && v.y >=0 && v.y <= height;
}