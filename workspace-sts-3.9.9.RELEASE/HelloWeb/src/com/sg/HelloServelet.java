package com.sg;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloServelet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public HelloServelet() {
        super();
        
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		String name=request.getParameter("n1");
		if(name.equals("admin"))
		{
			RequestDispatcher d= request.getRequestDispatcher("/success.jsp");
			d.forward(request,response);
		}
		else
		{
			RequestDispatcher d= request.getRequestDispatcher("/index.jsp");
			request.setAttribute("flag", true);
			d.forward(request,response);
			out.println("Invalid User");
		}
	}

}
