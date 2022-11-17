let video;
let flippedVideo;
let detector;
let detections = [];

function preload() {
  detector = ml5.objectDetector("cocossd");
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  detector.detect(video, gotDetections);
  
}

function draw() {
  image(flippedVideo, 0, 0);

  
  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(255);
    strokeWeight(5);
    rect(object.x, object.y, object.width/2, object.height/2);
    fill(230, 180, 80);
    textSize(40);
    text(object.label, object.x + 10, object.y + 24);
  }
  
 
}

