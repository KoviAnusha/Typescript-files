package com.sj.demos.SpringBoot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/hello")
public class HelloContrlloer {
	
	@RequestMapping("/hi")
	public String sayHello()
	{
		return "Hello Boot";
	}
	@RequestMapping("/hiiii")
	public @ResponseBody String sayhi()
	{
		return "hiii Boot";
	}
}
