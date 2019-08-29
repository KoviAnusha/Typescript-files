package com.sj.dao;

import java.sql.SQLException;
import java.util.ArrayList;

import com.sj.model.Book;
public interface BookDAO {

	public ArrayList<Book> ViewAllBooks();
	public void InsertBook(int id,String title,String author,double price);
	public void UpdateBook(double price,int id);
	public void DeleteBook(int id);	
	public Book ViewBookById(int id) throws SQLException;
}
