<html>
    <head>
        <meta charset="utf-8">
        <title>Grow</title>
        <link type="text/css" href="css/reset.css" rel="stylesheet"/>
        <script type="text/javascript" charset="utf-8" src="js/util.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/game.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/input.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/debug.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/camera.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/cursor.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/screen.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/world.js"></script>  
        <script type="text/javascript" charset="utf-8" src="js/tile.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/player.js"></script>
    </head>
    <body oncontextmenu="return false" style="overflow:hidden;cursor:none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">
        <script type="text/javascript" charset="utf-8">
        var _PlayerConfig = {
        		velocityMin: -1,
        		velocityMax: 1,
        		velocityUnit: 1,
        		w: 64,
        		l: 64,
        		sprite: "images/player/Spr_E_Lucy.png"
        }
        var _MapConfig = {
        	    sprite: {
        	        "src": "images/tiles/G000M800.BMP",
        	        "tileW": 128,
        	        "tileL": 128
        	    },
        	    tiles: []
        	    };
	    
	    for(var y = -16; y < 16; y++) {
	    	for(var x = -16; x < 16; x++) {
	    		_MapConfig.tiles.push( { "type": 1, "x": x, "y": y } );
	    	}
	    }
        </script>
        <script type="text/javascript" charset="utf-8">
            Game.initialize();
            window.onEachFrame(Game.run);
        </script>
    </body>
</html>