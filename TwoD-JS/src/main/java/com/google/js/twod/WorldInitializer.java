package com.google.js.twod;

import javax.servlet.ServletContextEvent;

import com.google.js.twod.server.world.WorldStore;

public class WorldInitializer implements javax.servlet.ServletContextListener {

	public void contextInitialized(ServletContextEvent sce) {
		//long time = System.currentTimeMillis();
		System.out.println("Status > Startup Game Server Server...");
		//System.out.println("Status > Generating World In Memory...");
		
		//WorldStore.tiles = WorldHelper.generateWorld(0, 0);
		
		//System.out.println("Status > Generated " + WorldStore.tiles.size() + " World Tiles");
		//System.out.println("Status > World Created In " + (System.currentTimeMillis() - time) + "ms");
	}

	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("Status > Shutdown Game Server Server");
	}
}
