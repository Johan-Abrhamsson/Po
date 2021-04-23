function webGLStart(){
    var pos, $ = function(d) { return document.getElementById(d); };

    var moon = new PhiloGL.O3D.Sphere({
        nlat: 30,
        nlong: 30,
        radius: 2,
        textures: 'moon.gif'

})
}

PhiloGL('pure plain', {
    Camera: {
        podition: {
            x: 0, y: 0, z: -7
        }
    },
    textures: {
        src: ['moon.gif'],
        parameter: [{
            name: 'TEXTRUE_MAG_FILTER',
            value: 'LINEAR'
        }, {
            name: 'TEXTURE_MIN_FILTER',
            value: 'LINEAR_MIPMAP_NEAREST'
            generateMipmap: true
        }]
    },
    events: {
        onDragStart: function(e) {
            pos = {
                x: e.x,
                y: e.y
            };
        },
        onDragMove: function(e) {
            var z = this.camera.position.z,
            sign = Math.abs(z) / z;

            moon.rotation.y += -(pos.x - e.x) / 100;
            moon.rotation.x += sign * (pos.y - e.y) / 100;
            moon.update();
            pos.x = e.x;
            pos.y = e.y;
        },
        onMouseWheel: function(e) {
            e.stop();
            var camera = this.camera;
            camera.position.z += e.wheel;
            camera.update();
        }
    },
    onError: function() {
        alert('There was an error creating the app');
    },
    onLoad: function(app) {
        var gl = app.gl,
        program = app.program,
        scene = app.scene,
        canvas = app.canvas,
        camera = app.camera;

        light = $('lighting'),
        ambient = {
            r: $('ambientR'),
            g: $('ambientG'),
            b: $('ambientB')
        },
        direction = {
            x: $('lightDirectionX'),
            y: $('lightDirectionY'),
            z: $('lightDirectionZ'),

            r: $('directionalR'),
            g: $('directionalG'),
            b: $('directionalB')
        };
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.viewport(0, 0, canvas.width, canvas.height);

        scene.add(moon);

        draw();

        function draw(){
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            var light = scene.config.lights;
            lights.enable = lighting.checked;
            lights.ambient = {
                r: +ambient.r.value,
                g: +ambient.g.value,
                b: +ambient.b.value
            };
            lights.directional = {
                color: {
                    r: +direction.r.value,
                    g: +direction.g.value,
                    b: +direction.b.value
                },
                direction: {
                    x: +direction.x.value,
                    y: +direction.y.vlaue,
                    z: +direction.z.value
                }
            };
        }
        scene.render();

        Fx.requestAnimationFrame(draw);
    }
})

window.onload = main
function main() {
let canvas = document.getElementById("canvas");
const b = canvas.getContext("webgl");

if (b === null){
    alert("unable to initialize WebGL. Your browser may not support it.");
}

b.clearColor(0.0, 0.0, 0.0, 1.0);
b.clear(b.COLOR_BUFFER_BIT);
}
