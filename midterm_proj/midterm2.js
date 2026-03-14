const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(200);
        p5.stroke(0);
        p5.strokeWeight(2);

        let center = [p5.width * .5, p5.height * .5];
        let mouseDelta = [p5.mouseX - center[0], p5.mouseY - center[1]]


        console.log()

        function dRect(rectCenter, rectWidth, rectHeight){
            let rectTopLeft = [
                rectCenter[0] - rectWidth * .5,
                rectCenter[1] - rectHeight * .5
            ]
            let rectTopRight = [
                rectCenter[0] + rectWidth * .5,
                rectCenter[1] - rectHeight * .5
            ]
            let rectBottomLeft = [
                rectCenter[0] - rectWidth * .5,
                rectCenter[1] + rectHeight * .5
            ]
            let rectBottomRight = [
                rectCenter[0] + rectWidth * .5,
                rectCenter[1] + rectHeight * .5
            ]
            p5.quad(
                rectTopLeft[0],
                rectTopLeft[1],
                rectTopRight[0],
                rectTopRight[1],
                rectBottomRight[0],
                rectBottomRight[1],
                rectBottomLeft[0],
                rectBottomLeft[1]
            )
        }
    

    p5.noFill()

    dRect(
        [center[0] + mouseDelta[0] * .25, center[1] + mouseDelta[1] * .25],
        p5.width * .25,
        p5.height * .25
    )

    dRect(
        [center[0] + mouseDelta[0] * .125, center[1] + mouseDelta[1] * .125],
        p5.width * .125,
        p5.height * .125
    )

    p5.line(
        (center[0] + mouseDelta[0] * .25) + (p5.width * .25 * .5),
        (center[1] + mouseDelta[1] * .25) + (p5.height * .25 * 5),
        (center[0] + mouseDelta[0] * .25) + (p5.width * .125 * .5),
        (center[1] + mouseDelta[1] * .25) + (p5.height * .125 * 5),
    )

    p5.mousePressed = () => {
        console.log('X = ', p5.mouseX);
        console.log('Y = ', p5.mouseY);
        console.log('deltaX = ', mouseDelta[0]);
        console.log('deltaY = ', mouseDelta[1]);
    }

 
    }


}

new p5(drawing);