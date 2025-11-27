class Estrella {
	constructor() {
		this.posx = random(0, width);
		this.posy = random(0, height);
		this.tam = random(1, 3);
		this.inten = 255;
		this.t = random(1, 100);
		this.vt = random(0.005, 0.03);//velocidad del titileo, titilea lento con valores pequeños
	}

	update() {
		this.t += this.vt;
		this.inten = map(noise(this.t), 0.1, 0.9, 100, 255);//brillo, tercer valor: brillo minimo, cuarto valor: brillo maximo
	}

	display() {
		noStroke();
		fill(255, this.inten);
		circle(this.posx, this.posy, this.tam);
	}
}