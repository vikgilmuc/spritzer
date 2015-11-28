var loadState= {

	preload: function(){

		var loadingLabel = game.add.text(80, 150, 'loading ...',{font: '30px Courier', fill:'#ffffff'});
			game.load.spritesheet('balloon', 'assets/Balloon_Animation/Balloon_Animation_SpriteSheet.png',60,159,18);
	    	game.load.image('kaktus-bottom-1', 'assets/Cactus_1_Bottom.png');    
	    	game.load.image('kaktus-top-1', 'assets/Cactus_1_Top.png');    
	    	game.load.image('kaktus-bottom-2', 'assets/Cactus_2_Bottom.png');    
	    	game.load.image('kaktus-top-2', 'assets/Cactus_2_Top.png');    
	    	game.load.image('kaktus-bottom-3', 'assets/Cactus_3_Bottom.png');    
	    	game.load.image('kaktus-top-3', 'assets/Cactus_3_Top.png');    
	    	game.load.image('kaktus-bottom-4', 'assets/Cactus_4_Bottom.png');    
	    	game.load.image('kaktus-top-4', 'assets/Cactus_4_Top.png');    
	    	game.load.image('pattern', 'assets/pattern.png'); 
	    	game.load.audio('loop','assets/loop.wav');
	    	game.load.audio('pop','assets/pop.wav');
	    	game.load.audio('point','assets/point.wav');
	    	game.load.image('floor', 'assets/Floor+Stones.png');
	    	game.load.image('pyramids', 'assets/pyramids.png');
	    	game.load.image('sky', 'assets/sky.png');
	    	game.load.image('gameover', 'assets/End-Screen.png');
	    	game.load.image('score', 'assets/Score_Counter.png');
	    	game.load.image('start', 'assets/Start-Screen.png');
	},

	create: function() {
		game.state.start('menu');
	}

};



