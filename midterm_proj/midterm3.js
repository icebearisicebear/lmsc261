//definitions

let wheelDelta = 0
let wheelDeltaTotal = 0
let wheelDeltaTotalCmd = 0
let wheelDeltaTotalOpt = 0
let cubeCenterInst = [0,0]
let cubeSizeInst = 250
let cubeScaleInst = [0,0]
let cubes = []

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(1200, 1200);
    }

    p5.draw = () => {
        p5.background(200);
        p5.stroke(0);
        p5.strokeWeight(2);
        let center = [p5.width * .5, p5.height * .5];
        let mouseDelta = [p5.mouseX - center[0], p5.mouseY - center[1]]



        //get and prepare mousewheel data
        p5.mouseWheel = (event) => {
            console.log('wheelDelta = ', event.delta);
            wheelDelta = event.delta;

            if(event.metaKey){
                wheelDeltaTotalCmd += wheelDelta;
            } else if(p5.keyIsDown(18)) {
                wheelDeltaTotalOpt += wheelDelta;
            } else {
                wheelDeltaTotal += wheelDelta;
            }
            console.log('wheelDeltaTotal = ', wheelDeltaTotal);
        }

        //function handling the drawing of cubes
        function drawCube(cubeCenter, size, scale){

            /* 

            //These are guide lines. Use for debug purposes.

            p5.strokeWeight(.25)
            
            p5.line(center[0],center[1],cubeCenter[0] - .5 * size, cubeCenter[1] - .5 * size);
            p5.line(center[0],center[1],cubeCenter[0] + .5 * size, cubeCenter[1] - .5 * size);
            p5.line(center[0],center[1],cubeCenter[0] + .5 * size, cubeCenter[1] + .5 * size);
            p5.line(center[0],center[1],cubeCenter[0] - .5 * size, cubeCenter[1] + .5 * size);

            p5.strokeWeight(5);

            p5.point(p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0]));
            p5.point(p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0]));
            p5.point(p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]));
            p5.point(p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]));

            p5.point(p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1]));
            p5.point(p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1]));
            p5.point(p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]));
            p5.point(p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]));

            */

            //front and rear faces
            p5.strokeWeight(1);
            p5.noFill()
            p5.quad(
                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0])
            )

            p5.quad(
                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1]),

                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1])
            )
            
            //connect the vertices of both faces
            p5.line(
                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1]),
            )

            p5.line(
                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] - .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]),
            )

            p5.line(
                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] + .5 * size, scale[1]),
            )

            p5.line(
                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[0]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[0]),

                p5.lerp(center[0],cubeCenter[0] + .5 * size, scale[1]),
                p5.lerp(center[1],cubeCenter[1] - .5 * size, scale[1]),
            )
        }
        
        //draw preview cube
        drawCube([p5.mouseX, p5.mouseY], 250 + wheelDeltaTotalOpt * .01, [wheelDeltaTotal * .001, (wheelDeltaTotal + wheelDeltaTotalCmd) * .001]);

        p5.mousePressed = () => {
            console.log('X = ', p5.mouseX);
            console.log('Y = ', p5.mouseY);
            console.log('deltaX = ', mouseDelta[0]);
            console.log('deltaY = ', mouseDelta[1]);
            cubes.push({
                center: [p5.mouseX,p5.mouseY],
                size: 250 + wheelDeltaTotalOpt * .01,
                scale: [wheelDeltaTotal * .001, (wheelDeltaTotal + wheelDeltaTotalCmd) * .001]
            })
        }

        for(const i of cubes){
            p5.stroke(200,0,0)
            drawCube(i.center, i.size, i.scale)
        }
    }


}

new p5(drawing);