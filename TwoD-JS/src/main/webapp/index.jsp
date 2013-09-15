<html>
    <head>
        <meta charset="utf-8">
        <title>Hello - 2D-JS</title>
        <link type="text/css" href="css/reset.css" rel="stylesheet"/>
        <script type="text/javascript" charset="utf-8" src="js/twod.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/util.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/input.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/debug.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/camera.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/cursor.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/screen.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/world.js"></script>  
        <script type="text/javascript" charset="utf-8" src="js/tile.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/player.js"></script>
        <script type="text/javascript" charset="utf-8" src="js/server.js"></script>
    </head>
    <body oncontextmenu="return false" style="overflow:hidden;cursor:none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">
        <script type="text/javascript" charset="utf-8">
            //Sample specific code for player
            var _PlayerConfig = {
            		velocityMin: -1,
            		velocityMax: 1,
            		velocityUnit: 1,
            		w: 64,
            		l: 64,
            		sprite: "images/player/Spr_E_Lucy.png"
            }

	        TwoD.initialize();	        
            window.onEachFrame(TwoD.run);
        </script>
    </body>
</html>