var playState = {

	//preload: function(){
		//game.load.image('balloon', 'assets/balloon.png');
    	//game.load.image('kaktus', 'assets/cactus.png');    
    	//game.load.image('pattern', 'assets/pattern.png'); 
	//},

	create: function(){
		//game.physics.startSystem(Phaser.Physics.ARCADE);
	    game.stage.backgroundColor = "0xffffff";

	    player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

	    game.physics.arcade.enable(player);

	    player.body.bounce.y = 0.1;
	    player.body.gravity.y = -600;    
	    player.body.collideWorldBounds = true;
	 
	    cursors = game.input.keyboard.createCursorKeys();

	    //POSICION X Y, TAMAÑO X, Y
	    ground = game.add.tileSprite(0, 450, 1024, 32, 'pattern');
	    ground.autoScroll(-250, 0);
	    game.physics.arcade.enable(ground);
	    ground.body.allowGravity = false;   
	    ground.body.immovable = true;

	    

	    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateKaktus, this);
	    pipeGenerator.timer.start();

	    kaktusGroup = game.add.group();
	    kaktusGroup.enableBody = true;
	},

	update: function(){
		game.physics.arcade.collide(player, ground, this.getColision, null, this);
    	game.physics.arcade.collide(player, kaktusGroup, this.getColision, null, this);


	    if (cursors.left.isDown)
	    {        
	        player.body.velocity.y = 200;        
	    }
	},

	getColision: function(){
		game.state.start('gameover');
	},

	generateKaktus: function(){
		kaktus = kaktusGroup.create(800, 0, 'kaktus');
    	
    	//game.physics.arcade.enable(kaktus);
    	kaktus.body.velocity.x = -250;
	}
}