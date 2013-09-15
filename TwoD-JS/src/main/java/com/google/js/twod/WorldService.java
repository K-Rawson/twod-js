package com.google.js.twod;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.js.twod.server.world.WorldStore;

public class WorldService extends HttpServlet {

	Gson gson = new Gson();

	/**
	 * Generate unique id for this Web service
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Handles the get method for the restful client request
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String location = request.getParameter("loc");
		String json = new Gson().toJson(WorldStore.tiles);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		Writer writer = null;

		try {
			writer = response.getWriter();
			writer.write(json);
		} finally {
			writer.close();
		}
	}
}
