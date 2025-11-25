class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2)); //Magnitud aleatoria, velocidad

    this.tVida = int(random(100, 300));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = random(10, 30);

    this.c = color(random(10, 50), random(100, 150), random(200, 250));

    console.log("hola estoy viva");
  }

  update() {
    if (!this.estaMuerta) {
      this.pos.add(this.vel);
      this.vel.rotate(random(-0.1, 0.1)); //Giro constante
      this.tVida -= 1; //Disminuye el tiempo de vida
    }

    if (this.tVida <= 0 && !this.estaMuerta) {
      console.log("estoy muerta");
      this.estaMuerta = true;
    }
  }

  display() {
    fill(this.c);
    noStroke();

    this.diamFinal = map(this.tVida, 0, this.tVidaInicial, 0, this.diam);

    circle(this.pos.x, this.pos.y, this.diamFinal);
  }
}
