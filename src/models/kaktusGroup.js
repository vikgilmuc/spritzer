var kaktusGroup = function(game, parent){

	Phaser.Group.call(this, game, parent);
	
	this.topKaktus = new kaktusObject( game, game.world.width, -90, 'kaktus-top');
	this.bottomKaktus = new kaktusObject( game, game.world.width, game.world.height - 190, 'kaktus-bottom');

	this.add(this.topKaktus);
	this.add(this.bottomKaktus);
	this.exists = true;
	this.scored = false;
	this.onMid = false;

	
}

kaktusGroup.prototype = Object.create(Phaser.Group.prototype);
kaktusGroup.prototype.constructor = kaktusGroup;

kaktusGroup.prototype.update = function() {	
	this.nowAlive();
	this.isOnMid();
};

kaktusGroup.prototype.nowAlive = function(){

	if(!this.topKaktus.inWorld) {	
    	this.exists = false;    	
  	}

}

kaktusGroup.prototype.isOnMid = function(){

	if( this.topKaktus.x < game.world.width / 2 ) {	
    	this.onMid = true;    	
  	}

}