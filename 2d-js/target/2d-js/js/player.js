function Player(config) {
    this.w = config.w;
    this.l = config.l;
    this.x = 0;
    this.y = 0;
    this.zoomW = this.w;
    this.zoomL = this.l;
    this.sourceX = 0;
    this.sourceY = 0;
    this.posX = (Game.screen.width / 2) - (this.w / 2); 
    this.posY = (Game.screen.height / 2) - (this.l / 2);
    this.velocityX = 0;
    this.velocityY = 0;
    this.velocityMax = config.velocityMax;
    this.velocityMin = config.velocityMin;
    this.velocityUnit = config.velocityUnit;
    this.image = new Image();
    this.image.src = config.sprite;
};

Player.prototype.initialize = function(context) {
    this.context = context;
};

Player.prototype.update = function() {
    if (Game.input.isKeyDown(Keys.A)) {
        this.velocityX -= (this.velocityX > this.velocityMin) ? this.velocityUnit : 0;
        this.x += this.velocityX;
    } else if (Game.input.isKeyDown(Keys.D)) {
        this.velocityX += (this.velocityX < this.velocityMax) ? this.velocityUnit : 0;
        this.x += this.velocityX;
    } else {
        this.velocityX = 0;
    }
    if (Game.input.isKeyDown(Keys.W)) {
        this.velocityY -= (this.velocityY > this.velocityMin) ? this.velocityUnit : 0;
        this.y += this.velocityY;
    } else if (Game.input.isKeyDown(Keys.S)) {
        this.velocityY += (this.velocityY < this.velocityMax) ? this.velocityUnit : 0;
        this.y += this.velocityY;
    } else {
        this.velocityY = 0;
    }

    this.zoomW = this.w / Game.screen.world.camera.zoom;
    this.zoomL = this.l / Game.screen.world.camera.zoom;

    this.posX += this.velocityX / Game.screen.world.camera.zoom;
    this.posY += this.velocityY / Game.screen.world.camera.zoom;

    if(this.posX < 0 + Game.screen.world.camera.boundsX) {
        this.posX -= this.velocityX / Game.screen.world.camera.zoom;;
    }
    if(this.posX > Game.screen.width - this.zoomW - Game.screen.world.camera.boundsX) {
        this.posX -= this.velocityX / Game.screen.world.camera.zoom;;
    }
    if(this.posY < 0 + Game.screen.world.camera.boundsY) {
        this.posY -= this.velocityY / Game.screen.world.camera.zoom;;
    }
    if(this.posY > Game.screen.height - this.zoomL - Game.screen.world.camera.boundsY) {
        this.posY -= this.velocityY / Game.screen.world.camera.zoom;;
    }
};
Player.prototype.draw = function(context) {
    context.drawImage(this.image, this.sourceX, this.sourceY, this.w, this.l, this.posX, this.posY, this.zoomW, this.zoomL);
};