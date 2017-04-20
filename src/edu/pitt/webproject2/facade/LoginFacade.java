package edu.pitt.webproject2.facade;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import eud.pitt.webproject2.entities.GomokuGame;
import eud.pitt.webproject2.entities.GomokuUser;

@Stateless
public class LoginFacade {
	
	@PersistenceContext(unitName="WebProject2")
	private EntityManager em;
	
	
	public LoginFacade(){
		super();
	}
	
	public GomokuUser checkUserPass(String email, String password){
		
		try{
			GomokuUser user = (GomokuUser) em.createQuery("SELECT u FROM GomokuUser u WHERE u.email=:email AND u.password=:password")
					.setParameter("email", email).setParameter("password", password).getSingleResult();
			return user;
		} catch (NoResultException e) {
			return null;
		}
		
	}
	
	public int getUserWin(int userID){
		
		try{
			int userWinCount = em.createQuery("SELECT g FROM GomokuGame g WHERE g.userID=:userID  AND g.winOrLose=:res")
					.setParameter("userID", userID).setParameter("res", "win").getResultList().size();
			return userWinCount;
		} catch (NoResultException e) {
			return 0;
		}
		
	}
	
	public int getUserLoss(int userID){
		
		try{
			int userWinCount = em.createQuery("SELECT g FROM GomokuGame g WHERE g.userID=:userID AND g.winOrLose=:res")
					.setParameter("userID", userID).setParameter("res", "lose").getResultList().size();
			return userWinCount;
		} catch (NoResultException e) {
			return 0;
		}
		
	}

}
