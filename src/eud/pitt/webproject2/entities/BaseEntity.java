package eud.pitt.webproject2.entities;

import java.io.Serializable;
import java.lang.Integer;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: BaseEntity
 *
 */
@Entity

public class BaseEntity implements Serializable {

	@Id
	private Integer ID;
	private String description;
	private static final long serialVersionUID = 1L;

	public BaseEntity() {
		super();
	}   
	public Integer getID() {
		return this.ID;
	}

	public void setID(Integer ID) {
		this.ID = ID;
	}   
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
   
}
