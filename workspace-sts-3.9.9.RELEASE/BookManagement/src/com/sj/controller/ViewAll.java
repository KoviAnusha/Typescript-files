package com.sj.controller;
import com.sj.dao.*;
import com.sj.model.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sj.dao.BookDAOImplementation;
@WebServlet("/view")
public class ViewAll extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public ViewAll() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookDAOImplementation bd=new BookDAOImplementation();
		PrintWriter out=response.getWriter();
		ArrayList<Book> allbooks=bd.ViewAllBooks();
		for(int i=0;i<allbooks.size();i++)
		{
			out.println(allbooks.get(i).id);
			out.println(allbooks.get(i).title);
			out.println(allbooks.get(i).author);
			out.println(allbooks.get(i).price);
			out.println("\n");
		}
	}
}
