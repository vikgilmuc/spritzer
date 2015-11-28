var loadState= {

	preload: function(){

		var loadingLabel = game.add.text(80, 150, 'loading ...',{font: '30px Courier', fill:'#ffffff'});
			game.load.image('balloon', 'assets/balloon.png');
	    	game.load.image('kaktus-bottom', 'assets/Cactus_1_Bottom.png');    
	    	game.load.image('kaktus-top', 'assets/Cactus_1_Top.png');    
	    	game.load.image('pattern', 'assets/pattern.png'); 
	    	game.load.audio('loop','assets/loop.wav');
	    	game.load.audio('pop','assets/pop.wav');
	    	game.load.audio('point','assets/point.wav');
	    	game.load.image('floor', 'assets/Floor.png');
	    	game.load.image('pyramids', 'assets/pyramids.png');
	    	game.load.image('sky', 'assets/sky.png');
	},

	create: function() {
		game.state.start('menu');
	}

};



