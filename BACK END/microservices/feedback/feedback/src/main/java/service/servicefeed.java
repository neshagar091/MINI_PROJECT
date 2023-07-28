package service;

import org.springframework.beans.factory.annotation.Autowired;

import Entity.entityfeed;
import repo.repofeed;

public class servicefeed {

	@Autowired
	private repofeed repo;
	public entityfeed savetoken(entityfeed tok) {
		return repo.save(tok);
		
	}


}
