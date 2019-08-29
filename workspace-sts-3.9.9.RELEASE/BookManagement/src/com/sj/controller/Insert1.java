package com.sj.controller;
import com.sj.dao.*;
import com.sj.model.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sj.dao.*;
import java.io.*;


@WebServlet("/insert")
public class Insert1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Insert1() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookDAOImplementation bd=new BookDAOImplementation();
		PrintWriter out=response.getWriter();
		Book b = null;
		bd.InsertBook(Integer.parseInt(request.getParameter("id")), request.getParameter("title"), request.getParameter("author"), Integer.parseInt(request.getParameter("price")));
		out.println("\nRecords Inserted!!!");
	}

}
