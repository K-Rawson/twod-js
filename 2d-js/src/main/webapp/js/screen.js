var Screen = function() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.viewport = getViewport();
    this.cursor = new Cursor();
    this.width = (this.viewport.width % 2 === 0) ? this.viewport.width : this.viewport.width + 1;
    this.height = (this.viewport.height % 2 === 0) ? this.viewport.height : this.viewport.height + 1;
    this.resizing = false;
};

Screen.prototype = {
    initialize: function(viewport) {
        this.canvas.width = Game.screen.width;
        this.canvas.height = Game.screen.height;
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = "1000";
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        viewport.appendChild(this.canvas);
        window.onresize = function() {
            Game.screen.resize();
        };
        window.onmousemove = function(e) {
            Game.screen.cursor.update(Game.screen.canvas.getBoundingClientRect(), e);
        };
    },
    setWorld: function(world) {
        this.world = world;
        this.world.initialize(this.context);
    },
    update: function() {
        this.world.update();
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    draw: function() {
        this.world.draw(this.context);
        this.cursor.draw(this.context);
    },
    resize: function() {
        if (Game.screen.resizing)
            return;
        console.log("resize");
        Game.pause();
        Game.screen.resizing = true;
        setTimeout(function() {
            Game.screen.resizing = false;
            Game.screen.viewport = getViewport();
            Game.screen.width = (Game.screen.viewport.width % 2 === 0) ? Game.screen.viewport.width : Game.screen.viewport.width + 1;
            Game.screen.height = (Game.screen.viewport.height % 2 === 0) ? Game.screen.viewport.height : Game.screen.viewport.height + 1;
            Game.screen.canvas.width = Game.screen.width;
            Game.screen.canvas.height = Game.screen.height;
            Game.pause();
        }, Game.skipTicks);
    }
};