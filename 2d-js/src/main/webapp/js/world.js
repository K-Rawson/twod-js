var World = function() {
    this.player = new Player(_PlayerConfig);
    this.camera = new Camera(this.player, 1);
};

World.entities = [];
World.tiles = [];

World.prototype = {
    initialize: function() {
        World.loadMap(_MapConfig);
    },
    update: function() {
        this.player.update();
        this.camera.update(this.player);
        for (var i = 0; i < World.tiles.length; i++) {
            World.tiles[i].update();
        }
        for (var i = 0; i < World.entities.length; i++) {
            World.entities[i].update();
        }
    },
    draw: function(context) {
        for (var i = 0; i < World.tiles.length; i++) {
            World.tiles[i].draw(context);
        }
        for (var i = 0; i < World.entities.length; i++) {
            World.entities[i].draw(context);
        }
        this.player.draw(context);
    }
};

World.loadMap = function(map) {
    this.map = map;
    this.map.sprite.image = new Image();
    this.map.sprite.image.src = this.map.sprite.src;
    for (var tile in this.map.tiles) {
        World.tiles.push(new Tile(this.map.tiles[tile].x, this.map.tiles[tile].y, this.map.tiles[tile].id, this.map.tiles[tile].type, this.map.sprite));
    }
};