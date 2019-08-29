package com.sj.first.SpringBoot2.Controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sj.first.SpringBoot2.DAO.UserDAOImplementation;
import com.sj.first.SpringBoot2.model.User;

@RestController
@RequestMapping("/userapp")
public class UserController {

	@Autowired
	UserDAOImplementation i;
	
	public UserController() {
		super();
		this.i=new UserDAOImplementation();
	}
	@RequestMapping("/users/test")
	public String testHello()
	{
		return "User demo";
	}
	@RequestMapping("/users/{name}")
	public User getUser(@PathVariable String name)
	{
		User u=new User();
		u.setId(3);
		u.setName(name);
		return u;
	}
	@RequestMapping("/users/allusers")
	public Collection<User> getAllUser()
	{
		return i.getAllUsers();
	}
	@PostMapping("/users")
	public User createUser(@RequestBody User u1)
	{
		return i.createUsers(u1);
	}
	@RequestMapping("/users1/{id}")
	public User getUserByID(@PathVariable int id)
	{
		return i.getUserbyID(id);
	}
	@DeleteMapping("/users3/{id}")
	public ArrayList<User> deleteID(@PathVariable int id)
	{
		System.out.println("hi");
		return i.deleteID(id);
	}
	@PutMapping("/users4")
	public ArrayList<User> updateID(@RequestBody User user)
	{
		return i.updateID(user);
	}
}
