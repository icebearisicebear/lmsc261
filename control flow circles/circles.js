const drawing = p5 => {
    let x = 0

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230);
        for(let cir = 0; cir < 100; cir++){
            p5.noStroke();
            p5.fill(cir * 2.5, p5.mouseX, p5.mouseY);
            let cirX = p5.mouseX * cir / 100;
            let cirY = p5.mouseY * cir / 100;
            p5.circle(cirX, cirY, cir * 2);
            

        }
    }
}

new p5(drawing);