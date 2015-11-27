var loadState= {

preload: function{

	var loadingLabel = game.add.text(80, 150, 'loading ...',{font: '30ps Courier', fill:'#ffffff'});
	//game.load.image()
	//


},

create: function() {
	game.state.start('menu');
}

};





var game = new Phaser.Game(1024, 576, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var cursors;
var player;
var ground;
var kaktusGenerator;
var kaktus;
var kaktuses;
function preload() {
	game.load.image('balloon', 'assets/balloon.png');
    game.load.image('kaktus', 'assets/cactus.png');    
    game.load.image('pattern', 'assets/pattern.png'); 
}