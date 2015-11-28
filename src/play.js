var playState = {


	create: function(){

		score = 0;
	    game.stage.backgroundColor = "0xffffff";

	    player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

    	//kaktus_prueba = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'kaktus');
	    

	    game.physics.arcade.enable(player);

	    player.body.bounce.y = 0.1;
	    player.body.gravity.y = -500;    
	    player.body.collideWorldBounds = true;
	 
	    cursors = game.input.keyboard.createCursorKeys();

	    /*
	    ** SUELO
	    */
	    //POSICION X Y, TAMAÑO X, Y
	    ground = game.add.tileSprite(0, 450, 1024, 32, 'pattern');
	    ground.autoScroll(-50, 0);
	    game.physics.arcade.enable(ground);
	    ground.body.allowGravity = false;   
	    ground.body.immovable = true;

	    

	    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 1.25, this.generateKaktus, this);
	    pipeGenerator.timer.start();

    	//KAKTUS COLLECTIONS
	    this.kaktusCollection = game.add.group();
	    this.kaktusCollection.enableBody = true;

	    

	},

	update: function(){

		//game.physics.arcade.collide(player, ground, this.getColision, null, this);    	

    	this.kaktusCollection.forEach( function( kaktusGroup ) {
        	game.physics.arcade.collide(player, kaktusGroup, this.getColision, null, this);
    	}, this);

	    if (cursors.left.isDown)
	    {        
	        player.body.velocity.y = 200;        
	    }

	},

	getColision: function(){

		game.state.start('gameover');

	},

	generateKaktus: function(){

		this.kaktusCollection.add( new kaktusGroup( game, this.kaktusCollection ) );
		

	}
}