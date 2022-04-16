video = "";

function preload() {
video = createCapture(VIDEO);
video.hide();
}

function setup() {
  canvas = createCanvas(450,350);
  canvas.center();
}

function draw() {
  image(video,0,0,450,350);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Object Detected";
}

function modelLoaded() {
  console.log("model loaded");
}