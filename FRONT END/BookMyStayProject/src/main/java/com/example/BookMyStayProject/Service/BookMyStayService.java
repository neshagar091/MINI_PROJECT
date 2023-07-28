package com.example.BookMyStayProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BookMyStayProject.Entity.Hotel;
import com.example.BookMyStayProject.Entity.Hotelbooked;
import com.example.BookMyStayProject.Entity.Login;
import com.example.BookMyStayProject.Entity.tokens;
import com.example.BookMyStayProject.Repository.BookMyStayRepo;
import com.example.BookMyStayProject.Repository.HotelBookedRepo;
import com.example.BookMyStayProject.Repository.HotelRepo;
import com.example.BookMyStayProject.Repository.Token;

import jakarta.persistence.EntityManager;


@Service
public class BookMyStayService {
	@Autowired
	private BookMyStayRepo emp;
	
	@Autowired
	private HotelRepo hotel;
	
	@Autowired
	private HotelBookedRepo bookrepo;
	
	@Autowired
	private Token tokrepo;
	
	@Autowired
	EntityManager entityManager;
	
	public List<Login>getAllDetails()
	{
		return emp.findAll();
	}

	public Login savedetails(Login e) {
		return emp.save(e);
	}

	public List<Hotel> getAllHotels() {
		return hotel.findAll();
	}

	public List<Hotel> getHotelsByAddress(String address) {
		return hotel.findByAddress(address);
	}

	public List<Hotel> getHotelsByRate(int rate) {
		return hotel.findByRate(rate);
	}

	public List<Hotel> getHotelsByAme(String ame) {
		return hotel.findByAme(ame);
	}

	public List<Hotel> getHotelsByHname(String hname) {
		return hotel.findByHname(hname);
	}

	public List<Hotel> getHotelsByroom(String room) {
		return hotel.findByroom(room);
	}

	public List<Hotel> getHotelsByImagein(String imgin) {
		return hotel.findByImgin(imgin);
	}

	public Hotelbooked savebook(Hotelbooked book) {
		return bookrepo.save(book);
	}

	public List<Hotelbooked> getAllBook() {
		return bookrepo.findAll();
	}

	public tokens savetoken(tokens tok) {
		return tokrepo.save(tok);
		
	}

	
}