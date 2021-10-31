Upper_lipX=0;
Upper_lipY=0;


function preload()
{
 mustache=loadImage('https://i.postimg.cc/L51jb4P8/mustache.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache,Upper_lipX,Upper_lipY,50,50);
}

function take_snapshot()
{
    save('myFilter_yeah.png');
}
function modelLoaded(){
    console.log('Pose net Is Loaded');
}

function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        Upper_lipX=results[0].pose.Upper_lip.x-20;
        Upper_lipY=results[0].pose.Upper_lip.y-15;
        console.log("upper lip x= "+ Upper_lipX);
        console.log("upper lip y= "+ Upper_lipY);
    }
}