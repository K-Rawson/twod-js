### OVERVIEW ###

This is a project is aimed at incubating a more advanced game rendering engine. This framework does not rely on 3rd party javascript libraries like jquery to function. However these libraries may be used in parallel.

This project is currently in incubation, so maintaining backwards compatibility will be difficult.

This javascript also used advanced webkit and renderkit methods which allow the browser to render canvas graphics directly with the GPU. This is a new feature within the mozilla javascript engine.

This engine also has a basic physic world built in, server communication for online synchronous play.



### COMING SOON TO VERSION 0.2 ###

  * Ability to toggle the debug HUD on and off with a hotkey
  * Support for map region within the world renderer
  * Add AJAX service to allow for client/server communication **_DONE_**
  * Dynamically load world map using AJAX services **_DONE_**
  * Server side player registration module
  * Create server side game loop that synchronizes clients
  * Add render buffers for server latency
  * Dynamic Client side resource loading
  * JavaScript Compression and Obfuscation of Framework