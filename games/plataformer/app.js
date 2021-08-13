var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {y : 200 }
      }
  },
  scene: {
      preload,
      create
  }
};

var game = new Phaser.Game(config);

function preload () {
  // this.load.setBaseURL('http://labs.phaser.io');

  this.load.image('sky', 'img/space3.png');
  this.load.image('logo', 'img/nombre.png'  );
  this.load.image('red', 'img/green.png');
  this.load.spritesheet("personaje", "img/batedor_walk.png", { frameWidth: 320, frameHeight: 320 })
}

function create () {
  this.add.image(400, 300, 'sky');
  
  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
      speed:  100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });

  var logo = this.physics.add.image(400, 100, 'personaje');

  logo.setVelocity(Math.random() * 1000, Math.random() * 1000);
  logo.setBounce(Math.random() * 2, Math.random() * 2);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}