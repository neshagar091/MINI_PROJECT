package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import Entity.entityfeed;
import service.servicefeed;

public class controllerfeed {
	
	@Autowired
	private servicefeed feed;
	@PostMapping("/book")
	public String savetoken(@RequestBody entityfeed tok)
	{
		feed.savetoken(tok);
		return "saved";
	}
}
