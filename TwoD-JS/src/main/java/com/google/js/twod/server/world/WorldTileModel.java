package com.google.js.twod.server.world;


public class WorldTileModel{

	public static long count = 0;
	private  long id; 
	private int type;
	private int x;
	private int y;

	public WorldTileModel(int type, int x, int y) {
		count++;
		this.id = count;
		this.type = type;
		this.x = x;
		this.y = y;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}
}
