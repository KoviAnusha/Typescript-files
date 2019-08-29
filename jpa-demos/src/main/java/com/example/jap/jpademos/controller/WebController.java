package com.example.jap.jpademos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jap.jpademos.DAO.ProjectDAO;
import com.example.jap.jpademos.model.Project;

@RestController
@RequestMapping("/projectapp")
public class WebController {

	@Autowired
	ProjectDAO repo;
	public WebController() {
		super();
		// TODO Auto-generated constructor stub
	}
	@GetMapping("/test")
	public String test()
	{
		return "hello world";
	}
	@PostMapping("/projects")
	public Project createProject(@RequestBody Project project)
	{
		return repo.save(project);
	}
	@GetMapping("/projects/{id}")
	public Optional<Project> findById(@PathVariable Integer id)
	{
		return repo.findById(id);
	}
	@GetMapping("/projects")
	public List<Project> findAll()
	{
		return repo.findAll();
	}
	@DeleteMapping("/projects")
	public void deleteById(Integer id)
	{
		
	}
	@PutMapping("/projects/{id}")
	public boolean existsById(@RequestBody Integer id)
	{
		
		return false;
	}
	@PutMapping("/projects")
	public Project updateProject(@RequestBody Project project)
	{
		Optional<Project> toUpdate=repo.findById(project);
		Project project1=toUpdate.get();
		project1.setId(id);
		project1.setId(project.getId());
	}
}
