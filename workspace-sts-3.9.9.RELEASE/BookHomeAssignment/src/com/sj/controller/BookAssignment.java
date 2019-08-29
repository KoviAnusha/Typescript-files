package com.sj.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sj.dao.BookDAOImplementation;
import com.sj.model.Book;
@WebServlet("/servelet")
public class BookAssignment extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public BookAssignment() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		BookDAOImplementation bd=new BookDAOImplementation();
		String x=request.getParameter("status");
		switch(x)
		{
		case "delete":
			bd.DeleteBook(Integer.parseInt(request.getParameter("id")));
			out.println("\nDeleted the row...........");
			break;
		case "update":
			bd.UpdateBook(Double.parseDouble(request.getParameter("price")), Integer.parseInt(request.getParameter("id")));
			out.println("\nUpdated the table...........");
			break;
		case "insert":
			Book b = null;
			bd.InsertBook(Integer.parseInt(request.getParameter("id")), request.getParameter("title"), request.getParameter("author"), Integer.parseInt(request.getParameter("price")));
			out.println("\nRecords Inserted!!!");
			break;
		case "viewone":
			Book b1 = null;
			try {
				b1 = bd. ViewBookById(Integer.parseInt(request.getParameter("id")));
				System.out.println(b1);
			} catch (NumberFormatException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			out.println("\nThe Record is............\n");
			out.println(b1.getid()+" "+b1.gettitle()+" "+b1.getauthor()+" "+b1.getprice());	
			break;
		case "viewall":
			ArrayList<Book> allbooks=bd.ViewAllBooks();
			for(int i=0;i<allbooks.size();i++)
			{
				out.println(allbooks.get(i).id);
				out.println(allbooks.get(i).title);
				out.println(allbooks.get(i).author);
				out.println(allbooks.get(i).price);
				out.println("\n");
			}
			break;
		}
//		doGet(request, response);
	}

}
