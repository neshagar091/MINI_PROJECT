package com.example.BookMyStayProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BookMyStayProject.Entity.Hotelbooked;


public interface HotelBookedRepo extends JpaRepository<Hotelbooked, Integer>{

}