package eud.pitt.webproject2.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the gomoku_json database table.
 * 
 */
@Entity
@Table(name="gomoku_json")
@NamedQuery(name="GomokuJson.findAll", query="SELECT g FROM GomokuJson g")
public class GomokuJson implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Lob
	private String json;

	private int userID;

	public GomokuJson() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getJson() {
		return this.json;
	}

	public void setJson(String json) {
		this.json = json;
	}

	public int getUserID() {
		return this.userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

}