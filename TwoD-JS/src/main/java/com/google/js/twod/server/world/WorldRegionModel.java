package com.google.js.twod.server.world;

import java.util.ArrayList;
import java.util.List;

public class WorldRegionModel {

	private String id;
	private List<WorldTileModel> tiles = new ArrayList<WorldTileModel>();

	public WorldRegionModel(String id) {

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<WorldTileModel> getTiles() {
		return tiles;
	}

	public void setTiles(List<WorldTileModel> tiles) {
		this.tiles = tiles;
	}
}
