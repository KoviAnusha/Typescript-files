package com.sj.first.SpringBoot2.DAO;

import java.util.ArrayList;
import java.util.Collection;

import com.sj.first.SpringBoot2.model.User;

public interface UserDAO {
	
	public Collection<User> getAllUsers();
	public User createUsers(User u);
	public ArrayList<User> updateID(User u);
	public User getUserbyID(int id);
	public ArrayList<User> deleteID(int id);
}
