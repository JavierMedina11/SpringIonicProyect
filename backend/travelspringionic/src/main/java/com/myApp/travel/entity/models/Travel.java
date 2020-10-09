package com.myApp.travel.entity.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "places")
public class Travel {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column
	private String name;
	
	@Column
	private String subname;
	
	@Column
	private String descripcion2;
	
	@Column
	private String descripcion;
	
	@Column
	private String img1;
	
	public Travel() {
	}
	
	public Travel(int id, String name, String subname, String descripcion, String descripcion2, String img1, String img2, String img3) {
		super();
		this.id = id;
		this.name = name;
		this.subname = subname;
		this.descripcion = descripcion;
		this.descripcion2 = descripcion2;
		this.img1 = img1;
		this.img2 = img2;
		this.img3 = img3;
	}

	@Column
	private String img2;
	
	@Column
	private String img3;
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getSubname() {
		return subname;
	}

	public void setSubname(String subname) {
		this.subname = subname;
	}


	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDescripcion2() {
		return descripcion2;
	}

	public void setDescripcion2(String descripcion2) {
		this.descripcion2 = descripcion2;
	}

	public String getImg1() {
		return img1;
	}

	public void setImg1(String img1) {
		this.img1 = img1;
	}

	public String getImg2() {
		return img2;
	}

	public void setImg2(String img2) {
		this.img2 = img2;
	}

	public String getImg3() {
		return img3;
	}

	public void setImg3(String img3) {
		this.img3 = img3;
	}

}
