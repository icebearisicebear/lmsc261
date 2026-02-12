const drawing = p5 => {
    let x = 0

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230);
        for(let cir = 0; cir < 12; cir++){
            p5.noStroke()
            p5.fill(0)
            let offset = p5.width * .1;
            let scale = p5.mouseX * cir
            let radius = 40;
            p5.circle(offset + scale, 300, radius);
            

        }
    }
}

new p5(drawing);