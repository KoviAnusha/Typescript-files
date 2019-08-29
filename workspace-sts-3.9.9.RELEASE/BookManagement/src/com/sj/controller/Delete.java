package com.sj.controller;
import com.sj.dao.*;

import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sj.dao.BookDAOImplementation;

/**
 * Servlet implementation class Delete
 */
@WebServlet("/delete")
public class Delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Delete() {
        super();
        // TODO Auto-generated constructor stub
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookDAOImplementation bd=new BookDAOImplementation();
		PrintWriter out=response.getWriter();
		bd.DeleteBook(Integer.parseInt(request.getParameter("id")));
		out.println("\nDeleted the row...........");
	}

}
