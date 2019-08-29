package com.i18.test;

import java.util.Locale;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class TestIi18n {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 @SuppressWarnings("resource")
		ApplicationContext applicationContext = new  ClassPathXmlApplicationContext("i18ncofig.xml");
	 
	        Locale english = Locale.ENGLISH;
	       /* System.out.println("Enter ur First Name");
	        DataInputStream d = new DataInputStream(System.in);
	        String firstName = d.readLine();
	        System.out.println("Enter ur Last Name");
	        String lastName = d.readLine();*/
	 
	        System.out.println("English:");
	        System.out.println(applicationContext.getMessage("nameMsg",
	                new Object[] { "Anusha", "Kovi" }, english));
	        // ***English
	        System.out.println("Dutch:");
	        Locale dutch = new Locale("du");
	        System.out.println(applicationContext.getMessage("msg", null, dutch));
	 
	        System.out.println("French:");
	        Locale french = new Locale("fn");
	        System.out.println(applicationContext.getMessage("msg", null, french));

	}

}
