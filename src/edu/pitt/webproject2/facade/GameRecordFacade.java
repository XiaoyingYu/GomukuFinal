package edu.pitt.webproject2.facade;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import eud.pitt.webproject2.entities.GomokuGame;
import eud.pitt.webproject2.entities.GomokuJson;
import eud.pitt.webproject2.entities.GomokuUser;

@Stateless
public class GameRecordFacade {
	
	@PersistenceContext(name="WebProject2")
	private EntityManager em;
	
	
	public GameRecordFacade(){
		super();
	}
	
	public void addRecordToDB(int userID, String win, int time, int moves){
		
			GomokuGame game = new GomokuGame();
			game.setUserID(userID);
			game.setWinOrLose(win);
			game.setTimeOfTheGame(time);
			game.setMoves(moves);
			
			try{
				em.persist(game);
				em.flush();
			}catch(PersistenceException e){
				e.printStackTrace();
			}
	}
	
	public void addJsonToDB(int userID, String json){
		
		GomokuJson j = new GomokuJson();
		j.setUserID(userID);
		j.setJson(json);
		
		try{
			em.persist(j);
			em.flush();
		}catch(PersistenceException e){
			e.printStackTrace();
		}
	}
	
	public void coverJsonToDB(int userID, String json) {
		GomokuJson gomokuJson = (GomokuJson) em.createQuery("SELECT j FROM GomokuJson j WHERE j.userID=:userID")
				.setParameter("userID", userID).getSingleResult();
		gomokuJson.setJson(json);
		em.persist(gomokuJson);
	}
	
	public int checkUserInJson(int userID){
		try{
			GomokuJson j = (GomokuJson) em.createQuery("SELECT j FROM GomokuJson j WHERE j.userID=:userID")
					.setParameter("userID", userID).getSingleResult();
			return j.getUserID();
		} catch (NoResultException e) {
			return 0;
		}
	}
	
	public String returnJson(int userID){
		try{

//			GomokuJson j = (GomokuJson) em.createQuery("SELECT j FROM GomokuJson j WHERE j.userID=:userID")
//					.setParameter("userID", userID).getSingleResult();
			Query query = em.createQuery("SELECT j FROM GomokuJson j WHERE j.userID=:userID")
			.setParameter("userID", userID);
			List<GomokuJson> userGomokuList =  query.getResultList();
			GomokuJson userGomoku = userGomokuList.get(userGomokuList.size()-1);
			return userGomoku.getJson();

		} catch (NoResultException e) {
			return null;
		}
	}
	
	public void updateJson(int userID, String json){
		//GomokuJson j = new GomokuJson();
		em.getTransaction().begin();
		GomokuJson j = em.find(GomokuJson.class, userID);
		j.setJson(json);
		em.getTransaction().commit();
	}
	
	public void deleteJson(int userID){
		em.getTransaction().begin();
		GomokuJson j = em.find(GomokuJson.class, userID);
		em.remove(j);
		em.getTransaction().commit();
	}

	
	public int returnGameTimes(int userID){
		try{
			//GomokuJson j = new GomokuJson();
			int gameTimes = em.createQuery("SELECT COUNT(j) FROM GomokuJSON j WHERE j.userID=:userID")
					.setParameter("userID", userID).getFirstResult();
			return gameTimes;
		} catch (NoResultException e) {
			return 0;
		}
	}
	
	public int returnWinTimes(int userID) {
		try{
			//GomokuJson j = new GomokuJson();
			int winTimes = em.createQuery("SELECT COUNT(j) FROM GomokuJSON j WHERE j.userID=:userID AND j.win_or_lose=:win")
					.setParameter("userID", userID).setParameter("win_or_lose", "win").getFirstResult();
			return winTimes;
		} catch (NoResultException e) {
			return 0;
		}
	}
}
