package com.currency.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.currency.model.Visitor;

public class TestCurrency {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		@SuppressWarnings("resource")
		ApplicationContext factory=new ClassPathXmlApplicationContext("currency.xml");
		Visitor v=(Visitor) factory.getBean("visitor");
		System.out.println(v.convertAmount(3000));
	}

}
