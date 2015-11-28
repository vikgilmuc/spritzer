var kaktusGroup = function(game, parent){

	Phaser.Group.call(this, game, parent);
		
	this.randomType = new randomType( game );

	this.topKaktus = new kaktusObject( game, game.world.width, this.randomType.getTopY(), this.randomType.getTopFileName());
	this.bottomKaktus = new kaktusObject( game, game.world.width, this.randomType.getBottomY() , this.randomType.getBottomFileName());

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
    	this.destroy();   	
  	}

}

kaktusGroup.prototype.isOnMid = function(){

	if( this.topKaktus.x < game.world.width / 2 ) {	
    	this.onMid = true;    	
  	}

}