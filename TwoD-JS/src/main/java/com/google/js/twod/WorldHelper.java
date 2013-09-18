package com.google.js.twod;

import java.util.ArrayList;
import java.util.List;

import com.google.js.twod.server.world.WorldStore;
import com.google.js.twod.server.world.WorldTileModel;

public class WorldHelper {

	public static List<WorldTileModel> generateWorld(int x, int y) {
		List<WorldTileModel> tiles = new ArrayList<WorldTileModel>();

		for (int yy = (2 / 2) * -1; yy < (2 / 2); yy++) {
			for (int xx = (2 / 2) * -1; xx < (2 / 2); xx++) {
				System.out.println("Status > Create World Tile X=" + xx + " Y=" + yy + " id=" + (WorldTileModel.count + 1));
				tiles.add(new WorldTileModel(1, xx, yy));
			}
		}
		
		return tiles;
	}
	
	public static List<WorldTileModel> getWorldTileRegion(int x, int y) {
		List<WorldTileModel> tiles = new ArrayList<WorldTileModel>();
		//tiles = WorldStore.tiles;
		
		//TODO only get the correct sub list of tiles
		
		return tiles;
	}
}
