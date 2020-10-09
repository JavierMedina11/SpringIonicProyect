package com.myApp.travel.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.myApp.travel.entity.models.Travel;

public interface ITravelDao extends CrudRepository<Travel, Integer> {
	
}