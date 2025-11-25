class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2)); //Magnitud aleatoria, velocidad

    this.tVida = int(random(100, 200));
    this.estaMuerta = false;
    console.log("hola estoy viva");
  }

  update() {
    this.pos.add(this.vel);
    this.vel.rotate(random(0.1, 0.1)); //Giro constante
  }

  display() {
    fill(255);
    noStroke();
    circle(this.pos.x, this.pos.y, 20);
  }
}
