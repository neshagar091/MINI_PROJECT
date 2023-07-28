package com.example.BookMyStayProject.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

	@Entity
	@Table(name="Hotelbooked")
	public class Hotelbooked {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="HotelId")
		private int id;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getIn() {
			return in;
		}
		public void setIn(String in) {
			this.in = in;
		}
		public String getOut() {
			return out;
		}
		public void setOut(String out) {
			this.out = out;
		}
		public int getGuest() {
			return guest;
		}
		public void setGuest(int guest) {
			this.guest = guest;
		}
//		public int getDays() {
//			return days;
//		}
//		public void setDays(int days) {
//			this.days = days;
//		}
//		public String getType() {
//			return type;
//		}
//		public void setType(String type) {
//			this.type = type;
//		}
//		public int getPd() {
//			return pd;
//		}
//		public void setPd(int pd) {
//			this.pd = pd;
//		}
//		public int getTamt() {
//			return tamt;
//		}
//		public void setTamt(int tamt) {
//			this.tamt = tamt;
//		}
//		public String getName() {
//			return name;
//		}
//		public void setName(String name) {
//			this.name = name;
//		}
//		public String getMob() {
//			return mob;
//		}
//		public void setMob(String mob) {
//			this.mob = mob;
//		}
//		public String getEmail() {
//			return email;
//		}
//		public void setEmail(String email) {
//			this.email = email;
//		}
		@Column(name="CheckIn")
		private String in;
		
		@Column(name="CheckOut")
		private String out;
		
		@Column(name="Guests")
		private int guest;
		
		@Column(name="Children")
		private int children;
		
		@Column(name="Location")
		private String location;
//		@Column(name="Rooms")
//		private int rooms;
//		
//		public int getRooms() {
//			return rooms;
//		}
//		public void setRooms(int rooms) {
//			this.rooms = rooms;
//		}
//		@Column(name="Days")
//		private int days;
//		
//		@Column(name="Room Type")
//		private String type;
		
//		@Column(name="Price Default")
//		private int pd;
//		
//		@Column (name="Total Amount")
//		private int tamt;
//		
//		@Column (name="Name")
//		private String name;
		
//		@Column (name="Mobile")
//		private String mob;
//		
//		@Column (name="Email")
//		private String email;
		
		
		public int getChildren() {
			return children;
		}
		public void setChildren(int children) {
			this.children = children;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public Hotelbooked() {};
		public Hotelbooked (int children , String location , String in , String out , int guest , int rooms , int days , String type , int pd ,int tamt , String name , String mob , String email)
		{
			super();
			this.in=in;
			this.out=out;
			this.guest=guest;
			this.children = children;
			this.location = location;
//			this.rooms=rooms;
//			this.days = days;
//			this.type = type ;
//			this.tamt = tamt;
//			this.pd = pd ;
//			this.name = name ;
//			this.mob = mob;
//			this.email = email ;
		}
}