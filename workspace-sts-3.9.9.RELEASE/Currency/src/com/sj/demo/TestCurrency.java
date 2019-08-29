package com.sj.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestCurrency {

	public static void main(String[] args) {
		
		ApplicationContext c=new ClassPathXmlApplicationContext("beans.xml");
		Money u3=(Money)c.getBean("m");	
		u3.convert(4000);;
	}

}
