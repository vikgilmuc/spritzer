var gameOverState = {

	create: function() {

		game.add.sprite(0,0, 'gameover');

		var nameLabel = game.add.text(570,420, score, { font: '40px Arial', fill: '#423927'});

		
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

		sKey.onDown.addOnce(this.start, this);
		
	},

	start: function() {		
		game.state.start('play');
	}

}