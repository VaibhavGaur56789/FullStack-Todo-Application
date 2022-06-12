package com.vgdev.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Step1> Tell springMVC it is a Controller(Handling HTTP request)
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	//GET
	//URI - /hello-world
	//method - returns "Hello World"
	//@RequestMapping(Map request to the URI)
	
	//hello-world-bean
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some Error has happened!");
		return new AuthenticationBean("You are authenticated");
	}
	
	///hello-world/path-variable/vgdev
	
}
