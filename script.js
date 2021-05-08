var speedTime= [3, 3, -3, -3]
var speed = speedTime[0];
var speedSet = 3;
var posTime = [110, 330, 110, 330]
var posx = posTime[0];
var posxSet = 110;
var posy = 75
var posySet = 75;
var lenght = 250;
const scale = 5;
var timeselect = ["t","-t","p-(t)","p-(-t)"];
var timevalue = 0;
var timevalueBefore = 0;


let canvas = document.getElementById("canvas");
let canvasSet = document.getElementById("canvasSet");
const b = canvas.getContext("2d");
const c = canvasSet.getContext("2d");
updateCanvas();

function updateCanvas() {
    drawmap(b);
    b.strokeRect(posx+scale, posy+scale, 40,40);
    if (posx < 30){
        speed=speed*-1;
    }
    else if (posx > 430-2*scale){
        speed=speed*-1;
    }
    posx=posx+speed;
    drawmap(c);
    c.strokeRect(posxSet+scale, posySet+scale, 40,40);
    if (posxSet < 30){
        speedSet=speedSet*-1;
    }
    else if (posxSet > 470-2*scale-40){
        speedSet=speedSet*-1;
    }
    posxSet=posxSet+speedSet;
    logicPlace();
    console.log(posx);
    requestAnimationFrame(updateCanvas);
}

function T(){
timevalueBefore=timevalue;
timevalue = 0;
document.getElementById("timeNow").innerHTML = timeselect[timevalue];
check();
}

function NT(){
timevalueBefore=timevalue;
timevalue = 1;
document.getElementById("timeNow").innerHTML = timeselect[timevalue];
check();
}

function PT() {
timevalueBefore=timevalue;
timevalue = 2;
document.getElementById("timeNow").innerHTML = timeselect[timevalue];
check();
}

function NPT() {
timevalueBefore=timevalue;
timevalue = 3;
document.getElementById("timeNow").innerHTML = timeselect[timevalue];
check();
}

function check()
{
    let currenttime = document.getElementsByClassName("button")[timevalue].id;
}
function Time()
{
    posx=posTime[0];
    speed=speedTime[0];
    T();
}

function NegTime()
{
    posx=posTime[1];
    speed=speedTime[1];
    NT();
}

function Plain()
{
    posx=posTime[2];
    speed=speedTime[2];
    PT();
}

function NegPlain()
{
    posx=posTime[3];
    speed=speedTime[3];
    NPT();
}

function drawmap(e)
{
    e.clearRect(0, 0, 500, 500);
    e.lineWidth = 5;
    e.beginPath();
    e.moveTo(30, 20);
    e.lineTo(30, 180);
    e.moveTo(30, 100);
    e.lineTo(470,100);
    e.moveTo(250,60);
    e.lineTo(250,140);
    e.moveTo(470,20);
    e.lineTo(470,180);
    e.closePath();
    e.stroke();
}

function logicPlace()
{
    posTime[0]=posTime[0]+speedTime[0];
    if (posTime[0] < 30){
        speedTime[0]=speedTime[0]*-1;
    }
    else if (posTime[0] > 430-2*scale){
        speedTime[0]=speedTime[0]*-1;
    }
    posTime[1]=posTime[1]+speedTime[1];
    if (posTime[1] < 30){
        speedTime[1]=speedTime[1]*-1;
    }
    else if (posTime[1] > 430-2*scale){
        speedTime[1]=speedTime[1]*-1;
    }
    posTime[2]=posTime[2]+speedTime[2];
    if (posTime[2] < 30){
        speedTime[2]=speedTime[2]*-1;
    }
    else if (posTime[2] > 430-2*scale){
        speedTime[2]=speedTime[2]*-1;
    }
    posTime[3]=posTime[3]+speedTime[3];
    if (posTime[3] < 30){
        speedTime[3]=speedTime[3]*-1;
    }
    else if (posTime[3] > 430-2*scale){
        speedTime[3]=speedTime[3]*-1;
    }
}
/*

velocity = 1.0 * acceleration * deltaTime
position = position + velocity * deltaTime


function lerp(v0,  v1,  t) {
  return (1 - t) * v0 + t * v1;
}
*/