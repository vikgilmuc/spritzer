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

	    //KAKTUS COLLECTIONS
	    this.kaktusCollection = game.add.group();
	    this.kaktusCollection.enableBody = true;
	    
	    this.player = game.add.sprite(game.world.width / 2 , game.world.height  / 2, 'balloon');

	    game.physics.arcade.enable(this.player);

	    this.player.body.bounce.y = 0.1;
	    this.player.body.gravity.y = -500;    
	    this.player.body.collideWorldBounds = true;	    
	    this.player.body.height = 83;
	    this.player.animations.add('animation',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],10,true);
	    this.player.animations.add('crash',[17,18],10,true);
	    this.player.animations.play('animation');

	    console.log( this.player.body.heigh );
	 
	    cursors = game.input.keyboard.createCursorKeys();	    

	    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 2.15, this.generateKaktus, this);
	    pipeGenerator.timer.start();

    	
 
    	//SCORE BOARD
	    //game.add.text(10,10, 'POINTS: ', { font: '20px Arial', fill: '#423927'});
	    game.add.sprite(20,20, 'score');
	    this.scorestring = game.add.text(130,36, '0', { font: '20px Arial', fill: '#423927'});
	    
	    //SOUNDS
		this.popSound = game.add.audio('pop');
		this.pointSound = game.add.audio('point');
		this.loopSound = game.add.audio('loop');
		this.loopSound.loop= true;
		this.loopSound.play();



	},

	update: function(){

		game.physics.arcade.collide(this.player, floor, this.getColision, null, this);    	

    	this.kaktusCollection.forEach( function( kaktusGroup ) {
        	game.physics.arcade.collide(this.player, kaktusGroup, this.getColision, null, this);

        	if( kaktusGroup.exists && !kaktusGroup.scored && kaktusGroup.onMid ){
        		kaktusGroup.scored = true;
        		score++;
        		this.pointSound.play();	
    			this.updateText( score ); 
    		}

    	}, this);

	    if (cursors.left.isDown)
	    {        
	        this.player.body.velocity.y = 200;        
	    }

	   	 	
	},
	

	updateText: function( score ){
    	this.scorestring.setText( score.toString() );
	},

	getColision: function(){
		this.popSound.play();
		this.player.animations.play('crash');
		
		
		game.paused = true;
		setTimeout( 
			function(){ 
				game.paused = false;
			}, 
			3000
		);

		this.loopSound.stop();
		game.state.start('gameover');
		

	},

	generateKaktus: function(){		
		this.oKaktusGroup = new kaktusGroup( game, this.kaktusCollection )

		//this.oKaktusGroup.y = this.game.rnd.integerInRange(-100, 100);
		this.kaktusCollection.add( this.oKaktusGroup );
			
	}
}