package com.example.BookMyStayProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BookMyStayProject.Entity.tokens;


public interface Token extends JpaRepository<tokens, Integer>
{

	Token save(Token tok);

}