package com.vgdev.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Step1> Tell springMVC it is a Controller(Handling HTTP request)
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method - returns "Hello World"
	//@RequestMapping(Map request to the URI)
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has happened!");
		return new HelloWorldBean("Hello World");
	}
	
	///hello-world/path-variable/vgdev
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
