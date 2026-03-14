const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(800, 800);
    }

    p5.draw = () => {
        p5.background(150,200,255);
        p5.stroke(0);
        p5.strokeWeight(2)

        //Definitions

        let center = [p5.width * .5, p5.height * .5];
        let mouseXDelta = p5.mouseX - center[0]
        let mouseYDelta = p5.mouseY - center[1]

        let quadTopLeft = [            
            center[0] + mouseXDelta * -1 - p5.mouseY * .1,
            center[1] + mouseYDelta * -1 + p5.width * .25
        ];
        let quadTopRight = [            
            center[0] + mouseXDelta * -1 + p5.mouseY * .1,
            center[1] + mouseYDelta * -1 + p5.width * .25
        ];
        let quadBottomLeft = [
            center[0] + mouseXDelta * .5 + p5.mouseY * .25,
            center[1] + mouseYDelta * 1.5 - p5.width * .25
        ];
        let quadBottomRight = [
            center[0] + mouseXDelta * .5 - p5.mouseY * .25,
            center[1] + mouseYDelta * 1.5 - p5.width * .25
        ];

        //Title

        p5.text('Know your MUTCD', center[0], center[1] - p5.width * .25)

        //Draw Ground

        if(quadTopLeft[1] <= quadBottomLeft[1]){
            p5.fill(0,200,100)
        }else{
            p5.fill(100,100,0)            
        }
        p5.stroke(0)
        p5.quad(
            -10,
            quadBottomLeft[1],
            p5.width + 10,
            quadBottomLeft[1],
            p5.width + 10,           
            quadTopLeft[1],
            -10,
            quadTopLeft[1]
        )

        //Draw Pavement

        p5.fill(15)
        p5.strokeWeight(2)
        p5.quad(
            quadTopLeft[0],
            quadTopLeft[1],
            quadTopRight[0],
            quadTopRight[1],
            quadBottomLeft[0],
            quadBottomLeft[1],
            quadBottomRight[0],
            quadBottomRight[1]
        );
        if(quadTopLeft[1] <= quadBottomLeft[1]){
           p5.stroke(200,200,0)
            p5.line(
                (quadTopRight[0] + quadTopLeft[0]) * .5,
                quadTopLeft[1],
                (quadBottomRight[0] + quadBottomLeft[0]) * .5,
                quadBottomLeft[1]
            )      
        }

 
/*        p5.line(
            (quadTopLeft[0] + quadBottomLeft[0]) * .5,
            (quadTopLeft[1] + quadBottomLeft[1]) * .5,
            (quadTopRight[0] + quadBottomRight[0]) * .5,
            (quadTopRight[1] + quadBottomRight[1]) * .5,
        )
*/
    }

    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
    }
}

new p5(drawing);