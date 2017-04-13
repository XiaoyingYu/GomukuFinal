package edu.pitt.webproject2.facade;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
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

}
