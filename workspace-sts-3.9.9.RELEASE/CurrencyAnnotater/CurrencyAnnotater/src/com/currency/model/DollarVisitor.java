package com.currency.model;

public class DollarVisitor implements CurrencyConverter  {

	@Override
	public double converter(double amount) {
		// TODO Auto-generated method stub
		System.out.println("in dollar");
		return amount*1.18;
	}

}
