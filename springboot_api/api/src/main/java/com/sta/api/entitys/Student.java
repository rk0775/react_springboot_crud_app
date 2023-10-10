package com.sta.api.entitys;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="STUDENTS")
public class Student {
	@Id
	@Column(name="STUDENT_NAME",length=150)
	private String name;
	
	@Column(name="STUDENT_SAT_SCORE")
	private float satScore;
	
	@Column(name="PINCODE",length = 6)
	private String pincode;
	
	@Column(name="CITY",length=100)
	private String city;
	
	@Column(name="COUNTRY",length=100)
	private String country;
	
	@Column(name="ADDRESS")
	private String address;
	
	@Column(name="PASSED",length=15)
	private String passed;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getSatScore() {
		return satScore;
	}

	public void setSatScore(float satScore) {
		this.satScore = satScore;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassed() {
		return passed;
	}

	public void setPassed(String passed) {
		this.passed = passed;
	}

	@Override
	public String toString() {
		return "Student [name=" + name + ", satScore=" + satScore + ", pincode=" + pincode + ", city=" + city
				+ ", country=" + country + ", address=" + address + ", passed=" + passed + "]";
	}
}
