var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle;
var Start = 1;
var End = 0;
var gameState = 1;
var count = 0;

function setup() {
  createCanvas(800, 1000);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20, 'silver');


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 50; j <= width - 50; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 25; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 50; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

  for (var j = 25; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 475));
  }



}



function draw() {
  background("black");
  textSize(34);
  fill('white');
  text("Score : " + score, 20, 60);
  textSize(30);
  fill('red');
  text("100", width - 67, height / 2 + 230);
  fill('orange');
  text("200", width - 145, height / 2 + 230);
  text("300", width - 225, height / 2 + 230);
  text("400", width - 305, height / 2 + 230);
  text("500", width - 385, height / 2 + 230);
  text("600", width - 465, height / 2 + 230);
  text("700", width - 545, height / 2 + 230);
  text("800", width - 625, height / 2 + 230);
  text("900", width - 705, height / 2 + 230);
  fill('green');
  text("1000", width - 795, height / 2 + 230);
  // text(mouseY+"", 250, 60);


  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  // if (frameCount % 60 === 0) {
  //   particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  // //   // score++;
  // }

  // for (var j = 0; j < particles.length; j++) {

  //   particles[j].display();
  // }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  ground.display();

  if (particle) {
    particle.display();
    if (particle.body.position.y > 740) {
      if (particle.body.position.x < 800 && particle.body.position.x > 730) {
        score += 100;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 730 && particle.body.position.x > 650) {
        score += 200;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 650 && particle.body.position.x > 570) {
        score += 300;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 570 && particle.body.position.x > 490) {
        score += 400;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 490 && particle.body.position.x > 410) {
        score += 500;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 410 && particle.body.position.x > 330) {
        score += 600;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 330 && particle.body.position.x > 250) {
        score += 700;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 250 && particle.body.position.x > 170) {
        score += 800;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 170 && particle.body.position.x > 90) {
        score += 900;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
      else if (particle.body.position.x < 90 && particle.body.position.x > 10) {
        score += 1000;
        particle = null;
        if (count >= 5)
          gameState = 0;
      }
    }
  }

  if (gameState == End) {
    over = new Ground(width / 2, height / 2, width, height, 'black');
    over.display();
    textSize(80);
    fill('red');
    text('Game Over!!', width/2-220, height/2);
  }
}

function mousePressed() {
  if (gameState == Start) {
    // console.log('create');
    particle = new Particle(mouseX, 10, 10, 10);
    count++;
  }
}










