package com.google.js.twod.server.world;

import java.util.HashMap;
import java.util.Map;

public class WorldStore {

	public static Map<String, WorldRegionModel> regions = new HashMap<String, WorldRegionModel>();

	public static WorldRegionModel createRegion(final int x, final int y) {
		return new WorldRegionModel(x + " " + y);
	}
	
	public static WorldRegionModel addRegion(final WorldRegionModel region) {
		return regions.put(region.getId(), region);
	}
}
