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

    function boxDraw(boxWidth, boxHeight, boxDepth) {
      degs=p5.DEGREES
      p5.angleMode(degs);
      let w = boxWidth * scale_factor;
      let h = boxHeight * scale_factor;
      let d = boxDepth * scale_factor;

      // Center the box.
      p5.translate(-w / 2, -h / 2);

      p5.fill(255,0,0);
      p5.quad(0, 0, w, 0, w, h, 0, h);

      p5.push();

      p5.fill(0,255,0);
      p5.translate(0, 0, -d);
      p5.rotateY(-90);
      p5.quad(0, 0, d, 0, d, h, 0, h);
      p5.pop();

      p5.push();
      p5.fill(0,0,255);
      p5.translate(0, 0, -d);
      p5.rotateX(90);
      p5.quad(0, 0, w, 0, w, d, 0, d);


      p5.pop();
      p5.push();
      p5.fill(0,255,255);
      p5.translate(w, 0, 0);
      p5.rotateY(90);
      p5.quad(0, 0, d, 0, d, h, 0, h);

      p5.pop();
      p5.push();
      p5.fill(255,0,255);
      p5.translate(0, h, 0);
      p5.rotateX(-90);
      p5.quad(0, 0, w, 0, w, d, 0, d);

      p5.pop();
      p5.push();
      p5.fill(255,255,0);
      p5.rotateY(180);
      p5.translate(-w, 0, d);
      p5.quad(0, 0, w, 0, w, h, 0, h);
  }

    p5.draw = () => {

      mseX= p5.mouseX;
      mseY= p5.mouseY;
      //Lighting
      p5.ambientLight(210,210,210);

      p5.background('white');
      p5.rotateX(-mseY*.33);
      p5.rotateY(-mseX*.33);

      boxDraw(b_w, b_h, b_d);

    }

    p5.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {

    }
}
