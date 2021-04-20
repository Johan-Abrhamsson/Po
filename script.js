let canvas = document.getElementById("canvas");
b = canvas.getContext("2d");

document.body.appendChild(canvas);

b.fillStyle="black";
b.fillRect(0, 0, canvas.width, canvas.height);

b.fillStyle="white";
b.fillRect(0, 0, 10, 10);
