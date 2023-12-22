let centroX = 0.0, centroY = 0.0;
let pos;
let tx = 0;
let ty = 1000;
let ts = 0;
let rectTam;
let escala;
let historial = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  pos = createVector(0, 0);

  centroX = width / 2;
  centroY = height / 2;

  noStroke();
  frameRate(30);
}

function draw() {
  background(10, 30);
  moverForma();
  dibujarEstela();
  dibujarForma();

  tx += 0.002;
  ty += 0.002;
  ts += 0.01;

  rectTam = map(noise(ts / 2), 0, 1, 100, 200);
  escala = map(noise(tx), 0, 1, 0.8, 1.2);
  pos.x = map(noise(tx), 0, 1, 0, width);
  pos.y = map(noise(ty), 0, 1, 0, height);

  historial.push(createVector(pos.x, pos.y));

  if (historial.length > 100) {
    historial.splice(0, 1);
  }
}

function dibujarForma() {
  push();
  translate(pos.x, pos.y);

  // Dibujo del rectángulo verde
  fill(0, 255, 0);
  stroke(255);
  rectMode(CENTER);
  strokeWeight(6);
  rect(-rectTam / 2, 0, rectTam, 200, 10);

  // Dibujo del cuadrado azul más arriba
  fill(0, 0, 255);
  stroke(255);
  rectMode(CENTER);
  strokeWeight(6);
  rect(rectTam / 2, -75, 100 * escala, 100 * escala, 10); // Elevado más arriba
  pop();
}

function dibujarEstela() {
  noFill();
  stroke(255, 50);
  beginShape();
  for (let punto of historial) {
    vertex(punto.x, punto.y);
  }
  endShape();
}

function moverForma() {
 
}
