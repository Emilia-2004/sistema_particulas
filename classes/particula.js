class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2)); //Magnitud aleatoria, velocidad

    this.tVida = int(random(100, 150));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = random(5, 5);

    this.velAngulo = random(-0.3, 0.1);

    this.c = color(random(150, 220), random(100, 225), random(220, 255));
    
   
    //Perlin Noise genera un movimiento suave, ondulado y natural.
    this.t = random(0.10); //Para ruido de Perlin Noise(0.1 es un valor pequeño inicial para ir lento)

    //console.log("hola estoy viva");
  }

  update() {
    if (!this.estaMuerta) {
      //Determina el movimiento normal
      this.pos.add(this.vel);
      this.vel.rotate(this.velAngulo); //Giro constante
      this.tVida -= 1; //Disminuye el tiempo de vida

      //Para hacer el movimiento tipo Aurora.
      let nx = noise(this.t);//Desplazamiento en X para variar el ruido
      let ny = noise(this.t + 1000); //Desplazamiento en Y para variar el ruido

      let movX = map(nx, 0, 1, -5, 10); //Para la ondulación horizontal, a mas alto el valor, mayor desplazamiento
      let movY = map(ny, 0, 1, -5, 10); 

      this.pos.x += movX;
      this.pos.y += movY;

      this.t += 0.01; //Incrementa el tiempo para el ruido de Perlin
    }

    

    if (this.tVida <= 0 && !this.estaMuerta) {
      //console.log("estoy muerta");
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
