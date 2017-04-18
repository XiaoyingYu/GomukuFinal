package eud.pitt.webproject2.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the gomoku_users database table.
 * 
 */
@Entity
@Table(name="gomoku_users")
@NamedQuery(name="GomokuUser.findAll", query="SELECT g FROM GomokuUser g")
public class GomokuUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private int credits;

	private Timestamp date;

	private String email;

	@Column(name="game_num")
	private int gameNum;

	private int level;

	private String password;

	private String username;

	@Column(name="win_num")
	private int winNum;

	public GomokuUser() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCredits() {
		return this.credits;
	}

	public void setCredits(int credits) {
		this.credits = credits;
	}

	public Timestamp getDate() {
		return this.date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getGameNum() {
		return this.gameNum;
	}

	public void setGameNum(int gameNum) {
		this.gameNum = gameNum;
	}

	public int getLevel() {
		return this.level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getWinNum() {
		return this.winNum;
	}

	public void setWinNum(int winNum) {
		this.winNum = winNum;
	}

}