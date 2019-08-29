package com.sj.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
@Component("m")
public class Money {

	@Value("13")
	int id;
	@Autowired
	CurrencyConvertor c;
	public Money(int id, CurrencyConvertor c) {
		super();
		this.id = id;
		this.c = c;
	}
	public Money() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public CurrencyConvertor getC() {
		return c;
	}
	public void setC(CurrencyConvertor c) {
		this.c = c;
	}
	public void convert(int amount)
	{
		c.convertor(amount);;
	}
}
