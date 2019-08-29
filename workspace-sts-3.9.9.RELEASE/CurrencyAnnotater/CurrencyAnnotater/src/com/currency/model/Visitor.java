package com.currency.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;

public class Visitor {

	@Value("3000")
	int amount;
	@Autowired
	@Qualifier("euro")
	CurrencyConverter convert;
	
	public double convertAmount(double x) {
		return convert.converter(x);
		
	}
}
