var playState = {


	create: function(){

		score = 0;
	    game.stage.backgroundColor = "0xffffff";

	    sky = game.add.tileSprite(0, 0, game.world.width, 288,'sky');	    

	    pyramids = game.add.tileSprite(0, game.world.height - 378, game.world.width, 378,'pyramids');
	    pyramids.autoScroll(-40, 0);


	    floor = game.add.tileSprite(0, game.world.height - 71, game.world.width, 71,'floor');
	    floor.autoScroll(-200, 0);
	    game.physics.arcade.enable(floor);
	    floor.body.allowGravity = false;   
	    floor.body.immovable = true;

	    player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

	    game.physics.arcade.enable(player);

	    player.body.bounce.y = 0.1;
	    player.body.gravity.y = -500;    
	    player.body.collideWorldBounds = true;
	 
	    cursors = game.input.keyboard.createCursorKeys();

	    /*
	    ** SUELO
	    */
	    //POSICION X Y, TAMAÑO X, Y	    
	    


	    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 3.25, this.generateKaktus, this);
	    pipeGenerator.timer.start();

    	//KAKTUS COLLECTIONS
	    this.kaktusCollection = game.add.group();
	    this.kaktusCollection.enableBody = true;

	    

	},

	update: function(){

		game.physics.arcade.collide(player, floor, this.getColision, null, this);    	

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