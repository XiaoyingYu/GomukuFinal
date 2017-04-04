package edu.pitt.webproject2.facade;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import edu.pitt.webproject2.User;

@Stateless
public class RegisterFacade {
	
	@PersistenceContext(unitName="WebProject")
	private EntityManager em;
	private List<User> userlist;
	private User user;
	
	public RegisterFacade(){
		super();
	}
	
	public String checkUser(String email){
		Query query = em.createQuery("SELECT email FROM gomoku.users u WHERE u.email = '" + email +"' ;");
		
		try{
			List<User> userlist = (List<User>) query.getResultList();
			User user = (User) query.getSingleResult();
			return user.getUserName();
		} catch (NoResultException e) {
			// System.out.println(query.toString());
			return null;
		}
		
	}
	
	public void addUserToDB(String userName, String email, String password){
		Query addQuery = em.createQuery("INSERT INTO gomoku_users ('username', 'email', 'password') "
				+ "VALUES ('" + userName + "', '" + email +"', '" + password +"');");
		
		try{
			addQuery.executeUpdate();
		} catch(PersistenceException e){
			e.printStackTrace();
		}
	}
	
	public int getUserID(String email, String password){
		Query query = em.createQuery("SELECT ID FROM gomoku.users u WHERE u.email = '" 
									+ email + "'AND u.password = '" + password + ";");
		
		try{
			List<User> userlist = (List<User>) query.getResultList();
			User user = (User) query.getSingleResult();
			return user.getUserID();
		} catch (NoResultException e) {
			// System.out.println(query.toString());
			return 0;
		}
		
	}
	
	public List<User> getUserlist() {
		return userlist;
	}
	
	
	public User getUser() {
		return user;
	}


}


