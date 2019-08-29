package com.example.jap.jpademos.DAO;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jap.jpademos.model.Project;
@Repository
public interface ProjectDAO extends JpaRepository<Project, Integer> {

	public Project save(Project project);
	public Optional<Project> findById(Integer id);
	public List<Project> findAll();
	public void deleteById(Integer id);
	public boolean existsById(Integer id);
	
}
