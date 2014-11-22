    for (var i in Memory.creeps) {
        var creatingIn = Game.spawns.Spawn1.room.find(Game.MY_SPAWNS,{filter: function(object) {
            if (!object.spawning) {
                return false;
            } else {
                return object.spawning.name == i;
                
            }
        }
        });
        
        if(!Game.creeps[i] && creatingIn.iength === 0) {
            Memory.creeps[i] = undefined;
        }
    }