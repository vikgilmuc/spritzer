var game = new Phaser.Game(1024, 576, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
var ground;
var pipeGenerator;
var kaktusGroup;

function preload() {
	game.load.image('balloon', 'assets/balloon.png');
    game.load.image('kaktus', 'assets/cactus.png');    
    game.load.image('pattern', 'assets/pattern.png'); 
}

function create() {	 
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "0xffffff";

    player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.1;
    player.body.gravity.y = -1200;    
    player.body.collideWorldBounds = true;
 
    cursors = game.input.keyboard.createCursorKeys();

    //POSICION X Y, TAMAÑO X, Y
    ground = game.add.tileSprite(0, 450, 1024, 32, 'pattern');
    ground.autoScroll(-250, 0);
    game.physics.arcade.enable(ground);
    ground.body.allowGravity = false;   
    ground.body.immovable = true;

    

    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 1.25, generateKaktus, this);
    pipeGenerator.timer.start();

    kaktusGroup = game.add.group();
    kaktusGroup.enableBody = true;

}

function generateKaktus(){

    kaktus = kaktusGroup.create(800, 0, 'kaktus');
    //game.physics.arcade.enable(kaktus);
    kaktus.body.velocity.x = -250;

}

function getColision(){
    console.log("HAS PERDIDO");
}

function update() {

	game.physics.arcade.collide(player, ground, getColision, null, this);
    game.physics.arcade.collide(player, kaktusGroup, getColision, null, this);


    if (cursors.left.isDown)
    {        
        player.body.velocity.y = 400;        
    }

}