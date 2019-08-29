package com.sj.demo;

import org.springframework.stereotype.Component;

@Component("a2")
public class CurrentAccount implements Account {

	@Override
	public void withdraw(int amount) {
		
		System.out.println("withdrawing from current account "+amount);
	}

}
