package com.sta.api.CustomExceptions;

public class StudentNotFoundException extends Exception {
	
	public StudentNotFoundException(String errorMsg) {
		super(errorMsg);
	}
	
}
