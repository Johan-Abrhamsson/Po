var speed = 5;
var posx = 50;
var posy = 40;
var lenght = 50;
var scale = 2;
window.onload = main;
function main() {
let canvas = document.getElementById("canvas");
const b = canvas.getContext("2d");

if (b === null){
    alert("unable to initialize 2d. Your browser may not support it.");
}

b.lineWidth = 3*scale;
b.beginPath();
b.moveTo(50*scale, 20*scale);
b.lineTo(50*scale, 80*scale);
b.moveTo(50*scale, 50*scale);
b.lineTo(150*scale,50*scale);
b.moveTo(100*scale,30*scale);
b.lineTo(100*scale,70*scale);
b.moveTo(150*scale,20*scale);
b.lineTo(150*scale,80*scale);
b.closePath();
b.stroke();
b.strokeRect(posx*scale, posy*scale, 20*scale,20*scale);
if (posy*scale<=50*scale){
    speed=speed;
}
else if (posy*scale>=150*scale){
    speed=-speed;
}
posy=posy+speed
Node.appendChild(strokeRect)
b.clearColor(0.0, 0.0, 0.0, 1.0);
b.clear(b.COLOR_BUFFER_BIT);
}
