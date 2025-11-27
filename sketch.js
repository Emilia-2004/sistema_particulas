let sp = []; //lista de partículas
let estrellas = []; //lista para fondo de estrellas

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

   // Crear estrellas
    for (let i = 0; i < 50; i++) {//Elegir numero de estrellas
        estrellas.push(new Estrella());
    }
}

function draw() {
  background(12, 34, 65,10);

   // Fondo de estrellas titilando
    for (let e of estrellas) {
        e.update();
        e.display();
    }

    
//Sistema de particulas(Aurora boreal)
  for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    stroke(sp[i].c);
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }

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

/* function mouseClicked() {
  let np = new Particula(mouseX, mouseY);
  sp.push(np);

  console.log("n Particulas: " + sp.length);
}*/
