let sp = []; //lista de partículas

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 60, 100, 50);
  for (const [index, particula] of sp.entries()) {
    particula.update();
    particula.display();
    if (particula.estaMuerta) {
      sp.splice(index, 1);
      console.log("n Partículas: " + sp.length);
    }
  }

  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}

function mouseClicked() {
  let np = new Particula(mouseX, mouseY);
  sp.push(np);

  console.log("n Particulas: " + sp.length);
}
