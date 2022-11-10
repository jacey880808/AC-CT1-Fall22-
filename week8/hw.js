
  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/rmK8er_oJ/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = '';
  let arkin;

let resultsArray = [];

  // Load the model first
  function preload() {
    classifier =   ml5.imageClassifier(imageModelURL + 'model.json');
    arkin=loadImage("1.png")
  }

  function setup() {
    createCanvas(640,480);
    // Create the video
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    let emoji = '🐱😼😽😾🙀';
    if(label=='Hi'){
      emoji ='Hi✋🏻'
    } else if (label=='You cannot see me'){
      emoji = '🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡'
    }else if (label=='High 5'){
      image(arkin,0,0);
    }else if (label=='Huhhh'){
      emoji = '👻👻👻👻👻'
    }else if (label=='I am Arkin'){
      image(arkin,0,0);
    }
       // "I am Arkin":
       // "Hi"
      //"You cannot see me"
      // "High 5":
      // "Huhhh"
    
    // Draw the label
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(emoji, width / 2, height/2);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    resultsArray = results;
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }