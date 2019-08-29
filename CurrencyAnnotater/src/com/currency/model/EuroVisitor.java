package com.currency.model;

public class EuroVisitor implements CurrencyConverter  {

	@Override
	public double converter(double amount) {
		System.out.println("in Euros");
		
		return amount/1.18;
	}

}
