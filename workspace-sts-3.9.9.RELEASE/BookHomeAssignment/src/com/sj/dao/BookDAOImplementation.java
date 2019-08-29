package com.sj.dao;
import com.sj.model.*;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class BookDAOImplementation implements BookDAO{
	DBConnector d;	
	public BookDAOImplementation()
	{
		System.out.println("\nDatabase connection established!!!!!!!!!");
		this.d=new DBConnector();
	}
		public ArrayList<Book> ViewAllBooks()
		{
			ArrayList<Book> a=new ArrayList<Book>();
			Connection c;
			try {
				c = d.getConnection();
				Statement state= c.createStatement();
				ResultSet users=state.executeQuery("select * from book");
				System.out.println("\nThe Records are............\n");
				while(users.next())
				{
					System.out.println(users.getString(1)+" "+users.getString(2)+" "+users.getString(3)+" "+users.getString(4));
					Book b=new Book(Integer.parseInt(users.getString(1)),users.getString(2),users.getString(3),Integer.parseInt(users.getString(4)));
					a.add(b);
				}
				c.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}	
			return a;
		}	
		public void InsertBook(int id,String title,String author,double price)
		{
			Connection c;
			try {
				c = d.getConnection();
				Statement state= c.createStatement();
				String q1="insert into book values('" +id+ "', '" + title + "', '" + author + "','"+price+"')";
				 ResultSet rs = state.executeQuery(q1);
					System.out.println("\nInserted Records into the table............");
				c.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		public Book ViewBookById(int id) throws SQLException
		{
			Connection c;
				c = d.getConnection();
				PreparedStatement stmt=c.prepareStatement("select * from book where id = ?");  
				stmt.setInt(1, id);
				ResultSet users=stmt.executeQuery();
				users.next();
				System.out.println("\nThe Record is............\n");
				System.out.println(users.getString(1)+" "+users.getString(2)+" "+users.getString(3)+" "+users.getString(4));
				Book b1=new Book(Integer.parseInt(users.getString(1)),users.getString(2),users.getString(3),Integer.parseInt(users.getString(4)));		
			return b1;
		}
		public void DeleteBook(int id)
		{
			DBConnector d=new DBConnector();
			Connection c;
			try {
				c = d.getConnection();
				PreparedStatement stmt=c.prepareStatement("delete from book where id = ?");  
				stmt.setInt(1, id);
				ResultSet users=stmt.executeQuery();
				users.next();
					System.out.println("\nDeleted the row............");
				c.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		public void UpdateBook(double price,int id)
		{
			Connection c;
			try {
				c = d.getConnection();
				PreparedStatement stmt=c.prepareStatement("update book set price=? where id=?");  
				stmt.setDouble(1, price);
				stmt.setInt(2, id);
				ResultSet users=stmt.executeQuery();
				users.next();
					System.out.println("\nUpdated the table............");
				c.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
}
