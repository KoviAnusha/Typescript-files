package com.sj.demo;

public class CurrentAccount implements Account {

	@Override
	public void withdraw(int amount) {
		
		System.out.println("withdrawing from current account "+amount);
	}

}
