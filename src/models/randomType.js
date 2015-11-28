var randomType = function( game ){
	this.typeNumber = game.rnd.integerInRange(1, 4);
}
randomType.prototype.constructor = randomType;

randomType.prototype.getTopFileName = function(){
		return 'kaktus-top-'+this.typeNumber;
}

randomType.prototype.getBottomFileName = function(){
		return 'kaktus-bottom-'+this.typeNumber;
}

randomType.prototype.getTopY = function(){		
	switch(this.typeNumber){
		case 1:
			return -90;
		break;
		case 2:
			return -90;
		break;
		case 3:
			return -90;
		break;
		case 4:
			return -90;
		break;
	}	
}

randomType.prototype.getBottomY = function(){

	switch(this.typeNumber){
		case 1:
			return game.world.height - 190;
		break;
		case 2:
			return game.world.height - 190;
		break;
		case 3:
			return game.world.height - 190
		break;
		case 4:
			return game.world.height - 190
		break;
	}
}