package com.sj.model;
public class Book {
	public int id;
	public String title,author;
	public double price;
	public Book()
	{
		super();
	}
	public Book (int id, String title, String author,double price)
	{
		super();
		this.id=id;
		this.author=author;
		this.title=title;
		this.price=price;
	}
	public int getid()
	{
		return id;
	}
	public double getprice()
	{
		return price;
	}
	public String gettitle()
	{
		return title;
	}
	public String getauthor()
	{
		return author;
	}
}
