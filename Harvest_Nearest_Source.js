module.exports = function (creep) {
	if(creep.energy < creep.energyCapacity) {
    var nearest_resource = creep.pos.findNearest(Game.SOURCES)
		creep.moveTo(nearest_resource);
		creep.harvest(nearest_resource);
	}
	else {
    var nearest_spawn = creep.pos.findNearest(Game.MY_SPAWNS)
		creep.moveTo(nearest_spawn);
		creep.transferEnergy(nearest_spawn);
	}
};
