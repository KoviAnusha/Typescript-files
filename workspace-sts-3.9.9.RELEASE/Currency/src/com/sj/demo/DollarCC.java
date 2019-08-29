package com.sj.demo;

import org.springframework.stereotype.Component;

@Component("m")
public class DollarCC implements CurrencyConvertor {

	@Override
	public void convertor(int amount) {
	
		System.out.println("Dollar "+(0.01398 * amount));

	}

}
