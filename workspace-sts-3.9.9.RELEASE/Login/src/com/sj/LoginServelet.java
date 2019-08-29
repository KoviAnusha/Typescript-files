package com.sj;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServelet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public LoginServelet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String User=request.getParameter("Userid");
		String password=request.getParameter("password");
		PrintWriter out=response.getWriter();
		if(User.equals("admin") && password.equals("admin"))
		{
			out.println("<html><b><i>Welcome "+User+"<html>");
		}
		else
		{
			out.println("Not a valid user "+User);
		}
	}
}
