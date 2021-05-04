var speed = 3;
var posx = 30;
var posy = 75;
const lenght = 250;
const scale = 5;

let canvas = document.getElementById("canvas");
const b = canvas.getContext("2d");
updateCanvas();


function updateCanvas() {
    b.clearRect(0, 0, 500, 500);
    b.lineWidth = 5;
    b.beginPath();
    b.moveTo(30, 20);
    b.lineTo(30, 180);
    b.moveTo(30, 100);
    b.lineTo(470,100);
    b.moveTo(250,60);
    b.lineTo(250,140);
    b.moveTo(470,20);
    b.lineTo(470,180);
    b.closePath();
    b.stroke();
    b.strokeRect(posx+scale, posy+scale, 40,40);
    if (posx < 30){
        speed=speed*-1;
    }
    else if (posx > 470-2*scale-40){
        speed=speed*-1;
    }
    posx=posx+speed;
    requestAnimationFrame(updateCanvas);

}

function NegTime()
{
    if (posx < 30){
        posx=posx+length;
    }
    else if (posx > 470-2*scale-40){
        posx=posx-length;
    }
}


/*

velocity = 1.0 * acceleration * deltaTime
position = position + velocity * deltaTime


function lerp(v0,  v1,  t) {
  return (1 - t) * v0 + t * v1;
}
*/