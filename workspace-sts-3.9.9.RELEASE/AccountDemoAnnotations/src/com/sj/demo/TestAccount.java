package com.sj.demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestAccount {

	public static void main(String[] args) {
		
		ApplicationContext c=new ClassPathXmlApplicationContext("beans.xml");
//		Person u=(Person)c.getBean("person1");	
//		Person u1=(Person)c.getBean("person1");	
//		u.invokeWithdraw(5000);
//		if(u==u1)
//		{
//			System.out.println("reference same");
//		}
//		Person u3=(Person)c.getBean("person2");	
//		u3.invokeWithdraw(5000);
//		Person u4=(Person)c.getBean("person3");	
//		u4.invokeWithdraw(6000);
//		((AbstractApplicationContext) c).close();
		
		Person u3=(Person)c.getBean("p1");	
		u3.invokeWithdraw(5000);
	}

}
