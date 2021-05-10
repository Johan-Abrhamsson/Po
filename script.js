var slider = document.getElementById("Range");
var outPut = document.getElementById("demo");
outPut.innerHTML = slider.value;
slider.oninput = function() {
  outPut.innerHTML = this.value;
}
var speedTime= [3, 3, -3, -3]
var speed = speedTime[0];
var speedSet = 3;
var sliderV = parseInt(slider.value)
var posTime = [109, 337, 109, 337]
var posx = posTime[0];
posTime[0] = sliderV
var posxSet = posTime[0];
var posy = 80
var posySet = 80;
var timeselect = ["time","-time","p-(time)","p-(-time)"];
var timevalue = 0;
var timevalueBefore = 0;

let canvas = document.getElementById("canvas");
let canvasSet = document.getElementById("canvasSet");
const b = canvas.getContext("2d");
const c = canvasSet.getContext("2d");
updateCanvas();

function updateCanvas() {
    drawmap(b);
    b.strokeRect(posx, posy, 40,40);
    if (posx < 32){
        speed=speed*-1;
    }
    else if (posx > 428){
        speed=speed*-1;
    }
    posx=posx+speed;
    drawmap(c);
    c.strokeRect(posxSet, posySet, 40,40);
    if (posxSet < 32){
        speedSet=speedSet*-1;
    }
    else if (posxSet > 428){
        speedSet=speedSet*-1;
    }
    posxSet=posxSet+speedSet;
    sliderV = parseInt(slider.value)
    logicPlace();
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
    document.getElementsByClassName("button")[timevalue].id;
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
    e.lineWidth = 3;
    e.beginPath();
    e.moveTo(30, 20);
    e.lineTo(30, 180);
    e.moveTo(30, 100);
    e.lineTo(470,100);
    e.moveTo(250,60);
    e.lineTo(250,140);
    e.moveTo(470,20);
    e.lineTo(470,180);
    e.moveTo(129,90);
    e.lineTo(129,110);
    e.moveTo(357,90);
    e.lineTo(357,110);
    e.moveTo(250,10);
    e.lineTo(posx+20,80);
    e.moveTo(250,170);
    e.closePath();
    e.stroke();
}

function logicPlace()
{
    posTime[0]=posTime[0]+speedTime[0];
    if (posTime[0] < 32){
        speedTime[0]=speedTime[0]*-1;
    }
    else if (posTime[0] > 428){
        speedTime[0]=speedTime[0]*-1;
    }
    posTime[1]=posTime[1]+speedTime[1];
    if (posTime[1] < 32){
        speedTime[1]=speedTime[1]*-1;
    }
    else if (posTime[1] > 428){
        speedTime[1]=speedTime[1]*-1;
    }
    posTime[2]=posTime[2]+speedTime[2];
    if (posTime[2] < 32){
        speedTime[2]=speedTime[2]*-1;
    }
    else if (posTime[2] > 428){
        speedTime[2]=speedTime[2]*-1;
    }
    posTime[3]=posTime[3]+speedTime[3];
    if (posTime[3] < 32){
        speedTime[3]=speedTime[3]*-1;
    }
    else if (posTime[3] > 428){
        speedTime[3]=speedTime[3]*-1;
    }
}

function Restart(){
document.getElementById("timeNow").innerHTML = timeselect[0];
speedTime= [3, 3, -3, -3]
speed = speedTime[0];
speedSet = 3;
posTime = [sliderV, 460-sliderV, sliderV, 460-sliderV]
console.log(posTime);
posx = posTime[0];
posxSet = posTime[0];
posy = 80;
posySet = 80;
timevalue = 0;
timevalueBefore = 0;
}
/*

velocity = 1.0 * acceleration * deltaTime
position = position + velocity * deltaTime


function lerp(v0,  v1,  t) {
  return (1 - t) * v0 + t * v1;
}
*/