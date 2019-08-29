package com.sj.model;

public class User {

	Calc c;

	public Calc getC() {
		return c;
	}

	public void setC(Calc c) {
		this.c = c;
	}
	public void invokeAdd()
	{
		c.calculate(12, 1);
	}
}
