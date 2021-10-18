let running_out_of_roses = "";
let alone = "";
let rightWristX;
let leftWristY;
let rightWristY;
let leftWristX;

function preload() {
  alone = loadSound("assets/alone.mp3");
  running_out_of_roses = loadSound("assets/running_out_of_roses.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("Posenet is initialized!");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left Wrist X: " + leftWristX + " y: " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right Wrist X: " + rightWristX + " y:" + rightWristY);
  }
}

function draw() {
  image(video, 0, 0, 600, 500);
}
