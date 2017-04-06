package edu.pitt.webproject2.facade;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import edu.pitt.webproject2.User;
import eud.pitt.webproject2.entities.GomokuUser;

@Stateless
public class RegisterFacade {
	
	@PersistenceContext(name="WebProject2")
	private EntityManager em;
	private List<User> userlist;
	private User user;
	
	public RegisterFacade(){
		super();
	}
	
	public String checkUser(String email){
//		Query query = em.createQuery("SELECT u FROM gomoku_users u WHERE u.email = '" + email +"' ;");
		
		try{
//			List<User> userlist = (List<User>) query.getResultList();
//			GomokuUser user = (GomokuUser) query.getSingleResult();
			GomokuUser user = (GomokuUser) em.createQuery("SELECT u FROM GomokuUser u WHERE u.email=:email").setParameter("email", email).getSingleResult();
//			GomokuUser user = em.find(GomokuUser.class, 1);
			System.out.println("--->" + user.getUsername());
			return user.getUsername();
		} catch (NoResultException e) {
			// System.out.println(query.toString());
			return null;
		}
		
	}
	
	public int addUserToDB(String userName, String email, String password){
//		Query addQuery = em.createQuery("INSERT INTO gomoku_users ('username', 'email', 'password') "
//				+ "VALUES ('" + userName + "', '" + email +"', '" + password +"');");
		GomokuUser user = new GomokuUser();
		user.setUsername(userName);
		user.setEmail(email);
		user.setPassword(password);
		
		try{
//			addQuery.executeUpdate();
			em.persist(user);
			em.flush();
			return user.getId();
		} catch(PersistenceException e){
			e.printStackTrace();
		}
		return 0;
	}
	
	public int getUserID(String email, String password){
		Query query = em.createQuery("SELECT ID FROM gomoku.users u WHERE u.email = '" 
									+ email + "'AND u.password = '" + password + "';");
		
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


