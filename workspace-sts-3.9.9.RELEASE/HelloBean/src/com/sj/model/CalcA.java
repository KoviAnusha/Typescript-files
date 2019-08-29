package com.sj.model;

public class CalcA implements Calc {

	@Override
	public void calculate(int x, int y) {
	
		System.out.println("\nCalculations by CalcA: "+(x+y));

	}

}
