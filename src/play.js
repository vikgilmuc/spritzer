var playState = {


	create: function(){

		this.score = 0;

	    game.stage.backgroundColor = "0xffffff";

	    sky = game.add.tileSprite(0, 0, game.world.width, 288,'sky');	    

	    pyramids = game.add.tileSprite(0, game.world.height - 378, game.world.width, 378,'pyramids');
	    pyramids.autoScroll(-40, 0);


	    floor = game.add.tileSprite(0, game.world.height - 71, game.world.width, 71,'floor');
	    floor.autoScroll(-200, 0);
	    game.physics.arcade.enable(floor);
	    floor.body.allowGravity = false;   
	    floor.body.immovable = true;

	    //KAKTUS COLLECTIONS
	    this.kaktusCollection = game.add.group();
	    this.kaktusCollection.enableBody = true;
	    
	    player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

	    game.physics.arcade.enable(player);

	    player.body.bounce.y = 0.1;
	    player.body.gravity.y = -500;    
	    player.body.collideWorldBounds = true;	    
	    player.body.height = 83;

	    console.log( player.body.heigh );
	 
	    cursors = game.input.keyboard.createCursorKeys();	    

	    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 2.15, this.generateKaktus, this);
	    pipeGenerator.timer.start();

    	
 
    	//SCORE BOARD
	    game.add.text(10,10, 'POINTS: ', { font: '20px Arial', fill: 'red'});
	    this.scorestring = game.add.text(100,10, '0', { font: '20px Arial', fill: 'red'});
	    
	    //SOUNDS
		this.popSound = game.add.audio('pop');
		this.pointSound = game.add.audio('point');
		this.loopSound = game.add.audio('loop');
		this.loopSound.loop= true;
		this.loopSound.play();



	},

	update: function(){

		game.physics.arcade.collide(player, floor, this.getColision, null, this);    	

    	this.kaktusCollection.forEach( function( kaktusGroup ) {
        	game.physics.arcade.collide(player, kaktusGroup, this.getColision, null, this);

        	if( kaktusGroup.exists && !kaktusGroup.scored && kaktusGroup.onMid ){
        		kaktusGroup.scored = true;
        		this.score++;
        		this.pointSound.play();	
    			this.updateText( this.score ); 
    		}

    	}, this);

	    if (cursors.left.isDown)
	    {        
	        player.body.velocity.y = 200;        
	    }

	   	 	
	},
	

	updateText: function( score ){
    	this.scorestring.setText( score.toString() );
	},

	getColision: function(){
		this.popSound.play();
		game.paused = true;
		setTimeout( function()
			{ 
				game.paused = false;
			}, 
			3000);
		
		this.loopSound.stop();
		game.state.start('gameover');
		

	},

	generateKaktus: function(){		
		this.oKaktusGroup = new kaktusGroup( game, this.kaktusCollection )

		//this.oKaktusGroup.y = this.game.rnd.integerInRange(-100, 100);
		this.kaktusCollection.add( this.oKaktusGroup );
			
	}
}