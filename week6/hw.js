const branchs = {}
const WIDTH = 800;
const HEIGHT = 800;
const edgeCircleSize = 200
function setup() {
	pixelDensity(2)
	createCanvas(windowWidth, windowHeight);
	background(10, 10, 30);
	angleMode(DEGREES)
	createBranch(width/2, height - 50, -40, 100)
	drawBackground()
}

function draw() {
	Object.values(branchs).forEach((b) => {
		b.draw()
	})
	
	if (mouseIsPressed) {
		createBranch(mouseX + random(-10, 20), mouseY, random(-20, -100), random([25, 30, 50, 50]))
	}
}

function mapWidthToWeight(value) {
	return map(constrain(value, 0, 100), 0, 100, 1, 10)
}

function drawBackground () {
	noStroke()
	fill(0,0,0, 5)
	for (let i = 0; i< 5; i++) {
		ellipse(random(0, width), random(0, height), WIDTH)
	}
}


function flowColor(x, y, alpha = 10) {
	const pick = random()
	let result
	if (pick > 0.8) {
		result = color(122,192,222, alpha)
	} else if (pick > 0.5){
		result = color(224, 132,132, alpha)
	} else {
		result = color(255, 255, 255, alpha)
	}

	return result
}
function mapToColor(width, weight) {
	const ratio = map(constrain(weight, 1, 5), 1, 2, 1, 0.2)
	return color(10, 10, 30, 50 * pow(ratio, 2))
}

function outOfEdge(x, y) {
	return dist(10, y, HEIGHT / 2, WIDTH / 2) > edgeCircleSize
}


let count = 0
function createBranch (x, y, angle, width, weight = 2) {
	const id = count++
	let px = x
	let py = y
	const step = 1
	let remain = width
	let initialWeight = mapWidthToWeight(width)
	
	const self = {
		id,
		deltaAngle(factor = 0) {
			return map(noise(px * 0.001, py * 0.1, frameCount / 10 + factor * 20), 0, 1, -120, 120)
		},
		draw() {
			if (remain < 0) {
				delete branchs[id]
				this.derive()
				return
			}

			
			const da = this.deltaAngle()
			const ax = cos(angle + da) 
			const ay = sin(angle + da)
			const nx = px + ax * step
			const ny = py + ay * step
			
			const nextWeight = initialWeight - (1 - remain/width)
			
				if (width < 5) {
					noStroke()
					const pushForward = random(0, 30)
					const dotX = x + ax * pushForward + random(-10, 50)
					const dotY = y + ay * pushForward + random(-10, 50)
					const dx = random(-3, 3)
					fill(flowColor(nx, ny, 5))
					ellipse(dotX, dotY, 30, 60)
					fill(flowColor(nx, ny, 160))
					ellipse(dotX, dotY, 2)
					
				} else {
					strokeWeight(nextWeight)
					stroke(mapToColor(width, nextWeight))
					line(px, py, nx, ny)
				}
			
			if (width < 2) {
				delete branchs[id]
			}
      
			remain = remain - dist(nx, ny, px, py)
			px = nx
			py = ny
		},
		
		derive() {
			if (width < 5) {
				return
			}
			let n
			if (width > 30) {
				n = random([1, 2, 2])
			} else if(width > 10) {
        n = random([1, 2, 3])
			} else {
				n = random([0, 1])
			}
			const nextWidth = width > 30 ? width * random(0.3,0.8) : width > 10 ? width * random([0.3, 0.7]) : width - 2
			for (let i = 0; i < n; i++) {
				const dtAng = this.deltaAngle(i)
				createBranch(px, py, angle + dtAng, nextWidth)
			}
		}
	}
	
	branchs[id] = self
  return self
}