let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120, 10);
  for (const elemento of sp) {
    elemento.update();
    elemento.display();
  }
}
function mouseClicked() {
  let np = new Particula(mouseX, mouseY);
  sp.push(np);

  console.log("n Particulas: " + sp.length);
}
