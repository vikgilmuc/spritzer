var menuState = {

	create: function() {
		
		game.add.sprite(0,0, 'start');

		var nameLabel = game.add.text(470,420, 'RESS "S"', { font: '30px Arial', fill: '#423927'});


		
		var sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

		sKey.onDown.addOnce(this.start, this);
		
	},

	start: function() {		
		game.state.start('play');
	}
	
}