var game = new Phaser.Game(800, 450, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
function preload() {
	game.load.image('balloon', 'assets/balloon.png');
    game.load.image('kaktus', 'assets/cactus.png');    
}

function create() {
	 //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    //game.add.sprite(0, 0, 'kaktus');

    //var player;

    player = game.add.sprite(32, game.world.height - 150, 'balloon');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = -300;
    player.body.collideWorldBounds = true;

cursors = game.input.keyboard.createCursorKeys();

	console.log(cursors);
}

function update() {

	//game.physics.arcade.collide(player, platforms);

	//player.body.velocity.y = 10;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.y = 150;
        console.log("pulsa");
        //player.animations.play('left');
    }



}