package edu.pitt.webproject2.facade;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;

import eud.pitt.webproject2.entities.GomokuGame;
import eud.pitt.webproject2.entities.GomokuJson;

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
		
		GomokuJson json = new GomokuJson();
		json.setUserID(userID);
		json.setJson(json);
		
		try{
			em.persist(json);
			em.flush();
		}catch(PersistenceException e){
			e.printStackTrace();
		}
	}
}
