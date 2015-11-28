var loadState= {

	preload: function(){

		var loadingLabel = game.add.text(80, 150, 'loading ...',{font: '30px Courier', fill:'#ffffff'});
			game.load.image('balloon', 'assets/balloon.png');
	    	game.load.image('kaktus', 'assets/cactus.png');    
	    	game.load.image('pattern', 'assets/pattern.png'); 

	},

	create: function() {
		game.state.start('menu');
	}

};



