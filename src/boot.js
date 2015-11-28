var bootState= {


	create : function() {
		console.log("enboot");
		game.physics.startSystem(Phaser.Physics.Arcade);

		game.state.start('load');
	}
	
}