var TwoD = {};

TwoD.fps = 60;
TwoD.maxFrameSkip = 10;
TwoD.skipTicks = 1000 / TwoD.fps;

TwoD.initialize = function() {
	this.entities = [];
	this.viewport = document.body;
	this.input = new Input();
	this.server = new Server();

	this.debug = new Debug();
	this.debug.initialize(this.viewport);

	this.screen = new Screen();
	this.screen.initialize(this.viewport);
	this.screen.setWorld(new World());
};

TwoD.update = function(tick) {
	TwoD.tick = tick;
	this.input.update();
	this.debug.update();
	this.screen.update();
};

TwoD.draw = function() {
	this.debug.draw();
	this.screen.clear();
	this.screen.draw();
};

TwoD.pause = function() {
	this.paused = (this.paused) ? false : true;
};

/*
 * Runs the actual loop inside browser
 */
TwoD.run = (function() {
	var loops = 0;
	var nextGameTick = (new Date).getTime();
	var startTime = (new Date).getTime();
	return function() {
		// TEST for fps increase to 600 bug
		// loops = 0;
		// while (!Game.paused && (new Date).getTime() > nextGameTick && loops <
		// Game.maxFrameSkip) {
		TwoD.update(nextGameTick - startTime);
		nextGameTick += TwoD.skipTicks;
		// loops++;
		// }
		TwoD.draw();
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
			setInterval(cb, TwoD.skipTicks);
		};
	}

	window.onEachFrame = onEachFrame;
})();
