var game = new Phaser.Game(800, 450, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
var ground;
function preload() {
	game.load.image('balloon', 'assets/balloon.png');
    game.load.image('kaktus', 'assets/cactus.png');    
    game.load.image('pattern', 'assets/pattern.png'); 
}

function create() {	 
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "0xffffff";

    player = game.add.sprite(60, game.world.height - 150, 'balloon');

    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = -600;
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();

    //POSICION X Y, TAMAÑO X, Y
    ground = game.add.tileSprite(0, 400, 335, 112, 'pattern');
    ground.autoScroll(-50, 0);
}

function update() {

	game.physics.arcade.collide(player, ground);


    if (cursors.left.isDown)
    {        
        player.body.velocity.y = 350;        
    }



}