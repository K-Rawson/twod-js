var Game = {};

Game.fps = 60;
Game.maxFrameSkip = 10;
Game.skipTicks = 1000 / Game.fps;

Game.initialize = function() {
    this.entities = [];
    this.viewport = document.body;

    this.input = new Input();

    this.debug = new Debug();
    this.debug.initialize(this.viewport);

    this.screen = new Screen();
    this.screen.initialize(this.viewport);
    this.screen.setWorld(new World());
};

Game.update = function(tick) {
    Game.tick = tick;
    this.input.update();
    this.debug.update();
    this.screen.update();
};

Game.draw = function() {
    this.debug.draw();
    this.screen.clear();
    this.screen.draw();
};

Game.pause = function() {
    this.paused = (this.paused) ? false : true;
};

/*
 * Runs the actual loop inside browser
 */
Game.run = (function() {
    var loops = 0;
    var nextGameTick = (new Date).getTime();
    var startTime = (new Date).getTime();
    return function() {
    	//TEST for fps increase to 600 bug
        //aloops = 0;
        //while (!Game.paused && (new Date).getTime() > nextGameTick && loops < Game.maxFrameSkip) {
            Game.update(nextGameTick - startTime);
            //nextGameTick += Game.skipTicks;
          //  loops++;
        //}
        Game.draw();
    };
})();

(function() {
    var onEachFrame;
    if (window.webkitRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                webkitRequestAnimationFrame(_cb);
            };
            _cb();
        };
    } else if (window.mozRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                mozRequestAnimationFrame(_cb);
            };
            _cb();
        };
    } else {
        onEachFrame = function(cb) {
            setInterval(cb, Game.skipTicks);
        };
    }

    window.onEachFrame = onEachFrame;
})();