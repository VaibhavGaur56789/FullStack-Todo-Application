package com.vgdev.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

	private String message;
	
	public HelloWorldBean(String message) { //parameterized Constructor
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
