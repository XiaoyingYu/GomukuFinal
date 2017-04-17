package eud.pitt.webproject2.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the gomoku_games database table.
 * 
 */
@Entity
@Table(name="gomoku_games")
@NamedQuery(name="GomokuGame.findAll", query="SELECT g FROM GomokuGame g")
public class GomokuGame implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private Timestamp endTime;

	private int moves;

	private Timestamp startTime;

	@Column(name="time_of_the_game")
	private int timeOfTheGame;

	private int userID;

	@Column(name="win_or_lose")
	private String winOrLose;

	public GomokuGame() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Timestamp getEndTime() {
		return this.endTime;
	}

	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}

	public int getMoves() {
		return this.moves;
	}

	public void setMoves(int moves) {
		this.moves = moves;
	}

	public Timestamp getStartTime() {
		return this.startTime;
	}

	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}

	public int getTimeOfTheGame() {
		return this.timeOfTheGame;
	}

	public void setTimeOfTheGame(int timeOfTheGame) {
		this.timeOfTheGame = timeOfTheGame;
	}

	public int getUserID() {
		return this.userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getWinOrLose() {
		return this.winOrLose;
	}

	public void setWinOrLose(String winOrLose) {
		this.winOrLose = winOrLose;
	}

}