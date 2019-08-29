package com.sj.first.SpringBoot2.DAO;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.springframework.stereotype.Repository;

import com.sj.first.SpringBoot2.model.User;
@Repository
public class UserDAOImplementation implements UserDAO {

	ArrayList<User> u;
	public UserDAOImplementation() {
		u=new ArrayList<User>(); 
	}

	@Override
	public Collection<User> getAllUsers() {
		  
		User u1=new User();
		u1.setId(3);
		u1.setName("abc");
		u.add(u1);
		User u3=new User();
		u3.setId(4);
		u3.setName("def");
		u.add(u3);
		return u;
	}

	@Override
	public User createUsers(User u1) {
		u.add(u1);
		return u1;	
	}
	@Override
	public User getUserbyID(int id) {
		
		 Iterator i = u.iterator();
		 User us=null;
		 while (i.hasNext()) {
			 User ui = (User) i.next();
			 if(ui.getId()==id)
			 {
				 us = ui;
			 }
		 }
		 return us;
	}
	public ArrayList<User> deleteID(int id) {
		
		 Iterator i = u.iterator();
		 while (i.hasNext()) {
			 
			 User ui = (User) i.next();
			 if(ui.getId()==id)
			 {
				 i.remove();
			 }
		 }	 
		 System.out.println("delete");
		 return u;
	} 
//	@SuppressWarnings("unlikely-arg-type")
	public ArrayList<User> updateID(User user) {
		User ui=null;
//		 Iterator i = u.iterator();
////		 while (i.hasNext()) {
////			 
////			 ui = (User) i.next();
////			 if(ui.getId()==id)
////			 {
////				 ui.setName("Likki");
////			 }
////		 }
		
		for(int i=0;i<u.size();i++)
		{
			
			if(u.get(i).getId()==user.getId())
			{
				u.get(i).setName(user.getName());
			}
		}
		 return u;
	} 
}
