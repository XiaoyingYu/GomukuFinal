package edu.pitt.webproject2;

import java.util.Date;

public class User {
	private int userID;
	private String userName;
	private String email;
	private String password;
	private int gameNumber;
	private int winNumber;
	private Date date;
	private int level;
	private int credits;
	
	public User(){}
	
	public User(String email){
		this.email = email;
	}
	
	public User(String email, String password){
		this.email = email;
		this.password = password;
	}
	
	public User(String userName, String email, String password){
		this.userName = userName;
		this.email = email;
		this.password = password;
	}
	
	public User(int userID, String userName, String email, String password){
		this.userID = userID;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}
	
	public User(int userID, String userName, String email, String password, Date date){
		this.userID = userID;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.date = date;
	}
	
	public User(int userID, String userName, String email, String password, Date date, 
			int gameNumber, int winNumber, int level, int credits){
		this.userID = userID;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.date = date;
		this.gameNumber = gameNumber;
		this.winNumber = winNumber;
		this.level = level;
		this.credits = credits;
	}
	
	

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getGameNumber() {
		return gameNumber;
	}

	public void setGameNumber(int gameNumber) {
		this.gameNumber = gameNumber;
	}

	public int getWinNumber() {
		return winNumber;
	}

	public void setWinNumber(int winNumber) {
		this.winNumber = winNumber;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getCredits() {
		return credits;
	}

	public void setCredits(int credits) {
		this.credits = credits;
	}
	

}

