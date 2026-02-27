let isRotten = false

const drawing = p5 => {
    let x = 0

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(225);
        p5.stroke(0);
        p5.strokeWeight(5)
        p5.noFill();
        let centerCoords = [p5.width * .5, p5.height * .5];
        let circleSize = p5.width * .66;

        //Circle
        if (isRotten) {
            p5.fill(125,125,50)
        } else {
            p5.fill(125,225,75);
        }

        p5.circle(
            centerCoords[0], 
            centerCoords[1], 
            circleSize
        );

        //Dimp
        p5.noFill()
        let dimpLeftCoords = [p5.width * .4, p5.height * .3];
        let dimpRightCoords = [p5.width * .6, p5.height * .3];
        p5.line(
            dimpLeftCoords[0],
            dimpLeftCoords[1],
            dimpRightCoords[0],
            dimpRightCoords[1]
        )

        //Stem
        let stemCoords = [p5.width * .75, dimpRightCoords[1]];
        let stemRadius = [p5.width * .5]
        p5.arc(
            stemCoords[0],
            stemCoords[1],
            stemRadius,
            stemRadius,
            Math.PI,
            Math.PI * 1.5
        )

        p5.mousePressed = () => {
            console.log('isRottsn = ', isRotten);
            isRotten = !isRotten;
        }
    }
}

new p5(drawing);