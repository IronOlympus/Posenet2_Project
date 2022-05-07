var leftwristx = 0;
var rightwristx = 0;
var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(450 , 400);
    
    canvas = createCanvas(350, 350);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    background('#F5F5F5');
    textSize(difference);
    document.getElementById("fontsize").innerHTML = "The font size is " + difference;
    text('Avneesh' , 70 , 200);
}
function modelLoaded(){
    console.log("Model Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = leftwristx-rightwristx;
        textSize(difference);
    }
}