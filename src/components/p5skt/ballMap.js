export default function sketch(p5){
    let canvas;
    let scale_factor = 2;
    let mseX;
    let mseY;
    let degs;
    let b_w = 75;
    let b_h = 75;
    let b_d = 75;
    let cnv_w = 500;
    let cnv_h = 500;

/*
p5.preload = () => {
      fnt = p5.loadFont("arial.ttf");
    }
*/
    p5.setup = () => {
      canvas = p5.createCanvas(cnv_w, cnv_h, p5.WEBGL);
    }
    p5.draw = () => {

      mseX= p5.mouseX;
      mseY= p5.mouseY;
      let locX = p5.mouseX - cnv_w / 2;
      let locY = p5.mouseY - cnv_h / 2;

    p5.background('white');
    p5.pointLight(255-mseX, 255-mseY, (mseY+mseX)*.5, locX, locY, 300);

    p5.noStroke();
    p5.sphere(200);

    }

    p5.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {

    }
}
