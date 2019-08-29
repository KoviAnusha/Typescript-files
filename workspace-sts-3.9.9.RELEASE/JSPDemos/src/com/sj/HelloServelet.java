package com.sj;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sun.rmi.server.Dispatcher;

/**
 * Servlet implementation class HelloServelet
 */
@WebServlet("/hello")
public class HelloServelet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServelet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name=request.getParameter("n1");
		if(name.equals("admin"))
		{
			RequestDispatcher d= request.getRequestDispatcher("success.jsp");
			d.forward(request,response);
		}
		else
		{
			RequestDispatcher d= request.getRequestDispatcher("success.jsp");
			d.forward(request,response);
		}
	}
}
