package com.vgdev.rest.basic.auth;

public class AuthenticationBean {

	private String message;
	
	public AuthenticationBean(String message) { //parameterized Constructor
		this.message = message;
	}

	 // A setter updates the value of a variable, 
	//while a getter reads the value of a variable
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
}
