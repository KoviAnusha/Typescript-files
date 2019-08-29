package com.sj.demo;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Person implements InitializingBean,DisposableBean{
	String name;
	int id;
	Account a;

	public Person() {
		super();
		System.out.println("parameterless");
		// TODO Auto-generated constructor stub
	}
	public Person(String name, int id, Account a) {
		super();
		this.name = name;
		this.id = id;
		this.a = a;
		System.out.println("parameter");
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Account getA() {
		return a;
	}

	public void setA(Account a) {
		this.a = a;
		System.out.println("set account");
	}

	public void invokeWithdraw(int amount)
	{
		a.withdraw(amount);
		System.out.println(id+ " " + name );
	}
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("destroy");
	}
	
	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("initialize");
	}
}
