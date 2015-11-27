var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('balloon', 'assets/balloon.png');
    game.load.image('kaktus', 'assets/cactus.png');    
}

function create() {
	 //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    //game.add.sprite(0, 0, 'kaktus');

    var player;

    player = game.add.sprite(32, game.world.height - 150, 'balloon');
}

function update() {
}