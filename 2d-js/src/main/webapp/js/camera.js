var Camera = function(player, zoom) {
    this.zoom = zoom;
    this.x = player.x;
    this.y = player.y;
    this.boundsX = (Game.screen.width / 16) / this.zoom;
    this.boundsY = (Game.screen.height / 14) / this.zoom;
};

Camera.prototype.update = function(player) {
    this.x = player.x;
    this.y = player.y;
};