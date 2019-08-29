package com.sj.demo;

import org.springframework.stereotype.Component;

public class EuroCC implements CurrencyConvertor {
	
	@Override
	public void convertor(int amount) {

		System.out.println("Euro "+(0.01264*amount));

	}

}
