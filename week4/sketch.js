let gridStep = 50
let cRadius = gridStep* 0.37

function setup() {
  createCanvas(800, 600)
  colorMode(HSB, width, 100, 100)
}

function draw() {
  background(200,100,40)
  
  //showGrid()

  noStroke()
  for(let x=0; x <width/gridStep; x++) {
    for(let y=0; y<height/gridStep; y++){
      let posX = (x * gridStep )+ ( gridStep * 0.5)
      let posY = (y * gridStep )+ ( gridStep * 0.5)
      
      posX += random(-2,2)
      posY += random(-2,2)
      
      fill(posX, 80, 80)
      circle(posX, posY, cRadius*2)
    }
  }
}


function showGrid(){
  stroke(255,0,0)
  for( x =0; x< width; x = x+ gridStep){
    line(x, 0, x, height)
  }
  
  stroke(155,0,0)
  for( let y =0; y< height; y+= gridStep){
    line(0, y, width, y)
  }
}