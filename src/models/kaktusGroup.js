var kaktusGroup = function(game, parent){

	Phaser.Group.call(this, game, parent);

	this.topKaktus = new kaktusObject( game, game.width, 0);	
	this.add(this.topKaktus);

	
}

kaktusGroup.prototype = Object.create(Phaser.Group.prototype);
kaktusGroup.prototype.constructor = kaktusGroup;

kaktusGroup.prototype.update = function() {
  this.nowAlive();
};

kakstusGroup.prototype.nowAlive = function(){
	if(!this.topKaktus.inWorld) {
    	this.exists = false;
  	}
}