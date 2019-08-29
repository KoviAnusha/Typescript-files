package com.sj.controller;
import com.sj.dao.*;
import com.sj.model.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sj.dao.*;
@WebServlet("/viewone")
public class ViewABook extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
    public ViewABook() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookDAOImplementation bd=new BookDAOImplementation();
		PrintWriter out=response.getWriter();
		Book b = null;
		try {
			b = bd. ViewBookById(Integer.parseInt(request.getParameter("id")));
			System.out.println(b);
		} catch (NumberFormatException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		out.println("\nThe Record is............\n");
		out.println(b.getid()+" "+b.gettitle()+" "+b.getauthor()+" "+b.getprice());	
	}

}
