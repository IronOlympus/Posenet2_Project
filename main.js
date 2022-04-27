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
}
function modelLoaded(){
    console.log("Model Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}