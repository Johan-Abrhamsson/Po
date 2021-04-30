var speed = 2;
var posx = 50;
var posy = 40;
var lenght = 50;
var scale = 2;
var timeMode = 1;

let canvas = document.getElementById("canvas");
const b = canvas.getContext("2d");

function updateCanvas() {
    b.clearRect(0, 0, 500, 500);
    
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
    switch(timeMode)
    {
        case 0:
    if (posx*scale < 50*scale){
        speed=speed*-1;
    }
    else if (posx*scale > 130*scale){
        speed=speed*-1;
    }
    break;

    case 1:
      if (posx*scale < 50*scale){
        speed=speed*-1;
        posx=posx+length;
    }
    else if (posx*scale > 130*scale){
        speed=speed*-1;
        posx=posx-length;
    }
    break;  
    }

    posx=posx+speed;
    requestAnimationFrame(updateCanvas);

}


/*

velocity = 1.0 * acceleration * deltaTime
position = position + velocity * deltaTime

*/

updateCanvas();