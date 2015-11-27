var gameOverState = {

	create: function() {
		var nameLabel = game.add.text(80,80, 'LOOOOOOOSER', { font: '50px Arial', fill: 'red'});
		var nameLabel = game.add.text(80,200, 'Press "S" to start again madafaka!', { font: '50px Arial', fill: 'red'});

		
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

		sKey.onDown.addOnce(this.start, this);
		
	},

	start: function() {		
		game.state.start('play');
	}

}