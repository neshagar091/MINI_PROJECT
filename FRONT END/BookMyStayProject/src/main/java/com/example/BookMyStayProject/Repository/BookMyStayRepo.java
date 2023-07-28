package com.example.BookMyStayProject.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BookMyStayProject.Entity.Login;


public interface BookMyStayRepo extends JpaRepository<Login, Integer> 
{

}