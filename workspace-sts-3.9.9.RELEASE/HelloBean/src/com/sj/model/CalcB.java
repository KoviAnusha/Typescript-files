package com.sj.model;

public class CalcB implements Calc {

	@Override
	public void calculate(int x, int y) {
	
		System.out.println("\nCalculations by CalcB: "+(x+y));

	}

}
