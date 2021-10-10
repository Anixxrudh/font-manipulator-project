leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet( video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    }
}

function draw(){
    background("#808080");
    textSize(difference);
    fill("#0000FF");
    text("Anirudh" , 50 , 200);
}