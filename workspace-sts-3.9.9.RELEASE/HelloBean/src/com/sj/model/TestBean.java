package com.sj.model;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestBean {
	public static void main(String[] args) {
	
		ApplicationContext c=new ClassPathXmlApplicationContext("beans.xml");
//		Hello h1=(Hello)c.getBean("b1");
//		h1.sayHello();

		User u=(User)c.getBean("user1");	
		u.invokeAdd();
	}
}
