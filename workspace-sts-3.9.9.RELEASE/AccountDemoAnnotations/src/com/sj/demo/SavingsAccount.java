package com.sj.demo;

import org.springframework.stereotype.Component;

@Component("a")
public class SavingsAccount implements Account {

	@Override
	public void withdraw(int amount) {
		
		System.out.println("withdrawing from savings account "+amount);

	}

}
