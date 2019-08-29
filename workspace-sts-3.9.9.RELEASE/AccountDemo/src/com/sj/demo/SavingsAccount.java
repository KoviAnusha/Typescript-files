package com.sj.demo;

public class SavingsAccount implements Account {

	@Override
	public void withdraw(int amount) {
		
		System.out.println("withdrawing from savings account "+amount);

	}

}
